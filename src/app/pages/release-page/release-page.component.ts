import { Component, OnInit } from '@angular/core';
import { ClustersService } from '../../services/clusters.service';
import { HelmService } from '../../services/helm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-release-page',
  templateUrl: './release-page.component.html',
  styleUrls: ['./release-page.component.css']
})
export class ReleasePageComponent implements OnInit {
  clusterId: string;
  releaseName: string;
  release: any;
  selectedRevision: any;
  constructor(
    private clustersService: ClustersService,
    private helmService: HelmService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clusterId = params.id;
      this.releaseName = params.release;
      this.clustersService.getCluster(this.clusterId).subscribe((cluster: any) => {
        this.helmService.release(cluster[0].url, cluster[0].token, this.releaseName, false).subscribe((release: any) => {
          this.release = release.release;
          this.selectedRevision = release.release;
        });
        this.helmService.history(cluster[0].url, cluster[0].token, this.releaseName, 100).subscribe((releases: any) => {
          this.release.history = releases.releases;
        });
      });
    });
  }

}
