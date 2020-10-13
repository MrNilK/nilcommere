import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styles: [
  ]
})
export class ProductViewComponent implements OnInit {
id;
  constructor(private activatedRoute : ActivatedRoute) {

    activatedRoute.paramMap.subscribe((data)=>{
      console.clear()
      console.log('data', data);
      console.log('data', data.get('prodID'));
      this.id = data.get('prodID');

    })
   }

  ngOnInit(): void {
  }

}
