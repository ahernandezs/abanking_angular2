import { AbankingAlphaPage } from './app.po';

describe('abanking-alpha App', function() {
  let page: AbankingAlphaPage;

  beforeEach(() => {
    page = new AbankingAlphaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
