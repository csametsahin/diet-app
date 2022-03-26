import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

export const ogunler=[
  {
      name:"Kahvaltı Öğünü",
      image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Breakfast_Platter.jpg/1200px-Breakfast_Platter.jpg",
      kalori:'600',
      rating:'4.2',

  },
  {
    name:"Öğlen Yemeği",
    image_url:"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/HummusBowl-65a0050.jpg",
    kalori:'500',
    rating:'4.5',

},
{
  name:"Akşam Yemeği",
  image_url:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_05/2736521/190131-stock-taco-bar-food-ew-1220p-2736521.jpg",
  kalori:'800',
  rating:'4.6',

}, 
]

export default function CalCalculate(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:5}}>
      {props.calData.map((ogun,index) =>(
    <View key={index} style={{backgroundColor:'white',marginTop:10,padding:15,borderRadius:10 }}>
      <FoodImage image={ogun.image_url}></FoodImage>
      <FoodInfo name={ogun.name} rating={ogun.rating} kalori={ogun.kalori}></FoodInfo>
    </View>))}
    </TouchableOpacity>
  )
}

const FoodImage = (props) => (
     <>
      <Image source ={{
        uri: props.image
      }}
      style={{width:"100%", height:180}}
      />
      <TouchableOpacity>
      </TouchableOpacity>
      </>
);

const FoodInfo = (props) => (
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
      <View>
    <Text style={{fontSize:15,fontWeight:"bold"}}>{props.name}</Text>
    <Text style={{fontSize:13,color:"gray"}}>Kalori : {props.kalori}</Text>
    </View>
    <View style={{backgroundColor:'#eeee' , height:30,width:30,alignItems:"center",borderRadius:15,justifyContent:'center'}}>
    <Text >{props.rating}</Text>
    </View>
    </View>
)