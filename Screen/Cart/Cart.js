import { View,Image,Text,StyleSheet} from 'react-native'
import React from 'react'


const Cart = () => {
 return(
  <View>
    <View>
      <Text style={styles.title}>Your cart</Text>
    </View>
    
  </View>
 )
 }
 const styles = StyleSheet.create({
   title:{
      marginTop: 100,
      marginLeft:20,
      fontSize: 26,
   }
 })
export default Cart;