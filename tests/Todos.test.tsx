import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import React from "react";
import { expect, test } from "vitest";
import { setupMSW } from "./setup-msw";
import Todos from "../src/components/Todos";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    const response = [
      {
        id: "1",
        title: "Todo Item",
        completed: true,
      },
    ];
    return HttpResponse.json(response);
  }),
];

setupMSW(handlers);

test("It renders list", async () => {
  render(<Todos />);
  const list = await screen.findByTestId("app");
  expect(list).toBeTruthy();
  const cell = screen.getByTestId("status");
  expect(cell.textContent).toEqual("completed");
});
