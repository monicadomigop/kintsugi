---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name)%>.spec.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
  name = h.changeCase.camelCase(name)
  FolderName = h.changeCase.kebabCase(name)
-%>
import { render, screen } from '@testing-library/react';

import { <%= Name %>, <%= name %>TestId } from '../<%= FolderName %>';

describe('<%= Name %> component', () => {
  it('should render successfully', () => {
    render(<<%= Name %> />);
    const <%= name %>Element = screen.getByTestId(<%= name %>TestId);
    expect(<%= name %>Element).toBeInTheDocument();
  });
});
