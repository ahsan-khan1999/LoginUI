import React, { Component } from 'react'
import {Text , StyleSheet, FlatList ,TouchableOpacity , View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
const ListScreen = () => {
    const friends = [
        {name: 'friend # 1'},
        {name: 'friend # 2'},
        {name: 'friend # 3'},
        {name: 'friend # 4'},
        {name: 'friend # 5'},
        {name: 'friend # 6'},
        {name: 'friend # 7'},
];
        return (
            // <SafeAreaView>
            <View>
            <FlatList
            keyExtractor={friend => friend.name}
            // scrollEnabled={true}
            
            data={friends} renderItem={({ item }) => {
            return (<Text style={style.textStyle}>{item.name}</Text>);
            }}>

            </FlatList>
            <TouchableOpacity>
                <Text>Press Me Opacity</Text>
            </TouchableOpacity>
            </View>
            // </SafeAreaView>
        );
    }
const style = StyleSheet.create({
    textStyle : {
        marginVertical: 50
    },
});
export default ListScreen;
