import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cluster-info-page',
  templateUrl: './cluster-info-page.component.html',
  styleUrls: ['./cluster-info-page.component.css']
})
export class ClusterInfoPageComponent implements OnInit {
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
