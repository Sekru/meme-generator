import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  queryByAttribute,
} from "react-testing-library";
import ImageComponent from "./imageComponent";

test("Uploading file should show its size", () => {
  const getById = queryByAttribute.bind(null, "id");

  const dom = render(<ImageComponent />);
  const table = getById(dom.container, "idImg");

  //const dom = render(<App />);

  const file = new File(["(⌐□_□)"], "chucknorris.png", {
    type: "image/png",
  });

  // throws error
  //inputEl.files = [file];

  Object.defineProperty(table, "files", {
    value: [file],
  });

  fireEvent.change(table);

  getByText("Uploaded file size is chucknorris.png");
});
