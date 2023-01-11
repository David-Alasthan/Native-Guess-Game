import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../constants/Colors'


function NumberContainer({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth > 380 ? 18 : 36,
        borderRadius: 8,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,   
        // fontWeight: 'bold',
        fontFamily: 'roboto-light',
    }
})