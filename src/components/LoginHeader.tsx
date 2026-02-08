import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type LoginHeaderProps = {
  title?: string;
  subtitle?: string;
};

export function LoginHeader({
  title = 'Welcome Back',
  subtitle = 'Sign in to your account',
}: LoginHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
});
