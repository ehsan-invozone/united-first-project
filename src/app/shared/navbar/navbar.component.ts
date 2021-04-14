import { Component, OnInit,ViewChild, ElementRef,HostListener } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {KeycloakService } from 'keycloak-angular';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  user = '';
  admin=false;
  collapsed = true;
  isCollapsed: boolean = false;

  constructor(config: NgbDropdownConfig, translate: TranslateService,private keycloackService:KeycloakService) {
    config.placement = 'bottom-right';
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
  }
navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
  ngOnInit() {
    let body = document.querySelector('body');
    body.classList.add('sidebar-hidden');
    this.initialiseUserOptions();
  }
 
  private initialiseUserOptions(): void{
    this.user=this.keycloackService.getUsername();
    if(this.user=='admin'){
this.admin=true;
    }else{
      this.admin=false;

    }
  }
logout():void{
  this.keycloackService.logout();
}
  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  toggleRightSidebar() {
    document.querySelector('#right-sidebar').classList.toggle('open');
  }

}
