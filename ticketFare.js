// 6. Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

var age = 80;       
var isStudent = true;
var fare = 800; 

if (age < 10) { 
    var childrenTicket = fare * 0 /100;
    console.log("For children ticket free.");
    console.log("Children Ticket price is", fare - childrenTicket);
} 
else if (isStudent === true && age < 60) {
    var studentTicket = fare * 50 /100;
    console.log("Student'll get a 50% discount.");
    console.log("Student Ticket price is", fare - studentTicket)
} 
else if (age >= 60) {
    var seniorTicket = fare * 15 /100;
    console.log("Senior'll get a 15% discount.");
    console.log("Senior Ticket price is",fare - seniorTicket)
} 
else {
    console.log("Regular fare is", fare);
}