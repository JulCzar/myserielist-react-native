import {
  RouteProp,
  useRoute as useRouteNative,
} from '@react-navigation/native';
import { ParamsList } from '../routes/ParamsList';

export const useRoute = <T extends keyof ParamsList>(_routeName: T) => {
  return useRouteNative<RouteProp<ParamsList, T>>();
};
