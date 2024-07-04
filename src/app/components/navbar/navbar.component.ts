import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isOpen!: boolean;
  @Output() openSideBar = new EventEmitter<boolean>();
  @Output() closeSideBar = new EventEmitter<boolean>();

  onCloseSideBar() {
    this.closeSideBar.emit(false);
  }
  onOpenSideBar() {
    this.openSideBar.emit(true);
  }
}
