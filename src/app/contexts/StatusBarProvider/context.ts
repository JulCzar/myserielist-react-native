import { createContext, Dispatch, SetStateAction } from 'react';
import { StatusBarProps } from 'react-native';

interface StatusBarContextProps {
  setStatusBar: Dispatch<SetStateAction<StatusBarProps>>;
}

export const context = createContext<StatusBarContextProps>({
  setStatusBar: () => {},
});
