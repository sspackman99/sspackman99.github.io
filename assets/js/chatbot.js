// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    const toggleButton = document.getElementById('toggle-chatbot');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');

    // Ensure elements are found
    console.log('Elements:', { chatbotContainer, toggleButton, chatMessages, chatInput });

    // Check if the toggleButton element exists
    if (toggleButton) {
        console.log('Toggle button found'); // Debugging statement

        // Toggle the chat window between minimized and expanded when the toggle button is clicked
        toggleButton.addEventListener('click', () => {
            console.log('Toggle button clicked'); // Debugging statement
            chatbotContainer.classList.toggle('minimized');
        });
    } else {
        console.error('Toggle button not found'); // Debugging statement
    }

    // Handle user input and send it to the backend when the Enter key is pressed
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            console.log('Key pressed:', e.key); // Debugging statement
            if (e.key === 'Enter' && chatInput.value.trim() !== '') {
                const userMessage = chatInput.value.trim(); // Get the user's message
                console.log('User message:', userMessage); // Debugging statement
                addMessage('User', userMessage); // Display the user's message in the chat window
                chatInput.value = ''; // Clear the input field

                // Send the user's message to the backend
                sendMessageToBackend(userMessage);
            }
        });
    } else {
        console.error('Chat input not found'); // Debugging statement
    }

    // Function to add messages as chat bubbles in the chat window
    function addMessage(sender, message) {
        console.log('Adding message:', { sender, message }); // Debugging statement
        const messageElement = document.createElement('div'); // Create a new div element for the message
        messageElement.classList.add('message', sender === 'User' ? 'user' : 'chatbot'); // Add appropriate classes based on the sender
        messageElement.textContent = message; // Set the message text
        chatMessages.appendChild(messageElement); // Append the message to the chat window

        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to send the user's message to the Ollama server and handle the response
    async function sendMessageToBackend(userMessage) {
        try {
            console.log('Sending message to backend:', userMessage); // Debugging statement
            // Send a POST request to the Ollama server
            const response = await fetch('http://10.73.1.156:11434/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
                body: JSON.stringify({
                    prompt: userMessage, // Convert the user's message to a JSON string with the key 'prompt'
                }),
            });

            // Check if the response from the server is not OK (status code not in the range 200-299)
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`); // Throw an error with the status code and status text
            }

            // Parse the JSON response from the server
            const data = await response.json();
            // Extract the chatbot's reply from the response data, or use a default message if not present
            const reply = data.response || "Sorry, I didn't understand that.";

            // Add the chatbot's reply to the chat window
            addMessage('Chatbot', reply);
        } catch (error) {
            // Log any errors that occur during the fetch or processing
            console.error('Error communicating with the Ollama server:', error);
            // Add an error message to the chat window
            addMessage('Chatbot', 'Sorry, there was an error processing your request.');
        }
    }

    // Display a greeting message when the page loads
    setTimeout(() => {
        addMessage('Chatbot', 'Hello! How can I assist you today?');
    }, 1000);
});