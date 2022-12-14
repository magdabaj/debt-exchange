import { RowType } from "../../../../types/Table";

type Props = {
    data: RowType;
};
const TableRow = ({ data }: Props) => {
    return (
        <tr>
            {data.map((item, i) => (
                <td data-testid={"cell"} key={i}>
                    {item.toString()}
                </td>
            ))}
        </tr>
    );
};

export { TableRow };
