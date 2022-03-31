import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }
    
    ngOnInit(): void {
        
    }

    // event handler login button
    onSubmit(loginForm: NgForm): void {
        // get input value from form
        const { username } = loginForm.value;
        // pass value to login/register
        this.userService.loginOrRegisterUser(username);
      }
}