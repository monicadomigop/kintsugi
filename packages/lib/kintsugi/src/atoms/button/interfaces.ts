import { ReactNode } from 'react';

type sizes = 'mini' | 'large';
type variants = 'primary' | 'secondary';

export interface ButtonProps {
  /** Custom testId. */
  'data-testid'?: string;
  size: sizes;
  variant: variants;
  children?: ReactNode;
}
