import { act, renderHook } from "@testing-library/react-native";
import { useFavourites } from "../useFavourites";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import { ReactNode } from "react";
import { launchesMock } from "../../../__mocks__/launches";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe("useFavourites", () => {
  describe("when there are no favourites", () => {
    it("should return the initial state", () => {
      const { result } = renderHook(() => useFavourites(), {
        wrapper: Wrapper,
      });

      expect(result.current.favouriteFlightNumbers).toEqual([]);
      expect(result.current.favouriteLaunches).toEqual([]);
    });
  });

  describe("when toggleFavourites is used", () => {
    it("should toggle the favourite passed as argument", () => {
      const { result } = renderHook(() => useFavourites(), {
        wrapper: Wrapper,
      });
      act(() => {
        result.current.toggleFavourites(launchesMock[0]);
      });

      expect(result.current.favouriteFlightNumbers).toEqual([
        launchesMock[0].flight_number,
      ]);
      expect(result.current.favouriteLaunches).toEqual([launchesMock[0]]);

      act(() => {
        result.current.toggleFavourites(launchesMock[0]);
      });

      expect(result.current.favouriteFlightNumbers).toEqual([]);
      expect(result.current.favouriteLaunches).toEqual([]);
    });

    it("should persist the favourites in the local storage", () => {
      const { result } = renderHook(() => useFavourites(), {
        wrapper: Wrapper,
      });

      act(() => {
        result.current.toggleFavourites(launchesMock[0]);
      });

      expect(AsyncStorage.getItem).toHaveBeenCalledWith("persist:root");

      const { result: newResult } = renderHook(() => useFavourites(), {
        wrapper: Wrapper,
      });

      expect(newResult.current.favouriteFlightNumbers).toEqual([
        launchesMock[0].flight_number,
      ]);
      expect(newResult.current.favouriteLaunches).toEqual([launchesMock[0]]);
    });
  });
});
