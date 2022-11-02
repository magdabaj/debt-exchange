import "./index.css";
import { FormEvent, useEffect, useRef } from "react";

type Props = { onSearch: (value: string) => void };

const SearchBar = ({ onSearch }: Props) => {
    const onValueChanged = (event: FormEvent<HTMLInputElement>) => {
        onSearch(event.currentTarget.value);
    };

    const searchValue = useRef<HTMLInputElement>(null);

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
                />
                <button className={"search-button"}>Szukaj</button>
            </div>
        </nav>
    );
};
export { SearchBar };
