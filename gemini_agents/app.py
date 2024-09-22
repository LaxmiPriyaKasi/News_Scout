# app.py remains mostly unchanged
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from crew import crew

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow requests from your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

@app.post("/chat")
async def chat(message: Message):
    # Process user input message
    inputs = {'topic': message.message}

    # Kick off the crew process with the user input
    result = crew.kickoff(inputs=inputs)

    # Return the processed result to the frontend
    return {"reply": result}
