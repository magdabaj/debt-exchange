import { Debt } from "../../../types/Debt";
import { useTopActiveDebts } from "./useTopActiveDebts";
import { useEffect, useState } from "react";
import { debtsService } from "../../../services/debtsService";
import { fetchFilteredDebts } from "../../../services/rest/getFilteredDebts";

const getFilteredDebts = async (
    filter: string,
    setFilteredDebtsLoading: (value: boolean) => void,
    setDebts: (data: Debt[]) => void
) => {
    setFilteredDebtsLoading(true);
    const debtsFiltered = await fetchFilteredDebts(filter);

    const debtsData = debtsFiltered.map(debtsService.mapServerDebtToDebt);
    setDebts(debtsData ?? []);
    setFilteredDebtsLoading(false);
};

const useFilteredDebts = (filter?: string) => {
    const [debts, setDebts] = useState<Debt[]>([]);
    const [isFilteredDebtsLoading, setFilteredDebtsLoading] = useState(false);

    const { isLoading, error, data } = useTopActiveDebts();

    useEffect(() => {
        if (!filter || filter.length < 3) {
            setFilteredDebtsLoading(false);
            setDebts(data ?? []);
            return;
        }
        getFilteredDebts(filter, setFilteredDebtsLoading, setDebts);
    }, [filter, data]);

    return { debts, isLoading: isFilteredDebtsLoading || isLoading, error };
};

export { useFilteredDebts };
