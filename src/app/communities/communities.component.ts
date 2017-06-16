import { Component, OnInit } from '@angular/core';
import { Community } from './community.model';
import { CommunityService } from './community.service';
import {MdSnackBar} from '@angular/material';

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
  displayPercentage: Number;
  tags: Array<string> = [];
  tagTotals: {};
  selectedTag: string;

  constructor(private communityService: CommunityService, public snackBar: MdSnackBar) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  getCommunities(filter?: string): void {
    this.selectedTag = filter;

    this.communityService
      .getCommunities()
      .then(communities => {

        if (filter) {
          this.snackBar.open('Filtering by', filter.toUpperCase(), { duration: 3000});
          this.communities = communities.filter((community) => community.tags.includes(filter));
        } else {
          this.snackBar.open('Filter removed', 'ALL', { duration: 3000});
          this.communities = communities;
        }

        this.total = communities.length;
        this.displaying = this.communities.length;
        this.displayPercentage = (this.communities.length / communities.length) * 100;

        this.tagTotals = { ALL: 0 };
        communities
          .map((community) => community.tags
            .filter((tag) => {
              !this.tags.includes(tag) ? this.tags.push(tag) : null;
              !this.tagTotals[tag] ? this.tagTotals[tag] = 1 : this.tagTotals[tag]++;
            })
          );

      });

  }
}
