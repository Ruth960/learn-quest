import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Progress() {
  // Progress percentage (0-1)
  const progressValue = 0.3;
  
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <FontAwesome5 name="tasks" size={18} color="#666" style={styles.icon} />
        <Text style={styles.title}>Daily Challenge</Text>
      </View>
      
      <Text style={styles.description}>Complete 3 math lessons today</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress: 1/3 complete</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progressValue * 100}%` }]} />
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.pointsContainer}>
          <FontAwesome5 name="star" size={16} color="#FFC107" />
          <Text style={styles.pointsText}>20 points</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pointsText: {
    marginLeft: 5,
    color: '#FF8F00',
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});