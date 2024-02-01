import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div style={styles.div1}>
      <Text></Text>
      <Image style={styles.img} source = {{uri:"https://i.ebayimg.com/images/g/iDcAAOSwo9VbDbfn/s-l500.jpg"}}/>
      <Image style={styles.img2} source = './images/bperson.png'/>

      </div>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   img: {
    width: 150,
    height: 100,
    position: 'absolute',
    bottom: -30,
    right: -10,
    },
  img2: {
   width: 150,
    height: 100,
    position: 'absolute',
    top: 10,
    left: -10,
    },
  div1: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
  },
});
