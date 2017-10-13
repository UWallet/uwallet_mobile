webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://192.168.99.101:4000/users';
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var body = JSON.stringify({ email: email,
            password: password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post((this.apiUrl + '/login'), body, options)
            .map(function (res) {
            return _this.extractData(res);
        }, function (error) {
            return error.json();
        });
    };
    UserService.prototype.register = function (User) {
        var _this = this;
        var body = JSON.stringify({
            user: User
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post((this.apiUrl + '/register'), body, options)
            .map(function (res) {
            return _this.extractData(res);
        }, function (error) {
            return error.json();
        });
    };
    UserService.prototype.extractData = function (res) {
        if (res.status == 201) {
            return {};
        }
        var body = res.json();
        return body || {};
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransaccionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransaccionesPage = (function () {
    function TransaccionesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TransaccionesPage;
}());
TransaccionesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transacciones',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/transacciones/transacciones.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-left>\n        <ion-icon name="albums"></ion-icon>\n        UWallet\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Transacciones\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/transacciones/transacciones.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], TransaccionesPage);

//# sourceMappingURL=transacciones.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PendientesPage = (function () {
    function PendientesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PendientesPage;
}());
PendientesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pendientes',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/pendientes/pendientes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-left>\n        <ion-icon name="albums"></ion-icon>\n        UWallet\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Pendientes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/pendientes/pendientes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PendientesPage);

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiPerfilPage = (function () {
    function MiPerfilPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MiPerfilPage;
}());
MiPerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mi-perfil',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/mi-perfil/mi-perfil.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Mi Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <div id="miPerfil-markdown11" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Nombre:\n    </p>\n  </div>\n  <div id="miPerfil-markdown13" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Correo:\n    </p>\n  </div>\n  <div id="miPerfil-markdown14" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Dinero:\n    </p>\n  </div>\n  <div id="miPerfil-markdown17" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Tarjetas:\n    </p>\n  </div>\n  <ion-list id="miPerfil-list6">\n    <ion-item color="none" id="miPerfil-list-item13">\n      Item 1\n    </ion-item>\n    <ion-item color="none" id="miPerfil-list-item14">\n      Item 2\n    </ion-item>\n    <ion-item color="none" id="miPerfil-list-item15">\n      Item 3\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/mi-perfil/mi-perfil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MiPerfilPage);

//# sourceMappingURL=mi-perfil.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, formBuilder, rest, alertCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        this.submitAttempt = false;
        this.emailError = false;
        this.firstNameError = false;
        this.lastNameError = false;
        this.validation_messages = {
            'firstName': [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Nombre no valido.' }
            ],
            'lastName': [
                { type: 'required', message: 'Campo obligatorio.' }
            ],
            'email': [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'pattern', message: 'Email no valido.' }
            ],
            'password': [
                { type: 'required', message: 'Campo obligatorio.' },
                { type: 'minLength', message: 'La contraseña debe contener por lo menos 8 caracteres.' },
                { type: 'pattern', message: 'La contraseña debe contener por lo menos una letra mayuscula, una minuscula y un numero.' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Las contraseñas no coinciden.' }
            ]
        };
    }
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewWillLoad = function () {
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?\.([a-z])*$/i;
        this.validations_form = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required
            ])),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEXP)
            ])),
            matching_passwords: this.matching_passwords_group,
            terms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('true'))
        });
    };
    SignupPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Registro Exitoso!',
            subTitle: 'Se enviará un correo de confirmacion para activar tu cuenta.',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.goToLogin(null);
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.validations_form.valid) {
            this.rest.register(this.user)
                .subscribe(function (res) { return _this.res = res; }, function (error) {
                _this.errorMessage = error;
                console.log(error);
                _this.handleError(error);
            }, function () {
                _this.showAlert();
            });
        }
    };
    SignupPage.prototype.handleError = function (error) {
        var body = error.json() || '';
        this.emailError = false;
        this.firstNameError = false;
        this.lastNameError = false;
        console.log(error);
        if (error.status == 422) {
            if (body["email"]) {
                this.emailError = true;
            }
            if (body["firstName"]) {
                this.firstNameError = true;
            }
            if (body["lastName"]) {
                this.lastNameError = true;
            }
        }
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Registro\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form [formGroup]="validations_form" id="signup-form2">\n    <ion-list id="signup-list3">\n      <ion-item id="signup-input4">\n        <ion-label floating>\n          Email\n        </ion-label>\n        <ion-input (ngModelChange)="emailError=false" type="email" email required [(ngModel)]="user.email"  formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item no-lines text-wrap *ngIf="!validations_form.controls.email.valid  && (validations_form.controls.email.dirty || submitAttempt)">\n                <p style="color:red;">Ingrese un email valido</p>\n      </ion-item>\n      <ion-item no-lines text-wrap *ngIf="(emailError)">\n                <p style="color:red;">Ya existe un usuario registrado con este email</p>\n      </ion-item>\n      <ion-item id="signup-input3">\n        <ion-label floating>\n          Nombres\n        </ion-label>\n        <ion-input  (ngModelChange)="firstNameError=false" type="text" required [(ngModel)]="user.firstName"  formControlName="firstName"></ion-input>\n      </ion-item>\n        <div class="validation-errors">\n          <li *ngFor="let validation of validation_messages.firstName">\n            <ion-item  text-wrap no-lines class="error-message" *ngIf="validations_form.get(\'firstName\').hasError(validation.type) && (validations_form.get(\'firstName\').dirty || validations_form.get(\'firstName\').touched || submitAttempt)">\n              <p style="color:red;"> {{ validation.message }}</p>\n        		</ion-item>\n        	</li>\n          <ion-item text-wrap no-lines *ngIf="(firstNameError) && (validations_form.get(\'firstName\').touched)">\n                    <p style="color:red;">Los nombres ingresados no son validos</p>\n          </ion-item>\n        </div>\n      <ion-item id="signup-input6">\n        <ion-label floating>\n          Apellidos\n        </ion-label>\n        <ion-input type="text" (ngModelChange)="lastNameError=false" required [(ngModel)]="user.lastName"  formControlName="lastName"></ion-input>\n      </ion-item>\n        <div class="validation-errors">\n          <li text-wrap *ngFor="let validation of validation_messages.lastName">\n            <ion-item no-lines class="error-message" *ngIf="validations_form.get(\'lastName\').hasError(validation.type) && (validations_form.get(\'lastName\').dirty || validations_form.get(\'lastName\').touched || submitAttempt)">\n        			<p style="color:red;"> {{ validation.message }}</p>\n        		</ion-item>\n        	</li>\n          <ion-item text-wrap no-lines *ngIf="(lastNameError)">\n                    <p style="color:red;">Los apellidos ingresados no son validos</p>\n          </ion-item>\n        </div>\n      <form [formGroup]="matching_passwords_group" id="signup-form3">\n        <ion-item id="signup-input5">\n          <ion-label floating>\n            Contraseña\n          </ion-label>\n          <ion-input type="password" required [(ngModel)]="user.password"  formControlName="password"></ion-input>\n        </ion-item>\n          <div class="validation-errors">\n            <li *ngFor="let validation of validation_messages.password">\n              <ion-item text-wrap no-lines class="error-message" *ngIf="matching_passwords_group.get(\'password\').hasError(validation.type) && (matching_passwords_group.get(\'password\').dirty || matching_passwords_group.get(\'password\').touched || submitAttempt)">\n          			<p style="color:red;"> {{ validation.message }}</p>\n          		</ion-item>\n          	</li>\n          </div>\n        <ion-item id="signup-input7">\n          <ion-label floating>\n            Confirmar Contraseña\n          </ion-label>\n          <ion-input type="password" placeholder="" required [(ngModel)]="user.password_confirmation"  formControlName="confirm_password"></ion-input>\n          </ion-item>\n          <div class="validation-errors">\n            <li *ngFor="let validation of validation_messages.matching_passwords">\n              <ion-item text-wrap no-lines class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (matching_passwords_group.get(\'confirm_password\').dirty || matching_passwords_group.get(\'confirm_password\').touched || submitAttempt)">\n          			<p style="color:red;"> {{ validation.message }}</p>\n          		</ion-item>\n          	</li>\n          </div>\n      </form>\n    </ion-list>\n    <div class="spacer" style="width:287px;height:35px;" id="signup-spacer2"></div>\n    <button id="signup-button3" ion-button color="stable" block (click)="register()">\n      Registrarse\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
], SignupPage);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(menu, navCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false, 'menu');
        console.log("Estoy en home, la token es:", sessionStorage.getItem("token"));
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle icon-right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-left>\n        <ion-icon name="albums" ></ion-icon>\n        UWallet\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1"></ion-content>\n'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_transacciones_transacciones__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pendientes_pendientes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mi_perfil_mi_perfil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_extractos_extractos__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_userService__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_transacciones_transacciones__["a" /* TransaccionesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pendientes_pendientes__["a" /* PendientesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_extractos_extractos__["a" /* ExtractosPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_transacciones_transacciones__["a" /* TransaccionesPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pendientes_pendientes__["a" /* PendientesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_extractos_extractos__["a" /* ExtractosPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_rest_userService__["a" /* UserService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transacciones_transacciones__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pendientes_pendientes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mi_perfil_mi_perfil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToTransacciones = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_transacciones_transacciones__["a" /* TransaccionesPage */]);
    };
    MyApp.prototype.goToPendientes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_pendientes_pendientes__["a" /* PendientesPage */]);
    };
    MyApp.prototype.goToMiPerfil = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_mi_perfil_mi_perfil__["a" /* MiPerfilPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/app/app.html"*/'<ion-menu [content]="mainContent" side="left" id="menu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToMiPerfil()" id="menu-list-item1">\n        PERFIL ACA\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToTransacciones()" id="menu-list-item2">\n        Transacciones\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToPendientes()" id="menu-list-item3">\n        Pagos Pendientes\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtractosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtractosPage = (function () {
    function ExtractosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ExtractosPage;
}());
ExtractosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-extractos',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/extractos/extractos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Extractos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <div id="extractos-markdown9" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Ingrese la fecha de inicio y la fecha final para poder generar los extractos de su cuenta\n    </p>\n  </div>\n  <div id="extractos-markdown8" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Fecha de Inicio\n    </p>\n  </div>\n  <form id="extractos-form3">\n    <ion-item id="extractos-input8">\n      <ion-label>\n        Día\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="extractos-input9">\n      <ion-label>\n        Mes\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="extractos-input10">\n      <ion-label>\n        Año\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <div id="extractos-markdown10" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Fecha Final\n    </p>\n  </div>\n  <form id="extractos-form4">\n    <ion-item id="extractos-input11">\n      <ion-label>\n        Día\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="extractos-input12">\n      <ion-label>\n        Mes\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="extractos-input13">\n      <ion-label>\n        Año\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <button id="extractos-button5" ion-button color="positive" block>\n      Descargar\n    </button>\n    <div id="extractos-markdown12" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#000000;">\n        ó\n      </p>\n    </div>\n    <button id="extractos-button6" ion-button color="positive" block>\n      Enviar al correo\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/extractos/extractos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ExtractosPage);

//# sourceMappingURL=extractos.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://192.168.99.101:4000';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body);
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(menu, formBuilder, navCtrl, rest) {
        this.menu = menu;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.user = {
            email: '',
            password: ''
        };
        this.submitAttempt = false;
        this.unautorized = false;
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (sessionStorage.getItem("token") != '' && sessionStorage.getItem("token")) {
            this.goToHome(null);
        }
    };
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'menu');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginForm.valid) {
            var email = this.user.email;
            var password = this.user.password;
            this.rest.login(email, password)
                .subscribe(function (res) { return _this.token = res.auth_token; }, function (error) {
                _this.errorMessage = error;
                _this.handleError(error);
            }, function () {
                sessionStorage.setItem("token", _this.token);
                _this.goToHome(null);
            });
        }
    };
    LoginPage.prototype.handleError = function (error) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        if (error.status == 401) {
            this.unautorized = true;
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form  [formGroup]="loginForm"  id="login-form1" >\n    <ion-list id="login-list2" >\n      <ion-item id="login-email">\n        <ion-label floating>\n          Email\n        </ion-label>\n        <ion-input type="email" name="email" required [(ngModel)]="user.email"  formControlName="email" [class.invalid]="!loginForm.controls.email.valid && (loginForm.controls.email.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="!loginForm.controls.email.valid  && (loginForm.controls.email.dirty || submitAttempt)">\n                <p style="color:red;">Ingrese un email valido</p>\n      </ion-item>\n\n      <ion-item no-lines id="login-pass" class="item-borderless">\n        <ion-label floating>\n          Password\n        </ion-label>\n        <ion-input type="password" name="password" required [(ngModel)]="user.password" ngControl="password" formControlName="password" [class.invalid]="!loginForm.controls.password.valid && (loginForm.controls.password.dirty || submitAttempt)"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="!loginForm.controls.password.valid  && (loginForm.controls.password.dirty || submitAttempt)">\n                <p style="color:red;">No ingresó la contraseña</p>\n      </ion-item>\n\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1" no-lines></div>\n    <ion-item no-lines *ngIf="unautorized">\n              <p style="color:red;">Email o contraseña incorrectos</p>\n    </ion-item>\n    <button id="login-button1" ion-button color="stable" block (click)="login()">\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block on-click="goToSignup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/luisvalderrama/Universidad/Arquitectura/UWallet/uwallet_mobile/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest_userService__["a" /* UserService */]) === "function" && _d || Object])
], LoginPage);

var _a, _b, _c, _d;
//# sourceMappingURL=login.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map