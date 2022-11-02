import { rest } from "msw";
import { topDebts } from "./mockedData";
import { baseUrl } from "../../src/pages/TopActiveDebt/hooks/constants";
import { filterDebts } from "../helpers/testHelpers";

const getTopDebtsHandler = rest.get(`${baseUrl}/GetTopDebts`, (_, res, ctx) =>
    res(ctx.json(topDebts))
);
const getFilteredDebtsHandler = rest.post(
    `${baseUrl}/GetFilteredDebts`,
    (req, res, ctx) => {
        const { filter } = req.body as { filter: string };

        const response = filterDebts(topDebts, filter);
        res(ctx.status(200), ctx.json(response));
    }
);

const defaultHandlers = [getTopDebtsHandler, getFilteredDebtsHandler];

export { defaultHandlers };
