function addingEventListener() {
    // Select the element with id "button"
    const button = document.getElementById("button");
  
    // Check if the button exists before adding the event listener
    if (button) {
      button.addEventListener("click", function () {
        console.log("Button clicked!"); 
      });
    }
  }
  