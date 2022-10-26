import "./index.css";
import { FormEvent, forwardRef } from "react";

type Props = { onSearch: (value: string) => void }

const SearchBar = forwardRef<HTMLInputElement, Props>(({ onSearch }, ref) => {

        const onValueChanged = (event: FormEvent<HTMLInputElement>) => {
            onSearch(event.currentTarget.value);
        };

        return (
            <nav>
                <div className={"search"}>
                    <input ref={ref} onChange={onValueChanged} className={"search-input"} type="text"
                           placeholder="Search.." />
                    <button className={"search-button"}>Szukaj</button>
                </div>
            </nav>
        );
    }
);
export { SearchBar };