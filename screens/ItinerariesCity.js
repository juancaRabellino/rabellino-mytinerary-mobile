import 'react-native-gesture-handler';
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


const ItinerariesCity = () => {
  const city = { likes: 5, duration: 1, cost: 2, cityName: 'Paris', url: '../assets/paris.webp' }

  return (
    <View style={styles.viewAll}>
      <ScrollView>
        <View style={styles.citiesFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          <ImageBackground style={styles.cityImage} source={require('../assets/paris.webp')}>
            <Text style={styles.cityName}>{city.cityName}</Text>
          </ImageBackground>
          {/* <i style={styles.icon} className="far fa-heart"></i> */}
          <Icon name="heart" size={30} color="red" />
          <Icon name="money" size={30} color="green" />
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
    marginTop: 20,
    marginBottom: 10
  },
  cityImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 220,

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
  icon: {
    width: 50,
    height: 50
  }
})

export default ItinerariesCity