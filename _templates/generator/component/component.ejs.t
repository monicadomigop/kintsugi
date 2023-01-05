---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
  name = h.changeCase.camelCase(name)
-%>
import { FC } from 'react';

import { <%= Name %>Props } from './interfaces';
import { <%= Name %>Wrapper } from './styles';

export const <%= name %>TestId = '<%= name %>Element';

export const <%= Name %>: FC<<%= Name %>Props> = ({
  'data-testid': dataTestId = <%= name %>TestId,
}): JSX.Element => {
  return (
    <<%= Name %>Container
      data-testid={dataTestId}
    />
  );
};
