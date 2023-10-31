import { View, Text,Image} from 'react-native'
import React from 'react'
import styles from './styles';
import { Button, Icon } from 'react-native-paper';

const Categories = () => {
  const image = require('../Categories/img/imgFlowers1.png')
     return (
    <View style={styles.body}>
        <Image
          source={image} style={styles.image123}
        />

        <View style={styles.content}>
          <Text style={styles.textBigg}>Go for a walk and feed the dog</Text>
        </View>

        <View style={styles.textSug}>
          <Text style={styles.content2}>
          Leaving for a week, French Bulldog Wilfred needs help feeding twice a day
          and walk from 26 to 30 September. I bought food, it will be easy.
          </Text>
        </View>

        <View style={styles.textIcon}>
          <Icon name="wallet" size={20} color="black"/>
          <Text style={styles.contact}>Reward 34$</Text>
        </View>

        <View style={styles.textIcon}>
          <Icon name="geo" size={20} color="black"/>
          <Text style={styles.contact}>3 HERALD</Text>
          <Text style={styles.textcontact}>400m from you</Text>
        </View>

        <View style={styles.textIcon}>
          <Icon name="message" size={50} color="black"/>
          
        </View>
    </View>
  )
}

export default Categories