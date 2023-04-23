import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Letter from './Letter';
// import { useRoute } from '@react-navigation/native';
import Requested from './Requested';
import { useNavigation } from '@react-navigation/native';

export default function Home({route}) {
    const navigation = useNavigation();
    // const route = useRoute;
    return(
        <View>
            <View style={styles.overall}>

                <TouchableOpacity style={styles.Button}>
                    {/* <Text style={styles.leaveLetter} onPress={() => navigation.navigate('Home')}>Write Mail</Text> */}
                    <Text style={styles.leaveLetter}>Write Mail</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.Button2}>
                    <Text style={styles.requestPage} onPress={() => navigation.push('Requested')}>View Requested</Text>
                </TouchableOpacity>

            </View>

            <View>
                <Text style={styles.welcome}>Hello, {route.params.paramKey} from {route.params.paramKeyRoll}.</Text>
            </View>

            <View style={styles.leaveLetter}>
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
    requestPage: {
        opacity: .54
    },
    leaveLetter: {
        opacity: 1
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
    },
    welcome: {
        fontWeight: '900',
        textAlign: 'center',
        padding: 20
    }
})