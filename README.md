<p><b> User stories: </b></p>
<br></br>
<p><b>Som användare vill jag</b> kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.</p>
<p>acceptanskriterier:</p> 
Testet ska se så att datum, tid, antal spelare & antal banor så att rätt info kan skrivas i.
  <p>
    

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);</p>  
  <br></br>
<p><b>Som användare vill jag</b> kunna välja skostorlek för varje spelare så varje spelare får skor som passar.</p>
  <p>Acceptanskriterier:</p>
  Testet ska se så att knappen funkar för att lägga till två par skor och skriva i skostorlek med förra föregående test.
 <p>
    

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
    cy.get('.shoes__button').click().click();
    cy.get('.shoes__input').first().type('41');
    cy.get('.shoes__input').last().type('43');
    cy.get('.shoes__input').should('have.length.greaterThan', 1)
  </p>
 <br></br>
<p><b>Som användare vill jag</b> kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.</p>
  <p>Acceptanskriterier</p>
  Testet ska se så att det går att ta bort en av de två skorna från föregående test med knappen som finns brevid skostorleks-fältet.
  <p>     

    cy.get('.booking-info__date').type('2023-06-02');
    cy.get('.booking-info__time').type(time);
    cy.get('.booking-info__who').type(players);
    cy.get('.booking-info__lanes').type(lanes);
    cy.get('.shoes__button').click().click();
    cy.get('.shoes__input').first().type('41');
    cy.get('.shoes__input').last().type('43');
    cy.get('.shoes__button--small').last().click();
    cy.get('.shoes__input').should('have.lengthOf.lessThan', 2);
  </p>
  <br></br>
  <p><b>Som användare vill jag</b> kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).</p>
  <p>Acceptanskriterier</p>
  Testet ska se så att när all information är inskrivet att den ska försöka göra en bokning via knappen & kontrollera så att det finns ett pris & ordernummer.
  <p>   

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
  </p>
  <br></br>
  <p><b>Som användare vill jag </b> kunna navigera mellan boknings-och bekräftelsevyn.</p>
  <p>Acceptanskriterier</p>
  Testet ska se så att knappen uppe i vänstra hörnet funkar & tar användaren till två alternativ, bokning & bekräftelse.
  <p>    

    cy.get('.navigation__icon').click();
    cy.get('.navigation__link').last().click();
    cy.get('.confirmation__no-booking').should('have.text', 'Inga bokning gjord!');
  </p>
