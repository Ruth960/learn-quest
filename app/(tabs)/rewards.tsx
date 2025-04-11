import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/home/Header';
import RewardsBadges from '@/components/rewards/RewardsBadges';
// import RewardsProgress from '@/components/rewards/RewardsProgress';
// import DailyChallenge from '@/components/rewards/DailyChallenge';

export default function Rewards() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <RewardsBadges />
        
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