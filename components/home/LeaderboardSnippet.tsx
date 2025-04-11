import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Mock data for top 3 leaderboard
const topUsers = [
  { id: 1, name: 'Emma S.', points: 1250, avatar: 'https://via.placeholder.com/50' },
  { id: 2, name: 'James K.', points: 1120, avatar: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Sofia L.', points: 980, avatar: 'https://via.placeholder.com/50' },
];

export default function LeaderboardSnippet() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Top Learners</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      
      {topUsers.map((user, index) => (
        <View key={user.id} style={styles.userRow}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
          </View>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.points}>{user.points} pts</Text>
        </View>
      ))}
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
    fontSize: 14,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rankContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rank: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
  },
  points: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});