import React from "react";
import { Loader } from "../Loader";

type Props = {
    isLoading: boolean;
    error: unknown;
};

function WithLoadingAndError<T extends {}>(Component: React.ComponentType<T>) {
    return function WithLoadingComponent({
        isLoading,
        error,
        ...props
    }: Props) {
        if (isLoading) return <Loader />;
        if (error) return <div>An error occurred. Please try later</div>;
        return <Component {...(props as T)} />;
    };
}

export { WithLoadingAndError };
