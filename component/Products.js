import React, { useContext } from 'react'
import { FlatList, ScrollView } from 'react-native';
import Item from './Item';
import { MyData } from '../Context';

export default function Products() {

    const { products, dispatch } = useContext(MyData)

    const renderItem = ({ item }) => {
        return (
            <Item id={item.id} name={item.name} url={item.url}></Item>
        )
    }

    return (
        <ScrollView>
            <FlatList data={products} renderItem={renderItem} horizontal='true'></FlatList>
        </ScrollView>
    );
}
