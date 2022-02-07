import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, RecyclerViewBackedScrollViewComponent } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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

  function History({route, navigation}) {
    const {data} = route.params; 
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Equations</Text>
          <FlatList
            data={data}
            renderItem={({item}) => (<Text>{item.key}</Text>)}
          />
      </View>
    )
  }

function Laskin({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={number1 => setNumber1(number1)}
          value={number1}
          placeholder="Type first number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={number2 => setNumber2(number2)}
          value={number2}
          placeholder="Type second number"
          keyboardType="numeric"
        />
        <StatusBar style="auto"/>
      </SafeAreaView>
      <View style={styles.buttons}>
        <Button title="+" onPress={add}/>
        <View style={styles.space} />
        <Button title="-" onPress={subtract}/>
        <View style={styles.space} />
        <Button title="History" onPress={() => navigation.navigate("History", {data: data})}
      />
      </View>
    </View>
  );
}
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" component={Laskin} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
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

