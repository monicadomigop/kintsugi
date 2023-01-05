---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.kebabCase(name) %>/interfaces.ts
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
export interface <%= Name %>Props {
  /** Custom testId. */
  'data-testid'?: string;
}
