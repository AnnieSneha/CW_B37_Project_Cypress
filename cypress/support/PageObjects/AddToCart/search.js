class Search_po{
Search_imac(){
    cy.get('[name="search"]').then(($search)=>{
        expect($search).to.have.attr('placeholder','Search')
        cy.wrap($search).type('imac')
    })
    cy.get('[class="fa fa-search"]').click();
}
Search_hp(){
    cy.get('[name="search"]').then(($search)=>{
        expect($search).to.have.attr('placeholder','Search')
        cy.wrap($search).type('hp')
    })
    cy.get('[class="fa fa-search"]').click();
}
Search_sam(){
    cy.get('[name="search"]').then(($search)=>{
        expect($search).to.have.attr('placeholder','Search')
        cy.wrap($search).type('samsung')
    })
    cy.get('[class="fa fa-search"]').click();
}
Search_palm(){
    cy.get('[name="search"]').then(($search)=>{
        expect($search).to.have.attr('placeholder','Search')
        cy.wrap($search).type('palm')
    })
    cy.get('[class="fa fa-search"]').click();
}
}

export default Search_po;