import React, { useState, useEffect, useReducer } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { actionCreators, initialState, reducer } from './reducer'
import { api } from './api'
import { data } from './data'
import * as items from './profile_data'
import Stats from './Stats'
import Posts from './Posts'

function Profile({ navigation, route }){ 
const url = (api.profile ?? "profile/") + (route?.params?.id ?? '')
const [state, dispatch] = useReducer(reducer, initialState)

const { item, history, loading, error } = state

const onPressEditProfile = () => {}

async function getItem() {
      dispatch(actionCreators.loading())

      try {
        if (url in history){
           dispatch(actionCreators.local(history[url]))
        } else if (url.indexOf('http') > -1){
          const response = await fetch(url)
          const json = await response.json()
          if(json){
            dispatch(actionCreators.success(route.params?.id ? json : json[0], url))
          }   
        } else {
          const json = route.params?.id ? data[route.params?.id] : items.item
          dispatch(actionCreators.success(json, url))
        }
      } catch (e) {
        dispatch(actionCreators.failure())
      }
    }

useEffect(() => {
    getItem();
}, []);
  
if (loading) {
    return (
        <View style={styles.center}>
        <ActivityIndicator animating={true} />
        </View>
    )
}

return(
<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</View>
</View>
<Stats item={'stats' in item ? item.stats: item} navigation={navigation}/>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</View>
<Text style={styles.user_bio}>{item.user_bio}</Text>
</View>
<Posts item={'posts' in item ? item.posts: item} navigation={navigation}/>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
<TouchableOpacity  onPress={onPressEditProfile}>
    <View style={styles.edit_profile}>{'Edit Profile'}</View>
</TouchableOpacity>
</View>
<Text style={styles.user_bio}>{item.user_bio}</Text>
</ScrollView>
)}

export default Profile;

const styles = StyleSheet.create({
    "center": {
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "user_bio": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "edit_profile": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    }
});