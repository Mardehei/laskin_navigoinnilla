import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, RecyclerViewBackedScrollViewComponent } from 'react-native';


export default function App() {

  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [result, setResult] = React.useState('');
  const [data, setData] = useState([]);

  const add = () => {
      setResult(parseInt(number1) + parseInt(number2));
      const summa = (parseInt(number1) + parseInt(number2));
      const text = number1 + " + " + number2 + " = " + summa;
      setData([...data, { key: text }]);
      setNumber1('');
      setNumber2('');
  }

  const subtract = () => {
      setResult(parseInt(number1) - parseInt(number2));
      const vahennys = (parseInt(number1) - parseInt(number2));
      const text = number1 + " - " + number2 + " = " + vahennys;
      setData([...data, { key: text }]);
      setNumber1('');
      setNumber2('');
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
      <View style={styles.buttons}>
        <Button
          title="+"
          onPress={add}
        />
        <View style={styles.space} />
        <Button
          title="-"
          onPress={subtract}
        />
      </View>
      <Text style={styles.text}>History</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text>{item.key}</Text>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 10,
  },
  space: {
    width: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  }
});
