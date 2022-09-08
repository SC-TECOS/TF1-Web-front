import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Initial render for the App", () => {
  let store;
  const useSelectorMock = jest.fn();
  const useDispatchMock = jest.fn();

  beforeEach(() => {
    store = mockStore({ programs: [] });
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
