import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react-native";
import type { RenderOptions } from "@testing-library/react-native";
import { Provider } from "react-redux";
import type { RootState, StoreType } from "../../state/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store: StoreType;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store, ...renderOptions }: ExtendedRenderOptions
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
