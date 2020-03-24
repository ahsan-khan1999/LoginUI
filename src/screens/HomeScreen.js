import React, { Component } from 'react'
import { View, Text, Button } from 'native-base'
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
    // console.log(props);
    
    return(
        <SafeAreaView>
        <View>
            <Text>Hi thhere!!</Text>
            <Button 
            onPress={() => props.navigation.navigate('Home')}
            title="Go Home"
            />

        </View>    
        </SafeAreaView>
    );
};




// class HomeScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>Home Screen</Text>
//                 </View>
//         )
//     }
// }
export default HomeScreen;