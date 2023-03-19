import { PropsWithChildren } from 'react';

interface AccordionProps {
  title: string;
  onPress?(): void;
}

export type iAccordion = PropsWithChildren<AccordionProps>;
