import 'react-native-gesture-handler';
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { Alert, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import authActions from '../redux/actions/authActions'

const SignIn = ({ navigation, loginUser, loggedUser }) => {
  const [usuarioALoguear, setUsuarioALoguear] = useState({})
  const [errors, setErrors] = useState([])

  const leerInput = (campo, valor) => {
    setUsuarioALoguear({
      ...usuarioALoguear,
      [campo]: valor
    })
  }
  const validarUsuario = async e => {
    e.preventDefault()
    if (usuarioALoguear.username === '' || usuarioALoguear.password === '') {
      Alert.alert("Todos los campos son obligatorios")
      return false
    }
    setErrors([])
    const respuesta = await loginUser(usuarioALoguear)
    if (respuesta && !respuesta.success) {
      setErrors([respuesta.mensaje])
    } else {
      Alert.alert("Bienvenido!")
      navigation.navigate('Home')
    }
  }

  return (
    <ImageBackground style={styles.viewAll} source={require('../assets/bkhome.jpg')}>
      <ScrollView>
        <View style={styles.homeFirstView}>
          <Image style={styles.logo} source={require('../assets/mytinerary.png')} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={value => leerInput("username", value)}></TextInput>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={value => leerInput("password", value)}></TextInput>
          <TouchableOpacity style={styles.touchable} onPress={validarUsuario}>
            <Text style={styles.textButton}>Sign in</Text>
          </TouchableOpacity>
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
  input: {
    fontSize: 18,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgb(255, 235, 205)',
    textAlign: 'center'
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 235, 205, 0.7)',
  },
  textButton: {
    fontSize: 18,
    color: 'black'
  }
})

const mapStateToProps = state => {
  return {
    loggedUser: state.auth.loggedUser
  }
}

const mapDispatchToProps = {
  loginUser: authActions.loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)