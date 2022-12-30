import { PressableProps } from 'react-native';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends Omit<PressableProps, 'color' | 'variant' | 'children'> {
  variant: ButtonVariant;
  color: ButtonColor;
  children: React.ReactNode;
}
