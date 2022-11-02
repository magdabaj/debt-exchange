import { WithLoadingAndError } from "../../components/WithLoadingAndError";
import { DebtsList } from "../../components/DebtsList";
import { Debt } from "../../types/Debt";
import { SearchBar } from "../../components/SearchBar";
import { memo, useState } from "react";
import { useFilteredDebts } from "./hooks/useFilteredDebts";

const ListWithLoading = WithLoadingAndError<{ debts: Debt[] }>(DebtsList);

const TopActiveDebt = () => {
    const [filter, setFilter] = useState<string | undefined>(undefined);

    const { debts, isLoading, error } = useFilteredDebts(filter);

    const setFilterValue = (value: string) => {
        setFilter(value);
    };

    const listProps = {
        debts,
    };

    return (
        <>
            <SearchBar onSearch={setFilterValue} />
            <ListWithLoading
                isLoading={isLoading}
                error={error}
                {...listProps}
            />
        </>
    );
};

const MemoedTopActiveDebt = memo(TopActiveDebt);

export { MemoedTopActiveDebt as TopActiveDebt };
