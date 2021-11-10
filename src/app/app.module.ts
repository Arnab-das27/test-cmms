import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogAddNewVehicle } from './app.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ListViewComponent } from './list-view/list-view.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { AssetReportComponent } from './asset-report/asset-report.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import {MatMenuModule} from '@angular/material/menu';
import { AssetInspectComponent } from './asset-inspect/asset-inspect.component';
import { FrontPageComponent } from './front-page/front-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogAddNewVehicle,
    ListViewComponent,
    SideNavbarComponent,
    HeaderComponent,
    AssetReportComponent,
    QrCodeComponent,
    AssetInspectComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
