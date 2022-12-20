// Define an array of elements
var elements = [
    document.querySelector('a[href="#home"]'),
    document.querySelector('a[href="#about"]'),
    document.querySelector('a[href="#projects"]'),
    document.querySelector('a[href="#contact"]')
  ];
  
  // Loop through the array of elements
  elements.forEach(function(element) {
    // Attach a click event handler to each element
    element.addEventListener('click', function() {
      // Change the background color of the element to red
      element.style.backgroundColor = '#aa1704';
  
      // Reset the background color of the other elements
      elements.forEach(function(otherElement) {
        if (otherElement !== element) {
          otherElement.style.backgroundColor = '';
        }
      });
    });
  });
  