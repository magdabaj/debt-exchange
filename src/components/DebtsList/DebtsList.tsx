import { Debt } from "../../types/Debt";
import "./index.css";
import { List } from "../List";
import { useSortData } from "./hooks/useSortData";

type Props = {
    debts: Debt[];
};

const DebtsList = ({ debts }: Props) => {
    const { data, handleSortingChange } = useSortData(debts);

    return <List data={data} onSort={handleSortingChange} />;
};

export { DebtsList };
