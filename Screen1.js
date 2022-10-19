import React, { useContext, createContext, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import InputForm from './component/InputForm';
import Item from './component/Item';
import Context from './Context';
import { MyData } from './Context';
import axios from 'axios'

export const NavigationContext = createContext()

function Screen1_1() {

  const { products, dispatch } = useContext(MyData)

  const renderItem = ({ item }) => {
    return (
      <Item id={item.id} name={item.name} url={item.url}></Item>
    )
  }

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
      <View style={{ marginTop: '1%', marginLeft: '1%' }}>
        <FlatList data={products} renderItem={renderItem}></FlatList>
      </View>
    </View>
  );
}

export default function Screen1({ navigation }) {
  return (
    <Context>
      <NavigationContext.Provider value={{ navigation }}>
        <Screen1_1 />
      </NavigationContext.Provider>      
    </Context>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%'
  },
});
