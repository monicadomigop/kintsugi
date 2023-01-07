import { FC } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonContainer } from './styles';

export const Button: FC<ButtonProps> = ({
  'data-testid': dataTestId = 'buttonTestId',
  size = 'large',
  variant = 'primary',
  children,
}): JSX.Element => {
  return (
    <ButtonContainer size={size} variant={variant} data-testid={dataTestId}>
      {children}
    </ButtonContainer>
  );
};
