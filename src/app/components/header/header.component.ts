import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  items: MenuItem[] | undefined;
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

  ref: DynamicDialogRef | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'My Favourite',
        route: 'favourite',
      },
      {
        label: 'Watch List',
        route: 'watch-list',
      },
    ];
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  show() {
    this.ref = this.dialogService.open(SubscriptionComponent, {
      header: 'Select a Product',
      width: '50vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType
          ? { summary: 'Your answer was submited', detail: data?.name }
          : { summary: 'Subscription was not submitet', detail: `Pressed '${buttonType}' button` };
      } else {
        summary_and_detail = {
          summary: 'Subscription was not submitet',
          detail: 'Pressed Close button',
        };
      }
      this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
