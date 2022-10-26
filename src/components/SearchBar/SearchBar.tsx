import "./index.css";
import React, { forwardRef } from "react";

const SearchBar = forwardRef<HTMLInputElement, { onSearch: (value: string) => void }>(({ onSearch }, ref) => {

        const onValueChanged = (event: React.FormEvent<HTMLInputElement>) => {
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