import React from 'react'
import { Paragraph } from 'react-native-paper'

export function TabLabel({focused,title}){
    if(!focused) return <Paragraph>{title}</Paragraph>
    return <></>
}