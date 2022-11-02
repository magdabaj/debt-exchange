import { Debt } from "../../../types/Debt";

const mapDebtsToTableData = (debt: Debt) => [
    debt.Name,
    debt.NIP,
    debt.Value,
    debt.Date,
];

export { mapDebtsToTableData };
