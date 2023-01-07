import { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PrimaryButton from '../components/UI/PrimaryButton'

import Title from '../components/UI/Title'


function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Image/over.jpg')} />
      </View>
      <Text style={styles.summary}>Your phone needed
        <Text style={styles.highlight}> X </Text> 
         rounds to guess the number <Text style={styles.highlight}> Y </Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
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

