import { Social } from './social.model';

export class Community {
  public name: string;
  public description: string;
  public url: string;
  public logo: string;
  public social: Array<Social>;
  public codeOfConduct: boolean;
  public levels: Array<string>;
  public tags: Array<string>;
}
