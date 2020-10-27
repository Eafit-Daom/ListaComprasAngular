import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/modelos/producto.model';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoRef: AngularFirestoreCollection<Producto> = null;

  constructor(private firestore: AngularFirestore) {
    this.productoRef = firestore.collection('/productos');
  }

   // ---[create]--------------------
  createProducto(producto: Producto): any {
    return this.productoRef.add({ ...producto });
  }

   // ---[read]--------------------
  getProductos(): AngularFirestoreCollection<Producto> {
    return this.productoRef;
  }

  getProducto(productoId: string): AngularFirestoreCollection<Producto>{
    return this.firestore.collection(
      'productos', ref => ref.where('id', '==', productoId)
    );
  }

 // ---[update]--------------------
  updateProducto(id: string, data: any): any{
    return this.productoRef.doc(id).update(data);
  }

  // ---[delete]--------------------
  deleteProducto(productoId: string): any{
    this.productoRef.doc(productoId).delete();
  }

  getCount(): any {
    return new Promise( (resolve) => {
      this.productoRef.get().toPromise().then( querySnapshot => {
        resolve(querySnapshot.size);
      });
    });
  }

  getObservable(): any {
    return this.getProductos().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          // tslint:disable-next-line: max-line-length
          ({ ...c.payload.doc.data(),
            cantidad: Number(c.payload.doc.data().cantidad),
            cantidadMinima: Number(c.payload.doc.data().cantidadMinima),
            fechaCreacion: formatDate(c.payload.doc.data().fechaCreacion.toDate(), 'yyyy-MM-dd hh:mm:ss', 'en-US') })
        )
      )
    );
  }

  getArrProducts(): any {
    return new Promise( (resolve) => {
      this.getObservable().subscribe( data => {
        resolve(data);
      });
    });
  }

}
