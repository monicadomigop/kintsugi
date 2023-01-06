---
to: packages/app/raku/src/app/<%= h.changeCase.kebabCase(folder) %>/<%= h.changeCase.kebabCase(name) %>.stories.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import { Meta, Story } from '@storybook/react';
import { <%= Name %> } from '@kintsugi';

export default {
  component: <%= Name %>,
} as Meta;

const <%= Name %>Playground: Story = (args) => <<%= Name %> {...args} />;

export const Playground = <%= Name %>Playground.bind({});
Playground.args = {};
