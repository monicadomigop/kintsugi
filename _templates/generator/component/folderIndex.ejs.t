---
inject: true
to: packages/lib/kintsugi/src/index.ts
before: // Autogenerated <%= folder %> above this comment.
---
<%
  FolderName = h.changeCase.kebabCase(name)
-%>
  export { <%= Name %> } from './<%= folder %>/<%= h.changeCase.kebabCase(name) %>';

