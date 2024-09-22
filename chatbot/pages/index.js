import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showQuickResponses, setShowQuickResponses] = useState(true);
    const [loading, setLoading] = useState(false);

    const quickResponseOptions = [
        "Global Economy",
        "Technology",
        "Science and Environment"
    ];

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage(input);
            e.preventDefault();
        }
    };

    const quickResponse = (text) => {
        const promptMessage = `What is the latest news on ${text}?`;
        sendMessage(promptMessage);
        setShowQuickResponses(false);
    };

    useEffect(() => {
        const welcomeMessage = {
            id: Date.now(),
            text: "Hello! What news would you like to know about today?",
            sender: 'bot'
        };
        setMessages([welcomeMessage]);
    }, []);

    const sendMessage = async (message) => {
        const trimmedMessage = message.trim();
        if (!trimmedMessage) return;

        setShowQuickResponses(false);
        setLoading(true);

        const newMessage = { id: Date.now(), text: trimmedMessage, sender: 'user' };
        setMessages(messages => [...messages, newMessage]);
        setInput('');

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmedMessage }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const { reply } = await response.json();
            const formattedReply = formatText(reply);
            setMessages(messages => [...messages, { id: Date.now() + 1, text: formattedReply, sender: 'bot' }]);

        } catch (error) {
            console.error("Failed to send message:", error);
            setMessages(messages => [...messages, { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting. Please try again.", sender: 'bot' }]);
        } finally {
            setLoading(false);
        }
    };

    const formatText = (text) => {
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.split('\n').map(line => {
            if (line.trim().startsWith('* ')) {
                return `<li>${line.trim().substring(2)}</li>`;
            }
            return line;
        }).join('\n');

        if (formattedText.includes('<li>')) {
            formattedText = `<ul>${formattedText}</ul>`;
        }

        return formattedText;
    };

    return (
        <div className={styles.container}>
            <div className={styles.chatContainer}>
                <div className={styles.chatHeader}>
                    <img src="/logo.png" alt="Chatbot Logo" className={styles.logo} />
                    <h1 className={styles.title}>News Scout</h1>
                    <p className={styles.description}>Your go-to source for the latest news updates!</p>
                </div>
    
                <div className={styles.chatArea}>
                    {messages.map((message) => (
                        <div key={message.id} className={message.sender === 'bot' ? styles.botMessage : styles.userMessage}>
                            {message.sender === 'bot' ? (
                                <span dangerouslySetInnerHTML={{ __html: message.text }} />
                            ) : (
                                message.text
                            )}
                        </div>
                    ))}
    
                    {loading && (
                        <div className={styles.loadingMessage}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <p>Thinking...</p>
                        </div>
                    )}
    
                    {showQuickResponses && (
                        <div className={styles.quickResponses}>
                            {quickResponseOptions.map(option => (
                                <button key={option} onClick={() => quickResponse(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
    
                <div className={styles.controls}>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className={styles.input}
                        placeholder="Type your message..."
                    />
                    <button onClick={() => sendMessage(input)} className={styles.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
}
