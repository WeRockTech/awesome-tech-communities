import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Community } from './community';

@Injectable()
export class CommunityService {
  private url = 'https://raw.githubusercontent.com/WeRockTech/awesome-tech-communities/master/data/communities.json';

  constructor(private http: Http) { }

  getCommunities(): Promise<Array<Community>> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Array<Community>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
