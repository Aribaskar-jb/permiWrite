// import React, { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { db } from "../Firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// import { Card, Button, Avatar } from "react-native-paper";

// export default function TeachersDashboard({ route }) {
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "studentData"));
//         const data = [];
//         querySnapshot.forEach((doc) => data.push(doc.data()));
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {data.map((item, index) => (
//         <Card key={index} style={[styles.card, index === data.length - 1 && styles.lastCard]}>
//           <Card.Title title={item.name} subtitle={`RollNo: ${item.rollNo}`} left={(props) => (
//                   <Avatar.Icon
//                     {...props}
//                     icon="account"
//                     style={styles.avatar}
//                   />
//                 )} />
//           <Card.Content>
//             <Text style={styles.text}>
//                   <Text style={styles.label}>Reason: </Text>
//                   {item.reason}
//                 </Text>
//                 <Text style={styles.text}>
//                   <Text style={styles.label}>From Date: </Text>
//                   {item.fromDate}
//                 </Text>
//                 <Text style={styles.text}>
//                   <Text style={styles.label}>To Date: </Text>
//                   {item.toDate}
//                 </Text>
//                 <Text style={styles.text}>
//                   <Text style={styles.label}>Description: </Text>
//                   {item.description}
//                 </Text>
//           </Card.Content>
//           <Card.Actions>
//             <Button onPress={() => console.log("Pressed")}>Deny</Button>
//             <Button onPress={() => console.log("Pressed")}>Approve</Button>
//           </Card.Actions>
//         </Card>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, 
//     paddingBottom: 16, backgroundColor: "#fff" },
//   highlight: { fontWeight: "bold" },
//   card: { margin: 8, elevation: 4 },
//   label: {
//     fontWeight: "bold",
//   },
//   lastCard: { 
//     marginBottom: 50 
//   }
// });

import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";

export default function TeachersDashboard({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "studentData"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
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
      {data.map((item, index) => (
        <Card key={index} style={[styles.card, index === data.length - 1 && styles.lastCard]}>
          <Card.Title title={item.name} subtitle={`RollNo: ${item.rollNo}`} left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="account"
                    style={styles.avatar}
                  />
                )} />
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
            <Button onPress={() => console.log("Pressed")}>Deny</Button>
            <Button onPress={() => console.log("Pressed")}>Approve</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, 
    paddingBottom: 16, backgroundColor: "#fff" },
  highlight: { fontWeight: "bold" },
  card: { margin: 8, elevation: 4 },
  label: {
    fontWeight: "bold",
  },
  lastCard: { 
    marginBottom: 50 
  }
});

