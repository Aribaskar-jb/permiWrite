// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useRoute } from '@react-navigation/native';

// const TeachersDashboard = () => {
//     const route = useRoute();
//   return (
//     <View>
//       <Text>Hi, {route.params.name}. This is your Dashboard.</Text>
//     </View>
//   )
// }

// export default TeachersDashboard

// const styles = StyleSheet.create({})
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function TeachersDashboard({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "studentData"));
        const data = [];
        querySnapshot.forEach((doc) => data.push(doc.data()));
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
        <Row
          data={["Name", "Reason", "From Date", "To Date", "Description"]}
          style={styles.head}
          textStyle={styles.text}
        />
        {/* <Rows
          data={data.map((item) => [
            item.name,
            item.reason,
            item.fromDate,
            item.toDate,
            item.description,
          ])}
          textStyle={styles.text}
        /> */}
        <Rows
          data={data.map((item) => {
              return [
                <Text style={styles.highlight}>{item.name}</Text>,
                <Text style={styles.highlight}>{item.reason}</Text>,
                <Text style={styles.highlight}>{item.fromDate}</Text>,
                <Text style={styles.highlight}>{item.toDate}</Text>,
                <Text style={styles.highlight}>{item.description}</Text>,
              ];
          })}
          textStyle={styles.text}
        />
      </Table>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
