import { Angular2InventoryPage } from './app.po';

describe('angular2-inventory App', function() {
  let page: Angular2InventoryPage;

  beforeEach(() => {
    page = new Angular2InventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
