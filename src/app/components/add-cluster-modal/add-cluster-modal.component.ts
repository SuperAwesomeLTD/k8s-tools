import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-cluster-modal',
  templateUrl: './add-cluster-modal.component.html',
  styleUrls: ['./add-cluster-modal.component.css']
})
export class AddClusterModalComponent implements OnInit {
  public cluster: object = {};

  constructor(
    public dialogRef: MatDialogRef<AddClusterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
