import { Component, inject, OnInit } from '@angular/core';
import { ResourceService } from '../shared/services/resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss',
})
export class ResourceApiComponent {
  private resourceService = inject(ResourceService);

  users$ = this.resourceService.getAllUsers();

  userRxResourceData = this.resourceService.rxResourceData;

  userResourceData = this.resourceService.resourceData;
}
