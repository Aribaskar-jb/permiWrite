// import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Home from './Home';
import { db } from "../Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


let userSchema = object({
    fullName: string()
        .max(50)
        .required('Required'),
    email: string()
        .email('Must be a valid email')
        .required('Required')
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'College email only!'),
});


export default function TeacherRegistration({ navigation }) {
  const addData = async (value) => {
    try {
      const docRef = await addDoc(collection(db, "teacherData"), value);
      console.log("values.fullName")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
                                title='Submit' 
                                disabled={Object.keys(errors).length !== 0} 
                                onPress={() => {
                                    addData({
                                      "name": values.fullName
                                    })
                                    navigation.navigate('TeachersDashboard', {name: values.fullName})}}/>
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
        borderRadius: 10,
        marginTop: 20,
        textAlign: 'center'
    },
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
        borderRadius: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    errors: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'medium',
        marginTop: 10,
    },
    Button: {
        width: 350,
        marginTop: 10
    }
})
