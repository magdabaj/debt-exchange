import { Order, RowType } from "../../src/types/Table";
import { topDebts } from "../handlers/mockedData";
import { debtsService } from "../../src/services/debtsService";
import { mapDebtsToTableData } from "../../src/components/DebtsList/services/mapDebtsToTableData";
import { sortData } from "../../src/components/DebtsList/services/sortTableData";
import { Debt } from "../../src/types/Debt";

const expectToHaveCells = (debts: RowType[]) => {
    const cells = cy.findAllByTestId("cell").filter("td");
    cells.each((cell, index) => {
        expect(cell.text().trim()).equal(debts.flat(1)[index].toString());
    });
};
const waitForLoadingToDisappear = () =>
    cy.findByTestId("loader").should("not.exist");

const mappedDebts = topDebts
    .map(debtsService.mapServerDebtToDebt)
    .map(mapDebtsToTableData);

const debts = sortData(mappedDebts, Order.ascending, 0);

const filterDebts = (debts: Debt[], searchedWord: string) =>
    debts.filter(
        (debt) =>
            debt.NIP.includes(searchedWord) ||
            debt.Value.toString().includes(searchedWord) ||
            debt.Name.includes(searchedWord)
    );

const filteredDebts = (searchedWord: string) =>
    filterDebts(topDebts, searchedWord)
        .map(debtsService.mapServerDebtToDebt)
        .map(mapDebtsToTableData);

export {
    expectToHaveCells,
    waitForLoadingToDisappear,
    debts,
    mappedDebts,
    filteredDebts,
    filterDebts,
};
