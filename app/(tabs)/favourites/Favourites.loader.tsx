import { Favourites } from "./Favourites";
import { Layout } from "../../../src/components/Layout";
import { useFavourites } from "../../../src/hooks/useFavourites";

export const FavouritesLoader = () => {
  const { favouriteLaunches } = useFavourites();

  return (
    <Layout>
      <Favourites favourites={favouriteLaunches} />
    </Layout>
  );
};
