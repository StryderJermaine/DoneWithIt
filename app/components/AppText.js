import React from "react"
import { Text, StyleSheet, Platform } from "react-native"

const AppText = ({ children, style,  numberOfLines = 1 }) => {
    return (
        <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;
