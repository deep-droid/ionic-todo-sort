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
  private femaleSelected = true;
  private maleSelected = true;

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
    let filterStateFromMainPage = {
      femaleSelected = this.femaleSelected,
      maleSelected = this.maleSelected
    };

    let openFilterModalWindow = this.modalController.create(FilterModalPage, filterStateFromMainPage);
    openFilterModalWindow.onDidDismiss((filterState) => {
      this.femaleSelected = filterState.femaleSelected;
      this.maleSelected = filterState.maleSelected;
      this.productService.getProducts()
      .subscribe((allProducts) => {
        let products = allProducts;
        if (filterState.maleSelected && filterState.femaleSelected) {
          this.allProducts = products;
          return;
        } else if (!filterState.maleSelected && !filterState.femaleSelected) {
          this.allProducts = [];
        } else if (filterState.femaleSelected && !filterState.maleSelected){
          this.allProducts = products.filter((product)=>{
            return product.gender !== "male";
          });
        } else if (!filterState.femaleSelected && filterState.maleSelected) {
          this.allProducts = products.filter((product)=>{
            return product.gender !== "female";
          });
        }
      });
    });
    openFilterModalWindow.present();
  }
}
