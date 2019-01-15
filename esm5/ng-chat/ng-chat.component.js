/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChildren, ViewChild, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ChatAdapter } from './core/chat-adapter';
import { Message } from "./core/message";
import { MessageType } from "./core/message-type.enum";
import { UserStatus } from "./core/user-status.enum";
import { ScrollDirection } from "./core/scroll-direction.enum";
import { PagedHistoryChatAdapter } from './core/paged-history-chat-adapter';
import { DefaultFileUploadAdapter } from './core/default-file-upload-adapter';
import { Theme } from './core/theme.enum';
import { map } from 'rxjs/operators';
var NgChat = /** @class */ (function () {
    function NgChat(sanitizer, _httpClient) {
        this.sanitizer = sanitizer;
        this._httpClient = _httpClient;
        // Exposes enums for the ng-template
        this.UserStatus = UserStatus;
        this.MessageType = MessageType;
        this.isCollapsed = false;
        this.maximizeWindowOnNewMessage = true;
        this.pollFriendsList = false;
        this.pollingInterval = 5000;
        this.historyEnabled = true;
        this.emojisEnabled = true;
        this.linkfyEnabled = true;
        this.audioEnabled = true;
        this.searchEnabled = true;
        this.audioSource = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.wav';
        this.persistWindowsState = true;
        this.title = "Friends";
        this.messagePlaceholder = "Type a message";
        this.searchPlaceholder = "Search";
        this.browserNotificationsEnabled = true;
        this.browserNotificationIconSource = 'https://raw.githubusercontent.com/rpaschoal/ng-chat/master/src/ng-chat/assets/notification.png';
        this.browserNotificationTitle = "New message from";
        this.historyPageSize = 10;
        this.hideFriendsList = false;
        this.hideFriendsListOnUnsupportedViewport = true;
        this.theme = Theme.Light;
        this.onUserClicked = new EventEmitter();
        this.onUserChatOpened = new EventEmitter();
        this.onUserChatClosed = new EventEmitter();
        this.onMessagesSeen = new EventEmitter();
        this.browserNotificationsBootstrapped = false;
        this.hasPagedHistory = false;
        // Don't want to add this as a setting to simplify usage. Previous placeholder and title settings available to be used, or use full Localization object.
        this.statusDescription = {
            online: 'Online',
            busy: 'Busy',
            away: 'Away',
            offline: 'Offline'
        };
        this.searchInput = '';
        // Defines the size of each opened window to calculate how many windows can be opened on the viewport at the same time.
        this.windowSizeFactor = 320;
        // Total width size of the friends list section
        this.friendsListWidth = 262;
        // Set to true if there is no space to display at least one chat window and 'hideFriendsListOnUnsupportedViewport' is true
        this.unsupportedViewport = false;
        // File upload state
        this.isUploadingFile = false;
        this.windows = [];
        this.isBootstrapped = false;
    }
    Object.defineProperty(NgChat.prototype, "localStorageKey", {
        get: /**
         * @return {?}
         */
        function () {
            return "ng-chat-users-" + this.userId; // Appending the user id so the state is unique per user in a computer.   
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgChat.prototype, "filteredUsers", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.searchInput.length > 0) {
                // Searches in the friend list by the inputted search string
                return this.users.filter(function (x) { return x.displayName.toUpperCase().includes(_this.searchInput.toUpperCase()); });
            }
            return this.users;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgChat.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bootstrapChat();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgChat.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.viewPortTotalArea = event.target.innerWidth;
        this.NormalizeWindows();
    };
    // Checks if there are more opened windows than the view port can display
    // Checks if there are more opened windows than the view port can display
    /**
     * @return {?}
     */
    NgChat.prototype.NormalizeWindows = 
    // Checks if there are more opened windows than the view port can display
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxSupportedOpenedWindows = Math.floor((this.viewPortTotalArea - (!this.hideFriendsList ? this.friendsListWidth : 0)) / this.windowSizeFactor);
        /** @type {?} */
        var difference = this.windows.length - maxSupportedOpenedWindows;
        if (difference >= 0) {
            this.windows.splice(this.windows.length - difference);
        }
        this.updateWindowsState(this.windows);
        // Viewport should have space for at least one chat window.
        this.unsupportedViewport = this.hideFriendsListOnUnsupportedViewport && maxSupportedOpenedWindows < 1;
    };
    // Initializes the chat plugin and the messaging adapter
    // Initializes the chat plugin and the messaging adapter
    /**
     * @return {?}
     */
    NgChat.prototype.bootstrapChat = 
    // Initializes the chat plugin and the messaging adapter
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var initializationException = null;
        if (this.adapter != null && this.userId != null) {
            try {
                this.viewPortTotalArea = window.innerWidth;
                this.initializeTheme();
                this.initializeDefaultText();
                this.initializeBrowserNotifications();
                // Binding event listeners
                this.adapter.messageReceivedHandler = function (user, msg) { return _this.onMessageReceived(user, msg); };
                this.adapter.friendsListChangedHandler = function (users) { return _this.onFriendsListChanged(users); };
                // Loading current users list
                if (this.pollFriendsList) {
                    // Setting a long poll interval to update the friends list
                    this.fetchFriendsList(true);
                    setInterval(function () { return _this.fetchFriendsList(false); }, this.pollingInterval);
                }
                else {
                    // Since polling was disabled, a friends list update mechanism will have to be implemented in the ChatAdapter.
                    this.fetchFriendsList(true);
                }
                this.bufferAudioFile();
                this.hasPagedHistory = this.adapter instanceof PagedHistoryChatAdapter;
                if (this.fileUploadUrl && this.fileUploadUrl !== "") {
                    this.fileUploadAdapter = new DefaultFileUploadAdapter(this.fileUploadUrl, this._httpClient);
                }
                this.isBootstrapped = true;
            }
            catch (ex) {
                initializationException = ex;
            }
        }
        if (!this.isBootstrapped) {
            console.error("ng-chat component couldn't be bootstrapped.");
            if (this.userId == null) {
                console.error("ng-chat can't be initialized without an user id. Please make sure you've provided an userId as a parameter of the ng-chat component.");
            }
            if (this.adapter == null) {
                console.error("ng-chat can't be bootstrapped without a ChatAdapter. Please make sure you've provided a ChatAdapter implementation as a parameter of the ng-chat component.");
            }
            if (initializationException) {
                console.error("An exception has occurred while initializing ng-chat. Details: " + initializationException.message);
                console.error(initializationException);
            }
        }
    };
    // Initializes browser notifications
    // Initializes browser notifications
    /**
     * @return {?}
     */
    NgChat.prototype.initializeBrowserNotifications = 
    // Initializes browser notifications
    /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.browserNotificationsEnabled && ("Notification" in window))) return [3 /*break*/, 2];
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        if (_a.sent()) {
                            this.browserNotificationsBootstrapped = true;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // Initializes default text
    // Initializes default text
    /**
     * @return {?}
     */
    NgChat.prototype.initializeDefaultText = 
    // Initializes default text
    /**
     * @return {?}
     */
    function () {
        if (!this.localization) {
            this.localization = {
                messagePlaceholder: this.messagePlaceholder,
                searchPlaceholder: this.searchPlaceholder,
                title: this.title,
                statusDescription: this.statusDescription,
                browserNotificationTitle: this.browserNotificationTitle,
                loadMessageHistoryPlaceholder: "Load older messages"
            };
        }
    };
    /**
     * @return {?}
     */
    NgChat.prototype.initializeTheme = /**
     * @return {?}
     */
    function () {
        if (this.customTheme) {
            this.theme = Theme.Custom;
        }
        else if (this.theme != Theme.Light && this.theme != Theme.Dark) {
            // TODO: Use es2017 in future with Object.values(Theme).includes(this.theme) to do this check
            throw new Error("Invalid theme configuration for ng-chat. \"" + this.theme + "\" is not a valid theme value.");
        }
    };
    // Sends a request to load the friends list
    // Sends a request to load the friends list
    /**
     * @param {?} isBootstrapping
     * @return {?}
     */
    NgChat.prototype.fetchFriendsList = 
    // Sends a request to load the friends list
    /**
     * @param {?} isBootstrapping
     * @return {?}
     */
    function (isBootstrapping) {
        var _this = this;
        this.adapter.listFriends()
            .pipe(map(function (users) {
            _this.users = users;
        })).subscribe(function () {
            if (isBootstrapping) {
                _this.restoreWindowsState();
            }
        });
    };
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.fetchMessageHistory = /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        var _this = this;
        // Not ideal but will keep this until we decide if we are shipping pagination with the default adapter
        if (this.adapter instanceof PagedHistoryChatAdapter) {
            window.isLoadingHistory = true;
            this.adapter.getMessageHistoryByPage(window.chattingTo.id, this.historyPageSize, ++window.historyPage)
                .pipe(map(function (result) {
                result.forEach(function (message) { return _this.assertMessageType(message); });
                window.messages = result.concat(window.messages);
                window.isLoadingHistory = false;
                /** @type {?} */
                var direction = (window.historyPage == 1) ? ScrollDirection.Bottom : ScrollDirection.Top;
                window.hasMoreMessages = result.length == _this.historyPageSize;
                setTimeout(function () { return _this.onFetchMessageHistoryLoaded(result, window, direction, true); });
            })).subscribe();
        }
        else {
            this.adapter.getMessageHistory(window.chattingTo.id)
                .pipe(map(function (result) {
                result.forEach(function (message) { return _this.assertMessageType(message); });
                window.messages = result.concat(window.messages);
                window.isLoadingHistory = false;
                setTimeout(function () { return _this.onFetchMessageHistoryLoaded(result, window, ScrollDirection.Bottom); });
            })).subscribe();
        }
    };
    /**
     * @param {?} messages
     * @param {?} window
     * @param {?} direction
     * @param {?=} forceMarkMessagesAsSeen
     * @return {?}
     */
    NgChat.prototype.onFetchMessageHistoryLoaded = /**
     * @param {?} messages
     * @param {?} window
     * @param {?} direction
     * @param {?=} forceMarkMessagesAsSeen
     * @return {?}
     */
    function (messages, window, direction, forceMarkMessagesAsSeen) {
        if (forceMarkMessagesAsSeen === void 0) { forceMarkMessagesAsSeen = false; }
        this.scrollChatWindow(window, direction);
        if (window.hasFocus || forceMarkMessagesAsSeen) {
            /** @type {?} */
            var unseenMessages = messages.filter(function (m) { return !m.seenOn; });
            this.markMessagesAsRead(unseenMessages);
            this.onMessagesSeen.emit(unseenMessages);
        }
    };
    // Updates the friends list via the event handler
    // Updates the friends list via the event handler
    /**
     * @param {?} users
     * @return {?}
     */
    NgChat.prototype.onFriendsListChanged = 
    // Updates the friends list via the event handler
    /**
     * @param {?} users
     * @return {?}
     */
    function (users) {
        if (users) {
            this.users = users;
        }
    };
    // Handles received messages by the adapter
    // Handles received messages by the adapter
    /**
     * @param {?} user
     * @param {?} message
     * @return {?}
     */
    NgChat.prototype.onMessageReceived = 
    // Handles received messages by the adapter
    /**
     * @param {?} user
     * @param {?} message
     * @return {?}
     */
    function (user, message) {
        if (user && message) {
            /** @type {?} */
            var chatWindow = this.openChatWindow(user);
            this.assertMessageType(message);
            if (!chatWindow[1] || !this.historyEnabled) {
                chatWindow[0].messages.push(message);
                this.scrollChatWindow(chatWindow[0], ScrollDirection.Bottom);
                if (chatWindow[0].hasFocus) {
                    this.markMessagesAsRead([message]);
                    this.onMessagesSeen.emit([message]);
                }
            }
            this.emitMessageSound(chatWindow[0]);
            // Github issue #58 
            // Do not push browser notifications with message content for privacy purposes if the 'maximizeWindowOnNewMessage' setting is off and this is a new chat window.
            if (this.maximizeWindowOnNewMessage || (!chatWindow[1] && !chatWindow[0].isCollapsed)) {
                // Some messages are not pushed because they are loaded by fetching the history hence why we supply the message here
                this.emitBrowserNotification(chatWindow[0], message);
            }
        }
    };
    // Opens a new chat whindow. Takes care of available viewport
    // Returns => [Window: Window object reference, boolean: Indicates if this window is a new chat window]
    // Opens a new chat whindow. Takes care of available viewport
    // Returns => [Window: Window object reference, boolean: Indicates if this window is a new chat window]
    /**
     * @param {?} user
     * @param {?=} focusOnNewWindow
     * @param {?=} invokedByUserClick
     * @return {?}
     */
    NgChat.prototype.openChatWindow = 
    // Opens a new chat whindow. Takes care of available viewport
    // Returns => [Window: Window object reference, boolean: Indicates if this window is a new chat window]
    /**
     * @param {?} user
     * @param {?=} focusOnNewWindow
     * @param {?=} invokedByUserClick
     * @return {?}
     */
    function (user, focusOnNewWindow, invokedByUserClick) {
        if (focusOnNewWindow === void 0) { focusOnNewWindow = false; }
        if (invokedByUserClick === void 0) { invokedByUserClick = false; }
        // Is this window opened?
        /** @type {?} */
        var openedWindow = this.windows.find(function (x) { return x.chattingTo.id == user.id; });
        if (!openedWindow) {
            if (invokedByUserClick) {
                this.onUserClicked.emit(user);
            }
            // Refer to issue #58 on Github 
            /** @type {?} */
            var collapseWindow = invokedByUserClick ? false : !this.maximizeWindowOnNewMessage;
            /** @type {?} */
            var newChatWindow = {
                chattingTo: user,
                messages: [],
                isLoadingHistory: this.historyEnabled,
                hasFocus: false,
                // This will be triggered when the 'newMessage' input gets the current focus
                isCollapsed: collapseWindow,
                hasMoreMessages: false,
                historyPage: 0
            };
            // Loads the chat history via an RxJs Observable
            if (this.historyEnabled) {
                this.fetchMessageHistory(newChatWindow);
            }
            this.windows.unshift(newChatWindow);
            // Is there enough space left in the view port ?
            if (this.windows.length * this.windowSizeFactor >= this.viewPortTotalArea - (!this.hideFriendsList ? this.friendsListWidth : 0)) {
                this.windows.pop();
            }
            this.updateWindowsState(this.windows);
            if (focusOnNewWindow && !collapseWindow) {
                this.focusOnWindow(newChatWindow);
            }
            this.onUserChatOpened.emit(user);
            return [newChatWindow, true];
        }
        else {
            // Returns the existing chat window     
            return [openedWindow, false];
        }
    };
    // Focus on the input element of the supplied window
    // Focus on the input element of the supplied window
    /**
     * @param {?} window
     * @param {?=} callback
     * @return {?}
     */
    NgChat.prototype.focusOnWindow = 
    // Focus on the input element of the supplied window
    /**
     * @param {?} window
     * @param {?=} callback
     * @return {?}
     */
    function (window, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        /** @type {?} */
        var windowIndex = this.windows.indexOf(window);
        if (windowIndex >= 0) {
            setTimeout(function () {
                if (_this.chatWindowInputs) {
                    /** @type {?} */
                    var messageInputToFocus = _this.chatWindowInputs.toArray()[windowIndex];
                    messageInputToFocus.nativeElement.focus();
                }
                callback();
            });
        }
    };
    // Scrolls a chat window message flow to the bottom
    // Scrolls a chat window message flow to the bottom
    /**
     * @param {?} window
     * @param {?} direction
     * @return {?}
     */
    NgChat.prototype.scrollChatWindow = 
    // Scrolls a chat window message flow to the bottom
    /**
     * @param {?} window
     * @param {?} direction
     * @return {?}
     */
    function (window, direction) {
        var _this = this;
        if (!window.isCollapsed) {
            /** @type {?} */
            var windowIndex_1 = this.windows.indexOf(window);
            setTimeout(function () {
                if (_this.chatMessageClusters) {
                    /** @type {?} */
                    var targetWindow = _this.chatMessageClusters.toArray()[windowIndex_1];
                    if (targetWindow) {
                        /** @type {?} */
                        var element = _this.chatMessageClusters.toArray()[windowIndex_1].nativeElement;
                        /** @type {?} */
                        var position = (direction === ScrollDirection.Top) ? 0 : element.scrollHeight;
                        element.scrollTop = position;
                    }
                }
            });
        }
    };
    // Marks all messages provided as read with the current time.
    // Marks all messages provided as read with the current time.
    /**
     * @param {?} messages
     * @return {?}
     */
    NgChat.prototype.markMessagesAsRead = 
    // Marks all messages provided as read with the current time.
    /**
     * @param {?} messages
     * @return {?}
     */
    function (messages) {
        /** @type {?} */
        var currentDate = new Date();
        messages.forEach(function (msg) {
            msg.seenOn = currentDate;
        });
    };
    // Buffers audio file (For component's bootstrapping)
    // Buffers audio file (For component's bootstrapping)
    /**
     * @return {?}
     */
    NgChat.prototype.bufferAudioFile = 
    // Buffers audio file (For component's bootstrapping)
    /**
     * @return {?}
     */
    function () {
        if (this.audioSource && this.audioSource.length > 0) {
            this.audioFile = new Audio();
            this.audioFile.src = this.audioSource;
            this.audioFile.load();
        }
    };
    // Emits a message notification audio if enabled after every message received
    // Emits a message notification audio if enabled after every message received
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.emitMessageSound = 
    // Emits a message notification audio if enabled after every message received
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        if (this.audioEnabled && !window.hasFocus && this.audioFile) {
            this.audioFile.play();
        }
    };
    // Emits a browser notification
    // Emits a browser notification
    /**
     * @param {?} window
     * @param {?} message
     * @return {?}
     */
    NgChat.prototype.emitBrowserNotification = 
    // Emits a browser notification
    /**
     * @param {?} window
     * @param {?} message
     * @return {?}
     */
    function (window, message) {
        if (this.browserNotificationsBootstrapped && !window.hasFocus && message) {
            /** @type {?} */
            var notification_1 = new Notification(this.localization.browserNotificationTitle + " " + window.chattingTo.displayName, {
                'body': message.message,
                'icon': this.browserNotificationIconSource
            });
            setTimeout(function () {
                notification_1.close();
            }, message.message.length <= 50 ? 5000 : 7000); // More time to read longer messages
        }
    };
    // Saves current windows state into local storage if persistence is enabled
    // Saves current windows state into local storage if persistence is enabled
    /**
     * @param {?} windows
     * @return {?}
     */
    NgChat.prototype.updateWindowsState = 
    // Saves current windows state into local storage if persistence is enabled
    /**
     * @param {?} windows
     * @return {?}
     */
    function (windows) {
        if (this.persistWindowsState) {
            /** @type {?} */
            var usersIds = windows.map(function (w) {
                return w.chattingTo.id;
            });
            localStorage.setItem(this.localStorageKey, JSON.stringify(usersIds));
        }
    };
    /**
     * @return {?}
     */
    NgChat.prototype.restoreWindowsState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            if (this.persistWindowsState) {
                /** @type {?} */
                var stringfiedUserIds = localStorage.getItem(this.localStorageKey);
                if (stringfiedUserIds && stringfiedUserIds.length > 0) {
                    /** @type {?} */
                    var userIds_1 = (/** @type {?} */ (JSON.parse(stringfiedUserIds)));
                    /** @type {?} */
                    var usersToRestore = this.users.filter(function (u) { return userIds_1.indexOf(u.id) >= 0; });
                    usersToRestore.forEach(function (user) {
                        _this.openChatWindow(user);
                    });
                }
            }
        }
        catch (ex) {
            console.error("An error occurred while restoring ng-chat windows state. Details: " + ex);
        }
    };
    // Gets closest open window if any. Most recent opened has priority (Right)
    // Gets closest open window if any. Most recent opened has priority (Right)
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.getClosestWindow = 
    // Gets closest open window if any. Most recent opened has priority (Right)
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        /** @type {?} */
        var index = this.windows.indexOf(window);
        if (index > 0) {
            return this.windows[index - 1];
        }
        else if (index == 0 && this.windows.length > 1) {
            return this.windows[index + 1];
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NgChat.prototype.assertMessageType = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        // Always fallback to "Text" messages to avoid rendenring issues
        if (!message.type) {
            message.type = MessageType.Text;
        }
    };
    // Returns the total unread messages from a chat window. TODO: Could use some Angular pipes in the future 
    // Returns the total unread messages from a chat window. TODO: Could use some Angular pipes in the future 
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.unreadMessagesTotal = 
    // Returns the total unread messages from a chat window. TODO: Could use some Angular pipes in the future 
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        var _this = this;
        if (window) {
            /** @type {?} */
            var totalUnreadMessages = window.messages.filter(function (x) { return x.fromId != _this.userId && !x.seenOn; }).length;
            if (totalUnreadMessages > 0) {
                if (totalUnreadMessages > 99)
                    return "99+";
                else
                    return String(totalUnreadMessages);
            }
        }
        // Empty fallback.
        return "";
    };
    /**
     * @param {?} user
     * @return {?}
     */
    NgChat.prototype.unreadMessagesTotalByUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var openedWindow = this.windows.find(function (x) { return x.chattingTo.id == user.id; });
        if (openedWindow) {
            return this.unreadMessagesTotal(openedWindow);
        }
        // Empty fallback.
        return "";
    };
    /*  Monitors pressed keys on a chat window
        - Dispatches a message when the ENTER key is pressed
        - Tabs between windows on TAB or SHIFT + TAB
        - Closes the current focused window on ESC
    */
    /*  Monitors pressed keys on a chat window
            - Dispatches a message when the ENTER key is pressed
            - Tabs between windows on TAB or SHIFT + TAB
            - Closes the current focused window on ESC
        */
    /**
     * @param {?} event
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.onChatInputTyped = /*  Monitors pressed keys on a chat window
            - Dispatches a message when the ENTER key is pressed
            - Tabs between windows on TAB or SHIFT + TAB
            - Closes the current focused window on ESC
        */
    /**
     * @param {?} event
     * @param {?} window
     * @return {?}
     */
    function (event, window) {
        var _this = this;
        switch (event.keyCode) {
            case 13:
                if (window.newMessage && window.newMessage.trim() != "") {
                    /** @type {?} */
                    var message = new Message();
                    message.fromId = this.userId;
                    message.toId = window.chattingTo.id;
                    message.message = window.newMessage;
                    window.messages.push(message);
                    this.adapter.sendMessage(message);
                    window.newMessage = ""; // Resets the new message input
                    this.scrollChatWindow(window, ScrollDirection.Bottom);
                }
                break;
            case 9:
                event.preventDefault();
                /** @type {?} */
                var currentWindowIndex = this.windows.indexOf(window);
                /** @type {?} */
                var messageInputToFocus = this.chatWindowInputs.toArray()[currentWindowIndex + (event.shiftKey ? 1 : -1)];
                if (!messageInputToFocus) {
                    // Edge windows, go to start or end
                    messageInputToFocus = this.chatWindowInputs.toArray()[currentWindowIndex > 0 ? 0 : this.chatWindowInputs.length - 1];
                }
                messageInputToFocus.nativeElement.focus();
                break;
            case 27:
                /** @type {?} */
                var closestWindow = this.getClosestWindow(window);
                if (closestWindow) {
                    this.focusOnWindow(closestWindow, function () { _this.onCloseChatWindow(window); });
                }
                else {
                    this.onCloseChatWindow(window);
                }
        }
    };
    // Closes a chat window via the close 'X' button
    // Closes a chat window via the close 'X' button
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.onCloseChatWindow = 
    // Closes a chat window via the close 'X' button
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        /** @type {?} */
        var index = this.windows.indexOf(window);
        this.windows.splice(index, 1);
        this.updateWindowsState(this.windows);
        this.onUserChatClosed.emit(window.chattingTo);
    };
    // Toggle friends list visibility
    // Toggle friends list visibility
    /**
     * @param {?} event
     * @return {?}
     */
    NgChat.prototype.onChatTitleClicked = 
    // Toggle friends list visibility
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.isCollapsed = !this.isCollapsed;
    };
    // Toggles a chat window visibility between maximized/minimized
    // Toggles a chat window visibility between maximized/minimized
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.onChatWindowClicked = 
    // Toggles a chat window visibility between maximized/minimized
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        window.isCollapsed = !window.isCollapsed;
        this.scrollChatWindow(window, ScrollDirection.Bottom);
    };
    // Asserts if a user avatar is visible in a chat cluster
    // Asserts if a user avatar is visible in a chat cluster
    /**
     * @param {?} window
     * @param {?} message
     * @param {?} index
     * @return {?}
     */
    NgChat.prototype.isAvatarVisible = 
    // Asserts if a user avatar is visible in a chat cluster
    /**
     * @param {?} window
     * @param {?} message
     * @param {?} index
     * @return {?}
     */
    function (window, message, index) {
        if (message.fromId != this.userId) {
            if (index == 0) {
                return true; // First message, good to show the thumbnail
            }
            else {
                // Check if the previous message belongs to the same user, if it belongs there is no need to show the avatar again to form the message cluster
                if (window.messages[index - 1].fromId != message.fromId) {
                    return true;
                }
            }
        }
        return false;
    };
    // Toggles a window focus on the focus/blur of a 'newMessage' input
    // Toggles a window focus on the focus/blur of a 'newMessage' input
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.toggleWindowFocus = 
    // Toggles a window focus on the focus/blur of a 'newMessage' input
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        var _this = this;
        window.hasFocus = !window.hasFocus;
        if (window.hasFocus) {
            /** @type {?} */
            var unreadMessages = window.messages.filter(function (message) { return message.seenOn == null && message.toId == _this.userId; });
            if (unreadMessages && unreadMessages.length > 0) {
                this.markMessagesAsRead(unreadMessages);
                this.onMessagesSeen.emit(unreadMessages);
            }
        }
    };
    // [Localized] Returns the status descriptive title
    // [Localized] Returns the status descriptive title
    /**
     * @param {?} status
     * @return {?}
     */
    NgChat.prototype.getStatusTitle = 
    // [Localized] Returns the status descriptive title
    /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        /** @type {?} */
        var currentStatus = status.toString().toLowerCase();
        return this.localization.statusDescription[currentStatus];
    };
    /**
     * @param {?} user
     * @return {?}
     */
    NgChat.prototype.triggerOpenChatWindow = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        if (user) {
            this.openChatWindow(user);
        }
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    NgChat.prototype.triggerCloseChatWindow = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var openedWindow = this.windows.find(function (x) { return x.chattingTo.id == userId; });
        if (openedWindow) {
            this.onCloseChatWindow(openedWindow);
        }
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    NgChat.prototype.triggerToggleChatWindowVisibility = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var openedWindow = this.windows.find(function (x) { return x.chattingTo.id == userId; });
        if (openedWindow) {
            this.onChatWindowClicked(openedWindow);
        }
    };
    // Triggers native file upload for file selection from the user
    // Triggers native file upload for file selection from the user
    /**
     * @return {?}
     */
    NgChat.prototype.triggerNativeFileUpload = 
    // Triggers native file upload for file selection from the user
    /**
     * @return {?}
     */
    function () {
        this.nativeFileInput.nativeElement.click();
    };
    // Handles file selection and uploads the selected file using the file upload adapter
    // Handles file selection and uploads the selected file using the file upload adapter
    /**
     * @param {?} window
     * @return {?}
     */
    NgChat.prototype.onFileChosen = 
    // Handles file selection and uploads the selected file using the file upload adapter
    /**
     * @param {?} window
     * @return {?}
     */
    function (window) {
        var _this = this;
        /** @type {?} */
        var file = this.nativeFileInput.nativeElement.files[0];
        this.isUploadingFile = true;
        // TODO: Handle failure
        this.fileUploadAdapter.uploadFile(file, window.chattingTo)
            .subscribe(function (fileMessage) {
            _this.isUploadingFile = false;
            fileMessage.fromId = _this.userId;
            // Push file message to current user window   
            window.messages.push(fileMessage);
            _this.adapter.sendMessage(fileMessage);
            _this.scrollChatWindow(window, ScrollDirection.Bottom);
            // Resets the file upload element
            _this.nativeFileInput.nativeElement.value = '';
        });
    };
    NgChat.decorators = [
        { type: Component, args: [{
                    selector: 'ng-chat',
                    template: "<link *ngIf=\"customTheme\" rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(customTheme)'>\r\n\r\n<div id=\"ng-chat\" *ngIf=\"isBootstrapped && !unsupportedViewport\" [ngClass]=\"theme\">\r\n    <div *ngIf=\"!hideFriendsList\" id=\"ng-chat-people\" [ngClass]=\"{'primary-outline-color': true, 'primary-background': true, 'ng-chat-people-collapsed': isCollapsed}\">\r\n        <a href=\"javascript:void(0);\" class=\"ng-chat-title secondary-background shadowed\" (click)=\"onChatTitleClicked($event)\">\r\n            <span>\r\n                {{localization.title}}\r\n            </span>\r\n        </a>\r\n        <input *ngIf=\"searchEnabled\" id=\"ng-chat-search_friend\" class=\"friends-search-bar\" type=\"search\" [placeholder]=\"localization.searchPlaceholder\" [(ngModel)]=\"searchInput\" />\r\n        <ul id=\"ng-chat-users\" *ngIf=\"!isCollapsed\" [ngClass]=\"{'offset-search': searchEnabled}\">\r\n            <li *ngFor=\"let user of filteredUsers\" (click)=\"openChatWindow(user, true, true)\">\r\n                <div *ngIf=\"!user.avatar\"  class=\"icon-wrapper\">\r\n                    <i class=\"user-icon\"></i>\r\n                </div>\r\n                <img *ngIf=\"user.avatar\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\"  src=\"{{user.avatar}}\"/>\r\n                <strong title=\"{{user.displayName}}\">{{user.displayName}}</strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': user.status == UserStatus.Online, 'busy': user.status == UserStatus.Busy, 'away': user.status == UserStatus.Away, 'offline': user.status == UserStatus.Offline}\" title=\"{{getStatusTitle(user.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotalByUser(user).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotalByUser(user)}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngFor=\"let window of windows; let i = index\" [ngClass]=\"{'ng-chat-window': true, 'primary-outline-color': true, 'ng-chat-window-collapsed': window.isCollapsed}\" [ngStyle]=\"{'right': (!hideFriendsList ? friendsListWidth : 0) + 20 + windowSizeFactor * i + 'px'}\">\r\n        <ng-container *ngIf=\"window.isCollapsed\">\r\n            <div class=\"ng-chat-title secondary-background\" (click)=\"onChatWindowClicked(window)\">\r\n                <strong title=\"{{window.chattingTo.displayName}}\">\r\n                    {{window.chattingTo.displayName}}\r\n                </strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': window.chattingTo.status == UserStatus.Online, 'busy': window.chattingTo.status == UserStatus.Busy, 'away': window.chattingTo.status == UserStatus.Away, 'offline': window.chattingTo.status == UserStatus.Offline}\" title=\"{{getStatusTitle(window.chattingTo.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n                <a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow(window)\">X</a>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!window.isCollapsed\">\r\n            <div class=\"ng-chat-title secondary-background\" (click)=\"onChatWindowClicked(window)\">\r\n                <strong title=\"{{window.chattingTo.displayName}}\">\r\n                    {{window.chattingTo.displayName}}\r\n                </strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': window.chattingTo.status == UserStatus.Online, 'busy': window.chattingTo.status == UserStatus.Busy, 'away': window.chattingTo.status == UserStatus.Away, 'offline': window.chattingTo.status == UserStatus.Offline}\" title=\"{{getStatusTitle(window.chattingTo.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n                <a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow(window)\">X</a>\r\n            </div>\r\n            <div #chatMessages class=\"ng-chat-messages primary-background\">\r\n                <div *ngIf=\"window.isLoadingHistory\" class=\"ng-chat-loading-wrapper\">\r\n                    <div class=\"loader\">Loading history...</div>\r\n                </div>\r\n                <div *ngIf=\"hasPagedHistory && window.hasMoreMessages && !window.isLoadingHistory\" class=\"ng-chat-load-history\">\r\n                \t<a class=\"load-history-action\" (click)=\"fetchMessageHistory(window)\">{{localization.loadMessageHistoryPlaceholder}}</a>\r\n                </div>\r\n\r\n                <div *ngFor=\"let message of window.messages; let i = index\" [ngClass]=\"{'ng-chat-message': true, 'ng-chat-message-received': message.fromId != userId}\">\r\n                    <div *ngIf=\"!window.chattingTo.avatar && isAvatarVisible(window, message, i)\" class=\"icon-wrapper\">\r\n                        <i class=\"user-icon\"></i>\r\n                    </div>\r\n                    <img *ngIf=\"window.chattingTo.avatar && isAvatarVisible(window, message, i)\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\" [src]=\"window.chattingTo.avatar\" />\r\n                    <ng-container [ngSwitch]=\"message.type\">\r\n                        <span *ngSwitchCase=\"MessageType.Text\" [innerHtml]=\"message.message | emojify:emojisEnabled | linkfy:linkfyEnabled\" [ngClass]=\"{'sent-chat-message-container': message.fromId == userId, 'received-chat-message-container': message.fromId != userId}\"></span>\r\n                        <div *ngSwitchCase=\"MessageType.File\" [ngClass]=\"{'file-message-container': true, 'received': message.fromId != userId}\">\r\n                            <div class=\"file-message-icon-container\">\r\n                                <i class=\"paperclip-icon\"></i>\r\n                            </div>\r\n                            <a class=\"file-details\" [attr.href]=\"message.downloadUrl\" target=\"_blank\" rel=\"noopener noreferrer\" (click)=\"this.markMessagesAsRead([message])\" download>\r\n                                <span class=\"file-message-title\" [attr.title]=\"message.message\">{{message.message}}</span>\r\n                                <span *ngIf=\"message.fileSizeInBytes\" class=\"file-message-size\">{{message.fileSizeInBytes}} Bytes</span>\r\n                            </a>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ng-chat-footer primary-outline-color primary-background\">\r\n                <input #chatWindowInput \r\n                    type=\"text\" \r\n                    [ngModel]=\"window.newMessage | emojify:emojisEnabled\" \r\n                    (ngModelChange)=\"window.newMessage=$event\" \r\n                    [placeholder]=\"localization.messagePlaceholder\" \r\n                    [ngClass]=\"{'chat-window-input': true, 'has-side-action': fileUploadAdapter}\"\r\n                    (keydown)=\"onChatInputTyped($event, window)\" \r\n                    (blur)=\"toggleWindowFocus(window)\" \r\n                    (focus)=\"toggleWindowFocus(window)\"/>\r\n\r\n                <!-- File Upload -->\r\n                <ng-container *ngIf=\"fileUploadAdapter\">\r\n                    <a *ngIf=\"!isUploadingFile\" class=\"btn-add-file\" (click)=\"triggerNativeFileUpload()\">\r\n                        <i class=\"upload-icon\"></i>\r\n                    </a>\r\n                    <input type=\"file\" #nativeFileInput style=\"display: none;\" (change)=\"onFileChosen(window)\" />\r\n                    <div *ngIf=\"isUploadingFile\" class=\"loader\"></div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n",
                    styles: [".user-icon{box-sizing:border-box;background-color:#fff;border:2px solid;width:32px;height:20px;border-radius:64px 64px 0 0/64px;margin-top:14px;margin-left:-1px;display:inline-block;vertical-align:middle;position:relative;font-style:normal;color:#ddd;text-align:left;text-indent:-9999px}.user-icon:before{border:2px solid;background-color:#fff;width:12px;height:12px;top:-19px;border-radius:50%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.user-icon:after,.user-icon:before{content:'';pointer-events:none}.upload-icon{position:absolute;margin-left:3px;margin-top:12px;width:13px;height:4px;border:1px solid currentColor;border-top:none;border-radius:1px}.upload-icon:before{content:'';position:absolute;top:-8px;left:6px;width:1px;height:9px;background-color:currentColor}.upload-icon:after{content:'';position:absolute;top:-8px;left:4px;width:4px;height:4px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.paperclip-icon{position:absolute;margin-left:9px;margin-top:2px;width:6px;height:12px;border-radius:4px 4px 0 0;border-left:1px solid currentColor;border-right:1px solid currentColor;border-top:1px solid currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.paperclip-icon:before{content:'';position:absolute;top:11px;left:-1px;width:4px;height:6px;border-radius:0 0 3px 3px;border-left:1px solid currentColor;border-right:1px solid currentColor;border-bottom:1px solid currentColor}.paperclip-icon:after{content:'';position:absolute;left:1px;top:1px;width:2px;height:10px;border-radius:4px 4px 0 0;border-left:1px solid currentColor;border-right:1px solid currentColor;border-top:1px solid currentColor}", ".loader,.loader:after,.loader:before{background:#e3e3e3;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader{color:#e3e3e3;text-indent:-9999em;margin:4px auto 0;position:relative;font-size:4px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{position:absolute;top:0;content:''}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", "#ng-chat{position:fixed;z-index:999;right:0;bottom:0;box-sizing:initial;font-size:11pt;text-align:left}.ng-chat-loading-wrapper{height:30px;text-align:center;font-size:.9em}#ng-chat-people{position:relative;width:240px;height:360px;border-width:1px;border-style:solid;margin-right:20px;box-shadow:0 4px 8px rgba(0,0,0,.25);border-bottom:0}#ng-chat-people.ng-chat-people-collapsed{height:30px}.ng-chat-close{text-decoration:none;float:right}.ng-chat-title,.ng-chat-title:hover{position:relative;z-index:2;height:30px;line-height:30px;font-size:.9em;padding:0 10px;display:block;text-decoration:none;color:inherit;font-weight:400;cursor:pointer}.ng-chat-title.shadowed{box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-title>strong{font-weight:600;display:block;overflow:hidden;height:30px;text-overflow:ellipsis;white-space:nowrap;max-width:85%;float:left}.ng-chat-title>.ng-chat-user-status{float:left;margin-left:5px}#ng-chat-search_friend{display:block;padding:7px 10px;margin:10px auto 0;width:calc(100% - 20px);font-size:.9em;-webkit-appearance:searchfield}#ng-chat-users{padding:0 10px;list-style:none;margin:0;overflow:auto;position:absolute;top:42px;bottom:0;width:100%;box-sizing:border-box}#ng-chat-users.offset-search{top:84px}#ng-chat-users li{clear:both;margin-bottom:10px;overflow:hidden;cursor:pointer;max-height:30px}#ng-chat-users li>.icon-wrapper,#ng-chat-users li>img{float:left;margin-right:5px;border-radius:25px}#ng-chat-users li>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}#ng-chat-users li>.icon-wrapper>i{color:#fff;-webkit-transform:scale(.7);transform:scale(.7)}#ng-chat-users li>strong{float:left;line-height:30px;font-size:.8em;max-width:57%;max-height:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#ng-chat-users li>.ng-chat-user-status{float:right}.ng-chat-user-status{border-radius:25px;width:8px;height:8px;margin-top:10px}.ng-chat-user-status.online{background-color:#92a400}.ng-chat-user-status.busy{background-color:#f91c1e}.ng-chat-user-status.away{background-color:#f7d21b}.ng-chat-user-status.offline{background-color:#bababa}.ng-chat-unread-messages-count{margin-left:5px;padding:0 5px;border-radius:25px;font-size:.9em;line-height:30px}.ng-chat-window{right:260px;height:360px;z-index:999;bottom:0;position:fixed;width:300px;border-width:1px;border-style:solid;border-bottom:0;box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-window-collapsed{height:30px!important}.ng-chat-window .ng-chat-footer{box-sizing:border-box;padding:0;display:block;height:calc(10%);width:100%;border:none;border-top:1px solid transparent;border-color:inherit}.ng-chat-window .ng-chat-footer>input{font-size:.8em;box-sizing:border-box;padding:0 5px;display:block;height:100%;width:100%;border:none}.ng-chat-window .ng-chat-footer>input.has-side-action{width:calc(100% - 30px)}.ng-chat-window .ng-chat-footer .btn-add-file{position:absolute;right:5px;bottom:7px;height:20px;width:20px;cursor:pointer}.ng-chat-window .ng-chat-footer .loader{position:absolute;right:14px;bottom:8px}.ng-chat-window .ng-chat-load-history{height:30px;text-align:center;font-size:.8em}.ng-chat-window .ng-chat-load-history>a{border-radius:15px;cursor:pointer;padding:5px 10px}.ng-chat-window .ng-chat-messages{padding:10px;height:calc(90% - 30px);box-sizing:border-box;position:relative;overflow:auto}.ng-chat-window .ng-chat-messages .ng-chat-message{clear:both}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper,.ng-chat-window .ng-chat-messages .ng-chat-message>img{position:absolute;left:10px;border-radius:25px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper>i{color:#fff;-webkit-transform:scale(.7);transform:scale(.7)}.ng-chat-window .ng-chat-messages .ng-chat-message>span{float:right;width:182px;padding:10px;border-radius:5px;margin-top:0;margin-bottom:5px;font-size:.9em;word-wrap:break-word}.ng-chat-window .ng-chat-messages .ng-chat-message.ng-chat-message-received>span{float:left;margin-left:40px;padding-top:7px;padding-bottom:7px;border-style:solid;border-width:3px;margin-top:0;margin-bottom:5px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container{float:right;width:196px;border-style:solid;border-width:3px;border-radius:5px;overflow:hidden;margin-bottom:5px;display:block;text-decoration:none;font-size:.9em}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container.received{float:left;margin-left:40px;width:202px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container{width:20px;height:35px;padding:10px;float:left}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container i{margin-top:8px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details{float:left;padding:10px;width:calc(100% - 60px);color:currentColor;text-decoration:none}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details:hover{text-decoration:underline}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details span{display:block;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-title{font-weight:700}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-size{font-size:.8em;margin-top:5px}", ".light-theme,.light-theme .primary-text{color:#5c5c5c;font-family:Arial,Helvetica,sans-serif}.light-theme .primary-background{background-color:#fff}.light-theme .secondary-background{background-color:#fafafa}.light-theme .primary-outline-color{border-color:#a3a3a3}.light-theme .friends-search-bar{background-color:#fff}.light-theme .load-history-action,.light-theme .unread-messages-counter-container{background-color:#e3e3e3}.light-theme .chat-window-input{background-color:#fff}.light-theme .sent-chat-message-container{background-color:#e3e3e3}.light-theme .received-chat-message-container{background-color:#fff;border-color:#e3e3e3}.light-theme .file-message-container{border-color:#e3e3e3}.light-theme .file-message-icon-container{background-color:#e3e3e3}", ".dark-theme,.dark-theme .primary-text{color:#fff;font-family:Arial,Helvetica,sans-serif}.dark-theme .primary-background{background-color:#565656}.dark-theme .secondary-background{background-color:#444}.dark-theme .primary-outline-color{border-color:#353535}.dark-theme .friends-search-bar{background-color:#444;border:1px solid #444;color:#fff}.dark-theme .unread-messages-counter-container{background-color:#fff;color:#444}.dark-theme .load-history-action{background-color:#444}.dark-theme .chat-window-input{background-color:#444;color:#fff}.dark-theme .sent-chat-message-container{background-color:#444}.dark-theme .received-chat-message-container{background-color:#565656;border-color:#444}.dark-theme .file-message-container{border-color:#444}.dark-theme .file-message-icon-container,.dark-theme .ng-chat-footer{background-color:#444}"]
                }] }
    ];
    /** @nocollapse */
    NgChat.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: HttpClient }
    ]; };
    NgChat.propDecorators = {
        adapter: [{ type: Input }],
        userId: [{ type: Input }],
        isCollapsed: [{ type: Input }],
        maximizeWindowOnNewMessage: [{ type: Input }],
        pollFriendsList: [{ type: Input }],
        pollingInterval: [{ type: Input }],
        historyEnabled: [{ type: Input }],
        emojisEnabled: [{ type: Input }],
        linkfyEnabled: [{ type: Input }],
        audioEnabled: [{ type: Input }],
        searchEnabled: [{ type: Input }],
        audioSource: [{ type: Input }],
        persistWindowsState: [{ type: Input }],
        title: [{ type: Input }],
        messagePlaceholder: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        browserNotificationsEnabled: [{ type: Input }],
        browserNotificationIconSource: [{ type: Input }],
        browserNotificationTitle: [{ type: Input }],
        historyPageSize: [{ type: Input }],
        localization: [{ type: Input }],
        hideFriendsList: [{ type: Input }],
        hideFriendsListOnUnsupportedViewport: [{ type: Input }],
        fileUploadUrl: [{ type: Input }],
        theme: [{ type: Input }],
        customTheme: [{ type: Input }],
        onUserClicked: [{ type: Output }],
        onUserChatOpened: [{ type: Output }],
        onUserChatClosed: [{ type: Output }],
        onMessagesSeen: [{ type: Output }],
        chatMessageClusters: [{ type: ViewChildren, args: ['chatMessages',] }],
        chatWindowInputs: [{ type: ViewChildren, args: ['chatWindowInput',] }],
        nativeFileInput: [{ type: ViewChild, args: ['nativeFileInput',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return NgChat;
}());
export { NgChat };
if (false) {
    /** @type {?} */
    NgChat.prototype.UserStatus;
    /** @type {?} */
    NgChat.prototype.MessageType;
    /** @type {?} */
    NgChat.prototype.adapter;
    /** @type {?} */
    NgChat.prototype.userId;
    /** @type {?} */
    NgChat.prototype.isCollapsed;
    /** @type {?} */
    NgChat.prototype.maximizeWindowOnNewMessage;
    /** @type {?} */
    NgChat.prototype.pollFriendsList;
    /** @type {?} */
    NgChat.prototype.pollingInterval;
    /** @type {?} */
    NgChat.prototype.historyEnabled;
    /** @type {?} */
    NgChat.prototype.emojisEnabled;
    /** @type {?} */
    NgChat.prototype.linkfyEnabled;
    /** @type {?} */
    NgChat.prototype.audioEnabled;
    /** @type {?} */
    NgChat.prototype.searchEnabled;
    /** @type {?} */
    NgChat.prototype.audioSource;
    /** @type {?} */
    NgChat.prototype.persistWindowsState;
    /** @type {?} */
    NgChat.prototype.title;
    /** @type {?} */
    NgChat.prototype.messagePlaceholder;
    /** @type {?} */
    NgChat.prototype.searchPlaceholder;
    /** @type {?} */
    NgChat.prototype.browserNotificationsEnabled;
    /** @type {?} */
    NgChat.prototype.browserNotificationIconSource;
    /** @type {?} */
    NgChat.prototype.browserNotificationTitle;
    /** @type {?} */
    NgChat.prototype.historyPageSize;
    /** @type {?} */
    NgChat.prototype.localization;
    /** @type {?} */
    NgChat.prototype.hideFriendsList;
    /** @type {?} */
    NgChat.prototype.hideFriendsListOnUnsupportedViewport;
    /** @type {?} */
    NgChat.prototype.fileUploadUrl;
    /** @type {?} */
    NgChat.prototype.theme;
    /** @type {?} */
    NgChat.prototype.customTheme;
    /** @type {?} */
    NgChat.prototype.onUserClicked;
    /** @type {?} */
    NgChat.prototype.onUserChatOpened;
    /** @type {?} */
    NgChat.prototype.onUserChatClosed;
    /** @type {?} */
    NgChat.prototype.onMessagesSeen;
    /** @type {?} */
    NgChat.prototype.browserNotificationsBootstrapped;
    /** @type {?} */
    NgChat.prototype.hasPagedHistory;
    /** @type {?} */
    NgChat.prototype.statusDescription;
    /** @type {?} */
    NgChat.prototype.audioFile;
    /** @type {?} */
    NgChat.prototype.searchInput;
    /** @type {?} */
    NgChat.prototype.users;
    /** @type {?} */
    NgChat.prototype.windowSizeFactor;
    /** @type {?} */
    NgChat.prototype.friendsListWidth;
    /** @type {?} */
    NgChat.prototype.viewPortTotalArea;
    /** @type {?} */
    NgChat.prototype.unsupportedViewport;
    /** @type {?} */
    NgChat.prototype.isUploadingFile;
    /** @type {?} */
    NgChat.prototype.fileUploadAdapter;
    /** @type {?} */
    NgChat.prototype.windows;
    /** @type {?} */
    NgChat.prototype.isBootstrapped;
    /** @type {?} */
    NgChat.prototype.chatMessageClusters;
    /** @type {?} */
    NgChat.prototype.chatWindowInputs;
    /** @type {?} */
    NgChat.prototype.nativeFileInput;
    /** @type {?} */
    NgChat.prototype.sanitizer;
    /** @type {?} */
    NgChat.prototype._httpClient;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGF0LyIsInNvdXJjZXMiOlsibmctY2hhdC9uZy1jaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xJLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDO0lBYUksZ0JBQW1CLFNBQXVCLEVBQVUsV0FBdUI7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZOztRQUdwRSxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBUzFCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FB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ZXdDaGlsZHJlbiwgVmlld0NoaWxkLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgQ2hhdEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvY2hhdC1hZGFwdGVyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL2NvcmUvdXNlclwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vY29yZS9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IEZpbGVNZXNzYWdlIH0gZnJvbSBcIi4vY29yZS9maWxlLW1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9jb3JlL21lc3NhZ2UtdHlwZS5lbnVtXCI7XHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvcmUvd2luZG93XCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9jb3JlL3VzZXItc3RhdHVzLmVudW1cIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9zY3JvbGwtZGlyZWN0aW9uLmVudW1cIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uLCBTdGF0dXNEZXNjcmlwdGlvbiB9IGZyb20gJy4vY29yZS9sb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQgeyBJQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuL2NvcmUvY2hhdC1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvcGFnZWQtaGlzdG9yeS1jaGF0LWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBJRmlsZVVwbG9hZEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvZmlsZS11cGxvYWQtYWRhcHRlcic7XHJcbmltcG9ydCB7IERlZmF1bHRGaWxlVXBsb2FkQWRhcHRlciB9IGZyb20gJy4vY29yZS9kZWZhdWx0LWZpbGUtdXBsb2FkLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vY29yZS90aGVtZS5lbnVtJztcclxuXHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWNoYXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICduZy1jaGF0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICdhc3NldHMvaWNvbnMuY3NzJyxcclxuICAgICAgICAnYXNzZXRzL2xvYWRpbmctc3Bpbm5lci5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvbmctY2hhdC5jb21wb25lbnQuZGVmYXVsdC5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvdGhlbWVzL25nLWNoYXQudGhlbWUuZGVmYXVsdC5zY3NzJyxcclxuICAgICAgICAnYXNzZXRzL3RoZW1lcy9uZy1jaGF0LnRoZW1lLmRhcmsuc2NzcydcclxuICAgIF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmdDaGF0IGltcGxlbWVudHMgT25Jbml0LCBJQ2hhdENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICAvLyBFeHBvc2VzIGVudW1zIGZvciB0aGUgbmctdGVtcGxhdGVcclxuICAgIHB1YmxpYyBVc2VyU3RhdHVzID0gVXNlclN0YXR1cztcclxuICAgIHB1YmxpYyBNZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYWRhcHRlcjogQ2hhdEFkYXB0ZXI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB1c2VySWQ6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBtYXhpbWl6ZVdpbmRvd09uTmV3TWVzc2FnZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgcG9sbEZyaWVuZHNMaXN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBwb2xsaW5nSW50ZXJ2YWw6IG51bWJlciA9IDUwMDA7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgaGlzdG9yeUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpICAgIFxyXG4gICAgcHVibGljIGVtb2ppc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpICAgIFxyXG4gICAgcHVibGljIGxpbmtmeUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYXVkaW9FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIC8vIFRPRE86IFRoaXMgbWlnaHQgbmVlZCBhIGJldHRlciBjb250ZW50IHN0cmF0ZWd5XHJcbiAgICBwdWJsaWMgYXVkaW9Tb3VyY2U6IHN0cmluZyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcnBhc2Nob2FsL25nLWNoYXQvbWFzdGVyL3NyYy9uZy1jaGF0L2Fzc2V0cy9ub3RpZmljYXRpb24ud2F2JztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHBlcnNpc3RXaW5kb3dzU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiRnJpZW5kc1wiO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbWVzc2FnZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlR5cGUgYSBtZXNzYWdlXCI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJTZWFyY2hcIjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGJyb3dzZXJOb3RpZmljYXRpb25zRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgLy8gVE9ETzogVGhpcyBtaWdodCBuZWVkIGEgYmV0dGVyIGNvbnRlbnQgc3RyYXRlZ3lcclxuICAgIHB1YmxpYyBicm93c2VyTm90aWZpY2F0aW9uSWNvblNvdXJjZTogc3RyaW5nID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ycGFzY2hvYWwvbmctY2hhdC9tYXN0ZXIvc3JjL25nLWNoYXQvYXNzZXRzL25vdGlmaWNhdGlvbi5wbmcnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYnJvd3Nlck5vdGlmaWNhdGlvblRpdGxlOiBzdHJpbmcgPSBcIk5ldyBtZXNzYWdlIGZyb21cIjtcclxuICAgIFxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBoaXN0b3J5UGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb247XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBoaWRlRnJpZW5kc0xpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGhpZGVGcmllbmRzTGlzdE9uVW5zdXBwb3J0ZWRWaWV3cG9ydDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBmaWxlVXBsb2FkVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0aGVtZTogVGhlbWUgPSBUaGVtZS5MaWdodDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGN1c3RvbVRoZW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgb25Vc2VyQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIG9uVXNlckNoYXRPcGVuZWQ6IEV2ZW50RW1pdHRlcjxVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBvblVzZXJDaGF0Q2xvc2VkOiBFdmVudEVtaXR0ZXI8VXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXI+KCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIG9uTWVzc2FnZXNTZWVuOiBFdmVudEVtaXR0ZXI8TWVzc2FnZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZVtdPigpO1xyXG5cclxuICAgIHByaXZhdGUgYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaGFzUGFnZWRIaXN0b3J5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRG9uJ3Qgd2FudCB0byBhZGQgdGhpcyBhcyBhIHNldHRpbmcgdG8gc2ltcGxpZnkgdXNhZ2UuIFByZXZpb3VzIHBsYWNlaG9sZGVyIGFuZCB0aXRsZSBzZXR0aW5ncyBhdmFpbGFibGUgdG8gYmUgdXNlZCwgb3IgdXNlIGZ1bGwgTG9jYWxpemF0aW9uIG9iamVjdC5cclxuICAgIHByaXZhdGUgc3RhdHVzRGVzY3JpcHRpb246IFN0YXR1c0Rlc2NyaXB0aW9uID0ge1xyXG4gICAgICAgIG9ubGluZTogJ09ubGluZScsXHJcbiAgICAgICAgYnVzeTogJ0J1c3knLFxyXG4gICAgICAgIGF3YXk6ICdBd2F5JyxcclxuICAgICAgICBvZmZsaW5lOiAnT2ZmbGluZSdcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBhdWRpb0ZpbGU6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHNlYXJjaElucHV0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgdXNlcnM6IFVzZXJbXTtcclxuXHJcbiAgICBwcml2YXRlIGdldCBsb2NhbFN0b3JhZ2VLZXkoKTogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgbmctY2hhdC11c2Vycy0ke3RoaXMudXNlcklkfWA7IC8vIEFwcGVuZGluZyB0aGUgdXNlciBpZCBzbyB0aGUgc3RhdGUgaXMgdW5pcXVlIHBlciB1c2VyIGluIGEgY29tcHV0ZXIuICAgXHJcbiAgICB9OyBcclxuXHJcbiAgICBnZXQgZmlsdGVyZWRVc2VycygpOiBVc2VyW11cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgLy8gU2VhcmNoZXMgaW4gdGhlIGZyaWVuZCBsaXN0IGJ5IHRoZSBpbnB1dHRlZCBzZWFyY2ggc3RyaW5nXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJzLmZpbHRlcih4ID0+IHguZGlzcGxheU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaElucHV0LnRvVXBwZXJDYXNlKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZXMgdGhlIHNpemUgb2YgZWFjaCBvcGVuZWQgd2luZG93IHRvIGNhbGN1bGF0ZSBob3cgbWFueSB3aW5kb3dzIGNhbiBiZSBvcGVuZWQgb24gdGhlIHZpZXdwb3J0IGF0IHRoZSBzYW1lIHRpbWUuXHJcbiAgICBwdWJsaWMgd2luZG93U2l6ZUZhY3RvcjogbnVtYmVyID0gMzIwO1xyXG5cclxuICAgIC8vIFRvdGFsIHdpZHRoIHNpemUgb2YgdGhlIGZyaWVuZHMgbGlzdCBzZWN0aW9uXHJcbiAgICBwdWJsaWMgZnJpZW5kc0xpc3RXaWR0aDogbnVtYmVyID0gMjYyO1xyXG5cclxuICAgIC8vIEF2YWlsYWJsZSBhcmVhIHRvIHJlbmRlciB0aGUgcGx1Z2luXHJcbiAgICBwcml2YXRlIHZpZXdQb3J0VG90YWxBcmVhOiBudW1iZXI7XHJcbiAgICBcclxuICAgIC8vIFNldCB0byB0cnVlIGlmIHRoZXJlIGlzIG5vIHNwYWNlIHRvIGRpc3BsYXkgYXQgbGVhc3Qgb25lIGNoYXQgd2luZG93IGFuZCAnaGlkZUZyaWVuZHNMaXN0T25VbnN1cHBvcnRlZFZpZXdwb3J0JyBpcyB0cnVlXHJcbiAgICBwdWJsaWMgdW5zdXBwb3J0ZWRWaWV3cG9ydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEZpbGUgdXBsb2FkIHN0YXRlXHJcbiAgICBwdWJsaWMgaXNVcGxvYWRpbmdGaWxlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmlsZVVwbG9hZEFkYXB0ZXI6IElGaWxlVXBsb2FkQWRhcHRlcjtcclxuXHJcbiAgICB3aW5kb3dzOiBXaW5kb3dbXSA9IFtdO1xyXG5cclxuICAgIGlzQm9vdHN0cmFwcGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignY2hhdE1lc3NhZ2VzJykgY2hhdE1lc3NhZ2VDbHVzdGVyczogYW55O1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2NoYXRXaW5kb3dJbnB1dCcpIGNoYXRXaW5kb3dJbnB1dHM6IGFueTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCduYXRpdmVGaWxlSW5wdXQnKSBuYXRpdmVGaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMuYm9vdHN0cmFwQ2hhdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgb25SZXNpemUoZXZlbnQ6IGFueSl7XHJcbiAgICAgICB0aGlzLnZpZXdQb3J0VG90YWxBcmVhID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgdGhpcy5Ob3JtYWxpemVXaW5kb3dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tzIGlmIHRoZXJlIGFyZSBtb3JlIG9wZW5lZCB3aW5kb3dzIHRoYW4gdGhlIHZpZXcgcG9ydCBjYW4gZGlzcGxheVxyXG4gICAgcHJpdmF0ZSBOb3JtYWxpemVXaW5kb3dzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWF4U3VwcG9ydGVkT3BlbmVkV2luZG93cyA9IE1hdGguZmxvb3IoKHRoaXMudmlld1BvcnRUb3RhbEFyZWEgLSAoIXRoaXMuaGlkZUZyaWVuZHNMaXN0ID8gdGhpcy5mcmllbmRzTGlzdFdpZHRoIDogMCkpIC8gdGhpcy53aW5kb3dTaXplRmFjdG9yKTtcclxuICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IHRoaXMud2luZG93cy5sZW5ndGggLSBtYXhTdXBwb3J0ZWRPcGVuZWRXaW5kb3dzO1xyXG5cclxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzLnNwbGljZSh0aGlzLndpbmRvd3MubGVuZ3RoIC0gZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd3NTdGF0ZSh0aGlzLndpbmRvd3MpO1xyXG5cclxuICAgICAgICAvLyBWaWV3cG9ydCBzaG91bGQgaGF2ZSBzcGFjZSBmb3IgYXQgbGVhc3Qgb25lIGNoYXQgd2luZG93LlxyXG4gICAgICAgIHRoaXMudW5zdXBwb3J0ZWRWaWV3cG9ydCA9IHRoaXMuaGlkZUZyaWVuZHNMaXN0T25VbnN1cHBvcnRlZFZpZXdwb3J0ICYmIG1heFN1cHBvcnRlZE9wZW5lZFdpbmRvd3MgPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemVzIHRoZSBjaGF0IHBsdWdpbiBhbmQgdGhlIG1lc3NhZ2luZyBhZGFwdGVyXHJcbiAgICBwcml2YXRlIGJvb3RzdHJhcENoYXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbml0aWFsaXphdGlvbkV4Y2VwdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIgIT0gbnVsbCAmJiB0aGlzLnVzZXJJZCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnRUb3RhbEFyZWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUaGVtZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplRGVmYXVsdFRleHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJyb3dzZXJOb3RpZmljYXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmluZGluZyBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5tZXNzYWdlUmVjZWl2ZWRIYW5kbGVyID0gKHVzZXIsIG1zZykgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZCh1c2VyLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZyaWVuZHNMaXN0Q2hhbmdlZEhhbmRsZXIgPSAodXNlcnMpID0+IHRoaXMub25GcmllbmRzTGlzdENoYW5nZWQodXNlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvYWRpbmcgY3VycmVudCB1c2VycyBsaXN0XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb2xsRnJpZW5kc0xpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgYSBsb25nIHBvbGwgaW50ZXJ2YWwgdG8gdXBkYXRlIHRoZSBmcmllbmRzIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRnJpZW5kc0xpc3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEZyaWVuZHNMaXN0KGZhbHNlKSwgdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHBvbGxpbmcgd2FzIGRpc2FibGVkLCBhIGZyaWVuZHMgbGlzdCB1cGRhdGUgbWVjaGFuaXNtIHdpbGwgaGF2ZSB0byBiZSBpbXBsZW1lbnRlZCBpbiB0aGUgQ2hhdEFkYXB0ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEZyaWVuZHNMaXN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckF1ZGlvRmlsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUGFnZWRIaXN0b3J5ID0gdGhpcy5hZGFwdGVyIGluc3RhbmNlb2YgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVVcGxvYWRVcmwgJiYgdGhpcy5maWxlVXBsb2FkVXJsICE9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZEFkYXB0ZXIgPSBuZXcgRGVmYXVsdEZpbGVVcGxvYWRBZGFwdGVyKHRoaXMuZmlsZVVwbG9hZFVybCwgdGhpcy5faHR0cENsaWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Jvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemF0aW9uRXhjZXB0aW9uID0gZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0Jvb3RzdHJhcHBlZCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJuZy1jaGF0IGNvbXBvbmVudCBjb3VsZG4ndCBiZSBib290c3RyYXBwZWQuXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5nLWNoYXQgY2FuJ3QgYmUgaW5pdGlhbGl6ZWQgd2l0aG91dCBhbiB1c2VyIGlkLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSd2ZSBwcm92aWRlZCBhbiB1c2VySWQgYXMgYSBwYXJhbWV0ZXIgb2YgdGhlIG5nLWNoYXQgY29tcG9uZW50LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5nLWNoYXQgY2FuJ3QgYmUgYm9vdHN0cmFwcGVkIHdpdGhvdXQgYSBDaGF0QWRhcHRlci4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UndmUgcHJvdmlkZWQgYSBDaGF0QWRhcHRlciBpbXBsZW1lbnRhdGlvbiBhcyBhIHBhcmFtZXRlciBvZiB0aGUgbmctY2hhdCBjb21wb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsaXphdGlvbkV4Y2VwdGlvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQW4gZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCB3aGlsZSBpbml0aWFsaXppbmcgbmctY2hhdC4gRGV0YWlsczogJHtpbml0aWFsaXphdGlvbkV4Y2VwdGlvbi5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihpbml0aWFsaXphdGlvbkV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZXMgYnJvd3NlciBub3RpZmljYXRpb25zXHJcbiAgICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVCcm93c2VyTm90aWZpY2F0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNFbmFibGVkICYmIChcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemVzIGRlZmF1bHQgdGV4dFxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRGVmYXVsdFRleHQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxpemF0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlUGxhY2Vob2xkZXI6IHRoaXMubWVzc2FnZVBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IHRoaXMuc2VhcmNoUGxhY2Vob2xkZXIsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNEZXNjcmlwdGlvbjogdGhpcy5zdGF0dXNEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGJyb3dzZXJOb3RpZmljYXRpb25UaXRsZTogdGhpcy5icm93c2VyTm90aWZpY2F0aW9uVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTWVzc2FnZUhpc3RvcnlQbGFjZWhvbGRlcjogXCJMb2FkIG9sZGVyIG1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplVGhlbWUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVRoZW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lLkN1c3RvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50aGVtZSAhPSBUaGVtZS5MaWdodCAmJiB0aGlzLnRoZW1lICE9IFRoZW1lLkRhcmspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVc2UgZXMyMDE3IGluIGZ1dHVyZSB3aXRoIE9iamVjdC52YWx1ZXMoVGhlbWUpLmluY2x1ZGVzKHRoaXMudGhlbWUpIHRvIGRvIHRoaXMgY2hlY2tcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRoZW1lIGNvbmZpZ3VyYXRpb24gZm9yIG5nLWNoYXQuIFwiJHt0aGlzLnRoZW1lfVwiIGlzIG5vdCBhIHZhbGlkIHRoZW1lIHZhbHVlLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kcyBhIHJlcXVlc3QgdG8gbG9hZCB0aGUgZnJpZW5kcyBsaXN0XHJcbiAgICBwcml2YXRlIGZldGNoRnJpZW5kc0xpc3QoaXNCb290c3RyYXBwaW5nOiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5saXN0RnJpZW5kcygpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgodXNlcnM6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzQm9vdHN0cmFwcGluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlV2luZG93c1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaE1lc3NhZ2VIaXN0b3J5KHdpbmRvdzogV2luZG93KSB7XHJcbiAgICAgICAgLy8gTm90IGlkZWFsIGJ1dCB3aWxsIGtlZXAgdGhpcyB1bnRpbCB3ZSBkZWNpZGUgaWYgd2UgYXJlIHNoaXBwaW5nIHBhZ2luYXRpb24gd2l0aCB0aGUgZGVmYXVsdCBhZGFwdGVyXHJcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlciBpbnN0YW5jZW9mIFBhZ2VkSGlzdG9yeUNoYXRBZGFwdGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmdldE1lc3NhZ2VIaXN0b3J5QnlQYWdlKHdpbmRvdy5jaGF0dGluZ1RvLmlkLCB0aGlzLmhpc3RvcnlQYWdlU2l6ZSwgKyt3aW5kb3cuaGlzdG9yeVBhZ2UpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXN1bHQ6IE1lc3NhZ2VbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKChtZXNzYWdlKSA9PiB0aGlzLmFzc2VydE1lc3NhZ2VUeXBlKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMgPSByZXN1bHQuY29uY2F0KHdpbmRvdy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uID0gKHdpbmRvdy5oaXN0b3J5UGFnZSA9PSAxKSA/IFNjcm9sbERpcmVjdGlvbi5Cb3R0b20gOiBTY3JvbGxEaXJlY3Rpb24uVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNNb3JlTWVzc2FnZXMgPSByZXN1bHQubGVuZ3RoID09IHRoaXMuaGlzdG9yeVBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkZldGNoTWVzc2FnZUhpc3RvcnlMb2FkZWQocmVzdWx0LCB3aW5kb3csIGRpcmVjdGlvbiwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmdldE1lc3NhZ2VIaXN0b3J5KHdpbmRvdy5jaGF0dGluZ1RvLmlkKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzdWx0OiBNZXNzYWdlW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgobWVzc2FnZSkgPT4gdGhpcy5hc3NlcnRNZXNzYWdlVHlwZShtZXNzYWdlKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMgPSByZXN1bHQuY29uY2F0KHdpbmRvdy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkZldGNoTWVzc2FnZUhpc3RvcnlMb2FkZWQocmVzdWx0LCB3aW5kb3csIFNjcm9sbERpcmVjdGlvbi5Cb3R0b20pKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GZXRjaE1lc3NhZ2VIaXN0b3J5TG9hZGVkKG1lc3NhZ2VzOiBNZXNzYWdlW10sIHdpbmRvdzogV2luZG93LCBkaXJlY3Rpb246IFNjcm9sbERpcmVjdGlvbiwgZm9yY2VNYXJrTWVzc2FnZXNBc1NlZW46IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgZGlyZWN0aW9uKVxyXG5cclxuICAgICAgICBpZiAod2luZG93Lmhhc0ZvY3VzIHx8IGZvcmNlTWFya01lc3NhZ2VzQXNTZWVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdW5zZWVuTWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIobSA9PiAhbS5zZWVuT24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQodW5zZWVuTWVzc2FnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZXNTZWVuLmVtaXQodW5zZWVuTWVzc2FnZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGVzIHRoZSBmcmllbmRzIGxpc3QgdmlhIHRoZSBldmVudCBoYW5kbGVyXHJcbiAgICBwcml2YXRlIG9uRnJpZW5kc0xpc3RDaGFuZ2VkKHVzZXJzOiBVc2VyW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHVzZXJzKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyByZWNlaXZlZCBtZXNzYWdlcyBieSB0aGUgYWRhcHRlclxyXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZCh1c2VyOiBVc2VyLCBtZXNzYWdlOiBNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1c2VyICYmIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hhdFdpbmRvdyA9IHRoaXMub3BlbkNoYXRXaW5kb3codXNlcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFzc2VydE1lc3NhZ2VUeXBlKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjaGF0V2luZG93WzFdIHx8ICF0aGlzLmhpc3RvcnlFbmFibGVkKXtcclxuICAgICAgICAgICAgICAgIGNoYXRXaW5kb3dbMF0ubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbENoYXRXaW5kb3coY2hhdFdpbmRvd1swXSwgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXRXaW5kb3dbMF0uaGFzRm9jdXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQoW21lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWVzc2FnZXNTZWVuLmVtaXQoW21lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0TWVzc2FnZVNvdW5kKGNoYXRXaW5kb3dbMF0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2l0aHViIGlzc3VlICM1OCBcclxuICAgICAgICAgICAgLy8gRG8gbm90IHB1c2ggYnJvd3NlciBub3RpZmljYXRpb25zIHdpdGggbWVzc2FnZSBjb250ZW50IGZvciBwcml2YWN5IHB1cnBvc2VzIGlmIHRoZSAnbWF4aW1pemVXaW5kb3dPbk5ld01lc3NhZ2UnIHNldHRpbmcgaXMgb2ZmIGFuZCB0aGlzIGlzIGEgbmV3IGNoYXQgd2luZG93LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhpbWl6ZVdpbmRvd09uTmV3TWVzc2FnZSB8fCAoIWNoYXRXaW5kb3dbMV0gJiYgIWNoYXRXaW5kb3dbMF0uaXNDb2xsYXBzZWQpKVxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgLy8gU29tZSBtZXNzYWdlcyBhcmUgbm90IHB1c2hlZCBiZWNhdXNlIHRoZXkgYXJlIGxvYWRlZCBieSBmZXRjaGluZyB0aGUgaGlzdG9yeSBoZW5jZSB3aHkgd2Ugc3VwcGx5IHRoZSBtZXNzYWdlIGhlcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdEJyb3dzZXJOb3RpZmljYXRpb24oY2hhdFdpbmRvd1swXSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbnMgYSBuZXcgY2hhdCB3aGluZG93LiBUYWtlcyBjYXJlIG9mIGF2YWlsYWJsZSB2aWV3cG9ydFxyXG4gICAgLy8gUmV0dXJucyA9PiBbV2luZG93OiBXaW5kb3cgb2JqZWN0IHJlZmVyZW5jZSwgYm9vbGVhbjogSW5kaWNhdGVzIGlmIHRoaXMgd2luZG93IGlzIGEgbmV3IGNoYXQgd2luZG93XVxyXG4gICAgcHVibGljIG9wZW5DaGF0V2luZG93KHVzZXI6IFVzZXIsIGZvY3VzT25OZXdXaW5kb3c6IGJvb2xlYW4gPSBmYWxzZSwgaW52b2tlZEJ5VXNlckNsaWNrOiBib29sZWFuID0gZmFsc2UpOiBbV2luZG93LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIC8vIElzIHRoaXMgd2luZG93IG9wZW5lZD9cclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlci5pZCk7XHJcblxyXG4gICAgICAgIGlmICghb3BlbmVkV2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGludm9rZWRCeVVzZXJDbGljaykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Vc2VyQ2xpY2tlZC5lbWl0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZWZlciB0byBpc3N1ZSAjNTggb24gR2l0aHViIFxyXG4gICAgICAgICAgICBsZXQgY29sbGFwc2VXaW5kb3cgPSBpbnZva2VkQnlVc2VyQ2xpY2sgPyBmYWxzZSA6ICF0aGlzLm1heGltaXplV2luZG93T25OZXdNZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld0NoYXRXaW5kb3c6IFdpbmRvdyA9IHtcclxuICAgICAgICAgICAgICAgIGNoYXR0aW5nVG86IHVzZXIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogIFtdLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nSGlzdG9yeTogdGhpcy5oaXN0b3J5RW5hYmxlZCxcclxuICAgICAgICAgICAgICAgIGhhc0ZvY3VzOiBmYWxzZSwgLy8gVGhpcyB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSAnbmV3TWVzc2FnZScgaW5wdXQgZ2V0cyB0aGUgY3VycmVudCBmb2N1c1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ6IGNvbGxhcHNlV2luZG93LFxyXG4gICAgICAgICAgICAgICAgaGFzTW9yZU1lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlQYWdlOiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBMb2FkcyB0aGUgY2hhdCBoaXN0b3J5IHZpYSBhbiBSeEpzIE9ic2VydmFibGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeUVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hNZXNzYWdlSGlzdG9yeShuZXdDaGF0V2luZG93KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzLnVuc2hpZnQobmV3Q2hhdFdpbmRvdyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJcyB0aGVyZSBlbm91Z2ggc3BhY2UgbGVmdCBpbiB0aGUgdmlldyBwb3J0ID9cclxuICAgICAgICAgICAgaWYgKHRoaXMud2luZG93cy5sZW5ndGggKiB0aGlzLndpbmRvd1NpemVGYWN0b3IgPj0gdGhpcy52aWV3UG9ydFRvdGFsQXJlYSAtICghdGhpcy5oaWRlRnJpZW5kc0xpc3QgPyB0aGlzLmZyaWVuZHNMaXN0V2lkdGggOiAwKSlcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMud2luZG93cy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dzU3RhdGUodGhpcy53aW5kb3dzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmb2N1c09uTmV3V2luZG93ICYmICFjb2xsYXBzZVdpbmRvdykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNPbldpbmRvdyhuZXdDaGF0V2luZG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vblVzZXJDaGF0T3BlbmVkLmVtaXQodXNlcik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW25ld0NoYXRXaW5kb3csIHRydWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBleGlzdGluZyBjaGF0IHdpbmRvdyAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBbb3BlbmVkV2luZG93LCBmYWxzZV07ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb2N1cyBvbiB0aGUgaW5wdXQgZWxlbWVudCBvZiB0aGUgc3VwcGxpZWQgd2luZG93XHJcbiAgICBwcml2YXRlIGZvY3VzT25XaW5kb3cod2luZG93OiBXaW5kb3csIGNhbGxiYWNrOiBGdW5jdGlvbiA9ICgpID0+IHt9KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgd2luZG93SW5kZXggPSB0aGlzLndpbmRvd3MuaW5kZXhPZih3aW5kb3cpO1xyXG4gICAgICAgIGlmICh3aW5kb3dJbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGF0V2luZG93SW5wdXRzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSW5wdXRUb0ZvY3VzID0gdGhpcy5jaGF0V2luZG93SW5wdXRzLnRvQXJyYXkoKVt3aW5kb3dJbmRleF07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXRUb0ZvY3VzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2Nyb2xscyBhIGNoYXQgd2luZG93IG1lc3NhZ2UgZmxvdyB0byB0aGUgYm90dG9tXHJcbiAgICBwcml2YXRlIHNjcm9sbENoYXRXaW5kb3cod2luZG93OiBXaW5kb3csIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghd2luZG93LmlzQ29sbGFwc2VkKXtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0luZGV4ID0gdGhpcy53aW5kb3dzLmluZGV4T2Yod2luZG93KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGF0TWVzc2FnZUNsdXN0ZXJzKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0V2luZG93ID0gdGhpcy5jaGF0TWVzc2FnZUNsdXN0ZXJzLnRvQXJyYXkoKVt3aW5kb3dJbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuY2hhdE1lc3NhZ2VDbHVzdGVycy50b0FycmF5KClbd2luZG93SW5kZXhdLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICggZGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb24uVG9wICkgPyAwIDogZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hcmtzIGFsbCBtZXNzYWdlcyBwcm92aWRlZCBhcyByZWFkIHdpdGggdGhlIGN1cnJlbnQgdGltZS5cclxuICAgIHB1YmxpYyBtYXJrTWVzc2FnZXNBc1JlYWQobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKChtc2cpPT57XHJcbiAgICAgICAgICAgIG1zZy5zZWVuT24gPSBjdXJyZW50RGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWZmZXJzIGF1ZGlvIGZpbGUgKEZvciBjb21wb25lbnQncyBib290c3RyYXBwaW5nKVxyXG4gICAgcHJpdmF0ZSBidWZmZXJBdWRpb0ZpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9Tb3VyY2UgJiYgdGhpcy5hdWRpb1NvdXJjZS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUgPSBuZXcgQXVkaW8oKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUuc3JjID0gdGhpcy5hdWRpb1NvdXJjZTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbWl0cyBhIG1lc3NhZ2Ugbm90aWZpY2F0aW9uIGF1ZGlvIGlmIGVuYWJsZWQgYWZ0ZXIgZXZlcnkgbWVzc2FnZSByZWNlaXZlZFxyXG4gICAgcHJpdmF0ZSBlbWl0TWVzc2FnZVNvdW5kKHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvRW5hYmxlZCAmJiAhd2luZG93Lmhhc0ZvY3VzICYmIHRoaXMuYXVkaW9GaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9GaWxlLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1pdHMgYSBicm93c2VyIG5vdGlmaWNhdGlvblxyXG4gICAgcHJpdmF0ZSBlbWl0QnJvd3Nlck5vdGlmaWNhdGlvbih3aW5kb3c6IFdpbmRvdywgbWVzc2FnZTogTWVzc2FnZSk6IHZvaWRcclxuICAgIHsgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQgJiYgIXdpbmRvdy5oYXNGb2N1cyAmJiBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKGAke3RoaXMubG9jYWxpemF0aW9uLmJyb3dzZXJOb3RpZmljYXRpb25UaXRsZX0gJHt3aW5kb3cuY2hhdHRpbmdUby5kaXNwbGF5TmFtZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAnYm9keSc6IG1lc3NhZ2UubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICdpY29uJzogdGhpcy5icm93c2VyTm90aWZpY2F0aW9uSWNvblNvdXJjZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0sIG1lc3NhZ2UubWVzc2FnZS5sZW5ndGggPD0gNTAgPyA1MDAwIDogNzAwMCk7IC8vIE1vcmUgdGltZSB0byByZWFkIGxvbmdlciBtZXNzYWdlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlcyBjdXJyZW50IHdpbmRvd3Mgc3RhdGUgaW50byBsb2NhbCBzdG9yYWdlIGlmIHBlcnNpc3RlbmNlIGlzIGVuYWJsZWRcclxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93c1N0YXRlKHdpbmRvd3M6IFdpbmRvd1tdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RXaW5kb3dzU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdXNlcnNJZHMgPSB3aW5kb3dzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHcuY2hhdHRpbmdUby5pZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodXNlcnNJZHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXN0b3JlV2luZG93c1N0YXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RXaW5kb3dzU3RhdGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdmaWVkVXNlcklkcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nZmllZFVzZXJJZHMgJiYgc3RyaW5nZmllZFVzZXJJZHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkcyA9IDxudW1iZXJbXT5KU09OLnBhcnNlKHN0cmluZ2ZpZWRVc2VySWRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJzVG9SZXN0b3JlID0gdGhpcy51c2Vycy5maWx0ZXIodSA9PiB1c2VySWRzLmluZGV4T2YodS5pZCkgPj0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzVG9SZXN0b3JlLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhdFdpbmRvdyh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXN0b3JpbmcgbmctY2hhdCB3aW5kb3dzIHN0YXRlLiBEZXRhaWxzOiAke2V4fWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXRzIGNsb3Nlc3Qgb3BlbiB3aW5kb3cgaWYgYW55LiBNb3N0IHJlY2VudCBvcGVuZWQgaGFzIHByaW9yaXR5IChSaWdodClcclxuICAgIHByaXZhdGUgZ2V0Q2xvc2VzdFdpbmRvdyh3aW5kb3c6IFdpbmRvdyk6IFdpbmRvdyB8IHVuZGVmaW5lZFxyXG4gICAgeyAgIFxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3dzW2luZGV4IC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDAgJiYgdGhpcy53aW5kb3dzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3dzW2luZGV4ICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXNzZXJ0TWVzc2FnZVR5cGUobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIEFsd2F5cyBmYWxsYmFjayB0byBcIlRleHRcIiBtZXNzYWdlcyB0byBhdm9pZCByZW5kZW5yaW5nIGlzc3Vlc1xyXG4gICAgICAgIGlmICghbWVzc2FnZS50eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVzc2FnZS50eXBlID0gTWVzc2FnZVR5cGUuVGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgdG90YWwgdW5yZWFkIG1lc3NhZ2VzIGZyb20gYSBjaGF0IHdpbmRvdy4gVE9ETzogQ291bGQgdXNlIHNvbWUgQW5ndWxhciBwaXBlcyBpbiB0aGUgZnV0dXJlIFxyXG4gICAgdW5yZWFkTWVzc2FnZXNUb3RhbCh3aW5kb3c6IFdpbmRvdyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmICh3aW5kb3cpe1xyXG4gICAgICAgICAgICBsZXQgdG90YWxVbnJlYWRNZXNzYWdlcyA9IHdpbmRvdy5tZXNzYWdlcy5maWx0ZXIoeCA9PiB4LmZyb21JZCAhPSB0aGlzLnVzZXJJZCAmJiAheC5zZWVuT24pLmxlbmd0aDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFVucmVhZE1lc3NhZ2VzID4gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsVW5yZWFkTWVzc2FnZXMgPiA5OSkgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBcIjk5K1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodG90YWxVbnJlYWRNZXNzYWdlcyk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBFbXB0eSBmYWxsYmFjay5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlYWRNZXNzYWdlc1RvdGFsQnlVc2VyKHVzZXI6IFVzZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlci5pZCk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuZWRXaW5kb3cpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bnJlYWRNZXNzYWdlc1RvdGFsKG9wZW5lZFdpbmRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBFbXB0eSBmYWxsYmFjay5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKiAgTW9uaXRvcnMgcHJlc3NlZCBrZXlzIG9uIGEgY2hhdCB3aW5kb3dcclxuICAgICAgICAtIERpc3BhdGNoZXMgYSBtZXNzYWdlIHdoZW4gdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkXHJcbiAgICAgICAgLSBUYWJzIGJldHdlZW4gd2luZG93cyBvbiBUQUIgb3IgU0hJRlQgKyBUQUJcclxuICAgICAgICAtIENsb3NlcyB0aGUgY3VycmVudCBmb2N1c2VkIHdpbmRvdyBvbiBFU0NcclxuICAgICovXHJcbiAgICBvbkNoYXRJbnB1dFR5cGVkKGV2ZW50OiBhbnksIHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm5ld01lc3NhZ2UgJiYgd2luZG93Lm5ld01lc3NhZ2UudHJpbSgpICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mcm9tSWQgPSB0aGlzLnVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRvSWQgPSB3aW5kb3cuY2hhdHRpbmdUby5pZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UgPSB3aW5kb3cubmV3TWVzc2FnZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5ld01lc3NhZ2UgPSBcIlwiOyAvLyBSZXNldHMgdGhlIG5ldyBtZXNzYWdlIGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRXaW5kb3dJbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0VG9Gb2N1cyA9IHRoaXMuY2hhdFdpbmRvd0lucHV0cy50b0FycmF5KClbY3VycmVudFdpbmRvd0luZGV4ICsgKGV2ZW50LnNoaWZ0S2V5ID8gMSA6IC0xKV07IC8vIEdvZXMgYmFjayBvbiBzaGlmdCArIHRhYlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZUlucHV0VG9Gb2N1cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFZGdlIHdpbmRvd3MsIGdvIHRvIHN0YXJ0IG9yIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJbnB1dFRvRm9jdXMgPSB0aGlzLmNoYXRXaW5kb3dJbnB1dHMudG9BcnJheSgpW2N1cnJlbnRXaW5kb3dJbmRleCA+IDAgPyAwIDogdGhpcy5jaGF0V2luZG93SW5wdXRzLmxlbmd0aCAtIDFdOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXRUb0ZvY3VzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgIGxldCBjbG9zZXN0V2luZG93ID0gdGhpcy5nZXRDbG9zZXN0V2luZG93KHdpbmRvdyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c09uV2luZG93KGNsb3Nlc3RXaW5kb3csICgpID0+IHsgdGhpcy5vbkNsb3NlQ2hhdFdpbmRvdyh3aW5kb3cpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VDaGF0V2luZG93KHdpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsb3NlcyBhIGNoYXQgd2luZG93IHZpYSB0aGUgY2xvc2UgJ1gnIGJ1dHRvblxyXG4gICAgb25DbG9zZUNoYXRXaW5kb3cod2luZG93OiBXaW5kb3cpOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIHRoaXMud2luZG93cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd3NTdGF0ZSh0aGlzLndpbmRvd3MpO1xyXG5cclxuICAgICAgICB0aGlzLm9uVXNlckNoYXRDbG9zZWQuZW1pdCh3aW5kb3cuY2hhdHRpbmdUbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9nZ2xlIGZyaWVuZHMgbGlzdCB2aXNpYmlsaXR5XHJcbiAgICBvbkNoYXRUaXRsZUNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9nZ2xlcyBhIGNoYXQgd2luZG93IHZpc2liaWxpdHkgYmV0d2VlbiBtYXhpbWl6ZWQvbWluaW1pemVkXHJcbiAgICBvbkNoYXRXaW5kb3dDbGlja2VkKHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5pc0NvbGxhcHNlZCA9ICF3aW5kb3cuaXNDb2xsYXBzZWQ7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzZXJ0cyBpZiBhIHVzZXIgYXZhdGFyIGlzIHZpc2libGUgaW4gYSBjaGF0IGNsdXN0ZXJcclxuICAgIGlzQXZhdGFyVmlzaWJsZSh3aW5kb3c6IFdpbmRvdywgbWVzc2FnZTogTWVzc2FnZSwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5mcm9tSWQgIT0gdGhpcy51c2VySWQpe1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gRmlyc3QgbWVzc2FnZSwgZ29vZCB0byBzaG93IHRoZSB0aHVtYm5haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpb3VzIG1lc3NhZ2UgYmVsb25ncyB0byB0aGUgc2FtZSB1c2VyLCBpZiBpdCBiZWxvbmdzIHRoZXJlIGlzIG5vIG5lZWQgdG8gc2hvdyB0aGUgYXZhdGFyIGFnYWluIHRvIGZvcm0gdGhlIG1lc3NhZ2UgY2x1c3RlclxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tZXNzYWdlc1tpbmRleCAtIDFdLmZyb21JZCAhPSBtZXNzYWdlLmZyb21JZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGVzIGEgd2luZG93IGZvY3VzIG9uIHRoZSBmb2N1cy9ibHVyIG9mIGEgJ25ld01lc3NhZ2UnIGlucHV0XHJcbiAgICB0b2dnbGVXaW5kb3dGb2N1cyh3aW5kb3c6IFdpbmRvdyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuaGFzRm9jdXMgPSAhd2luZG93Lmhhc0ZvY3VzO1xyXG4gICAgICAgIGlmKHdpbmRvdy5oYXNGb2N1cykge1xyXG4gICAgICAgICAgICBjb25zdCB1bnJlYWRNZXNzYWdlcyA9IHdpbmRvdy5tZXNzYWdlcy5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLnNlZW5PbiA9PSBudWxsICYmIG1lc3NhZ2UudG9JZCA9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodW5yZWFkTWVzc2FnZXMgJiYgdW5yZWFkTWVzc2FnZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQodW5yZWFkTWVzc2FnZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2VzU2Vlbi5lbWl0KHVucmVhZE1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBbTG9jYWxpemVkXSBSZXR1cm5zIHRoZSBzdGF0dXMgZGVzY3JpcHRpdmUgdGl0bGVcclxuICAgIGdldFN0YXR1c1RpdGxlKHN0YXR1czogVXNlclN0YXR1cykgOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VycmVudFN0YXR1cyA9IHN0YXR1cy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvbi5zdGF0dXNEZXNjcmlwdGlvbltjdXJyZW50U3RhdHVzXTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyT3BlbkNoYXRXaW5kb3codXNlcjogVXNlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh1c2VyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hhdFdpbmRvdyh1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckNsb3NlQ2hhdFdpbmRvdyh1c2VySWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB0aGlzLndpbmRvd3MuZmluZCh4ID0+IHguY2hhdHRpbmdUby5pZCA9PSB1c2VySWQpO1xyXG5cclxuICAgICAgICBpZiAob3BlbmVkV2luZG93KXtcclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlQ2hhdFdpbmRvdyhvcGVuZWRXaW5kb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyVG9nZ2xlQ2hhdFdpbmRvd1Zpc2liaWxpdHkodXNlcklkOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKG9wZW5lZFdpbmRvdyl7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGF0V2luZG93Q2xpY2tlZChvcGVuZWRXaW5kb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmlnZ2VycyBuYXRpdmUgZmlsZSB1cGxvYWQgZm9yIGZpbGUgc2VsZWN0aW9uIGZyb20gdGhlIHVzZXJcclxuICAgIHRyaWdnZXJOYXRpdmVGaWxlVXBsb2FkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZUZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyBmaWxlIHNlbGVjdGlvbiBhbmQgdXBsb2FkcyB0aGUgc2VsZWN0ZWQgZmlsZSB1c2luZyB0aGUgZmlsZSB1cGxvYWQgYWRhcHRlclxyXG4gICAgb25GaWxlQ2hvc2VuKHdpbmRvdzogV2luZG93KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZmlsZTogRmlsZSA9IHRoaXMubmF0aXZlRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmdGaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGZhaWx1cmVcclxuICAgICAgICB0aGlzLmZpbGVVcGxvYWRBZGFwdGVyLnVwbG9hZEZpbGUoZmlsZSwgd2luZG93LmNoYXR0aW5nVG8pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZmlsZU1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwbG9hZGluZ0ZpbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxlTWVzc2FnZS5mcm9tSWQgPSB0aGlzLnVzZXJJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoIGZpbGUgbWVzc2FnZSB0byBjdXJyZW50IHVzZXIgd2luZG93ICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMucHVzaChmaWxlTWVzc2FnZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZW5kTWVzc2FnZShmaWxlTWVzc2FnZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhdFdpbmRvdyh3aW5kb3csIFNjcm9sbERpcmVjdGlvbi5Cb3R0b20pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2V0cyB0aGUgZmlsZSB1cGxvYWQgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVGaWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=