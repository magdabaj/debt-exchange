import React from "react";

type Props = {
    isLoading: boolean,
    error: unknown
}

function WithLoadingAndError<T extends {}>(Component: React.ComponentType<T>) {
    return function WithLoadingComponent({ isLoading, error, ...props }: Props) {
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>An error occurred. Please try later</div>;
        return <Component {...props as T} />;
    };
}

export { WithLoadingAndError };