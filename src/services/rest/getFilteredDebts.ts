import { baseUrl } from "../../pages/TopActiveDebt/hooks/constants";

const fetchFilteredDebts = async (filter: string) => {
    const debtsFiltered = await fetch(`${baseUrl}/GetFilteredDebts`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            filter: filter,
        }),
    });
    return await debtsFiltered.json();
};

export { fetchFilteredDebts };
