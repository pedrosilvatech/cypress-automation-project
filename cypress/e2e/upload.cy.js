describe('Funcionalidade: Upload de Arquivo', () => {
    beforeEach(() => {
      cy.visit('/upload');
    });
  
    it('Envio de arquivo com sucesso', () => {
      const filePath = 'lain.jpg'; // Nome do arquivo que está na raiz da pasta cypress
  
      // Interage com o campo de upload
      cy.get('#file-upload').attachFile(filePath); // Comando do Cypress para anexar o arquivo
  
      // Submete o formulário de upload
      cy.get('#file-submit').click();
  
      // Verifica se a mensagem de sucesso é exibida
      cy.contains('File Uploaded!').should('be.visible');
    });
  });
  