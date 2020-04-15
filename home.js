import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';


export default function Home({ navigation }) {
    
    const [specialisedJewellers, setSpecialisedJewellers] = useState([
        { name: 'Antony Banda', phn:260977111111, key: '1' },
        { name: 'Bridget Mwanza', phn:+260977222222, key: '2' },
        { name: 'Edna Bwalya', phn:260977333333, key: '3' },
        { name: 'Mark Rudoff', phn:260977444444, key: '4' },
        { name: 'Drew Johnson', phn:260977555555, key: '5' },
        { name: 'Robert Spikes', phn:260977666666, key: '6' },
        { name: 'Steven Mollow', phn:260977777777, key: '7' },
    ]);

    return (
      <View style={styles.container}>
        <ScrollView>
            <Image
                source={require('./assets/1.jpg')}
            />
            <Text style={styles.imgText}>
                spider ring. By Antony Banda
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/2.jpg')}
            />
            <Text style={styles.imgText}>
            Peacock Glass Blue Green Iridescent Spider Gothic Long Necklace. By Bridget Mwanza
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/3.jpg')}
            />
            <Text style={styles.imgText}>
            Silver spider Necklace in stainless steel, silhouette jewelry, Y necklace. By Edna Bwalya
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/4.jpg')}
            />
            <Text style={styles.imgText}>
            Lady Arachne Spider Necklace & Earrings. By Mark Rudoff
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/5.jpg')}
            />
            <Text style={styles.imgText}>
            Large Spider Pendant 14k Gold. By Drew Johnson
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/6.jpg')}
            />
            <Text style={styles.imgText}>
            Halloween themed earrings. Spider earrings. Black and silver colour earrings. Great for Halloween party outfit accessory. By Robert Spikes
            </Text>
            <Text></Text>
            <Image
                source={require('./assets/7.jpg')}
            />
            <Text style={styles.imgText}>
            Spider earrings. Handmade and nickel free. 3” long. By Steven Mollow
            </Text>
            <Text></Text><Text></Text>
            <Text style={styles.imgText}>
            If you like any on the pieces, click on the name of the Specialist you would like to book an appointment with below:
            </Text>
            <FlatList
                data={specialisedJewellers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Appointment', item)}>
                    <Text style={styles.item}>
                        {item.name}
                    </Text>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
      </View>
    );

}


const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    marginTop: 10,
    padding: 30,
    backgroundColor: '#aec2f5',
    fontSize: 20
  },
  imgText: {
      fontSize: 20,
  }
});