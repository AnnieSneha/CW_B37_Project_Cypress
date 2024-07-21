class Login_po{

EnterURL(){
    cy.visit("https://tutorialsninja.com/demo/")
}
Register(){
    cy.get('[class="caret"]').click()
    cy.xpath('//ul[@class="dropdown-menu dropdown-menu-right"]//li[1]/a[1]').click()
    cy.get('[name="firstname"]').type('Annie');
    cy.get('#input-lastname').type('Sneha');
    cy.get('#input-email').type('annpf17@gmail.com');
    cy.get('#input-telephone').type('6362785362');
    cy.get('#input-password').type('helloannie12');
    cy.get('#input-confirm').type('helloannie12');
    cy.get('[name="agree"]').check().should('be.visible')
    cy.get('[value="Continue"]').click();
}
Login(){
   cy.get('[class="caret"]').click() 
   cy.xpath('//ul[@class="dropdown-menu dropdown-menu-right"]/li[2]/a[1]').click()
   cy.get('#input-email').type('annpf17@gmail.com')
   cy.get('#input-password').type('helloannie12') 
   cy.get('[type="submit"]').click()
}
}
export default Login_po;