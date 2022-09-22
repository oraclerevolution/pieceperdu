import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {Button} from 'react-native-paper'
import * as Font from 'expo-font';
import { Constants } from 'expo-constants';

const Steppers = ({navigation}) => {

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
      <View style={{flex:1, padding:5}}>
        <Image
          source={require('../assets/cover_live.jpeg')}
          style={{width:"100%", height:"100%", borderRadius:20}}
        />
      </View>
      <View style={{flex:1,justifyContent:"center", alignItems: 'center',padding:5}}>
        <Text style={{textAlign:"center", fontFamily:"GothamBlack", fontSize:21}}>Retrouvez votre</Text>
        <Text style={{textAlign:"center", fontFamily:"GothamBlack", fontSize:20, marginBottom:"5%"}}>Pièce perdu ici</Text>

        <Text style={{textAlign:"center", fontFamily:"GothamLight", fontSize:16}}>Explore all the most exiting jobs roles based on your interest And study major</Text>

        <View style={{flexDirection:"row"}}>
          <Button mode='contained' labelStyle={{fontFamily:"GothamBlack"}} style={{margin:5, marginTop:"10%"}}>Register</Button>
          <Button mode='outlined' labelStyle={{fontFamily:"GothamBlack"}} style={{margin:5, marginTop:"10%"}} onPress={()=>navigation.navigate('Login')}>Sign In</Button>
        </View>
      </View>
    </View>
  )
}

export default Steppers

const styles = StyleSheet.create({
  container:{
    flex:1, 
    padding:5,
  }
})