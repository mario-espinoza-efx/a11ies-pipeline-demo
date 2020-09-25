import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
];

export const links = [
    { path: '/Capacity',         title: 'Capacity',             icon:'nc-globe',      class: '' },
    { path: '/Revenue',          title: 'Revenue',              icon:'nc-money-coins',      class: '' },
    { path: '/Errors', title: 'Errors',     icon:'nc-vector',    class: '' },
    { path: '/Followers',          title: 'Followers',      icon:'nc-favourite-28',  class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public links: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.links = links;
    }
}
