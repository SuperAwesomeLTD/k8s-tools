import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClustersPageComponent } from './clusters-page.component';

describe('ClustersPageComponent', () => {
  let component: ClustersPageComponent;
  let fixture: ComponentFixture<ClustersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClustersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClustersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
