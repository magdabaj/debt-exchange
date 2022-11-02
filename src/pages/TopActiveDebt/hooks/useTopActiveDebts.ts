import { useQuery } from "react-query";
import { Debt } from "../../../types/Debt";
import { debtsService } from "../../../services/debtsService";
import { getTopActiveDebts } from "../../../services/rest/getTopActiveDebts";

const useTopActiveDebts = <T = Debt[]>(select?: (data: Debt[]) => T) =>
    useQuery<Debt[], unknown, T>(
        "topActiveDebts",
        async () => {
            const debts = await getTopActiveDebts();
            return debts.map(debtsService.mapServerDebtToDebt);
        },
        { select }
    );
export { useTopActiveDebts };
