
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDf11uI1NjhNBkCNO22er2DkKgrnnRRFwE",
  authDomain: "test-a84eb.firebaseapp.com",
  projectId: "test-a84eb",
  storageBucket: "test-a84eb.appspot.com",
  messagingSenderId: "1042169046730",
  appId: "1:1042169046730:web:b103a493eed450a929b633",
  measurementId: "G-T9LC8QBQGJ",
    databaseURL: "https://test-a84eb.firebaseapp.com",
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
