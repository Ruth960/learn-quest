import {View, Text, TouchableOpacity} from 'react-native';

export default function Progress(){
    return(
        <View style={{
            backgroundColor:'white',
            elevation: 20,
            margin:10,
            borderRadius:10,
        }}>
            <View style={{
                margin:10,

            }}>
                <Text></Text>
                <Text style={{
                    fontWeight:'500',
                    fontSize:20,
                    
                }}
                >Daily Challange</Text>
                <Text>Complete 3 math lessons today</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
                margin:10,
                padding: 10,
            }}>
                <Text style={{
                    backgroundColor:"rgb(224, 185, 101)",
                    borderRadius: 25,
                    padding:5,

                }}>points</Text>
                <TouchableOpacity style={{
                    backgroundColor:'hsl(236, 72.00%, 47.60%)', 
                    borderRadius:10,
                    height:40,
                    width: 100,
                    

                }}><Text style={{
                    color:'white',
                    fontSize: 14,
                    textAlign:'center',
                    padding: 10,
                }}>Start  Now</Text></TouchableOpacity>
            </View>
        </View>

    ) 
}