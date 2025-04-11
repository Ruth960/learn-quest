// app/(tabs)/index.tsx
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import Progress from '@/components/home/Progress';
import LeaderboardSnippet from '@/components/home/LeaderboardSnippet';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <HeroSection />
        <Progress />
        <LeaderboardSnippet />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgb(238, 238, 247)',
  },
});