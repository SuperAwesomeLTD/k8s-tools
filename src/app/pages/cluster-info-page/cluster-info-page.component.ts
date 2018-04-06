import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ClustersService } from '../../services/clusters.service';
import { HelmService } from '../../services/helm.service';
import { Cluster } from '../../interfaces/clusters';

@Component({
  selector: 'app-cluster-info-page',
  templateUrl: './cluster-info-page.component.html',
  styleUrls: ['./cluster-info-page.component.css']
})
export class ClusterInfoPageComponent implements OnInit {
  public releases;
  public cluster;
  private uid;
  public displayedColumns = ['name', 'chart', 'version', 'status', 'actions'];
  public dataSource = new MatTableDataSource<Cluster>(this.releases);

  constructor(
    private clustersService: ClustersService,
    private helmService: HelmService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uid = params.id;
      this.clustersService.getCluster(this.uid).subscribe((cluster: any) => {
        this.cluster = cluster[0];
        this.helmService.releases(this.cluster.url, this.cluster.token).subscribe((releases: any) => {
          this.releases = releases.releases;
        });
      });
    });
  }

  goToRelease(release) {
    this.router.navigate(['/cluster/' + this.uid + '/' + release.name]);
  }
}
