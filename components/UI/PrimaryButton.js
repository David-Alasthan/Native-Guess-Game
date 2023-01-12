import { Text, View, Pressable, StyleSheet } from 'react-native'

import Colors from '../../constants/Colors.ios';

function PrimaryButton({children, onPress}) {

    function pressHandler () {
        console.log('Press !!');
    }

  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={ ({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
            onPress={onPress} 
            android_ripple={{ color: Colors.primary600 }}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    passed: {
        opacity: 0.75,
    }
})
