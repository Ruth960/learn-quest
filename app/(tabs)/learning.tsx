
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/home/Header';
import ResourceCategories from '@/components/learning/ResourceCategories';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

export default function Learning() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search lessons and quizzes"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
          <ResourceCategories />
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
  searchContainer: {
    paddingVertical: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});