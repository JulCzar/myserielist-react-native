import { useContext, useEffect } from 'react';
import { StatusBarProps } from 'react-native';
import { context as _context } from '../contexts/StatusBarProvider/context';
import { useNavigation } from './useNavigation';

export const useStatusBar = (props: StatusBarProps) => {
  const context = useContext(_context);
  const navigation = useNavigation();

  if (!context) {
    throw Error('useStatusBar must be used within StatusBarProvider');
  }

  useEffect(() => {
    let initialProps: StatusBarProps;

    context.setStatusBar?.(previous => {
      initialProps = previous;

      return props;
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      context.setStatusBar?.(initialProps);
    });

    const unsubscribeFocus = navigation.addListener('focus', () => {
      context.setStatusBar?.(props);
    });

    return () => {
      unsubscribeBlur();
      unsubscribeFocus();
      context.setStatusBar?.(initialProps);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.setStatusBar, JSON.stringify(props)]);
};
