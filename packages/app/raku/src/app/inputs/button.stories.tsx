import { Meta, Story } from '@storybook/react';
import { Button } from '@kintsugi';

export default {
  component: Button,
} as Meta;

const ButtonPlayground: Story = (args) => <Button {...args}>Button</Button>;

export const Playground = ButtonPlayground.bind({});
Playground.args = {};
