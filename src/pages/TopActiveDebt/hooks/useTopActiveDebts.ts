import { useQuery } from "react-query";
import { Debt } from "../../../types/Debt";

const url = "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment";

const useTopActiveDebts =
    <T = Debt[]>(select?: (data: Debt[]) => T) =>
        useQuery<Debt[], unknown, T>(
            "topActiveDebts",
            () =>
                fetch(`${url}/GetTopDebts`).then(res =>
                    res.json()
                )
            , { select }
        );
export { useTopActiveDebts };