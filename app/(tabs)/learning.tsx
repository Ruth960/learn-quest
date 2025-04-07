import{ScrollView, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/home/Header'

export default function Learning(){

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Header/>
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
    padding: 10,
    margin:10,
    backgroundColor:'rgb(238, 238, 247)',
    height: '100%',
    },
 
});