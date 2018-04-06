import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HelmService } from '../../services/helm.service';
import { Cluster } from '../../interfaces/clusters';

@Component({
  selector: 'app-cluster-list',
  templateUrl: './cluster-list.component.html',
  styleUrls: ['./cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {
  @Input() clusters: Cluster[];

  displayedColumns = ['select', 'name', 'url', 'token', 'status', 'actions'];
  dataSource = new MatTableDataSource<Cluster>(this.clusters);
  selection = new SelectionModel<Cluster>(true, []);

  constructor(
    private helmService: HelmService
  ) {}

  ngOnInit() {
    this.getClusterInfo();
  }

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

  setClusterInfo(cluster: Cluster, info: object) {
    this.clusters = this.clusters.map(cl => {
      if (cl.uid === cluster.uid) {
        return { ...cl, info };
      }
      return cl;
    });
  }

  getClusterInfo() {
    this.clusters.forEach(cluster => {
      this.helmService.info(cluster.url, cluster.token).toPromise().then(info => {
        this.setClusterInfo(cluster, info);
      }).catch(() => console.log('Could not get info for cluster:', cluster.name));
    });
  }
}
