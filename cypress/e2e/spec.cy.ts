describe("template spec", () => {
  it('clicks the "+"', () => {
    cy.loginPage("sda", "Ádf");
    cy.contains("+").click();
  });
});
