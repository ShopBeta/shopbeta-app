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


const MessageList = ({ chats, message, user, id, time, roomid }) => {
    return (
        <div>
            {
                chats.map((chats, i) => {
                    return (
                        <Messages
                        key={i} 
                        id={chats._id} 
                        user={chats.postedByUser} 
                        message={chats.message.messageText}
                        roomid={chats.chatRoomId}
                        time={chats.time}
                        />
                    )
                })
            }
        </div>
    );
}


export { ChatRoomList, MessageList };