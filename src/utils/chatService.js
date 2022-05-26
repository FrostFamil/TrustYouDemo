import io from 'socket.io-client';

const CHAT_BASE_URL =
  'https://ws-probation-day-chat.integration.eu.cloud.trustyou.net/';

class ChatService {
  username = null;
  instance = null;
  waitingForMessages = false;

  init({username}) {
    // Setup base variables
    this.username = username;

    // Connect to the socket io server
    this.connect();

    // Initialize the socket io events
    this.initEvents();
  }

  connect = () => {
    console.log(
      `Connecting to chat service... (chat_username: ${this.username})`,
    );

    // Create the new socket io instance
    this.instance = io(`${CHAT_BASE_URL}` + `?username=${this.username}`);
  };

  initEvents = () => {
    this.instance.on('connect', this.onConnect);
    this.instance.on('message', this.onMessage);
  };

  sendMessageToChannel = ({message}) => {
    const newMessage = {
      username: this.username,
      message,
    };

    this.instance.emit('message', JSON.stringify(newMessage));
  };

  getMessagesForChannel = () => {
    this.waitingForMessages = true;
    this.instance.emit('message');
  };

  onMessage = ({type, author, body}) => {
    console.log('onMessage:', type, author, body);
  };
}

export default new ChatService();
