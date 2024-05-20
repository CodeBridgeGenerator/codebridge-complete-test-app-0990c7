import React from "react";
import { render, screen } from "@testing-library/react";

import ArrayfieldsCreateDialogComponent from "../ArrayfieldsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arrayfields create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArrayfieldsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arrayfields-create-dialog-component")).toBeInTheDocument();
});
