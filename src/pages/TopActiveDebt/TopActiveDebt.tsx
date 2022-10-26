import { useTopActiveDebts } from "./hooks/useTopActiveDebts";
import { WithLoadingAndError } from "../../components/WithLoadingAndError";
import { DebtsList } from "../../components/DebtsList";
import { Debt } from "../../types/Debt";
import { SearchBar } from "../../components/SearchBar";
import { useEffect, useRef, useState } from "react";

const ListWithLoading = WithLoadingAndError<{ debts: Debt[] }>(DebtsList);

const TopActiveDebt = () => {
    const { isLoading, error, data } = useTopActiveDebts();
    const [searchedValue, setSearchedValue] = useState("");
    const searchValue = useRef<HTMLInputElement>(null);

    console.log("data", data);
    const listProps = {
        debts: data
    };
    console.log("search value", searchValue);
    console.log("searched value", searchedValue);

    useEffect(() => {
        searchValue.current?.focus();
    }, []);

    return (
        <>
            <SearchBar ref={searchValue} onSearch={setSearchedValue} />
            <ListWithLoading isLoading={isLoading} error={error} {...listProps} />
        </>

    );

};

export { TopActiveDebt };