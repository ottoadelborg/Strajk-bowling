describe('strike spec', () => {
    const players = '2';
    const lanes = '1';
    const time = '18:00';

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should select a date/time to book of number of players and lanes', () => {
    cy.wait(1000);

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
  });

  it('should be possible to add shoes and be able to choose size', () => {
    cy.wait(1000);

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
    cy.get('.shoes__button').click().click();
    cy.get('.shoes__input').first().type('41');
    cy.get('.shoes__input').last().type('43');
    cy.get('.shoes__input').should('have.length.greaterThan', 1)
  });

  it('should be possible to remove one shoe option in case of misstakes', () => {
    cy.wait(1000);

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
    cy.get('.shoes__button').click().click();
    cy.get('.shoes__input').first().type('41');
    cy.get('.shoes__input').last().type('43');
    cy.get('.shoes__button--small').last().click();
    cy.get('.shoes__input').should('have.lengthOf.lessThan', 2);
  });

  it('should be possible to confirm when all necessary info is given', () => {
    cy.wait(1000);

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
    cy.get('.shoes__button').click().click();
    cy.get('.shoes__input').first().type('41');
    cy.get('.shoes__input').last().type('43');
    cy.get('.booking__button').click();
    cy.get('.confirmation__price').should('have.text', 'Total:340 sek');
    cy.get('.confirmation__input--ordernr').should('have.length.greaterThan', 0);
    cy.get('.confirmation__button').click();
  });

  it('should be possible to navigate between the menues', () => {
    cy.wait(1000);

    cy.get('.navigation__icon').click();
    cy.get('.navigation__link').last().click();
    cy.get('.confirmation__no-booking').should('have.text', 'Inga bokning gjord!');
  })
})