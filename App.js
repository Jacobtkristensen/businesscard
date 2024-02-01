import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <div style={styles.div1}>
      <Text style={styles.text1}>Dorthe Poulsen</Text>
      <Image style={styles.tesla} source = './images/tesla-removebg-preview.png' resizeMode='contain'/>
      <Image style={styles.img2} source = './images/bperson.png'/>
      <Image style={styles.QR} source = './images/QR.png'/>

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
    backgroundColor : 'black',
  },
  text1: {
    color: 'black',
    fontSize: 15,
    position: 'absolute',
    top: 0,
    left: 20,
  },
   tesla: {
    width: 75,
    height: 75,
    position: 'absolute',
    right: 0,
    bottom: -20,
    },
  img2: {
   width: 150,
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: -30,
    },
  QR: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
  },
  div1: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    position: 'relative',
  },
});
