<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
import { db } from "./configs/firebase";
import { collection, getDocs } from "firebase/firestore";
export default {
  setup() {
    async function getTransactions() {
      // const transactions = await collection(db, "transactions");
      // const docSnap = await getDocs(transactions);
      // console.log(docSnap);
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      const querySnapshot = await getDocs(collection(db, "transactions"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    getTransactions();
  },
};
</script>
