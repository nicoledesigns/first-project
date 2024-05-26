function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // to use 12-hour clock format
    };
    const dateTimeString = now.toLocaleDateString('en-US', options);

    // Store current date and time in localStorage
    localStorage.setItem('currentDateTime', dateTimeString);

    // Display current date and time
    document.getElementById('datetime').innerHTML = dateTimeString;
}

// Load and display current date and time from localStorage if available
const storedDateTime = localStorage.getItem('currentDateTime');
if (storedDateTime) {
    document.getElementById('datetime').innerHTML = storedDateTime;
}

// Update time every second
setInterval(updateDateTime, 1000);

//find.html
function validateFindPetForm() {
    // Get form inputs
    const selectedPetType = document.querySelector('input[name="title"]:checked');
    const breed = document.getElementById('Breed').value.trim();
    const getsAlongWithDogs = document.getElementById('dogs').checked;
    const getsAlongWithCats = document.getElementById('cats').checked;
    const getsAlongWithChildren = document.getElementById('children').checked;

    // Validation checks
    if (!selectedPetType || !breed || (!getsAlongWithDogs && !getsAlongWithCats && !getsAlongWithChildren)) {
        // Display error message
        document.getElementById('errorMessage').textContent = 'Please fill out all fields.';
        return false; // Prevent form submission
    } else {
        // Clear error message if fields are filled
        document.getElementById('errorMessage').textContent = '';
        return true; // Allow form submission
    }
}

//Give.html
window.onload = function validateGive() {
    // Attach event listener to the form
    document.querySelector('form').addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form inputs
        const petType = document.getElementById('petType').value;
        const breed = document.getElementById('breed').value.trim();
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const otherDogs = document.getElementById('otherDogs').value;
        const otherCats = document.getElementById('otherCats').value;
        const smallChildren = document.getElementById('smallChildren').value;
        const comment = document.getElementById('comment').value.trim();
        const ownerName = document.getElementById('ownerName').value.trim();
        const ownerEmail = document.getElementById('ownerEmail').value.trim();

        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (!petType || !breed || !age || age === 'None' || !gender || gender === 'None' ||
            !otherDogs || otherDogs === 'None' || !otherCats || otherCats === 'None' ||
            !smallChildren || smallChildren === 'None' || !comment || !ownerName || !ownerEmail || !emailRegex.test(ownerEmail)) {
            // Display error message
            document.getElementById('errorMessage').textContent = 'Please fill out all fields correctly.';
        } else {
            // Submit the form if all fields are filled and email format is valid
            event.target.submit();
        }
    });
};
