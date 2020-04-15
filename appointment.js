import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Appointment({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                if you want to book an appointment with :
                { navigation.getParam('name') }
                
            </Text>
            <Text></Text>
            <Text style={styles.txt}>
                Call :
                { navigation.getParam('phn') }
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  txt: {
      fontSize: 20,
  }
});