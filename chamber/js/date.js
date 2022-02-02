// select the elements to manipulate (output to)
const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let dayOfWeek = now.getDay();
let bannerMessage = '';

if (dayOfWeek == 1 || dayOfWeek == 2) {
    bannerMessage = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    bannerMessage = '';
}
document.querySelector('#bannermessage').innerHTML = bannerMessage;