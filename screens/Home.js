import { View, Text,SafeAreaView,ScrollView } from 'react-native'
import SafeAreaAndroid from '../components/SafeAreaAndroid'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import Categories from '../components/Categories'
import CalCalculate, { ogunler } from '../components/CalCalculate'



export default function Home() {
  const[calData,setCalData]=React.useState(ogunler)
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea} >
        <View style={{backgroundColor:"white" ,padding:15}}><HeaderTabs/></View>
        <ScrollView showsVerticalScrollIndicator={false}>
           <Categories></Categories>
           <CalCalculate calData={calData}></CalCalculate>
        </ScrollView>

    </SafeAreaView>
  )
}