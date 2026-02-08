import type { Meta, StoryObj } from '@storybook/react-native';
import { LoginHeader } from './LoginHeader';

const meta = {
  title: 'Login/LoginHeader',
  component: LoginHeader,
} satisfies Meta<typeof LoginHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    title: 'Hello Again',
    subtitle: 'We missed you! Log in to continue.',
  },
};
