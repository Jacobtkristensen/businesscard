import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';


const linkedinURL = 'https://linkedin.com/in/jacob-kristensen-3a530b226';
const githubLink = "https://github.com/Jacobtkristensen/businesscard";
export default function App() {

  const openURL = (url) => {
    Linking.openURL(url);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://media.licdn.com/dms/image/D4D03AQFuN25jaspnAA/profile-displayphoto-shrink_800_800/0/1703550640817?e=1712793600&v=beta&t=5jpbHab-Ms_LLwijM2J46A4vfeoSb1hofsbPoOgaAN0" }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Jacob Kristensen</Text>
        <Text style={styles.title}>React-native student</Text>
      </View>
      <Pressable style={styles.linkedinButton} onPress={() => openURL(linkedinURL)}>
        <Image
          source={{ uri: 'https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584840.jpg' }} 
          style={styles.linkedInLogo}/>
        <Text style={styles.linkedinButtonText}>LinkedIn</Text>
      </Pressable>
      <View style={styles.about}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.aboutFiller}>Student at KEA, learning to develop mobile applications using React-native.</Text>
      </View>
      <View style={styles.interests}>
        <Text style={styles.interests}>Interests</Text>
        <Text style={styles.interestsFiller}>Interested in all things software development, and I am currently learning React-native,
         Datastructure & Algorithms and Fullstack Node.js</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with React-native</Text>
        <Pressable style={styles.githubButton} onPress={() => openURL(githubLink)}>
        <Image source={require('./images/github-mark-white.png')} style={styles.githubLogo}/>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25282e',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginTop: 8,
    alignItems: 'center',

  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
  },
  about: {
    marginTop: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'stretch',
  },
  aboutFiller: {
    marginTop: 8,
    color: 'white',
    fontSize: 12,
  },
  interests: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'stretch',

  },
  interestsFiller: {
    marginTop: 8,
    color: 'white',
    fontSize: 12,
  },
  linkedInLogo: {
    width: 20,
    height: 20,
  },
  linkedinButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077b5',
    padding: 5,
    borderRadius: 5,
  },
  linkedinButtonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 8,
    position: 'relative',
  },
  githubButton: {
    borderRadius: 5,
  },
  githubLogo: {
    width: 30,
    height: 30,
  },
});
