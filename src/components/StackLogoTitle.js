import React from 'react'
import LottieView from 'lottie-react-native';
import { Paragraph } from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import { PRIMARY_COLOR } from '../styles/globalStyles';

const reddit = require('../../assets/reddit.json');

export function StackLogoTitle({children}) {

  return <View style={styles.container}>
            <LottieView
                autoPlay
                style={styles.animation}
                source={reddit}
            />
            <Paragraph style={styles.text}>
                {children}
            </Paragraph>
        </View>

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    animation: {
        height:50
    },
    text:{
        fontSize:20, 
        fontWeight:"bold", 
        color:PRIMARY_COLOR
    }
});
