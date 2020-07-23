import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOverviewDialogComponent } from './certificate-overview-dialog.component';

describe('CertificateOverviewDialogComponent', () => {
  let component: CertificateOverviewDialogComponent;
  let fixture: ComponentFixture<CertificateOverviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateOverviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
