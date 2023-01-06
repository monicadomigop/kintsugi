---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.kebabCase(name) %>/styles.ts
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import styled from 'styled-components';

export const <%= Name %>Container = styled.div``;
