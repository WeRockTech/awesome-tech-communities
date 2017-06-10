import { Component, OnInit } from '@angular/core';
import { Community } from './community';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  // communities = [
  //   {
  //     name: 'Code First Girls',
  //     description: 'Working hard to get more women into tech and entrepreneurship',
  //     url: 'http://codefirstgirls.org.uk',
  //     logo: 'https://pbs.twimg.com/profile_images/572786721922629632/XI4-Cw-n_400x400.png',
  //     social: {
  //       twitter: 'CodeFirstGirls'
  //     },
  //     codeOfConduct: false,
  //     levels: ['beginner'],
  //     tags: ['Code', 'Women', 'Girls']
  //   },
  //   {
  //     name: 'UX for Change',
  //     description: '#UX4Change is a platform dedicated to Share the Goodness of UX to Change the World',
  //     url: 'http://uxforchangeuk.org',
  //     logo: 'https://pbs.twimg.com/profile_images/861374328327225344/5uMoihe6_400x400.jpg',
  //     social: {
  //       twitter: 'UXforChangeUK'
  //     },
  //     codeOfConduct: true,
  //     levels: ['beginner', 'intermediate', 'advanced'],
  //     tags: ['UX', 'User']
  //   },
  //   {
  //     name: 'Women Hack for Non-Profits',
  //     description: 'Community of women building open source projects for non-profit organisations and charities.',
  //     url: 'http://www.womenhackfornonprofits.com',
  //     logo: 'https://pbs.twimg.com/profile_images/752420268417642496/oTgmUPfe_400x400.jpg',
  //     social: {
  //       twitter: 'WHFNP'
  //     },
  //     codeOfConduct: false,
  //     levels: ['beginner', 'intermediate', 'advanced'],
  //     tags: ['Code', 'Women', 'Girls', 'TechForGood']
  //   }
  // ];
}
