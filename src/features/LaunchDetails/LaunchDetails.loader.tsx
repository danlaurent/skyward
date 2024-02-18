import { useLocalSearchParams } from "expo-router";
import { LaunchDetails } from "./LaunchDetails";
import { useGetOneLaunchQuery } from "../../services/spaceX";
import { Layout } from "../../components/Layout";

export const LaunchDetailsLoader = () => {
  const { flightNumber } = useLocalSearchParams();
  const { data, error, isLoading, refetch } =
    useGetOneLaunchQuery(flightNumber);

  return (
    <Layout loading={isLoading} error={error} onRetryPress={() => refetch()}>
      {data && <LaunchDetails launch={data} />}
    </Layout>
  );
};
