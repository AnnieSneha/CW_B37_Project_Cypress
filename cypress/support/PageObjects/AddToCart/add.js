class AddToCart_po{

Add1(){ //imac
    cy.xpath('//span[.="Add to Cart"]').click({force: true})
}
Add_hp(){ //hp
    cy.xpath('//span[@class="hidden-xs hidden-sm hidden-md" and text()="Add to Cart"]').click({force: true})
    cy.get('[id="button-cart"]').click({force: true})
}

Add_mul(){ //multiple items
   cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=33&search=samsung" and text()="Samsung SyncMaster 941BW"]').click();
   cy.get('button[id="button-cart"]').click();
   cy.xpath('//a[.="Search"]').click();
   cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=49&search=samsung" and text()="Samsung Galaxy Tab 10.1"]').click();
   cy.get('button[id="button-cart"]').click()
   
}
Add_icon(){ 
    cy.xpath('//ul[@class="nav navbar-nav"]/li[6]').click();
    
}

Addmul_home(){
    cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43" and text()="MacBook"]').click()
    cy.get('button[id="button-cart"]').click()
    cy.get('[class="fa fa-home"]').click({force: true});
    cy.scrollTo(0,400)
    cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40" and text()="iPhone"]').click()
    cy.get('button[id="button-cart"]').click()
    cy.get('[class="fa fa-home"]').click({force: true});
    cy.scrollTo(0,-400)
    cy.get('[id="cart-total"]').click()
    cy.xpath('//strong[text()="View Cart"]').click()
}
Add_quantity(){
    cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=29&search=palm" and text()="Palm Treo Pro"]').click();
    cy.get('#input-quantity').clear().type('2').should('have.value','2')            
    cy.get('button[id="button-cart"]').click();
}
Add_header(){
    cy.get('a[title="Shopping Cart"]').click()
    cy.get('[id="content"]').contains('Your shopping cart is empty!')

}
Add_home(){
    cy.get('[type="button"][onclick="cart.add("40");"]').click()
}
Add_nav(){
    cy.xpath('//ul[@class="nav navbar-nav"]/li[4]').click()
    cy.xpath('//span[@class="hidden-xs hidden-sm hidden-md" and text()="Add to Cart"]').click({force: true})
}
}
export default AddToCart_po;