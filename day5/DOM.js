// // ============================================================================
// // DOM (DOCUMENT OBJECT MODEL) - COMPLETE GUIDE
// // ============================================================================

// /*
// ================================================================================
// DOM DEFINITION (10 LINES)
// ================================================================================
// 1. DOM stands for Document Object Model.
// 2. It's a programming interface for HTML and XML documents.
// 3. Represents the document as a tree structure of nodes.
// 4. Each node is an object representing a part of the document.
// 5. Allows JavaScript to access, modify, add, or delete HTML elements.
// 6. Makes web pages dynamic by enabling real-time content updates.
// 7. Treats the entire HTML document as a single object.
// 8. Nodes include elements, attributes, text, comments, etc.
// 9. Works across all modern web browsers.
// 10. Essential for creating interactive web applications.

// ================================================================================
// DOM TYPES WITH EXAMPLES
// ================================================================================

// 1. DOCUMENT NODE
//    - Represents the entire HTML document (root of DOM tree)
//    - Example: document (the global object)

// 2. ELEMENT NODE
//    - Represents HTML elements (<div>, <p>, <h1>, etc.)
//    - Example: document.getElementById("myDiv")

// 3. ATTRIBUTE NODE
//    - Represents attributes of HTML elements (id, class, src, etc.)
//    - Example: element.getAttribute("class")

// 4. TEXT NODE
//    - Represents the text content inside HTML elements
//    - Example: element.textContent or element.innerText

// 5. COMMENT NODE
//    - Represents HTML comments (<!-- comment -->)
//    - Example: <!-- This is a comment -->

// 6. DOCUMENT FRAGMENT NODE
//    - Represents a lightweight document object for temporary storage
//    - Example: document.createDocumentFragment()

// ================================================================================
// SAMPLE EXAMPLE: DOM MANIPULATION
// ================================================================================
// */

// // SAMPLE HTML STRUCTURE (imagine this in index.html)
// /*
// <!DOCTYPE html>
// <html>
// <body>
//     <h1 id="title">Hello World</h1>
//     <button id="btn">Click Me</button>
//     <div id="container"></div>
//     <script src="DOM.js"></script>
// </body>
// </html>
// */

// // SAMPLE JAVASCRIPT CODE
// console.log("=== DOM EXAMPLE ===");

// // 1. GET ELEMENT BY ID (Element Node)
// const titleElement = document.getElementById("title");
// console.log("Title Element:", titleElement);

// // 2. MODIFY TEXT CONTENT (Text Node)
// if (titleElement) {
//     titleElement.textContent = "Hello DOM!";
//     titleElement.style.color = "blue";
// }

// // 3. CREATE NEW ELEMENT (Element Node)
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a dynamically created paragraph!";
// newParagraph.style.fontSize = "18px";

// // 4. APPEND TO DOM
// const container = document.getElementById("container");
// if (container) {
//     container.appendChild(newParagraph);
// }

// // 5. ADD EVENT LISTENER
// const button = document.getElementById("btn");
// if (button) {
//     button.addEventListener("click", function() {
//         alert("Button clicked! DOM is working!");
//         const newItem = document.createElement("li");
//         newItem.textContent = "New item added at " + new Date();
//         container.appendChild(newItem);
//     });
// }

// // 6. ACCESS ATTRIBUTES (Attribute Node)
// if (titleElement) {
//     console.log("Title ID:", titleElement.getAttribute("id"));
// }

// console.log("=== DOM Example Complete ===");


