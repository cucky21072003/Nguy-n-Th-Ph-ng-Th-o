import { View, Text,Image} from 'react-native'
import React from 'react'
import styles from './styles';

const Categories = () => {
  const image = require('../Categories/img/avatar-Meo-buon-cute.jpg')
     return (
    <View style={styles.body}>
        <Image
          source={image} style={styles.image123}
        />
        <Text style={styles.text}>Em chưa làm xong bài ạ!!!</Text>
    </View>
  )
}

export default Categories