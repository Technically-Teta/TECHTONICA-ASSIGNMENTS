class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    // this.seatStyle = seatstyle;  // added new attributes to event class
    // this.venue = venue;
    // this.recentVenue = [];
  }

  addAvailableTickets = (ticketType, ticketPrice) => {
    this.availableTickets.push({ type: ticketType, price: ticketPrice });
  };

// comments out my method because it caused errors in the code
  // decideVenue = (seatstyle,venue) => {
  //   this.recentVenue.push({seatstyle: this.seatStyle, venue: venue})

  // }

  getEligibleTickets = (lowerBound, upperBound) => {
    const eligibleTickets = this.availableTickets.filter((ticket) => {
      return ticket.price >= lowerBound && ticket.price <= upperBound;
    });

    if (eligibleTickets.length === 0) {
      return "No tickets available.";
    }

    let ticketList = `${this.name} - ${this.description} - Eligible tickets:\n`;
    eligibleTickets.forEach((ticket, index) => {
      ticketList += `${index + 1}. ${ticket.type} ($${ticket.price})\n`;
    });

    return ticketList;
  };
}

// First event created from constructor
const eventObj = new Event(
  'KLOS Golden Gala',
  'An evening with Hollywood vampires'
);

// Objects representing events
const eventObj1 = new Event('Normal Girs', 'Still learning');
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
const eventObj4 = new Event('Jason Berg', 'Give em hell Tour');

// Adding different ticket types
eventObj1.addAvailableTickets('VIP', 100);
eventObj2.addAvailableTickets('General Admission', 50);
eventObj3.addAvailableTickets('Super VIP', 300);
eventObj4.addAvailableTickets('Regular', 75);

// Empty array for objects to load with events
const eventArray = new Array();

// Pushing single object to an array
eventArray.push(eventObj);
// Pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// In order to check whether the elements are pushed, use console.log
console.log(eventArray);

// Note that all methods in this example are inside DOMContentLoaded
// event handler. This is to prevent any JavaScript code from running before the document is finished loading (is ready).
document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description} ${item.getEligibleTickets(0, 100)}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});

class TicketType {
  constructor(ticketType, ticketPrice) {
    this.ticketType = ticketType;
    this.ticketPrice = ticketPrice;
  }
}

console.log(eventObj1.getEligibleTickets(30, 100));
console.log(eventObj2.getEligibleTickets(25, 80));
console.log(eventObj3.getEligibleTickets(100, 100));
console.log(eventObj4.getEligibleTickets(0, 100));

//commented out my test due to errors.Will correct later
//console.log( eventObj1.decideVenue('Plush Velvet Style Seats ','First Avenue'))
