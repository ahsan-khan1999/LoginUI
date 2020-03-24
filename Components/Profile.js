import React , { Component } from 'react';
import { Text , View } from 'react-native';


// const Profile = (props) => {
//     return(
//         <View>
//         <Text style={{fontSize:50}}>
//             Functional Component {props.name} {props.iD}
//         </Text>
//         </View>
//     );

// }

class Profile extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:20 ,alignContent:"center",alignItems:"center",alignSelf:"center"}}>
                {this.props.name}</Text>
                <Text style={{fontSize:20 ,alignContent:"center",alignItems:"center",alignSelf:"center"}}>
                {this.props.id}
                </Text>
            </View>
        )
    }

}
const Name = (props) => {
    return(
        <View>
            <Text>
                {props.id}
            </Text>
        </View>
    )
}
export default Profile;