class RemoveUpdate{
Remove(){
    cy.get('[data-original-title="Remove"]').click()
}
Update(){
    cy.get('[data-original-title="Update"]').click()
    cy.get('.alert').contains('Success: You have modified your shopping cart!')
}
}
export default RemoveUpdate;