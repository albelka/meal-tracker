import { Component } from '@angular/core';

@Component({
  selector: 'meal-list',
  template: `
  <div class="well" [class]= "priceColor(currentKeg)"  *ngFor="let currentKeg of childKegList | sale:filterByOnSale | style:filterByStyle">
  <h4>{{currentKeg.name}}</h4>
  <img *ngIf="showBender(currentKeg)" src="../resources/images/bender.png">
  <img *ngIf="currentKeg.onSale" src="../resources/images/sale.png">
  <p>{{currentKeg.brand}}</p>
  <p>{{currentKeg.style}}</p>
  <p>\${{currentKeg.price | number: '1.2'}}</p>
  <p>{{currentKeg.alcoholContent}} abv</p>
  <p>Pints left: {{currentKeg.pintsLeft}}
  <button (click)="pintSoldButtonHasBeenClicked(currentKeg)">Pint sold</button><button (click)="growlerSoldButtonHasBeenClicked(currentKeg)">64 oz growler sold</button></p>
   <button (click)="editKegButtonHasBeenClicked(currentKeg)">Edit</button>
   <br>
   <span>On sale</span>
   <input *ngIf="currentKeg.onSale === true" type="checkbox" checked (click)="toggleOnSale(currentKeg, false)">
   <input *ngIf="currentKeg.onSale === false" type="checkbox" (click)="toggleOnSale(currentKeg, true)">
</div>
<hr>

  `
})

export class MealListComponent {

}
