// Logs window object
//We log window to return the window object (the browser window), as shown in the following example:
console.log(window);
console.log("***window***");

// Logs reference to the document in the window object
//Because the document is a property of the window object, we log window.document to return a reference to the entire document—like in the following example:
console.log("***window.document***");
console.log(window.document);

// Logs root element of document.
//Because document serves as the entry point to a webpage's content, we use document.documentElement to log the document's root element or the <HTML>—as shown in the following example:
console.log("***document.documentElement***");


console.log(document.documentElement);

console.log("***window.document.children***");
console.log(window.document.children[0].children[1]);
// Returns head element of current document
//We use document.head to log the document's <head> element, as follows:
console.log("***document.head***");
console.log(document.head);
console.log(document.body);




