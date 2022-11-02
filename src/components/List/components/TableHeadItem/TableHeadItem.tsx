type Props = {
    item: string;
    index: number;
    sortable: boolean;
    onSort: (value: number) => void;
};

const TableHeadItem = ({ item, index, sortable, onSort }: Props) => (
    <td
        data-testid={"column"}
        className={"head-item"}
        title={item}
        onClick={sortable ? () => onSort(index) : undefined}
    >
        {item}
    </td>
);

export { TableHeadItem };
