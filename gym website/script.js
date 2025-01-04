document.addEventListener('DOMContentLoaded', () => {
  // Get all feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
      // Hide the description below the image (if it's already visible)
      card.querySelector('.feature-description').style.display = 'none';

      // Get the popup modal and content
      var popup = document.getElementById('feature-popup');
      var popupTitle = document.getElementById('popup-title');
      var popupDescription = document.getElementById('popup-description');
      var featureId = card.id;  // Get the clicked feature's ID

      // Feature content for each card
      var featureContent = {
        "workout-logging": {
          title: "Effortless Workout Logging",
          description: "Easily log your workouts and monitor your progress."
        },
        "rep-counting": {
          title: "Accurate Rep Counting",
          description: "Count reps accurately with AI-powered tracking."
        },
        "calorie-calculation": {
          title: "Calorie Calculation Made Easy",
          description: "Keep track of calories burned during workouts."
        },
        "personalized-plan": {
          title: "Personalized Workout Plans",
          description: "AI-tailored plans based on your fitness goals."
        },
        "diet-plan": {
          title: "Personalized Diet Plan",
          description: "Custom diet plans for your health and fitness."
        }
      };

      // Get the content for the clicked feature
      var content = featureContent[featureId];

      // Set the title and description in the popup
      popupTitle.innerText = content.title;
      popupDescription.innerHTML = ''; // Clear any previous content

      // Show the popup modal with animation
      popup.style.display = 'block';
      popup.style.opacity = 1;  // Fade in
      popup.style.transform = 'translate(-50%, -50%)';  // Bring into view

      // Apply the typing effect to the description
      setTimeout(() => {
        popupDescription.classList.add('typing-effect');
        popupDescription.innerText = content.description; // Add the text after a small delay
      }, 500);  // Delay the typing effect to ensure the popup box is visible first

      // Hide the popup after a few seconds
      setTimeout(() => {
        popup.style.opacity = 0; // Fade out
        popup.style.transform = 'translate(-50%, -50%) translateY(-30px)';  // Slide up
        setTimeout(() => {
          popup.style.display = 'none'; // Hide after fade out
        }, 300); // Wait for fade-out to complete
      }, 5000); // Hide after 5 seconds
    });
  });

  // Get the close button for the popup
  var closeBtn = document.getElementsByClassName('close-popup-btn')[0];

  // Close the popup when the user clicks the 'X'
  closeBtn.onclick = function() {
    var popup = document.getElementById('feature-popup');
    popup.style.opacity = 0;  // Fade-out effect
    popup.style.transform = 'translate(-50%, -50%) translateY(-30px)';  // Slide up
    setTimeout(() => {
      popup.style.display = 'none';  // Hide the popup
    }, 300);  // Wait for fade-out to complete
  };

  // Close the popup if the user clicks outside the popup content
  window.onclick = function(event) {
    var popup = document.getElementById('feature-popup');
    if (event.target == popup) {
      popup.style.opacity = 0; // Fade-out effect
      popup.style.transform = 'translate(-50%, -50%) translateY(-30px)';  // Slide up
      setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after fade-out
      }, 300); // Wait for fade-out to complete
    }
  };
});
