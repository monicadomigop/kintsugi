---
to: packages/lib/kintsugi/src/<%= folder %>/<%= h.changeCase.kebabCase(name) %>/styles.ts
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import styled from 'styled-components';

import { <%= Name %>Props } from '../interfaces';

export const <%= Name %>Wrapper = styled.div<
  Partial<<%= Name %>Props>
>``;
