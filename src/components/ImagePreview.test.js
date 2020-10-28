import React from "react";
import ReactDOM from "react-dom";
import ImagePreview from "./ImagePreview";
import { render, screen } from '@testing-library/react';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ImagePreview />, div);
});

it("renders author", () => {
    render(<ImagePreview author="Alexis" />);
    const author = screen.getByText(/Author: Alexis/i);
    expect(author).toBeInTheDocument();
})