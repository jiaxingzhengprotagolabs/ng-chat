/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChatAdapter } from "./chat-adapter";
/**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
var /**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
PagedHistoryChatAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(PagedHistoryChatAdapter, _super);
    function PagedHistoryChatAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PagedHistoryChatAdapter;
}(ChatAdapter));
/**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
export { PagedHistoryChatAdapter };
if (false) {
    /**
     * @abstract
     * @param {?} userId
     * @param {?} size
     * @param {?} page
     * @return {?}
     */
    PagedHistoryChatAdapter.prototype.getMessageHistoryByPage = function (userId, size, page) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWQtaGlzdG9yeS1jaGF0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGF0LyIsInNvdXJjZXMiOlsibmctY2hhdC9jb3JlL3BhZ2VkLWhpc3RvcnktY2hhdC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFNN0M7Ozs7OztJQUFzRCxtREFBVztJQUFqRTs7SUFHQSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBc0QsV0FBVyxHQUdoRTs7Ozs7Ozs7Ozs7Ozs7O0lBREcsOEZBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDaGF0QWRhcHRlciB9IGZyb20gXCIuL2NoYXQtYWRhcHRlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDaGF0IEFkYXB0ZXIgZGVjb3JhdG9yIGNsYXNzIHRoYXQgYWRkcyBwYWdpbmF0aW9uIHRvIGxvYWQgdGhlIGhpc3Rvcnkgb2YgbWVzc2FnZXNyLiBcclxuICogWW91IHdpbGwgbmVlZCBhbiBleGlzdGluZyBAc2VlIENoYXRBZGFwdGVyIGltcGxlbWVudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZWRIaXN0b3J5Q2hhdEFkYXB0ZXIgZXh0ZW5kcyBDaGF0QWRhcHRlclxyXG57ICAgXHJcbiAgICBhYnN0cmFjdCBnZXRNZXNzYWdlSGlzdG9yeUJ5UGFnZSh1c2VySWQ6IGFueSwgc2l6ZTogbnVtYmVyLCBwYWdlOiBudW1iZXIpIDogT2JzZXJ2YWJsZTxNZXNzYWdlW10+O1xyXG59XHJcbiJdfQ==