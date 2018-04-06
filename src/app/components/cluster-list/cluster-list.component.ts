import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-cluster-list',
  templateUrl: './cluster-list.component.html',
  styleUrls: ['./cluster-list.component.css']
})
export class ClusterListComponent {
  @Input() clusters: any[];

  displayedColumns = ['select', 'name', 'url', 'token', 'status', 'actions'];
  dataSource = new MatTableDataSource<Element>(this.clusters);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
