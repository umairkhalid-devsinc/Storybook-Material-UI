/*
    This example does not work for generating controls
    The difference between this example and the working example in "Button.stories.tsx"
    Is that this imports the button component directly from @mui/material
    whereas, "Button.stories.tsx" imports a local component that wraps the MUI button.

    This is likely to do with how ReactDocGen works and will need some investigation
*/

import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'Mui/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'click me',
  },
};
