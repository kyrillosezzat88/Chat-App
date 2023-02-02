import { useState } from 'react'
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer, Auth } from './Components'
import './App.css';
import 'stream-chat-react/dist/css/index.css';

const cookies = new Cookies()

const ApiKey = '4r2fxduv5mhs';
const authToken = cookies.get('token');

const client: any = StreamChat.getInstance(ApiKey);
if (authToken) {
  client.connectUser({
    id: cookies.get('userID'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    phoneNumber: cookies.get('phoneNumber'),
    hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

function App() {
  const [createType, setCreateType] = useState('')
  const [isCreating, setisCreating] = useState<boolean>(false)
  const [isEditing, setEditing] = useState<boolean>(false)
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          setEditing={setEditing}
          setCreateType={setCreateType}
        />
        <ChannelContainer
          isCreating={isCreating}
          setisCreating={setisCreating}
          isEditing={isEditing}
          setEditing={setEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App;
