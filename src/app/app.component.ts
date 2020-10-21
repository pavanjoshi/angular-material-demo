import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StarRatingColor } from './star-rating/star-rating.component';
import * as Data from '../data/technical.json';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Add to Shopping Cart';
  
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.accent;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;

  totalQty: number = 0;

  qty: number = 1;

  displayedColumns: string[] = ['feature', 'details'];
  technicalDetailsData = Data['default'];

  constructor(private _sb: MatSnackBar, private _bs: MatBottomSheet) {    
  }

  ngOnInit(): void {    
  }

  openPrivacyTerms() {
    console.log("inside openPrivacyTerms()");
    this._bs.open(BottomSheetExampleComponent);
  }

  onRatingChanged(rating) {
    console.log(rating);
    this.rating = rating;
  }

  wishlistProduct($event) {
    this._sb.open('Upcoming feature!', '', {
      duration: 3000
    });
  }

  shareProduct($event) {
    this._sb.open('Upcoming feature!', '', {
      duration: 3000
    });
  }

  addToCart($event) {
    this.totalQty += this.qty;
    this._sb.open('Upcoming feature!', '', {
      duration: 3000
    });
  }
}

@Component({
  selector: 'bottom-sheet-privacy-comp',
  templateUrl: './bottom-sheet-privacy-terms-ex.html'
  // template: '<p> Hello! </p>'
})
export class BottomSheetExampleComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetExampleComponent>) {}

  dismissSheet($event) {
    this._bottomSheetRef.dismiss();
    $event.preventDefault();
  }
}