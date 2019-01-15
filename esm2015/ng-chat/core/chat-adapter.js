/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class ChatAdapter {
    constructor() {
        // ### Abstract adapter methods ###
        // Event handlers
        this.friendsListChangedHandler = (users) => { };
        this.messageReceivedHandler = (user, message) => { };
    }
    // ### Adapter/Chat income/ingress events ###
    /**
     * @param {?} users
     * @return {?}
     */
    onFriendsListChanged(users) {
        this.friendsListChangedHandler(users);
    }
    /**
     * @param {?} user
     * @param {?} message
     * @return {?}
     */
    onMessageReceived(user, message) {
        this.messageReceivedHandler(user, message);
    }
}
if (false) {
    /** @type {?} */
    ChatAdapter.prototype.friendsListChangedHandler;
    /** @type {?} */
    ChatAdapter.prototype.messageReceivedHandler;
    /**
     * @abstract
     * @return {?}
     */
    ChatAdapter.prototype.listFriends = function () { };
    /**
     * @abstract
     * @param {?} userId
     * @return {?}
     */
    ChatAdapter.prototype.getMessageHistory = function (userId) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    ChatAdapter.prototype.sendMessage = function (message) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhdC8iLCJzb3VyY2VzIjpbIm5nLWNoYXQvY29yZS9jaGF0LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsV0FBVztJQUFqQztRQUVJLG1DQUFtQzs7UUFxQm5DLDhCQUF5QixHQUE2QixDQUFDLEtBQWEsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzVFLDJCQUFzQixHQUEyQyxDQUFDLElBQVUsRUFBRSxPQUFnQixFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQzs7Ozs7O0lBYlUsb0JBQW9CLENBQUMsS0FBYTtRQUVyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU0saUJBQWlCLENBQUMsSUFBVSxFQUFFLE9BQWdCO1FBRWpELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUtKOzs7SUFGRyxnREFBNEU7O0lBQzVFLDZDQUFzRzs7Ozs7SUFwQnRHLG9EQUFrRDs7Ozs7O0lBRWxELGdFQUFzRTs7Ozs7O0lBRXRFLDJEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDaGF0QWRhcHRlclxyXG57XHJcbiAgICAvLyAjIyMgQWJzdHJhY3QgYWRhcHRlciBtZXRob2RzICMjI1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBsaXN0RnJpZW5kcygpOiBPYnNlcnZhYmxlPFVzZXJbXT47XHJcbiAgICBcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRNZXNzYWdlSGlzdG9yeSh1c2VySWQ6IGFueSk6IE9ic2VydmFibGU8TWVzc2FnZVtdPjtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2VuZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSk6IHZvaWQ7XHJcblxyXG4gICAgLy8gIyMjIEFkYXB0ZXIvQ2hhdCBpbmNvbWUvaW5ncmVzcyBldmVudHMgIyMjXHJcblxyXG4gICAgcHVibGljIG9uRnJpZW5kc0xpc3RDaGFuZ2VkKHVzZXJzOiBVc2VyW10pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdENoYW5nZWRIYW5kbGVyKHVzZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25NZXNzYWdlUmVjZWl2ZWQodXNlcjogVXNlciwgbWVzc2FnZTogTWVzc2FnZSk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VSZWNlaXZlZEhhbmRsZXIodXNlciwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEV2ZW50IGhhbmRsZXJzXHJcbiAgICBmcmllbmRzTGlzdENoYW5nZWRIYW5kbGVyOiAodXNlcnM6IFVzZXJbXSkgPT4gdm9pZCAgPSAodXNlcnM6IFVzZXJbXSkgPT4ge307XHJcbiAgICBtZXNzYWdlUmVjZWl2ZWRIYW5kbGVyOiAodXNlcjogVXNlciwgbWVzc2FnZTogTWVzc2FnZSkgPT4gdm9pZCA9ICh1c2VyOiBVc2VyLCBtZXNzYWdlOiBNZXNzYWdlKSA9PiB7fTtcclxufVxyXG4iXX0=