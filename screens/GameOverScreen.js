import { useState } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  useWindowDimensions, 
  ScrollView 
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PrimaryButton from '../components/UI/PrimaryButton'

import Title from '../components/UI/Title'


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame}) {

  const { width, height} = useWindowDimensions();

    
  let imageSize = 300;

  if(width < 380) {
    imageSize = 150;
  }

  if(height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image style={styles.image} source={require('../assets/Image/over.jpg')} />
      </View>
      <Text style={styles.summary}>Your phone needed
        <Text style={styles.highlight}> {roundsNumber} </Text> 
         rounds to guess the number <Text style={styles.highlight}> {userNumber} </Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      // width: deviceWidth < 380 ? 150 : 300,
      // height: deviceWidth < 380 ? 150 : 300,
      // borderRadius: deviceWidth < 380 ? 75 : 150,
      borderColor: Colors.primary800,
      borderWidth: 3,
      margin: 36,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    summary: {
      textAlign: 'center',
      fontFamily: 'roboto-regular',
      fontSize: 23,
      marginVertical: 24,
    },
    highlight: {
      fontFamily: 'roboto-light',
      color: Colors.primary500
    }
})

