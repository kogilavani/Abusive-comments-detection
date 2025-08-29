// Teacher interface JavaScript
class TeacherInterface {
    constructor() {
        this.socket = io();
        this.recognition = null;
        this.isRecording = false;
        this.currentTranscript = '';
        
        this.initializeElements();
        this.initializeSpeechRecognition();
        this.setupEventListeners();
        this.setupSocketListeners();
    }

    initializeElements() {
        this.startBtn = document.getElementById('startBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.currentText = document.getElementById('currentText');
        this.conversationHistory = document.getElementById('conversationHistory');
        this.textInput = document.getElementById('textInput');
        this.sendTextBtn = document.getElementById('sendTextBtn');
        this.micStatus = document.getElementById('micStatus');
        this.connectionStatus = document.getElementById('connectionStatus');
        this.confidenceLevel = document.getElementById('confidenceLevel');
        this.fontSizeSlider = document.getElementById('fontSizeSlider');
        this.fontSizeValue = document.getElementById('fontSizeValue');
    }

    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isRecording = true;
                this.updateUIState();
                this.updateMicStatus('recording', 'Recording...');
            };

            this.recognition.onresult = (event) => {
                let interimTranscript = '';
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i].transcript;
                    const confidence = event.results[i].confidence;

                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                        // Send final transcript to server
                        if (finalTranscript.trim()) {
                            this.sendTranscription(finalTranscript, confidence);
                        }
                    } else {
                        interimTranscript += transcript;
                    }
                }

                // Update current text display
                this.currentText.innerHTML = `
                    <span class="final-text">${finalTranscript}</span>
                    <span class="interim-text" style="color: #888; font-style: italic;">${interimTranscript}</span>
                `;

                if (event.results[event.resultIndex] && event.results[event.resultIndex].confidence) {
                    this.updateConfidenceLevel(event.results[event.resultIndex].confidence);
                }
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.updateMicStatus('error', `Error: ${event.error}`);
                
                if (event.error === 'not-allowed') {
                    alert('Microphone access denied. Please allow microphone access and try again.');
                }
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                this.updateUIState();
                this.updateMicStatus('off', 'Microphone Off');
            };
        } else {
            alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
            this.startBtn.disabled = true;
        }
    }

    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startRecording());
        this.stopBtn.addEventListener('click', () => this.stopRecording());
        this.clearBtn.addEventListener('click', () => this.clearConversation());
        this.sendTextBtn.addEventListener('click', () => this.sendTextMessage());
        
        this.textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendTextMessage();
            }
        });

        this.fontSizeSlider.addEventListener('input', (e) => {
            const fontSize = e.target.value + 'px';
            this.fontSizeValue.textContent = fontSize;
            document.body.style.fontSize = fontSize;
        });
    }

    setupSocketListeners() {
        this.socket.on('connect', () => {
            this.updateConnectionStatus('connected', 'Connected');
        });

        this.socket.on('disconnect', () => {
            this.updateConnectionStatus('disconnected', 'Disconnected');
        });

        this.socket.on('new_message', (message) => {
            this.addMessageToHistory(message);
        });

        this.socket.on('conversation_history', (history) => {
            this.conversationHistory.innerHTML = '';
            history.forEach(message => this.addMessageToHistory(message));
        });

        this.socket.on('conversation_cleared', () => {
            this.conversationHistory.innerHTML = '';
            this.currentText.textContent = 'Start speaking to see transcription here...';
        });
    }

    startRecording() {
        if (this.recognition && !this.isRecording) {
            try {
                this.recognition.start();
            } catch (error) {
                console.error('Error starting recognition:', error);
                this.updateMicStatus('error', 'Error starting microphone');
            }
        }
    }

    stopRecording() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
        }
    }

    sendTranscription(text, confidence = 1.0) {
        const data = {
            sender: 'Teacher',
            type: 'speech',
            content: text.trim(),
            confidence: confidence
        };
        
        this.socket.emit('speech_transcription', data);
    }

    sendTextMessage() {
        const text = this.textInput.value.trim();
        if (text) {
            const data = {
                sender: 'Teacher',
                content: text
            };
            
            this.socket.emit('text_message', data);
            this.textInput.value = '';
        }
    }

    clearConversation() {
        if (confirm('Are you sure you want to clear the conversation history?')) {
            this.socket.emit('clear_conversation');
        }
    }

    addMessageToHistory(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender.toLowerCase()}`;
        
        const confidenceText = message.type === 'speech' ? 
            `(${Math.round(message.confidence * 100)}% confidence)` : '';
        
        messageElement.innerHTML = `
            <div class="message-header">
                <div>
                    <span class="message-sender">${message.sender}</span>
                    <span class="message-type ${message.type}">${message.type}</span>
                </div>
                <div class="message-timestamp">${message.timestamp} ${confidenceText}</div>
            </div>
            <div class="message-content">${message.content}</div>
        `;
        
        this.conversationHistory.appendChild(messageElement);
        this.conversationHistory.scrollTop = this.conversationHistory.scrollHeight;
    }

    updateUIState() {
        this.startBtn.disabled = this.isRecording;
        this.stopBtn.disabled = !this.isRecording;
    }

    updateMicStatus(status, text) {
        const icon = this.micStatus.querySelector('i');
        const span = this.micStatus.querySelector('span');
        
        this.micStatus.className = 'status-item';
        
        switch (status) {
            case 'recording':
                icon.className = 'fas fa-microphone';
                this.micStatus.classList.add('recording');
                break;
            case 'off':
                icon.className = 'fas fa-microphone-slash';
                break;
            case 'error':
                icon.className = 'fas fa-exclamation-triangle';
                break;
        }
        
        span.textContent = text;
    }

    updateConnectionStatus(status, text) {
        const icon = this.connectionStatus.querySelector('i');
        const span = this.connectionStatus.querySelector('span');
        
        this.connectionStatus.className = 'status-item';
        
        if (status === 'connected') {
            icon.className = 'fas fa-wifi';
            this.connectionStatus.classList.add('connected');
        } else {
            icon.className = 'fas fa-wifi-slash';
        }
        
        span.textContent = text;
    }

    updateConfidenceLevel(confidence) {
        if (confidence !== undefined) {
            const percentage = Math.round(confidence * 100);
            this.confidenceLevel.textContent = `Confidence: ${percentage}%`;
            
            // Color code confidence levels
            if (percentage >= 80) {
                this.confidenceLevel.style.color = '#27ae60';
            } else if (percentage >= 60) {
                this.confidenceLevel.style.color = '#f39c12';
            } else {
                this.confidenceLevel.style.color = '#e74c3c';
            }
        }
    }
}

// Initialize the teacher interface when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TeacherInterface();
});