//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

// Array to store posts
let posts = [];

// Function to display posts
function displayPosts() {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = ""; // Clear existing posts

    // Retrieve posts from local storage
    const storedPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];

    // Loop through posts and create HTML elements
    storedPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `<p>${post}</p>`;
        postContainer.appendChild(postElement);
    });
}

// Function to submit a new post
function submitPost(event) {
    event.preventDefault();

    // Get subject and content values
    var subject = document.getElementById('post-subject').value;
    var content = document.getElementById('post-content').value;

    // Create a new div for the post
    var postDiv = document.createElement('div');
    postDiv.className = 'post-box';

    // Create elements for subject and content
    var subjectElement = document.createElement('h2');
    subjectElement.textContent = subject;

    var contentElement = document.createElement('p');
    contentElement.textContent = content;

    // Append subject and content to the post div
    postDiv.appendChild(subjectElement);
    postDiv.appendChild(contentElement);

    // Append the post div to the post container
    var postContainer = document.getElementById('post-container');
    postContainer.appendChild(postDiv);

    // Clear the form after submission
    document.getElementById('post-subject').value = '';
    document.getElementById('post-content').value = '';
}
