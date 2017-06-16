import { Component, OnInit } from '@angular/core';
import { Community } from './community.model';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  providers: [CommunityService]
})
export class CommunitiesComponent implements OnInit {
  communities: Array<Community>;
  total: Number;
  displaying: Number;
  tags: Array<string> = [];

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(filter?: string): void {
    this.communityService
      .getCommunities()
      .then(communities => {

        if (filter) {
          this.communities = communities.filter((community) => community.tags.includes(filter));
        } else {
          this.communities = communities;
        }

        this.total = communities.length;
        this.displaying = this.communities.length;
        communities
          .map((community) => community.tags
            .filter((tag) => !this.tags.includes(tag) ? this.tags.push(tag) : null));
      });
  }
}
