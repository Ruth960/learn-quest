// app/(tabs)/profile.tsx
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
          
          <View style={styles.profileSection}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/100' }} 
              style={styles.profileImage} 
            />
            <Text style={styles.userName}>John Doe</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Level 3</Text>
            </View>
          </View>
          
          <View style={styles.statsSection}>
            <View style={styles.statItem}>
              <FontAwesome5 name="award" size={24} color="#FFD700" />
              <Text style={styles.statValue}>7</Text>
              <Text style={styles.statLabel}>Badges</Text>
            </View>
            <View style={styles.statItem}>
              <FontAwesome5 name="book-open" size={24} color="#4CAF50" />
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <FontAwesome5 name="fire" size={24} color="#FF5722" />
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Streak</Text>
            </View>
          </View>
          
          <View style={styles.achievementsSection}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.badgeGrid}>
              {[1, 2, 3, 4, 5].map((item) => (
                <View key={item} style={styles.badge}>
                  <FontAwesome name="medal" size={30} color="#FFD700" />
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.actionsSection}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="edit" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'rgb(238, 238, 247)',
    height: '100%',
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  levelBadge: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  levelText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statLabel: {
    color: '#666',
  },
  achievementsSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  badge: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 5,
  },
  actionsSection: {
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});