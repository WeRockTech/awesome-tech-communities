import { AwesomeTechCommunitiesPage } from './app.po';

describe('awesome-tech-communities App', () => {
  let page: AwesomeTechCommunitiesPage;

  beforeEach(() => {
    page = new AwesomeTechCommunitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
