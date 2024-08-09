import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
        <div className="message">
          <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
          <span>Mr Dog</span>
          <p>Hey, how r u?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="https://wallpapercave.com/wp/wp10076919.png" alt="" />
              Mr. Dog
            </div>
            <span className="close" onClick={() => setChat(false)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessageown">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessageown">
              <p>Lorem, ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
