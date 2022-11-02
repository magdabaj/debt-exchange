import { Order } from "../../../types/Table";
import { mapDebtsToTableData } from "../services/mapDebtsToTableData";
import { sortData } from "../services/sortTableData";
import { Debt } from "../../../types/Debt";
import { useCallback, useMemo, useState } from "react";

const useSortData = (debts: Debt[]) => {
    const [sortField, setSortField] = useState<number>(0);
    const [order, setOrder] = useState<Order>(Order.ascending);
    const [data, setData] = useState<(string | number)[][]>([]);

    useMemo(() => {
        const mappedData = debts.map(mapDebtsToTableData);
        const sortedData = sortData(mappedData, order, sortField);
        setData(sortedData);
    }, [debts, order, sortField]);

    const handleSortData = useCallback(
        (sortField: number, sortOrder: Order) => {
            const sorted = sortData(data, sortOrder, sortField);
            setData(sorted);
        },
        [data]
    );

    const handleSortingChange = (accessor: number) => {
        const sortOrder =
            accessor === sortField && order === Order.ascending
                ? Order.descending
                : Order.ascending;
        setSortField(accessor);
        setOrder(sortOrder);
        handleSortData(accessor, sortOrder);
    };

    return { data, handleSortingChange };
};

export { useSortData };
