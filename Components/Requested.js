import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, Card, Avatar } from "react-native-paper";

export default function Requested({ route }) {
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
      {data.map((item) => {
        if (item.name === route.params.paramKey) {
          return (
            <Card key={item.id} style={styles.card}>
              <Card.Title
                title={item.name}
                subtitle={`RollNo: ${item.rollNo}`}
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="account"
                    style={styles.avatar}
                  />
                )}
              />
              <Card.Content>
              <Text style={styles.text}>
                  <Text style={styles.label}>Reason: </Text>
                  {item.reason}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>From Date: </Text>
                  {item.fromDate}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>To Date: </Text>
                  {item.toDate}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.label}>Description: </Text>
                  {item.description}
                </Text>
              </Card.Content>
              <Card.Actions>
                {/* <Button>Cancel</Button>
                <Button>Ok</Button> */}
                <Text style={styles.status}>pending</Text>
              </Card.Actions>
            </Card>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  card: {
    margin: 8,
    elevation: 4,
  },
  avatar: {
    backgroundColor: "#007bff",
  },
  label: {
    fontWeight: "bold",
  },
  text: {
    marginVertical: 4,
  },
  status: {
    color: "lightgray"
  }
});
