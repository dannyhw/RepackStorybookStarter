import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from './Button';
import { LoginHeader } from './LoginHeader';
import { TextInput } from './TextInput';

export type LoginScreenProps = {
  onLogin?: (email: string, password: string) => void;
  onCreateAccount?: () => void;
  loading?: boolean;
};

export function LoginScreen({
  onLogin,
  onCreateAccount,
  loading = false,
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <LoginHeader />

        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.forgotPassword}>Forgot password?</Text>

        <View style={styles.buttons}>
          <Button
            title="Log In"
            onPress={() => onLogin?.(email, password)}
            loading={loading}
          />
          <Button
            title="Create Account"
            variant="secondary"
            onPress={onCreateAccount}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#3B82F6',
    textAlign: 'right',
    marginBottom: 24,
  },
  buttons: {
    gap: 12,
  },
});
