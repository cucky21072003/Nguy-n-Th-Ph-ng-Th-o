import { View, Text,Button,TextInput,TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import styles from './styles';

const Search = () => {
  return (
    <View>
        <View style={styles.search}>
            <Text style={styles.text}>Tìm kiếm</Text>
            <TextInput style={styles.input} placeholder='Search'/>
            <TouchableOpacity>
                <Button 
                title='Search' 
                onPress={() => Alert.alert('No Product!')}
                />
            </TouchableOpacity>                
        </View>   
    </View>
  )
}

export default Search