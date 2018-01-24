import { browser, by, element } from 'protractor';

export class ConFusionPage {
  navigateTo(link: string) {
    return browser.get(link);
  }

  getParagraphText(selector: string) {
    return element(by.css(selector)).getText();
  }

  // return the first element match
  getElement(selector: string) {
    return element(by.css(selector));
  }

  // return all elements match
  getAllElements(selector: string) {
    return element.all(by.css(selector));
  }
}
