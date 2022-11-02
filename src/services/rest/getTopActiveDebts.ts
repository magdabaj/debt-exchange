import { baseUrl } from "../../pages/TopActiveDebt/hooks/constants";

const getTopActiveDebts = async () => {
    const debts = await fetch(`${baseUrl}/GetTopDebts`);

    return await debts.json();
};

export { getTopActiveDebts };
