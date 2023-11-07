"use client";
import { Provider } from "react-redux";
import { store } from "./Store";
import { ReactNode } from "react";

type propTypes = {
    children: ReactNode
}
export function Providers({ children }: propTypes) {
    return <Provider store={store}>{children}</Provider>;
}