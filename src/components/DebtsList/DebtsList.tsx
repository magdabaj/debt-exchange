import { Debt } from "../../types/Debt";

type Props = {
    debts: Debt[]
}

const DebtsList = ({ debts }: Props) => {
    return (<>
        {debts?.map(debt =>
            <div key={debt.Id}>{debt.Name}</div>
        )}
    </>);
};

export { DebtsList };