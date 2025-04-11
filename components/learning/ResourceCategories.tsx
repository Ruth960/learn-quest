
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Mock data for resource categories
const categories = [
  { id: 1, name: 'Mathematics', icon: 'calculator', color: '#4CAF50', count: 15 },
  { id: 2, name: 'Science', icon: 'flask', color: '#2196F3', count: 12 },
  { id: 3, name: 'Language', icon: 'book', color: '#9C27B0', count: 9 },
  { id: 4, name: 'History', icon: 'landmark', color: '#FF9800', count: 7 },
  { id: 5, name: 'Geography', icon: 'globe-americas', color: '#00BCD4', count: 5 },
  { id: 6, name: 'Arts', icon: 'palette', color: '#E91E63', count: 8 },
];

export default function ResourceCategories() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      
      <View style={styles.categoriesGrid}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
              <FontAwesome5 name={category.icon} size={24} color="white" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.resourceCount}>{category.count} resources</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    width: '48%',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resourceCount: {
    color: '#666',
    fontSize: 14,
  },
});