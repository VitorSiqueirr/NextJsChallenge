describe("inventory specs", () => {
  beforeEach(() => {
    cy.visit("/inventory");
  });

  it("renders the inventory items with useful data", () => {
    cy.getDataTestId("inventory-list").should("have.length.greaterThan", 1);

    cy.getDataTestId("inventory-list").then(($list) => {
      cy.wrap($list).findDataTestId("item-title").should("not.be.empty");
      cy.wrap($list).findDataTestId("item-sector").should("not.be.empty");
      cy.wrap($list).findDataTestId("item-fragility").should("not.be.empty");
      cy.wrap($list)
        .findDataTestId("item-last-maintenance")
        .should("not.be.empty");
      cy.wrap($list).findDataTestId("item-wear").should("not.be.empty");
    });
  });
});
