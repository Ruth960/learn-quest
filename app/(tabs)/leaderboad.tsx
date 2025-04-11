import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/home/Header';
// import LeaderboardFilters from '@/components/leaderboard/LeaderboardFilters';
// import LeaderboardList from '@/components/leaderboard/LeaderboardList';

export default function Leaderboard() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
         
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
});