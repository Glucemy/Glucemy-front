import {Component, Input, OnInit} from '@angular/core';
import {navConfig} from "./config";
import {IUser} from "../auth/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    config = navConfig;
    view: string = 'Home';

    @Input() user: IUser;

    constructor(private _router: Router, private _route: ActivatedRoute, private _authService: AuthService) {
    }

    ngOnInit(): void {
    }

    changeView(item: any) {
        if (item.name === 'Logout') {
            this.logOut();
            return;
        }
        this.view = item.name;
        this._router.navigate([`app/${item.path}`]);
    }

    logOut() {
        this._authService.signOut();
        this._router.navigate(['/login']).then();
    }
}
