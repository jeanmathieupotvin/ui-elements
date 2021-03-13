// Show/hide the contents of an accordion.
toggleAccordion = acc => {
  // Get HTML elements;
  const btn  = acc.getElementsByClassName("accordion-btn")[0];
  const main = acc.getElementsByClassName("accordion-main")[0];
  // Toggle active class of button.
  btn.classList.toggle("accordion-active");
  // Toggle display property of contents.
  main.style.display = (main.style.display === "block") ? "none" : "block";
  // Function is used for its side-effect.
  return undefined;
}

// Register a click event to toggle the contents of an accordion.
registerAccordionEvent = acc => {
  acc.getElementsByClassName("accordion-btn")[0]
    .addEventListener("click", () => toggleAccordion(acc) );
  // Function is used for its side-effect.
  return undefined;
}

// Register all accordions' events
registerAccordionsEvents = () => {
  // Get all accordions in document.
  const accs = document.getElementsByClassName("accordion");
  const nAccs = accs.length;
  // Loop over each accordion and register its events.
  for (let i = 0; i < nAccs; i++) {
    registerAccordionEvent(accs[i]);
  }
  // Function is used for its side-effect.
  return undefined;
}
