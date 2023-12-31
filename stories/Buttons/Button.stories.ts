import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      label: '¡Call to action!',
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
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: '¡Call to action!',
    color:'primary',
    variant:'contained',
  },
}

export const Secondary: Story = {
  args: {
    label: '¡Call to action!',
    color:'primary',
    variant:'outlined',
  },
}

export const Text: Story = {
  args: {
    label: '¡Call to action!',
    color:'secondary',
    variant:'text',
  },
}

export const Disabled: Story = {
  args: {
    label: '¡Call to action!',
    color:'primary',
    variant:'disabled',
  },
}

export const Small: Story = {
  args: {
    label: '¡Call to action!',
    color:'primary',
    variant:'contained',
    size: 'small',
  },
}
