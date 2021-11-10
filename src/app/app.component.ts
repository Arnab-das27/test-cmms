import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssetInspectComponent } from './asset-inspect/asset-inspect.component';
import { AssetReportComponent } from './asset-report/asset-report.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMMS';
  constructor(public dialog: MatDialog) {}


  openDialogAddNewVehicle() {
    const dialogRef = this.dialog.open(DialogAddNewVehicle);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAssetReport() {
    const dialogRef = this.dialog.open(AssetReportComponent, {
      width : "600px",
      panelClass: "asset_report"


    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAssetInspect() {
    const dialogRef = this.dialog.open(AssetInspectComponent,{
      panelClass:"asset_inspect",

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogQrCode() {
    const dialogRef = this.dialog.open(QrCodeComponent,{
      panelClass: "qr_code"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-add-new-vehicle',
  templateUrl: 'dialog-add-new-vehicle.html',
  styleUrls: ['dialog-add-new-vehicle.css']

})
export class DialogAddNewVehicle {
  startDate = new Date(1990, 0, 1);

}
