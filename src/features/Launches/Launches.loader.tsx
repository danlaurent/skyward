import { Launches } from "./Launches";
import { useGetPastLaunchesQuery } from "../../services/spaceX";
import { Layout } from "../../components/Layout";

export const LaunchesLoader = () => {
  const { data, error, isLoading, refetch } = useGetPastLaunchesQuery(null);

  return (
    <Layout loading={isLoading} error={error} onRetryPress={() => refetch()}>
      {data && <Launches launches={data} />}
    </Layout>
  );
};
