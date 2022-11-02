import { mount } from "../mount";
import { TopActiveDebt } from "../../../src/pages/TopActiveDebt";
import { sortData } from "../../../src/components/DebtsList/services/sortTableData";
import { Order } from "../../../src/types/Table";
import { columns } from "../../../src/components/DebtsList/constants/columns";
import {
    debts,
    expectToHaveCells,
    filteredDebts,
    mappedDebts,
    waitForLoadingToDisappear,
} from "../../helpers/testHelpers";

describe("<TopActiveDebt/>", () => {
    it("load search bar menu", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();

        cy.findByRole("button", { name: "Szukaj" }).should("exist");
        cy.findByTestId("search").should("exist");
    });

    it("should load table with top debts data", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();

        expectToHaveCells(debts);
    });

    it("should load columns", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();

        const tableColumns = cy.findAllByTestId("column").filter("td");
        tableColumns.each((column, index) => {
            expect(column.text().trim()).equal(columns[index].label);
        });
    });

    it("should not change data after typing less than 3 characters", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();

        cy.findByTestId("search").type("ma");
        cy.findByRole("button", { name: "Szukaj" }).click();
        expectToHaveCells(debts);
    });

    it("should display searched data in table", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();

        const searchedWord = "Marcin";

        const debts = sortData(filteredDebts(searchedWord), Order.ascending, 0);

        cy.findByTestId("search").type(searchedWord);
        cy.findByRole("button", { name: "Szukaj" })
            .click()
            .wait(5000)
            .then(() => {
                expectToHaveCells(debts);
            });
    });

    it("should sort data by NIP column", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();
        const debtsSortedByNIP = sortData(mappedDebts, Order.ascending, 1);
        cy.findByText(columns[1].label)
            .click()
            .then(() => {
                expectToHaveCells(debtsSortedByNIP);
            });
    });
    it("should sort data by Name column descending", () => {
        mount(<TopActiveDebt />);
        waitForLoadingToDisappear();
        const debtsSortedByNIP = sortData(mappedDebts, Order.descending, 0);
        cy.findByText(columns[0].label)
            .click()
            .then(() => {
                expectToHaveCells(debtsSortedByNIP);
            });
    });
});
