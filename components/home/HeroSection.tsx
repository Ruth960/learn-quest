// components/home/HeroSection.tsx
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <View>            
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.subheading}>Start your learning journey and unlock new achievements.</Text>
      </View>
      <View style={styles.streakCard}>
        <FontAwesome5 name="fire" size={24} color="orange" /> 
        <View style={styles.streakTextContainer}>
          <Text style={styles.streakLabel}>Current Streak</Text>
          <Text style={styles.streakCount}>5 days</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  heading: {
    fontWeight: 'bold', 
    fontSize: 26, 
    textAlign: 'center', 
    padding: 5,
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  streakCard: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    width: '90%',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  streakTextContainer: {
    marginLeft: 15,
    alignItems: 'center',
  },
  streakLabel: {
    fontSize: 16,
    color: '#666',
  },
  streakCount: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});