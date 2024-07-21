///<reference types="@cypress/xpath" />
import Login_po from "../../../support/PageObjects/AddToCart/login";
import Search_po from "../../../support/PageObjects/AddToCart/search";
import AddToCart_po from "../../../support/PageObjects/AddToCart/add";
import Link_po from "../../../support/PageObjects/AddToCart/link";
import Display from "../../../support/PageObjects/AddToCart/display";
import RemoveUpdate from "../../../support/PageObjects/AddToCart/remove_update";

describe('Validate the Add to Cart functionality', () => {
    const login_po=new Login_po();
    const search_po=new Search_po();
    const add_po=new AddToCart_po();
    const display=new Display();
    const link_po=new Link_po();
    const remove_po=new RemoveUpdate();
    const update_po=new RemoveUpdate();

    it('Verify by registering as new user and add the product to the cart', () => {
        login_po.EnterURL();
        login_po.Register();
        search_po.Search_imac();
        add_po.Add1();
        display.Display_imac();
        link_po.linkclick('shopping cart')
        cy.wait(2000)
    });

    it('Verify by Login into the account and add the product to the cart', () => {
        login_po.EnterURL();
        login_po.Login();
        search_po.Search_imac();
        add_po.Add1();
        display.Display_imac();
        link_po.linkclick('shopping cart')
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });

    it('Adding Multiple Products to the cart', () => {
        login_po.EnterURL();
        search_po.Search_sam()
        add_po.Add_mul()
        link_po.linkclick('shopping cart')
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });

    it('On clicking the shopping cart icon in the header section', () => {
        login_po.EnterURL();
        add_po.Add_header();
        add_po.Add_nav();
        cy.wait(3000)
        link_po.linkclick('Qafox.com')
    });

    it('Adding the product from dropdown ', () => {
        login_po.EnterURL();
        add_po.Add_nav();
        link_po.linkclick('shopping cart')
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });
    
    it('Adding the product to the cart and remove the same item again', () => {
        login_po.EnterURL();
        add_po.Add_nav();
        link_po.linkclick('shopping cart')
        cy.wait(2000)
        remove_po.Remove();
        link_po.linkclick('Qafox.com')
    });
    
    it('Adding the product to the cart and update the same item again', () => {
        login_po.EnterURL();
        search_po.Search_hp();
        add_po.Add_hp();
        link_po.linkclick('shopping cart')
        update_po.Update();
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });

    it('Update the quantity of the product', () => {
        login_po.EnterURL();
        search_po.Search_palm();
        add_po.Add_quantity();
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });

    it('Adding all the products from the homepage', () => {
        login_po.EnterURL();
        add_po.Addmul_home();
        cy.wait(2000)
        link_po.linkclick('Qafox.com')
    });
});





