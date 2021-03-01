import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Cities = (props) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = () => {
    fetch('http://rabellino-mytinerary.herokuapp.com/api/cities')
      .then(response => response.json())
      .then(data => setCities(data.response))
  }

  return (
    <View style={styles.viewAll}>
      <ScrollView>
        <View style={styles.citiesFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          {cities.length > 0 && cities.map(city => {
            return (
              <TouchableOpacity onPress={() => props.navigation.navigate('ItinerariesCity', { city: city })} key={city._id}>
                <ImageBackground style={styles.cityImage} imageStyle={{ borderRadius: 20 }} source={{uri: city.cityImage}}>
                  <Text style={styles.cityName}>{city.cityName}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewAll: {
    backgroundColor: 'rgb(135, 206, 250)',
    flex: 1
  },
  citiesFirstView: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 20,
    opacity: .9,
    width: 300,
    height: 100,
    resizeMode: 'cover',
    marginTop: 30,
    marginBottom: 30
  },
  title: {
    fontSize: 26,
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
    width: '100%',
    padding: 1,
    fontSize: 26,
    textAlign: 'center',
    color: 'rgb(255, 235, 205)',
    fontWeight: 'bold',
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
})

export default Cities