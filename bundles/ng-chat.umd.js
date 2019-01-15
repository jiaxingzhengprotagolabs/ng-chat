(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('rxjs/operators'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-chat', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', 'rxjs/operators', '@angular/common', '@angular/forms'], factory) :
    (factory((global['ng-chat'] = {}),global.ng.core,global.ng.common.http,global.ng.platformBrowser,global.rxjs.operators,global.ng.common,global.ng.forms));
}(this, (function (exports,core,http,platformBrowser,operators,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ChatAdapter = /** @class */ (function () {
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
     * You will need an existing \@see ChatAdapter implementation
     * @abstract
     */
    var /**
     * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
     * You will need an existing \@see ChatAdapter implementation
     * @abstract
     */ PagedHistoryChatAdapter = /** @class */ (function (_super) {
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
            this.onUserClicked = new core.EventEmitter();
            this.onUserChatOpened = new core.EventEmitter();
            this.onUserChatClosed = new core.EventEmitter();
            this.onMessagesSeen = new core.EventEmitter();
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
             */ function () {
                return "ng-chat-users-" + this.userId; // Appending the user id so the state is unique per user in a computer.   
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgChat.prototype, "filteredUsers", {
            get: /**
             * @return {?}
             */ function () {
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
                                if (!(this.browserNotificationsEnabled && ("Notification" in window)))
                                    return [3 /*break*/, 2];
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
                    .pipe(operators.map(function (users) {
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
                        .pipe(operators.map(function (result) {
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
                        .pipe(operators.map(function (result) {
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
                if (forceMarkMessagesAsSeen === void 0) {
                    forceMarkMessagesAsSeen = false;
                }
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
                if (focusOnNewWindow === void 0) {
                    focusOnNewWindow = false;
                }
                if (invokedByUserClick === void 0) {
                    invokedByUserClick = false;
                }
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
                if (callback === void 0) {
                    callback = function () { };
                }
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
                            var userIds_1 = ( /** @type {?} */(JSON.parse(stringfiedUserIds)));
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
            { type: core.Component, args: [{
                        selector: 'ng-chat',
                        template: "<link *ngIf=\"customTheme\" rel=\"stylesheet\" [href]='sanitizer.bypassSecurityTrustResourceUrl(customTheme)'>\r\n\r\n<div id=\"ng-chat\" *ngIf=\"isBootstrapped && !unsupportedViewport\" [ngClass]=\"theme\">\r\n    <div *ngIf=\"!hideFriendsList\" id=\"ng-chat-people\" [ngClass]=\"{'primary-outline-color': true, 'primary-background': true, 'ng-chat-people-collapsed': isCollapsed}\">\r\n        <a href=\"javascript:void(0);\" class=\"ng-chat-title secondary-background shadowed\" (click)=\"onChatTitleClicked($event)\">\r\n            <span>\r\n                {{localization.title}}\r\n            </span>\r\n        </a>\r\n        <input *ngIf=\"searchEnabled\" id=\"ng-chat-search_friend\" class=\"friends-search-bar\" type=\"search\" [placeholder]=\"localization.searchPlaceholder\" [(ngModel)]=\"searchInput\" />\r\n        <ul id=\"ng-chat-users\" *ngIf=\"!isCollapsed\" [ngClass]=\"{'offset-search': searchEnabled}\">\r\n            <li *ngFor=\"let user of filteredUsers\" (click)=\"openChatWindow(user, true, true)\">\r\n                <div *ngIf=\"!user.avatar\"  class=\"icon-wrapper\">\r\n                    <i class=\"user-icon\"></i>\r\n                </div>\r\n                <img *ngIf=\"user.avatar\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\"  src=\"{{user.avatar}}\"/>\r\n                <strong title=\"{{user.displayName}}\">{{user.displayName}}</strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': user.status == UserStatus.Online, 'busy': user.status == UserStatus.Busy, 'away': user.status == UserStatus.Away, 'offline': user.status == UserStatus.Offline}\" title=\"{{getStatusTitle(user.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotalByUser(user).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotalByUser(user)}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div *ngFor=\"let window of windows; let i = index\" [ngClass]=\"{'ng-chat-window': true, 'primary-outline-color': true, 'ng-chat-window-collapsed': window.isCollapsed}\" [ngStyle]=\"{'right': (!hideFriendsList ? friendsListWidth : 0) + 20 + windowSizeFactor * i + 'px'}\">\r\n        <ng-container *ngIf=\"window.isCollapsed\">\r\n            <div class=\"ng-chat-title secondary-background\" (click)=\"onChatWindowClicked(window)\">\r\n                <strong title=\"{{window.chattingTo.displayName}}\">\r\n                    {{window.chattingTo.displayName}}\r\n                </strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': window.chattingTo.status == UserStatus.Online, 'busy': window.chattingTo.status == UserStatus.Busy, 'away': window.chattingTo.status == UserStatus.Away, 'offline': window.chattingTo.status == UserStatus.Offline}\" title=\"{{getStatusTitle(window.chattingTo.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n                <a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow(window)\">X</a>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!window.isCollapsed\">\r\n            <div class=\"ng-chat-title secondary-background\" (click)=\"onChatWindowClicked(window)\">\r\n                <strong title=\"{{window.chattingTo.displayName}}\">\r\n                    {{window.chattingTo.displayName}}\r\n                </strong>\r\n                <span [ngClass]=\"{'ng-chat-user-status': true, 'online': window.chattingTo.status == UserStatus.Online, 'busy': window.chattingTo.status == UserStatus.Busy, 'away': window.chattingTo.status == UserStatus.Away, 'offline': window.chattingTo.status == UserStatus.Offline}\" title=\"{{getStatusTitle(window.chattingTo.status)}}\"></span>\r\n                <span *ngIf=\"unreadMessagesTotal(window).length > 0\" class=\"ng-chat-unread-messages-count unread-messages-counter-container primary-text\">{{unreadMessagesTotal(window)}}</span>\r\n                <a href=\"javascript:void(0);\" class=\"ng-chat-close primary-text\" (click)=\"onCloseChatWindow(window)\">X</a>\r\n            </div>\r\n            <div #chatMessages class=\"ng-chat-messages primary-background\">\r\n                <div *ngIf=\"window.isLoadingHistory\" class=\"ng-chat-loading-wrapper\">\r\n                    <div class=\"loader\">Loading history...</div>\r\n                </div>\r\n                <div *ngIf=\"hasPagedHistory && window.hasMoreMessages && !window.isLoadingHistory\" class=\"ng-chat-load-history\">\r\n                \t<a class=\"load-history-action\" (click)=\"fetchMessageHistory(window)\">{{localization.loadMessageHistoryPlaceholder}}</a>\r\n                </div>\r\n\r\n                <div *ngFor=\"let message of window.messages; let i = index\" [ngClass]=\"{'ng-chat-message': true, 'ng-chat-message-received': message.fromId != userId}\">\r\n                    <div *ngIf=\"!window.chattingTo.avatar && isAvatarVisible(window, message, i)\" class=\"icon-wrapper\">\r\n                        <i class=\"user-icon\"></i>\r\n                    </div>\r\n                    <img *ngIf=\"window.chattingTo.avatar && isAvatarVisible(window, message, i)\" alt=\"\" class=\"avatar\" height=\"30\" width=\"30\" [src]=\"window.chattingTo.avatar\" />\r\n                    <ng-container [ngSwitch]=\"message.type\">\r\n                        <span *ngSwitchCase=\"MessageType.Text\" [innerHtml]=\"message.message | emojify:emojisEnabled | linkfy:linkfyEnabled\" [ngClass]=\"{'sent-chat-message-container': message.fromId == userId, 'received-chat-message-container': message.fromId != userId}\"></span>\r\n                        <div *ngSwitchCase=\"MessageType.File\" [ngClass]=\"{'file-message-container': true, 'received': message.fromId != userId}\">\r\n                            <div class=\"file-message-icon-container\">\r\n                                <i class=\"paperclip-icon\"></i>\r\n                            </div>\r\n                            <a class=\"file-details\" [attr.href]=\"message.downloadUrl\" target=\"_blank\" rel=\"noopener noreferrer\" (click)=\"this.markMessagesAsRead([message])\" download>\r\n                                <span class=\"file-message-title\" [attr.title]=\"message.message\">{{message.message}}</span>\r\n                                <span *ngIf=\"message.fileSizeInBytes\" class=\"file-message-size\">{{message.fileSizeInBytes}} Bytes</span>\r\n                            </a>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ng-chat-footer primary-outline-color primary-background\">\r\n                <input #chatWindowInput \r\n                    type=\"text\" \r\n                    [ngModel]=\"window.newMessage | emojify:emojisEnabled\" \r\n                    (ngModelChange)=\"window.newMessage=$event\" \r\n                    [placeholder]=\"localization.messagePlaceholder\" \r\n                    [ngClass]=\"{'chat-window-input': true, 'has-side-action': fileUploadAdapter}\"\r\n                    (keydown)=\"onChatInputTyped($event, window)\" \r\n                    (blur)=\"toggleWindowFocus(window)\" \r\n                    (focus)=\"toggleWindowFocus(window)\"/>\r\n\r\n                <!-- File Upload -->\r\n                <ng-container *ngIf=\"fileUploadAdapter\">\r\n                    <a *ngIf=\"!isUploadingFile\" class=\"btn-add-file\" (click)=\"triggerNativeFileUpload()\">\r\n                        <i class=\"upload-icon\"></i>\r\n                    </a>\r\n                    <input type=\"file\" #nativeFileInput style=\"display: none;\" (change)=\"onFileChosen(window)\" />\r\n                    <div *ngIf=\"isUploadingFile\" class=\"loader\"></div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n",
                        styles: [".user-icon{box-sizing:border-box;background-color:#fff;border:2px solid;width:32px;height:20px;border-radius:64px 64px 0 0/64px;margin-top:14px;margin-left:-1px;display:inline-block;vertical-align:middle;position:relative;font-style:normal;color:#ddd;text-align:left;text-indent:-9999px}.user-icon:before{border:2px solid;background-color:#fff;width:12px;height:12px;top:-19px;border-radius:50%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.user-icon:after,.user-icon:before{content:'';pointer-events:none}.upload-icon{position:absolute;margin-left:3px;margin-top:12px;width:13px;height:4px;border:1px solid currentColor;border-top:none;border-radius:1px}.upload-icon:before{content:'';position:absolute;top:-8px;left:6px;width:1px;height:9px;background-color:currentColor}.upload-icon:after{content:'';position:absolute;top:-8px;left:4px;width:4px;height:4px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.paperclip-icon{position:absolute;margin-left:9px;margin-top:2px;width:6px;height:12px;border-radius:4px 4px 0 0;border-left:1px solid currentColor;border-right:1px solid currentColor;border-top:1px solid currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.paperclip-icon:before{content:'';position:absolute;top:11px;left:-1px;width:4px;height:6px;border-radius:0 0 3px 3px;border-left:1px solid currentColor;border-right:1px solid currentColor;border-bottom:1px solid currentColor}.paperclip-icon:after{content:'';position:absolute;left:1px;top:1px;width:2px;height:10px;border-radius:4px 4px 0 0;border-left:1px solid currentColor;border-right:1px solid currentColor;border-top:1px solid currentColor}", ".loader,.loader:after,.loader:before{background:#e3e3e3;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader{color:#e3e3e3;text-indent:-9999em;margin:4px auto 0;position:relative;font-size:4px;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{position:absolute;top:0;content:''}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", "#ng-chat{position:fixed;z-index:999;right:0;bottom:0;box-sizing:initial;font-size:11pt;text-align:left}.ng-chat-loading-wrapper{height:30px;text-align:center;font-size:.9em}#ng-chat-people{position:relative;width:240px;height:360px;border-width:1px;border-style:solid;margin-right:20px;box-shadow:0 4px 8px rgba(0,0,0,.25);border-bottom:0}#ng-chat-people.ng-chat-people-collapsed{height:30px}.ng-chat-close{text-decoration:none;float:right}.ng-chat-title,.ng-chat-title:hover{position:relative;z-index:2;height:30px;line-height:30px;font-size:.9em;padding:0 10px;display:block;text-decoration:none;color:inherit;font-weight:400;cursor:pointer}.ng-chat-title.shadowed{box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-title>strong{font-weight:600;display:block;overflow:hidden;height:30px;text-overflow:ellipsis;white-space:nowrap;max-width:85%;float:left}.ng-chat-title>.ng-chat-user-status{float:left;margin-left:5px}#ng-chat-search_friend{display:block;padding:7px 10px;margin:10px auto 0;width:calc(100% - 20px);font-size:.9em;-webkit-appearance:searchfield}#ng-chat-users{padding:0 10px;list-style:none;margin:0;overflow:auto;position:absolute;top:42px;bottom:0;width:100%;box-sizing:border-box}#ng-chat-users.offset-search{top:84px}#ng-chat-users li{clear:both;margin-bottom:10px;overflow:hidden;cursor:pointer;max-height:30px}#ng-chat-users li>.icon-wrapper,#ng-chat-users li>img{float:left;margin-right:5px;border-radius:25px}#ng-chat-users li>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}#ng-chat-users li>.icon-wrapper>i{color:#fff;-webkit-transform:scale(.7);transform:scale(.7)}#ng-chat-users li>strong{float:left;line-height:30px;font-size:.8em;max-width:57%;max-height:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#ng-chat-users li>.ng-chat-user-status{float:right}.ng-chat-user-status{border-radius:25px;width:8px;height:8px;margin-top:10px}.ng-chat-user-status.online{background-color:#92a400}.ng-chat-user-status.busy{background-color:#f91c1e}.ng-chat-user-status.away{background-color:#f7d21b}.ng-chat-user-status.offline{background-color:#bababa}.ng-chat-unread-messages-count{margin-left:5px;padding:0 5px;border-radius:25px;font-size:.9em;line-height:30px}.ng-chat-window{right:260px;height:360px;z-index:999;bottom:0;position:fixed;width:300px;border-width:1px;border-style:solid;border-bottom:0;box-shadow:0 4px 8px rgba(0,0,0,.25)}.ng-chat-window-collapsed{height:30px!important}.ng-chat-window .ng-chat-footer{box-sizing:border-box;padding:0;display:block;height:calc(10%);width:100%;border:none;border-top:1px solid transparent;border-color:inherit}.ng-chat-window .ng-chat-footer>input{font-size:.8em;box-sizing:border-box;padding:0 5px;display:block;height:100%;width:100%;border:none}.ng-chat-window .ng-chat-footer>input.has-side-action{width:calc(100% - 30px)}.ng-chat-window .ng-chat-footer .btn-add-file{position:absolute;right:5px;bottom:7px;height:20px;width:20px;cursor:pointer}.ng-chat-window .ng-chat-footer .loader{position:absolute;right:14px;bottom:8px}.ng-chat-window .ng-chat-load-history{height:30px;text-align:center;font-size:.8em}.ng-chat-window .ng-chat-load-history>a{border-radius:15px;cursor:pointer;padding:5px 10px}.ng-chat-window .ng-chat-messages{padding:10px;height:calc(90% - 30px);box-sizing:border-box;position:relative;overflow:auto}.ng-chat-window .ng-chat-messages .ng-chat-message{clear:both}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper,.ng-chat-window .ng-chat-messages .ng-chat-message>img{position:absolute;left:10px;border-radius:25px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper{background-color:#bababa;overflow:hidden;width:30px;height:30px}.ng-chat-window .ng-chat-messages .ng-chat-message>.icon-wrapper>i{color:#fff;-webkit-transform:scale(.7);transform:scale(.7)}.ng-chat-window .ng-chat-messages .ng-chat-message>span{float:right;width:182px;padding:10px;border-radius:5px;margin-top:0;margin-bottom:5px;font-size:.9em;word-wrap:break-word}.ng-chat-window .ng-chat-messages .ng-chat-message.ng-chat-message-received>span{float:left;margin-left:40px;padding-top:7px;padding-bottom:7px;border-style:solid;border-width:3px;margin-top:0;margin-bottom:5px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container{float:right;width:196px;border-style:solid;border-width:3px;border-radius:5px;overflow:hidden;margin-bottom:5px;display:block;text-decoration:none;font-size:.9em}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container.received{float:left;margin-left:40px;width:202px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container{width:20px;height:35px;padding:10px;float:left}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-message-icon-container i{margin-top:8px}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details{float:left;padding:10px;width:calc(100% - 60px);color:currentColor;text-decoration:none}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details:hover{text-decoration:underline}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details span{display:block;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-title{font-weight:700}.ng-chat-window .ng-chat-messages .ng-chat-message .file-message-container>.file-details .file-message-size{font-size:.8em;margin-top:5px}", ".light-theme,.light-theme .primary-text{color:#5c5c5c;font-family:Arial,Helvetica,sans-serif}.light-theme .primary-background{background-color:#fff}.light-theme .secondary-background{background-color:#fafafa}.light-theme .primary-outline-color{border-color:#a3a3a3}.light-theme .friends-search-bar{background-color:#fff}.light-theme .load-history-action,.light-theme .unread-messages-counter-container{background-color:#e3e3e3}.light-theme .chat-window-input{background-color:#fff}.light-theme .sent-chat-message-container{background-color:#e3e3e3}.light-theme .received-chat-message-container{background-color:#fff;border-color:#e3e3e3}.light-theme .file-message-container{border-color:#e3e3e3}.light-theme .file-message-icon-container{background-color:#e3e3e3}", ".dark-theme,.dark-theme .primary-text{color:#fff;font-family:Arial,Helvetica,sans-serif}.dark-theme .primary-background{background-color:#565656}.dark-theme .secondary-background{background-color:#444}.dark-theme .primary-outline-color{border-color:#353535}.dark-theme .friends-search-bar{background-color:#444;border:1px solid #444;color:#fff}.dark-theme .unread-messages-counter-container{background-color:#fff;color:#444}.dark-theme .load-history-action{background-color:#444}.dark-theme .chat-window-input{background-color:#444;color:#fff}.dark-theme .sent-chat-message-container{background-color:#444}.dark-theme .received-chat-message-container{background-color:#565656;border-color:#444}.dark-theme .file-message-container{border-color:#444}.dark-theme .file-message-icon-container,.dark-theme .ng-chat-footer{background-color:#444}"]
                    }] }
        ];
        /** @nocollapse */
        NgChat.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer },
                { type: http.HttpClient }
            ];
        };
        NgChat.propDecorators = {
            adapter: [{ type: core.Input }],
            userId: [{ type: core.Input }],
            isCollapsed: [{ type: core.Input }],
            maximizeWindowOnNewMessage: [{ type: core.Input }],
            pollFriendsList: [{ type: core.Input }],
            pollingInterval: [{ type: core.Input }],
            historyEnabled: [{ type: core.Input }],
            emojisEnabled: [{ type: core.Input }],
            linkfyEnabled: [{ type: core.Input }],
            audioEnabled: [{ type: core.Input }],
            searchEnabled: [{ type: core.Input }],
            audioSource: [{ type: core.Input }],
            persistWindowsState: [{ type: core.Input }],
            title: [{ type: core.Input }],
            messagePlaceholder: [{ type: core.Input }],
            searchPlaceholder: [{ type: core.Input }],
            browserNotificationsEnabled: [{ type: core.Input }],
            browserNotificationIconSource: [{ type: core.Input }],
            browserNotificationTitle: [{ type: core.Input }],
            historyPageSize: [{ type: core.Input }],
            localization: [{ type: core.Input }],
            hideFriendsList: [{ type: core.Input }],
            hideFriendsListOnUnsupportedViewport: [{ type: core.Input }],
            fileUploadUrl: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            customTheme: [{ type: core.Input }],
            onUserClicked: [{ type: core.Output }],
            onUserChatOpened: [{ type: core.Output }],
            onUserChatClosed: [{ type: core.Output }],
            onMessagesSeen: [{ type: core.Output }],
            chatMessageClusters: [{ type: core.ViewChildren, args: ['chatMessages',] }],
            chatWindowInputs: [{ type: core.ViewChildren, args: ['chatWindowInput',] }],
            nativeFileInput: [{ type: core.ViewChild, args: ['nativeFileInput',] }],
            onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }]
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
            { type: core.Pipe, args: [{ name: 'emojify' },] }
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
            { type: core.Pipe, args: [{ name: 'linkfy' },] }
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, http.HttpClientModule],
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

    exports.NgChatModule = NgChatModule;
    exports.ChatAdapter = ChatAdapter;
    exports.Message = Message;
    exports.UserStatus = UserStatus;
    exports.User = User;
    exports.Window = Window;
    exports.PagedHistoryChatAdapter = PagedHistoryChatAdapter;
    exports.Theme = Theme;
    exports.ɵa = NgChat;
    exports.ɵb = EmojifyPipe;
    exports.ɵc = LinkfyPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2hhdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL2NoYXQtYWRhcHRlci50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L2NvcmUvbWVzc2FnZS10eXBlLmVudW0udHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL21lc3NhZ2UudHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL3VzZXItc3RhdHVzLmVudW0udHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL3VzZXIudHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL3dpbmRvdy50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL3BhZ2VkLWhpc3RvcnktY2hhdC1hZGFwdGVyLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvY29yZS90aGVtZS5lbnVtLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvY29yZS9zY3JvbGwtZGlyZWN0aW9uLmVudW0udHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9jb3JlL2RlZmF1bHQtZmlsZS11cGxvYWQtYWRhcHRlci50cyIsIm5nOi8vbmctY2hhdC9uZy1jaGF0L25nLWNoYXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvcGlwZXMvZW1vamlmeS5waXBlLnRzIiwibmc6Ly9uZy1jaGF0L25nLWNoYXQvcGlwZXMvbGlua2Z5LnBpcGUudHMiLCJuZzovL25nLWNoYXQvbmctY2hhdC9uZy1jaGF0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhdEFkYXB0ZXJcclxue1xyXG4gICAgLy8gIyMjIEFic3RyYWN0IGFkYXB0ZXIgbWV0aG9kcyAjIyNcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbGlzdEZyaWVuZHMoKTogT2JzZXJ2YWJsZTxVc2VyW10+O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWVzc2FnZUhpc3RvcnkodXNlcklkOiBhbnkpOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHNlbmRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkO1xyXG5cclxuICAgIC8vICMjIyBBZGFwdGVyL0NoYXQgaW5jb21lL2luZ3Jlc3MgZXZlbnRzICMjI1xyXG5cclxuICAgIHB1YmxpYyBvbkZyaWVuZHNMaXN0Q2hhbmdlZCh1c2VyczogVXNlcltdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3RDaGFuZ2VkSGFuZGxlcih1c2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTWVzc2FnZVJlY2VpdmVkKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUmVjZWl2ZWRIYW5kbGVyKHVzZXIsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFdmVudCBoYW5kbGVyc1xyXG4gICAgZnJpZW5kc0xpc3RDaGFuZ2VkSGFuZGxlcjogKHVzZXJzOiBVc2VyW10pID0+IHZvaWQgID0gKHVzZXJzOiBVc2VyW10pID0+IHt9O1xyXG4gICAgbWVzc2FnZVJlY2VpdmVkSGFuZGxlcjogKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQgPSAodXNlcjogVXNlciwgbWVzc2FnZTogTWVzc2FnZSkgPT4ge307XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gTWVzc2FnZVR5cGVcclxue1xyXG4gICAgVGV4dCA9IDEsXHJcbiAgICBGaWxlID0gMlxyXG59XHJcbiIsImltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi9tZXNzYWdlLXR5cGUuZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVxyXG57XHJcbiAgICBwdWJsaWMgdHlwZT86IE1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuVGV4dDtcclxuICAgIHB1YmxpYyBmcm9tSWQ6IGFueTtcclxuICAgIHB1YmxpYyB0b0lkOiBhbnk7XHJcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNlZW5Pbj86IERhdGU7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVXNlclN0YXR1c1xyXG57XHJcbiAgICBPbmxpbmUsXHJcbiAgICBCdXN5LFxyXG4gICAgQXdheSxcclxuICAgIE9mZmxpbmVcclxufSIsImltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi91c2VyLXN0YXR1cy5lbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclxyXG57XHJcbiAgICBwdWJsaWMgaWQ6IGFueTtcclxuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0YXR1czogVXNlclN0YXR1cztcclxuICAgIHB1YmxpYyBhdmF0YXI6IHN0cmluZztcclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93XHJcbntcclxuICAgIHB1YmxpYyBjaGF0dGluZ1RvOiBVc2VyO1xyXG4gICAgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlW10gPSBbXTtcclxuICAgIHB1YmxpYyBuZXdNZXNzYWdlPzogc3RyaW5nID0gXCJcIjtcclxuICAgIFxyXG4gICAgLy8gVUkgQmVoYXZpb3IgcHJvcGVydGllc1xyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkPzogYm9vbGVhbiA9IGZhbHNlOyBcclxuICAgIHB1YmxpYyBpc0xvYWRpbmdIaXN0b3J5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGFzRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBoYXNNb3JlTWVzc2FnZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGhpc3RvcnlQYWdlOiBudW1iZXIgPSAwO1xyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDaGF0QWRhcHRlciB9IGZyb20gXCIuL2NoYXQtYWRhcHRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDaGF0IEFkYXB0ZXIgZGVjb3JhdG9yIGNsYXNzIHRoYXQgYWRkcyBwYWdpbmF0aW9uIHRvIGxvYWQgdGhlIGhpc3Rvcnkgb2YgbWVzc2FnZXNyLiBcclxuICogWW91IHdpbGwgbmVlZCBhbiBleGlzdGluZyBAc2VlIENoYXRBZGFwdGVyIGltcGxlbWVudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXIgZXh0ZW5kcyBDaGF0QWRhcHRlclxyXG57ICAgXHJcbiAgICBhYnN0cmFjdCBnZXRNZXNzYWdlSGlzdG9yeUJ5UGFnZSh1c2VySWQ6IGFueSwgc2l6ZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxNZXNzYWdlW10+O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFRoZW1lXHJcbntcclxuICAgIEN1c3RvbSA9ICdjdXN0b20tdGhlbWUnLFxyXG4gICAgTGlnaHQgPSAnbGlnaHQtdGhlbWUnLFxyXG4gICAgRGFyayA9ICdkYXJrLXRoZW1lJ1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFNjcm9sbERpcmVjdGlvbiB7XHJcbiAgICBUb3AsXHJcbiAgICBCb3R0b21cclxufSIsImltcG9ydCB7IElGaWxlVXBsb2FkQWRhcHRlciB9IGZyb20gJy4vZmlsZS11cGxvYWQtYWRhcHRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsZVVwbG9hZEFkYXB0ZXIgaW1wbGVtZW50cyBJRmlsZVVwbG9hZEFkYXB0ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc3VtbWFyeSBCYXNpYyBmaWxlIHVwbG9hZCBhZGFwdGVyIGltcGxlbWVudGF0aW9uIGZvciBIVFRQIHJlcXVlc3QgZm9ybSBmaWxlIGNvbnN1bXB0aW9uXHJcbiAgICAgKiBAcGFyYW0gX3NlcnZlckVuZHBvaW50VXJsIFRoZSBBUEkgZW5kcG9pbnQgZnVsbCBxdWFsaWZpZWQgYWRkcmVzcyB0aGF0IHdpbGwgcmVjZWl2ZSBhIGZvcm0gZmlsZSB0byBwcm9jZXNzIGFuZCByZXR1cm4gdGhlIG1ldGFkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2ZXJFbmRwb2ludFVybDogc3RyaW5nLCBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShmaWxlOiBGaWxlLCB1c2VyVG86IFVzZXIpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgLy9mb3JtRGF0YS5hcHBlbmQoJ25nLWNoYXQtc2VuZGVyLXVzZXJpZCcsIGN1cnJlbnRVc2VySWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmctY2hhdC1kZXN0aW5hdGFyeS11c2VyaWQnLCB1c2VyVG8uaWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3Q8TWVzc2FnZT4odGhpcy5fc2VydmVyRW5kcG9pbnRVcmwsIGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogTGVhdmluZyB0aGlzIGlmIHdlIHdhbnQgdG8gdHJhY2sgdXBsb2FkIHByb2dyZXNzIGluIGRldGFpbCBpbiB0aGUgZnV0dXJlLiBNaWdodCBuZWVkIGEgZGlmZmVyZW50IFN1YmplY3QgZ2VuZXJpYyB0eXBlIHdyYXBwZXJcclxuICAgICAgICAvLyBjb25zdCBmaWxlUmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHRoaXMuX3NlcnZlckVuZHBvaW50VXJsLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIC8vICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB1cGxvYWRQcm9ncmVzcyA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgICAgICAvLyBjb25zdCB1cGxvYWRTdGF0dXMgPSB1cGxvYWRQcm9ncmVzcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgLy9jb25zdCByZXNwb25zZVByb21pc2UgPSBuZXcgU3ViamVjdDxNZXNzYWdlPigpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9odHRwXHJcbiAgICAgICAgLy8gICAgIC5yZXF1ZXN0KGZpbGVSZXF1ZXN0KVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmIChldmVudC50eXBlID09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdXBsb2FkUHJvZ3Jlc3MubmV4dChwZXJjZW50RG9uZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSlcclxuICAgICAgICAvLyAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB1cGxvYWRQcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZHJlbiwgVmlld0NoaWxkLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgQ2hhdEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvY2hhdC1hZGFwdGVyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL2NvcmUvdXNlclwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vY29yZS9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IEZpbGVNZXNzYWdlIH0gZnJvbSBcIi4vY29yZS9maWxlLW1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tIFwiLi9jb3JlL21lc3NhZ2UtdHlwZS5lbnVtXCI7XHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvcmUvd2luZG93XCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9jb3JlL3VzZXItc3RhdHVzLmVudW1cIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9zY3JvbGwtZGlyZWN0aW9uLmVudW1cIjtcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uLCBTdGF0dXNEZXNjcmlwdGlvbiB9IGZyb20gJy4vY29yZS9sb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQgeyBJQ2hhdENvbnRyb2xsZXIgfSBmcm9tICcuL2NvcmUvY2hhdC1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvcGFnZWQtaGlzdG9yeS1jaGF0LWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBJRmlsZVVwbG9hZEFkYXB0ZXIgfSBmcm9tICcuL2NvcmUvZmlsZS11cGxvYWQtYWRhcHRlcic7XHJcbmltcG9ydCB7IERlZmF1bHRGaWxlVXBsb2FkQWRhcHRlciB9IGZyb20gJy4vY29yZS9kZWZhdWx0LWZpbGUtdXBsb2FkLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vY29yZS90aGVtZS5lbnVtJztcclxuXHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWNoYXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICduZy1jaGF0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICdhc3NldHMvaWNvbnMuY3NzJyxcclxuICAgICAgICAnYXNzZXRzL2xvYWRpbmctc3Bpbm5lci5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvbmctY2hhdC5jb21wb25lbnQuZGVmYXVsdC5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvdGhlbWVzL25nLWNoYXQudGhlbWUuZGVmYXVsdC5zY3NzJyxcclxuICAgICAgICAnYXNzZXRzL3RoZW1lcy9uZy1jaGF0LnRoZW1lLmRhcmsuc2NzcydcclxuICAgIF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmdDaGF0IGltcGxlbWVudHMgT25Jbml0LCBJQ2hhdENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICAvLyBFeHBvc2VzIGVudW1zIGZvciB0aGUgbmctdGVtcGxhdGVcclxuICAgIHB1YmxpYyBVc2VyU3RhdHVzID0gVXNlclN0YXR1cztcclxuICAgIHB1YmxpYyBNZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYWRhcHRlcjogQ2hhdEFkYXB0ZXI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB1c2VySWQ6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBtYXhpbWl6ZVdpbmRvd09uTmV3TWVzc2FnZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgcG9sbEZyaWVuZHNMaXN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBwb2xsaW5nSW50ZXJ2YWw6IG51bWJlciA9IDUwMDA7XHJcblxyXG4gICAgQElucHV0KCkgICAgXHJcbiAgICBwdWJsaWMgaGlzdG9yeUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpICAgIFxyXG4gICAgcHVibGljIGVtb2ppc0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpICAgIFxyXG4gICAgcHVibGljIGxpbmtmeUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYXVkaW9FbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIC8vIFRPRE86IFRoaXMgbWlnaHQgbmVlZCBhIGJldHRlciBjb250ZW50IHN0cmF0ZWd5XHJcbiAgICBwdWJsaWMgYXVkaW9Tb3VyY2U6IHN0cmluZyA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcnBhc2Nob2FsL25nLWNoYXQvbWFzdGVyL3NyYy9uZy1jaGF0L2Fzc2V0cy9ub3RpZmljYXRpb24ud2F2JztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHBlcnNpc3RXaW5kb3dzU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiRnJpZW5kc1wiO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbWVzc2FnZVBsYWNlaG9sZGVyOiBzdHJpbmcgPSBcIlR5cGUgYSBtZXNzYWdlXCI7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nID0gXCJTZWFyY2hcIjtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGJyb3dzZXJOb3RpZmljYXRpb25zRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgLy8gVE9ETzogVGhpcyBtaWdodCBuZWVkIGEgYmV0dGVyIGNvbnRlbnQgc3RyYXRlZ3lcclxuICAgIHB1YmxpYyBicm93c2VyTm90aWZpY2F0aW9uSWNvblNvdXJjZTogc3RyaW5nID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ycGFzY2hvYWwvbmctY2hhdC9tYXN0ZXIvc3JjL25nLWNoYXQvYXNzZXRzL25vdGlmaWNhdGlvbi5wbmcnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgYnJvd3Nlck5vdGlmaWNhdGlvblRpdGxlOiBzdHJpbmcgPSBcIk5ldyBtZXNzYWdlIGZyb21cIjtcclxuICAgIFxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBoaXN0b3J5UGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgbG9jYWxpemF0aW9uOiBMb2NhbGl6YXRpb247XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBoaWRlRnJpZW5kc0xpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGhpZGVGcmllbmRzTGlzdE9uVW5zdXBwb3J0ZWRWaWV3cG9ydDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBmaWxlVXBsb2FkVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0aGVtZTogVGhlbWUgPSBUaGVtZS5MaWdodDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGN1c3RvbVRoZW1lOiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgb25Vc2VyQ2xpY2tlZDogRXZlbnRFbWl0dGVyPFVzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VyPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIG9uVXNlckNoYXRPcGVuZWQ6IEV2ZW50RW1pdHRlcjxVc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBvblVzZXJDaGF0Q2xvc2VkOiBFdmVudEVtaXR0ZXI8VXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXI+KCk7XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIG9uTWVzc2FnZXNTZWVuOiBFdmVudEVtaXR0ZXI8TWVzc2FnZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWVzc2FnZVtdPigpO1xyXG5cclxuICAgIHByaXZhdGUgYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaGFzUGFnZWRIaXN0b3J5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRG9uJ3Qgd2FudCB0byBhZGQgdGhpcyBhcyBhIHNldHRpbmcgdG8gc2ltcGxpZnkgdXNhZ2UuIFByZXZpb3VzIHBsYWNlaG9sZGVyIGFuZCB0aXRsZSBzZXR0aW5ncyBhdmFpbGFibGUgdG8gYmUgdXNlZCwgb3IgdXNlIGZ1bGwgTG9jYWxpemF0aW9uIG9iamVjdC5cclxuICAgIHByaXZhdGUgc3RhdHVzRGVzY3JpcHRpb246IFN0YXR1c0Rlc2NyaXB0aW9uID0ge1xyXG4gICAgICAgIG9ubGluZTogJ09ubGluZScsXHJcbiAgICAgICAgYnVzeTogJ0J1c3knLFxyXG4gICAgICAgIGF3YXk6ICdBd2F5JyxcclxuICAgICAgICBvZmZsaW5lOiAnT2ZmbGluZSdcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBhdWRpb0ZpbGU6IEhUTUxBdWRpb0VsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHNlYXJjaElucHV0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgdXNlcnM6IFVzZXJbXTtcclxuXHJcbiAgICBwcml2YXRlIGdldCBsb2NhbFN0b3JhZ2VLZXkoKTogc3RyaW5nIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgbmctY2hhdC11c2Vycy0ke3RoaXMudXNlcklkfWA7IC8vIEFwcGVuZGluZyB0aGUgdXNlciBpZCBzbyB0aGUgc3RhdGUgaXMgdW5pcXVlIHBlciB1c2VyIGluIGEgY29tcHV0ZXIuICAgXHJcbiAgICB9OyBcclxuXHJcbiAgICBnZXQgZmlsdGVyZWRVc2VycygpOiBVc2VyW11cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgLy8gU2VhcmNoZXMgaW4gdGhlIGZyaWVuZCBsaXN0IGJ5IHRoZSBpbnB1dHRlZCBzZWFyY2ggc3RyaW5nXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXJzLmZpbHRlcih4ID0+IHguZGlzcGxheU5hbWUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaElucHV0LnRvVXBwZXJDYXNlKCkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZXMgdGhlIHNpemUgb2YgZWFjaCBvcGVuZWQgd2luZG93IHRvIGNhbGN1bGF0ZSBob3cgbWFueSB3aW5kb3dzIGNhbiBiZSBvcGVuZWQgb24gdGhlIHZpZXdwb3J0IGF0IHRoZSBzYW1lIHRpbWUuXHJcbiAgICBwdWJsaWMgd2luZG93U2l6ZUZhY3RvcjogbnVtYmVyID0gMzIwO1xyXG5cclxuICAgIC8vIFRvdGFsIHdpZHRoIHNpemUgb2YgdGhlIGZyaWVuZHMgbGlzdCBzZWN0aW9uXHJcbiAgICBwdWJsaWMgZnJpZW5kc0xpc3RXaWR0aDogbnVtYmVyID0gMjYyO1xyXG5cclxuICAgIC8vIEF2YWlsYWJsZSBhcmVhIHRvIHJlbmRlciB0aGUgcGx1Z2luXHJcbiAgICBwcml2YXRlIHZpZXdQb3J0VG90YWxBcmVhOiBudW1iZXI7XHJcbiAgICBcclxuICAgIC8vIFNldCB0byB0cnVlIGlmIHRoZXJlIGlzIG5vIHNwYWNlIHRvIGRpc3BsYXkgYXQgbGVhc3Qgb25lIGNoYXQgd2luZG93IGFuZCAnaGlkZUZyaWVuZHNMaXN0T25VbnN1cHBvcnRlZFZpZXdwb3J0JyBpcyB0cnVlXHJcbiAgICBwdWJsaWMgdW5zdXBwb3J0ZWRWaWV3cG9ydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEZpbGUgdXBsb2FkIHN0YXRlXHJcbiAgICBwdWJsaWMgaXNVcGxvYWRpbmdGaWxlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZmlsZVVwbG9hZEFkYXB0ZXI6IElGaWxlVXBsb2FkQWRhcHRlcjtcclxuXHJcbiAgICB3aW5kb3dzOiBXaW5kb3dbXSA9IFtdO1xyXG5cclxuICAgIGlzQm9vdHN0cmFwcGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignY2hhdE1lc3NhZ2VzJykgY2hhdE1lc3NhZ2VDbHVzdGVyczogYW55O1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2NoYXRXaW5kb3dJbnB1dCcpIGNoYXRXaW5kb3dJbnB1dHM6IGFueTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCduYXRpdmVGaWxlSW5wdXQnKSBuYXRpdmVGaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMuYm9vdHN0cmFwQ2hhdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgb25SZXNpemUoZXZlbnQ6IGFueSl7XHJcbiAgICAgICB0aGlzLnZpZXdQb3J0VG90YWxBcmVhID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgdGhpcy5Ob3JtYWxpemVXaW5kb3dzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tzIGlmIHRoZXJlIGFyZSBtb3JlIG9wZW5lZCB3aW5kb3dzIHRoYW4gdGhlIHZpZXcgcG9ydCBjYW4gZGlzcGxheVxyXG4gICAgcHJpdmF0ZSBOb3JtYWxpemVXaW5kb3dzKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgbWF4U3VwcG9ydGVkT3BlbmVkV2luZG93cyA9IE1hdGguZmxvb3IoKHRoaXMudmlld1BvcnRUb3RhbEFyZWEgLSAoIXRoaXMuaGlkZUZyaWVuZHNMaXN0ID8gdGhpcy5mcmllbmRzTGlzdFdpZHRoIDogMCkpIC8gdGhpcy53aW5kb3dTaXplRmFjdG9yKTtcclxuICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IHRoaXMud2luZG93cy5sZW5ndGggLSBtYXhTdXBwb3J0ZWRPcGVuZWRXaW5kb3dzO1xyXG5cclxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzLnNwbGljZSh0aGlzLndpbmRvd3MubGVuZ3RoIC0gZGlmZmVyZW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd3NTdGF0ZSh0aGlzLndpbmRvd3MpO1xyXG5cclxuICAgICAgICAvLyBWaWV3cG9ydCBzaG91bGQgaGF2ZSBzcGFjZSBmb3IgYXQgbGVhc3Qgb25lIGNoYXQgd2luZG93LlxyXG4gICAgICAgIHRoaXMudW5zdXBwb3J0ZWRWaWV3cG9ydCA9IHRoaXMuaGlkZUZyaWVuZHNMaXN0T25VbnN1cHBvcnRlZFZpZXdwb3J0ICYmIG1heFN1cHBvcnRlZE9wZW5lZFdpbmRvd3MgPCAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemVzIHRoZSBjaGF0IHBsdWdpbiBhbmQgdGhlIG1lc3NhZ2luZyBhZGFwdGVyXHJcbiAgICBwcml2YXRlIGJvb3RzdHJhcENoYXQoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbml0aWFsaXphdGlvbkV4Y2VwdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIgIT0gbnVsbCAmJiB0aGlzLnVzZXJJZCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1BvcnRUb3RhbEFyZWEgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVUaGVtZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplRGVmYXVsdFRleHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJyb3dzZXJOb3RpZmljYXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmluZGluZyBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5tZXNzYWdlUmVjZWl2ZWRIYW5kbGVyID0gKHVzZXIsIG1zZykgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZCh1c2VyLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZyaWVuZHNMaXN0Q2hhbmdlZEhhbmRsZXIgPSAodXNlcnMpID0+IHRoaXMub25GcmllbmRzTGlzdENoYW5nZWQodXNlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvYWRpbmcgY3VycmVudCB1c2VycyBsaXN0XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb2xsRnJpZW5kc0xpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgYSBsb25nIHBvbGwgaW50ZXJ2YWwgdG8gdXBkYXRlIHRoZSBmcmllbmRzIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRnJpZW5kc0xpc3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaEZyaWVuZHNMaXN0KGZhbHNlKSwgdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHBvbGxpbmcgd2FzIGRpc2FibGVkLCBhIGZyaWVuZHMgbGlzdCB1cGRhdGUgbWVjaGFuaXNtIHdpbGwgaGF2ZSB0byBiZSBpbXBsZW1lbnRlZCBpbiB0aGUgQ2hhdEFkYXB0ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaEZyaWVuZHNMaXN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckF1ZGlvRmlsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzUGFnZWRIaXN0b3J5ID0gdGhpcy5hZGFwdGVyIGluc3RhbmNlb2YgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVVcGxvYWRVcmwgJiYgdGhpcy5maWxlVXBsb2FkVXJsICE9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZEFkYXB0ZXIgPSBuZXcgRGVmYXVsdEZpbGVVcGxvYWRBZGFwdGVyKHRoaXMuZmlsZVVwbG9hZFVybCwgdGhpcy5faHR0cENsaWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Jvb3RzdHJhcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemF0aW9uRXhjZXB0aW9uID0gZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0Jvb3RzdHJhcHBlZCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJuZy1jaGF0IGNvbXBvbmVudCBjb3VsZG4ndCBiZSBib290c3RyYXBwZWQuXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5nLWNoYXQgY2FuJ3QgYmUgaW5pdGlhbGl6ZWQgd2l0aG91dCBhbiB1c2VyIGlkLiBQbGVhc2UgbWFrZSBzdXJlIHlvdSd2ZSBwcm92aWRlZCBhbiB1c2VySWQgYXMgYSBwYXJhbWV0ZXIgb2YgdGhlIG5nLWNoYXQgY29tcG9uZW50LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5nLWNoYXQgY2FuJ3QgYmUgYm9vdHN0cmFwcGVkIHdpdGhvdXQgYSBDaGF0QWRhcHRlci4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UndmUgcHJvdmlkZWQgYSBDaGF0QWRhcHRlciBpbXBsZW1lbnRhdGlvbiBhcyBhIHBhcmFtZXRlciBvZiB0aGUgbmctY2hhdCBjb21wb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsaXphdGlvbkV4Y2VwdGlvbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQW4gZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCB3aGlsZSBpbml0aWFsaXppbmcgbmctY2hhdC4gRGV0YWlsczogJHtpbml0aWFsaXphdGlvbkV4Y2VwdGlvbi5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihpbml0aWFsaXphdGlvbkV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZXMgYnJvd3NlciBub3RpZmljYXRpb25zXHJcbiAgICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVCcm93c2VyTm90aWZpY2F0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNFbmFibGVkICYmIChcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemVzIGRlZmF1bHQgdGV4dFxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRGVmYXVsdFRleHQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxpemF0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGl6YXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlUGxhY2Vob2xkZXI6IHRoaXMubWVzc2FnZVBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IHRoaXMuc2VhcmNoUGxhY2Vob2xkZXIsIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNEZXNjcmlwdGlvbjogdGhpcy5zdGF0dXNEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGJyb3dzZXJOb3RpZmljYXRpb25UaXRsZTogdGhpcy5icm93c2VyTm90aWZpY2F0aW9uVGl0bGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTWVzc2FnZUhpc3RvcnlQbGFjZWhvbGRlcjogXCJMb2FkIG9sZGVyIG1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplVGhlbWUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVRoZW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy50aGVtZSA9IFRoZW1lLkN1c3RvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50aGVtZSAhPSBUaGVtZS5MaWdodCAmJiB0aGlzLnRoZW1lICE9IFRoZW1lLkRhcmspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBVc2UgZXMyMDE3IGluIGZ1dHVyZSB3aXRoIE9iamVjdC52YWx1ZXMoVGhlbWUpLmluY2x1ZGVzKHRoaXMudGhlbWUpIHRvIGRvIHRoaXMgY2hlY2tcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRoZW1lIGNvbmZpZ3VyYXRpb24gZm9yIG5nLWNoYXQuIFwiJHt0aGlzLnRoZW1lfVwiIGlzIG5vdCBhIHZhbGlkIHRoZW1lIHZhbHVlLmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kcyBhIHJlcXVlc3QgdG8gbG9hZCB0aGUgZnJpZW5kcyBsaXN0XHJcbiAgICBwcml2YXRlIGZldGNoRnJpZW5kc0xpc3QoaXNCb290c3RyYXBwaW5nOiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRhcHRlci5saXN0RnJpZW5kcygpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgodXNlcnM6IFVzZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzQm9vdHN0cmFwcGluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0b3JlV2luZG93c1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaE1lc3NhZ2VIaXN0b3J5KHdpbmRvdzogV2luZG93KSB7XHJcbiAgICAgICAgLy8gTm90IGlkZWFsIGJ1dCB3aWxsIGtlZXAgdGhpcyB1bnRpbCB3ZSBkZWNpZGUgaWYgd2UgYXJlIHNoaXBwaW5nIHBhZ2luYXRpb24gd2l0aCB0aGUgZGVmYXVsdCBhZGFwdGVyXHJcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlciBpbnN0YW5jZW9mIFBhZ2VkSGlzdG9yeUNoYXRBZGFwdGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmdldE1lc3NhZ2VIaXN0b3J5QnlQYWdlKHdpbmRvdy5jaGF0dGluZ1RvLmlkLCB0aGlzLmhpc3RvcnlQYWdlU2l6ZSwgKyt3aW5kb3cuaGlzdG9yeVBhZ2UpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChyZXN1bHQ6IE1lc3NhZ2VbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mb3JFYWNoKChtZXNzYWdlKSA9PiB0aGlzLmFzc2VydE1lc3NhZ2VUeXBlKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMgPSByZXN1bHQuY29uY2F0KHdpbmRvdy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uID0gKHdpbmRvdy5oaXN0b3J5UGFnZSA9PSAxKSA/IFNjcm9sbERpcmVjdGlvbi5Cb3R0b20gOiBTY3JvbGxEaXJlY3Rpb24uVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oYXNNb3JlTWVzc2FnZXMgPSByZXN1bHQubGVuZ3RoID09IHRoaXMuaGlzdG9yeVBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkZldGNoTWVzc2FnZUhpc3RvcnlMb2FkZWQocmVzdWx0LCB3aW5kb3csIGRpcmVjdGlvbiwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmdldE1lc3NhZ2VIaXN0b3J5KHdpbmRvdy5jaGF0dGluZ1RvLmlkKVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzdWx0OiBNZXNzYWdlW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaCgobWVzc2FnZSkgPT4gdGhpcy5hc3NlcnRNZXNzYWdlVHlwZShtZXNzYWdlKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMgPSByZXN1bHQuY29uY2F0KHdpbmRvdy5tZXNzYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmlzTG9hZGluZ0hpc3RvcnkgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkZldGNoTWVzc2FnZUhpc3RvcnlMb2FkZWQocmVzdWx0LCB3aW5kb3csIFNjcm9sbERpcmVjdGlvbi5Cb3R0b20pKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GZXRjaE1lc3NhZ2VIaXN0b3J5TG9hZGVkKG1lc3NhZ2VzOiBNZXNzYWdlW10sIHdpbmRvdzogV2luZG93LCBkaXJlY3Rpb246IFNjcm9sbERpcmVjdGlvbiwgZm9yY2VNYXJrTWVzc2FnZXNBc1NlZW46IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgZGlyZWN0aW9uKVxyXG5cclxuICAgICAgICBpZiAod2luZG93Lmhhc0ZvY3VzIHx8IGZvcmNlTWFya01lc3NhZ2VzQXNTZWVuKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdW5zZWVuTWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIobSA9PiAhbS5zZWVuT24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQodW5zZWVuTWVzc2FnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZXNTZWVuLmVtaXQodW5zZWVuTWVzc2FnZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGVzIHRoZSBmcmllbmRzIGxpc3QgdmlhIHRoZSBldmVudCBoYW5kbGVyXHJcbiAgICBwcml2YXRlIG9uRnJpZW5kc0xpc3RDaGFuZ2VkKHVzZXJzOiBVc2VyW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHVzZXJzKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyByZWNlaXZlZCBtZXNzYWdlcyBieSB0aGUgYWRhcHRlclxyXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZCh1c2VyOiBVc2VyLCBtZXNzYWdlOiBNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1c2VyICYmIG1lc3NhZ2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hhdFdpbmRvdyA9IHRoaXMub3BlbkNoYXRXaW5kb3codXNlcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFzc2VydE1lc3NhZ2VUeXBlKG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjaGF0V2luZG93WzFdIHx8ICF0aGlzLmhpc3RvcnlFbmFibGVkKXtcclxuICAgICAgICAgICAgICAgIGNoYXRXaW5kb3dbMF0ubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbENoYXRXaW5kb3coY2hhdFdpbmRvd1swXSwgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXRXaW5kb3dbMF0uaGFzRm9jdXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQoW21lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWVzc2FnZXNTZWVuLmVtaXQoW21lc3NhZ2VdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbWl0TWVzc2FnZVNvdW5kKGNoYXRXaW5kb3dbMF0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2l0aHViIGlzc3VlICM1OCBcclxuICAgICAgICAgICAgLy8gRG8gbm90IHB1c2ggYnJvd3NlciBub3RpZmljYXRpb25zIHdpdGggbWVzc2FnZSBjb250ZW50IGZvciBwcml2YWN5IHB1cnBvc2VzIGlmIHRoZSAnbWF4aW1pemVXaW5kb3dPbk5ld01lc3NhZ2UnIHNldHRpbmcgaXMgb2ZmIGFuZCB0aGlzIGlzIGEgbmV3IGNoYXQgd2luZG93LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhpbWl6ZVdpbmRvd09uTmV3TWVzc2FnZSB8fCAoIWNoYXRXaW5kb3dbMV0gJiYgIWNoYXRXaW5kb3dbMF0uaXNDb2xsYXBzZWQpKVxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgLy8gU29tZSBtZXNzYWdlcyBhcmUgbm90IHB1c2hlZCBiZWNhdXNlIHRoZXkgYXJlIGxvYWRlZCBieSBmZXRjaGluZyB0aGUgaGlzdG9yeSBoZW5jZSB3aHkgd2Ugc3VwcGx5IHRoZSBtZXNzYWdlIGhlcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdEJyb3dzZXJOb3RpZmljYXRpb24oY2hhdFdpbmRvd1swXSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3BlbnMgYSBuZXcgY2hhdCB3aGluZG93LiBUYWtlcyBjYXJlIG9mIGF2YWlsYWJsZSB2aWV3cG9ydFxyXG4gICAgLy8gUmV0dXJucyA9PiBbV2luZG93OiBXaW5kb3cgb2JqZWN0IHJlZmVyZW5jZSwgYm9vbGVhbjogSW5kaWNhdGVzIGlmIHRoaXMgd2luZG93IGlzIGEgbmV3IGNoYXQgd2luZG93XVxyXG4gICAgcHVibGljIG9wZW5DaGF0V2luZG93KHVzZXI6IFVzZXIsIGZvY3VzT25OZXdXaW5kb3c6IGJvb2xlYW4gPSBmYWxzZSwgaW52b2tlZEJ5VXNlckNsaWNrOiBib29sZWFuID0gZmFsc2UpOiBbV2luZG93LCBib29sZWFuXVxyXG4gICAge1xyXG4gICAgICAgIC8vIElzIHRoaXMgd2luZG93IG9wZW5lZD9cclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlci5pZCk7XHJcblxyXG4gICAgICAgIGlmICghb3BlbmVkV2luZG93KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGludm9rZWRCeVVzZXJDbGljaykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Vc2VyQ2xpY2tlZC5lbWl0KHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZWZlciB0byBpc3N1ZSAjNTggb24gR2l0aHViIFxyXG4gICAgICAgICAgICBsZXQgY29sbGFwc2VXaW5kb3cgPSBpbnZva2VkQnlVc2VyQ2xpY2sgPyBmYWxzZSA6ICF0aGlzLm1heGltaXplV2luZG93T25OZXdNZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld0NoYXRXaW5kb3c6IFdpbmRvdyA9IHtcclxuICAgICAgICAgICAgICAgIGNoYXR0aW5nVG86IHVzZXIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogIFtdLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nSGlzdG9yeTogdGhpcy5oaXN0b3J5RW5hYmxlZCxcclxuICAgICAgICAgICAgICAgIGhhc0ZvY3VzOiBmYWxzZSwgLy8gVGhpcyB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSAnbmV3TWVzc2FnZScgaW5wdXQgZ2V0cyB0aGUgY3VycmVudCBmb2N1c1xyXG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ6IGNvbGxhcHNlV2luZG93LFxyXG4gICAgICAgICAgICAgICAgaGFzTW9yZU1lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhpc3RvcnlQYWdlOiAwXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBMb2FkcyB0aGUgY2hhdCBoaXN0b3J5IHZpYSBhbiBSeEpzIE9ic2VydmFibGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yeUVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hNZXNzYWdlSGlzdG9yeShuZXdDaGF0V2luZG93KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy53aW5kb3dzLnVuc2hpZnQobmV3Q2hhdFdpbmRvdyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJcyB0aGVyZSBlbm91Z2ggc3BhY2UgbGVmdCBpbiB0aGUgdmlldyBwb3J0ID9cclxuICAgICAgICAgICAgaWYgKHRoaXMud2luZG93cy5sZW5ndGggKiB0aGlzLndpbmRvd1NpemVGYWN0b3IgPj0gdGhpcy52aWV3UG9ydFRvdGFsQXJlYSAtICghdGhpcy5oaWRlRnJpZW5kc0xpc3QgPyB0aGlzLmZyaWVuZHNMaXN0V2lkdGggOiAwKSlcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMud2luZG93cy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVXaW5kb3dzU3RhdGUodGhpcy53aW5kb3dzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmb2N1c09uTmV3V2luZG93ICYmICFjb2xsYXBzZVdpbmRvdykgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNPbldpbmRvdyhuZXdDaGF0V2luZG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vblVzZXJDaGF0T3BlbmVkLmVtaXQodXNlcik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW25ld0NoYXRXaW5kb3csIHRydWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBleGlzdGluZyBjaGF0IHdpbmRvdyAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBbb3BlbmVkV2luZG93LCBmYWxzZV07ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb2N1cyBvbiB0aGUgaW5wdXQgZWxlbWVudCBvZiB0aGUgc3VwcGxpZWQgd2luZG93XHJcbiAgICBwcml2YXRlIGZvY3VzT25XaW5kb3cod2luZG93OiBXaW5kb3csIGNhbGxiYWNrOiBGdW5jdGlvbiA9ICgpID0+IHt9KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgd2luZG93SW5kZXggPSB0aGlzLndpbmRvd3MuaW5kZXhPZih3aW5kb3cpO1xyXG4gICAgICAgIGlmICh3aW5kb3dJbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGF0V2luZG93SW5wdXRzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlSW5wdXRUb0ZvY3VzID0gdGhpcy5jaGF0V2luZG93SW5wdXRzLnRvQXJyYXkoKVt3aW5kb3dJbmRleF07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXRUb0ZvY3VzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2Nyb2xscyBhIGNoYXQgd2luZG93IG1lc3NhZ2UgZmxvdyB0byB0aGUgYm90dG9tXHJcbiAgICBwcml2YXRlIHNjcm9sbENoYXRXaW5kb3cod2luZG93OiBXaW5kb3csIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghd2luZG93LmlzQ29sbGFwc2VkKXtcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0luZGV4ID0gdGhpcy53aW5kb3dzLmluZGV4T2Yod2luZG93KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGF0TWVzc2FnZUNsdXN0ZXJzKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0V2luZG93ID0gdGhpcy5jaGF0TWVzc2FnZUNsdXN0ZXJzLnRvQXJyYXkoKVt3aW5kb3dJbmRleF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuY2hhdE1lc3NhZ2VDbHVzdGVycy50b0FycmF5KClbd2luZG93SW5kZXhdLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICggZGlyZWN0aW9uID09PSBTY3JvbGxEaXJlY3Rpb24uVG9wICkgPyAwIDogZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1hcmtzIGFsbCBtZXNzYWdlcyBwcm92aWRlZCBhcyByZWFkIHdpdGggdGhlIGN1cnJlbnQgdGltZS5cclxuICAgIHB1YmxpYyBtYXJrTWVzc2FnZXNBc1JlYWQobWVzc2FnZXM6IE1lc3NhZ2VbXSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKChtc2cpPT57XHJcbiAgICAgICAgICAgIG1zZy5zZWVuT24gPSBjdXJyZW50RGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdWZmZXJzIGF1ZGlvIGZpbGUgKEZvciBjb21wb25lbnQncyBib290c3RyYXBwaW5nKVxyXG4gICAgcHJpdmF0ZSBidWZmZXJBdWRpb0ZpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9Tb3VyY2UgJiYgdGhpcy5hdWRpb1NvdXJjZS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUgPSBuZXcgQXVkaW8oKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUuc3JjID0gdGhpcy5hdWRpb1NvdXJjZTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ZpbGUubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBFbWl0cyBhIG1lc3NhZ2Ugbm90aWZpY2F0aW9uIGF1ZGlvIGlmIGVuYWJsZWQgYWZ0ZXIgZXZlcnkgbWVzc2FnZSByZWNlaXZlZFxyXG4gICAgcHJpdmF0ZSBlbWl0TWVzc2FnZVNvdW5kKHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvRW5hYmxlZCAmJiAhd2luZG93Lmhhc0ZvY3VzICYmIHRoaXMuYXVkaW9GaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9GaWxlLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1pdHMgYSBicm93c2VyIG5vdGlmaWNhdGlvblxyXG4gICAgcHJpdmF0ZSBlbWl0QnJvd3Nlck5vdGlmaWNhdGlvbih3aW5kb3c6IFdpbmRvdywgbWVzc2FnZTogTWVzc2FnZSk6IHZvaWRcclxuICAgIHsgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuYnJvd3Nlck5vdGlmaWNhdGlvbnNCb290c3RyYXBwZWQgJiYgIXdpbmRvdy5oYXNGb2N1cyAmJiBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKGAke3RoaXMubG9jYWxpemF0aW9uLmJyb3dzZXJOb3RpZmljYXRpb25UaXRsZX0gJHt3aW5kb3cuY2hhdHRpbmdUby5kaXNwbGF5TmFtZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAnYm9keSc6IG1lc3NhZ2UubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICdpY29uJzogdGhpcy5icm93c2VyTm90aWZpY2F0aW9uSWNvblNvdXJjZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0sIG1lc3NhZ2UubWVzc2FnZS5sZW5ndGggPD0gNTAgPyA1MDAwIDogNzAwMCk7IC8vIE1vcmUgdGltZSB0byByZWFkIGxvbmdlciBtZXNzYWdlc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlcyBjdXJyZW50IHdpbmRvd3Mgc3RhdGUgaW50byBsb2NhbCBzdG9yYWdlIGlmIHBlcnNpc3RlbmNlIGlzIGVuYWJsZWRcclxuICAgIHByaXZhdGUgdXBkYXRlV2luZG93c1N0YXRlKHdpbmRvd3M6IFdpbmRvd1tdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RXaW5kb3dzU3RhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdXNlcnNJZHMgPSB3aW5kb3dzLm1hcCgodykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHcuY2hhdHRpbmdUby5pZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodXNlcnNJZHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXN0b3JlV2luZG93c1N0YXRlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBlcnNpc3RXaW5kb3dzU3RhdGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHJpbmdmaWVkVXNlcklkcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubG9jYWxTdG9yYWdlS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nZmllZFVzZXJJZHMgJiYgc3RyaW5nZmllZFVzZXJJZHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlcklkcyA9IDxudW1iZXJbXT5KU09OLnBhcnNlKHN0cmluZ2ZpZWRVc2VySWRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJzVG9SZXN0b3JlID0gdGhpcy51c2Vycy5maWx0ZXIodSA9PiB1c2VySWRzLmluZGV4T2YodS5pZCkgPj0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzVG9SZXN0b3JlLmZvckVhY2goKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQ2hhdFdpbmRvdyh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXN0b3JpbmcgbmctY2hhdCB3aW5kb3dzIHN0YXRlLiBEZXRhaWxzOiAke2V4fWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXRzIGNsb3Nlc3Qgb3BlbiB3aW5kb3cgaWYgYW55LiBNb3N0IHJlY2VudCBvcGVuZWQgaGFzIHByaW9yaXR5IChSaWdodClcclxuICAgIHByaXZhdGUgZ2V0Q2xvc2VzdFdpbmRvdyh3aW5kb3c6IFdpbmRvdyk6IFdpbmRvdyB8IHVuZGVmaW5lZFxyXG4gICAgeyAgIFxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3dzW2luZGV4IC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDAgJiYgdGhpcy53aW5kb3dzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aW5kb3dzW2luZGV4ICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXNzZXJ0TWVzc2FnZVR5cGUobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQge1xyXG4gICAgICAgIC8vIEFsd2F5cyBmYWxsYmFjayB0byBcIlRleHRcIiBtZXNzYWdlcyB0byBhdm9pZCByZW5kZW5yaW5nIGlzc3Vlc1xyXG4gICAgICAgIGlmICghbWVzc2FnZS50eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVzc2FnZS50eXBlID0gTWVzc2FnZVR5cGUuVGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgdG90YWwgdW5yZWFkIG1lc3NhZ2VzIGZyb20gYSBjaGF0IHdpbmRvdy4gVE9ETzogQ291bGQgdXNlIHNvbWUgQW5ndWxhciBwaXBlcyBpbiB0aGUgZnV0dXJlIFxyXG4gICAgdW5yZWFkTWVzc2FnZXNUb3RhbCh3aW5kb3c6IFdpbmRvdyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmICh3aW5kb3cpe1xyXG4gICAgICAgICAgICBsZXQgdG90YWxVbnJlYWRNZXNzYWdlcyA9IHdpbmRvdy5tZXNzYWdlcy5maWx0ZXIoeCA9PiB4LmZyb21JZCAhPSB0aGlzLnVzZXJJZCAmJiAheC5zZWVuT24pLmxlbmd0aDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0b3RhbFVucmVhZE1lc3NhZ2VzID4gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsVW5yZWFkTWVzc2FnZXMgPiA5OSkgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBcIjk5K1wiO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodG90YWxVbnJlYWRNZXNzYWdlcyk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBFbXB0eSBmYWxsYmFjay5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlYWRNZXNzYWdlc1RvdGFsQnlVc2VyKHVzZXI6IFVzZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlci5pZCk7XHJcblxyXG4gICAgICAgIGlmIChvcGVuZWRXaW5kb3cpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bnJlYWRNZXNzYWdlc1RvdGFsKG9wZW5lZFdpbmRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBFbXB0eSBmYWxsYmFjay5cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKiAgTW9uaXRvcnMgcHJlc3NlZCBrZXlzIG9uIGEgY2hhdCB3aW5kb3dcclxuICAgICAgICAtIERpc3BhdGNoZXMgYSBtZXNzYWdlIHdoZW4gdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkXHJcbiAgICAgICAgLSBUYWJzIGJldHdlZW4gd2luZG93cyBvbiBUQUIgb3IgU0hJRlQgKyBUQUJcclxuICAgICAgICAtIENsb3NlcyB0aGUgY3VycmVudCBmb2N1c2VkIHdpbmRvdyBvbiBFU0NcclxuICAgICovXHJcbiAgICBvbkNoYXRJbnB1dFR5cGVkKGV2ZW50OiBhbnksIHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm5ld01lc3NhZ2UgJiYgd2luZG93Lm5ld01lc3NhZ2UudHJpbSgpICE9IFwiXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mcm9tSWQgPSB0aGlzLnVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnRvSWQgPSB3aW5kb3cuY2hhdHRpbmdUby5pZDtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UgPSB3aW5kb3cubmV3TWVzc2FnZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5ld01lc3NhZ2UgPSBcIlwiOyAvLyBSZXNldHMgdGhlIG5ldyBtZXNzYWdlIGlucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRXaW5kb3dJbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUlucHV0VG9Gb2N1cyA9IHRoaXMuY2hhdFdpbmRvd0lucHV0cy50b0FycmF5KClbY3VycmVudFdpbmRvd0luZGV4ICsgKGV2ZW50LnNoaWZ0S2V5ID8gMSA6IC0xKV07IC8vIEdvZXMgYmFjayBvbiBzaGlmdCArIHRhYlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZUlucHV0VG9Gb2N1cylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFZGdlIHdpbmRvd3MsIGdvIHRvIHN0YXJ0IG9yIGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJbnB1dFRvRm9jdXMgPSB0aGlzLmNoYXRXaW5kb3dJbnB1dHMudG9BcnJheSgpW2N1cnJlbnRXaW5kb3dJbmRleCA+IDAgPyAwIDogdGhpcy5jaGF0V2luZG93SW5wdXRzLmxlbmd0aCAtIDFdOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXRUb0ZvY3VzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNzpcclxuICAgICAgICAgICAgICAgIGxldCBjbG9zZXN0V2luZG93ID0gdGhpcy5nZXRDbG9zZXN0V2luZG93KHdpbmRvdyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2N1c09uV2luZG93KGNsb3Nlc3RXaW5kb3csICgpID0+IHsgdGhpcy5vbkNsb3NlQ2hhdFdpbmRvdyh3aW5kb3cpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VDaGF0V2luZG93KHdpbmRvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsb3NlcyBhIGNoYXQgd2luZG93IHZpYSB0aGUgY2xvc2UgJ1gnIGJ1dHRvblxyXG4gICAgb25DbG9zZUNoYXRXaW5kb3cod2luZG93OiBXaW5kb3cpOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMud2luZG93cy5pbmRleE9mKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIHRoaXMud2luZG93cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVdpbmRvd3NTdGF0ZSh0aGlzLndpbmRvd3MpO1xyXG5cclxuICAgICAgICB0aGlzLm9uVXNlckNoYXRDbG9zZWQuZW1pdCh3aW5kb3cuY2hhdHRpbmdUbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9nZ2xlIGZyaWVuZHMgbGlzdCB2aXNpYmlsaXR5XHJcbiAgICBvbkNoYXRUaXRsZUNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9nZ2xlcyBhIGNoYXQgd2luZG93IHZpc2liaWxpdHkgYmV0d2VlbiBtYXhpbWl6ZWQvbWluaW1pemVkXHJcbiAgICBvbkNoYXRXaW5kb3dDbGlja2VkKHdpbmRvdzogV2luZG93KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5pc0NvbGxhcHNlZCA9ICF3aW5kb3cuaXNDb2xsYXBzZWQ7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDaGF0V2luZG93KHdpbmRvdywgU2Nyb2xsRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzZXJ0cyBpZiBhIHVzZXIgYXZhdGFyIGlzIHZpc2libGUgaW4gYSBjaGF0IGNsdXN0ZXJcclxuICAgIGlzQXZhdGFyVmlzaWJsZSh3aW5kb3c6IFdpbmRvdywgbWVzc2FnZTogTWVzc2FnZSwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAobWVzc2FnZS5mcm9tSWQgIT0gdGhpcy51c2VySWQpe1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gRmlyc3QgbWVzc2FnZSwgZ29vZCB0byBzaG93IHRoZSB0aHVtYm5haWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHByZXZpb3VzIG1lc3NhZ2UgYmVsb25ncyB0byB0aGUgc2FtZSB1c2VyLCBpZiBpdCBiZWxvbmdzIHRoZXJlIGlzIG5vIG5lZWQgdG8gc2hvdyB0aGUgYXZhdGFyIGFnYWluIHRvIGZvcm0gdGhlIG1lc3NhZ2UgY2x1c3RlclxyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5tZXNzYWdlc1tpbmRleCAtIDFdLmZyb21JZCAhPSBtZXNzYWdlLmZyb21JZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2dnbGVzIGEgd2luZG93IGZvY3VzIG9uIHRoZSBmb2N1cy9ibHVyIG9mIGEgJ25ld01lc3NhZ2UnIGlucHV0XHJcbiAgICB0b2dnbGVXaW5kb3dGb2N1cyh3aW5kb3c6IFdpbmRvdyk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuaGFzRm9jdXMgPSAhd2luZG93Lmhhc0ZvY3VzO1xyXG4gICAgICAgIGlmKHdpbmRvdy5oYXNGb2N1cykge1xyXG4gICAgICAgICAgICBjb25zdCB1bnJlYWRNZXNzYWdlcyA9IHdpbmRvdy5tZXNzYWdlcy5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLnNlZW5PbiA9PSBudWxsICYmIG1lc3NhZ2UudG9JZCA9PSB0aGlzLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodW5yZWFkTWVzc2FnZXMgJiYgdW5yZWFkTWVzc2FnZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrTWVzc2FnZXNBc1JlYWQodW5yZWFkTWVzc2FnZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2VzU2Vlbi5lbWl0KHVucmVhZE1lc3NhZ2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBbTG9jYWxpemVkXSBSZXR1cm5zIHRoZSBzdGF0dXMgZGVzY3JpcHRpdmUgdGl0bGVcclxuICAgIGdldFN0YXR1c1RpdGxlKHN0YXR1czogVXNlclN0YXR1cykgOiBhbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VycmVudFN0YXR1cyA9IHN0YXR1cy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvbi5zdGF0dXNEZXNjcmlwdGlvbltjdXJyZW50U3RhdHVzXTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyT3BlbkNoYXRXaW5kb3codXNlcjogVXNlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh1c2VyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hhdFdpbmRvdyh1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckNsb3NlQ2hhdFdpbmRvdyh1c2VySWQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB0aGlzLndpbmRvd3MuZmluZCh4ID0+IHguY2hhdHRpbmdUby5pZCA9PSB1c2VySWQpO1xyXG5cclxuICAgICAgICBpZiAob3BlbmVkV2luZG93KXtcclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlQ2hhdFdpbmRvdyhvcGVuZWRXaW5kb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyVG9nZ2xlQ2hhdFdpbmRvd1Zpc2liaWxpdHkodXNlcklkOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gdGhpcy53aW5kb3dzLmZpbmQoeCA9PiB4LmNoYXR0aW5nVG8uaWQgPT0gdXNlcklkKTtcclxuXHJcbiAgICAgICAgaWYgKG9wZW5lZFdpbmRvdyl7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGF0V2luZG93Q2xpY2tlZChvcGVuZWRXaW5kb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUcmlnZ2VycyBuYXRpdmUgZmlsZSB1cGxvYWQgZm9yIGZpbGUgc2VsZWN0aW9uIGZyb20gdGhlIHVzZXJcclxuICAgIHRyaWdnZXJOYXRpdmVGaWxlVXBsb2FkKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZUZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlcyBmaWxlIHNlbGVjdGlvbiBhbmQgdXBsb2FkcyB0aGUgc2VsZWN0ZWQgZmlsZSB1c2luZyB0aGUgZmlsZSB1cGxvYWQgYWRhcHRlclxyXG4gICAgb25GaWxlQ2hvc2VuKHdpbmRvdzogV2luZG93KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZmlsZTogRmlsZSA9IHRoaXMubmF0aXZlRmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIHRoaXMuaXNVcGxvYWRpbmdGaWxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGZhaWx1cmVcclxuICAgICAgICB0aGlzLmZpbGVVcGxvYWRBZGFwdGVyLnVwbG9hZEZpbGUoZmlsZSwgd2luZG93LmNoYXR0aW5nVG8pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZmlsZU1lc3NhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VwbG9hZGluZ0ZpbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmaWxlTWVzc2FnZS5mcm9tSWQgPSB0aGlzLnVzZXJJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoIGZpbGUgbWVzc2FnZSB0byBjdXJyZW50IHVzZXIgd2luZG93ICAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubWVzc2FnZXMucHVzaChmaWxlTWVzc2FnZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZW5kTWVzc2FnZShmaWxlTWVzc2FnZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhdFdpbmRvdyh3aW5kb3csIFNjcm9sbERpcmVjdGlvbi5Cb3R0b20pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2V0cyB0aGUgZmlsZSB1cGxvYWQgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVGaWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5sZXQgZW1vamlEaWN0aW9uYXJ5ID0gW1xyXG4gICAgeyBwYXR0ZXJuczogWyc6KScsICc6LSknLCAnPSknXSwgdW5pY29kZTogJ8Owwp/CmMKDJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6RCcsICc6LUQnLCAnPUQnXSwgdW5pY29kZTogJ8Owwp/CmMKAJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6KCcsICc6LSgnLCAnPSgnXSwgdW5pY29kZTogJ8Owwp/CmcKBJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6fCcsICc6LXwnLCAnPXwnXSwgdW5pY29kZTogJ8Owwp/CmMKQJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6KicsICc6LSonLCAnPSonXSwgdW5pY29kZTogJ8Owwp/CmMKZJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWydUX1QnLCAnVC5UJ10sIHVuaWNvZGU6ICfDsMKfwpjCrScgfSxcclxuICAgIHsgcGF0dGVybnM6IFsnOk8nLCAnOi1PJywgJz1PJywgJzpvJywgJzotbycsICc9byddLCB1bmljb2RlOiAnw7DCn8KYwq4nIH0sXHJcbiAgICB7IHBhdHRlcm5zOiBbJzpQJywgJzotUCcsICc9UCcsICc6cCcsICc6LXAnLCAnPXAnXSwgdW5pY29kZTogJ8Owwp/CmMKLJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc+LjwnXSwgdW5pY29kZTogJ8Owwp/CmMKjJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWydALkAnXSwgdW5pY29kZTogJ8Owwp/CmMK1JyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWycqLionXSwgdW5pY29kZTogJ8Owwp/CmMKNJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc8MyddLCB1bmljb2RlOiAnw6LCncKkw6/CuMKPJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWydeLl4nXSwgdW5pY29kZTogJ8Owwp/CmMKKJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6KzEnXSwgdW5pY29kZTogJ8Owwp/CkcKNJyB9LFxyXG4gICAgeyBwYXR0ZXJuczogWyc6LTEnXSwgdW5pY29kZTogJ8Owwp/CkcKOJyB9XHJcbl07XHJcblxyXG4vKlxyXG4gKiBUcmFuc2Zvcm1zIGNvbW1vbiBlbW9qaSB0ZXh0IHRvIFVURiBlbmNvZGVkIGVtb2ppc1xyXG4qL1xyXG5AUGlwZSh7bmFtZTogJ2Vtb2ppZnknfSlcclxuZXhwb3J0IGNsYXNzIEVtb2ppZnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0obWVzc2FnZTogc3RyaW5nLCBwaXBlRW5hYmxlZDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHBpcGVFbmFibGVkICYmIG1lc3NhZ2UgJiYgbWVzc2FnZS5sZW5ndGggPiAxKSB7ICBcclxuICAgICAgICAgICAgZW1vamlEaWN0aW9uYXJ5LmZvckVhY2goZW1vamkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW1vamkucGF0dGVybnMuZm9yRWFjaChwYXR0ZXJuID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKHBhdHRlcm4sIGVtb2ppLnVuaWNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKlxyXG4gKiBUcmFuc2Zvcm1zIHRleHQgY29udGFpbmluZyBVUkxzIG9yIEUtbWFpbHMgdG8gdmFsaWQgbGlua3MvbWFpbHRvc1xyXG4qL1xyXG5AUGlwZSh7bmFtZTogJ2xpbmtmeSd9KVxyXG5leHBvcnQgY2xhc3MgTGlua2Z5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKG1lc3NhZ2U6IHN0cmluZywgcGlwZUVuYWJsZWQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChwaXBlRW5hYmxlZCAmJiBtZXNzYWdlICYmIG1lc3NhZ2UubGVuZ3RoID4gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXBsYWNlZFRleHQ7XHJcbiAgICAgICAgICAgIGxldCByZXBsYWNlUGF0dGVyblByb3RvY29sO1xyXG4gICAgICAgICAgICBsZXQgcmVwbGFjZVBhdHRlcm5XV1c7XHJcbiAgICAgICAgICAgIGxldCByZXBsYWNlUGF0dGVybk1haWxUbztcclxuXHJcbiAgICAgICAgICAgIC8vIFVSTHMgc3RhcnRpbmcgd2l0aCBodHRwOi8vLCBodHRwczovLywgb3IgZnRwOi8vXHJcbiAgICAgICAgICAgIHJlcGxhY2VQYXR0ZXJuUHJvdG9jb2wgPSAvKFxcYihodHRwcz98ZnRwKTpcXC9cXC9bLUEtWjAtOSsmQCNcXC8lPz1+X3whOiwuO10qWy1BLVowLTkrJkAjXFwvJT1+X3xdKS9naW07XHJcbiAgICAgICAgICAgIHJlcGxhY2VkVGV4dCA9IG1lc3NhZ2UucmVwbGFjZShyZXBsYWNlUGF0dGVyblByb3RvY29sLCAnPGEgaHJlZj1cIiQxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDE8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBVUkxzIHN0YXJ0aW5nIHdpdGggXCJ3d3cuXCIgKGlnbm9yaW5nIC8vIGJlZm9yZSBpdCkuXHJcbiAgICAgICAgICAgIHJlcGxhY2VQYXR0ZXJuV1dXID0gLyhefFteXFwvXSkod3d3XFwuW1xcU10rKFxcYnwkKSkvZ2ltO1xyXG4gICAgICAgICAgICByZXBsYWNlZFRleHQgPSByZXBsYWNlZFRleHQucmVwbGFjZShyZXBsYWNlUGF0dGVybldXVywgJyQxPGEgaHJlZj1cImh0dHA6Ly8kMlwiIHRhcmdldD1cIl9ibGFua1wiPiQyPC9hPicpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hhbmdlIGVtYWlsIGFkZHJlc3NlcyB0byBtYWlsdG86OiBsaW5rcy5cclxuICAgICAgICAgICAgcmVwbGFjZVBhdHRlcm5NYWlsVG8gPSAvKChbYS16QS1aMC05XFwtXFxfXFwuXSkrQFthLXpBLVpcXF9dKz8oXFwuW2EtekEtWl17Miw2fSkrKS9naW07XHJcbiAgICAgICAgICAgIHJlcGxhY2VkVGV4dCA9IHJlcGxhY2VkVGV4dC5yZXBsYWNlKHJlcGxhY2VQYXR0ZXJuTWFpbFRvLCAnPGEgaHJlZj1cIm1haWx0bzokMVwiPiQxPC9hPicpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VkVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH0gXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBOZ0NoYXQgfSBmcm9tICcuL25nLWNoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW1vamlmeVBpcGUgfSBmcm9tICcuL3BpcGVzL2Vtb2ppZnkucGlwZSc7XHJcbmltcG9ydCB7IExpbmtmeVBpcGUgfSBmcm9tICcuL3BpcGVzL2xpbmtmeS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nQ2hhdCwgRW1vamlmeVBpcGUsIExpbmtmeVBpcGVdLFxyXG4gIGV4cG9ydHM6IFtOZ0NoYXRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0NoYXRNb2R1bGUge1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkV2ZW50RW1pdHRlciIsIm1hcCIsIkNvbXBvbmVudCIsIkRvbVNhbml0aXplciIsIkh0dHBDbGllbnQiLCJJbnB1dCIsIk91dHB1dCIsIlZpZXdDaGlsZHJlbiIsIlZpZXdDaGlsZCIsIkhvc3RMaXN0ZW5lciIsIlBpcGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBOzs7UUFBQTs7O1lBdUJJLDhCQUF5QixHQUE2QixVQUFDLEtBQWEsS0FBTyxDQUFDO1lBQzVFLDJCQUFzQixHQUEyQyxVQUFDLElBQVUsRUFBRSxPQUFnQixLQUFPLENBQUM7U0FDekc7Ozs7Ozs7UUFiVSwwQ0FBb0I7Ozs7OztZQUEzQixVQUE0QixLQUFhO2dCQUVyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7Ozs7OztRQUVNLHVDQUFpQjs7Ozs7WUFBeEIsVUFBeUIsSUFBVSxFQUFFLE9BQWdCO2dCQUVqRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzlDO1FBS0wsa0JBQUM7SUFBRCxDQUFDOzs7Ozs7OztRQzNCRyxPQUFRO1FBQ1IsT0FBUTs7Ozs7Ozs7O0FDSFo7UUFFQTtZQUVXLFNBQUksR0FBaUIsV0FBVyxDQUFDLElBQUksQ0FBQztTQUtoRDtRQUFELGNBQUM7SUFBRCxDQUFDOzs7Ozs7OztRQ1BHLFNBQU07UUFDTixPQUFJO1FBQ0osT0FBSTtR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QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJO3dCQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM3SixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNULEtBQUssQ0FBQyxDQUFDO3dCQUFDLEtBQUssQ0FBQzs0QkFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLE1BQU07d0JBQzlCLEtBQUssQ0FBQzs0QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO3dCQUN4RCxLQUFLLENBQUM7NEJBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsU0FBUzt3QkFDakQsS0FBSyxDQUFDOzRCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsU0FBUzt3QkFDakQ7NEJBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQUMsU0FBUzs2QkFBRTs0QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQUMsTUFBTTs2QkFBRTs0QkFDbkUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQ3RCLENBQUMs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