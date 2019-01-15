import { Message } from "./message";
import { User } from "./user";
export declare class Window {
    chattingTo: User;
    messages: Message[];
    newMessage?: string;
    isCollapsed?: boolean;
    isLoadingHistory: boolean;
    hasFocus: boolean;
    hasMoreMessages: boolean;
    historyPage: number;
}
