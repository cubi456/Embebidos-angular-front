import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[
    RouterModule
  ],
    declarations:[
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent
    ],
    exports:[
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent
    ]
})

export class SharedModule{}
