import React from "react"
import { Text, StyleSheet, Platform } from "react-native"

import defaultStyles from '../config/styles';

const AppText = ({ children, style,  numberOfLines = 1 }) => {
    return (
        <Text 
            placeholderTextColor={defaultStyles.colors.medium} 
            style={[defaultStyles.text, style]} 
            numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

export default AppText;
