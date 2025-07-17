import { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import { Toast, type ToastProps } from '../../components/Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
    },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const Template = (args: ToastProps) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        className="mb-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => setShow(true)}
      >
        Show Toast
      </button>
      <Toast {...args} show={show} onClose={() => setShow(false)} />
    </>
  );
};

export const Success: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'success',
    message: 'Success',
    duration: 3000,
  },
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'error',
    message: 'Error',
    duration: 5000,
  },
};

export const Info: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'info',
    message: 'Info',
    duration: 4000,
  },
};

export const Warning: Story = {
  render: (args) => <Template {...args} />,
  args: {
    type: 'warning',
    message: 'Warning',
    duration: 3500,
  },
};
