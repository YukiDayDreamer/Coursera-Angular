import { ConFusionPage } from './app.po';
import { browser, ExpectedConditions } from 'protractor';

describe('con-fusion App', () => {
  let page: ConFusionPage;

  beforeEach(() => {
    page = new ConFusionPage();
  });

  it('should display message Ristorante Con Fusion', () => { // test head text
    page.navigateTo('/'); // starts from home page
    expect(page.getParagraphText('app-root h1')).toEqual('Ristorante Con Fusion');
  });

  it('should navigate to about us page by clicking on the link', () => { // test link and text
    page.navigateTo('/'); // starts from home page

    let navlink = page.getAllElements('a').get(1); // index of about us page
    navlink.click(); // click the link programmerly
    expect(page.getParagraphText('h3')).toBe('About Us'); // the h3 text should match About Us
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/0'); // navigate to the first dish

    let newAuthor = page.getElement('input[type=text]'); // author element
    browser.wait(ExpectedConditions.visibilityOf(newAuthor), 5000); // wait for element
    newAuthor.sendKeys('Test Author'); // type author name

    let newComment = page.getElement('textarea'); // comment element
    browser.wait(ExpectedConditions.visibilityOf(newComment), 5000); // wait for element
    newComment.sendKeys('Test Comment'); // type comment

    let newSubmitButton = page.getElement('button[type=submit]'); // button element
    browser.wait(ExpectedConditions.visibilityOf(newSubmitButton), 5000); // wait for element
    newSubmitButton.click(); // click submit button

    browser.pause();
  });
});
