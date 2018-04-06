import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterInfoPageComponent } from './cluster-info-page.component';

describe('ClusterInfoPageComponent', () => {
  let component: ClusterInfoPageComponent;
  let fixture: ComponentFixture<ClusterInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
