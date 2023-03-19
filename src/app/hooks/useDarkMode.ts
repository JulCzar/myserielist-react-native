import { useColorScheme } from 'react-native';

export const useDarkMode = () => {
  const colorSchema = useColorScheme();

  return colorSchema === 'dark';
};
