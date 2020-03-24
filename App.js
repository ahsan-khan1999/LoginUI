import *  as firebase from 'firebase'
import  Profile from './Components/Profile.js'
import Name from './Components/Profile'
// Login UI With Firebase Auth

const firebaseConfig                 = {
  apiKey: "AIzaSyBCIFIoHyP4mWZAotUpquk8LcsGPPf4iYs",
  authDomain: "react-native-app-216d1.firebaseapp.com",
  databaseURL: "https://react-native-app-216d1.firebaseio.com",
  projectId: "react-native-app-216d1",
  storageBucket: "react-native-app-216d1.appspot.com",
  messagingSenderId: "71945186296",
  appId: "1:71945186296:web:6d8c8b30ba75269e69840d",
  measurementId: "G-C06Z4G3NPV"

};
firebase.initializeApp(firebaseConfig);
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Container,Content,Header,Form,Input,Label,Button, Item } from "native-base";


class App extends Component{
  

  constructor(props){
    super(props);
    this.state                       = ({
      email:'',
      password:''
    })
  }
  signUpUser                         = (email,password)=>{
    try{
      if(this.state.password.length < 6){
          alert("Please Enter Password lenght > 6")
          return;
      }
      else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
      }
    }
    catch (error){
      console.log(error.toString())

    }

  }
  logInUser = (email,password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
      // firebase.auth().sig
        console.log(user)
      })
    }
    catch(error){
      console.log(error.toString())
    }
  }
  // clear(){
  //   this.setState({

  //   })
  // }
  render(){
    // let pic                       = {
    //   https: '//www.pexels.com/photo/person-s-body-covered-with-cloth-3111251/'
    // };
    return(
      <React.Fragment>   
        <Container>
            <ImageBackground source={require('./android/app/imag/images.jpeg')} style={{width: null , height: null , flex: 1 , flexDirection: 'row'}}>

        
            <Form style={{alignSelf: 'center' , padding:2 , justifyContent: 'center' , alignContent : 'center'}}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
               onChangeText={email   => this.setState({ email })}
              
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input ref={input      => {this.textInput = input;} }
              clearButtonMode="always"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}

              />
            </Item>
            <Button style={{ marginTop:5 }}
              full
              
              onPress={()            => this.logInUser(this.state.email,this.state.password)}
              // onPress={()         => this.state.email={""}}
            >
              <Text style={{color:"white" ,fontSize:20}}> LogIn</Text>
              </Button>
              <Button style={{ marginTop:5 }}
              full
              
              onPress={()            => this.signUpUser(this.state.email,this.state.password)}
              // onPress={()         => this.Input.clear()}
            >
              <Text style={{color:"white" ,fontSize:20}}> SignUp</Text>
              </Button>
              <LoginButton style={{ width: 407, height: 40 , marginTop:5 }}
              // full
              // rounded
          onLoginFinished={
            (error, result)          => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data)             => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={()       => console.log("logout.")}/>
          
          </Form>

          </ImageBackground>
          </Container>

          */
          
        { <Container style={styles.container}>  
        // Login UI with Firebase Auth
        
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
               onChangeText={email   => this.setState({ email })}
              
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input ref={input      => {this.textInput = input;} }
              clearButtonMode="always"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}

              />
            </Item>
            <Button style={{ marginTop:5 }}
              full
              
              onPress={()            => this.logInUser(this.state.email,this.state.password)}
              // onPress={()         => this.state.email={""}}
            >
              <Text style={{color:"white" ,fontSize:20}}> LogIn</Text>
              </Button>
              <Button style={{ marginTop:5 }}
              full
              
              onPress={()            => this.signUpUser(this.state.email,this.state.password)}
              // onPress={()         => this.Input.clear()}
            >
              <Text style={{color:"white" ,fontSize:20}}> SignUp</Text>
              </Button>
              <LoginButton style={{ width: 407, height: 40 , marginTop:5 }}
              // full
              // rounded
          onLoginFinished={
            (error, result)          => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data)             => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={()       => console.log("logout.")}/>
          
          </Form>
        </Container> 
        }
        </React.Fragment>
    );
  }
}
const styles                         = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffxx    f',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 2,
  },
});
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       name:""
//     }
//   }
  
//   render(){
//     return(
//       <View>
         
          
//         <Text style={[styling.othercolor,styling.font]}>
//             hello world
//         </Text>
//         <TextInput style={{height:100 , fontSize:40,color:'red', paddingHorizontal:30}} placeholder={"Enter Name Please"} onChangeText={(e)=>{this.setState({name:e})}}>
          
//         </TextInput>
//         {/* console.log(name); */}
//         <Button title="submit" onPress={()=>{alert(this.state.name)}} />
        
//         </View>



//     )
//   }
// }



// class App extends Component{
//   render() {
//     return (
//       <View>
//         <Text style={[styling.font,styling.color]}>
//             Make A cup of tea!
//         </Text>
//         <Text style={[styling.font,styling.othercolor]}>
//             Make A cup of tea Blue!
//         </Text>
//       </View>
//     )
//   }
// }
// console.log("")
const styling                        = StyleSheet.create({
  // keyword to usiquely identify where to apply
  font:{
    fontSize:50,
    fontWeight:'bold',
  },

  color:{
    color:"red",
    backgroundColor:"yellow",
  },
  othercolor:{
    color:'blue',
    backgroundColor:'yellow'
  }

})
















// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       data:"Hello States"
//     }
//   }
//   change(){
//     this.setState({data:"My Name Muhammad"})
//   }
//   // n time you change the states n time render is called.
//   render(){
//     console.warn(this.state)
//     return(
//       <View>
//         <Text style={{fontSize:50 ,alignSelf:"center" }}>
//           {this.state.data}
          
//         </Text>
//         <Button title="Update state" onPress={()=>{this.change()}} />
//       </View>

//     )
//   }
// }

// parent
// class ScreenOn extends Component{
//   render(){
//     return(
//       <View>
//       <Heading message={'this is my way'}/>
//       </View>
//     );
//   }
// }
// child
// class App extends Component {
//   render() {
//     return(
//       <View>
//         <Profile name={"Muhammad Ahsan Khan"} id={"FA17-BSCS-0061"} />
//         <Name id={"FA17-BSCS-0096"} />
//       </View>
//       );
//   }
// }
// export default App;
  // Heading.propTypes               = {
//   message: propTypes.string
// }
// export default ScreenOn;





// class Greetings extends Component{
//   render() {
//     return (
//       <View style={{alignItems: "center"}}>
//     <Text>Hello {this.props.name}!</Text>
//     </View>
//     );
//   }

// }
// class LotOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center' , top: 100}}>
//         <Greetings name= "Ahsan" />
//         <Greetings name= "Alex" />
//         <Greetings name= "zukerburg" />

//       </View>
//     );

//   }
// }
// class MoreGreetings extends Component{
//   render(){
//     return(
//       <View>
//         <Greetings name="Alexa "></Greetings>
//         <Greetings name="Andrew "></Greetings>
//       </View>

//     );
//   }
// }
// // export default LotOfGreetings;
// export default MoreGreetings;

// export{
//   Lot
// }
  // export default Banana;

// class Banana extends Component {
//   render() {
//     let pic                       = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };

//     return (
//       <Image source={pic} style={{height: 110 , width: 193 , alignSelf: "center"}}/>
//     );
//   }
// }


// class HelloWorldApp extends Component {
//     render(){
//       return(
//         <View style={{flex: 10 , justifyContent: "center" , alignItems: "center"}}>
//           <Text>Hello World Hello</Text>
//           </View>
        
//       );
//     }

//  }
// class HelloWorldApp2 extends Component{
//   render(){
//     return(
//       <Text>Hello Again</Text>

//     );
//   }
// }
// imp0ort {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// const App: ()                     => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal  == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles                      = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default ;
// export{
//   HelloWorldApp,
//   HelloWorldApp2,
  
// } 
// export default Banana;
// export default HelloWorldApp2;