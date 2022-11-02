import { Debt } from "../types/Debt";
import { dateOptions } from "./dateTimeFormatOption";

const mapServerDebtToDebt = (debt: Debt): Debt => ({
    ...debt,
    Date: new Date(debt.Date).toLocaleString("pl-PL", dateOptions),
});

const debtsService = { mapServerDebtToDebt };

export { debtsService };
