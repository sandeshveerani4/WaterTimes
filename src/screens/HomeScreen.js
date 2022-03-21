import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {t, color} from 'react-native-tailwindcss';
import {useState} from 'react/cjs/react.development';
import styled from 'styled-components/native';
const HomeScreen = () => {
  const SView = styled(View)`
    ${[t.bgTeal200, t.roundedBLg, t.p5]}
  `;
  const [liters, setLiters] = useState('');
  const scheme = useColorScheme();
  return (
    <View style={t.flex1}>
      <StatusBar backgroundColor={color.teal200} barStyle="dark-content" />
      <SView>
        <Text style={[t.textBlack, t.textCenter, t.fontBold, t.textLg]}>
          WaterTimes
        </Text>
      </SView>
      <ScrollView style={[t.pX5, t.flex1]}>
        <Text
          style={[
            t.text3xl,
            t.mT5,
            t.textCenter,
            {color: scheme === 'light' ? 'black' : 'white'},
          ]}>
          Enter Your Weight
        </Text>
        <TextInput
          keyboardType="numeric"
          autoFocus={true}
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
          onChangeText={txt => setLiters(parseFloat(txt * 0.033).toFixed(2))}
        />
        <Text
          style={[
            t.textCenter,
            {color: scheme === 'light' ? 'black' : 'white'},
          ]}>
          You Should Drink
        </Text>
        <Text
          style={[
            t.text3xl,
            t.textCenter,
            {color: scheme === 'light' ? 'black' : 'white'},
          ]}>
          {liters} liters
        </Text>
      </ScrollView>
      <View
        style={[
          t.roundedFull,
          t.justifyCenter,
          t.alignBottom,
          t.w18,
          t.h18,
          t.bgTeal200,
          t.absolute,
          {
            bottom: 20,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          },
        ]}>
        <Text style={[t.text5xl, t.textCenter, t.textBlack]}>+</Text>
      </View>
    </View>
  );
};
export default HomeScreen;
