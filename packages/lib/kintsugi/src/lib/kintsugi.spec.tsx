import { render } from '@testing-library/react';

import Kintsugi from './kintsugi';

describe('Kintsugi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Kintsugi />);
    expect(baseElement).toBeTruthy();
  });
});
