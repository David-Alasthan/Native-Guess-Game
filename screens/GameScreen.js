import { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/UI/Title'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/UI/Cards'
import InstructionText from '../components/UI/InstructionText'

import Colors from '../constants/Colors'
import PrimaryButton from '../components/UI/PrimaryButton'

function generateRandomBetween ( min , max , exclude ) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return (
            generateRandomBetween( min, max, exclude )
        );
    }else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {

    const initialGuess = generateRandomBetween( 1, 100, userNumber )
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess,userNumber, onGameOver]);

    function nextGuessHandler(direction) { //Direction => "lower", "greater"

        if(
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber) 
        ){
            Alert.alert("Don't Lie", "You know that this is wrong...", [{ text: "Sorry!", style: 'cancel' ,}])
            return;
        }

        if(direction === "lower") {
            maxBoundary = currentGuess;
        }else {
            minBoundary = currentGuess + 1;
        }
        console.log( minBoundary, maxBoundary );
        const newRndNum = generateRandomBetween( minBoundary, maxBoundary, currentGuess );
        setCurrentGuess(newRndNum)
    };


  return (
    <View style={styles.screen}>
        <Title style={styles.title}>Opponent's Guess</Title>

        {/* GUESS  */}

        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
            {/* + - */}
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")} >
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} >
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View>
            {/* LOG ROUND */}
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})
