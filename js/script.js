// Show the correct page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Password Protection for Collection Page
function checkPassword() {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "1234") {  // Replace with a real secure method
        showPage("collection");
    } else {
        errorMessage.textContent = "Incorrect password. Try again.";
    }
}

// Set default page to Home
showPage('home');
