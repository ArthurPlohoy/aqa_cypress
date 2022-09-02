describe('My first test', () => {
    it('Does not do match!', () => {
        cy.visit('https://unsplash.com');
        //cy.get('input[title="Поиск"]').type('something').type('{enter}');
        cy.contains('Log in').click();
        cy.get('input[type="email"]').type("artur@gmail.com")
        cy.get('input[type="password"]').type("123456789")
        cy.get('input[type="submit"]').click();
        //cy.contains('class[title="Отметки «Нравится»"]').click();
        //cy.get('input[aria-label="Искать термин"]').type('My name').type('{enter}');
    });
});