import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { HelmService } from '../../services/helm.service';
import { Cluster } from '../../interfaces/clusters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cluster-list',
  templateUrl: './cluster-list.component.html',
  styleUrls: ['./cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {
  @Input() clusters: Cluster[];

  public displayedColumns = ['name', 'url', 'token', 'status', 'actions'];
  public dataSource = new MatTableDataSource<Cluster>(this.clusters);
  public selectedRowIndex = -1;

  constructor(
    private helmService: HelmService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getClusterInfo();
  }

  goToReleases(cluster: Cluster) {
    this.router.navigate(['/cluster/' + cluster.uid]);
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
