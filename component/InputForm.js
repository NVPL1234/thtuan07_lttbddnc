import { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { MyData } from '../Context';
import axios from 'axios'

export default function InputForm() {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982337/xa_can_cau_cpse21.png')
    const {products, dispatch} = useContext(MyData)
    
    const add = async () => {

        try {
            const res = await axios.post('https://6347925e0484786c6e836f8d.mockapi.io/api/products', {
                name: name,
                url: url,
                id: products.length + 1
            })
            dispatch({type: 'ADD', product: res.data})
        } catch (error) {
            console.log(error.message);   
        }               
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nhập môn học' style={{ width: '25%', marginRight: '1%', marginLeft: '20%' }} value={name} onChangeText={setName}></TextInput>
            <TextInput placeholder='Nhập url ảnh' style={{width: '25%', marginRight: '1%'}} value={url} onChangeText={setUrl}/>
            <Button title='+' onPress={() => add()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
});
