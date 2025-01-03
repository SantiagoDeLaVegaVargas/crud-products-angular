import { Component } from '@angular/core';
import { Product } from './models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_products';

  productArray: Product[] = [
    {id: 1, nombre: "Arroz", precio: 2000, descripcion: "Una libra de arroz blanco"}
  ];

  newProduct: Product = new Product(0, '', 0, '');

  onSubmit() {
    if (this.newProduct.id === 0) { // id === 0 nuevoo
      const newId = this.productArray.length ? this.productArray[this.productArray.length - 1].id + 1 : 1;
      this.newProduct.id = newId;
      this.productArray.push({...this.newProduct});
    } else { // id !== 0 actualizar
      const index = this.productArray.findIndex(product => product.id === this.newProduct.id);
      if (index !== -1) {
        this.productArray[index] = {...this.newProduct}; 
      }
    }
    
    this.newProduct = new Product(0, '', 0, '');
  }

  editProduct(product: Product) {
    this.newProduct = { ...product }; 
  }

  deleteProduct(id: number) {
    this.productArray = this.productArray.filter(product => product.id !== id);
  }
}
