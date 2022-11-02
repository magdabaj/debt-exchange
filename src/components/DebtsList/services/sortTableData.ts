import { Order, RowType } from "../../../types/Table";

const sortData = (data: RowType[], order: Order, sortField: number) =>
    data.sort(
        (a, b) =>
            a[sortField]
                .toString()
                .localeCompare(b[sortField].toString(), "pl", {
                    numeric: true,
                }) * (order === Order.ascending ? 1 : -1)
    );

export { sortData };
