import { styled } from 'nativewind';
import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import NativeWindButton from './NativeWindButton';

const StyledView = styled(View);

const StyledText = styled(Text);

const StyledRoot: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledView className='items-center justify-center flex-1 bg-gray-50 mb-4'>
    {children}
  </StyledView>
);

const Section: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledView className='mb-2.5'>{children}</StyledView>
);

const Title: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledText className='text-2xl font-bold'>{children}</StyledText>
);

const Row: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledView className='flex-row justify-around items-center flex-wrap mb-2.5'>
    {children}
  </StyledView>
);

const NativeWind = () => {
  return (
    <StyledRoot>
      <Section>
        <Title>Native Tailwind</Title>
        <Row>
          <NativeWindButton
            style={{
              width: '100%',
            }}
            variant='contained'
            color='primary'
          >
            Contained-Primary
          </NativeWindButton>
          <NativeWindButton variant='contained' color='secondary'>
            Contained-Secondary
          </NativeWindButton>
          <NativeWindButton disabled variant='contained' color='tertiary'>
            Contained-Tertiary
          </NativeWindButton>
        </Row>
        <Row>
          <NativeWindButton variant='outlined' color='primary'>
            outlined-Primary
          </NativeWindButton>
          <NativeWindButton variant='outlined' color='secondary'>
            outlined-Secondary
          </NativeWindButton>
          <NativeWindButton disabled variant='outlined' color='tertiary'>
            outlined-Tertiary
          </NativeWindButton>
        </Row>
        <Row>
          <NativeWindButton variant='text' color='primary'>
            text-Primary
          </NativeWindButton>
          <NativeWindButton variant='text' color='secondary'>
            text-Secondary
          </NativeWindButton>
          <NativeWindButton disabled variant='text' color='tertiary'>
            text-Tertiary
          </NativeWindButton>
        </Row>
      </Section>
    </StyledRoot>
  );
};

export default NativeWind;
