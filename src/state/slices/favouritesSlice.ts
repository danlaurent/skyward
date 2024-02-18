import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Launch } from "../../services/types";

const initialState = {
  flightNumbers: [] as Launch["flight_number"][],
  launches: [] as Launch[],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Launch>) => {
      if (state.flightNumbers.includes(action.payload.flight_number)) {
        state.flightNumbers = state.flightNumbers.filter(
          (flightNumber) => flightNumber !== action.payload.flight_number
        );
        state.launches = state.launches.filter(
          (launch) => launch.flight_number !== action.payload.flight_number
        );
      } else {
        state.flightNumbers.push(action.payload.flight_number);
        state.launches.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
