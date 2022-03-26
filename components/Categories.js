import { StyleSheet, Text, View ,Image , ScrollView} from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/deals.png"),
        text: "Diyet Listem"
    },
    {
        image: require("../assets/images/fitness.png"),
        text: "Spor"
    }
    ,
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Market"
    }
    ,
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Market"
    },
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Market"
    },
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Market"
    }
]

export default function Categories() {
  return (
      <View style={{marginTop:5, 
      backgroundColor:'#fff',
      paddingVertical:10,
      paddingLeft:20}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item,index) =>(
            <View key={index} style={{alignItems:'center',marginRight:30}}>
        <Image source={item.image} style={{
            width:50,
            height:40,
            resizeMode:"contain",
        }}/>
        <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
        </View>
        ))}
    
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})