import { ChessGamePage } from './app.po';

describe('chess-game App', function() {
  let page: ChessGamePage;

  beforeEach(() => {
    page = new ChessGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
