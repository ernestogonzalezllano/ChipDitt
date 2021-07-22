import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Card, Paragraph, Caption } from 'react-native-paper';
import { FormattedTime } from './FormattedTime';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { View } from 'react-native';
import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from '../styles/globalStyles';

export function PostCard({data:{title,id,url,thumbnail, author,score, created, num_comments}}){
    
    const navigation = useNavigation();

    function handleOnPress(){
        navigation.navigate("Online",{url,title})
    }
    return(
        <Card 
            key={id} 
            style={styles.container} 
            onPress={handleOnPress}
        >              
            <Card.Title 
                title={title}
                subtitle={author}
                titleNumberOfLines={10}
            />
            <Card.Cover source={{ uri: thumbnail}} />
            <Card.Content style={styles.content}>
                <Caption >
                    <FormattedTime unixTime={created} />
                </Caption>
                <View style={styles.interactionContainer}>
                    <Paragraph style={styles.score}>
                        <Entypo 
                            name="thumbs-up" 
                            size={12} 
                            color={PRIMARY_COLOR}
                        />
                        {score}
                    </Paragraph>
                    <Paragraph>
                        <FontAwesome 
                            name="comments-o" 
                            size={12} 
                            color={PRIMARY_COLOR}
                        /> 
                        {num_comments}
                    </Paragraph>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
    content: {
        justifyContent:"space-between", 
        flexDirection:"row"
    },
    interactionContainer:{ 
        justifyContent:"flex-end", 
        flexDirection:"row"
    },
    score:{ 
        marginRight:10
    }
});