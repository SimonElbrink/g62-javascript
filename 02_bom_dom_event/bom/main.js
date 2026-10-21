
//  window
//  ├── document  (the webpage HTML)
//  ├── location  (URL info)
//  ├── history   (back/forward)
//  └── navigator (browser info)


console.log("--- BOM Properties ---");
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

console.log("Window Location Object:", window.location);
console.log("Host (domain + port):", window.location.host);
console.log("Hostname (domain only):", window.location.hostname);
// We can also remove the 'window.' prefix to access properties and methods of 'location'

console.log("Host (domain + port):", location.host);
console.log("Hostname (domain only):", location.hostname);
console.log("Port:", location.port);
console.log("Protocol:", location.protocol);
console.log("Pathname:", location.pathname);
console.log("Search Query (?):", location.search);



console.log("--- Window Methods ---");


//window.alert("Hello World!");
//alert("Hello World!");

//console.log("--- after alert! ---");

//const confirmed = window.confirm("Are you sure?");
//console.log("User confirmed:", confirmed);
/*
Shows OK / Cancel
Returns:
    true → OK clicked
    false → Cancel clicked
 */


// const nameInput = window.prompt("What is your name?", "Guest");
// console.log("User entered name:", nameInput);
/*
Shows input box
Returns:
    text (what user typed)
    null if user cancels
 */

//window.open("https://www.lexicongruppen.se", "_blank", "width=600,height=400");
// window.open() → may be blocked by browser popup blockers





console.log("--- BOM Navigator Properties ---");
console.log("User Agent String:", navigator.userAgent);
console.log("Browser Language:", navigator.language);
console.log("Online Status:", navigator.onLine);


if (navigator.userAgentData) {
    console.log("--- Modern Browser Detection (userAgentData) ---");
    console.log("Brands:", navigator.userAgentData.brands);
    console.log("Mobile Device:", navigator.userAgentData.mobile);
}


// history.back();       // Same as clicking the browser's back button
// history.forward();    // Same as clicking the browser's forward button
// history.go(-1);       // Goes back 1 page (same as back)
// history.go(1);        // Goes forward 1 page (same as forward)
// history.go(0);        // Reloads the current page










