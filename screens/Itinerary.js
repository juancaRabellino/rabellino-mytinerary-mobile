import 'react-native-gesture-handler';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Itinerary = ({ itinerary }) => {
  return (
    <View>
      <View style={styles.topView}>
        <Image style={styles.userImage} source={{ uri: itinerary.userPic }}></Image>
        <View style={styles.contItinerary}>
          <Text style={styles.text}>{itinerary.name}</Text>
          <View style={styles.contIcons}>
            <View style={styles.iconValue}>
              <Icon name="heart" size={20} color="red" />
              <Text style={styles.value}>{itinerary.likes.length}</Text>
            </View>
            <View style={styles.iconValue}>
              <Icon name="clock-o" size={20} color="blue" />
              <Text style={styles.value}>{itinerary.time}</Text>
            </View>
            <View style={styles.iconValue}>
              <Icon name="money" size={20} color="green" />
              <Text style={styles.value}>{itinerary.cost}</Text>
            </View>
          </View>
          <View style={styles.contHashtags}>
            {itinerary.hashtags.map((hashtag, i) => <Text key={`hashtag${i}`}>{hashtag}</Text>)}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  userImage: {
    width: (Dimensions.get('window').width) * .3,
    height: (Dimensions.get('window').width) * .3,
    borderRadius: 50,
    resizeMode: 'cover',
    marginLeft: 10,
  },
  contItinerary: {
    width: (Dimensions.get('window').width) * .65,
  },
  text: {
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    margin: 5,
    padding: 5
  },
  contIcons: {
    width: (Dimensions.get('window').width) * .7,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconValue: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 5
  },
  value: {
    marginLeft: 4
  },
  contHashtags: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default Itinerary