import { collection, doc, getDocs, addDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { firestore } from './firebaseConfig';

export interface Category {
  id: string;
  value: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

const COLLECTION_NAME = 'categories';

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const categoriesQuery = query(collection(firestore, COLLECTION_NAME), orderBy('label', 'asc'));
    const querySnapshot = await getDocs(categoriesQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Category));
  } catch (error) {
    console.error('Błąd podczas pobierania kategorii:', error);
    throw error;
  }
};

export const createCategory = async (categoryData: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>): Promise<Category> => {
  try {
    const now = new Date().toISOString();
    const newCategory = {
      ...categoryData,
      createdAt: now,
      updatedAt: now
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), newCategory);
    
    return {
      id: docRef.id,
      ...newCategory
    };
  } catch (error) {
    console.error('Błąd podczas tworzenia kategorii:', error);
    throw error;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Błąd podczas usuwania kategorii:', error);
    throw error;
  }
}; 