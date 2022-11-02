import { Debt } from "../../types/Debt";
import { TableHeadItem } from "../List/components/TableHeadItem";
import { TableRow } from "../List/components/TableRow";
import "./index.css";
import { useCallback, useMemo, useState } from "react";
import { mapDebtsToTableData } from "./services/mapDebtsToTableData";
import { sortData } from "./services/sortTableData";
import { Order } from "../../types/Table";
import { columns } from "./constants/columns";

type Props = {
    debts: Debt[];
};

const DebtsList = ({ debts }: Props) => {
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

    console.log(data, "data");
    return (
        <div className={"table-container"}>
            <table>
                <thead>
                    <tr className={"head"}>
                        {columns.map(({ label, accessor, sortable }, i) => (
                            <TableHeadItem
                                key={accessor}
                                index={i}
                                item={label}
                                sortable={sortable}
                                onSort={handleSortingChange}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((debt, i) => (
                        <TableRow data={debt} key={i} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { DebtsList };
