import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import Form from "../components/Form";

export default function SharedLayout() {
    return (
        <>
            <Header />
            <main className="grid container">
                <NavMenu />
                <Form />
                <Outlet />
            </main>
        </>
    );
}
