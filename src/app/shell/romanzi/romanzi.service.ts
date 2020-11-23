import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Romanzo } from './romanzi.model';


@Injectable({providedIn: "root"})
export class RomanziService {
    
    romanziCollection: AngularFirestoreCollection<Romanzo>
    romanzi: Observable<Romanzo[]>;
    // romanzi;
    
    constructor( private firestore: AngularFirestore) {

    }

    getRomanzi(){

    this.romanziCollection = this.firestore.collection<Romanzo>('romanzi');
    this.romanzi = this.romanziCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Romanzo;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
    );

    return this.romanzi;
    
    }

}