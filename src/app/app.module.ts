import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { FirstComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { ProductComponent } from './layout/product/product.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { ProductViewComponent } from './layout/product-view/product-view.component';
import { LimitPipe } from './pipes/limit.pipe';
import { from } from 'rxjs';
import { MobDataService } from './services/mob-data.service';
import { ReactComponent } from './components/forms/react/react.component';
import { TempComponent } from './components/forms/temp/temp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox/';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    ProductComponent,
    ContactUsComponent,
    BannerOneComponent,
    BannerTwoComponent, 
    BannerThreeComponent,
    FooterComponent,
    TextLimitPipe,
    SimpleStyleDirective,
    ProductViewComponent,
    LimitPipe,
    ReactComponent,
    TempComponent,
    
  ],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatCheckboxModule ,MatDialogModule,CommonModule],
  bootstrap: [FirstComponent],
  providers:[MobDataService],
})
export class FirstModule {}

 
//'./' -> src
// '@ ' -> node modules
