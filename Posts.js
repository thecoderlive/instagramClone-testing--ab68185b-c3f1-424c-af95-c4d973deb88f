import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import PostImages from './PostImages'

function Posts({ item, navigation }){

const onPressViewComments = () => {}

function postsItem({ item }){
return (
<View style={styles.posts_item}>
<PostImages item={'post_images' in item ? item.post_images: item} navigation={navigation}/>
<View style={{flexDirection: 'row'}}>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.comment,{ backgroundColor: item.comment ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.share,{ backgroundColor: item.share ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.save,{ backgroundColor: item.save ? 'red' : 'black' }]}
   />}
<Text style={styles.post_label} numberOfLines={1}>{item.post_label}</Text>
</View>
<Text style={styles.post_description}>{item.post_description}</Text>
<TouchableOpacity  onPress={onPressViewComments}>
    <View style={styles.view_comments}>{'View Comments'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Posts;

const styles = StyleSheet.create({
    "like": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "save": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "share": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "comment": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "post_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "view_comments": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "post_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});