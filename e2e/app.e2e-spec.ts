import { MyCinePage } from './app.po';

describe('my-cine App', function() {
  let page: MyCinePage;

  beforeEach(() => {
    page = new MyCinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
