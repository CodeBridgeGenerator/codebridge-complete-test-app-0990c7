import React from "react";
import { render, screen } from "@testing-library/react";

import ArrayfieldsEditDialogComponent from "../ArrayfieldsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders arrayfields edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArrayfieldsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("arrayfields-edit-dialog-component")).toBeInTheDocument();
});
