import { Component } from 'angular2/core';

@Component({
    selector: 'my-sidebar',
    template: `
        <h3>Saved Profiles</h3>
        <button (click)="onSaveNew()">Save List to Profile</button>
        <article class="profile">
            <h4>Profile Name</h4>
            <p>Cities: NY</p>
            <span class="delete" (click)="onDeleteProfile($event)">X</span>
        </article>
    `,
    styleUrls: ['src/css/sidebar.css']
})

export class SidebarComponent{

}