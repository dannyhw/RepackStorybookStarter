import { action } from 'storybook/actions';
import type { Meta, StoryObj } from '@storybook/react-native';
import { LoginScreen } from './LoginScreen';

const meta = {
  title: 'Login/LoginScreen',
  component: LoginScreen,
  args: {
    onLogin: action('onLogin'),
    onCreateAccount: action('onCreateAccount'),
  },
} satisfies Meta<typeof LoginScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
