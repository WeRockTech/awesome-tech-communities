import { Component, OnInit } from '@angular/core';
import { Community } from './community';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {
  communities: Array<Community>;

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(): void {
    this.communityService
      .getCommunities()
      .then(communities => this.communities = communities);
  }
}
