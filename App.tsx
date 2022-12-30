import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Emotion from './components/emotion/Emotion';
import NativeWind from './components/nativewind/NativeWind';
import StyledComponent from './components/styled-component/StyledComponent';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <StyledComponent />
        <Emotion />
        <NativeWind />
      </ScrollView>
    </SafeAreaView>
  );
}
