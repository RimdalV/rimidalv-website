import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//TODO: move to assets
export interface DialogData {
  certificate: string
}

@Component({
  selector: 'app-certificate-overview-dialog',
  templateUrl: './certificate-overview-dialog.component.html',
  styleUrls: ['./certificate-overview-dialog.component.scss']
})
export class CertificateOverviewDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CertificateOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
      console.log(data.certificate);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
