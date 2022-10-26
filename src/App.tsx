import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TopActiveDebt } from "./pages/TopActiveDebt";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TopActiveDebt />
    </QueryClientProvider>
);

export default App;
