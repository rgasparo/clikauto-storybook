import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'Example/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    label: {
      label: 'This is a title',
      description: 'Overwritten description',
    },
    color: {
      color: 'primary',
    },
    variant: {
      // control: 'contained',
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography >

export const H1: Story = {
  args: {
    label: 'This is a main title',
    variant:'h1',
    color:'info.main',
  },
}
export const H2: Story = {
  args: {
    label: 'This is a H2',
    variant:'h2',
  },
}
export const H3: Story = {
  args: {
    label: 'This is a h3',
    variant:'h3',
  },
}
export const H4: Story = {
  args: {
    label: 'This is a h4',
    variant:'h4',
  },
}
export const H5: Story = {
  args: {
    label: 'This is a h5',
    variant:'h5',
  },
}
export const H6: Story = {
  args: {
    label: 'This is a h6',
    variant:'h6',
  },
}
export const subtitle1: Story = {
  args: {
    label: 'This is a subtitle1',
    variant:'subtitle1',
  },
}
export const subtitle2: Story = {
  args: {
    label: 'This is a subtitle2',
    variant:'subtitle2',
  },
}
export const body1: Story = {
  args: {
    label: 'This is a subtitle2',
    variant:'body1',
  },
}
export const body2: Story = {
  args: {
    label: 'This is a subtitle2',
    variant:'body2',
  },
}
export const strong: Story = {
  args: {
    label: 'This is a subtitle2',
    variant:'strong',
  },
}
export const caption: Story = {
  args: {
    label: 'This is a subtitle2',
    variant:'caption',
  },
}
export const quote: Story = {
  args: {
    label: 'This is a subtitle2',
    variant: 'quote',
  },
}
export const buttonText: Story = {
  args: {
    label: 'This is a subtitle2',
    variant: 'button-text',
  },
}
export const linkText: Story = {
  args: {
    label: 'This is a subtitle2',
    variant: 'link-text',
  },
}

