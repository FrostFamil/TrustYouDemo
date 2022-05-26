const CHAT_BASE_URL =
  'wss://ws-probation-day-chat.integration.eu.cloud.trustyou.net/ws?username=';

const initChatSocket = ({username}) => {
  const ws = new WebSocket(`${CHAT_BASE_URL}` + `${username}`);
  return ws;
};

const sendMessage = ({ws, message}) => {
  ws.send(message);
};

export {initChatSocket, sendMessage};
