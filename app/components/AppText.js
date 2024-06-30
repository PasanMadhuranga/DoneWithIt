import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'

function AppText({ children }) {
    return (
       <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        ...Platform.select({ // This is a way to apply different styles based on the platform
            ios: {
                fontSize: 20,
                fontFamily: 'Courier'
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto'
            }
        })
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir' // This is a way to apply different styles based on the platform
    }
})

export default AppText;