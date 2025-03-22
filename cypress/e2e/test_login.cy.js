describe('Funcionalidade: Login', () => {
    beforeEach(() => {
      cy.visit('/login'); // Redireciona para https://the-internet.herokuapp.com/login
    });
  
    it('Login com credenciais válidas', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/secure');
      cy.contains('You logged into a secure area!');
    });
  
    it('Login com e-mail inválido', () => {
      cy.get('#username').type('usuario_invalido');
      cy.get('#password').type('senhaErrada');
      cy.get('button[type="submit"]').click();
      cy.contains('Your username is invalid!').should('be.visible');
    });
  
    it('Login com senha incorreta', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('senhaErrada');
      cy.get('button[type="submit"]').click();
      cy.contains('Your username is invalid!').should('be.visible');
    });
  
    it('Login com campos em branco', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Your username is invalid!').should('be.visible');
    });
  });
  