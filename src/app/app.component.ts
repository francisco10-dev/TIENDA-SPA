<<<<<<< Updated upstream
import { Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
=======
import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import {Router,ActivatedRoute} from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda-SPA';
<<<<<<< Updated upstream
  activeLink: HTMLElement | null = null;

  constructor(private elRef: ElementRef, private router: Router) {}

  ngOnInit() {}

  @HostListener('click', ['$event'])
  onClick(event: any) {
    const clickedLink = event.target as HTMLElement;

    if (clickedLink.tagName !== 'A') {
      return; 
    }
    if (clickedLink === this.activeLink) {
      return; 
    }
    this.deactivateLinks();
    clickedLink.classList.add('active'); 
    this.activeLink = clickedLink;
  }
  private deactivateLinks() {
    const links = this.elRef.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: HTMLElement) => link.classList.remove('active'));
  }
 
=======
  public identity:any;
  private checkIdentity;

  constructor(
    private _userService:UsuarioService,
    private _router:Router,
    private _routes:ActivatedRoute
  ){
    this.checkIdentity=setInterval(()=>{
      this.identity=this._userService.getIdentity();
    },1000);
  }
    verifyToken() {
      setInterval(() => {
        this._userService.compareToken().subscribe({
          next: (response: any) => {
            if (response.status === 400) {
              console.log(response.message);
              localStorage.removeItem('token');
              localStorage.removeItem('identity');
              this._router.navigate(['/login']);
            } else {
              console.log(response.message);
            }
          },
          error: (err: Error) => {
            console.log(err);
          }
        });
      }, 120000); // 2 minutos
    }

>>>>>>> Stashed changes
}
