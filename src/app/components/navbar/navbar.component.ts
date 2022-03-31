import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
// navbar used for navigating through various components and views
export class NavbarComponent {

    constructor(private userService: UserService, private router: Router) {}

    // clears user from stated and routes back to login screen
    onLogout(): void {
        this.userService.logout();
    }

    // navigate to trainer view
    onTrainerClick(): void {
        this.router.navigateByUrl('/trainer');
    }

    // navigate to catalogue view
    onHomeClick(): void {
        this.router.navigateByUrl('/catalogue');
    }

    // a getter for template
    get userIsLoggedIn(): boolean {
        return this.userService.userIsLoggedIn();
    }

}