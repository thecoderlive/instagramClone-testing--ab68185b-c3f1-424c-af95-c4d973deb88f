import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Image } from 'react-native'



function PostImages({ item, navigation }){



function postImagesItem({ item }){
return (
<View style={styles.post_images_item}>
<Image
    style={styles.post}
    source={{uri: item.post}}
    />
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.post_images}
    data={item}
    renderItem={postImagesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default PostImages;

const styles = StyleSheet.create({
    "post": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    }
});