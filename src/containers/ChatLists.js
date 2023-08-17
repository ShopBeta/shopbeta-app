import React from 'react';
import { Chatrooms, Messages } from '../components/Chats';

const ChatRoomList = ({ rooms, roomId, userId, createdAt }) => {
    return (
        <div>
            {
                rooms.map((rooms, i) => {
                    return (
                        <Chatrooms 
                        key={i} 
                        roomId={rooms._id}
                        userId={rooms.userIds[0]}
                        createdAt={rooms.createdAt}
                        />
                    )
                })
            }
        </div>
    );
}


const MessageList = ({ messages, message, user, id, time, roomId }) => {
    return (
        <div>
            {
                messages.map((messages, i) => {
                    return (
                        <Messages
                        key={i} 
                        id={messages._id} 
                        user={messages.postedByUser} 
                        message={messages.message.messageText}
                        roomId={messages.chatRoomId}
                        time={messages.time}
                        />
                    )
                })
            }
        </div>
    );
}


export { ChatRoomList, MessageList };