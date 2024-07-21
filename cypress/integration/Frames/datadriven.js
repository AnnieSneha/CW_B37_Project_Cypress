before(() => {
    cy.fixture("example").then((data)=>{
        globalThis.data=data;
    })
});
describe('Add to Cart functionality', () => {
    it('Test Script 1', () => {
        cy.visit("https://tutorialsninja.com/demo/")
        //Login
        cy.get('[class="caret"]').click() 
        cy.xpath('//ul[@class="dropdown-menu dropdown-menu-right"]/li[2]/a[1]').click()
        cy.get('#input-email').type(data.email)
        cy.get('#input-password').type(data.password) 

        //Entering a Product name:'hp'  into the Search text box field 
        cy.get('[type="submit"]').click()
        cy.get('[name="search"]').then(($search)=>{
            expect($search).to.have.attr('placeholder','Search')
            cy.wrap($search).type('hp')
        })

        //Clicking on the button having search icon
        cy.get('[class="fa fa-search"]').click();

        //Clicking on the Product:'hp' displayed in the Search results
        cy.xpath('//span[@class="hidden-xs hidden-sm hidden-md" and text()="Add to Cart"]').click({force: true})

        //Clicking on 'Add to Cart' button in the displayed 'Product Display' page 
        cy.get('[id="button-cart"]').click({force: true})

        //Click on the 'shopping cart!' link in the displayed success message 
        cy.xpath('//a[text()="shopping cart"]').click()

    });
});