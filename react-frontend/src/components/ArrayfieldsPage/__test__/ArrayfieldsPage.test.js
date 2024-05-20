import React from "react";
import { render, screen } from "@testing-library/react";

import ArrayfieldsPage from "../ArrayfieldsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arrayfields page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArrayfieldsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arrayfields-datatable")).toBeInTheDocument();
    expect(screen.getByRole("arrayfields-add-button")).toBeInTheDocument();
});
