(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-panel-user-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-edit-post/add-edit-post.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-edit-post/add-edit-post.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("< <div class=\"center-div\" >\r\n\r\n    <div class=\"center-div\">\r\n\r\n      <div class=\"form-group\">\r\n        <label>Post Description:</label>\r\n        <textarea class=\"form-control\" rows=\"5\" name=\"postDescription\" [(ngModel)]=\"post.postDescription\"></textarea>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"center-div\">\r\n      <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Save</button>\r\n      <button class=\"btn btn-primary\" (click)=\"onCancel()\"> Cancel</button>  \r\n    </div>\r\n\r\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<a *ngIf=\"currentUser.isUserAllowedToPost\" class=\"btn btn-primary\" routerLink=\"add-post/0\">Add Post</a> <br />\r\n\r\n<h3 *ngIf=\"postList==[]\">There is no post..</h3>\r\n\r\n<div *ngIf=\"postList!=[]\">\r\n\r\n  <div class=\"center\" *ngFor=\"let post of postList\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <label>Creation Date:</label> {{post.creationDate | date : 'shortDate'}}<br />\r\n        <label>Post Description:</label> {{post.postDescription}}<br />\r\n        <p *ngIf=\"post.userId != currentUser.id\">This is posted by another user</p>\r\n        <p *ngIf=\"post.userId == currentUser.id\">This is posted by another  you</p>\r\n        <button *ngIf=\"post.userId == currentUser.id && currentUser.isUserAllowedToEdit\" class=\"btn btn-primary\" routerLink=\"add-post/{{post.id}}\">Edit</button>\r\n        <button *ngIf=\"post.userId == currentUser.id && currentUser.isUserAllowedToDelete\" (click)=\"onDelete(post.id)\" class=\"btn btn-primary\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/Models/PostAc.ts":
/*!**********************************!*\
  !*** ./src/app/Models/PostAc.ts ***!
  \**********************************/
/*! exports provided: PostAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAC", function() { return PostAC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostAC {
}


/***/ }),

/***/ "./src/app/user-panel/add-edit-post/add-edit-post.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user-panel/add-edit-post/add-edit-post.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvYWRkLWVkaXQtcG9zdC9hZGQtZWRpdC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-panel/add-edit-post/add-edit-post.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user-panel/add-edit-post/add-edit-post.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddEditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditPostComponent", function() { return AddEditPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Models_PostAc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/PostAc */ "./src/app/Models/PostAc.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/user-panel/post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");






let AddEditPostComponent = class AddEditPostComponent {
    constructor(route, router, postService, userService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.userService = userService;
        this.post = new _Models_PostAc__WEBPACK_IMPORTED_MODULE_2__["PostAC"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        if (this.id != 0) {
            this.postService.GetPost(this.id).subscribe(res => {
                this.post = res;
            });
        }
    }
    onSubmit() {
        if (this.id == 0) {
            this.post.userId = this.userService.currentUser.id;
            this.postService.CreatePost(this.post).subscribe(res => {
                this.router.navigateByUrl('/UserPanel');
            });
        }
        else {
            this.postService.EditPost(this.post).subscribe(res => {
                this.router.navigateByUrl('/UserPanel');
            });
        }
    }
    onCancel() {
        this.router.navigateByUrl('/UserPanel');
    }
};
AddEditPostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AddEditPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-edit-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-edit-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-edit-post/add-edit-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-edit-post.component.css */ "./src/app/user-panel/add-edit-post/add-edit-post.component.css")).default]
    })
], AddEditPostComponent);



/***/ }),

/***/ "./src/app/user-panel/post.service.ts":
/*!********************************************!*\
  !*** ./src/app/user-panel/post.service.ts ***!
  \********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let PostService = class PostService {
    constructor(userService, http, router) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.rootUrl = "https://localhost:44372/";
    }
    CreatePost(post) {
        let url = this.rootUrl + "Posts/CreatePost";
        return this.http.post(url, post);
    }
    GetAllPosts() {
        let url = this.rootUrl + "Posts/GetAllPosts";
        return this.http.get(url);
    }
    GetPost(id) {
        let url = this.rootUrl + "Posts/GetPost/" + id;
        return this.http.get(url);
    }
    EditPost(post) {
        let url = this.rootUrl + "Posts/EditPost";
        return this.http.put(url, post);
    }
    DeletePost(id) {
        let url = this.rootUrl + "Posts/DeletePost/" + id;
        return this.http.delete(url);
    }
};
PostService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/user-panel/user-panel-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-panel/user-panel-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UserPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelRoutingModule", function() { return UserPanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-panel.component */ "./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var _add_edit_post_add_edit_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-post/add-edit-post.component */ "./src/app/user-panel/add-edit-post/add-edit-post.component.ts");





const routes = [
    {
        path: '', component: _user_panel_component__WEBPACK_IMPORTED_MODULE_3__["UserPanelComponent"]
    },
    {
        path: 'add-post/:id', component: _add_edit_post_add_edit_post_component__WEBPACK_IMPORTED_MODULE_4__["AddEditPostComponent"]
    }
];
let UserPanelRoutingModule = class UserPanelRoutingModule {
};
UserPanelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserPanelRoutingModule);



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-panel/user-panel.component.ts ***!
  \****************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ "./src/app/user-panel/post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




let UserPanelComponent = class UserPanelComponent {
    constructor(postService, userService) {
        this.postService = postService;
        this.userService = userService;
        this.postList = [];
    }
    ngOnInit() {
        this.GetAllPosts();
        this.currentUser = this.userService.currentUser;
    }
    GetAllPosts() {
        this.postService.GetAllPosts().subscribe(res => {
            this.postList = res;
        });
    }
    onDelete(id) {
        this.postService.DeletePost(id).subscribe(res => {
            this.ngOnInit();
        });
    }
};
UserPanelComponent.ctorParameters = () => [
    { type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-panel.component.css */ "./src/app/user-panel/user-panel.component.css")).default]
    })
], UserPanelComponent);



/***/ }),

/***/ "./src/app/user-panel/user-panel.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-panel/user-panel.module.ts ***!
  \*************************************************/
/*! exports provided: UserPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelModule", function() { return UserPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_panel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-panel-routing.module */ "./src/app/user-panel/user-panel-routing.module.ts");
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-panel.component */ "./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var _add_edit_post_add_edit_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-post/add-edit-post.component */ "./src/app/user-panel/add-edit-post/add-edit-post.component.ts");







let UserPanelModule = class UserPanelModule {
};
UserPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_panel_component__WEBPACK_IMPORTED_MODULE_5__["UserPanelComponent"], _add_edit_post_add_edit_post_component__WEBPACK_IMPORTED_MODULE_6__["AddEditPostComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_panel_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserPanelRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], UserPanelModule);



/***/ })

}]);
//# sourceMappingURL=user-panel-user-panel-module.js.map