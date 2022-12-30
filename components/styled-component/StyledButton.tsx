import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ButtonProps } from '../types';
import Color from 'color'
import styled from 'styled-components/native';

interface ButtonViewProps extends ButtonProps {
  pressed: boolean;
}

const ButtonView = styled(View)<ButtonViewProps>`
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  opacity: ${({ pressed, disabled }) => {
    if (disabled) return 0.5;
    if (pressed) return 0.8;

    return 1;
  }};

  background-color: ${({ theme, variant, color, pressed }) => {
    const backgroundColor = theme.palette[color].main;
      
    if (variant === 'contained') return backgroundColor;
    
    if (pressed) return Color(backgroundColor).alpha(0.1).toString();

    return 'transparent';
  }};

  border: ${({ theme, variant, color }) => {
    if (variant === 'outlined') return `1px solid ${theme.palette[color].main}`;

    return 'none';
  }};
`;

const ButtonText = styled(Text)<ButtonProps>`
  color: ${({ theme, variant, color: color }) => {
    if (variant === 'contained') return theme.palette[color].contrastText;

    return theme.palette[color].main;
  }};
  text-align: center;
  font-weight: 500;
`;

const StyledButton: React.FC<ButtonProps> = ({
  children,
  variant,
  color: color,
  ...props
}) => {
  return (
    <Pressable onPress={console.log} {...props}>
      {({ pressed }) => (
        <ButtonView
          variant={variant}
          color={color}
          pressed={pressed}
          {...props}
        >
          <ButtonText variant={variant} color={color}>
            {children}
          </ButtonText>
        </ButtonView>
      )}
    </Pressable>
  );
};

export default StyledButton;
