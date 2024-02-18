import { Launch } from "../../../services/types";
import * as hooks from "../useFavourites";

export interface MockUseFavouritesProps {
  favouriteFlightNumbers?: number[];
  favouriteLaunches?: Launch[];
  toggleFavourites?: jest.Mock;
}

export const mockUseFavourites = ({
  favouriteFlightNumbers = [],
  favouriteLaunches = [],
  toggleFavourites = jest.fn(),
}: MockUseFavouritesProps) =>
  jest.spyOn(hooks, "useFavourites").mockReturnValue({
    favouriteFlightNumbers,
    favouriteLaunches,
    toggleFavourites,
  });
