import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
            height="100vh"
            projectID="a64ac128-c990-42ed-a23d-c62772e5c0b9"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} 
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;