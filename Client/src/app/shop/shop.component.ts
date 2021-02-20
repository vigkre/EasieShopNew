import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  products: Product[];
  searchData: string;
  searchedProduct: Product;
  filteredProducts: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getProducts();
  }
   
  onSearch(){
    this.searchData = this.searchTerm.nativeElement.value;
    this.getProductByName(this.searchData);
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.getProducts();
  }

  getProducts(){    
    this.shopService.getProducts().subscribe((response: Product[])=> {
      this.products = response;
    });
  }

  getProductByName(productName: string){
    this.filteredProducts = this.products.filter(p => p.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase()));
    this.products = this.filteredProducts;
  }
}
