// Get elements
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messageContainer = document.getElementById('messageContainer');


let replyingTo = null;

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for pressing "Enter" key to send message
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send message
function sendMessage() {
    
        const messageText = messageInput.value.trim();
        if (messageText) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
    
            
        if (replyingTo) {
        const replyIndicator = document.createElement('span');
        replyIndicator.classList.add('reply-indicator');
        replyIndicator.textContent = `Replying to: "${replyingTo}"`;
        messageElement.prepend(replyIndicator); // Prepend the reply indicator
        replyingTo = null; // Reset after sending the reply
    }

    // Add message to the container
    messageContainer.appendChild(messageElement);

    messageInput.value = ''; // Clear input field

    // Scroll to the bottom of the chat
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
}


// Event listener to handle replying to a message
messageContainer.addEventListener('click', (e) => {
if (e.target && e.target.classList.contains('message')) {
    replyingTo = e.target.textContent; // Set the message to reply to
    messageInput.value = `Replying to: "${replyingTo}"`; // Populate input box with the message to reply to
}
});
    
