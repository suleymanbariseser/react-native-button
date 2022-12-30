import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonColor, ButtonProps, ButtonVariant } from '../types';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const classes: Record<
  `${ButtonVariant}-${ButtonColor}`,
  {
    root: string;
    hoverRoot?: string;
    text: string;
  }
> = {
  'contained-primary': {
    root: 'bg-violet-800',
    text: 'text-white',
  },
  'contained-secondary': {
    root: 'bg-rose-800',
    text: 'text-white',
  },
  'contained-tertiary': {
    root: 'bg-emerald-800',
    text: 'text-white',
  },
  'outlined-primary': {
    root: 'bg-transparent border border-violet-800',
    hoverRoot: 'bg-violet-100',
    text: 'text-violet-800',
  },
  'outlined-secondary': {
    root: 'bg-transparent border border-rose-800',
    hoverRoot: 'bg-rose-100',
    text: 'text-rose-800',
  },
  'outlined-tertiary': {
    root: 'bg-transparent border border-emerald-800',
    hoverRoot: 'bg-emerald-100',
    text: 'text-emerald-800',
  },
  'text-primary': {
    root: 'bg-transparent',
    hoverRoot: 'bg-violet-100',
    text: 'text-violet-800',
  },
  'text-secondary': {
    root: 'bg-transparent',
    hoverRoot: 'bg-rose-100',
    text: 'text-rose-800',
  },
  'text-tertiary': {
    root: 'bg-transparent',
    hoverRoot: 'bg-emerald-100',
    text: 'text-emerald-800',
  },
};

const NativeWindButton: React.FC<ButtonProps> = ({
  children,
  color,
  variant,
  ...props
}) => {
  const getOpacity = (pressed) => {
    if (props.disabled) return 'opacity-50';
    if (pressed) return 'opacity-80';

    return 'opacity-100';
  };

  return (
    <Pressable onPress={console.log} {...props}>
      {({ pressed }) => (
        <StyledView
          className={`px-5 py-2.5 items-center justify-center rounded-md 
            ${getOpacity(pressed)}
            ${classes[`${variant}-${color}`].root}
            ${pressed && classes[`${variant}-${color}`].hoverRoot}
          `}
        >
          <StyledText className={classes[`${variant}-${color}`].text}>
            {children}
          </StyledText>
        </StyledView>
      )}
    </Pressable>
  );
};

export default NativeWindButton;

const styles = StyleSheet.create({});
