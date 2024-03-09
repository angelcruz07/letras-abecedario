import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardLetter } from './src/components/CardLetter'
import  theme  from './src/theme'
import AppBar from "./src/components/AppBar";

export default function App() {
  return (
    <View style={styles.container}>
        <AppBar/>
      <CardLetter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
    title : {
         fontSize: 25,
         fontWeight: 'bold'
    }
});
