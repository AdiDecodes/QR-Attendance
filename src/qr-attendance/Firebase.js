import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const app = firebase.initializeApp({
	apiKey:
		'AIzaSyAX2ZFkoJb94daffwFSFqpUyrrUVMDsSZY',
	authDomain:
		'attendence-app-cf666.firebaseapp.com',
	projectId: 'attendence-app-cf666',
	storageBucket:
		'attendence-app-cf666.appspot.com',
	messagingSenderId: '963092085139',
	appId:
		'1:963092085139:web:d9ba1de852c4eb19569066',
	measurementId: 'G-JCE4BGN3HV',
});
const firestore = app.firestore();
export const googleProvider =
	new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();
export const database = {
	courseDetails: firestore.collection(
		'courseDetails'
	),
	studentRecords: firestore.collection(
		'studentRecords'
	),
	classCountIncrement:
		firebase.firestore.FieldValue.increment(1),
	attendance: firestore.collection('attendance'),
};
export default app;
