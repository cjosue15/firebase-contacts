import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Contact, ContactForm } from '../shared/interfaces/contacts.interface';

const PATH = 'contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  getContacts() {
    return collectionData(this._collection, { idField: 'id' }) as Observable<
      Contact[]
    >;
  }

  async getContact(id: string) {
    try {
      const snapshot = await getDoc(this.document(id));
      return snapshot.data() as Contact;
    } catch (error) {
      //catch error
      return undefined;
    }
  }

  createContact(contact: ContactForm) {
    return addDoc(this._collection, contact);
  }

  updateContact(id: string, contact: ContactForm) {
    return updateDoc(this.document(id), { ...contact });
  }

  deleteContact(id: string) {
    return deleteDoc(this.document(id));
  }

  private document(id: string) {
    return doc(this._firestore, `${PATH}/${id}`);
  }
}
