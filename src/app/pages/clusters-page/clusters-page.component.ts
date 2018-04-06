import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddClusterModalComponent } from '../../components/add-cluster-modal/add-cluster-modal.component';
import { ClustersService } from '../../services/clusters.service';
import { Cluster } from '../../interfaces/clusters';

@Component({
  selector: 'app-clusters-page',
  templateUrl: './clusters-page.component.html',
  styleUrls: ['./clusters-page.component.css']
})
export class ClustersPageComponent implements OnInit {
  public clusters: Cluster[] = [];

  constructor(
    public dialog: MatDialog,
    private clustersService: ClustersService,
  ) { }

  ngOnInit() {
    this.clustersService.getClusters().subscribe((clusters: Cluster[]) => {
      this.clusters = clusters;
    });
  }

  addCluster(): void {
    const dialogRef = this.dialog.open(AddClusterModalComponent, {});
    dialogRef.afterClosed().subscribe(cluster => {
      if (cluster) {
        this.clustersService.addCluster(cluster);
        this.clusters.push(cluster);
      }
    });
  }
}
