import { Observable } from 'rxjs';
import { Message } from "./message";
import { User } from "./user";
export declare abstract class ChatAdapter {
    abstract listFriends(): Observable<User[]>;
    abstract getMessageHistory(userId: any): Observable<Message[]>;
    abstract sendMessage(message: Message): void;
    onFriendsListChanged(users: User[]): void;
    onMessageReceived(user: User, message: Message): void;
    friendsListChangedHandler: (users: User[]) => void;
    messageReceivedHandler: (user: User, message: Message) => void;
}
