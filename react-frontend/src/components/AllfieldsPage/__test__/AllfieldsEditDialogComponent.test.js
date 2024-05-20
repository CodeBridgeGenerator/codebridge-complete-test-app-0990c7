import React from "react";
import { render, screen } from "@testing-library/react";

import AllfieldsEditDialogComponent from "../AllfieldsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders allfields edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AllfieldsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("allfields-edit-dialog-component")).toBeInTheDocument();
});
