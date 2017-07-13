import { ContactosPage } from './app.po';

describe('contactos App', () => {
  let page: ContactosPage;

  beforeEach(() => {
    page = new ContactosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
