import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    const image1 = require('../Categories/img/0456.jpg_wh860.jpg');
    const image3 = require('../Categories/img/bb4228b856d20a90f9c019cfb0117ef5.jpg');
    const image4 = require('../Categories/img/da01079128fe7d6ccc366f3b691156a9.jpg');
    const image5 = require('../Categories/img/istockphoto-489953626-612x612.jpg');
  return (
    
    <View style={styles.body}>
        <ScrollView>
            <TouchableOpacity>
                <View style={[styles.cartImage,styles.cartImage2]}>
                    <View>
                        <Image source={image1} style={styles.image}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Image1</Text>
                        <Text style={styles.text}>21 days ago</Text>
                        <Text style={styles.text}>Fancisco</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textMoney}>$100</Text>
                    </View>  
                </View>

                <View style={styles.cartImage}>
                    <View>
                        <Image source={image3} style={styles.image}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Image3</Text>
                        <Text style={styles.text}>21 days ago</Text>
                        <Text style={styles.text}>Fancisco</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textMoney}>$100</Text>
                    </View>  
                </View>

                <View style={styles.cartImage}>
                    <View>
                        <Image source={image4} style={styles.image}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Image4</Text>
                        <Text style={styles.text}>21 days ago</Text>
                        <Text style={styles.text}>Fancisco</Text>
                    </View>
                    <View style={styles.cartImage}>
                        <Text style={styles.textMoney}>$100</Text>
                    </View>  
                </View>

                <View style={styles.cartImage}>
                    <View>
                        <Image source={image5} style={styles.image}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}>Image5</Text>
                        <Text style={styles.text}>21 days ago</Text>
                        <Text style={styles.text}>Fancisco</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textMoney}>$100</Text>
                    </View>  
                </View>
     
            </TouchableOpacity>
            
        </ScrollView>
    </View> 
      
  )
}

export default Home