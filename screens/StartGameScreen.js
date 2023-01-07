import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'

import PrimaryButton from '../components/UI/PrimaryButton'
import Title from '../components/UI/Title'
import Card from '../components/UI/Cards'
import InstructionText from '../components/UI/InstructionText'

import Colors from '../constants/Colors'

function StartGameScreen({onPickedNumber}) {

    const [enterNumber, setEnterNumber] = useState('')

    function numberInputHandler (enterText)  {
        setEnterNumber(enterText);
    }

    function comfirInputHandler () {
        const chosenNumber = parseInt(enterNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
            Alert.alert(
                'Invalid Number!!', 
                'Number has to be a between 1 to 99', 
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}] 
            );
            return;
        }
        onPickedNumber(chosenNumber);

    }

    function resetInputHandler() {
        setEnterNumber('')
    }

  return (
    <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none'
                autoCorrect={false} 
                value={enterNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={comfirInputHandler} >Comfirm</PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontFamily: 'roboto-light',
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        // fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
});

