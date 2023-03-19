import { useState } from 'react';

export const useAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(cs => !cs);
  };

  return {
    isExpanded,
    toggleExpand,
  };
};
