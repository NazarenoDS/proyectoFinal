// model
import { db } from '../config/db.js';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

//get
export const getAllDocuments = async ( coleccionName ) => {
    const colref =  collection(db, collectionName);
    const snap = await getDocs(colref);

    return snap.docs.map(doc=> ({id: doc.id, ...doc.data()}))
}

export const getAllDocumentByid = async ( collectionName, id ) => {
    const docRef = doc( db, collectionName, id);
    const snap = await getDoc(docRef);
    return snap.exists() ? { id: snap.id, ...snap.data()} : null;
}


export const searchByField = async ( collectionName, field, value ) => {
    const q = query(collection( db, collectionName), where(field, '==', value));
    const snap = await getDoc(q);
    return snap.docs.map( doc => ({ id: doc.id, ...doc.data()}));
}

//Create
export const createDocument = async (collectionName, data) => {
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, data);
    return { id: docRef.id, ...data };
};

//Update
export const updateDocument = async (collectionName, id, data) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
};
//falta un put, para tener una modificacion mas restringida..
//Delete
export const deleteDocument = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
};
