import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Letter from './Letter';

export default function Home({navigation}) {
    return(
        <View>
            <View style={styles.overall}>

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.leaveLetter} onPress={() => navigation.navigate('Letter', {})}>Write Mail</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Button2}>
                    <Text style={styles.leaveLetter} onPress={() => navigation.navigate('Letter')}>View Requested</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.letterPage}>
                <Letter />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    overall:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    Button:{
        // marginTop: 10,
        backgroundColor: '#ffffff',
        width: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        color: '#d9d9d9',
        // justifyContent: 'center'
        alignItems: 'center'
    },
    leaveLetter: {
        opacity: .54
    },
    Button2: {
        backgroundColor: '#ffffff',
        width: 200,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        color: '#d9d9d9',
        // justifyContent: 'flex-start'
        alignItems: 'center',
    }
})