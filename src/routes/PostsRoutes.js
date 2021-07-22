import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PostsScreen } from '../screens/PostsScreen';
import { SCREENS } from '../utils/constants';
import { TabLabel } from '../components/TabLabel';
import { TabIcon } from '../components/TabIcon';
import { PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/globalStyles'
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function PostsRoutes() {
  
  return (
        <Tab.Navigator 
          tabBarOptions={{
          activeTintColor: PRIMARY_COLOR,
          inactiveTintColor: SECONDARY_COLOR,
          indicatorStyle:styles.indicatorStyle,
          showIcon: true,
          labelStyle:styles.labelStyle,
          iconStyle:styles.iconStyle,
          tabStyle:styles.tabStyle
        }}
        >
          {
            SCREENS.map(({name,title},index)=>
            <Tab.Screen 
              key={index}
              name={name} 
              options={
                {
                  tabBarLabel:(props)=><TabLabel {...props} title={title?title:name}/>, 
                  tabBarIcon:(props)=><TabIcon {...props} name={name}/>
                }
              } 
              component={PostsScreen}  
            />
            )
          }
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  indicatorStyle:{
    color:PRIMARY_COLOR, 
    backgroundColor:PRIMARY_COLOR
  },
  labelStyle:{ 
    margin:0, 
    padding:0
  },
  iconStyle:{
    margin:0, 
    padding:0, 
    height:12, 
    justifyContent:"center", 
    display:"flex", 
    flexDirection:"row"
  },
  tabStyle:{
    margin:5,  
    justifyContent:"center"
  }
})