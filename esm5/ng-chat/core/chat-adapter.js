/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
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
 * @abstract
 */
export { ChatAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhdC8iLCJzb3VyY2VzIjpbIm5nLWNoYXQvY29yZS9jaGF0LWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBQUE7UUFFSSxtQ0FBbUM7O1FBcUJuQyw4QkFBeUIsR0FBNkIsVUFBQyxLQUFhLElBQU0sQ0FBQyxDQUFDO1FBQzVFLDJCQUFzQixHQUEyQyxVQUFDLElBQVUsRUFBRSxPQUFnQixJQUFNLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBZkcsNkNBQTZDOzs7Ozs7SUFFdEMsMENBQW9COzs7Ozs7SUFBM0IsVUFBNEIsS0FBYTtRQUVyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU0sdUNBQWlCOzs7OztJQUF4QixVQUF5QixJQUFVLEVBQUUsT0FBZ0I7UUFFakQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7O0lBRkcsZ0RBQTRFOztJQUM1RSw2Q0FBc0c7Ozs7O0lBcEJ0RyxvREFBa0Q7Ozs7OztJQUVsRCxnRUFBc0U7Ozs7OztJQUV0RSwyREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hhdEFkYXB0ZXJcclxue1xyXG4gICAgLy8gIyMjIEFic3RyYWN0IGFkYXB0ZXIgbWV0aG9kcyAjIyNcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgbGlzdEZyaWVuZHMoKTogT2JzZXJ2YWJsZTxVc2VyW10+O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0TWVzc2FnZUhpc3RvcnkodXNlcklkOiBhbnkpOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHNlbmRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkO1xyXG5cclxuICAgIC8vICMjIyBBZGFwdGVyL0NoYXQgaW5jb21lL2luZ3Jlc3MgZXZlbnRzICMjI1xyXG5cclxuICAgIHB1YmxpYyBvbkZyaWVuZHNMaXN0Q2hhbmdlZCh1c2VyczogVXNlcltdKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3RDaGFuZ2VkSGFuZGxlcih1c2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTWVzc2FnZVJlY2VpdmVkKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlUmVjZWl2ZWRIYW5kbGVyKHVzZXIsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFdmVudCBoYW5kbGVyc1xyXG4gICAgZnJpZW5kc0xpc3RDaGFuZ2VkSGFuZGxlcjogKHVzZXJzOiBVc2VyW10pID0+IHZvaWQgID0gKHVzZXJzOiBVc2VyW10pID0+IHt9O1xyXG4gICAgbWVzc2FnZVJlY2VpdmVkSGFuZGxlcjogKHVzZXI6IFVzZXIsIG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQgPSAodXNlcjogVXNlciwgbWVzc2FnZTogTWVzc2FnZSkgPT4ge307XHJcbn1cclxuIl19