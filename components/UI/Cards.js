import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';


function Cards({children}) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});
