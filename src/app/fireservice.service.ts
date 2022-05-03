import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(public firestore: AngularFirestore) { }

  uploadmessage(data:any){
    return this.firestore.collection('Metazae_contact').add(data);
  }
}
