import styled from 'styled-components';

/* eslint-disable-next-line */
export interface KintsugiProps {}

const StyledKintsugi = styled.div`
  color: pink;
`;

export function Kintsugi(props: KintsugiProps) {
  return (
    <StyledKintsugi>
      <h1>Welcome to Kintsugi!</h1>
    </StyledKintsugi>
  );
}

export default Kintsugi;
