import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { 

    // prueba de conexión a Firebase
    this.firestore.collection("productos").valueChanges().subscribe(p=>{
      console.log(p);
    })

  }
}
