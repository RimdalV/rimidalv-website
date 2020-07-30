import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificateOverviewDialogComponent } from './shared/dialog/certificate-overview-dialog/certificate-overview-dialog.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild('aboutSection') aboutSection: ElementRef;
  @ViewChild('experienceSection') experienceSection: ElementRef;
  @ViewChild('educationSection') educationSection: ElementRef;
  @ViewChild('certificatesSection') certificatesSection: ElementRef;
  @ViewChild('skillsSection') skillsSection: ElementRef;
  @ViewChild('interestsSection') interestsSection: ElementRef;
  @ViewChild('projectsSection') projectsSection: ElementRef;

  public title = 'rimidalv-website';
  public mobileQuery: MediaQueryList;
  public selectedSection: string;

  public aboutOffset: Number = null;
  public experienceOffset: Number = null;
  public educationOffset: Number = null;
  public certificatesOffset: Number = null;
  public skillsOffset: Number = null;
  public interestsOffset: Number = null;
  public projectsOffset: Number = null;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public ngAfterViewInit() {
    this.aboutOffset = this.aboutSection.nativeElement.offsetTop;
    this.experienceOffset = this.experienceSection.nativeElement.offsetTop;
    this.educationOffset = this.educationSection.nativeElement.offsetTop;
    this.certificatesOffset = this.certificatesSection.nativeElement.offsetTop;
    this.skillsOffset = this.skillsSection.nativeElement.offsetTop;
    this.interestsOffset = this.interestsSection.nativeElement.offsetTop;
    this.projectsOffset = this.projectsSection.nativeElement.offsetTop;
  }

  public openDialog(image: string): void {
    const dialogRef = this.dialog.open(CertificateOverviewDialogComponent, {
      data: { certificate: image }
    });
  }

  public navLinkOnClick(sidenav: MatSidenav, activateSection: string) {
    if (this.mobileQuery.matches) {
      sidenav.toggle();
    } else {
      this.selectedSection = activateSection;
    }
  }

  @HostListener('window:scroll', ['$event'])
  public handleScroll() {
    if (!this.mobileQuery.matches) {
      const windowScroll = window.pageYOffset + 240;
      if (windowScroll >= this.aboutOffset && windowScroll < this.experienceOffset) {
        this.selectedSection = 'about';
      } else if (windowScroll > this.experienceOffset && windowScroll < this.educationOffset) {
        this.selectedSection = 'experience';
      } else if (windowScroll > this.educationOffset && windowScroll < this.certificatesOffset) {
        this.selectedSection = 'education';
      } else if (windowScroll > this.certificatesOffset && windowScroll < this.skillsOffset) {
        this.selectedSection = 'certificates';
      } else if (windowScroll > this.skillsOffset && windowScroll < this.interestsOffset) {
        this.selectedSection = 'skills';
      } else if (windowScroll > this.interestsOffset && windowScroll < this.projectsOffset) {
        this.selectedSection = 'interests';
      } else if (windowScroll > this.projectsOffset) {
        this.selectedSection = 'projects';
      } else {
        this.selectedSection = '';
      }
    }
  }
}
