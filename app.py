from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit
import json
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'speech_transcription_secret'
socketio = SocketIO(app, cors_allowed_origins="*")

# Store conversation history
conversation_history = []

@app.route('/')
def index():
    """Main page for the chatbot application"""
    return render_template('index.html')

@app.route('/teacher')
def teacher():
    """Teacher interface"""
    return render_template('teacher.html')

@app.route('/student')
def student():
    """Student interface"""
    return render_template('student.html')

@socketio.on('connect')
def handle_connect():
    """Handle client connection"""
    print('Client connected')
    # Send conversation history to newly connected client
    emit('conversation_history', conversation_history)

@socketio.on('disconnect')
def handle_disconnect():
    """Handle client disconnection"""
    print('Client disconnected')

@socketio.on('speech_transcription')
def handle_speech_transcription(data):
    """Handle incoming speech transcription"""
    message = {
        'id': len(conversation_history) + 1,
        'sender': data.get('sender', 'Unknown'),
        'type': data.get('type', 'speech'),
        'content': data.get('content', ''),
        'timestamp': datetime.now().strftime('%H:%M:%S'),
        'confidence': data.get('confidence', 1.0)
    }
    
    conversation_history.append(message)
    
    # Broadcast to all connected clients
    socketio.emit('new_message', message)
    
    print(f"New message from {message['sender']}: {message['content']}")

@socketio.on('text_message')
def handle_text_message(data):
    """Handle typed text messages"""
    message = {
        'id': len(conversation_history) + 1,
        'sender': data.get('sender', 'Unknown'),
        'type': 'text',
        'content': data.get('content', ''),
        'timestamp': datetime.now().strftime('%H:%M:%S'),
        'confidence': 1.0
    }
    
    conversation_history.append(message)
    
    # Broadcast to all connected clients
    socketio.emit('new_message', message)
    
    print(f"New text message from {message['sender']}: {message['content']}")

@socketio.on('clear_conversation')
def handle_clear_conversation():
    """Clear conversation history"""
    global conversation_history
    conversation_history = []
    socketio.emit('conversation_cleared')
    print("Conversation history cleared")

@app.route('/api/conversation', methods=['GET'])
def get_conversation():
    """API endpoint to get conversation history"""
    return jsonify(conversation_history)

@app.route('/api/conversation', methods=['DELETE'])
def clear_conversation():
    """API endpoint to clear conversation history"""
    global conversation_history
    conversation_history = []
    return jsonify({'status': 'success', 'message': 'Conversation cleared'})

if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0', port=5000)