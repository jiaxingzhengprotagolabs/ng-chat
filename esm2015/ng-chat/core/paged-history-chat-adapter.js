/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChatAdapter } from "./chat-adapter";
/**
 * \@description Chat Adapter decorator class that adds pagination to load the history of messagesr.
 * You will need an existing \@see ChatAdapter implementation
 * @abstract
 */
export class PagedHistoryChatAdapter extends ChatAdapter {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWQtaGlzdG9yeS1jaGF0LWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaGF0LyIsInNvdXJjZXMiOlsibmctY2hhdC9jb3JlL3BhZ2VkLWhpc3RvcnktY2hhdC1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQU03QyxNQUFNLE9BQWdCLHVCQUF3QixTQUFRLFdBQVc7Q0FHaEU7Ozs7Ozs7OztJQURHLDhGQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgQ2hhdEFkYXB0ZXIgfSBmcm9tIFwiLi9jaGF0LWFkYXB0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ2hhdCBBZGFwdGVyIGRlY29yYXRvciBjbGFzcyB0aGF0IGFkZHMgcGFnaW5hdGlvbiB0byBsb2FkIHRoZSBoaXN0b3J5IG9mIG1lc3NhZ2Vzci4gXHJcbiAqIFlvdSB3aWxsIG5lZWQgYW4gZXhpc3RpbmcgQHNlZSBDaGF0QWRhcHRlciBpbXBsZW1lbnRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2VkSGlzdG9yeUNoYXRBZGFwdGVyIGV4dGVuZHMgQ2hhdEFkYXB0ZXJcclxueyAgIFxyXG4gICAgYWJzdHJhY3QgZ2V0TWVzc2FnZUhpc3RvcnlCeVBhZ2UodXNlcklkOiBhbnksIHNpemU6IG51bWJlciwgcGFnZTogbnVtYmVyKSA6IE9ic2VydmFibGU8TWVzc2FnZVtdPjtcclxufVxyXG4iXX0=