import {
  NavigationProp,
  useNavigation as useNavigationNative,
} from '@react-navigation/native';
import { ParamsList } from '../routes/ParamsList';

export const useNavigation = () => {
  return useNavigationNative<NavigationProp<ParamsList>>();
};
