import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function Stats({ item, navigation }){



function statsItem({ item }){
return (
<View style={styles.stats_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.posts_count} numberOfLines={1}>{item.posts_count}</Text>
<Text style={styles.followers_count} numberOfLines={1}>{item.followers_count}</Text>
<Text style={styles.following_count} numberOfLines={1}>{item.following_count}</Text>
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.stats}
    data={item}
    renderItem={statsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default Stats;

const styles = StyleSheet.create({
    "posts_count": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "followers_count": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "following_count": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});