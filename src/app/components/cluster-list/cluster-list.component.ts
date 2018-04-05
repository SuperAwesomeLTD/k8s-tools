import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster-list',
  templateUrl: './cluster-list.component.html',
  styleUrls: ['./cluster-list.component.css']
})
export class ClusterListComponent implements OnInit {
  private clusters = ['Cluster1', 'Cluster 2', 'Cluster 3'];

  constructor() { }

  ngOnInit() {
  }

}
