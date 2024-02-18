import { Launch } from "../../services/types";

export interface LaunchesListProps {
  launches: Launch[];
  onCardPress: (launch: Launch) => void;
  emptyListText?: string;
}
