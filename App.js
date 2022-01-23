import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';


export default function App() {

  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [result, setResult] = React.useState('');

  const add = () => {
      setResult(parseInt(number1) + parseInt(number2));
  }

  const subtract = () => {
      setResult(parseInt(number1) - parseInt(number2));
  }

  return (
    <View style={styles.container}>
      <Text>Laskin</Text>
      <Text>Results: {result}</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={number1 => setNumber1(number1)}
          value={number1}
          placeholder="Syötä ensimmäinen luku"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={number2 => setNumber2(number2)}
          value={number2}
          placeholder="Syötä toinen luku"
          keyboardType="numeric"
        />
      <StatusBar style="auto"/>
      </SafeAreaView>
      <View style={{ flexDirection: "row" }}>
      <Button
        title="+"
        onPress={add}
      />
      <Button
        title="-"
        onPress={subtract}
      />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
