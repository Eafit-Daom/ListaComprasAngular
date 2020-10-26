import { Component, OnInit } from '@angular/core';

// ---[Servicio de datos]--------------------------------
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/modelos/producto.model';

@Component({
  selector: 'app-index-producto',
  templateUrl: './index-producto.component.html',
  styleUrls: ['./index-producto.component.css']
})

export class IndexProductoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'categoria', 'fechaCreacion', 'cantidadMinima', 'cantidad'];
  dataSource = this.productoService.getProductos;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
  }

}
