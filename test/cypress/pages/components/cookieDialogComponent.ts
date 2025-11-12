export class CookieDialogComponent {
  private cookieDialogText = 'This website uses fruit cookies to ensure you get the juiciest tracking experience.';

  private findCookieDialog() {
    return cy.contains('div', this.cookieDialogText)
  }

  public removeCookieDialog() {
    this.findCookieDialog().invoke('remove');
  }
}
