describe("rozetka", function() {
    it('Sing in', () => {
        cy.visit("https://rozetka.com.ua/");
        cy.get('input[type="text"]').type('Iphone 13');
        cy.contains('Знайти').click();
        cy.contains(' Мобільний телефон Apple iPhone 13 256 GB Starlight Офіційна гарантія ').click();
        
    });
});