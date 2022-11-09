import { useContext } from 'react'
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { MyData } from '../Context'
import { NavigationContext } from '../Screen1';
import axios from 'axios';

export default function Item({ id, name, url }) {

    const { products, dispatch } = useContext(MyData)
    const {navigation} = useContext(NavigationContext)

    const deleteItem = () => {
        Alert.alert('XOÁ', 'Bạn có muốn xoá ' + name, [
            {
                text: 'Xoá', onPress: async () => {

                    try {
                        await axios.delete(`https://6347925e0484786c6e836f8d.mockapi.io/api/products/${id}`)
                    } catch (error) {
                        console.log(error.message);
                    }                 
                    const productsNew = products.filter((product) => id !== product.id)
                    dispatch({type: 'DELETE', products: productsNew})                   
                }
            },
            { text: 'Huỷ', onPress: () => { } }
        ])
    }

    const updateItem = () => {
        navigation.navigate('UpdateForm', {id})
    }

    const itemOnPress = () => {
        const productsNew = products.filter((product) => id === product.id)
        navigation.navigate('Screen2', {productsNew})
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={itemOnPress}>
                <Image source={{ uri: url }} style={{ width: 74, height: 74 }} />
                <Text style={{ width: '10%', marginRight: '1%', paddingTop: '10%', textAlign: 'center' }}>{id}</Text>
                <Text style={{ width: '25%', textAlign: 'center', marginRight: '25%', paddingTop: '10%' }}>{name}</Text>
            </TouchableOpacity>
            <View style={{ height: '100%', paddingTop: '5%' }}>
                <Button title='Xoá' onPress={deleteItem}></Button>
                <Button title='Cập nhật' onPress={updateItem}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: '1%'
    },
});
