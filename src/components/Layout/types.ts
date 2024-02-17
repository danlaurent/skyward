import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { StyleProp, ViewStyle } from "react-native";

export interface LayoutProps {
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onRetryPress?: () => void;
}
