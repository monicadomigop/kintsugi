import styled from 'styled-components';
import { ButtonProps } from './interfaces';

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 10px;

  position: relative;
  width: 416.73px;
  height: 53px;

  /* Brand/Primary/Default */

  background: #00509d;
  border-radius: 4px;

  /* Label/14Label */

  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  /* Foundation/Typography/DarkMode/Primary */

  color: #ffffff;
`;
