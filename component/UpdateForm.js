import { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { MyData } from '../Context';
import axios from 'axios'

export default function UpdateForm({ navigation, route }) {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('https://res.cloudinary.com/dffvo3nnd/image/upload/v1664982337/xa_can_cau_cpse21.png')
    const { products, dispatch } = useContext(MyData)

    const update = async () => {

        try {
            const res = await axios.put(`https://6347925e0484786c6e836f8d.mockapi.io/api/products/${route.params.id}`, {
                name: name,
                url: url,
            })

            axios.get('https://6347925e0484786c6e836f8d.mockapi.io/api/products')
                .then(function (data) {
                    console.log(data.data);
                    dispatch({ type: 'GET', products: data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
                
            navigation.navigate('Screen1')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nhập môn học' style={{ width: '25%', marginRight: '1%', marginLeft: '20%' }} value={name} onChangeText={setName}></TextInput>
            <TextInput placeholder='Nhập url ảnh' style={{ width: '25%', marginRight: '1%' }} value={url} onChangeText={setUrl} />
            <Button title='Cập nhật' onPress={() => update()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
});
