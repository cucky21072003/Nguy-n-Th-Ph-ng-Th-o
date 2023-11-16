import { View, Text,Image,TouchableOpacity,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    const image1 = require('../Home/img/2.jpg');
    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.topContent}>
              <Text style={styles.topContent1}>Hello</Text>
              <Text style={styles.topContent2}>Christie Doe</Text>
            </View>
            <Image source={image1} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>Your insights</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.boxContainer}>
              <TouchableOpacity style={styles.box}>
                <MaterialCommunityIcons name="home" color={'#3498db'} size={26} />
                <Text>Scan new</Text>
                <Text>Scanned 483</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <MaterialCommunityIcons name="home" color={'#3498db'} size={26} />
                <Text>Counterfeits</Text>
                <Text>Counterfeits 32</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity style={styles.box}>
                <MaterialCommunityIcons name="home" color={'#3498db'} size={26} />
                <Text>Success</Text>
                <Text>Checkout 8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box}>
                <MaterialCommunityIcons name="home" color={'#3498db'} size={26} />
                <Text>Director</Text>
                <Text>History 26</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#ecf0f1',
  },
  topContent: {
      flexDirection: 'column',
  },
  topContent1: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  topContent2: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  image: {
      width: 50,
      height: 50,
      borderRadius: 25,
  },
  content: {
      padding: 10,
  },
  contentText: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  scrollView: {
      flex: 1,
      padding: 10,
  },
  boxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
  },
  box: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 10,
      margin: 5,
      elevation: 3,
  },
})
  
export default Home