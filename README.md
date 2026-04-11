# Alfred AI 🎩

A minimal AI web chat application built with Node.js and Groq API.

## Technologies Used
- Node.js
- Express.js
- Groq API (llama-3.3-70b-versatile model)
- HTML/CSS/JavaScript

## How to Install

1. Clone the repository:
git clone https://github.com/htom7836/Alfred-AI.git

2. Go into the folder:
cd Alfred-AI

3. Install dependencies:
npm install

4. Create a `.env` file and add your Groq API key:
GROQ_API_KEY=your_groq_api_key_here

## How to Run
node server.js

Then open your browser and go to:
http://localhost:3000

## How it Works
- User types a message on the webpage
- Frontend sends it to the backend server
- Server sends it to Groq AI API
- AI response comes back and displays on screen