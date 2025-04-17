import { firestore } from './firebaseConfig';
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from 'firebase/firestore';

import { employeeSchema, EmployeeType } from '@/helpers/schemas';
// import { auth } from './firebaseConfig';
// import { sendSignInLinkToEmail } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';

export const createNewEmployee = async (newEmployee: EmployeeType) => {
  try {
    // const redirectUrl = `${window.location.origin}/signup?email=${newEmployee.email}`;
    // const actionCodeSettings = {
    //   url: redirectUrl,
    //   handleCodeInApp: true,
    // };
    employeeSchema.parse(newEmployee);
    // await sendSignInLinkToEmail(auth, newEmployee.email, actionCodeSettings);
    console.log('Zaproszenie zostało wysłane.');
    const usersRef = doc(firestore, 'employees', newEmployee.id);
    await setDoc(usersRef, newEmployee);
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const getAllEmployees = async () => {
  try {
    const q = query(collection(firestore, 'employees'));
    const querySnapshot = await getDocs(q);
    const allEmployees: EmployeeType[] = [];
    querySnapshot.forEach(doc => {
      const employee = { ...(doc.data() as EmployeeType) };
      allEmployees.push(employee);
    });
    return allEmployees;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const getEmployeeById = async (employeeId: string) => {
  const employeeRef = doc(firestore, 'employees', employeeId);
  const employeeDoc = await getDoc(employeeRef);
  return employeeDoc.data() as EmployeeType;
};

export const editEmployeeById = async (updateEmployee: EmployeeType, employeeId: string) => {
  try {
    employeeSchema.parse(updateEmployee);
    const usersDocRef = doc(firestore, 'employees', employeeId);
    await updateDoc(usersDocRef, updateEmployee);
  } catch (error) {
    throw new Error(`Failed to edit employee in database: ${error}`);
  }
};

export const deleteEmployeeById = async (employeeId: string) => {
  try {
    const usersDocRef = doc(firestore, 'employees', employeeId);
    await deleteDoc(usersDocRef);
  } catch (error) {
    throw new Error(`Failed to remove employee from database: ${error}`);
  }
};
