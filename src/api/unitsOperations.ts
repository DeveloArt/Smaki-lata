import { collection, doc, getDocs, addDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

export interface Unit {
  id: string;
  value: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

const COLLECTION_NAME = 'units';

export const getAllUnits = async (): Promise<Unit[]> => {
  try {
    const unitsQuery = query(collection(firestore, COLLECTION_NAME), orderBy('label', 'asc'));
    const querySnapshot = await getDocs(unitsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Unit));
  } catch (error) {
    console.error('Błąd podczas pobierania jednostek:', error);
    throw error;
  }
};

export const createUnit = async (unitData: Omit<Unit, 'id' | 'createdAt' | 'updatedAt'>): Promise<Unit> => {
  try {
    const now = new Date().toISOString();
    const newUnit = {
      ...unitData,
      createdAt: now,
      updatedAt: now
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), newUnit);
    
    return {
      id: docRef.id,
      ...newUnit
    };
  } catch (error) {
    console.error('Błąd podczas tworzenia jednostki:', error);
    throw error;
  }
};

export const deleteUnit = async (id: string): Promise<void> => {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Błąd podczas usuwania jednostki:', error);
    throw error;
  }
}; 