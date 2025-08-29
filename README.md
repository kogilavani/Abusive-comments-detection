# Speech Transcription Chatbot for Educational Settings

A real-time speech-to-text chatbot designed to facilitate communication between hearing impaired students and teachers in educational environments.

## Features

### Real-time Communication
- **Live Speech Transcription**: Real-time speech-to-text conversion using Web Speech API
- **Bi-directional Communication**: Both teachers and students can speak or type messages
- **Instant Synchronization**: Messages appear immediately across all connected devices

### Accessibility Features
- **Visual Feedback**: Flash notifications and visual alerts for new messages
- **Adjustable Text Size**: Customizable font sizes for better readability
- **High Confidence Indicators**: Displays transcription confidence levels
- **Auto-scroll**: Automatic scrolling to newest messages
- **Conversation History**: Full conversation logging and retrieval

### User Interfaces
- **Teacher Interface**: Optimized for teaching with clear transcription display
- **Student Interface**: Enhanced with accessibility features and live teacher speech display
- **Role-based Design**: Tailored experiences for different user types

## Technology Stack

- **Backend**: Flask with Socket.IO for real-time communication
- **Frontend**: HTML5, CSS3, JavaScript with Web Speech API
- **Real-time**: WebSocket connections for instant message delivery
- **Responsive**: Mobile-friendly design for tablets and devices

## Installation

1. **Clone or download the application files**

2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:5000`

## Usage

### Getting Started
1. Visit the main page at `http://localhost:5000`
2. Choose your role:
   - **Teacher**: Click "Join as Teacher" to access the teaching interface
   - **Student**: Click "Join as Student" to access the student interface

### Teacher Interface
- Click "Start Speaking" to begin real-time transcription
- Speak clearly into your microphone
- View real-time transcription with confidence levels
- Type additional messages using the text input
- Monitor all conversation history
- Clear conversation when needed

### Student Interface
- See live teacher speech transcription in the "Live Teacher Speech" section
- Use "Speak to Respond" to reply with speech-to-text
- Type responses using the text input area
- Receive visual alerts for new messages
- Adjust accessibility settings including:
  - Text size for better readability
  - Flash notifications for new messages
  - Auto-scroll behavior

### Accessibility Settings (Student Interface)
- **Text Size**: Use the slider to increase font size up to 28px
- **Flash on New Message**: Toggle visual flash alerts
- **Auto-scroll**: Automatically scroll to newest messages

## Browser Compatibility

### Recommended Browsers
- **Google Chrome** (best support)
- **Microsoft Edge**
- **Safari** (macOS/iOS)

### Speech Recognition Support
The application uses the Web Speech API, which requires:
- HTTPS connection (for production) or localhost (for development)
- Microphone permissions
- Supported browser (Chrome, Edge, Safari)

## Technical Details

### Real-time Communication
- Uses Flask-SocketIO for WebSocket connections
- Automatic reconnection on connection loss
- Message broadcasting to all connected clients

### Speech Recognition
- Continuous speech recognition with interim results
- Confidence scoring for transcription accuracy
- Automatic final transcript detection and transmission

### Data Handling
- In-memory conversation storage (resets on server restart)
- JSON message format with timestamps
- Sender identification and message type tracking

## Deployment Considerations

### Production Setup
1. Use HTTPS for speech recognition to work properly
2. Configure proper CORS settings for cross-origin requests
3. Consider using a production WSGI server like gunicorn
4. Implement persistent storage for conversation history if needed

### Security
- The current implementation stores conversations in memory only
- For production use, consider implementing user authentication
- Add data encryption for sensitive educational content

## Troubleshooting

### Common Issues

**Microphone not working**:
- Ensure microphone permissions are granted
- Check browser compatibility
- Verify HTTPS connection (required for production)

**Speech recognition not starting**:
- Refresh the page and try again
- Check browser console for error messages
- Ensure you're using a supported browser

**Connection issues**:
- Check that the Flask server is running
- Verify network connectivity
- Look for firewall blocking issues

### Error Messages
- "Microphone access denied": Grant microphone permissions in browser
- "Speech recognition not supported": Use Chrome, Edge, or Safari
- "Connection failed": Check server status and network connectivity

## Educational Use Cases

### Classroom Integration
- **Live Lectures**: Teachers can speak normally while students read transcriptions
- **Q&A Sessions**: Students can respond via speech or text
- **Group Discussions**: Multiple participants can contribute to conversations
- **Note Taking**: Automatic transcription creates searchable conversation logs

### Accessibility Benefits
- **Hearing Impaired Students**: Real-time text display of spoken content
- **Language Learners**: Visual representation of spoken language
- **Noisy Environments**: Text backup when audio is unclear
- **Documentation**: Automatic conversation logging for review

## Future Enhancements

Potential improvements for the application:
- User authentication and session management
- Persistent database storage for conversations
- Multiple language support
- Speech synthesis for text-to-speech output
- Mobile app versions
- Integration with learning management systems
- Advanced speech recognition with custom vocabulary
- Real-time translation capabilities

## Support

For technical support or feature requests, please refer to the application documentation or contact your system administrator.

## License

This application is designed for educational use in accessible learning environments.