function removeAds() {
  // Selects the particular span and store them in an array and then filters
  // out the element that has the inner text as "Promoted".
  // Then for each such filtered element, it removes the parent of parent of
  // parent of parent of the element.
  Array.from(document.querySelectorAll(".feed-shared-actor__description"))
    .filter((el) => el.innerText === "Promoted")
    .forEach((el) =>
      el.parentElement.parentElement.parentElement.parentElement.remove()
    );

  // Selects the particular span and store them in an array and then filters
  // out the element that has the inner text as "Promoted".
  // Then for each such filtered element, it removes the parent of parent of
  // parent of parent of the element.
  Array.from(document.querySelectorAll(".feed-shared-actor__sub-description"))
    .filter((el) => el.innerText === "Promoted")
    .forEach((el) =>
      el.parentElement.parentElement.parentElement.parentElement.remove()
    );
}

removeAds();

// Ensures ads will be removed as the user scrolls
setInterval(removeAds, 100);
