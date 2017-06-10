import { Social } from './social';

export class Community {
  name: string;
  description: string;
  url: string;
  logo: string;
  social: Array<Social>;
  codeOfConduct: boolean;
  levels: Array<string>;
  tags: Array<string>;
}
