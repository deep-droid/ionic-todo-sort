import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { ProductProvider } from "../../providers/product/product";
import { ProductDetailPage } from "../../pages/product-detail/product-detail";
import { FilterModalPage } from '../../pages/filter-modal/filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];

  constructor(private modalController: ModalController, private productService: ProductProvider, public navCtrl: NavController, private http: Http) {

  }

  ionViewDidLoad()
  {
    // this.http.get('/assets/data.json')
    // .map(response => response.json())
    // .subscribe(data => console.log(data));

    this.productService.getProducts()
    .subscribe((response) => {
      this.allProducts = response;
    });

  }

  goToProductDetailPage(product)
  {
    this.navCtrl.push(ProductDetailPage, {
      productDetails:product
    });
  }

  openFilterModal()
  {
    let openFilterModalWindow = this.modalController.create(FilterModalPage);
    openFilterModalWindow.present();
  }
}
