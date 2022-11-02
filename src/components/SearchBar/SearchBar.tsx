import "./index.css";
import { FormEvent, useEffect, useRef } from "react";

type Props = { onSearch: (value: string) => void };

const SearchBar = ({ onSearch }: Props) => {
    const searchValue = useRef<HTMLInputElement>(null);

    const onValueChanged = (event: FormEvent<HTMLInputElement>) => {
        onSearch(event.currentTarget.value);
    };

    const handleOnClick = () => onSearch(searchValue.current?.value ?? "");

    useEffect(() => {
        searchValue.current?.focus();
    }, []);

    return (
        <nav>
            <div>PODAJ NIP LUB NAZWĘ DŁUŻNIKA</div>
            <div className={"search"}>
                <input
                    ref={searchValue}
                    onChange={onValueChanged}
                    className={"search-input"}
                    type="text"
                    placeholder=""
                    data-testid={"search"}
                />
                <button className={"search-button"} onClick={handleOnClick}>
                    Szukaj
                </button>
            </div>
        </nav>
    );
};
export { SearchBar };
