/**
 * =============================================================================
 * Accordions
 * =============================================================================
 */

/**
 * Open or close an accordion (reverse its actual show/hidden state).
 * @param {HTMLDivElement} acc - An object; an instance of a HTMLDivElement
 *     that represents an accordion. An accordion has the html structure
 *     div.accordion > div.accordion-btn + div.accordion-main.
 * @return {undefined}
 */
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

/**
 * Register events related to an accordion.
 * @param {HTMLDivElement} acc - An object; an instance of a HTMLDivElement
 *     that represents an accordion. An accordion has the html structure
 *     div.accordion > div.accordion-btn + div.accordion-main.
 * @return {undefined}
 */
registerAccordionEvents = acc => {
  // Listen for clicks. A click will toggle the contents of the accordion.
  acc.getElementsByClassName("accordion-btn")[0]
    .addEventListener("click", () => toggleAccordion(acc) );
  // Function is used for its side-effect.
  return undefined;
}

/**
 * Register events related to all accordions found in a document.
 * @return {undefined}
 */
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
