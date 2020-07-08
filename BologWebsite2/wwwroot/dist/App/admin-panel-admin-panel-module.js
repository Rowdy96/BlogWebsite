(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-panel-admin-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table class=\"table table-striped\" >\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">User Name</th>\r\n      <th scope=\"col\">Allow to Add Post</th>\r\n      <th scope=\"col\">Allow to Edit Post</th>\r\n      <th scope=\"col\">Allow to Delete Post</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let user of userList\">\r\n      <td>{{user.name}}</td>\r\n      <td><button class=\"btn btn-primary\" (click)=\"GivePermission(user,add)\">{{user.isUserAllowedToPost ? 'Allowed' : 'Not Allowed'}}</button></td>\r\n      <td><button class=\"btn btn-primary\" (click)=\"GivePermission(user,edit)\">{{user.isUserAllowedToEdit ? 'Allowed' : 'Not Allowed'}}</button></td>\r\n      <td><button class=\"btn btn-primary\" (click)=\"GivePermission(user,delete)\">{{user.isUserAllowedToDelete ? 'Allowed' : 'Not Allowed'}}</button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./src/app/admin-panel/admin-panel-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminPanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelRoutingModule", function() { return AdminPanelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");




const routes = [{ path: '', component: _admin_panel_component__WEBPACK_IMPORTED_MODULE_3__["AdminPanelComponent"] }];
let AdminPanelRoutingModule = class AdminPanelRoutingModule {
};
AdminPanelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminPanelRoutingModule);



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let AdminPanelComponent = class AdminPanelComponent {
    constructor(userService) {
        this.userService = userService;
        this.userList = [];
        this.add = "Add";
        this.edit = "Edit";
        this.delete = "Delete";
    }
    ngOnInit() {
        this.GetUserList();
    }
    GetUserList() {
        this.userService.GetAllUsers().subscribe(res => {
            this.userList = res;
        }, err => {
            console.log(err);
        });
    }
    GivePermission(user, action) {
        if (action == this.add) {
            if (user.isUserAllowedToPost) {
                user.isUserAllowedToPost = false;
            }
            else {
                user.isUserAllowedToPost = true;
            }
        }
        else if (action == this.edit) {
            if (user.isUserAllowedToEdit) {
                user.isUserAllowedToEdit = false;
            }
            else {
                user.isUserAllowedToEdit = true;
            }
        }
        else if (action == this.delete) {
            if (user.isUserAllowedToDelete) {
                user.isUserAllowedToDelete = false;
            }
            else {
                user.isUserAllowedToDelete = true;
            }
        }
        this.userService.GivePermissionToUser(user).subscribe(res => {
            this.ngOnInit();
        });
    }
};
AdminPanelComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-panel/admin-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")).default]
    })
], AdminPanelComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.module.ts ***!
  \***************************************************/
/*! exports provided: AdminPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-panel-routing.module */ "./src/app/admin-panel/admin-panel-routing.module.ts");
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");






let AdminPanelModule = class AdminPanelModule {
};
AdminPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_panel_component__WEBPACK_IMPORTED_MODULE_5__["AdminPanelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminPanelRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]
    })
], AdminPanelModule);



/***/ })

}]);
//# sourceMappingURL=admin-panel-admin-panel-module.js.map