import { StyleSheet, Text, View } from 'react-native';
import React from 'react' ;

export default function App() {
  return (
    <View style={styles.viewstyle}>
      <Text style={styles.headingText}>My Hobbies:</Text>
      <Text style={styles.subHeading}>1. Chess</Text>
      <Text style={styles.subHeading}>2. Eating</Text>
      <Text style={styles.subHeading}>3. Soccer</Text>
      <Text style={styles.subHeading}>3. Gym</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewstyle: {
    flex: 1,
    backgroundColor: '#0707e0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headingText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffc2cd'
  }
});
