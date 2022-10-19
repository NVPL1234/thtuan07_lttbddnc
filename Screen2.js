import { StyleSheet, View, Image, Text } from 'react-native';

export default function Screen2 ({route}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: route.params.productsNew[0].url}} style={{ width: '50%', height: '50%', marginLeft: '30%', marginBottom: '20%' }}></Image>
            <Text style={{textAlign: 'center', fontSize:20, marginBottom: '20%'}}>{route.params.productsNew[0].id}</Text>
            <Text style={{textAlign: 'center', fontSize:20}}>{route.params.productsNew[0].name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: '5%',
      padding: '1%'
    },
  });