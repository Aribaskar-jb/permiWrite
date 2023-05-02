// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect } from 'react';
// // import { db } from "./firebase";
// // import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "../Firebase";
// import { collection, getDocs } from "firebase/firestore";

// const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "studentData"));
//       const data = [];
//       querySnapshot.forEach((doc) => data.push(doc.data()));
//       setData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, []);
// export default function Requested() {
//   const navigation = useNavigation();
//   // const getData = async (values, e) => {
//   //   const querySnapshot = await getDocs(collection(db, "studentData"));
//   //   querySnapshot.forEach((doc) => {
//   //     alert(doc.data());
//   //     console.log(doc.data());
//   //   });
//   //   // addData(values);
//   // };
//   return (
//     <View>
//       <Text style={styles.main}>Hello, I am your Requested Page.</Text>
//       {/* <button onClick={getData()}>data</button> */}
//       <div>
//         {data.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             <p>{item.age}</p>
//           </div>
//         ))}
//       </div>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     textAlign: "center",
//   },
//   overall: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   Button: {
//     // marginTop: 10,
//     backgroundColor: "#ffffff",
//     width: 200,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 15,
//     color: "#d9d9d9",
//     // justifyContent: 'center'
//     alignItems: "center",
//   },
//   leaveLetter: {
//     opacity: 0.54,
//   },
//   requestPage: {
//     opacity: 1,
//   },
//   Button2: {
//     backgroundColor: "#ffffff",
//     width: 200,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 15,
//     color: "#d9d9d9",
//     // justifyContent: 'flex-start'
//     alignItems: "center",
//   },
// });
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { db } from "../Firebase";
// import { collection, getDocs } from "firebase/firestore";
// import  table from "../SubComponents/table"

// export default function Requested() {
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
//     <View>
//       <Text style={styles.main}>Hello, I am your Requested Page.</Text>
//       <div>
//         {data.map((item) => (
//           <div key={item.name}>
//             <p>{item.name}</p>
//             <p>{item.reason}</p>
//         </div>
//         ))}

//       </div>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     textAlign: "center",
//   },
//   overall: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   Button: {
//     backgroundColor: "#ffffff",
//     width: 200,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 15,
//     color: "#d9d9d9",
//     alignItems: "center",
//   },
//   leaveLetter: {
//     opacity: 0.54,
//   },
//   requestPage: {
//     opacity: 1,
//   },
//   Button2: {
//     backgroundColor: "#ffffff",
//     width: 200,
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 15,
//     color: "#d9d9d9",
//     alignItems: "center",
//   },
// });
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

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
            if (item.name === route.params.paramKey) {
              return [
                <Text style={styles.highlight}>{item.name}</Text>,
                <Text style={styles.highlight}>{item.reason}</Text>,
                <Text style={styles.highlight}>{item.fromDate}</Text>,
                <Text style={styles.highlight}>{item.toDate}</Text>,
                <Text style={styles.highlight}>{item.description}</Text>,
              ];
            }
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
