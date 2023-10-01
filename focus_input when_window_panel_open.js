setTimeout(() => {
  // Select the node that will be observed for mutations
  const targetNode = document;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    // console.log(mutationList);
    for (const mutation of mutationList) {
      for (const i of mutation.addedNodes) {
        if (i.id == "window-panel"||i.classList.contains("panel-group")) {
          setTimeout(() => {
            const a = document.querySelector("#window-panel .tabsearch");
            a && a.focus();
          });
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
});
