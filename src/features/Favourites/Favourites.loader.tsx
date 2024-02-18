import { Favourites } from "./Favourites";
import { Layout } from "../../components/Layout";
import { useFavourites } from "../../hooks/useFavourites";

export const FavouritesLoader = () => {
  const { favouriteLaunches } = useFavourites();

  return (
    <Layout>
      <Favourites favourites={favouriteLaunches} />
    </Layout>
  );
};
