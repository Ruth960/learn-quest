import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function HeroSection(){

    return(
        <View style={styles.container}>
            <View>            
            <Text style={{fontWeight:'bold', fontSize: 26, textAlign:'center', padding: 5,}}>Welcome</Text>
                <Text style={styles.text}>Start your learning journey and unlock 
                        new achievements.</Text>
            </View>
            <View style={{
                backgroundColor:'white',
                padding:  20,
                margin:10,
                width: 450,
                alignItems:'center',
                borderRadius: 5,
                flexDirection: 'column',
                
                elevation: 20,
                
            }}>
                
                
                <Text> <Text style={{
                    backgroundColor:''
                }}>
                    <FontAwesome5 name="fire" size={24} color="orange" /> 
                    </Text>  Current Streak</Text>
                <Text>0  days</Text>
               
                
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        padding: 10,
        
    },
    
    text:{
        fontSize: 18,
        textAlign:'center'


    }
})