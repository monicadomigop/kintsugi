---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.pascalCase(name) %>/index.ts
---
<%
  FolderName = h.changeCase.kebabCase(name)
-%>
export * from './<%= FolderName %>'
export * from './styles';

