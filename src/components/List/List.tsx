import { columns } from "../DebtsList/constants/columns";
import { TableHeadItem } from "./components/TableHeadItem";
import { TableRow } from "./components/TableRow";
import { RowType } from "../../types/Table";
import { memo } from "react";

type Props = {
    onSort: (accessor: number) => void;
    data: RowType[];
};

const List = ({ onSort, data }: Props) =>
    (
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
                            onSort={onSort}
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

const MemoedList = memo(List);

export { MemoedList as List };
