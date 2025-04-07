import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header(){
    // const onClick()=>

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Learn Quest</Text>
            <TouchableOpacity>
           
           <MaterialIcons name="menu" size={24} color="white" />
            </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        padding:20,
        backgroundColor:'blue',
        height: 100,


    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
    }
})