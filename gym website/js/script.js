document.addEventListener('DOMContentLoaded', () => {
    // Get all the feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Set a delay for each card to appear one by one
    featureCards.forEach((card, index) => {
      // Add a delay based on the index of the card
      card.style.animationDelay = `${index * 0.3 + 0.5}s`;  // 0.3s delay for each subsequent card
    });
  
    // Get the modal and close button
    var modal = document.getElementById("feature-modal");
    var span = document.getElementsByClassName("close-btn")[0];
  
    // Feature content (stored in an object for easy reference)
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
  
    // Click event for the feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', function() {
        var featureId = card.id;  // Get the clicked feature's ID
        var content = featureContent[featureId];  // Get the corresponding feature content
  
        // Set the content in the modal
        document.getElementById("feature-title").innerText = content.title;
        document.getElementById("feature-description").innerText = content.description;
  
        // Show the modal
        modal.style.display = "block";
      });
    });
  
    // Close the modal when the user clicks the 'X'
    span.onclick = function() {
      modal.style.display = "none";
    };
  
    // Close the modal if the user clicks outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  