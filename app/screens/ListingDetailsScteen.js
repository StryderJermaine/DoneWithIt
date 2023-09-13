import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';

import  ListItem  from '../components/ListItem'

function ListingDetailsScteen(props) {
    return (
        
        <View>
            <Image source={require('../assets/jacket.jpg')}
                   style={styles.image}  />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/mosh.jpg")}
                        title="Ralph Yaadad"
                        subTitle="5 listings"/>
                    </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScteen;