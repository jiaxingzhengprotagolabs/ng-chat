/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
export class DefaultFileUploadAdapter {
    /**
     * \@summary Basic file upload adapter implementation for HTTP request form file consumption
     * @param {?} _serverEndpointUrl The API endpoint full qualified address that will receive a form file to process and return the metadata.
     * @param {?} _http
     */
    constructor(_serverEndpointUrl, _http) {
        this._serverEndpointUrl = _serverEndpointUrl;
        this._http = _http;
    }
    /**
     * @param {?} file
     * @param {?} userTo
     * @return {?}
     */
    uploadFile(file, userTo) {
        /** @type {?} */
        const formData = new FormData();
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
    }
}
if (false) {
    /** @type {?} */
    DefaultFileUploadAdapter.prototype._serverEndpointUrl;
    /** @type {?} */
    DefaultFileUploadAdapter.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWxlLXVwbG9hZC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctY2hhdC8iLCJzb3VyY2VzIjpbIm5nLWNoYXQvY29yZS9kZWZhdWx0LWZpbGUtdXBsb2FkLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQU1qQyxZQUFvQixrQkFBMEIsRUFBVSxLQUFpQjtRQUFyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQ3pFLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxJQUFVLEVBQUUsTUFBWTs7Y0FDekIsUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFO1FBRXpDLDBEQUEwRDtRQUMxRCxRQUFRLENBQUMsTUFBTSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRW5FLHNJQUFzSTtRQUN0SSxtRkFBbUY7UUFDbkYsMkJBQTJCO1FBQzNCLE1BQU07UUFFTixnREFBZ0Q7UUFDaEQsc0RBQXNEO1FBRXRELGlEQUFpRDtRQUVqRCxhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qiw2REFBNkQ7UUFDN0QsZUFBZTtRQUNmLG1GQUFtRjtRQUVuRixtREFBbUQ7UUFDbkQsZUFBZTtRQUNmLHFEQUFxRDtRQUNyRCxlQUFlO1FBRWYsNENBQTRDO1FBQzVDLGVBQWU7UUFDZixVQUFVO0lBQ2QsQ0FBQztDQUNKOzs7SUF0Q2Usc0RBQWtDOztJQUFFLHlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGaWxlVXBsb2FkQWRhcHRlciB9IGZyb20gJy4vZmlsZS11cGxvYWQtYWRhcHRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlsZVVwbG9hZEFkYXB0ZXIgaW1wbGVtZW50cyBJRmlsZVVwbG9hZEFkYXB0ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc3VtbWFyeSBCYXNpYyBmaWxlIHVwbG9hZCBhZGFwdGVyIGltcGxlbWVudGF0aW9uIGZvciBIVFRQIHJlcXVlc3QgZm9ybSBmaWxlIGNvbnN1bXB0aW9uXHJcbiAgICAgKiBAcGFyYW0gX3NlcnZlckVuZHBvaW50VXJsIFRoZSBBUEkgZW5kcG9pbnQgZnVsbCBxdWFsaWZpZWQgYWRkcmVzcyB0aGF0IHdpbGwgcmVjZWl2ZSBhIGZvcm0gZmlsZSB0byBwcm9jZXNzIGFuZCByZXR1cm4gdGhlIG1ldGFkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2ZXJFbmRwb2ludFVybDogc3RyaW5nLCBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkRmlsZShmaWxlOiBGaWxlLCB1c2VyVG86IFVzZXIpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgLy9mb3JtRGF0YS5hcHBlbmQoJ25nLWNoYXQtc2VuZGVyLXVzZXJpZCcsIGN1cnJlbnRVc2VySWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmctY2hhdC1kZXN0aW5hdGFyeS11c2VyaWQnLCB1c2VyVG8uaWQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUsIGZpbGUubmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3Q8TWVzc2FnZT4odGhpcy5fc2VydmVyRW5kcG9pbnRVcmwsIGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogTGVhdmluZyB0aGlzIGlmIHdlIHdhbnQgdG8gdHJhY2sgdXBsb2FkIHByb2dyZXNzIGluIGRldGFpbCBpbiB0aGUgZnV0dXJlLiBNaWdodCBuZWVkIGEgZGlmZmVyZW50IFN1YmplY3QgZ2VuZXJpYyB0eXBlIHdyYXBwZXJcclxuICAgICAgICAvLyBjb25zdCBmaWxlUmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHRoaXMuX3NlcnZlckVuZHBvaW50VXJsLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIC8vICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25zdCB1cGxvYWRQcm9ncmVzcyA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgICAgICAvLyBjb25zdCB1cGxvYWRTdGF0dXMgPSB1cGxvYWRQcm9ncmVzcy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgLy9jb25zdCByZXNwb25zZVByb21pc2UgPSBuZXcgU3ViamVjdDxNZXNzYWdlPigpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9odHRwXHJcbiAgICAgICAgLy8gICAgIC5yZXF1ZXN0KGZpbGVSZXF1ZXN0KVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmIChldmVudC50eXBlID09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgdXBsb2FkUHJvZ3Jlc3MubmV4dChwZXJjZW50RG9uZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSlcclxuICAgICAgICAvLyAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICB1cGxvYWRQcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=