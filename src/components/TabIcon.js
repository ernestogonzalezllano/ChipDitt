import React from 'react'
import LottieView from 'lottie-react-native';
import { StyleSheet } from "react-native";
import { ANIMATIONS } from '../utils/constants';

export function TabIcon({focused, name}){

    if(focused){
        return <LottieView
                  autoPlay
                  style={styles.animation}
                  source={ANIMATIONS[name]}
                />
    }
    else return <></>
}

const styles = StyleSheet.create({
    animation:{
        height:50,
    }
})