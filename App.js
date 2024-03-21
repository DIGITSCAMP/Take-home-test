import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.detailsBox}>
      <Text>Toka Lethunya</Text>
      <Image
        source={require("./Img.png")}
        style={styles.Pic}
      />
        <Text>BscSM Y2S2</Text>
        <Text>Course:C++ =A*</Text>
        <Text>Course:Java 1=A*</Text>
        <Text>Course:Probabilityand Statistics=A*</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  white: {
    color: 'red',
    fontSize: 20,
    marginBottom: 5,
  },
  Pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  detailsBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'},
});
