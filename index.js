import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import UpdateForm from './component/UpdateForm'
import Context from './Context';

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Context>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Screen1' component={Screen1} />
                    <Stack.Screen name='Screen2' component={Screen2} />
                    <Stack.Screen name='UpdateForm' component={UpdateForm} />
                </Stack.Navigator>
            </NavigationContainer>
        </Context>
    )
}

export default App