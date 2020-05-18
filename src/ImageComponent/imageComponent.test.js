import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  queryByAttribute,
} from "react-testing-library";

import ImageComponent from "./ImageComponent";

afterEach(cleanup);

test("should render image when input was filled", () => {
  const getById = queryByAttribute.bind(null, "id");
  global.URL.createObjectURL = jest.fn();
  const dom = render(<ImageComponent />);
  const table = getById(dom.container, "memUpload");

  const file = new File(["(⌐□_□)"], "chucknorris.png", {
    type: "image/png",
  });

  Object.defineProperty(table, "files", {
    value: [file],
  });

  fireEvent.change(table);

  setTimeout(() => {
    const domAfterFileUploaded = render(<ImageComponent />);
    expect(getById(domAfterFileUploaded.container, "idImg")).toBe(null);
  }, 2000);
});
