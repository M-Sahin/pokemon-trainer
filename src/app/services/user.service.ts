import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import {User} from "../models/user.model"

@Injectable({
    providedIn: 'root'
})

// service for every user related API interaction
export class UserService {
    // empty object
    private_user: User = <User>{}
    
    //getter for user
    get user(): User {
        return this.private_user;
    }
}










