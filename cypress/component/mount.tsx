import { QueryClient, QueryClientProvider } from "react-query";
import { PropsWithChildren, ReactElement } from "react";
import { mount, unmount } from "@cypress/react18";

const ContainerWrapper = ({
    children,
    queryClient,
}: PropsWithChildren<{ queryClient: QueryClient }>) => (
    <QueryClientProvider client={queryClient}>
        <div>{children}</div>
    </QueryClientProvider>
);

const customMount = (ui: ReactElement, queryClient = new QueryClient()) =>
    mount(<ContainerWrapper queryClient={queryClient}>{ui}</ContainerWrapper>);

export { customMount as mount, unmount };
