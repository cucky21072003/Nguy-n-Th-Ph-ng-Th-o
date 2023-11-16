import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

const Scan = () => {
    const image = require('../Home/img/water.png')
    return (
      <View>
        <Image source={image} style={styles.imageFull}/>

        <View style={styles.overlay}>
            <Image source={image} style={styles.smallImage} />
            <Text>Orange juice </Text>
            <Text style={styles.overlayText}>+</Text>
        </View>

      </View>
    )
  
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageFull: {
        width: '100%',
        height: '100%',
      },
      overlay: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 10,
      },
      smallImage: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      overlayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498db',
      },
    });

export default Scan