describe("Log in", function() {
    it('Sing in', () => {
        cy.visit("https://unsplash.com");
        cy.contains('Log in').click();
    });
});