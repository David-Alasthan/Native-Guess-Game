import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors.ios'


function InstructionText({children, style}) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'roboto-light',
        color: Colors.accent500,
        fontSize: 24,
    },
})
