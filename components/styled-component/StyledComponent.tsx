import React from 'react'

import { ThemeProvider, DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import StyledButton from './StyledButton';

const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #f0f0f0;
  marginBottom: 20px;
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


const theme: DefaultTheme = {
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

const StyledComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledView>
        <Section>
          <Title>Styled Components</Title>
          <Row>
            <StyledButton style={{
              width: '100%'
            }} variant='contained' color='primary'>
              Contained-Primary
            </StyledButton>
            <StyledButton variant='contained' color='secondary'>
              Contained-Secondary
            </StyledButton>
            <StyledButton disabled variant='contained' color='tertiary'>
              Contained-Tertiary
            </StyledButton>
          </Row>
          <Row>
            <StyledButton variant='outlined' color='primary'>
              outlined-Primary
            </StyledButton>
            <StyledButton variant='outlined' color='secondary'>
              outlined-Secondary
            </StyledButton>
            <StyledButton disabled variant='outlined' color='tertiary'>
              outlined-Tertiary
            </StyledButton>
          </Row>
          <Row>
            <StyledButton variant='text' color='primary'>
              text-Primary
            </StyledButton>
            <StyledButton variant='text' color='secondary'>
              text-Secondary
            </StyledButton>
            <StyledButton disabled variant='text' color='tertiary'>
              text-Tertiary
            </StyledButton>
          </Row>
        </Section>
      </StyledView>
    </ThemeProvider>
  )
}

export default StyledComponent