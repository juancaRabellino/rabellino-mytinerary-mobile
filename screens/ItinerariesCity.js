import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Itinerary from './Itinerary';


const ItinerariesCity = (props) => {
  const [itineraries, setItineraries] = useState([])

  const id = props.route.params.city._id
  const cityName = props.route.params.city.cityName
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(`http://rabellino-mytinerary.herokuapp.com/api/itineraries/${id}`)
      .then(response => response.json())
      .then(data => setItineraries(data.response))
  }

  return (
    <View style={styles.viewAll}>
      <ScrollView>
        <View style={styles.citiesFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          <ImageBackground style={styles.cityImage} source={require('../assets/paris.webp')}>
            <Text style={styles.cityName}>{cityName}</Text>
          </ImageBackground>
          {itineraries.length > 0
            ? itineraries.map(itinerary => {
              return (
                <Itinerary itinerary={itinerary} key={itinerary._id} />
              )
            })
            : <ImageBackground style={styles.noItYet} imageStyle={{ borderRadius: 40 }} source={require('../assets/noItYet.jpg')}>
                <Text style={styles.textNoItYet}>There are no itineraries available yet</Text>
              </ImageBackground>
          }
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
    marginBottom: 10
  },
  cityImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 220,

  },
  cityName: {
    width: '100%',
    padding: 1,
    fontSize: 26,
    textAlign: 'center',
    color: 'rgb(255, 235, 205)',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  icon: {
    width: 50,
    height: 50
  },
  noItYet: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 280,
    height: 180
  },
  textNoItYet: {
    color: 'rgb(255, 235, 205)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 20,
    margin: 10,
    padding: 10
  }
})

export default ItinerariesCity