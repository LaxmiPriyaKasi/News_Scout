# News Scout : AI-Powered News Bot with Agentic Gemini 1.5 Pro
News Scout is an AI-driven chatbot designed to provide users with the latest news updates. Leveraging the power of Gemini 1.5 Pro and an Agentic AI framework, News Scout uses two specialized agents, a Researcher and a Writer, to gather, analyze, and present news summaries in an easy-to-understand format.

### Project Structure
* *chatbot*: Contains the chatbot interface, including the front-end and back-end components.
* *gemini_agents*: Houses the agents and the large language model (LLM) powered by Gemini 1.5 Pro.

### How the tool works

1. **User Interaction**: Users interact with News Scout through a user-friendly interface, either via a web platform or an API.
2. **Researcher Agent**: When a user requests news, the Researcher agent gathers the latest information from various reliable sources. This agent is responsible for ensuring the data is current and relevant.
3. **Writer Agent**: The gathered information is then passed to the Writer agent, which processes the data and generates coherent, human-like news summaries. This agent uses advanced NLP techniques to ensure the content is engaging and easy to understand.
4. **Gemini 1.5 Pro Integration**: Both agents leverage the capabilities of Gemini 1.5 Pro, a powerful large language model, to enhance their performance. This integration ensures high accuracy and reliability in the responses generated.
5. **Response Delivery**: The final news summary is delivered to the user through the chatbot interface, providing them with up-to-date news in a concise and readable format.

### Setup Instructions
Step 0: Download the zip file from the github repo & unzip the file
Step 1: Create a venv using cmd
	```Python -m venv venv
Activate the venv using
	```.\venv\Scripts\activate
Install the requirements.txt using
	```pip install -r requirements.txt

Step 2: Once the requirements.txt are installed, let’s run the chatbot folder and gemini agents folder in 2 separate terminals so ensure that you have 2 terminals open with venv activated and navigated to respective folders
	cd chatbot (in terminal 1)
	cd gemini_agents (in terminal 2)

Step 3: In the gemini_agents terminal, create a .env file and add 2 API Keys – Google API Key and Serper API Key as follows
	SERPER_API_KEY = #Key
GOOGLE_API_KEY = #Key

Run the gemini agents using
	```uvicorn app:app –reload

Step 4: In the chatbot terminal,
Install javascript depencies using
	npm install next react react-dom
this creates the node modeules folder – ensure that it exists
Start the react app using 
	```npm run app

Step 5: Navigate to localhost:3000 to access the chat interface
Step 6: This opens the chatbot interface where yu can interact with the news app by asking news or current affairs you have


### Why users should adopt this tool

News Scout is designed to provide reliable, fast, and unbiased news updates by leveraging advanced **AI agents** and the **Gemini 1.5 Pro model**. The tool uses a dual-agent system, with a Researcher agent that sources news from reputable and unbiased outlets, ensuring accuracy and credibility. Paired with a Writer agent, the information is transformed into clear, concise summaries that are easy to understand. The user-friendly interface ensures easy interaction, while customization options offer personalized news experiences.

With a focus on **speed and accuracy**, News Scout is optimized to deliver real-time news updates. By leveraging advanced AI with **Gemini 1.5 Pro**, it ensures that you stay informed with trustworthy information, delivered promptly.

### Video demo

The video demo includes instructions on how to build, install, and run the tool, as well as a demonstration of how the completed product works.

Link for Video demo: https://drive.google.com/file/d/1Vxw2ptkH8EJ6Pmn_qNY0at1bGVwyvFiw/view?usp=sharing 
