import React, { useContext, createContext, useEffect } from 'react'
import { StyleSheet, View, } from 'react-native';
import InputForm from './component/InputForm';
import Products from './component/Products';
import { MyData } from './Context';
import axios from 'axios'

export const NavigationContext = createContext()

function Screen1_1() {

  const { products, dispatch } = useContext(MyData)

  useEffect(() => {
    
    axios.get('https://6347925e0484786c6e836f8d.mockapi.io/api/products')
        .then(function (data) {
            console.log(data.data);
            dispatch({type: 'GET', products: data.data})
        })
        .catch(function (error) {
            console.log(error);
        });    
  }, [])

  return (
    <View style={styles.container}>
      <InputForm></InputForm>
      <Products></Products>
    </View>
  );
}

export default function Screen1({ navigation }) {
  return (
      <NavigationContext.Provider value={{ navigation }}>
        <Screen1_1 />
      </NavigationContext.Provider>     
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%'
  },
});
