import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'drawer-demo',
    templateUrl: './drawer-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class DrawerDemo {
    visible: boolean = false;

    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;
 
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: any): void {
        this.drawerRef.close(e);
    }
}