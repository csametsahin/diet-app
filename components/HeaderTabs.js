import { View, Text } from 'react-native'
import React ,{useState} from 'react'
import { TouchableOpacity } from 'react-native'


export default function HeaderTabs() {
    const [activeTab,setActiveTab] =useState("Diet");
  return (
    <View style={{flexDirection:"row" ,alignSelf:"center"}}>
      <HeaderButton text="Diet"  activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text="Blog"  activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButton = (props) =>(
    <TouchableOpacity style={{backgroundColor:  props.activeTab === props.text ? "#D18CE0" : "white",
                              paddingVertical:6,
                              paddingHorizontal:16,
                              borderRadius:30,                                                         
    }}
    onPress={() => props.setActiveTab(props.text)}
    ><Text style={{color:props.activeTab === props.text ? "white" : "black",}}>{props.text}</Text></TouchableOpacity>
)
