import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../core/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchToggleStatus: boolean;


  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }

}