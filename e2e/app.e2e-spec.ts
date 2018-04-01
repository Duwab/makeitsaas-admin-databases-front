import { OrmizerPage } from './app.po';

describe('ormizer App', () => {
  let page: OrmizerPage;

  beforeEach(() => {
    page = new OrmizerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
