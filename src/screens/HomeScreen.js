import * as React from 'react';
import {View, Text, StatusBar, TextInput, Animated} from 'react-native';
import {t, color} from 'react-native-tailwindcss';
import {useEffect, useRef, useState} from 'react/cjs/react.development';
import styled from 'styled-components/native';
const HomeScreen = () => {
  const SView = styled(View)`
    ${[t.bgTeal200, t.roundedBLg, t.p5]}
  `;
  const [translation, setTranslation] = useState(0);
  useEffect(() => {
    setTranslation(50);
  }, []);
  return (
    <View>
      <StatusBar backgroundColor={color.teal200} barStyle="dark-content" />
      <SView>
        <Text style={[t.textBlack, t.textCenter, t.fontBold, t.textLg]}>
          WaterTimes
        </Text>
      </SView>
      <Animated.View style={[{transform: [{translateX: translation}]}, t.mT5]}>
        <Text style={[t.text3xl, t.mT5, t.textCenter]}>Enter Your Weight</Text>
        <TextInput
          keyboardType="numeric"
          style={[
            t.shadow,
            t.rounded,
            t.pY2,
            t.pX3,
            t.mY3,
            t.bgTeal200,
            t.textBlack,
          ]}
          placeholderTextColor="#878a8d"
          placeholder="Weight in Kg"
        />
      </Animated.View>
    </View>
  );
};
export default HomeScreen;
