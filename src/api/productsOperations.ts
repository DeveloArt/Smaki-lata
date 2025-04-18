import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { firestore } from './firebaseConfig';
import { Product as ProductType } from '@/types/product';

export type Product = ProductType;

const COLLECTION_NAME = 'products';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const productsQuery = query(
      collection(firestore, COLLECTION_NAME),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(productsQuery);

    return querySnapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Product
    );
  } catch (error) {
    console.error('Błąd podczas pobierania produktów:', error);
    throw error;
  }
};

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Product;
    }
    return null;
  } catch (error) {
    console.error('Błąd podczas pobierania produktu:', error);
    throw error;
  }
};

export const createProduct = async (
  productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Product> => {
  try {
    const now = new Date().toISOString();
    const newProduct = {
      ...productData,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), newProduct);

    return {
      id: docRef.id,
      ...newProduct,
    };
  } catch (error) {
    console.error('Błąd podczas tworzenia produktu:', error);
    throw error;
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Błąd podczas usuwania produktu:', error);
    throw error;
  }
};

export const updateProduct = async (id: string, productData: Partial<Product>): Promise<void> => {
  try {
    const docRef = doc(firestore, COLLECTION_NAME, id);
    const updateData = {
      ...productData,
      updatedAt: new Date().toISOString(),
    };

    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error('Błąd podczas aktualizacji produktu:', error);
    throw error;
  }
};
