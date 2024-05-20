import React from "react";
import { render, screen } from "@testing-library/react";

import AllfieldsPage from "../AllfieldsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders allfields page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AllfieldsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("allfields-datatable")).toBeInTheDocument();
    expect(screen.getByRole("allfields-add-button")).toBeInTheDocument();
});
