import 'react-native-gesture-handler';
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ImageBackground style={styles.viewAll} source={require('../assets/bkhome.jpg')}>
      <ScrollView>
          <View style={styles.homeFirstView}>
            <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
            <Text style={styles.slogan}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
            <ImageBackground style={styles.callToAction} imageStyle={{borderRadius: 20}} source={require('../assets/ola.gif')}>
              <Text style={styles.textCallToAction}>Choose your next adventure ¡click here!</Text>
            </ImageBackground>
          </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  viewAll: {
    flex: 1
  },
  homeFirstView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Dimensions.get('window').height
  },
  logo: {
    borderRadius: 20,
    opacity: .9,
    width: 300,
    height: 100,
    resizeMode: 'cover'
  },
  slogan: {
    fontFamily: 'comic sans',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 235, 205, 0.7)',
    width: '80%',
    padding: 10,
    borderRadius: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  callToAction: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height:150
  },
  textCallToAction: {
    fontFamily: 'comic sans',
    width: '100%',
    padding: 10,
    fontSize: 26,
    textAlign: 'center',
    color: 'rgba(255, 235, 205, 0.7)',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 5
  },
})

export default Home