import 'react-native-gesture-handler';
import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';

const Home = (props) => {
  return (
    <ImageBackground style={styles.viewAll} source={require('../assets/bkhome.jpg')}>
      <ScrollView>
        <View style={styles.homeFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          <Text style={styles.slogan}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
          <TouchableHighlight onPress={() => props.navigation.navigate("Cities")}>
            <ImageBackground style={styles.callToAction} imageStyle={{ borderRadius:  20}} source={require('../assets/ola.gif')}>
              <Text style={styles.textCallToAction}>Choose your next adventure ¡click here!</Text>
            </ImageBackground>
          </TouchableHighlight>
          {!props.loggedUser
          ? <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-around' }}>
              <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("SignIn")} >
                <Text style={styles.buttonText}>Sign in</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={() => props.navigation.navigate("SignUp")} >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableHighlight>
            </View>
          : <View>
              <TouchableHighlight style={styles.button} onPress={() => props.logoutUser()} >
              <Text style={styles.buttonText}>Log out</Text>
              </TouchableHighlight>
            </View>
          }
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
    height: 150,
    borderRadius: 2000
  },
  textCallToAction: {
    width: '100%',
    padding: 10,
    fontSize: 26,
    textAlign: 'center',
    color: 'rgb(255, 235, 205)',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 15
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 235, 205, 0.7)'
  },
  buttonText: {
    fontSize: 20,
  }
})

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}
const mapDispatchToProps = {
  logoutUser: authActions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)