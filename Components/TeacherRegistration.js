// import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Home from './Home';
import { db } from '../Firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// import { Button } from 'react-native-web';
// import Dashboard from './Dashboard';

let userSchema = object({
    fullName: string()
        .max(50)
        .required('Required'),
    email: string()
        .email('Must be a valid email')
        .required('Required')
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'College email only!'),
    // rollNo: string()
    //     .max(10)
    //     .required('Required'),
});


export default function TeacherRegistration({ navigation }) {

    // const addData = async (values) => {
    //     // if (myArray[0] !== values.email) {
    //       try {
    //         const docRef = await addDoc(collection(db, "userData"), values);
    //         // console.log(values.fullName)
    //       } catch (e) {
    //         console.error("Error adding document: ", e);
    //       }
    //     // } else {
    //     //   alert("data is there");
    //     // }
    //   };

    return (
        <Formik
            initialValues={{ fullName: '', email: '',}}
            validateOnMount={true}
            onSubmit={values => console.log(values)}
            validationSchema={userSchema}
        >
            {({ handleChange, handleBlur, values, touched, errors }) => (
                <View style={styles.overall}>
                  <Text style={styles.title}>Teacher Registration</Text>
                    <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                                style={styles.fullnameInput}
                                placeholder='Full Name'
                                placeholderTextColor='grey'
                            />
                            {(errors.fullName && touched.fullName) &&
                                <Text style={styles.errors}>{errors.fullName}</Text>
                            }
                        </View>


                    <View style={styles.inputContainers}>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={styles.mailId}
                            placeholder='College Mail ID'
                            placeholderTextColor='grey'
                            keyboardType='email-address'
                            />

                        {(errors.email && touched.email) &&
                            <Text style={styles.errors}>{errors.email}</Text>
                        }
                    </View>

                    <View style={styles.inputContainer}>

                            <View style={styles.Button}>
                                <Button 
                                // style={styles.Button} 
                                title='Submit' 
                                disabled={Object.keys(errors).length !== 0} 
                                onPress={() => {
                                    // addData(values)
                                    navigation.navigate('TeachersDashboard', {name: values.fullName})}}/>
                                {/* <Button style={styles.Button} title='Submit' disabled={Object.keys(errors).length !== 0} onPress={handleSubmit}/> */}

                                {/* <Home /> */}
                            </View>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    overall: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainers: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullnameInput: {
        borderWidth: 1,
        width: 350,
        height: 60,
        // padding: 4,
        borderRadius: 10,
        marginTop: 20,
        textAlign: 'center'
    },
    // lastnameInput: {
    //     borderWidth: 1,
    //     width: 350,
    //     height: 60,
    //     padding: 4,
    //     textAlign: 'center',
    //     borderRadius: 10,
    //     marginTop: 10,
    //     marginLeft: 10
    // },
    headText: {
        textAlign: 'center'
    },
    mailId: {
        width: 350,
        height: 60,
        textAlign: 'center',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10
    },
    rollNo: {
        borderWidth: 1,
        width: 350,
        height: 60,
        // padding: 4,
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    // button: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: 150,
    //     height: 60,
    //     marginTop: 10,
    //     borderRadius: 10,
    //     backgroundColor: '#53A6F3',
    //     marginLeft: 10,
    // },
    errors: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'medium',
        marginTop: 10,
    },
    // buttonText: {
    //     color: 'white'
    // }
    Button: {
        width: 350,
        marginTop: 10
    }
})
