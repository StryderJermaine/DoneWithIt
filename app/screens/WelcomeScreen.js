import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}
            blurRadius={10}>

            <View style={styles.logoContainer}>

                <Image source={require('../assets/logo-red.png')}
                    style={styles.logo}  />

                <Text style={styles.tagLine}>Sell what you dont need</Text>

            </View>


            <View style={styles.buttonsContainer}>

                <AppButton title="Login" />

                <AppButton title="Register"
                           color='secondary'  />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

export default WelcomeScreen;