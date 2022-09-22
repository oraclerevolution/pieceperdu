import { StyleSheet, Image, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper'
import * as Font from "expo-font"

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null)
  const [password, setpassword] = useState(null)

  const fontLoaded = async() => {
    await Font.loadAsync({
      // Load a font from a static resource
      GothamBold: require('../assets/fonts/GothamBold.ttf'),
      GothamLight: require('../assets/fonts/GothamLight.ttf'),
      GothamBlack: require('../assets/fonts/GothamBlack.otf'),
    });
  }

  return (
    <View style={styles.container}>
        <Text style={{marginBottom:"5%", fontSize:19}}>Hello Again !</Text>
        <Text style={{fontFamily:"GothamBold", fontSize:16}}>Welcome back you've</Text>
        <Text style={{fontFamily:"GothamBlack", marginBottom: "6%", fontSize:16}}>been missed !</Text>
        <View style={styles.forms}>
        <TextInput 
            label="Entre votre email"
            placeholder="assiajean@email.com"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput 
            label="Entre votre mot de passe"
            placeholder="***********"
            value={password}
            secureTextEntry
            onChangeText={text => setpassword(text)}
          />
          <Text>Recovery Password</Text>
          <Button mode='contained'>Sign In</Button>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={{borderWidth:1, width:"30%", height:"0%", marginRight:"5%", position:"relative", top:"2.5%"}}></View>
          <Text>Or continue with</Text>
          <View style={{borderWidth:1, width:"30%", height:"0%", marginLeft:"5%", position:"relative", top:"2.5%"}}></View>
        </View>
        <View style={{flexDirection:"row"}}>
            <View>
              <Image source={require('../assets/google.png')} style={{width:40, height:40}} />
            </View>
            <View>
              <Image source={require('../assets/facebbok.png')} style={{width:40, height:40}} />
            </View>
          </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  forms:{
    borderWidth:1,
    width:"100%",
    padding:5
  },
  InputStyle:{
    color:"black",
    marginBottom:1,
    marginLeft:5,
    fontSize:14,
    fontFamily:"GothamBlack"
},
})