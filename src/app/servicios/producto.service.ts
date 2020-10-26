import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from 'src/app/modelos/producto.model';

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

}
