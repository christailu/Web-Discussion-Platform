// Dummy database for demonstration purposes 
const users = [];
const posts = [];

// Function to sign up
function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    
    // Create a user object (in a real application, you would store this in a database)
    const user = { username, password };
    users.push(user);

    alert("Signup successful! You can now log in.");
    document.getElementById("signup-form").reset();
}

// Function to log in
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Check if the user exists (in a real application, you would query the database)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        document.getElementById("login-form").reset();
        document.getElementById("auth").style.display = "none"; // Hide authentication forms
        document.getElementById("share-post").style.display = "block"; // Show post sharing form
        displayPosts();
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

// Function to share a post
function sharePost() {
    const content = document.getElementById("post-content").value;

    // Create a post object (in a real application, you would store this in a database)
    const post = { content };
    posts.push(post);

    document.getElementById("post-content").value = ""; // Clear the textarea
    displayPosts();
}

// Function to display posts
function displayPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = ""; // Clear existing posts

    // Display posts (in a real application, you would query the database)
    posts.forEach((post, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("discussion-item");
        listItem.innerHTML = `<h3>Post ${index + 1}</h3><p>${post.content}</p>`;
        postList.appendChild(listItem);
    });
}
