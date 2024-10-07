import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const Avatar = ({ isDarkMode }) => { 
  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/sebere.png')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Michael V </Text> 
          <Text style={[styles.statusText, isDarkMode ? styles.darkStatusText : styles.lightStatusText]}>
            Joined a long long time ago
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray', 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250, 
    marginBottom: -10,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E',
  },
  content: {
    alignItems: 'center', 
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderColor: '#E0E0E0',  
    borderWidth: 2,
    margin: 45,
  },
  joinedContainer: {
    justifyContent: 'center', 
    padding: 10,  
    borderRadius: 10,  
    maxWidth: '80%', 
    alignItems: 'center', 
    marginTop: -50, 
  },
  nameText: {
    fontSize: 18,  
    fontWeight: 'bold',
    color: 'black',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
    marginBottom: 3,  
  },
  darkText: {
    color: 'white',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
  },
  
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',  
  },
  darkStatusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',  
    textShadowColor: '#FFFFFF', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2, 
  },
});

export default Avatar;