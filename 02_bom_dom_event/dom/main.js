// Common Document Properties (Part of DOM)
// ------------------------------------------
console.log("--- 1. Document Properties ---");
console.log("Title (Read/Write):", document.title);
console.log("URL (Read-only):", document.URL);
console.log("Referrer (Read-only):", document.referrer);
console.log("Body Element (Read/Write):", document.body);
console.log("Head Element (Read-only):", document.head);
console.log("HTML Element (Read-only):", document.documentElement);
console.log("All Images Collection (Read-only):", document.images);
console.log("Location Object (Read/Write):", document.location);
console.log("Cookies (Read/Write):", document.cookie);


console.log("--- Extracting Image Sources ---");
Array.from(document.images).forEach((img, index) => {
    console.log(`Image ${index + 1} Source:`, img.src);
});

document.title = "DOM Manipulation";

//document.location = "https://www.google.com"; // This will redirect the page


const anchorTag = document.getElementById("nav-logo");


anchorTag.textContent = "App Name";

anchorTag.classList.add("text-red-500", "font-bold");


const homeIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
`;

anchorTag.insertAdjacentHTML("afterbegin", homeIcon);

/*
    insertAdjacentHTML(position, text) - Four possible positions:
    ----------------------------------------------------------
    1. 'beforebegin': Before the element itself (as a sibling).
    2. 'afterbegin': Inside the element, before its first child (like prepend).
    3. 'beforeend': Inside the element, after its last child (like append).
    4. 'afterend': After the element itself (as a sibling).

    Visual Representation:
    <!-- beforebegin -->
    <a id="home-link">
        <!-- afterbegin -->
        HOME
        <!-- beforeend -->
    </a>
    <!-- afterend -->
*/

 //<link rel="icon" href="https://www.lexicongruppen.se/favicon.ico"/>

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "https://www.lexicongruppen.se/favicon.ico";
document.head.appendChild(favicon);


function createNavLinks() {
    const navLinks = [
        { id: "home-link", text: "Home", href: "#" },
        { text: "About", href: "#" },
        { text: "Features", href: "#" },
        { text: "Contact", href: "#" }
    ];

    const nav = document.querySelector("#main-nav")


    nav.innerHTML = navLinks.map(link =>
        `
        <a ${link.id ? `id="${link.id}"` : ``} 
        href="${link.href}" 
        class="text-slate-300 hover:text-white transition">
        
        ${link.text}
        </a>
        `
    ).join("");
}

createNavLinks();


function createEventCard(newEvent) {

    // 1. Create the main article container
    const article = document.createElement("article");
    article.classList.add(
        "bg-white", "border", "border-slate-200", "rounded-xl", "p-4",
        "shadow-sm", "hover:shadow-md", "hover:scale-[1.02]", "transition"
    );

    // 2. Create the image
    const img = document.createElement("img");
    img.src = newEvent.image;
    img.alt = newEvent.title;
    img.loading = "lazy";
    img.classList.add(
        "w-full", "h-40", "object-cover", "rounded-lg", "mb-4",
        "transition-transform", "duration-300", "hover:scale-105"
    );

    // 3. Create the category badge
    const category = document.createElement("span");
    category.textContent = newEvent.category;
    category.classList.add(
        "inline-block", "bg-red-50", "text-red-600", "text-xs",
        "px-2", "py-1", "rounded", "mb-3"
    );

    // 4. Create the date/time div
    const dateTime = document.createElement("div");
    dateTime.textContent = `${newEvent.date} · ${newEvent.time}`;
    dateTime.classList.add("text-sm", "text-slate-500", "mb-2");

    // 5. Create the title
    const title = document.createElement("h3");
    title.textContent = newEvent.title;
    title.classList.add("text-slate-900", "font-semibold", "mb-2");

    // 6. Create the location div
    const location = document.createElement("div");
    location.textContent = newEvent.location;
    location.classList.add("text-sm", "text-slate-500", "mb-1");

    // 7. Create the attendees div
    const attendees = document.createElement("div");
    attendees.textContent = `${newEvent.attendees} Attendees`;
    attendees.classList.add("text-sm", "text-slate-500", "mb-4");

    // 8. Create the button
    const button = document.createElement("button");
    button.textContent = "View Event";
    button.classList.add(
        "w-full", "bg-red-600", "text-white", "py-2", "rounded-lg",
        "hover:bg-red-700", "transition"
    );

    // 9. Append everything to the article
    article.appendChild(img);
    article.appendChild(category);
    article.appendChild(dateTime);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(attendees);
    article.appendChild(button);

    return article;

}


// js object
const newEvent = {
    title: "Stockholm JS Meetup",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    category: "Code",
    date: "Oct 15",
    time: "09:00",
    location: "Epicenter Stockholm",
    attendees: 10
};

const dynamicContainer = document.getElementById("dynamic-events");

if (dynamicContainer) {
    const card = createEventCard(newEvent);
    dynamicContainer.prepend(card);
}


