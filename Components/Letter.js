import { Formik, Field, Form } from "formik";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { object, string } from "yup";
import DropdownComponent from "../SubComponents/leaveLetterDropDown";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

let userSchema = object({

  Description: string().max(50).required("Required"),
  fromDate: string()
    .max(10)
    .matches(/^[0-9/]*$/, 'only "DD/MM/YYYY"'),
  // Description: string()
  //     .Description('Must be a valid Description')
  //     .required('Required')
  //     .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[kgkite]+(?:\.[ac.in]+)*$/, 'College Description only!'),
  rollNo: string().max(10).required("Required"),
});

export default function Letter(props) {
  const navigation = useNavigation();
  const [dataset, setDataset] = useState("");
  const addData = async (value) => {
    // if (myArray[0] !== values.email) {
    try {
      const docRef = await addDoc(collection(db, "studentData"), value);
      console.log("values.fullName")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // } else {
    //   alert("data is there");
    // }
  };
  // const [isFocus, setIsFocus] = useState(false);
  const home = (home) => {
    setDataset(home);
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        Description: "",
        rollNo: "",
        fromDate: "",
        toDate: "",
      }}
      validateOnMount={true}
      onSubmit={(values) => console.log(values)}
      validationSchema={userSchema}
    >
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <View style={styles.overAll}>
          <DropdownComponent home={home} />

          <View style={styles.inputContainers}>
            <TextInput
              multiline
              minHeight={100}
              onChangeText={handleChange("Description")}
              onBlur={handleBlur("Description")}
              value={values.Description}
              style={styles.description}
              placeholder="Explain the Situation"
              placeholderTextColor="grey"
            />

            {errors.Description && touched.Description && (
              <Text style={styles.errors}>{errors.Description}</Text>
            )}
          </View>

          <View style={styles.parentView}>
            <View style={styles.containedView1}>
              <Text style={styles.text1}>From Date</Text>
              <TextInput
                onChangeText={handleChange("fromDate")}
                onBlur={handleBlur("fromDate")}
                value={values.fromDate}
                style={styles.fromDate}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="grey"
              />
              {errors.fromDate && touched.fromDate && (
                <Text style={styles.errors}>{errors.fromDate}</Text>
              )}
            </View>
            <View style={styles.containedView2}>
              <Text style={styles.text2}>To Date</Text>
              <TextInput
                onChangeText={handleChange("toDate")}
                onBlur={handleBlur("toDate")}
                value={values.toDate}
                style={styles.toDate}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="grey"
              />
              {/* {(errors.toDate && touched.toDate) &&
                                <Text style={styles.errors}>{errors.toDate}</Text>
                            } */}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.Button}>
              <Button
                // style={styles.Button}
                title="Submit"
                // disabled={Object.keys(errors).length !== 0}
                onPress={() => {
                  console.log(dataset + "dataset");
                  console.log(values.Description);
                  console.log(values.fromDate);
                  console.log(values.toDate);
                  console.log(props.name);
                  console.log(props.rollno);
                  addData( {
                    "description": values.Description,
                    "fromDate": values.fromDate,
                    "rollNo": props.rollno,
                    "toDate": values.toDate,
                    "reason": dataset,
                    "name": props.name,
                  });
                  navigation.navigate("Requested",{paramKey: props.name});
                }}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  parentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 24,
    paddingRight: 24,
  },
  overAll: {
    backgroundColor: "#fff",
    paddingBottom: 16,
  },
  datepicker: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containedView1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containedView2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainers: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  fullnameInput: {
    borderWidth: 1,
    width: 350,
    height: 60,
    // padding: 4,
    borderRadius: 10,
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    width: 350,
    height: 60,
    textAlign: "center",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  rollNo: {
    borderWidth: 1,
    width: 350,
    height: 60,
    // padding: 4,
    borderRadius: 10,
    marginTop: 10,
    textAlign: "center",
  },
  fromDate: {
    borderWidth: 1,
    width: 170,
    height: 60,
    // padding: 4,
    borderRadius: 10,
    marginTop: 10,
    textAlign: "center",
    // paddingTop: 20
  },
  toDate: {
    borderWidth: 1,
    width: 170,
    height: 60,
    // padding: 4,
    borderRadius: 10,
    marginTop: 10,
    textAlign: "center",
  },
  errors: {
    fontSize: 12,
    color: "red",
    fontWeight: "medium",
    marginTop: 10,
  },
  // buttonText: {
  //     color: 'white'
  // }
  Button: {
    width: 350,
    marginTop: 10,
  },
  text1: {
    paddingTop: 10,
    // color: 'black'
    fontWeight: "900",
  },
  text2: {
    paddingTop: 10,
    fontWeight: "900",
  },
});
