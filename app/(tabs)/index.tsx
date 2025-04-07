import { Image, StyleSheet, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import Progress from '@/components/home/Progress';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <HeroSection/>
      <Progress/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   container: {
    padding: 10,
    margin:10,
    backgroundColor:'rgb(238, 238, 247)',
    height: '100%',
    },
 
});
