import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: Firestore) {}

  // CREATE
  addRegistration(data: any) {
    const regRef = collection(this.firestore, 'registrations');
    return addDoc(regRef, data);
  }

  // READ
  getRegistrations(): Observable<any[]> {
    const regRef = collection(this.firestore, 'registrations');
    return collectionData(regRef, { idField: 'id' }) as Observable<any[]>;
  }

  // DELETE
  deleteRegistration(id: string) {
    const docRef = doc(this.firestore, `registrations/${id}`);
    return deleteDoc(docRef);
  }

  // UPDATE
  updateRegistration(id: string, data: any) {
    const docRef = doc(this.firestore, `registrations/${id}`);
    return updateDoc(docRef, data);
  }
}
