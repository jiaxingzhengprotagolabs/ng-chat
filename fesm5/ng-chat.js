import { __awaiter, __generator, __extends } from 'tslib';
import { Component, Input, ViewChildren, ViewChild, HostListener, Output, EventEmitter, Pipe, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
ChatAdapter = /** @class */ (function () {
    function ChatAdapter() {
        // ### Abstract adapter methods ###
        // Event handlers
        this.friendsListChangedHandler = function (users) { };
        this.messageReceivedHandler = function (user, message) { };
    }
    // ### Adapter/Chat income/ingress events ###
    // ### Adapter/Chat income/ingress events ###
    /**
     * @param {?} users
     * @return {?}
     */
    ChatAdapter.prototype.onFriendsListChanged = 
    // ### Adapter/Chat income/ingress events ###
    /**
     * @param {?} users
     * @return {?}
     */
    function (users) {
        this.friendsListChangedHandler(users);
    };
    /**
     * @param {?} user
     * @param {?} message
     * @return {?}
     */
    ChatAdapter.prototype.onMessageReceived = /**
     * @param {?} user
     * @param {?} message
     * @return {?}
     */
    function (user, message) {
        this.messageReceivedHandler(user, message);
    };
    return ChatAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
var MessageType = {
    Text: 1,
    File: 2,
};
MessageType[MessageType.Text] = 'Text';
MessageType[MessageType.File] = 'File';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var Message = /** @class */ (function () {
    function Message() {
        this.type = MessageType.Text;
    }
    return Message;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
var UserStatus = {
    Online: 0,
    Busy: 1,
    Away: 2,
    Offline: 3,
};
UserStatus[UserStatus.Online] = 'Online';
UserStatus[UserStatus.Busy] = 'Busy';
UserStatus[UserStatus.Away] = 'Away';
UserStatus[UserStatus.Offline] = 'Offline';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var Window = /** @class */ (function () {
    function Window() {
        this.messages = [];
        this.newMessage = "";
        // UI Behavior properties
        this.isCollapsed = false;
        this.isLoadingHistory = false;
        this.hasFocus = false;
        this.hasMoreMessages = true;
        this.historyPage = 0;
    }
    return Window;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
var  /**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
PagedHistoryChatAdapter = /** @class */ (function (_super) {
    __extends(PagedHistoryChatAdapter, _super);
    function PagedHistoryChatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PagedHistoryChatAdapter;
}(ChatAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
var Theme = {
    Custom: 'custom-theme',
    Light: 'light-theme',
    Dark: 'dark-theme',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
var ScrollDirection = {
    Top: 0,
    Bottom: 1,
};
ScrollDirection[ScrollDirection.Top] = 'Top';
ScrollDirection[ScrollDirection.Bottom] = 'Bottom';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DefaultFileUploadAdapter = /** @class */ (function () {
    /**
     * @summary Basic file upload adapter implementation for HTTP request form file consumption
     * @param _serverEndpointUrl The API endpoint full qualified address that will receive a form file to process and return the metadata.
     */
    function DefaultFileUploadAdapter(_serverEndpointUrl, _http) {
        this._serverEndpointUrl = _serverEndpointUrl;
        this._http = _http;
    }
    /**
     * @param {?} file
     * @param {?} userTo
     * @return {?}
     */
    DefaultFileUploadAdapter.prototype.uploadFile = /**
     * @param {?} file
     * @param {?} userTo
     * @return {?}
     */
    function (file, userTo) {
        /** @type {?} */
        var formData = new FormData();
        //formData.append('ng-chat-sender-userid', currentUserId);
        formData.append('ng-chat-destinatary-userid', userTo.id);
        formData.append('file', file, file.name);
        return this._http.post(this._serverEndpointUrl, formData);
        // TODO: Leaving this if we want to track upload progress in detail in the future. Might need a different Subject generic type wrapper
        // const fileRequest = new HttpRequest('POST', this._serverEndpointUrl, formData, {
        //     reportProgress: true
        // });
        // const uploadProgress = new Subject<number>();
        // const uploadStatus = uploadProgress.asObservable();
        //const responsePromise = new Subject<Message>();
        // this._http
        //     .request(fileRequest)
        //     .subscribe(event => {
        //         // if (event.type == HttpEventType.UploadProgress)
        //         // {
        //         //     const percentDone = Math.round(100 * event.loaded / event.total);
        //         //     uploadProgress.next(percentDone);
        //         // }
        //         // else if (event instanceof HttpResponse)
        //         // {
        //         //     uploadProgress.complete();
        //         // }
        //     });
    };
    return DefaultFileUploadAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var emojiDictionary = [
    { patterns: [':)', ':-)', '=)'], unicode: '😃' },
    { patterns: [':D', ':-D', '=D'], unicode: '😀' },
    { patterns: [':(', ':-(', '=('], unicode: '🙁' },
    { patterns: [':|', ':-|', '=|'], unicode: '😐' },
    { patterns: [':*', ':-*', '=*'], unicode: '😙' },
    { patterns: ['T_T', 'T.T'], unicode: '😭' },
    { patterns: [':O', ':-O', '=O', ':o', ':-o', '=o'], unicode: '😮' },
    { patterns: [':P', ':-P', '=P', ':p', ':-p', '=p'], unicode: '😋' },
    { patterns: ['>.<'], unicode: '😣' },
    { patterns: ['@.@'], unicode: '😵' },
    { patterns: ['*.*'], unicode: '😍' },
    { patterns: ['<3'], unicode: '❤️' },
    { patterns: ['^.^'], unicode: '😊' },
    { patterns: [':+1'], unicode: '👍' },
    { patterns: [':-1'], unicode: '👎' }
];
/*
 * Transforms common emoji text to UTF encoded emojis
*/
var EmojifyPipe = /** @class */ (function () {
    function EmojifyPipe() {
    }
    /**
     * @param {?} message
     * @param {?} pipeEnabled
     * @return {?}
     */
    EmojifyPipe.prototype.transform = /**
     * @param {?} message
     * @param {?} pipeEnabled
     * @return {?}
     */
    function (message, pipeEnabled) {
        if (pipeEnabled && message && message.length > 1) {
            emojiDictionary.forEach(function (emoji) {
                emoji.patterns.forEach(function (pattern) {
                    message = message.replace(pattern, emoji.unicode);
                });
            });
        }
        return message;
    };
    EmojifyPipe.decorators = [
        { type: Pipe, args: [{ name: 'emojify' },] }
    ];
    return EmojifyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/*
 * Transforms text containing URLs or E-mails to valid links/mailtos
*/
var LinkfyPipe = /** @class */ (function () {
    function LinkfyPipe() {
    }
    /**
     * @param {?} message
     * @param {?} pipeEnabled
     * @return {?}
     */
    LinkfyPipe.prototype.transform = /**
     * @param {?} message
     * @param {?} pipeEnabled
     * @return {?}
     */
    function (message, pipeEnabled) {
        if (pipeEnabled && message && message.length > 1) {
            /** @type {?} */
            var replacedText = void 0;
            /** @type {?} */
            var replacePatternProtocol = void 0;
            /** @type {?} */
            var replacePatternWWW = void 0;
            /** @type {?} */
            var replacePatternMailTo = void 0;
            // URLs starting with http://, https://, or ftp://
            replacePatternProtocol = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            replacedText = message.replace(replacePatternProtocol, '<a href="$1" target="_blank">$1</a>');
            // URLs starting with "www." (ignoring // before it).
            replacePatternWWW = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
            replacedText = replacedText.replace(replacePatternWWW, '$1<a href="http://$2" target="_blank">$2</a>');
            // Change email addresses to mailto:: links.
            replacePatternMailTo = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
            replacedText = replacedText.replace(replacePatternMailTo, '<a href="mailto:$1">$1</a>');
            return replacedText;
        }
        else
            return message;
    };
    LinkfyPipe.decorators = [
        { type: Pipe, args: [{ name: 'linkfy' },] }
    ];
    return LinkfyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgChatModule = /** @class */ (function () {
    function NgChatModule() {
    }
    NgChatModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, HttpClientModule],
                    declarations: [NgChat, EmojifyPipe, LinkfyPipe],
                    exports: [NgChat]
                },] }
    ];
    return NgChatModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgChatModule, ChatAdapter, Message, UserStatus, User, Window, PagedHistoryChatAdapter, Theme, NgChat as ɵa, EmojifyPipe as ɵb, LinkfyPipe as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvY2hhdC1hZGFwdGVyLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvY29yZS9tZXNzYWdlLXR5cGUuZW51bS50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvbWVzc2FnZS50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvdXNlci1zdGF0dXMuZW51bS50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvdXNlci50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvd2luZG93LnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvY29yZS9wYWdlZC1oaXN0b3J5LWNoYXQtYWRhcHRlci50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvdGhlbWUuZW51bS50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvc2Nyb2xsLWRpcmVjdGlvbi5lbnVtLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvY29yZS9kZWZhdWx0LWZpbGUtdXBsb2FkLWFkYXB0ZXIudHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9uZy1jaGF0LmNvbXBvbmVudC50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L3BpcGVzL2Vtb2ppZnkucGlwZS50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L3BpcGVzL2xpbmtmeS5waXBlLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvbmctY2hhdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoYXRBZGFwdGVyXHJcbntcclxuICAgIC8vICMjIyBBYnN0cmFjdCBhZGFwdGVyIG1ldGhvZHMgIyMjXHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IGxpc3RGcmllbmRzKCk6IE9ic2VydmFibGU8VXNlcltdPjtcclxuICAgIFxyXG4gICAgcHVibGljIGFic3RyYWN0IGdldE1lc3NhZ2VIaXN0b3J5KHVzZXJJZDogYW55KTogT2JzZXJ2YWJsZTxNZXNzYWdlW10+O1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzZW5kTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZDtcclxuXHJcbiAgICAvLyAjIyMgQWRhcHRlci9DaGF0IGluY29tZS9pbmdyZXNzIGV2ZW50cyAjIyNcclxuXHJcbiAgICBwdWJsaWMgb25GcmllbmRzTGlzdENoYW5nZWQodXNlcnM6IFVzZXJbXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0Q2hhbmdlZEhhbmRsZXIodXNlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk1lc3NhZ2VSZWNlaXZlZCh1c2VyOiBVc2VyLCBtZXNzYWdlOiBNZXNzYWdlKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVJlY2VpdmVkSGFuZGxlcih1c2VyLCBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRXZlbnQgaGFuZGxlcnNcclxuICAgIGZyaWVuZHNMaXN0Q2hhbmdlZEhhbmRsZXI6ICh1c2VyczogVXNlcltdKSA9PiB2b2lkICA9ICh1c2VyczogVXNlcltdKSA9PiB7fTtcclxuICAgIG1lc3NhZ2VSZWNlaXZlZEhhbmRsZXI6ICh1c2VyOiBVc2VyLCBtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkID0gKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHt9O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlXHJcbntcclxuICAgIFRleHQgPSAxLFxyXG4gICAgRmlsZSA9IDJcclxufVxyXG4iLCJpbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4vbWVzc2FnZS10eXBlLmVudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Vcclxue1xyXG4gICAgcHVibGljIHR5cGU/OiBNZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlLlRleHQ7XHJcbiAgICBwdWJsaWMgZnJvbUlkOiBhbnk7XHJcbiAgICBwdWJsaWMgdG9JZDogYW55O1xyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzZWVuT24/OiBEYXRlO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFVzZXJTdGF0dXNcclxue1xyXG4gICAgT25saW5lLFxyXG4gICAgQnVzeSxcclxuICAgIEF3YXksXHJcbiAgICBPZmZsaW5lXHJcbn0iLCJpbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSBcIi4vdXNlci1zdGF0dXMuZW51bVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJcclxue1xyXG4gICAgcHVibGljIGlkOiBhbnk7XHJcbiAgICBwdWJsaWMgZGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdGF0dXM6IFVzZXJTdGF0dXM7XHJcbiAgICBwdWJsaWMgYXZhdGFyOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd1xyXG57XHJcbiAgICBwdWJsaWMgY2hhdHRpbmdUbzogVXNlcjtcclxuICAgIHB1YmxpYyBtZXNzYWdlczogTWVzc2FnZVtdID0gW107XHJcbiAgICBwdWJsaWMgbmV3TWVzc2FnZT86IHN0cmluZyA9IFwiXCI7XHJcbiAgICBcclxuICAgIC8vIFVJIEJlaGF2aW9yIHByb3BlcnRpZXNcclxuICAgIHB1YmxpYyBpc0NvbGxhcHNlZD86IGJvb2xlYW4gPSBmYWxzZTsgXHJcbiAgICBwdWJsaWMgaXNMb2FkaW5nSGlzdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhhc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGFzTW9yZU1lc3NhZ2VzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBoaXN0b3J5UGFnZTogbnVtYmVyID0gMDtcclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IENoYXRBZGFwdGVyIH0gZnJvbSBcIi4vY2hhdC1hZGFwdGVyXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIENoYXQgQWRhcHRlciBkZWNvcmF0b3IgY2xhc3MgdGhhdCBhZGRzIHBhZ2luYXRpb24gdG8gbG9hZCB0aGUgaGlzdG9yeSBvZiBtZXNzYWdlc3IuIFxyXG4gKiBZb3Ugd2lsbCBuZWVkIGFuIGV4aXN0aW5nIEBzZWUgQ2hhdEFkYXB0ZXIgaW1wbGVtZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlZEhpc3RvcnlDaGF0QWRhcHRlciBleHRlbmRzIENoYXRBZGFwdGVyXHJcbnsgICBcclxuICAgIGFic3RyYWN0IGdldE1lc3NhZ2VIaXN0b3J5QnlQYWdlKHVzZXJJZDogYW55LCBzaXplOiBudW1iZXIsIHBhZ2U6IG51bWJlcikgOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVGhlbWVcclxue1xyXG4gICAgQ3VzdG9tID0gJ2N1c3RvbS10aGVtZScsXHJcbiAgICBMaWdodCA9ICdsaWdodC10aGVtZScsXHJcbiAgICBEYXJrID0gJ2RhcmstdGhlbWUnXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gU2Nyb2xsRGlyZWN0aW9uIHtcclxuICAgIFRvcCxcclxuICAgIEJvdHRvbVxyXG59IiwiaW1wb3J0IHsgSUZpbGVVcGxvYWRBZGFwdGVyIH0gZnJvbSAnLi9maWxlLXVwbG9hZC1hZGFwdGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWxlVXBsb2FkQWRhcHRlciBpbXBsZW1lbnRzIElGaWxlVXBsb2FkQWRhcHRlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEBzdW1tYXJ5IEJhc2ljIGZpbGUgdXBsb2FkIGFkYXB0ZXIgaW1wbGVtZW50YXRpb24gZm9yIEhUVFAgcmVxdWVzdCBmb3JtIGZpbGUgY29uc3VtcHRpb25cclxuICAgICAqIEBwYXJhbSBfc2VydmVyRW5kcG9pbnRVcmwgVGhlIEFQSSBlbmRwb2ludCBmdWxsIHF1YWxpZmllZCBhZGRyZXNzIHRoYXQgd2lsbCByZWNlaXZlIGEgZm9ybSBmaWxlIHRvIHByb2Nlc3MgYW5kIHJldHVybiB0aGUgbWV0YWRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZlckVuZHBvaW50VXJsOiBzdHJpbmcsIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWRGaWxlKGZpbGU6IEZpbGUsIHVzZXJUbzogVXNlcik6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICAvL2Zvcm1EYXRhLmFwcGVuZCgnbmctY2hhdC1zZW5kZXItdXNlcmlkJywgY3VycmVudFVzZXJJZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduZy1jaGF0LWRlc3RpbmF0YXJ5LXVzZXJpZCcsIHVzZXJUby5pZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdDxNZXNzYWdlPih0aGlzLl9zZXJ2ZXJFbmRwb2ludFVybCwgZm9ybURhdGEpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBMZWF2aW5nIHRoaXMgaWYgd2Ugd2FudCB0byB0cmFjayB1cGxvYWQgcHJvZ3Jlc3MgaW4gZGV0YWlsIGluIHRoZSBmdXR1cmUuIE1pZ2h0IG5lZWQgYSBkaWZmZXJlbnQgU3ViamVjdCBnZW5lcmljIHR5cGUgd3JhcHBlclxyXG4gICAgICAgIC8vIGNvbnN0IGZpbGVSZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgdGhpcy5fc2VydmVyRW5kcG9pbnRVcmwsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgLy8gICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgICAgIC8vIGNvbnN0IHVwbG9hZFN0YXR1cyA9IHVwbG9hZFByb2dyZXNzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICAvL2NvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IG5ldyBTdWJqZWN0PE1lc3NhZ2U+KCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX2h0dHBcclxuICAgICAgICAvLyAgICAgLnJlcXVlc3QoZmlsZVJlcXVlc3QpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYgKGV2ZW50LnR5cGUgPT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcylcclxuICAgICAgICAvLyAgICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBjb25zdCBwZXJjZW50RG9uZSA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB1cGxvYWRQcm9ncmVzcy5uZXh0KHBlcmNlbnREb25lKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKVxyXG4gICAgICAgIC8vICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIHVwbG9hZFByb2dyZXNzLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkcmVuLCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBDaGF0QWRhcHRlciB9IGZyb20gJy4vY29yZS9jaGF0LWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vY29yZS91c2VyXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9jb3JlL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgRmlsZU1lc3NhZ2UgfSBmcm9tIFwiLi9jb3JlL2ZpbGUtbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gXCIuL2NvcmUvbWVzc2FnZS10eXBlLmVudW1cIjtcclxuaW1wb3J0IHsgV2luZG93IH0gZnJvbSBcIi4vY29yZS93aW5kb3dcIjtcclxuaW1wb3J0IHsgVXNlclN0YXR1cyB9IGZyb20gXCIuL2NvcmUvdXNlci1zdGF0dXMuZW51bVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxEaXJlY3Rpb24gfSBmcm9tIFwiLi9jb3JlL3Njcm9sbC1kaXJlY3Rpb24uZW51bVwiO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb24sIFN0YXR1c0Rlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb3JlL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElDaGF0Q29udHJvbGxlciB9IGZyb20gJy4vY29yZS9jaGF0LWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQYWdlZEhpc3RvcnlDaGF0QWRhcHRlciB9IGZyb20gJy4vY29yZS9wYWdlZC1oaXN0b3J5LWNoYXQtYWRhcHRlcic7XHJcbmltcG9ydCB7IElGaWxlVXBsb2FkQWRhcHRlciB9IGZyb20gJy4vY29yZS9maWxlLXVwbG9hZC1hZGFwdGVyJztcclxuaW1wb3J0IHsgRGVmYXVsdEZpbGVVcGxvYWRBZGFwdGVyIH0gZnJvbSAnLi9jb3JlL2RlZmF1bHQtZmlsZS11cGxvYWQtYWRhcHRlcic7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi9jb3JlL3RoZW1lLmVudW0nO1xyXG5cclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctY2hhdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ25nLWNoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2Fzc2V0cy9pY29ucy5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvbG9hZGluZy1zcGlubmVyLmNzcycsXHJcbiAgICAgICAgJ2Fzc2V0cy9uZy1jaGF0LmNvbXBvbmVudC5kZWZhdWx0LmNzcycsXHJcbiAgICAgICAgJ2Fzc2V0cy90aGVtZXMvbmctY2hhdC50aGVtZS5kZWZhdWx0LnNjc3MnLFxyXG4gICAgICAgICdhc3NldHMvdGhlbWVzL25nLWNoYXQudGhlbWUuZGFyay5zY3NzJ1xyXG4gICAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ0NoYXQgaW1wbGVtZW50cyBPbkluaXQsIElDaGF0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIC8vIEV4cG9zZXMgZW51bXMgZm9yIHRoZSBuZy10ZW1wbGF0ZVxyXG4gICAgcHVibGljIFVzZXJTdGF0dXMgPSBVc2VyU3RhdHVzO1xyXG4gICAgcHVibGljIE1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBhZGFwdGVyOiBDaGF0QWRhcHRlcjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHVzZXJJZDogYW55O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgaXNDb2xsYXBzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIG1heGltaXplV2luZG93T25OZXdNZXNzYWdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSAgICBcclxuICAgIHB1YmxpYyBwb2xsRnJpZW5kc0xpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHBvbGxpbmdJbnRlcnZhbDogbnVtYmVyID0gNTAwMDtcclxuXHJcbiAgICBASW5wdXQoKSAgICBcclxuICAgIHB1YmxpYyBoaXN0b3J5RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgZW1vamlzRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgbGlua2Z5RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBhdWRpb0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgc2VhcmNoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgLy8gVE9ETzogVGhpcyBtaWdodCBuZWVkIGEgYmV0dGVyIGNvbnRlbnQgc3RyYXRlZ3lcclxuICAgIHB1YmxpYyBhdWRpb1NvdXJjZTogc3RyaW5nID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ycGFzY2hvYWwvbmctY2hhdC9tYXN0ZXIvc3JjL25nLWNoYXQvYXNzZXRzL25vdGlmaWNhdGlvbi53YXYnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgcGVyc2lzdFdpbmRvd3NTdGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJGcmllbmRzXCI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBtZXNzYWdlUGxhY2Vob2xkZXI6IHN0cmluZyA9IFwiVHlwZSBhIG1lc3NhZ2VcIjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlNlYXJjaFwiO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYnJvd3Nlck5vdGlmaWNhdGlvbnNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSAvLyBUT0RPOiBUaGlzIG1pZ2h0IG5lZWQgYSBiZXR0ZXIgY29udGVudCBzdHJhdGVneVxyXG4gICAgcHVibGljIGJyb3dzZXJOb3RpZmljYXRpb25JY29uU291cmNlOiBzdHJpbmcgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JwYXNjaG9hbC9uZy1jaGF0L21hc3Rlci9zcmMvbmctY2hhdC9hc3NldHMvbm90aWZpY2F0aW9uLnBuZyc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBicm93c2VyTm90aWZpY2F0aW9uVGl0bGU6IHN0cmluZyA9IFwiTmV3IG1lc3NhZ2UgZnJvbVwiO1xyXG4gICAgXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGhpc3RvcnlQYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBsb2NhbGl6YXRpb246IExvY2FsaXphdGlvbjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGhpZGVGcmllbmRzTGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgaGlkZUZyaWVuZHNMaXN0T25VbnN1cHBvcnRlZFZpZXdwb3J0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGZpbGVVcGxvYWRVcmw6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHRoZW1lOiBUaGVtZSA9IFRoZW1lLkxpZ2h0O1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgY3VzdG9tVGhlbWU6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBvblVzZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8VXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXI+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgb25Vc2VyQ2hhdE9wZW5lZDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIG9uVXNlckNoYXRDbG9zZWQ6IEV2ZW50RW1pdHRlcjxVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcj4oKTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgb25NZXNzYWdlc1NlZW46IEV2ZW50RW1pdHRlcjxNZXNzYWdlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxNZXNzYWdlW10+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyTm90aWZpY2F0aW9uc0Jvb3RzdHJhcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBoYXNQYWdlZEhpc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBEb24ndCB3YW50IHRvIGFkZCB0aGlzIGFzIGEgc2V0dGluZyB0byBzaW1wbGlmeSB1c2FnZS4gUHJldmlvdXMgcGxhY2Vob2xkZXIgYW5kIHRpdGxlIHNldHRpbmdzIGF2YWlsYWJsZSB0byBiZSB1c2VkLCBvciB1c2UgZnVsbCBMb2NhbGl6YXRpb24gb2JqZWN0LlxyXG4gICAgcHJpdmF0ZSBzdGF0dXNEZXNjcmlwdGlvbjogU3RhdHVzRGVzY3JpcHRpb24gPSB7XHJcbiAgICAgICAgb25saW5lOiAnT25saW5lJyxcclxuICAgICAgICBidXN5OiAnQnVzeScsXHJcbiAgICAgICAgYXdheTogJ0F3YXknLFxyXG4gICAgICAgIG9mZmxpbmU6ICdPZmZsaW5lJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGF1ZGlvRmlsZTogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoSW5wdXQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIHByb3RlY3RlZCB1c2VyczogVXNlcltdO1xyXG5cclxuICAgIHByaXZhdGUgZ2V0IGxvY2FsU3RvcmFnZUtleSgpOiBzdHJpbmcgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBuZy1jaGF0LXVzZXJzLSR7dGhpcy51c2VySWR9YDsgLy8gQXBwZW5kaW5nIHRoZSB1c2VyIGlkIHNvIHRoZSBzdGF0ZSBpcyB1bmlxdWUgcGVyIHVzZXIgaW4gYSBjb21wdXRlci4gICBcclxuICAgIH07IFxyXG5cclxuICAgIGdldCBmaWx0ZXJlZFVzZXJzKCk6IFVzZXJbXVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAvLyBTZWFyY2hlcyBpbiB0aGUgZnJpZW5kIGxpc3QgYnkgdGhlIGlucHV0dGVkIHNlYXJjaCBzdHJpbmdcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcnMuZmlsdGVyKHggPT4geC5kaXNwbGF5TmFtZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoSW5wdXQudG9VcHBlckNhc2UoKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lcyB0aGUgc2l6ZSBvZiBlYWNoIG9wZW5lZCB3aW5kb3cgdG8gY2FsY3VsYXRlIGhvdyBtYW55IHdpbmRvd3MgY2FuIGJlIG9wZW5lZCBvbiB0aGUgdmlld3BvcnQgYXQgdGhlIHNhbWUgdGltZS5cclxuICAgIHB1YmxpYyB3aW5kb3dTaXplRmFjdG9yOiBudW1iZXIgPSAzMjA7XHJcblxyXG4gICAgLy8gVG90YWwgd2lkdGggc2l6ZSBvZiB0aGUgZnJpZW5kcyBsaXN0IHNlY3Rpb25cclxuICAgIHB1YmxpYyBmcmllbmRzTGlzdFdpZHRoOiBudW1iZXIgPSAyNjI7XHJcblxyXG4gICAgLy8gQXZhaWxhYmxlIGFyZWEgdG8gcmVuZGVyIHRoZSBwbHVnaW5cclxuICAgIHByaXZhdGUgdmlld1BvcnRUb3RhbEFyZWE6IG51bWJlcjtcclxuICAgIFxyXG4gICAgLy8gU2V0IHRvIHRydWUgaWYgdGhlcmUgaXMgbm8gc3BhY2UgdG8gZGlzcGxheSBhdCBsZWFzdCBvbmUgY2hhdCB3aW5kb3cgYW5kICdoaWRlRnJpZW5kc0xpc3RPblVuc3VwcG9ydGVkVmlld3BvcnQnIGlzIHRydWVcclxuICAgIHB1YmxpYyB1bnN1cHBvcnRlZFZpZXdwb3J0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRmlsZSB1cGxvYWQgc3RhdGVcclxuICAgIHB1YmxpYyBpc1VwbG9hZGluZ0ZpbGUgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBmaWxlVXBsb2FkQWRhcHRlcjogSUZpbGVVcGxvYWRBZGFwdGVyO1xyXG5cclxuICAgIHdpbmRvd3M6IFdpbmRvd1tdID0gW107XHJcblxyXG4gICAgaXNCb290c3RyYXBwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCdjaGF0TWVzc2FnZXMnKSBjaGF0TWVzc2FnZUNsdXN0ZXJzOiBhbnk7XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignY2hhdFdpbmRvd0lucHV0JykgY2hhdFdpbmRvd0lucHV0czogYW55O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ25hdGl2ZUZpbGVJbnB1dCcpIG5hdGl2ZUZpbGVJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy5ib290c3RyYXBDaGF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgICBvblJlc2l6ZShldmVudDogYW55KXtcclxuICAgICAgIHRoaXMudmlld1BvcnRUb3RhbEFyZWEgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICB0aGlzLk5vcm1hbGl6ZVdpbmRvd3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVja3MgaWYgdGhlcmUgYXJlIG1vcmUgb3BlbmVkIHdpbmRvd3MgdGhhbiB0aGUgdmlldyBwb3J0IGNhbiBkaXNwbGF5XHJcbiAgICBwcml2YXRlIE5vcm1hbGl6ZVdpbmRvd3MoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBtYXhTdXBwb3J0ZWRPcGVuZWRXaW5kb3dzID0gTWF0aC5mbG9vcigodGhpcy52aWV3UG9ydFRvdGFsQXJlYSAtICghdGhpcy5oaWRlRnJpZW5kc0xpc3QgPyB0aGlzLmZyaWVuZHNMaXN0V2lkdGggOiAwKSkgLyB0aGlzLndpbmRvd1NpemVGYWN0b3IpO1xyXG4gICAgICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy53aW5kb3dzLmxlbmd0aCAtIG1heFN1cHBvcnRlZE9wZW5lZFdpbmRvd3M7XHJcblxyXG4gICAgICAgIGlmIChkaWZmZXJlbmNlID49IDApe1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3Muc3BsaWNlKHRoaXMud2luZG93cy5sZW5ndGggLSBkaWZmZXJlbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93c1N0YXRlKHRoaXMud2luZG93cyk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdwb3J0IHNob3VsZCBoYXZlIHNwYWNlIGZvciBhdCBsZWFzdCBvbmUgY2hhdCB3aW5kb3cuXHJcbiAgICAgICAgdGhpcy51bnN1cHBvcnRlZFZpZXdwb3J0ID0gdGhpcy5oaWRlRnJpZW5kc0xpc3RPblVuc3VwcG9ydGVkVmlld3BvcnQgJiYgbWF4U3VwcG9ydGVkT3BlbmVkV2luZG93cyA8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZXMgdGhlIGNoYXQgcGx1Z2luIGFuZCB0aGUgbWVzc2FnaW5nIGFkYXB0ZXJcclxuICAgIHByaXZhdGUgYm9vdHN0cmFwQ2hhdCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluaXRpYWxpemF0aW9uRXhjZXB0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlciAhPSBudWxsICYmIHRoaXMudXNlcklkICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydFRvdGFsQXJlYSA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRoZW1lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVEZWZhdWx0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQnJvd3Nlck5vdGlmaWNhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBCaW5kaW5nIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm1lc3NhZ2VSZWNlaXZlZEhhbmRsZXIgPSAodXNlciwgbXNnKSA9PiB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkKHVzZXIsIG1zZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZnJpZW5kc0xpc3RDaGFuZ2VkSGFuZGxlciA9ICh1c2VycykgPT4gdGhpcy5vbkZyaWVuZHNMaXN0Q2hhbmdlZCh1c2Vycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9hZGluZyBjdXJyZW50IHVzZXJzIGxpc3RcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvbGxGcmllbmRzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyBhIGxvbmcgcG9sbCBpbnRlcnZhbCB0byB1cGRhdGUgdGhlIGZyaWVuZHMgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hGcmllbmRzTGlzdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoRnJpZW5kc0xpc3QoZmFsc2UpLCB0aGlzLnBvbGxpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgcG9sbGluZyB3YXMgZGlzYWJsZWQsIGEgZnJpZW5kcyBsaXN0IHVwZGF0ZSBtZWNoYW5pc20gd2lsbCBoYXZlIHRvIGJlIGltcGxlbWVudGVkIGluIHRoZSBDaGF0QWRhcHRlci5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRnJpZW5kc0xpc3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyQXVkaW9GaWxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNQYWdlZEhpc3RvcnkgPSB0aGlzLmFkYXB0ZXIgaW5zdGFuY2VvZiBQYWdlZEhpc3RvcnlDaGF0QWRhcHRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZVVwbG9hZFVybCAmJiB0aGlzLmZpbGVVcGxvYWRVcmwgIT09IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlVXBsb2FkQWRhcHRlciA9IG5ldyBEZWZhdWx0RmlsZVVwbG9hZEFkYXB0ZXIodGhpcy5maWxlVXBsb2FkVXJsLCB0aGlzLl9odHRwQ2xpZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQm9vdHN0cmFwcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChleClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25FeGNlcHRpb24gPSBleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQm9vdHN0cmFwcGVkKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5nLWNoYXQgY29tcG9uZW50IGNvdWxkbid0IGJlIGJvb3RzdHJhcHBlZC5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VySWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibmctY2hhdCBjYW4ndCBiZSBpbml0aWFsaXplZCB3aXRob3V0IGFuIHVzZXIgaWQuIFBsZWFzZSBtYWtlIHN1cmUgeW91J3ZlIHByb3ZpZGVkIGFuIHVzZXJJZCBhcyBhIHBhcmFtZXRlciBvZiB0aGUgbmctY2hhdCBjb21wb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibmctY2hhdCBjYW4ndCBiZSBib290c3RyYXBwZWQgd2l0aG91dCBhIENoYXRBZGFwdGVyLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSd2ZSBwcm92aWRlZCBhIENoYXRBZGFwdGVyIGltcGxlbWVudGF0aW9uIGFzIGEgcGFyYW1ldGVyIG9mIHRoZSBuZy1jaGF0IGNvbXBvbmVudC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluaXRpYWxpemF0aW9uRXhjZXB0aW9uKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBBbiBleGNlcHRpb24gaGFzIG9jY3VycmVkIHdoaWxlIGluaXRpYWxpemluZyBuZy1jaGF0LiBEZXRhaWxzOiAke2luaXRpYWxpemF0aW9uRXhjZXB0aW9uLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGluaXRpYWxpemF0aW9uRXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplcyBicm93c2VyIG5vdGlmaWNhdGlvbnNcclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZUJyb3dzZXJOb3RpZmljYXRpb25zKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5icm93c2VyTm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgKFwiTm90aWZpY2F0aW9uXCIgaW4gd2luZG93KSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icm93c2VyTm90aWZpY2F0aW9uc0Jvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZXMgZGVmYXVsdCB0ZXh0XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVEZWZhdWx0VGV4dCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGl6YXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsaXphdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VQbGFjZWhvbGRlcjogdGhpcy5tZXNzYWdlUGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hQbGFjZWhvbGRlcjogdGhpcy5zZWFyY2hQbGFjZWhvbGRlciwgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c0Rlc2NyaXB0aW9uOiB0aGlzLnN0YXR1c0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgYnJvd3Nlck5vdGlmaWNhdGlvblRpdGxlOiB0aGlzLmJyb3dzZXJOb3RpZmljYXRpb25UaXRsZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNZXNzYWdlSGlzdG9yeVBsYWNlaG9sZGVyOiBcIkxvYWQgb2xkZXIgbWVzc2FnZXNcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVUaGVtZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVGhlbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRoZW1lID0gVGhlbWUuQ3VzdG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnRoZW1lICE9IFRoZW1lLkxpZ2h0ICYmIHRoaXMudGhlbWUgIT0gVGhlbWUuRGFyaylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFVzZSBlczIwMTcgaW4gZnV0dXJlIHdpdGggT2JqZWN0LnZhbHVlcyhUaGVtZSkuaW5jbHVkZXModGhpcy50aGVtZSkgdG8gZG8gdGhpcyBjaGVja1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdGhlbWUgY29uZmlndXJhdGlvbiBmb3IgbmctY2hhdC4gXCIke3RoaXMudGhlbWV9XCIgaXMgbm90IGEgdmFsaWQgdGhlbWUgdmFsdWUuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlbmRzIGEgcmVxdWVzdCB0byBsb2FkIHRoZSBmcmllbmRzIGxpc3RcclxuICAgIHByaXZhdGUgZmV0Y2hGcmllbmRzTGlzdChpc0Jvb3RzdHJhcHBpbmc6IGJvb2xlYW4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLmxpc3RGcmllbmRzKClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKCh1c2VyczogVXNlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNCb290c3RyYXBwaW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVXaW5kb3dzU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoTWVzc2FnZUhpc3Rvcnkod2luZG93OiBXaW5kb3cpIHtcclxuICAgICAgICAvLyBOb3QgaWRlYWwgYnV0IHdpbGwga2VlcCB0aGlzIHVudGlsIHdlIGRlY2lkZSBpZiB3ZSBhcmUgc2hpcHBpbmcgcGFnaW5hdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGFkYXB0ZXJcclxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyIGluc3RhbmNlb2YgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cuaXNMb2FkaW5nSGlzdG9yeSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZ2V0TWVzc2FnZUhpc3RvcnlCeVBhZ2Uod2luZG93LmNoYXR0aW5nVG8uaWQsIHRoaXMuaGlzdG9yeVBhZ2VTaXplLCArK3dpbmRvdy5oaXN0b3J5UGFnZSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKHJlc3VsdDogTWVzc2FnZVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goKG1lc3NhZ2UpID0+IHRoaXMuYXNzZXJ0TWVzc2FnZVR5cGUobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZXNzYWdlcyA9IHJlc3VsdC5jb25jYXQod2luZG93Lm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaXNMb2FkaW5nSGlzdG9yeSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uOiBTY3JvbGxEaXJlY3Rpb24gPSAod2luZG93Lmhpc3RvcnlQYWdlID09IDEpID8gU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSA6IFNjcm9sbERpcmVjdGlvbi5Ub3A7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhhc01vcmVNZXNzYWdlcyA9IHJlc3VsdC5sZW5ndGggPT0gdGhpcy5oaXN0b3J5UGFnZVNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uRmV0Y2hNZXNzYWdlSGlzdG9yeUxvYWRlZChyZXN1bHQsIHdpbmRvdywgZGlyZWN0aW9uLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZ2V0TWVzc2FnZUhpc3Rvcnkod2luZG93LmNoYXR0aW5nVG8uaWQpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXN1bHQ6IE1lc3NhZ2VbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKChtZXNzYWdlKSA9PiB0aGlzLmFzc2VydE1lc3NhZ2VUeXBlKG1lc3NhZ2UpKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZXNzYWdlcyA9IHJlc3VsdC5jb25jYXQod2luZG93Lm1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaXNMb2FkaW5nSGlzdG9yeSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uRmV0Y2hNZXNzYWdlSGlzdG9yeUxvYWRlZChyZXN1bHQsIHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZldGNoTWVzc2FnZUhpc3RvcnlMb2FkZWQobWVzc2FnZXM6IE1lc3NhZ2VbXSwgd2luZG93OiBXaW5kb3csIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uLCBmb3JjZU1hcmtNZXNzYWdlc0FzU2VlbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjcm9sbENoYXRXaW5kb3cod2luZG93LCBkaXJlY3Rpb24pXHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuaGFzRm9jdXMgfHwgZm9yY2VNYXJrTWVzc2FnZXNBc1NlZW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB1bnNlZW5NZXNzYWdlcyA9IG1lc3NhZ2VzLmZpbHRlcihtID0+ICFtLnNlZW5Pbik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcmtNZXNzYWdlc0FzUmVhZCh1bnNlZW5NZXNzYWdlcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25NZXNzYWdlc1NlZW4uZW1pdCh1bnNlZW5NZXNzYWdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZXMgdGhlIGZyaWVuZHMgbGlzdCB2aWEgdGhlIGV2ZW50IGhhbmRsZXJcclxuICAgIHByaXZhdGUgb25GcmllbmRzTGlzdENoYW5nZWQodXNlcnM6IFVzZXJbXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAodXNlcnMpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGVzIHJlY2VpdmVkIG1lc3NhZ2VzIGJ5IHRoZSBhZGFwdGVyXHJcbiAgICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgbWVzc2FnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjaGF0V2luZG93ID0gdGhpcy5vcGVuQ2hhdFdpbmRvdyh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXJ0TWVzc2FnZVR5cGUobWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNoYXRXaW5kb3dbMV0gfHwgIXRoaXMuaGlzdG9yeUVuYWJsZWQpe1xyXG4gICAgICAgICAgICAgICAgY2hhdFdpbmRvd1swXS5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhdFdpbmRvdyhjaGF0V2luZG93WzBdLCBTY3JvbGxEaXJlY3Rpb24uQm90dG9tKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhdFdpbmRvd1swXS5oYXNGb2N1cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtNZXNzYWdlc0FzUmVhZChbbWVzc2FnZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25NZXNzYWdlc1NlZW4uZW1pdChbbWVzc2FnZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVtaXRNZXNzYWdlU291bmQoY2hhdFdpbmRvd1swXSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHaXRodWIgaXNzdWUgIzU4IFxyXG4gICAgICAgICAgICAvLyBEbyBub3QgcHVzaCBicm93c2VyIG5vdGlmaWNhdGlvbnMgd2l0aCBtZXNzYWdlIGNvbnRlbnQgZm9yIHByaXZhY3kgcHVycG9zZXMgaWYgdGhlICdtYXhpbWl6ZVdpbmRvd09uTmV3TWVzc2FnZScgc2V0dGluZyBpcyBvZmYgYW5kIHRoaXMgaXMgYSBuZXcgY2hhdCB3aW5kb3cuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heGltaXplV2luZG93T25OZXdNZXNzYWdlIHx8ICghY2hhdFdpbmRvd1sxXSAmJiAhY2hhdFdpbmRvd1swXS5pc0NvbGxhcHNlZCkpXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG1lc3NhZ2VzIGFyZSBub3QgcHVzaGVkIGJlY2F1c2UgdGhleSBhcmUgbG9hZGVkIGJ5IGZldGNoaW5nIHRoZSBoaXN0b3J5IGhlbmNlIHdoeSB3ZSBzdXBwbHkgdGhlIG1lc3NhZ2UgaGVyZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0QnJvd3Nlck5vdGlmaWNhdGlvbihjaGF0V2luZG93WzBdLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVucyBhIG5ldyBjaGF0IHdoaW5kb3cuIFRha2VzIGNhcmUgb2YgYXZhaWxhYmxlIHZpZXdwb3J0XHJcbiAgICAvLyBSZXR1cm5zID0+IFtXaW5kb3c6IFdpbmRvdyBvYmplY3QgcmVmZXJlbmNlLCBib29sZWFuOiBJbmRpY2F0ZXMgaWYgdGhpcyB3aW5kb3cgaXMgYSBuZXcgY2hhdCB3aW5kb3ddXHJcbiAgICBwdWJsaWMgb3BlbkNoYXRXaW5kb3codXNlcjogVXNlciwgZm9jdXNPbk5ld1dpbmRvdzogYm9vbGVhbiA9IGZhbHNlLCBpbnZva2VkQnlVc2VyQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZSk6IFtXaW5kb3csIGJvb2xlYW5dXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSXMgdGhpcyB3aW5kb3cgb3BlbmVkP1xyXG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB0aGlzLndpbmRvd3MuZmluZCh4ID0+IHguY2hhdHRpbmdUby5pZCA9PSB1c2VyLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFvcGVuZWRXaW5kb3cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaW52b2tlZEJ5VXNlckNsaWNrKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVzZXJDbGlja2VkLmVtaXQodXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlZmVyIHRvIGlzc3VlICM1OCBvbiBHaXRodWIgXHJcbiAgICAgICAgICAgIGxldCBjb2xsYXBzZVdpbmRvdyA9IGludm9rZWRCeVVzZXJDbGljayA/IGZhbHNlIDogIXRoaXMubWF4aW1pemVXaW5kb3dPbk5ld01lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3Q2hhdFdpbmRvdzogV2luZG93ID0ge1xyXG4gICAgICAgICAgICAgICAgY2hhdHRpbmdUbzogdXNlcixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiAgW10sXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdIaXN0b3J5OiB0aGlzLmhpc3RvcnlFbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgaGFzRm9jdXM6IGZhbHNlLCAvLyBUaGlzIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlICduZXdNZXNzYWdlJyBpbnB1dCBnZXRzIHRoZSBjdXJyZW50IGZvY3VzXHJcbiAgICAgICAgICAgICAgICBpc0NvbGxhcHNlZDogY29sbGFwc2VXaW5kb3csXHJcbiAgICAgICAgICAgICAgICBoYXNNb3JlTWVzc2FnZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGlzdG9yeVBhZ2U6IDBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvYWRzIHRoZSBjaGF0IGhpc3RvcnkgdmlhIGFuIFJ4SnMgT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5RW5hYmxlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaE1lc3NhZ2VIaXN0b3J5KG5ld0NoYXRXaW5kb3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpbmRvd3MudW5zaGlmdChuZXdDaGF0V2luZG93KTtcclxuXHJcbiAgICAgICAgICAgIC8vIElzIHRoZXJlIGVub3VnaCBzcGFjZSBsZWZ0IGluIHRoZSB2aWV3IHBvcnQgP1xyXG4gICAgICAgICAgICBpZiAodGhpcy53aW5kb3dzLmxlbmd0aCAqIHRoaXMud2luZG93U2l6ZUZhY3RvciA+PSB0aGlzLnZpZXdQb3J0VG90YWxBcmVhIC0gKCF0aGlzLmhpZGVGcmllbmRzTGlzdCA/IHRoaXMuZnJpZW5kc0xpc3RXaWR0aCA6IDApKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5kb3dzLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd3NTdGF0ZSh0aGlzLndpbmRvd3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZvY3VzT25OZXdXaW5kb3cgJiYgIWNvbGxhcHNlV2luZG93KSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c09uV2luZG93KG5ld0NoYXRXaW5kb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uVXNlckNoYXRPcGVuZWQuZW1pdCh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3Q2hhdFdpbmRvdywgdHJ1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybnMgdGhlIGV4aXN0aW5nIGNoYXQgd2luZG93ICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIFtvcGVuZWRXaW5kb3csIGZhbHNlXTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvY3VzIG9uIHRoZSBpbnB1dCBlbGVtZW50IG9mIHRoZSBzdXBwbGllZCB3aW5kb3dcclxuICAgIHByaXZhdGUgZm9jdXNPbldpbmRvdyh3aW5kb3c6IFdpbmRvdywgY2FsbGJhY2s6IEZ1bmN0aW9uID0gKCkgPT4ge30pIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB3aW5kb3dJbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcbiAgICAgICAgaWYgKHdpbmRvd0luZGV4ID49IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXRXaW5kb3dJbnB1dHMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VJbnB1dFRvRm9jdXMgPSB0aGlzLmNoYXRXaW5kb3dJbnB1dHMudG9BcnJheSgpW3dpbmRvd0luZGV4XTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJbnB1dFRvRm9jdXMubmF0aXZlRWxlbWVudC5mb2N1cygpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY3JvbGxzIGEgY2hhdCB3aW5kb3cgbWVzc2FnZSBmbG93IHRvIHRoZSBib3R0b21cclxuICAgIHByaXZhdGUgc2Nyb2xsQ2hhdFdpbmRvdyh3aW5kb3c6IFdpbmRvdywgZGlyZWN0aW9uOiBTY3JvbGxEaXJlY3Rpb24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNDb2xsYXBzZWQpe1xyXG4gICAgICAgICAgICBsZXQgd2luZG93SW5kZXggPSB0aGlzLndpbmRvd3MuaW5kZXhPZih3aW5kb3cpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXRNZXNzYWdlQ2x1c3RlcnMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXRXaW5kb3cgPSB0aGlzLmNoYXRNZXNzYWdlQ2x1c3RlcnMudG9BcnJheSgpW3dpbmRvd0luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFdpbmRvdylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5jaGF0TWVzc2FnZUNsdXN0ZXJzLnRvQXJyYXkoKVt3aW5kb3dJbmRleF0ubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gKCBkaXJlY3Rpb24gPT09IFNjcm9sbERpcmVjdGlvbi5Ub3AgKSA/IDAgOiBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFya3MgYWxsIG1lc3NhZ2VzIHByb3ZpZGVkIGFzIHJlYWQgd2l0aCB0aGUgY3VycmVudCB0aW1lLlxyXG4gICAgcHVibGljIG1hcmtNZXNzYWdlc0FzUmVhZChtZXNzYWdlczogTWVzc2FnZVtdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzLmZvckVhY2goKG1zZyk9PntcclxuICAgICAgICAgICAgbXNnLnNlZW5PbiA9IGN1cnJlbnREYXRlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1ZmZlcnMgYXVkaW8gZmlsZSAoRm9yIGNvbXBvbmVudCdzIGJvb3RzdHJhcHBpbmcpXHJcbiAgICBwcml2YXRlIGJ1ZmZlckF1ZGlvRmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1NvdXJjZSAmJiB0aGlzLmF1ZGlvU291cmNlLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvRmlsZSA9IG5ldyBBdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvRmlsZS5zcmMgPSB0aGlzLmF1ZGlvU291cmNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvRmlsZS5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtaXRzIGEgbWVzc2FnZSBub3RpZmljYXRpb24gYXVkaW8gaWYgZW5hYmxlZCBhZnRlciBldmVyeSBtZXNzYWdlIHJlY2VpdmVkXHJcbiAgICBwcml2YXRlIGVtaXRNZXNzYWdlU291bmQod2luZG93OiBXaW5kb3cpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9FbmFibGVkICYmICF3aW5kb3cuaGFzRm9jdXMgJiYgdGhpcy5hdWRpb0ZpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbWl0cyBhIGJyb3dzZXIgbm90aWZpY2F0aW9uXHJcbiAgICBwcml2YXRlIGVtaXRCcm93c2VyTm90aWZpY2F0aW9uKHdpbmRvdzogV2luZG93LCBtZXNzYWdlOiBNZXNzYWdlKTogdm9pZFxyXG4gICAgeyAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5icm93c2VyTm90aWZpY2F0aW9uc0Jvb3RzdHJhcHBlZCAmJiAhd2luZG93Lmhhc0ZvY3VzICYmIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oYCR7dGhpcy5sb2NhbGl6YXRpb24uYnJvd3Nlck5vdGlmaWNhdGlvblRpdGxlfSAke3dpbmRvdy5jaGF0dGluZ1RvLmRpc3BsYXlOYW1lfWAsIHtcclxuICAgICAgICAgICAgICAgICdib2R5JzogbWVzc2FnZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgJ2ljb24nOiB0aGlzLmJyb3dzZXJOb3RpZmljYXRpb25JY29uU291cmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgfSwgbWVzc2FnZS5tZXNzYWdlLmxlbmd0aCA8PSA1MCA/IDUwMDAgOiA3MDAwKTsgLy8gTW9yZSB0aW1lIHRvIHJlYWQgbG9uZ2VyIG1lc3NhZ2VzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmVzIGN1cnJlbnQgd2luZG93cyBzdGF0ZSBpbnRvIGxvY2FsIHN0b3JhZ2UgaWYgcGVyc2lzdGVuY2UgaXMgZW5hYmxlZFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVXaW5kb3dzU3RhdGUod2luZG93czogV2luZG93W10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyc2lzdFdpbmRvd3NTdGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB1c2Vyc0lkcyA9IHdpbmRvd3MubWFwKCh3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdy5jaGF0dGluZ1RvLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh1c2Vyc0lkcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RvcmVXaW5kb3dzU3RhdGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc2lzdFdpbmRvd3NTdGF0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0cmluZ2ZpZWRVc2VySWRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5sb2NhbFN0b3JhZ2VLZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdmaWVkVXNlcklkcyAmJiBzdHJpbmdmaWVkVXNlcklkcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VySWRzID0gPG51bWJlcltdPkpTT04ucGFyc2Uoc3RyaW5nZmllZFVzZXJJZHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcnNUb1Jlc3RvcmUgPSB0aGlzLnVzZXJzLmZpbHRlcih1ID0+IHVzZXJJZHMuaW5kZXhPZih1LmlkKSA+PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNUb1Jlc3RvcmUuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGF0V2luZG93KHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlc3RvcmluZyBuZy1jaGF0IHdpbmRvd3Mgc3RhdGUuIERldGFpbHM6ICR7ZXh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldHMgY2xvc2VzdCBvcGVuIHdpbmRvdyBpZiBhbnkuIE1vc3QgcmVjZW50IG9wZW5lZCBoYXMgcHJpb3JpdHkgKFJpZ2h0KVxyXG4gICAgcHJpdmF0ZSBnZXRDbG9zZXN0V2luZG93KHdpbmRvdzogV2luZG93KTogV2luZG93IHwgdW5kZWZpbmVkXHJcbiAgICB7ICAgXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy53aW5kb3dzLmluZGV4T2Yod2luZG93KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvd3NbaW5kZXggLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT0gMCAmJiB0aGlzLndpbmRvd3MubGVuZ3RoID4gMSlcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpbmRvd3NbaW5kZXggKyAxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3NlcnRNZXNzYWdlVHlwZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQWx3YXlzIGZhbGxiYWNrIHRvIFwiVGV4dFwiIG1lc3NhZ2VzIHRvIGF2b2lkIHJlbmRlbnJpbmcgaXNzdWVzXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnR5cGUgPSBNZXNzYWdlVHlwZS5UZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm5zIHRoZSB0b3RhbCB1bnJlYWQgbWVzc2FnZXMgZnJvbSBhIGNoYXQgd2luZG93LiBUT0RPOiBDb3VsZCB1c2Ugc29tZSBBbmd1bGFyIHBpcGVzIGluIHRoZSBmdXR1cmUgXHJcbiAgICB1bnJlYWRNZXNzYWdlc1RvdGFsKHdpbmRvdzogV2luZG93KTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHdpbmRvdyl7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFVucmVhZE1lc3NhZ2VzID0gd2luZG93Lm1lc3NhZ2VzLmZpbHRlcih4ID0+IHguZnJvbUlkICE9IHRoaXMudXNlcklkICYmICF4LnNlZW5PbikubGVuZ3RoO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRvdGFsVW5yZWFkTWVzc2FnZXMgPiAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxVbnJlYWRNZXNzYWdlcyA+IDk5KSBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIFwiOTkrXCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh0b3RhbFVucmVhZE1lc3NhZ2VzKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIEVtcHR5IGZhbGxiYWNrLlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVucmVhZE1lc3NhZ2VzVG90YWxCeVVzZXIodXNlcjogVXNlcik6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB0aGlzLndpbmRvd3MuZmluZCh4ID0+IHguY2hhdHRpbmdUby5pZCA9PSB1c2VyLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKG9wZW5lZFdpbmRvdyl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVucmVhZE1lc3NhZ2VzVG90YWwob3BlbmVkV2luZG93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIEVtcHR5IGZhbGxiYWNrLlxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICBNb25pdG9ycyBwcmVzc2VkIGtleXMgb24gYSBjaGF0IHdpbmRvd1xyXG4gICAgICAgIC0gRGlzcGF0Y2hlcyBhIG1lc3NhZ2Ugd2hlbiB0aGUgRU5URVIga2V5IGlzIHByZXNzZWRcclxuICAgICAgICAtIFRhYnMgYmV0d2VlbiB3aW5kb3dzIG9uIFRBQiBvciBTSElGVCArIFRBQlxyXG4gICAgICAgIC0gQ2xvc2VzIHRoZSBjdXJyZW50IGZvY3VzZWQgd2luZG93IG9uIEVTQ1xyXG4gICAgKi9cclxuICAgIG9uQ2hhdElucHV0VHlwZWQoZXZlbnQ6IGFueSwgd2luZG93OiBXaW5kb3cpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubmV3TWVzc2FnZSAmJiB3aW5kb3cubmV3TWVzc2FnZS50cmltKCkgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmZyb21JZCA9IHRoaXMudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UudG9JZCA9IHdpbmRvdy5jaGF0dGluZ1RvLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZSA9IHdpbmRvdy5uZXdNZXNzYWdlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZW5kTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV3TWVzc2FnZSA9IFwiXCI7IC8vIFJlc2V0cyB0aGUgbmV3IG1lc3NhZ2UgaW5wdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbENoYXRXaW5kb3cod2luZG93LCBTY3JvbGxEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFdpbmRvd0luZGV4ID0gdGhpcy53aW5kb3dzLmluZGV4T2Yod2luZG93KTtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSW5wdXRUb0ZvY3VzID0gdGhpcy5jaGF0V2luZG93SW5wdXRzLnRvQXJyYXkoKVtjdXJyZW50V2luZG93SW5kZXggKyAoZXZlbnQuc2hpZnRLZXkgPyAxIDogLTEpXTsgLy8gR29lcyBiYWNrIG9uIHNoaWZ0ICsgdGFiXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlSW5wdXRUb0ZvY3VzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVkZ2Ugd2luZG93cywgZ28gdG8gc3RhcnQgb3IgZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlucHV0VG9Gb2N1cyA9IHRoaXMuY2hhdFdpbmRvd0lucHV0cy50b0FycmF5KClbY3VycmVudFdpbmRvd0luZGV4ID4gMCA/IDAgOiB0aGlzLmNoYXRXaW5kb3dJbnB1dHMubGVuZ3RoIC0gMV07IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJbnB1dFRvRm9jdXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI3OlxyXG4gICAgICAgICAgICAgICAgbGV0IGNsb3Nlc3RXaW5kb3cgPSB0aGlzLmdldENsb3Nlc3RXaW5kb3cod2luZG93KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdFdpbmRvdylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzT25XaW5kb3coY2xvc2VzdFdpbmRvdywgKCkgPT4geyB0aGlzLm9uQ2xvc2VDaGF0V2luZG93KHdpbmRvdyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZUNoYXRXaW5kb3cod2luZG93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvc2VzIGEgY2hhdCB3aW5kb3cgdmlhIHRoZSBjbG9zZSAnWCcgYnV0dG9uXHJcbiAgICBvbkNsb3NlQ2hhdFdpbmRvdyh3aW5kb3c6IFdpbmRvdyk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy53aW5kb3dzLmluZGV4T2Yod2luZG93KTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5kb3dzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlV2luZG93c1N0YXRlKHRoaXMud2luZG93cyk7XHJcblxyXG4gICAgICAgIHRoaXMub25Vc2VyQ2hhdENsb3NlZC5lbWl0KHdpbmRvdy5jaGF0dGluZ1RvKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGUgZnJpZW5kcyBsaXN0IHZpc2liaWxpdHlcclxuICAgIG9uQ2hhdFRpdGxlQ2xpY2tlZChldmVudDogYW55KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGVzIGEgY2hhdCB3aW5kb3cgdmlzaWJpbGl0eSBiZXR3ZWVuIG1heGltaXplZC9taW5pbWl6ZWRcclxuICAgIG9uQ2hhdFdpbmRvd0NsaWNrZWQod2luZG93OiBXaW5kb3cpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93LmlzQ29sbGFwc2VkID0gIXdpbmRvdy5pc0NvbGxhcHNlZDtcclxuICAgICAgICB0aGlzLnNjcm9sbENoYXRXaW5kb3cod2luZG93LCBTY3JvbGxEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3NlcnRzIGlmIGEgdXNlciBhdmF0YXIgaXMgdmlzaWJsZSBpbiBhIGNoYXQgY2x1c3RlclxyXG4gICAgaXNBdmF0YXJWaXNpYmxlKHdpbmRvdzogV2luZG93LCBtZXNzYWdlOiBNZXNzYWdlLCBpbmRleDogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmZyb21JZCAhPSB0aGlzLnVzZXJJZCl7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBGaXJzdCBtZXNzYWdlLCBnb29kIHRvIHNob3cgdGhlIHRodW1ibmFpbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcHJldmlvdXMgbWVzc2FnZSBiZWxvbmdzIHRvIHRoZSBzYW1lIHVzZXIsIGlmIGl0IGJlbG9uZ3MgdGhlcmUgaXMgbm8gbmVlZCB0byBzaG93IHRoZSBhdmF0YXIgYWdhaW4gdG8gZm9ybSB0aGUgbWVzc2FnZSBjbHVzdGVyXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm1lc3NhZ2VzW2luZGV4IC0gMV0uZnJvbUlkICE9IG1lc3NhZ2UuZnJvbUlkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvZ2dsZXMgYSB3aW5kb3cgZm9jdXMgb24gdGhlIGZvY3VzL2JsdXIgb2YgYSAnbmV3TWVzc2FnZScgaW5wdXRcclxuICAgIHRvZ2dsZVdpbmRvd0ZvY3VzKHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5oYXNGb2N1cyA9ICF3aW5kb3cuaGFzRm9jdXM7XHJcbiAgICAgICAgaWYod2luZG93Lmhhc0ZvY3VzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVucmVhZE1lc3NhZ2VzID0gd2luZG93Lm1lc3NhZ2VzLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2Uuc2Vlbk9uID09IG51bGwgJiYgbWVzc2FnZS50b0lkID09IHRoaXMudXNlcklkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh1bnJlYWRNZXNzYWdlcyAmJiB1bnJlYWRNZXNzYWdlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtNZXNzYWdlc0FzUmVhZCh1bnJlYWRNZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTWVzc2FnZXNTZWVuLmVtaXQodW5yZWFkTWVzc2FnZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFtMb2NhbGl6ZWRdIFJldHVybnMgdGhlIHN0YXR1cyBkZXNjcmlwdGl2ZSB0aXRsZVxyXG4gICAgZ2V0U3RhdHVzVGl0bGUoc3RhdHVzOiBVc2VyU3RhdHVzKSA6IGFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RhdHVzID0gc3RhdHVzLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxpemF0aW9uLnN0YXR1c0Rlc2NyaXB0aW9uW2N1cnJlbnRTdGF0dXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJPcGVuQ2hhdFdpbmRvdyh1c2VyOiBVc2VyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHVzZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5DaGF0V2luZG93KHVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyQ2xvc2VDaGF0V2luZG93KHVzZXJJZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9wZW5lZFdpbmRvdyA9IHRoaXMud2luZG93cy5maW5kKHggPT4geC5jaGF0dGluZ1RvLmlkID09IHVzZXJJZCk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuZWRXaW5kb3cpe1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2VDaGF0V2luZG93KG9wZW5lZFdpbmRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJUb2dnbGVDaGF0V2luZG93VmlzaWJpbGl0eSh1c2VySWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB0aGlzLndpbmRvd3MuZmluZCh4ID0+IHguY2hhdHRpbmdUby5pZCA9PSB1c2VySWQpO1xyXG5cclxuICAgICAgICBpZiAob3BlbmVkV2luZG93KXtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYXRXaW5kb3dDbGlja2VkKG9wZW5lZFdpbmRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyaWdnZXJzIG5hdGl2ZSBmaWxlIHVwbG9hZCBmb3IgZmlsZSBzZWxlY3Rpb24gZnJvbSB0aGUgdXNlclxyXG4gICAgdHJpZ2dlck5hdGl2ZUZpbGVVcGxvYWQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmF0aXZlRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGVzIGZpbGUgc2VsZWN0aW9uIGFuZCB1cGxvYWRzIHRoZSBzZWxlY3RlZCBmaWxlIHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBhZGFwdGVyXHJcbiAgICBvbkZpbGVDaG9zZW4od2luZG93OiBXaW5kb3cpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gdGhpcy5uYXRpdmVGaWxlSW5wdXQubmF0aXZlRWxlbWVudC5maWxlc1swXTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1VwbG9hZGluZ0ZpbGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgZmFpbHVyZVxyXG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZEFkYXB0ZXIudXBsb2FkRmlsZShmaWxlLCB3aW5kb3cuY2hhdHRpbmdUbylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShmaWxlTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXBsb2FkaW5nRmlsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZpbGVNZXNzYWdlLmZyb21JZCA9IHRoaXMudXNlcklkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFB1c2ggZmlsZSBtZXNzYWdlIHRvIGN1cnJlbnQgdXNlciB3aW5kb3cgICBcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tZXNzYWdlcy5wdXNoKGZpbGVNZXNzYWdlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNlbmRNZXNzYWdlKGZpbGVNZXNzYWdlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzZXRzIHRoZSBmaWxlIHVwbG9hZCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmxldCBlbW9qaURpY3Rpb25hcnkgPSBbXHJcbiAgICB7IHBhdHRlcm5zOiBbJzopJywgJzotKScsICc9KSddLCB1bmljb2RlOiAnw7DCn8KYwoMnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzpEJywgJzotRCcsICc9RCddLCB1bmljb2RlOiAnw7DCn8KYwoAnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzooJywgJzotKCcsICc9KCddLCB1bmljb2RlOiAnw7DCn8KZwoEnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzp8JywgJzotfCcsICc9fCddLCB1bmljb2RlOiAnw7DCn8KYwpAnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzoqJywgJzotKicsICc9KiddLCB1bmljb2RlOiAnw7DCn8KYwpknIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJ1RfVCcsICdULlQnXSwgdW5pY29kZTogJ8Owwp/CmMKtJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6TycsICc6LU8nLCAnPU8nLCAnOm8nLCAnOi1vJywgJz1vJ10sIHVuaWNvZGU6ICfDsMKfwpjCricgfSxcclxuICAgIHsgcGF0dGVybnM6IFsnOlAnLCAnOi1QJywgJz1QJywgJzpwJywgJzotcCcsICc9cCddLCB1bmljb2RlOiAnw7DCn8KYwosnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJz4uPCddLCB1bmljb2RlOiAnw7DCn8KYwqMnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJ0AuQCddLCB1bmljb2RlOiAnw7DCn8KYwrUnIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJyouKiddLCB1bmljb2RlOiAnw7DCn8KYwo0nIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzwzJ10sIHVuaWNvZGU6ICfDosKdwqTDr8K4wo8nIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJ14uXiddLCB1bmljb2RlOiAnw7DCn8KYwoonIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzorMSddLCB1bmljb2RlOiAnw7DCn8KRwo0nIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzotMSddLCB1bmljb2RlOiAnw7DCn8KRwo4nIH1cclxuXTtcclxuXHJcbi8qXHJcbiAqIFRyYW5zZm9ybXMgY29tbW9uIGVtb2ppIHRleHQgdG8gVVRGIGVuY29kZWQgZW1vamlzXHJcbiovXHJcbkBQaXBlKHtuYW1lOiAnZW1vamlmeSd9KVxyXG5leHBvcnQgY2xhc3MgRW1vamlmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShtZXNzYWdlOiBzdHJpbmcsIHBpcGVFbmFibGVkOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAocGlwZUVuYWJsZWQgJiYgbWVzc2FnZSAmJiBtZXNzYWdlLmxlbmd0aCA+IDEpIHsgIFxyXG4gICAgICAgICAgICBlbW9qaURpY3Rpb25hcnkuZm9yRWFjaChlbW9qaSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbW9qaS5wYXR0ZXJucy5mb3JFYWNoKHBhdHRlcm4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UocGF0dGVybiwgZW1vamkudW5pY29kZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qXHJcbiAqIFRyYW5zZm9ybXMgdGV4dCBjb250YWluaW5nIFVSTHMgb3IgRS1tYWlscyB0byB2YWxpZCBsaW5rcy9tYWlsdG9zXHJcbiovXHJcbkBQaXBlKHtuYW1lOiAnbGlua2Z5J30pXHJcbmV4cG9ydCBjbGFzcyBMaW5rZnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0obWVzc2FnZTogc3RyaW5nLCBwaXBlRW5hYmxlZDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBpcGVFbmFibGVkICYmIG1lc3NhZ2UgJiYgbWVzc2FnZS5sZW5ndGggPiAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHJlcGxhY2VkVGV4dDtcclxuICAgICAgICAgICAgbGV0IHJlcGxhY2VQYXR0ZXJuUHJvdG9jb2w7XHJcbiAgICAgICAgICAgIGxldCByZXBsYWNlUGF0dGVybldXVztcclxuICAgICAgICAgICAgbGV0IHJlcGxhY2VQYXR0ZXJuTWFpbFRvO1xyXG5cclxuICAgICAgICAgICAgLy8gVVJMcyBzdGFydGluZyB3aXRoIGh0dHA6Ly8sIGh0dHBzOi8vLCBvciBmdHA6Ly9cclxuICAgICAgICAgICAgcmVwbGFjZVBhdHRlcm5Qcm90b2NvbCA9IC8oXFxiKGh0dHBzP3xmdHApOlxcL1xcL1stQS1aMC05KyZAI1xcLyU/PX5ffCE6LC47XSpbLUEtWjAtOSsmQCNcXC8lPX5ffF0pL2dpbTtcclxuICAgICAgICAgICAgcmVwbGFjZWRUZXh0ID0gbWVzc2FnZS5yZXBsYWNlKHJlcGxhY2VQYXR0ZXJuUHJvdG9jb2wsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVSTHMgc3RhcnRpbmcgd2l0aCBcInd3dy5cIiAoaWdub3JpbmcgLy8gYmVmb3JlIGl0KS5cclxuICAgICAgICAgICAgcmVwbGFjZVBhdHRlcm5XV1cgPSAvKF58W15cXC9dKSh3d3dcXC5bXFxTXSsoXFxifCQpKS9naW07XHJcbiAgICAgICAgICAgIHJlcGxhY2VkVGV4dCA9IHJlcGxhY2VkVGV4dC5yZXBsYWNlKHJlcGxhY2VQYXR0ZXJuV1dXLCAnJDE8YSBocmVmPVwiaHR0cDovLyQyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDI8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgZW1haWwgYWRkcmVzc2VzIHRvIG1haWx0bzo6IGxpbmtzLlxyXG4gICAgICAgICAgICByZXBsYWNlUGF0dGVybk1haWxUbyA9IC8oKFthLXpBLVowLTlcXC1cXF9cXC5dKStAW2EtekEtWlxcX10rPyhcXC5bYS16QS1aXXsyLDZ9KSspL2dpbTtcclxuICAgICAgICAgICAgcmVwbGFjZWRUZXh0ID0gcmVwbGFjZWRUZXh0LnJlcGxhY2UocmVwbGFjZVBhdHRlcm5NYWlsVG8sICc8YSBocmVmPVwibWFpbHRvOiQxXCI+JDE8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZWRUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgfSBcclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IE5nQ2hhdCB9IGZyb20gJy4vbmctY2hhdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbW9qaWZ5UGlwZSB9IGZyb20gJy4vcGlwZXMvZW1vamlmeS5waXBlJztcclxuaW1wb3J0IHsgTGlua2Z5UGlwZSB9IGZyb20gJy4vcGlwZXMvbGlua2Z5LnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdDaGF0LCBFbW9qaWZ5UGlwZSwgTGlua2Z5UGlwZV0sXHJcbiAgZXhwb3J0czogW05nQ2hhdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nQ2hhdE1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7OztJQUFBOzs7UUF1QkksOEJBQXlCLEdBQTZCLFVBQUMsS0FBYSxLQUFPLENBQUM7UUFDNUUsMkJBQXNCLEdBQTJDLFVBQUMsSUFBVSxFQUFFLE9BQWdCLEtBQU8sQ0FBQztLQUN6Rzs7Ozs7OztJQWJVLDBDQUFvQjs7Ozs7O0lBQTNCLFVBQTRCLEtBQWE7UUFFckMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7Ozs7SUFFTSx1Q0FBaUI7Ozs7O0lBQXhCLFVBQXlCLElBQVUsRUFBRSxPQUFnQjtRQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlDO0lBS0wsa0JBQUM7Q0FBQTs7Ozs7Ozs7SUMzQkcsT0FBUTtJQUNSLE9BQVE7Ozs7Ozs7OztBQ0haO0lBRUE7UUFFVyxTQUFJLEdBQWlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7S0FLaEQ7SUFBRCxjQUFDO0NBQUE7Ozs7Ozs7O0lDUEcsU0FBTTtJQUNOLE9BQUk7SUFDSixPQUFJO0lBQ0osVUFBTzs7Ozs7Ozs7Ozs7QUNIWDtJQUFBO0tBTUM7SUFBRCxXQUFDO0NBQUE7Ozs7OztBQ0xEO0lBQUE7UUFHVyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBWSxFQUFFLENBQUM7O1FBR3pCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBQzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0tBQ2xDO0lBQUQsYUFBQztDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDs7Ozs7O0lBQXNEQSwyQ0FBVztJQUFqRTs7S0FHQztJQUFELDhCQUFDO0NBSEQsQ0FBc0QsV0FBVzs7Ozs7Ozs7SUNQN0QsUUFBUyxjQUFjO0lBQ3ZCLE9BQVEsYUFBYTtJQUNyQixNQUFPLFlBQVk7Ozs7Ozs7OztJQ0huQixNQUFHO0lBQ0gsU0FBTTs7Ozs7Ozs7O0FDSVY7Ozs7O0lBTUksa0NBQW9CLGtCQUEwQixFQUFVLEtBQWlCO1FBQXJELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7S0FDeEU7Ozs7OztJQUVELDZDQUFVOzs7OztJQUFWLFVBQVcsSUFBVSxFQUFFLE1BQVk7O1lBQ3pCLFFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRTs7UUFHekMsUUFBUSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFVLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMkJ0RTtJQUNMLCtCQUFDO0NBQUEsSUFBQTs7Ozs7OztJQ2ZHLGdCQUFtQixTQUF1QixFQUFVLFdBQXVCO1FBQXhELGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7UUFHcEUsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQVMxQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc3QiwrQkFBMEIsR0FBWSxJQUFJLENBQUM7UUFHM0Msb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFHakMsb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFHL0IsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsZ0JBQVcsR0FBVyxnR0FBZ0csQ0FBQztRQUd2SCx3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFHcEMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUcxQix1QkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUc5QyxzQkFBaUIsR0FBVyxRQUFRLENBQUM7UUFHckMsZ0NBQTJCLEdBQVksSUFBSSxDQUFDO1FBRzVDLGtDQUE2QixHQUFXLGdHQUFnRyxDQUFDO1FBR3pJLDZCQUF3QixHQUFXLGtCQUFrQixDQUFDO1FBR3RELG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBTTdCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBR2pDLHlDQUFvQyxHQUFZLElBQUksQ0FBQztRQU1yRCxVQUFLLEdBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQztRQU0zQixrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRzdELHFCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBR2hFLHFCQUFnQixHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBR2hFLG1CQUFjLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFdkUscUNBQWdDLEdBQVksS0FBSyxDQUFDO1FBRW5ELG9CQUFlLEdBQVksS0FBSyxDQUFDOztRQUdoQyxzQkFBaUIsR0FBc0I7WUFDM0MsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFJSyxnQkFBVyxHQUFXLEVBQUUsQ0FBQzs7UUFvQnpCLHFCQUFnQixHQUFXLEdBQUcsQ0FBQzs7UUFHL0IscUJBQWdCLEdBQVcsR0FBRyxDQUFDOztRQU0vQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7O1FBR3JDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRy9CLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFFdkIsbUJBQWMsR0FBWSxLQUFLLENBQUM7S0FuSmdEO0lBa0hoRixzQkFBWSxtQ0FBZTs7OztRQUEzQjtZQUVJLE9BQU8sbUJBQWlCLElBQUksQ0FBQyxNQUFRLENBQUM7U0FDekM7OztPQUFBO0lBRUQsc0JBQUksaUNBQWE7Ozs7UUFBakI7WUFBQSxpQkFRQztZQU5HLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDOztnQkFFNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDdkc7WUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDckI7OztPQUFBOzs7O0lBNEJELHlCQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7SUFHRCx5QkFBUTs7OztJQURSLFVBQ1MsS0FBVTtRQUNoQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFakQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDMUI7Ozs7OztJQUdPLGlDQUFnQjs7Ozs7SUFBeEI7O1lBRVEseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFDOUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHlCQUF5QjtRQUVoRSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUd0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9DQUFvQyxJQUFJLHlCQUF5QixHQUFHLENBQUMsQ0FBQztLQUN6Rzs7Ozs7O0lBR08sOEJBQWE7Ozs7O0lBQXJCO1FBQUEsaUJBOERDOztZQTVETyx1QkFBdUIsR0FBRyxJQUFJO1FBRWxDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQy9DO1lBQ0ksSUFDQTtnQkFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFFM0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7O2dCQUd0QyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixHQUFHLFVBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUEsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDOztnQkFHckYsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFDOztvQkFFckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixXQUFXLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBQSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDekU7cUJBRUQ7O29CQUVJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUV2QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksdUJBQXVCLENBQUM7Z0JBRXZFLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsRUFDbkQ7b0JBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQy9GO2dCQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQzlCO1lBQ0QsT0FBTSxFQUFFLEVBQ1I7Z0JBQ0ksdUJBQXVCLEdBQUcsRUFBRSxDQUFDO2FBQ2hDO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQztZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7WUFFN0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBQztnQkFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzSUFBc0ksQ0FBQyxDQUFDO2FBQ3pKO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBQztnQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2SkFBNkosQ0FBQyxDQUFDO2FBQ2hMO1lBQ0QsSUFBSSx1QkFBdUIsRUFDM0I7Z0JBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxvRUFBa0UsdUJBQXVCLENBQUMsT0FBUyxDQUFDLENBQUM7Z0JBQ25ILE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUMxQztTQUNKO0tBQ0o7Ozs7OztJQUdhLCtDQUE4Qjs7Ozs7SUFBNUM7Ozs7OzhCQUVRLElBQUksQ0FBQywyQkFBMkIsS0FBSyxjQUFjLElBQUksTUFBTSxDQUFDLENBQUEsRUFBOUQsd0JBQThEO3dCQUUxRCxxQkFBTSxZQUFZLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7d0JBQTFDLElBQUksU0FBc0MsRUFDMUM7NEJBQ0ksSUFBSSxDQUFDLGdDQUFnQyxHQUFHLElBQUksQ0FBQzt5QkFDaEQ7Ozs7OztLQUVSOzs7Ozs7SUFHTyxzQ0FBcUI7Ozs7O0lBQTdCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQ3RCO1lBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDaEIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtnQkFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO2dCQUN6Qyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCO2dCQUN2RCw2QkFBNkIsRUFBRSxxQkFBcUI7YUFDdkQsQ0FBQztTQUNMO0tBQ0o7Ozs7SUFFTyxnQ0FBZTs7O0lBQXZCO1FBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUNwQjtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QjthQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFDOUQ7O1lBRUksTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBNkMsSUFBSSxDQUFDLEtBQUssbUNBQStCLENBQUMsQ0FBQztTQUMzRztLQUNKOzs7Ozs7O0lBR08saUNBQWdCOzs7Ozs7SUFBeEIsVUFBeUIsZUFBd0I7UUFBakQsaUJBYUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTthQUN6QixJQUFJLENBQ0QsR0FBRyxDQUFDLFVBQUMsS0FBYTtZQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCLENBQUMsQ0FDTCxDQUFDLFNBQVMsQ0FBQztZQUNSLElBQUksZUFBZSxFQUNuQjtnQkFDSSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM5QjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELG9DQUFtQjs7OztJQUFuQixVQUFvQixNQUFjO1FBQWxDLGlCQW1DQzs7UUFqQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLHVCQUF1QixFQUNuRDtZQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztpQkFDckcsSUFBSSxDQUNELEdBQUcsQ0FBQyxVQUFDLE1BQWlCO2dCQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFFN0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQzs7b0JBRTFCLFNBQVMsR0FBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHO2dCQUMzRyxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQztnQkFFL0QsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ3ZGLENBQUMsQ0FDTCxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2pCO2FBRUQ7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2lCQUNuRCxJQUFJLENBQ0QsR0FBRyxDQUFDLFVBQUMsTUFBaUI7Z0JBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dCQUU3RCxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUVoQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDOUYsQ0FBQyxDQUNMLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakI7S0FDSjs7Ozs7Ozs7SUFFTyw0Q0FBMkI7Ozs7Ozs7SUFBbkMsVUFBb0MsUUFBbUIsRUFBRSxNQUFjLEVBQUUsU0FBMEIsRUFBRSx1QkFBd0M7UUFBeEMsd0NBQUEsRUFBQSwrQkFBd0M7UUFFekksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUV4QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksdUJBQXVCLEVBQzlDOztnQkFDVSxjQUFjLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQSxDQUFDO1lBRXRELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1QztLQUNKOzs7Ozs7O0lBR08scUNBQW9COzs7Ozs7SUFBNUIsVUFBNkIsS0FBYTtRQUV0QyxJQUFJLEtBQUssRUFDVDtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0o7Ozs7Ozs7O0lBR08sa0NBQWlCOzs7Ozs7O0lBQXpCLFVBQTBCLElBQVUsRUFBRSxPQUFnQjtRQUVsRCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQ25COztnQkFDUSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFFMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDO2dCQUN2QyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTdELElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDMUI7b0JBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNKO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7WUFJckMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQ3JGOztnQkFFSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7S0FDSjs7Ozs7Ozs7Ozs7SUFJTSwrQkFBYzs7Ozs7Ozs7O0lBQXJCLFVBQXNCLElBQVUsRUFBRSxnQkFBaUMsRUFBRSxrQkFBbUM7UUFBdEUsaUNBQUEsRUFBQSx3QkFBaUM7UUFBRSxtQ0FBQSxFQUFBLDBCQUFtQzs7O1lBR2hHLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUEsQ0FBQztRQUVyRSxJQUFJLENBQUMsWUFBWSxFQUNqQjtZQUNJLElBQUksa0JBQWtCLEVBQ3RCO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDOzs7Z0JBR0csY0FBYyxHQUFHLGtCQUFrQixHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEI7O2dCQUU5RSxhQUFhLEdBQVc7Z0JBQ3hCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUcsRUFBRTtnQkFDYixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDckMsUUFBUSxFQUFFLEtBQUs7O2dCQUNmLFdBQVcsRUFBRSxjQUFjO2dCQUMzQixlQUFlLEVBQUUsS0FBSztnQkFDdEIsV0FBVyxFQUFFLENBQUM7YUFDakI7O1lBR0QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUN2QjtnQkFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDM0M7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFHcEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQy9IO2dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDdEI7WUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXRDLElBQUksZ0JBQWdCLElBQUksQ0FBQyxjQUFjLEVBQ3ZDO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDckM7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFFRDs7WUFFSSxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0tBQ0o7Ozs7Ozs7O0lBR08sOEJBQWE7Ozs7Ozs7SUFBckIsVUFBc0IsTUFBYyxFQUFFLFFBQTZCO1FBQW5FLGlCQWdCQztRQWhCcUMseUJBQUEsRUFBQSwwQkFBNkI7O1lBRTNELFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUNwQjtZQUNJLFVBQVUsQ0FBQztnQkFDUCxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFDekI7O3dCQUNRLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBRXRFLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDN0M7Z0JBRUQsUUFBUSxFQUFFLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDTjtLQUNKOzs7Ozs7OztJQUdPLGlDQUFnQjs7Ozs7OztJQUF4QixVQUF5QixNQUFjLEVBQUUsU0FBMEI7UUFBbkUsaUJBaUJDO1FBZkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUM7O2dCQUNoQixhQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzlDLFVBQVUsQ0FBQztnQkFDUCxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsRUFBQzs7d0JBQ3JCLFlBQVksR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBVyxDQUFDO29CQUVsRSxJQUFJLFlBQVksRUFDaEI7OzRCQUNRLE9BQU8sR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsYUFBVyxDQUFDLENBQUMsYUFBYTs7NEJBQ3ZFLFFBQVEsR0FBRyxDQUFFLFNBQVMsS0FBSyxlQUFlLENBQUMsR0FBRyxJQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWTt3QkFDL0UsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7cUJBQ2hDO2lCQUNKO2FBQ0osQ0FBQyxDQUFDO1NBQ047S0FDSjs7Ozs7OztJQUdNLG1DQUFrQjs7Ozs7O0lBQXpCLFVBQTBCLFFBQW1COztZQUVyQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFFNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDakIsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0tBQ047Ozs7OztJQUdPLGdDQUFlOzs7OztJQUF2QjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ25EO1lBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7Ozs7O0lBR08saUNBQWdCOzs7Ozs7SUFBeEIsVUFBeUIsTUFBYztRQUVuQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7Ozs7OztJQUdPLHdDQUF1Qjs7Ozs7OztJQUEvQixVQUFnQyxNQUFjLEVBQUUsT0FBZ0I7UUFFNUQsSUFBSSxJQUFJLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE9BQU8sRUFBRTs7Z0JBQ2xFLGNBQVksR0FBRyxJQUFJLFlBQVksQ0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixTQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBYSxFQUFFO2dCQUNsSCxNQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU87Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsNkJBQTZCO2FBQzdDLENBQUM7WUFFRixVQUFVLENBQUM7Z0JBQ1AsY0FBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3hCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsRDtLQUNKOzs7Ozs7O0lBR08sbUNBQWtCOzs7Ozs7SUFBMUIsVUFBMkIsT0FBaUI7UUFFeEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQzVCOztnQkFDUSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDMUIsQ0FBQztZQUVGLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDeEU7S0FDSjs7OztJQUVPLG9DQUFtQjs7O0lBQTNCO1FBQUEsaUJBd0JDO1FBdEJHLElBQ0E7WUFDSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFDNUI7O29CQUNRLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFFbEUsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyRDs7d0JBQ1EsU0FBTyxzQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUE7O3dCQUVqRCxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQztvQkFFdkUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7d0JBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzdCLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7UUFDRCxPQUFPLEVBQUUsRUFDVDtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUVBQXFFLEVBQUksQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7Ozs7Ozs7SUFHTyxpQ0FBZ0I7Ozs7OztJQUF4QixVQUF5QixNQUFjOztZQUUvQixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhDLElBQUksS0FBSyxHQUFHLENBQUMsRUFDYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEM7YUFDSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUM5QztZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEM7S0FDSjs7Ozs7SUFFTyxrQ0FBaUI7Ozs7SUFBekIsVUFBMEIsT0FBZ0I7O1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQjtZQUNJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNuQztLQUNKOzs7Ozs7O0lBR0Qsb0NBQW1COzs7Ozs7SUFBbkIsVUFBb0IsTUFBYztRQUFsQyxpQkFnQkM7UUFkRyxJQUFJLE1BQU0sRUFBQzs7Z0JBQ0gsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQyxNQUFNO1lBRWxHLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxFQUFDO2dCQUV4QixJQUFJLG1CQUFtQixHQUFHLEVBQUU7b0JBQ3hCLE9BQVEsS0FBSyxDQUFDOztvQkFFZCxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7O1FBR0QsT0FBTyxFQUFFLENBQUM7S0FDYjs7Ozs7SUFFRCwwQ0FBeUI7Ozs7SUFBekIsVUFBMEIsSUFBVTs7WUFFNUIsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBQSxDQUFDO1FBRXJFLElBQUksWUFBWSxFQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakQ7O1FBR0QsT0FBTyxFQUFFLENBQUM7S0FDYjs7Ozs7Ozs7Ozs7Ozs7OztJQU9ELGlDQUFnQjs7Ozs7Ozs7OztJQUFoQixVQUFpQixLQUFVLEVBQUUsTUFBYztRQUEzQyxpQkFpREM7UUEvQ0csUUFBUSxLQUFLLENBQUMsT0FBTztZQUVqQixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUN2RDs7d0JBQ1EsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFO29CQUUzQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFFcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRTlCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVsQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFFdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pEO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztvQkFFbkIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztvQkFDakQsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpHLElBQUksQ0FBQyxtQkFBbUIsRUFDeEI7O29CQUVJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hIO2dCQUVELG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFMUMsTUFBTTtZQUNWLEtBQUssRUFBRTs7b0JBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBRWpELElBQUksYUFBYSxFQUNqQjtvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxjQUFRLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDaEY7cUJBRUQ7b0JBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNsQztTQUNSO0tBQ0o7Ozs7Ozs7SUFHRCxrQ0FBaUI7Ozs7OztJQUFqQixVQUFrQixNQUFjOztZQUV4QixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXhDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2pEOzs7Ozs7O0lBR0QsbUNBQWtCOzs7Ozs7SUFBbEIsVUFBbUIsS0FBVTtRQUV6QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN4Qzs7Ozs7OztJQUdELG9DQUFtQjs7Ozs7O0lBQW5CLFVBQW9CLE1BQWM7UUFFOUIsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekQ7Ozs7Ozs7OztJQUdELGdDQUFlOzs7Ozs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxPQUFnQixFQUFFLEtBQWE7UUFFM0QsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDOUIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFDO2dCQUNYLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQ0c7O2dCQUVBLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUM7b0JBQ3BELE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2hCOzs7Ozs7O0lBR0Qsa0NBQWlCOzs7Ozs7SUFBakIsVUFBa0IsTUFBYztRQUFoQyxpQkFZQztRQVZHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ1YsY0FBYyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsTUFBTSxHQUFBLENBQUM7WUFFL0csSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQy9DO2dCQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUM7U0FDSjtLQUNKOzs7Ozs7O0lBR0QsK0JBQWM7Ozs7OztJQUFkLFVBQWUsTUFBa0I7O1lBRXpCLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFO1FBRW5ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM3RDs7Ozs7SUFFRCxzQ0FBcUI7Ozs7SUFBckIsVUFBc0IsSUFBVTtRQUM1QixJQUFJLElBQUksRUFDUjtZQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7S0FDSjs7Ozs7SUFFRCx1Q0FBc0I7Ozs7SUFBdEIsVUFBdUIsTUFBVzs7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBTSxHQUFBLENBQUM7UUFFcEUsSUFBSSxZQUFZLEVBQUM7WUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEM7S0FDSjs7Ozs7SUFFRCxrREFBaUM7Ozs7SUFBakMsVUFBa0MsTUFBVzs7WUFDckMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksTUFBTSxHQUFBLENBQUM7UUFFcEUsSUFBSSxZQUFZLEVBQUM7WUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7S0FDSjs7Ozs7O0lBR0Qsd0NBQXVCOzs7OztJQUF2QjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzlDOzs7Ozs7O0lBR0QsNkJBQVk7Ozs7OztJQUFaLFVBQWEsTUFBYztRQUEzQixpQkFzQkM7O1lBckJTLElBQUksR0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOztRQUc1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ3JELFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDbEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFFN0IsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDOztZQUdqQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVsQyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFHdEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqRCxDQUFDLENBQUM7S0FDVjs7Z0JBanpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDA2UEFBcUM7O2lCQVF4Qzs7OztnQkE5QlEsWUFBWTtnQkFEWixVQUFVOzs7MEJBd0NkLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxLQUFLOzZDQUdMLEtBQUs7a0NBR0wsS0FBSztrQ0FHTCxLQUFLO2lDQUdMLEtBQUs7Z0NBR0wsS0FBSztnQ0FHTCxLQUFLOytCQUdMLEtBQUs7Z0NBR0wsS0FBSzs4QkFHTCxLQUFLO3NDQUdMLEtBQUs7d0JBR0wsS0FBSztxQ0FHTCxLQUFLO29DQUdMLEtBQUs7OENBR0wsS0FBSztnREFHTCxLQUFLOzJDQUdMLEtBQUs7a0NBR0wsS0FBSzsrQkFHTCxLQUFLO2tDQUdMLEtBQUs7dURBR0wsS0FBSztnQ0FHTCxLQUFLO3dCQUdMLEtBQUs7OEJBR0wsS0FBSztnQ0FHTCxNQUFNO21DQUdOLE1BQU07bUNBR04sTUFBTTtpQ0FHTixNQUFNO3NDQXdETixZQUFZLFNBQUMsY0FBYzttQ0FFM0IsWUFBWSxTQUFDLGlCQUFpQjtrQ0FFOUIsU0FBUyxTQUFDLGlCQUFpQjsyQkFNM0IsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFzb0I3QyxhQUFDO0NBbHpCRDs7Ozs7O0FDdEJBO0lBRUksZUFBZSxHQUFHO0lBQ2xCLEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2hELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2hELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2hELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2hELEVBQUUsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ2hELEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDM0MsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDbkUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDbkUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ3BDLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUNwQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDcEMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQ25DLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUNwQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDcEMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0NBQ3ZDOzs7O0FBS0Q7SUFBQTtLQWFDOzs7Ozs7SUFYRywrQkFBUzs7Ozs7SUFBVCxVQUFVLE9BQWUsRUFBRSxXQUFvQjtRQUMzQyxJQUFJLFdBQVcsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ3pCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDMUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckQsQ0FBQyxDQUFBO2FBQ0wsQ0FBQyxDQUFDO1NBQ047UUFFTCxPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Z0JBWkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQzs7SUFhdkIsa0JBQUM7Q0FiRDs7Ozs7O0FDdkJBOzs7QUFLQTtJQUFBO0tBMkJDOzs7Ozs7SUF6QkcsOEJBQVM7Ozs7O0lBQVQsVUFBVSxPQUFlLEVBQUUsV0FBb0I7UUFDM0MsSUFBSSxXQUFXLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNoRDs7Z0JBQ1EsWUFBWSxTQUFBOztnQkFDWixzQkFBc0IsU0FBQTs7Z0JBQ3RCLGlCQUFpQixTQUFBOztnQkFDakIsb0JBQW9CLFNBQUE7O1lBR3hCLHNCQUFzQixHQUFHLHlFQUF5RSxDQUFDO1lBQ25HLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLHFDQUFxQyxDQUFDLENBQUM7O1lBRzlGLGlCQUFpQixHQUFHLGdDQUFnQyxDQUFDO1lBQ3JELFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLDhDQUE4QyxDQUFDLENBQUM7O1lBR3ZHLG9CQUFvQixHQUFHLDBEQUEwRCxDQUFDO1lBQ2xGLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFFeEYsT0FBTyxZQUFZLENBQUM7U0FDdkI7O1lBRUcsT0FBTyxPQUFPLENBQUM7S0FDdEI7O2dCQTFCSixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDOztJQTJCdEIsaUJBQUM7Q0EzQkQ7Ozs7OztBQ0xBO0lBU0E7S0FNQzs7Z0JBTkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3RELFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDO29CQUMvQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ2xCOztJQUVELG1CQUFDO0NBTkQ7Ozs7Ozs7Ozs7Ozs7OyJ9