import React from 'react';
import styled, { css } from '@emotion/native';
import { Theme, ThemeProvider } from '@emotion/react';
import EmotionButton from './EmotionButton';

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #f0f0f0;
  marginbottom: 20px;
`;

const Section = styled.Text`
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-vertical: 10px;
`;

const theme: Theme = {
  palette: {
    primary: {
      main: 'purple',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'red',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: 'orange',
      contrastText: '#ffffff',
    },
  },
};

const Emotion = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledView>
        <Section>
          <Title>Emotion</Title>
          <Row>
            <EmotionButton
              style={css`
              width: 100%;
            `}
              variant='contained'
              color='primary'
            >
              Contained-Primary
            </EmotionButton>
            <EmotionButton variant='contained' color='secondary'>
              Contained-Secondary
            </EmotionButton>
            <EmotionButton disabled variant='contained' color='tertiary'>
              Contained-Tertiary
            </EmotionButton>
          </Row>
          <Row>
            <EmotionButton variant='outlined' color='primary'>
              outlined-Primary
            </EmotionButton>
            <EmotionButton variant='outlined' color='secondary'>
              outlined-Secondary
            </EmotionButton>
            <EmotionButton disabled variant='outlined' color='tertiary'>
              outlined-Tertiary
            </EmotionButton>
          </Row>
          <Row>
            <EmotionButton variant='text' color='primary'>
              text-Primary
            </EmotionButton>
            <EmotionButton variant='text' color='secondary'>
              text-Secondary
            </EmotionButton>
            <EmotionButton disabled variant='text' color='tertiary'>
              text-Tertiary
            </EmotionButton>
          </Row>
        </Section>
      </StyledView>
    </ThemeProvider>
  );
};

export default Emotion;
