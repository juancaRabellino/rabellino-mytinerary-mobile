import 'react-native-gesture-handler';
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Cities = () => {
  const cities = [
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' },
    { cityName: 'Paris', url: '../assets/paris.webp' }
  ]
  return (
    <View style={styles.viewAll}>
      <ScrollView>
        <View style={styles.citiesFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          <Text style={styles.title}>Cities</Text>
          {cities.map(city => {
            return (
              <ImageBackground style={styles.cityImage} imageStyle={{ borderRadius: 20 }} source={require('../assets/paris.webp')}>
                <Text style={styles.cityName}>{city.cityName}</Text>
              </ImageBackground>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewAll: {
    backgroundColor: 'lightcian',
    flex: 1
  },
  citiesFirstView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: Dimensions.get('window').height
  },
  logo: {
    borderRadius: 20,
    opacity: .9,
    width: 300,
    height: 100,
    resizeMode: 'cover',
    marginTop: 20
  },
  title: {
    fontSize: 26,
    fontFamily: 'comic sans',
    marginTop: 5,
    marginBottom: 5
  },
  cityImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 180,
    marginBottom: 10,
  },
  cityName: {
    fontFamily: 'comic sans',
    width: '100%',
    padding: 1,
    fontSize: 26,
    textAlign: 'center',
    color: 'rgba(255, 235, 205, 0.7)',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
})

export default Cities