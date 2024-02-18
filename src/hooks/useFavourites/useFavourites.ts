import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { toggleFavourite } from "../../state/slices/favouritesSlice";
import { Launch } from "../../services/types";

export const useFavourites = () => {
  const favouriteFlightNumbers = useSelector(
    (state: RootState) => state.favourites.flightNumbers
  );
  const favouriteLaunches = useSelector(
    (state: RootState) => state.favourites.launches
  );
  const dispatch = useDispatch();

  const toggleFavourites = (launch: Launch) => {
    dispatch(toggleFavourite(launch));
  };

  return { favouriteFlightNumbers, favouriteLaunches, toggleFavourites };
};
