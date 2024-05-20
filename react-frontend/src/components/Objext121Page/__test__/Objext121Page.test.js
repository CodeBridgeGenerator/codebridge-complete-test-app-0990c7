import React from "react";
import { render, screen } from "@testing-library/react";

import Objext121Page from "../Objext121Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders objext121 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Objext121Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("objext121-datatable")).toBeInTheDocument();
    expect(screen.getByRole("objext121-add-button")).toBeInTheDocument();
});
