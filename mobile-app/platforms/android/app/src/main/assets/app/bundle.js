(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-initialization.ts": "./app/app-initialization.ts",
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./config/constants.ts": "./app/config/constants.ts",
	"./main-page.ts": "./app/main-page.ts",
	"./main-page.xml": "./app/main-page.xml",
	"./main-view-model.ts": "./app/main-view-model.ts",
	"./services/api.service.ts": "./app/services/api.service.ts",
	"./services/auth.service.ts": "./app/services/auth.service.ts",
	"./services/navigation.service.ts": "./app/services/navigation.service.ts",
	"./services/sms.service.ts": "./app/services/sms.service.ts",
	"./services/storage.service.ts": "./app/services/storage.service.ts",
	"./services/transaction.service.ts": "./app/services/transaction.service.ts",
	"./services/user.service.ts": "./app/services/user.service.ts",
	"./utils/date.utils.ts": "./app/utils/date.utils.ts",
	"./utils/format.utils.ts": "./app/utils/format.utils.ts",
	"./utils/http.ts": "./app/utils/http.ts",
	"./utils/permissions.ts": "./app/utils/permissions.ts",
	"./views/dashboard/dashboard-page.ts": "./app/views/dashboard/dashboard-page.ts",
	"./views/dashboard/dashboard-page.xml": "./app/views/dashboard/dashboard-page.xml",
	"./views/dashboard/dashboard-view-model.ts": "./app/views/dashboard/dashboard-view-model.ts",
	"./views/login/login-page.ts": "./app/views/login/login-page.ts",
	"./views/login/login-page.xml": "./app/views/login/login-page.xml",
	"./views/login/login-view-model.ts": "./app/views/login/login-view-model.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$";

/***/ }),

/***/ "./app/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/app.css");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/application/application.android.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/storage.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/navigation.service.ts");
/* harmony import */ var _services_sms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/sms.service.ts");
// Added by app-css-loader






// Initialize core services
const storageService = _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.getInstance();
const authService = _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.getInstance();
const navigationService = _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService.getInstance();
// Initialize SMS Service
const smsService = _services_sms_service__WEBPACK_IMPORTED_MODULE_4__.SMSService.getInstance();
let mainFrame;
_nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.on(_nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.launchEvent, async () => {
    console.log("Application launching...");
    // Create and initialize the main frame
    mainFrame = new _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame();
    navigationService.setNavigation(mainFrame);
    console.log("Navigation frame initialized");
    // Initialize SMS monitoring
    if (true) {
        console.log("Initializing SMS monitoring...");
        try {
            const smsInstance = _services_sms_service__WEBPACK_IMPORTED_MODULE_4__.SMSService.getInstance();
            console.log("SMS Service instance created");
        }
        catch (error) {
            console.error("Error initializing SMS service:", error);
        }
    }
    // Navigate to initial page
    mainFrame.navigate({
        moduleName: "views/login/login-page",
        clearHistory: true,
    });
});
_nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.on(_nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.displayedEvent, () => {
    console.log("Application displayed event triggered");
    if (!navigationService.hasFrame()) {
        const topFrame = _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame.topmost();
        if (topFrame) {
            navigationService.setNavigation(topFrame);
            console.log("Navigation frame set from topmost");
        }
    }
});
_nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Application.run({ create: () => mainFrame });


if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    const checkAndApply = async () => {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


/***/ }),

/***/ "./app/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n.page"],"declarations":[{"type":"declaration","property":"background-color","value":"#f5f5f5"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"color","value":"#333333"}]},{"type":"rule","selectors":[".input"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"border-width","value":"1px"},{"type":"declaration","property":"border-color","value":"#e2e8f0"},{"type":"declaration","property":"padding","value":"12px"},{"type":"declaration","property":"margin-bottom","value":"16px"},{"type":"declaration","property":"border-radius","value":"8px"},{"type":"declaration","property":"font-size","value":"16px"}]},{"type":"rule","selectors":[".input:focus"],"declarations":[{"type":"declaration","property":"border-color","value":"#3b82f6"}]},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"border-radius","value":"8px"},{"type":"declaration","property":"padding","value":"12px"},{"type":"declaration","property":"font-size","value":"16px"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#3b82f6"},{"type":"declaration","property":"color","value":"#ffffff"}]},{"type":"rule","selectors":[".btn-primary:active"],"declarations":[{"type":"declaration","property":"background-color","value":"#2563eb"}]},{"type":"rule","selectors":[".h1"],"declarations":[{"type":"declaration","property":"font-size","value":"24px"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-bottom","value":"16px"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16px"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16px"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8px"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".border-gray-300"],"declarations":[{"type":"declaration","property":"border-color","value":"#d1d5db"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/Users/t-box/Developer/Vodafone V2/mobile-app/app/app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("/Users/t-box/Developer/Vodafone V2/mobile-app/app/app.css")
	})
}

/***/ }),

/***/ "./app/app-initialization.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInitialization: () => (/* binding */ AppInitialization)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/api.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/storage.service.ts");
/* harmony import */ var _services_sms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/sms.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/navigation.service.ts");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/http.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/config/constants.ts");
/* harmony import */ var _utils_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/utils/permissions.ts");








class AppInitialization {
    static async initialize(frame) {
        try {
            // تهيئة خدمة التنقل
            this.navigationService.setNavigation(frame);
            // تهيئة الأذونات وخدمة SMS للأندرويد
            if (true) {
                const hasPermissions = await (0,_utils_permissions__WEBPACK_IMPORTED_MODULE_7__.requestSMSPermissions)();
                if (hasPermissions) {
                    this.smsService; // سيتم تهيئة المراقب تلقائياً
                }
            }
            // التحقق من حالة المصادقة
            const token = await this.storageService.getItem("auth_token");
            const authState = await this.authService.getAuthState().toPromise();
            if (token && authState.isAuthenticated) {
                try {
                    // التحقق من صلاحية التوكن
                    await (0,_utils_http__WEBPACK_IMPORTED_MODULE_5__.request)(_config_constants__WEBPACK_IMPORTED_MODULE_6__.ENDPOINTS.HEALTH, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    // نجاح التحقق، الانتقال إلى لوحة التحكم
                    this.navigationService.navigate("dashboard");
                }
                catch (error) {
                    // فشل التحقق من التوكن
                    await this.handleInvalidToken();
                }
            }
            else {
                // لا يوجد توكن أو المستخدم غير مسجل
                this.navigationService.navigate("login");
            }
        }
        catch (error) {
            console.error("App initialization error:", error);
            this.navigationService.navigate("login");
        }
    }
    static async handleInvalidToken() {
        await this.storageService.removeItem("auth_token");
        await this.storageService.removeItem("auth_user");
        await this.authService.logout();
        this.navigationService.navigate("login");
    }
}
AppInitialization.authService = _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.getInstance();
AppInitialization.apiService = _services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService.getInstance();
AppInitialization.storageService = _services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService.getInstance();
AppInitialization.navigationService = _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService.getInstance();
AppInitialization.smsService = _services_sms_service__WEBPACK_IMPORTED_MODULE_3__.SMSService.getInstance();

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-initialization.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/config/constants.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_URL: () => (/* binding */ API_URL),
/* harmony export */   DATE_RANGES: () => (/* binding */ DATE_RANGES),
/* harmony export */   ENDPOINTS: () => (/* binding */ ENDPOINTS),
/* harmony export */   TRANSACTION_TYPES: () => (/* binding */ TRANSACTION_TYPES)
/* harmony export */ });
//constants.ts
const port = 3000;
const API_URL = `http://192.168.1.5:${port}/api`;
const ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
    },
    USERS: {
        BASE: "/users",
        GET_ALL: "/users",
        CREATE: "/users",
        UPDATE: (id) => `/users/${id}`,
        DELETE: (id) => `/users/${id}`,
    },
    TRANSACTIONS: {
        BASE: "/transactions",
        GET_ALL: "/transactions",
        CREATE: "/transactions",
        GET_SINGLE: (id) => `/transactions/${id}`,
        MOBILE: "/mobile/transactions",
    },
    HEALTH: "/health",
};
const TRANSACTION_TYPES = {
    TRANSFER: 'Transfer',
    BILL_PAYMENT: 'Bill Payment',
    MOBILE_RECHARGE: 'Mobile Recharge',
    WITHDRAWAL: 'Withdrawal',
    DEPOSIT: 'Deposit'
};
const DATE_RANGES = {
    TODAY: 'today',
    THIS_WEEK: 'this_week',
    THIS_MONTH: 'this_month',
    CUSTOM: 'custom'
};

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./config/constants.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/main-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
function navigatingTo(args) {
    const page = args.object;
    // هذه الصفحة ستكون مؤقتة فقط حتى تكتمل عملية التهيئة
    page.actionBarHidden = true;
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/main-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloWorldModel: () => (/* binding */ HelloWorldModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class HelloWorldModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }
    onTap() {
        this._counter--;
        this.updateMessage();
    }
    updateMessage() {
        if (this._counter <= 0) {
            this.message =
                'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = `${this._counter} taps left`;
        }
        // log the message to the console
        console.log(this.message);
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/api.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/http/http-request/index.android.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/config/constants.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/auth.service.ts");



class ApiService {
    constructor() {
        this.authService = _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.getInstance();
    }
    static getInstance() {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }
    async getHeaders() {
        const authState = await this.authService.getAuthState().toPromise();
        return Object.assign({ 'Content-Type': 'application/json' }, (authState.token ? { 'Authorization': `Bearer ${authState.token}` } : {}));
    }
    async get(endpoint, params) {
        try {
            const headers = await this.getHeaders();
            const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${endpoint}${queryString}`,
                method: 'GET',
                headers
            });
            return this.handleResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    async post(endpoint, data) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${endpoint}`,
                method: 'POST',
                headers,
                content: JSON.stringify(data)
            });
            return this.handleResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    async put(endpoint, data) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${endpoint}`,
                method: 'PUT',
                headers,
                content: JSON.stringify(data)
            });
            return this.handleResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    async delete(endpoint) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${endpoint}`,
                method: 'DELETE',
                headers
            });
            return this.handleResponse(response);
        }
        catch (error) {
            throw this.handleError(error);
        }
    }
    handleResponse(response) {
        if (response.statusCode >= 200 && response.statusCode < 300) {
            return response.content.toJSON();
        }
        throw new Error(`HTTP Error: ${response.statusCode}`);
    }
    handleError(error) {
        var _a;
        console.error('API Error:', error);
        if (error.response) {
            const message = ((_a = error.response.content.toJSON()) === null || _a === void 0 ? void 0 : _a.error) || 'Unknown error occurred';
            return new Error(message);
        }
        return error;
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/api.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/auth.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/cjs/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/http/http-request/index.android.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/storage.service.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/config/constants.ts");




class AuthService {
    constructor() {
        this.storageService = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getInstance();
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            token: null,
            user: null,
            isAuthenticated: false
        });
        this.loadStoredAuth();
    }
    static getInstance() {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }
    async loadStoredAuth() {
        try {
            const token = await this.storageService.getItem('auth_token');
            const userStr = await this.storageService.getItem('auth_user');
            if (token && userStr) {
                const user = JSON.parse(userStr);
                this.setAuthState({
                    token,
                    user,
                    isAuthenticated: true
                });
            }
        }
        catch (error) {
            console.error('Error loading stored auth:', error);
        }
    }
    async login(username, password) {
        try {
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_3__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINTS.AUTH.LOGIN}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                content: JSON.stringify({ username, password })
            });
            const result = response.content.toJSON();
            if (result.token) {
                await this.storageService.setItem('auth_token', result.token);
                await this.storageService.setItem('auth_user', JSON.stringify(result.user));
                this.setAuthState({
                    token: result.token,
                    user: result.user,
                    isAuthenticated: true
                });
                return true;
            }
            return false;
        }
        catch (error) {
            console.error('Login error:', error);
            return false;
        }
    }
    async logout() {
        try {
            await this.storageService.removeItem('auth_token');
            await this.storageService.removeItem('auth_user');
            this.setAuthState({
                token: null,
                user: null,
                isAuthenticated: false
            });
        }
        catch (error) {
            console.error('Logout error:', error);
        }
    }
    getAuthState() {
        return this.authState.asObservable();
    }
    setAuthState(state) {
        this.authState.next(state);
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/auth.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/navigation.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
// services/navigation.service.ts

class NavigationService {
    constructor() {
        this.frame = null;
    }
    static getInstance() {
        if (!NavigationService.instance) {
            NavigationService.instance = new NavigationService();
        }
        return NavigationService.instance;
    }
    setNavigation(frame) {
        console.log("Setting navigation frame");
        this.frame = frame;
    }
    hasFrame() {
        return this.frame !== null;
    }
    navigate(pageName, options = {}) {
        console.log("Starting navigation to:", pageName);
        try {
            if (!this.frame) {
                console.error("No frame set, trying to get topmost frame");
                this.frame = _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost();
                if (!this.frame) {
                    throw new Error("No navigation frame available");
                }
            }
            const modulePath = `views/${pageName}/${pageName}-page`;
            console.log("Navigating to module path:", modulePath);
            this.frame.navigate(Object.assign({ moduleName: modulePath, clearHistory: pageName === "login" }, options));
            console.log("Navigation completed");
            console.log("Request Navigated to " + pageName);
        }
        catch (error) {
            console.error("Navigation error:", error);
            throw error;
        }
    }
    goBack() {
        const frame = this.frame || _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost();
        if (frame === null || frame === void 0 ? void 0 : frame.canGoBack()) {
            frame.goBack();
        }
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/navigation.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/sms.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SMSService: () => (/* binding */ SMSService)
/* harmony export */ });
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction.service.ts");
/* harmony import */ var _utils_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/permissions.ts");
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/application/application-shims.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/config/constants.ts");




class SMSService {
    constructor() {
        this.transactionService = _transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.isMonitoringStarted = false;
        console.log("SMSService: Constructor called");
        this.initializeSMSListener();
    }
    static getInstance() {
        if (!SMSService.instance) {
            console.log("SMSService: Creating new instance");
            SMSService.instance = new SMSService();
        }
        return SMSService.instance;
    }
    async initializeSMSListener() {
        console.log("SMSService: Initializing SMS listener");
        if (true) {
            try {
                const hasPermissions = await (0,_utils_permissions__WEBPACK_IMPORTED_MODULE_1__.requestSMSPermissions)();
                console.log("SMSService: Permissions status:", hasPermissions);
                if (hasPermissions && !this.isMonitoringStarted) {
                    this.startSMSMonitoring();
                    this.isMonitoringStarted = true;
                }
            }
            catch (error) {
                console.error("SMSService: Permission error:", error);
            }
        }
    }
    startSMSMonitoring() {
        if (false) {}
        try {
            console.log("SMSService: Starting monitoring");
            const context = _nativescript_core_application__WEBPACK_IMPORTED_MODULE_3__.android.context;
            console.log("SMSService: Got Android context");
            const intentFilter = new android.content.IntentFilter();
            console.log("SMSService: Created intent filter");
            intentFilter.addAction("android.provider.Telephony.SMS_RECEIVED");
            console.log("SMSService: Added action to intent filter");
            intentFilter.setPriority(999);
            console.log("SMSService: Set priority");
            // Create BroadcastReceiver correctly
            const BroadcastReceiver = android.content.BroadcastReceiver.extend({
                onReceive: function (context, intent) {
                    console.log("SMSService: Broadcast received");
                    try {
                        const bundle = intent.getExtras();
                        if (!bundle) {
                            console.log("SMSService: No bundle found");
                            return;
                        }
                        const pdusObj = bundle.get("pdus");
                        console.log("SMSService: PDUs object type:", typeof pdusObj);
                        if (!pdusObj) {
                            console.log("SMSService: No PDUs object found");
                            return;
                        }
                        const format = bundle.getString("format") || "";
                        let fullMessage = "";
                        let sender = "";
                        // Get array length using Java reflection
                        const pduLength = java.lang.reflect.Array.getLength(pdusObj);
                        console.log("SMSService: Number of PDUs:", pduLength);
                        // Combine all parts of the message
                        for (let i = 0; i < pduLength; i++) {
                            const pdu = java.lang.reflect.Array.get(pdusObj, i);
                            const message = android.telephony.SmsMessage.createFromPdu(pdu, format);
                            if (i === 0) {
                                // Get sender from first part only
                                sender = message.getOriginatingAddress();
                            }
                            fullMessage += message.getMessageBody();
                        }
                        console.log("SMSService: Full message from:", sender);
                        console.log("SMSService: Complete message:", fullMessage);
                        if (sender &&
                            (sender.includes("VF-Cash") ||
                                sender.toUpperCase().includes("VFCASH"))) {
                            console.log("SMSService: Valid VFCash message detected");
                            SMSService.instance.processSMS(fullMessage);
                        }
                        else {
                            console.log("SMSService: Ignored - not from VFCash");
                        }
                    }
                    catch (error) {
                        console.error("SMSService: Error processing broadcast:", error);
                        console.error("SMSService: Error details:", error.message, error.stack);
                    }
                },
            });
            // Create instance of the receiver
            const receiver = new BroadcastReceiver();
            console.log("SMSService: Created broadcast receiver");
            // Register the receiver
            context.registerReceiver(receiver, intentFilter);
            console.log("SMSService: Registered receiver successfully");
        }
        catch (error) {
            console.error("SMSService: Setup error:", error);
            if (error instanceof Error) {
                console.error("SMSService: Error details:", error.message, error.stack);
            }
        }
    }
    processSMS(messageBody) {
        console.log("SMSService: Processing message:", messageBody);
        const transactionData = this.parseVodafoneCashSMS(messageBody);
        if (transactionData) {
            console.log("SMSService: Parsed transaction:", transactionData);
            // Add metadata before sending to API
            const enrichedData = Object.assign(Object.assign({}, transactionData), { metadata: {
                    platform: "VODAFONE_CASH",
                    source: "SMS",
                } });
            this.sendToAPI(enrichedData);
        }
        else {
            console.log("SMSService: Could not parse message");
        }
    }
    parseVodafoneCashSMS(message) {
        console.log("SMSService: Parsing message");
        // Pattern for Arabic message
        const arabicPattern = /تم استلام مبلغ (\d+(\.\d+)?) جنيه من رقم (\d+)(?:؛ المسجل بإسم ([^.]+))?/;
        // Pattern for English message
        const englishPattern = /Received EGP(\d+(\.\d+)?) from (\d+) to/;
        const arabicMatch = message.match(arabicPattern);
        const englishMatch = message.match(englishPattern);
        if (arabicMatch) {
            console.log("SMSService: Matched Arabic pattern");
            return {
                amount: parseFloat(arabicMatch[1]),
                sender: arabicMatch[3],
                senderName: arabicMatch[4] || null,
                type: "Transfer",
                timestamp: new Date().toISOString(),
            };
        }
        if (englishMatch) {
            console.log("SMSService: Matched English pattern");
            return {
                amount: parseFloat(englishMatch[1]),
                sender: englishMatch[3],
                type: "Transfer",
                timestamp: new Date().toISOString(),
            };
        }
        console.log("SMSService: No pattern matched");
        return null;
    }
    async sendToAPI(transactionData) {
        try {
            console.log("SMSService: Preparing to send to API:", JSON.stringify(transactionData));
            const enrichedData = Object.assign(Object.assign({}, transactionData), { metadata: {
                    platform: "VODAFONE_CASH",
                    source: "SMS",
                } });
            console.log("SMSService: Sending enriched data to API:", JSON.stringify(enrichedData));
            // Explicitly log the request before sending
            console.log("SMSService: API Request URL:", `${_config_constants__WEBPACK_IMPORTED_MODULE_2__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_2__.ENDPOINTS.TRANSACTIONS.MOBILE}`);
            console.log("SMSService: API Request Method: POST");
            const response = await this.transactionService.createTransaction(enrichedData);
            console.log("SMSService: API Response:", JSON.stringify(response));
            return response;
        }
        catch (error) {
            console.error("SMSService: API Error:", error);
            // إضافة تفاصيل أكثر عن الخطأ
            if (error instanceof Error) {
                console.error("SMSService: Error details:", {
                    message: error.message,
                    stack: error.stack,
                    name: error.name,
                });
            }
            if (error.response) {
                console.error("SMSService: API Error Response:", {
                    status: error.response.status,
                    data: error.response.data,
                });
            }
            throw error;
        }
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/sms.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/storage.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _nativescript_secure_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/secure-storage/index.android.js");

class StorageService {
    constructor() {
        this.secureStorage = new _nativescript_secure_storage__WEBPACK_IMPORTED_MODULE_0__.SecureStorage();
    }
    static getInstance() {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }
    async setItem(key, value) {
        try {
            await this.secureStorage.setSync({
                key,
                value
            });
        }
        catch (error) {
            console.error('Error storing data:', error);
            throw error;
        }
    }
    async getItem(key) {
        try {
            return await this.secureStorage.getSync({
                key
            });
        }
        catch (error) {
            console.error('Error retrieving data:', error);
            return null;
        }
    }
    async removeItem(key) {
        try {
            await this.secureStorage.removeSync({
                key
            });
        }
        catch (error) {
            console.error('Error removing data:', error);
            throw error;
        }
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/storage.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/transaction.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/http/http-request/index.android.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/config/constants.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/auth.service.ts");



class TransactionService {
    constructor() {
        this.authService = _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.getInstance();
    }
    static getInstance() {
        if (!TransactionService.instance) {
            TransactionService.instance = new TransactionService();
        }
        return TransactionService.instance;
    }
    async getHeaders() {
        const authState = await this.authService.getAuthState().toPromise();
        return Object.assign({ "Content-Type": "application/json" }, (authState.token
            ? { Authorization: `Bearer ${authState.token}` }
            : {}));
    }
    async getTransactions(filter) {
        try {
            const headers = await this.getHeaders();
            const queryString = filter
                ? `?${new URLSearchParams(filter).toString()}`
                : "";
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.GET_ALL}${queryString}`,
                method: "GET",
                headers,
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error("Error fetching transactions:", error);
            throw error;
        }
    }
    async getTransaction(id) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.GET_SINGLE(id)}`,
                method: "GET",
                headers,
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error("Error fetching transaction:", error);
            throw error;
        }
    }
    async sendMobileTransaction(transactionData) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.MOBILE}`,
                method: "POST",
                headers,
                content: JSON.stringify(transactionData),
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error("Error sending mobile transaction:", error);
            throw error;
        }
    }
    async createTransaction(transactionData) {
        try {
            console.log("TransactionService: Creating transaction:", JSON.stringify(transactionData));
            const headers = await this.getHeaders();
            console.log("TransactionService: Using headers:", headers);
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.MOBILE}`,
                method: "POST",
                headers: Object.assign({ "Content-Type": "application/json" }, headers),
                content: JSON.stringify(transactionData),
            });
            console.log("TransactionService: Response status:", response.statusCode);
            console.log("TransactionService: Response content:", response.content.toString());
            if (response.statusCode >= 200 && response.statusCode < 300) {
                return response.content.toJSON();
            }
            else {
                throw new Error(`HTTP Error: ${response.statusCode} - ${response.content.toString()}`);
            }
        }
        catch (error) {
            console.error("TransactionService Error:", error);
            throw error;
        }
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/transaction.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/services/user.service.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/api.service.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/config/constants.ts");


class UserService {
    constructor() {
        this.apiService = _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.getInstance();
    }
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    async getAllUsers() {
        return this.apiService.get(_config_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINTS.USERS.GET_ALL);
    }
    async createUser(userData) {
        return this.apiService.post(_config_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINTS.USERS.CREATE, userData);
    }
    async updateUser(id, userData) {
        return this.apiService.put(_config_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINTS.USERS.UPDATE(id), userData);
    }
    async deleteUser(id) {
        return this.apiService.delete(_config_constants__WEBPACK_IMPORTED_MODULE_1__.ENDPOINTS.USERS.DELETE(id));
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./services/user.service.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/utils/date.utils.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   getDateRange: () => (/* binding */ getDateRange)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/date-fns/startOfMonth.mjs");

function formatDate(date) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, 'MMM dd, yyyy HH:mm');
}
function getDateRange(range) {
    const now = new Date();
    const end = now;
    switch (range) {
        case 'today':
            return {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(now),
                end
            };
        case 'this_week':
            return {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfWeek)(now),
                end
            };
        case 'this_month':
            return {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.startOfMonth)(now),
                end
            };
        default:
            return {
                start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(now),
                end
            };
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./utils/date.utils.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/utils/format.utils.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatTransactionType: () => (/* binding */ formatTransactionType)
/* harmony export */ });
function formatCurrency(amount) {
    return `EGP ${amount.toFixed(2)}`;
}
function formatTransactionType(type) {
    return type.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./utils/format.utils.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/utils/http.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/http/http-request/index.android.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/config/constants.ts");


async function request(endpoint, options) {
    try {
        const queryString = options.params ? `?${new URLSearchParams(options.params).toString()}` : '';
        const url = `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${endpoint}${queryString}`;
        const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.request({
            url,
            method: options.method,
            headers: Object.assign({ 'Content-Type': 'application/json' }, options.headers),
            content: options.body ? JSON.stringify(options.body) : undefined
        });
        return response.content.toJSON();
    }
    catch (error) {
        console.error('HTTP Request Error:', error);
        throw error;
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./utils/http.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/utils/permissions.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestSMSPermissions: () => (/* binding */ requestSMSPermissions)
/* harmony export */ });
/* harmony import */ var nativescript_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-permissions/permissions.js");

async function requestSMSPermissions() {
    try {
        if (true) {
            const permissionsList = [
                android.Manifest.permission.RECEIVE_SMS,
                android.Manifest.permission.READ_SMS,
            ];
            const granted = await nativescript_permissions__WEBPACK_IMPORTED_MODULE_0__.requestPermissions(permissionsList, "We need access to your SMS to monitor messages");
            return granted;
        }
        return false;
    }
    catch (error) {
        console.error("Error requesting SMS permissions:", error);
        return false;
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./utils/permissions.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/views/dashboard/dashboard-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/dashboard/dashboard-view-model.ts");

function onNavigatingTo(args) {
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__.DashboardViewModel();
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/dashboard/dashboard-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/views/dashboard/dashboard-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardViewModel: () => (/* binding */ DashboardViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/auth.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/navigation.service.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/config/constants.ts");
/* harmony import */ var _utils_date_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/date.utils.ts");
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/format.utils.ts");







class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Observable {
    constructor() {
        super();
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.authService = _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService.getInstance();
        this.navigationService = _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService.getInstance();
        this.selectedDateRangeIndex = 0;
        this.todayTransactions = 0;
        this.weekTransactions = 0;
        this.monthTransactions = 0;
        this.recentTransactions = [];
        this.loadDashboardData();
    }
    async loadDashboardData() {
        try {
            const ranges = [
                _config_constants__WEBPACK_IMPORTED_MODULE_3__.DATE_RANGES.TODAY,
                _config_constants__WEBPACK_IMPORTED_MODULE_3__.DATE_RANGES.THIS_WEEK,
                _config_constants__WEBPACK_IMPORTED_MODULE_3__.DATE_RANGES.THIS_MONTH,
            ];
            const [today, week, month] = await Promise.all(ranges.map((range) => this.transactionService.getTransactions({ range })));
            this.set("todayTransactions", today.length);
            this.set("weekTransactions", week.length);
            this.set("monthTransactions", month.length);
            const formattedTransactions = today.slice(0, 10).map((transaction) => (Object.assign(Object.assign({}, transaction), { amount: (0,_utils_format_utils__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(transaction.amount), type: (0,_utils_format_utils__WEBPACK_IMPORTED_MODULE_5__.formatTransactionType)(transaction.type), timestamp: (0,_utils_date_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(new Date(transaction.timestamp)) })));
            this.set("recentTransactions", formattedTransactions.length
                ? formattedTransactions
                : [{ type: "No data", amount: "", timestamp: "" }]);
        }
        catch (error) {
            console.error("Error loading dashboard data:", error);
            this.set("recentTransactions", [
                { type: "Error", amount: "N/A", timestamp: "N/A" },
            ]);
        }
    }
    onLogout() {
        this.authService.logout();
        this.navigationService.navigate("login", { clearHistory: true });
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/dashboard/dashboard-view-model.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/views/login/login-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onNavigatingTo: () => (/* binding */ onNavigatingTo)
/* harmony export */ });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/views/login/login-view-model.ts");

function onNavigatingTo(args) {
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
    }
    console.log("Login page loaded");
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/views/login/login-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginViewModel: () => (/* binding */ LoginViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/connectivity/index.android.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/auth.service.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/navigation.service.ts");




class LoginViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor() {
        super();
        this._username = "";
        this._password = "";
        this._logMessages = "";
        this._errorMessage = "";
        this.authService = _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService.getInstance();
        this.navigationService = _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService.getInstance();
        this.addLog("Login View Model Initialized");
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
        this.notifyPropertyChange("username", value);
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
        this.notifyPropertyChange("password", value);
    }
    get logMessages() {
        return this._logMessages;
    }
    get errorMessage() {
        return this._errorMessage;
    }
    set errorMessage(value) {
        this._errorMessage = value;
        this.notifyPropertyChange("errorMessage", value);
    }
    async onLogin() {
        if (!this._username || !this._password) {
            this.errorMessage = "Please enter username and password.";
            this.addLog("Please enter username and password.");
            return;
        }
        try {
            this.addLog("Try to login...");
            const connectionType = _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_3__.getConnectionType();
            if (connectionType === _nativescript_core_connectivity__WEBPACK_IMPORTED_MODULE_3__.connectionType.none) {
                this.errorMessage = "No internet Connection";
                this.addLog("No internet Connection");
                return;
            }
            const success = await this.authService.login(this._username, this._password);
            if (success) {
                this.addLog("Success Login");
                console.log("Trying to login in ");
                this.navigationService.navigate("dashboard", { clearHistory: true });
                console.log("Request Navigated to dashboard");
            }
            else {
                this.errorMessage = "Login Failed , Please try again.";
                this.addLog("Login Failed ");
            }
        }
        catch (error) {
            console.error("Error to login : ", error);
            this.errorMessage = `Error to login  ${error.message}`;
        }
    }
    addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        this._logMessages = `[${timestamp}] ${message}\n${this._logMessages}`;
        this.notifyPropertyChange("logMessages", this._logMessages);
        console.log(message);
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-view-model.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/app-root.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"views/login/login-page\" />"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/main-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"My App\" icon=\"\" />\n\n    <StackLayout class=\"p-4\">\n        <Label text=\"Please tap me\" class=\"text-3xl text-center\" />\n        <Button text=\"TAP\" tap=\"{{ onTap }}\" class=\"-primary\" />\n        <Label text=\"{{ message }}\" class=\"text-lg text-center text-gray-400\" textWrap=\"true\" />\n    </StackLayout>\n</Page>\n"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/views/dashboard/dashboard-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\" class=\"page\">\n    <ActionBar title=\"{{ pageTitle }}\" class=\"action-bar\">\n        <ActionItem tap=\"{{ onLogout }}\" ios.position=\"right\" android.position=\"actionBar\">\n            <Label text=\"Logout\" class=\"action-item\" />\n        </ActionItem>\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <!-- Date Range Filter -->\n            <SegmentedBar selectedIndex=\"{{ selectedDateRangeIndex }}\" class=\"mb-4\">\n                <SegmentedBar.items>\n                    <SegmentedBarItem title=\"Today\" />\n                    <SegmentedBarItem title=\"Week\" />\n                    <SegmentedBarItem title=\"Month\" />\n                </SegmentedBar.items>\n            </SegmentedBar>\n\n            <!-- Transaction Summary -->\n            <GridLayout rows=\"auto\" columns=\"*, *, *\" class=\"mb-4\">\n                <StackLayout col=\"0\" class=\"text-center p-2\">\n                    <Label text=\"{{ todayTransactions }}\" class=\"text-2xl font-bold\" />\n                    <Label text=\"Today\" class=\"text-sm text-gray-600\" />\n                </StackLayout>\n                <StackLayout col=\"1\" class=\"text-center p-2\">\n                    <Label text=\"{{ weekTransactions }}\" class=\"text-2xl font-bold\" />\n                    <Label text=\"This Week\" class=\"text-sm text-gray-600\" />\n                </StackLayout>\n                <StackLayout col=\"2\" class=\"text-center p-2\">\n                    <Label text=\"{{ monthTransactions }}\" class=\"text-2xl font-bold\" />\n                    <Label text=\"This Month\" class=\"text-sm text-gray-600\" />\n                </StackLayout>\n            </GridLayout>\n\n            <!-- Recent Transactions -->\n            <Label text=\"Recent Transactions\" class=\"text-xl font-bold mb-2\" />\n            <ListView items=\"{{ recentTransactions }}\" class=\"list-group\" height=\"300\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" class=\"list-group-item p-2\">\n                        <StackLayout col=\"0\">\n                            <Label text=\"{{ type }}\" class=\"font-bold\" />\n                            <Label text=\"{{ amount }}\" class=\"text-gray-600\" />\n                        </StackLayout>\n                        <Label col=\"1\" text=\"{{ timestamp }}\" class=\"text-sm text-gray-500\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </ScrollView>\n</Page>\n"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/views/login/login-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"onNavigatingTo\">\n    <ActionBar title=\"Login\" />\n    \n    <StackLayout>\n        <Label text=\"Welcome Back\" \n               class=\"h2 text-center m-10\" />\n        \n        <TextField hint=\"Username\" \n                  text=\"{{ username }}\"\n                  class=\"input m-10\"\n                  autocorrect=\"false\"\n                  autocapitalizationType=\"none\" />\n        \n        <TextField hint=\"Password\" \n                  text=\"{{ password }}\"\n                  secure=\"true\"\n                  class=\"input m-10\" />\n        \n        <Button text=\"Login\" \n                tap=\"{{ onLogin }}\"\n                class=\"btn btn-primary m-10\" />\n\n        <ScrollView height=\"200\" class=\"m-10\">\n            <Label text=\"{{ logMessages }}\"\n                   textWrap=\"true\"\n                   style=\"background-color: #f0f0f0; padding: 10; font-size: 12;\" />\n        </ScrollView>\n        \n        <Label text=\"{{ errorMessage }}\"\n               textWrap=\"true\"\n               style=\"color: red; text-align: center;\" \n               class=\"m-10\" />\n    </StackLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/webpack/dist/stubs/virtual-entry-typescript.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./app/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyx3TkFBd04sV0FBVyxzSkFBc0osVUFBVSwwSUFBMEksY0FBYyxnR0FBZ0csYUFBYSxjQUFjLGlFQUFpRSxlQUFlLHlFQUF5RSxtQkFBbUI7QUFDbnJDLGlFQUFlLGlDQUFpQztBQUNoRCxHQUFHLElBQVU7QUFDYixDQUFDLGlCQUFpQjtBQUNsQiwrQkFBK0I7QUFDL0I7Ozs7Ozs7O0FDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvIHN5bmMgXFwuKHhtbCU3Q2pzJTdDKCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9hcHAtaW5pdGlhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL2NvbmZpZy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdXRpbHMvZGF0ZS51dGlscy50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdXRpbHMvZm9ybWF0LnV0aWxzLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC91dGlscy9odHRwLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC91dGlscy9wZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvbG9naW4vbG9naW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLWluaXRpYWxpemF0aW9uLnRzXCI6IFwiLi9hcHAvYXBwLWluaXRpYWxpemF0aW9uLnRzXCIsXG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC9hcHAudHNcIixcblx0XCIuL2NvbmZpZy9jb25zdGFudHMudHNcIjogXCIuL2FwcC9jb25maWcvY29uc3RhbnRzLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXBpLnNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL2F1dGguc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zbXMuc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHNcIixcblx0XCIuL3V0aWxzL2RhdGUudXRpbHMudHNcIjogXCIuL2FwcC91dGlscy9kYXRlLnV0aWxzLnRzXCIsXG5cdFwiLi91dGlscy9mb3JtYXQudXRpbHMudHNcIjogXCIuL2FwcC91dGlscy9mb3JtYXQudXRpbHMudHNcIixcblx0XCIuL3V0aWxzL2h0dHAudHNcIjogXCIuL2FwcC91dGlscy9odHRwLnRzXCIsXG5cdFwiLi91dGlscy9wZXJtaXNzaW9ucy50c1wiOiBcIi4vYXBwL3V0aWxzL3Blcm1pc3Npb25zLnRzXCIsXG5cdFwiLi92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlld3MvbG9naW4vbG9naW4tdmlldy1tb2RlbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBGcmFtZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNNU1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zbXMuc2VydmljZVwiO1xuXG4vLyBJbml0aWFsaXplIGNvcmUgc2VydmljZXNcbmNvbnN0IHN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IG5hdmlnYXRpb25TZXJ2aWNlID0gTmF2aWdhdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuLy8gSW5pdGlhbGl6ZSBTTVMgU2VydmljZVxuY29uc3Qgc21zU2VydmljZSA9IFNNU1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxubGV0IG1haW5GcmFtZTogRnJhbWU7XG5cbkFwcGxpY2F0aW9uLm9uKEFwcGxpY2F0aW9uLmxhdW5jaEV2ZW50LCBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gbGF1bmNoaW5nLi4uXCIpO1xuICAvLyBDcmVhdGUgYW5kIGluaXRpYWxpemUgdGhlIG1haW4gZnJhbWVcbiAgbWFpbkZyYW1lID0gbmV3IEZyYW1lKCk7XG4gIG5hdmlnYXRpb25TZXJ2aWNlLnNldE5hdmlnYXRpb24obWFpbkZyYW1lKTtcbiAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIGZyYW1lIGluaXRpYWxpemVkXCIpO1xuXG4gIC8vIEluaXRpYWxpemUgU01TIG1vbml0b3JpbmdcbiAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTTVMgbW9uaXRvcmluZy4uLlwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc21zSW5zdGFuY2UgPSBTTVNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNUyBTZXJ2aWNlIGluc3RhbmNlIGNyZWF0ZWRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbml0aWFsaXppbmcgU01TIHNlcnZpY2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBOYXZpZ2F0ZSB0byBpbml0aWFsIHBhZ2VcbiAgbWFpbkZyYW1lLm5hdmlnYXRlKHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2xvZ2luL2xvZ2luLXBhZ2VcIixcbiAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gIH0pO1xufSk7XG5cbkFwcGxpY2F0aW9uLm9uKEFwcGxpY2F0aW9uLmRpc3BsYXllZEV2ZW50LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gZGlzcGxheWVkIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgaWYgKCFuYXZpZ2F0aW9uU2VydmljZS5oYXNGcmFtZSgpKSB7XG4gICAgY29uc3QgdG9wRnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICBuYXZpZ2F0aW9uU2VydmljZS5zZXROYXZpZ2F0aW9uKHRvcEZyYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBmcmFtZSBzZXQgZnJvbSB0b3Btb3N0XCIpO1xuICAgIH1cbiAgfVxufSk7XG5cbkFwcGxpY2F0aW9uLnJ1bih7IGNyZWF0ZTogKCkgPT4gbWFpbkZyYW1lIH0pO1xuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcbi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNWY1ZjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzMzMzMzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTJlOGYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEycHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0OmZvY3VzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEycHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNnB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTphY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI1NjNlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS0zMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZDFkNWRiXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIi9Vc2Vycy90LWJveC9EZXZlbG9wZXIvVm9kYWZvbmUgVjIvbW9iaWxlLWFwcC9hcHAvYXBwLmNzc1wiKVxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG5cdFx0Y29uc3QgeyByZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cdFx0cmVtb3ZlVGFnZ2VkQWRkaXRpb25hbENTUyhcIi9Vc2Vycy90LWJveC9EZXZlbG9wZXIvVm9kYWZvbmUgVjIvbW9iaWxlLWFwcC9hcHAvYXBwLmNzc1wiKVxuXHR9KVxufSIsIi8vIGFwcC1pbml0aWFsaXphdGlvbi50c1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgU01TU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuL3V0aWxzL2h0dHBcIjtcbmltcG9ydCB7IEVORFBPSU5UUyB9IGZyb20gXCIuL2NvbmZpZy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlcXVlc3RTTVNQZXJtaXNzaW9ucyB9IGZyb20gXCIuL3V0aWxzL3Blcm1pc3Npb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBJbml0aWFsaXphdGlvbiB7XG4gIHByaXZhdGUgc3RhdGljIGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgYXBpU2VydmljZSA9IEFwaVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgc3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIHN0YXRpYyBuYXZpZ2F0aW9uU2VydmljZSA9IE5hdmlnYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgc3RhdGljIHNtc1NlcnZpY2UgPSBTTVNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG5cbiAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoZnJhbWU6IEZyYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vINiq2YfZitim2Kkg2K7Yr9mF2Kkg2KfZhNiq2YbZgtmEXG4gICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnNldE5hdmlnYXRpb24oZnJhbWUpO1xuXG4gICAgICAvLyDYqtmH2YrYptipINin2YTYo9iw2YjZhtin2Kog2YjYrtiv2YXYqSBTTVMg2YTZhNij2YbYr9ix2YjZitivXG4gICAgICBpZiAoZ2xvYmFsLmlzQW5kcm9pZCkge1xuICAgICAgICBjb25zdCBoYXNQZXJtaXNzaW9ucyA9IGF3YWl0IHJlcXVlc3RTTVNQZXJtaXNzaW9ucygpO1xuICAgICAgICBpZiAoaGFzUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICB0aGlzLnNtc1NlcnZpY2U7IC8vINiz2YrYqtmFINiq2YfZitim2Kkg2KfZhNmF2LHYp9mC2Kgg2KrZhNmC2KfYptmK2KfZi1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vINin2YTYqtit2YLZgiDZhdmGINit2KfZhNipINin2YTZhdi12KfYr9mC2KlcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKTtcbiAgICAgIGNvbnN0IGF1dGhTdGF0ZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aFN0YXRlKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgIGlmICh0b2tlbiAmJiBhdXRoU3RhdGUuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8g2KfZhNiq2K3ZgtmCINmF2YYg2LXZhNin2K3ZitipINin2YTYqtmI2YPZhlxuICAgICAgICAgIGF3YWl0IHJlcXVlc3QoRU5EUE9JTlRTLkhFQUxUSCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyDZhtis2KfYrSDYp9mE2KrYrdmC2YLYjCDYp9mE2KfZhtiq2YLYp9mEINil2YTZiSDZhNmI2K3YqSDYp9mE2KrYrdmD2YVcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFwiZGFzaGJvYXJkXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vINmB2LTZhCDYp9mE2KrYrdmC2YIg2YXZhiDYp9mE2KrZiNmD2YZcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUludmFsaWRUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDZhNinINmK2YjYrNivINiq2YjZg9mGINij2Ygg2KfZhNmF2LPYqtiu2K/ZhSDYutmK2LEg2YXYs9is2YRcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImxvZ2luXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQXBwIGluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFwibG9naW5cIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgaGFuZGxlSW52YWxpZFRva2VuKCkge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIik7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtKFwiYXV0aF91c2VyXCIpO1xuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImxvZ2luXCIpO1xuICB9XG59XG4iLCIvL2NvbnN0YW50cy50c1xuY29uc3QgcG9ydCA9IDMwMDA7IFxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBgaHR0cDovLzE5Mi4xNjguMS41OiR7cG9ydH0vYXBpYDtcblxuXG5leHBvcnQgY29uc3QgRU5EUE9JTlRTID0ge1xuICBBVVRIOiB7XG4gICAgTE9HSU46IFwiL2F1dGgvbG9naW5cIixcbiAgfSxcbiAgVVNFUlM6IHtcbiAgICBCQVNFOiBcIi91c2Vyc1wiLFxuICAgIEdFVF9BTEw6IFwiL3VzZXJzXCIsXG4gICAgQ1JFQVRFOiBcIi91c2Vyc1wiLFxuICAgIFVQREFURTogKGlkOiBzdHJpbmcpID0+IGAvdXNlcnMvJHtpZH1gLFxuICAgIERFTEVURTogKGlkOiBzdHJpbmcpID0+IGAvdXNlcnMvJHtpZH1gLFxuICB9LFxuICBUUkFOU0FDVElPTlM6IHtcbiAgICBCQVNFOiBcIi90cmFuc2FjdGlvbnNcIixcbiAgICBHRVRfQUxMOiBcIi90cmFuc2FjdGlvbnNcIixcbiAgICBDUkVBVEU6IFwiL3RyYW5zYWN0aW9uc1wiLFxuICAgIEdFVF9TSU5HTEU6IChpZDogc3RyaW5nKSA9PiBgL3RyYW5zYWN0aW9ucy8ke2lkfWAsXG4gICAgTU9CSUxFOiBcIi9tb2JpbGUvdHJhbnNhY3Rpb25zXCIsXG4gIH0sXG4gIEhFQUxUSDogXCIvaGVhbHRoXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVFJBTlNBQ1RJT05fVFlQRVMgPSB7XG4gIFRSQU5TRkVSOiAnVHJhbnNmZXInLFxuICBCSUxMX1BBWU1FTlQ6ICdCaWxsIFBheW1lbnQnLFxuICBNT0JJTEVfUkVDSEFSR0U6ICdNb2JpbGUgUmVjaGFyZ2UnLFxuICBXSVRIRFJBV0FMOiAnV2l0aGRyYXdhbCcsXG4gIERFUE9TSVQ6ICdEZXBvc2l0J1xufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfUkFOR0VTID0ge1xuICBUT0RBWTogJ3RvZGF5JyxcbiAgVEhJU19XRUVLOiAndGhpc193ZWVrJyxcbiAgVEhJU19NT05USDogJ3RoaXNfbW9udGgnLFxuICBDVVNUT006ICdjdXN0b20nXG59OyIsIi8vIG1haW4tcGFnZS50c1xuaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gIC8vINmH2LDZhyDYp9mE2LXZgdit2Kkg2LPYqtmD2YjZhiDZhdik2YLYqtipINmB2YLYtyDYrdiq2Ykg2KrZg9iq2YXZhCDYudmF2YTZitipINin2YTYqtmH2YrYptipXG4gIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cblxuICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtZXNzYWdlJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFwKCkge1xuICAgIHRoaXMuX2NvdW50ZXItLTtcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5fY291bnRlciA8PSAwKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPVxuICAgICAgICAnSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50ISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGAke3RoaXMuX2NvdW50ZXJ9IHRhcHMgbGVmdGA7XG4gICAgfVxuXG4gICAgLy8gbG9nIHRoZSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlXG4gICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBcGlTZXJ2aWNlO1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBpU2VydmljZSB7XG4gICAgaWYgKCFBcGlTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICBBcGlTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEFwaVNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIEFwaVNlcnZpY2UuaW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldEhlYWRlcnMoKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9PiB7XG4gICAgY29uc3QgYXV0aFN0YXRlID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5nZXRBdXRoU3RhdGUoKS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC4uLihhdXRoU3RhdGUudG9rZW4gPyB7ICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2F1dGhTdGF0ZS50b2tlbn1gIH0gOiB7fSlcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPFQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBwYXJhbXMgPyBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCl9YCA6ICcnO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke2VuZHBvaW50fSR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlPFQ+KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcG9zdDxUPihlbmRwb2ludDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPFQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke2VuZHBvaW50fWAsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlPFQ+KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHV0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8VD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9YCxcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZTxUPihyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZTxUPihlbmRwb2ludDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtlbmRwb2ludH1gLFxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2U8VD4ocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlPFQ+KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpOiBUIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDMwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBFcnJvcjogJHtyZXNwb25zZS5zdGF0dXNDb2RlfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogRXJyb3Ige1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBFcnJvcjonLCBlcnJvcik7XG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuY29udGVudC50b0pTT04oKT8uZXJyb3IgfHwgJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBJX1VSTCwgRU5EUE9JTlRTIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdG9rZW46IHN0cmluZyB8IG51bGw7XG4gIHVzZXI6IGFueSB8IG51bGw7XG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBhdXRoU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEF1dGhTdGF0ZT4oe1xuICAgIHRva2VuOiBudWxsLFxuICAgIHVzZXI6IG51bGwsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICB9KTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZFN0b3JlZEF1dGgoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBdXRoU2VydmljZSB7XG4gICAgaWYgKCFBdXRoU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgQXV0aFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgQXV0aFNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIEF1dGhTZXJ2aWNlLmluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkU3RvcmVkQXV0aCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2F1dGhfdG9rZW4nKTtcbiAgICAgIGNvbnN0IHVzZXJTdHIgPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2F1dGhfdXNlcicpO1xuICAgICAgXG4gICAgICBpZiAodG9rZW4gJiYgdXNlclN0cikge1xuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZSh1c2VyU3RyKTtcbiAgICAgICAgdGhpcy5zZXRBdXRoU3RhdGUoe1xuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHN0b3JlZCBhdXRoOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7RU5EUE9JTlRTLkFVVEguTE9HSU59YCxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3VsdC50b2tlbikge1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ2F1dGhfdG9rZW4nLCByZXN1bHQudG9rZW4pO1xuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ2F1dGhfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC51c2VyKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEF1dGhTdGF0ZSh7XG4gICAgICAgICAgdG9rZW46IHJlc3VsdC50b2tlbixcbiAgICAgICAgICB1c2VyOiByZXN1bHQudXNlcixcbiAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnJlbW92ZUl0ZW0oJ2F1dGhfdG9rZW4nKTtcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbSgnYXV0aF91c2VyJyk7XG4gICAgICBcbiAgICAgIHRoaXMuc2V0QXV0aFN0YXRlKHtcbiAgICAgICAgdG9rZW46IG51bGwsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGdldEF1dGhTdGF0ZSgpOiBPYnNlcnZhYmxlPEF1dGhTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QXV0aFN0YXRlKHN0YXRlOiBBdXRoU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTdGF0ZS5uZXh0KHN0YXRlKTtcbiAgfVxufSIsIi8vIHNlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZS50c1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBOYXZpZ2F0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBmcmFtZTogRnJhbWUgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTmF2aWdhdGlvblNlcnZpY2Uge1xuICAgIGlmICghTmF2aWdhdGlvblNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgIE5hdmlnYXRpb25TZXJ2aWNlLmluc3RhbmNlID0gbmV3IE5hdmlnYXRpb25TZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBOYXZpZ2F0aW9uU2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldE5hdmlnYXRpb24oZnJhbWU6IEZyYW1lKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIG5hdmlnYXRpb24gZnJhbWVcIik7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICB9XG5cbiAgaGFzRnJhbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWUgIT09IG51bGw7XG4gIH1cblxuICBuYXZpZ2F0ZShwYWdlTmFtZTogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgbmF2aWdhdGlvbiB0bzpcIiwgcGFnZU5hbWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5mcmFtZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gZnJhbWUgc2V0LCB0cnlpbmcgdG8gZ2V0IHRvcG1vc3QgZnJhbWVcIik7XG4gICAgICAgIHRoaXMuZnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgICAgIGlmICghdGhpcy5mcmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG5hdmlnYXRpb24gZnJhbWUgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZHVsZVBhdGggPSBgdmlld3MvJHtwYWdlTmFtZX0vJHtwYWdlTmFtZX0tcGFnZWA7XG4gICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmcgdG8gbW9kdWxlIHBhdGg6XCIsIG1vZHVsZVBhdGgpO1xuXG4gICAgICB0aGlzLmZyYW1lLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogbW9kdWxlUGF0aCxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBwYWdlTmFtZSA9PT0gXCJsb2dpblwiLFxuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBjb21wbGV0ZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3QgTmF2aWdhdGVkIHRvIFwiICsgcGFnZU5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTmF2aWdhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZ29CYWNrKCkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZSB8fCBGcmFtZS50b3Btb3N0KCk7XG4gICAgaWYgKGZyYW1lPy5jYW5Hb0JhY2soKSkge1xuICAgICAgZnJhbWUuZ29CYWNrKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdHJhbnNhY3Rpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgcmVxdWVzdFNNU1Blcm1pc3Npb25zIH0gZnJvbSBcIi4uL3V0aWxzL3Blcm1pc3Npb25zXCI7XG5pbXBvcnQgKiBhcyBhbmRyb2lkQXBwIGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmUvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFQSV9VUkwsIEVORFBPSU5UUyB9IGZyb20gXCJ+L2NvbmZpZy9jb25zdGFudHNcIjtcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGphdmE6IGFueTtcblxuZXhwb3J0IGNsYXNzIFNNU1NlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU01TU2VydmljZTtcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBpc01vbml0b3JpbmdTdGFydGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IENvbnN0cnVjdG9yIGNhbGxlZFwiKTtcbiAgICB0aGlzLmluaXRpYWxpemVTTVNMaXN0ZW5lcigpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFNNU1NlcnZpY2Uge1xuICAgIGlmICghU01TU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBDcmVhdGluZyBuZXcgaW5zdGFuY2VcIik7XG4gICAgICBTTVNTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFNNU1NlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFNNU1NlcnZpY2UuaW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVTTVNMaXN0ZW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IEluaXRpYWxpemluZyBTTVMgbGlzdGVuZXJcIik7XG4gICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhhc1Blcm1pc3Npb25zID0gYXdhaXQgcmVxdWVzdFNNU1Blcm1pc3Npb25zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogUGVybWlzc2lvbnMgc3RhdHVzOlwiLCBoYXNQZXJtaXNzaW9ucyk7XG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9ucyAmJiAhdGhpcy5pc01vbml0b3JpbmdTdGFydGVkKSB7XG4gICAgICAgICAgdGhpcy5zdGFydFNNU01vbml0b3JpbmcoKTtcbiAgICAgICAgICB0aGlzLmlzTW9uaXRvcmluZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU01TU2VydmljZTogUGVybWlzc2lvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRTTVNNb25pdG9yaW5nKCk6IHZvaWQge1xuICAgIGlmICghZ2xvYmFsLmlzQW5kcm9pZCkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBOb3QgYW4gQW5kcm9pZCBkZXZpY2VcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogU3RhcnRpbmcgbW9uaXRvcmluZ1wiKTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBhbmRyb2lkQXBwLmFuZHJvaWQuY29udGV4dDtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogR290IEFuZHJvaWQgY29udGV4dFwiKTtcblxuICAgICAgY29uc3QgaW50ZW50RmlsdGVyID0gbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXIoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQ3JlYXRlZCBpbnRlbnQgZmlsdGVyXCIpO1xuXG4gICAgICBpbnRlbnRGaWx0ZXIuYWRkQWN0aW9uKFwiYW5kcm9pZC5wcm92aWRlci5UZWxlcGhvbnkuU01TX1JFQ0VJVkVEXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBBZGRlZCBhY3Rpb24gdG8gaW50ZW50IGZpbHRlclwiKTtcblxuICAgICAgaW50ZW50RmlsdGVyLnNldFByaW9yaXR5KDk5OSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IFNldCBwcmlvcml0eVwiKTtcblxuICAgICAgLy8gQ3JlYXRlIEJyb2FkY2FzdFJlY2VpdmVyIGNvcnJlY3RseVxuICAgICAgY29uc3QgQnJvYWRjYXN0UmVjZWl2ZXIgPSBhbmRyb2lkLmNvbnRlbnQuQnJvYWRjYXN0UmVjZWl2ZXIuZXh0ZW5kKHtcbiAgICAgICAgb25SZWNlaXZlOiBmdW5jdGlvbiAoY29udGV4dDogYW55LCBpbnRlbnQ6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQnJvYWRjYXN0IHJlY2VpdmVkXCIpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBidW5kbGUgPSBpbnRlbnQuZ2V0RXh0cmFzKCk7XG4gICAgICAgICAgICBpZiAoIWJ1bmRsZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IE5vIGJ1bmRsZSBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwZHVzT2JqID0gYnVuZGxlLmdldChcInBkdXNcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IFBEVXMgb2JqZWN0IHR5cGU6XCIsIHR5cGVvZiBwZHVzT2JqKTtcblxuICAgICAgICAgICAgaWYgKCFwZHVzT2JqKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogTm8gUERVcyBvYmplY3QgZm91bmRcIik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gYnVuZGxlLmdldFN0cmluZyhcImZvcm1hdFwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgbGV0IGZ1bGxNZXNzYWdlID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBzZW5kZXIgPSBcIlwiO1xuXG4gICAgICAgICAgICAvLyBHZXQgYXJyYXkgbGVuZ3RoIHVzaW5nIEphdmEgcmVmbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgcGR1TGVuZ3RoID0gamF2YS5sYW5nLnJlZmxlY3QuQXJyYXkuZ2V0TGVuZ3RoKHBkdXNPYmopO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBOdW1iZXIgb2YgUERVczpcIiwgcGR1TGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gQ29tYmluZSBhbGwgcGFydHMgb2YgdGhlIG1lc3NhZ2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGR1TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgcGR1ID0gamF2YS5sYW5nLnJlZmxlY3QuQXJyYXkuZ2V0KHBkdXNPYmosIGkpO1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYW5kcm9pZC50ZWxlcGhvbnkuU21zTWVzc2FnZS5jcmVhdGVGcm9tUGR1KFxuICAgICAgICAgICAgICAgIHBkdSxcbiAgICAgICAgICAgICAgICBmb3JtYXRcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEdldCBzZW5kZXIgZnJvbSBmaXJzdCBwYXJ0IG9ubHlcbiAgICAgICAgICAgICAgICBzZW5kZXIgPSBtZXNzYWdlLmdldE9yaWdpbmF0aW5nQWRkcmVzcygpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZnVsbE1lc3NhZ2UgKz0gbWVzc2FnZS5nZXRNZXNzYWdlQm9keSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IEZ1bGwgbWVzc2FnZSBmcm9tOlwiLCBzZW5kZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBDb21wbGV0ZSBtZXNzYWdlOlwiLCBmdWxsTWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2VuZGVyICYmXG4gICAgICAgICAgICAgIChzZW5kZXIuaW5jbHVkZXMoXCJWRi1DYXNoXCIpIHx8XG4gICAgICAgICAgICAgICAgc2VuZGVyLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoXCJWRkNBU0hcIikpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBWYWxpZCBWRkNhc2ggbWVzc2FnZSBkZXRlY3RlZFwiKTtcbiAgICAgICAgICAgICAgU01TU2VydmljZS5pbnN0YW5jZS5wcm9jZXNzU01TKGZ1bGxNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogSWdub3JlZCAtIG5vdCBmcm9tIFZGQ2FzaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNNU1NlcnZpY2U6IEVycm9yIHByb2Nlc3NpbmcgYnJvYWRjYXN0OlwiLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcIlNNU1NlcnZpY2U6IEVycm9yIGRldGFpbHM6XCIsXG4gICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGVycm9yLnN0YWNrXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugb2YgdGhlIHJlY2VpdmVyXG4gICAgICBjb25zdCByZWNlaXZlciA9IG5ldyBCcm9hZGNhc3RSZWNlaXZlcigpO1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBDcmVhdGVkIGJyb2FkY2FzdCByZWNlaXZlclwiKTtcblxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIHJlY2VpdmVyXG4gICAgICBjb250ZXh0LnJlZ2lzdGVyUmVjZWl2ZXIocmVjZWl2ZXIsIGludGVudEZpbHRlcik7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IFJlZ2lzdGVyZWQgcmVjZWl2ZXIgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU01TU2VydmljZTogU2V0dXAgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTTVNTZXJ2aWNlOiBFcnJvciBkZXRhaWxzOlwiLCBlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzU01TKG1lc3NhZ2VCb2R5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IFByb2Nlc3NpbmcgbWVzc2FnZTpcIiwgbWVzc2FnZUJvZHkpO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uRGF0YSA9IHRoaXMucGFyc2VWb2RhZm9uZUNhc2hTTVMobWVzc2FnZUJvZHkpO1xuXG4gICAgaWYgKHRyYW5zYWN0aW9uRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBQYXJzZWQgdHJhbnNhY3Rpb246XCIsIHRyYW5zYWN0aW9uRGF0YSk7XG4gICAgICAvLyBBZGQgbWV0YWRhdGEgYmVmb3JlIHNlbmRpbmcgdG8gQVBJXG4gICAgICBjb25zdCBlbnJpY2hlZERhdGEgPSB7XG4gICAgICAgIC4uLnRyYW5zYWN0aW9uRGF0YSxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICBwbGF0Zm9ybTogXCJWT0RBRk9ORV9DQVNIXCIsXG4gICAgICAgICAgc291cmNlOiBcIlNNU1wiLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5zZW5kVG9BUEkoZW5yaWNoZWREYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBDb3VsZCBub3QgcGFyc2UgbWVzc2FnZVwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBhcnNlVm9kYWZvbmVDYXNoU01TKG1lc3NhZ2U6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBQYXJzaW5nIG1lc3NhZ2VcIik7XG5cbiAgICAvLyBQYXR0ZXJuIGZvciBBcmFiaWMgbWVzc2FnZVxuICAgIGNvbnN0IGFyYWJpY1BhdHRlcm4gPVxuICAgICAgL9iq2YUg2KfYs9iq2YTYp9mFINmF2KjZhNi6IChcXGQrKFxcLlxcZCspPykg2KzZhtmK2Ycg2YXZhiDYsdmC2YUgKFxcZCspKD862Jsg2KfZhNmF2LPYrNmEINio2KXYs9mFIChbXi5dKykpPy87XG5cbiAgICAvLyBQYXR0ZXJuIGZvciBFbmdsaXNoIG1lc3NhZ2VcbiAgICBjb25zdCBlbmdsaXNoUGF0dGVybiA9IC9SZWNlaXZlZCBFR1AoXFxkKyhcXC5cXGQrKT8pIGZyb20gKFxcZCspIHRvLztcblxuICAgIGNvbnN0IGFyYWJpY01hdGNoID0gbWVzc2FnZS5tYXRjaChhcmFiaWNQYXR0ZXJuKTtcbiAgICBjb25zdCBlbmdsaXNoTWF0Y2ggPSBtZXNzYWdlLm1hdGNoKGVuZ2xpc2hQYXR0ZXJuKTtcblxuICAgIGlmIChhcmFiaWNNYXRjaCkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBNYXRjaGVkIEFyYWJpYyBwYXR0ZXJuXCIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KGFyYWJpY01hdGNoWzFdKSxcbiAgICAgICAgc2VuZGVyOiBhcmFiaWNNYXRjaFszXSxcbiAgICAgICAgc2VuZGVyTmFtZTogYXJhYmljTWF0Y2hbNF0gfHwgbnVsbCxcbiAgICAgICAgdHlwZTogXCJUcmFuc2ZlclwiLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGVuZ2xpc2hNYXRjaCkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBNYXRjaGVkIEVuZ2xpc2ggcGF0dGVyblwiKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChlbmdsaXNoTWF0Y2hbMV0pLFxuICAgICAgICBzZW5kZXI6IGVuZ2xpc2hNYXRjaFszXSxcbiAgICAgICAgdHlwZTogXCJUcmFuc2ZlclwiLFxuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBObyBwYXR0ZXJuIG1hdGNoZWRcIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlbmRUb0FQSSh0cmFuc2FjdGlvbkRhdGE6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJTTVNTZXJ2aWNlOiBQcmVwYXJpbmcgdG8gc2VuZCB0byBBUEk6XCIsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uRGF0YSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGVucmljaGVkRGF0YSA9IHtcbiAgICAgICAgLi4udHJhbnNhY3Rpb25EYXRhLFxuICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgIHBsYXRmb3JtOiBcIlZPREFGT05FX0NBU0hcIixcbiAgICAgICAgICBzb3VyY2U6IFwiU01TXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJTTVNTZXJ2aWNlOiBTZW5kaW5nIGVucmljaGVkIGRhdGEgdG8gQVBJOlwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeShlbnJpY2hlZERhdGEpXG4gICAgICApO1xuXG4gICAgICAvLyBFeHBsaWNpdGx5IGxvZyB0aGUgcmVxdWVzdCBiZWZvcmUgc2VuZGluZ1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiU01TU2VydmljZTogQVBJIFJlcXVlc3QgVVJMOlwiLFxuICAgICAgICBgJHtBUElfVVJMfSR7RU5EUE9JTlRTLlRSQU5TQUNUSU9OUy5NT0JJTEV9YFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQVBJIFJlcXVlc3QgTWV0aG9kOiBQT1NUXCIpO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmNyZWF0ZVRyYW5zYWN0aW9uKFxuICAgICAgICBlbnJpY2hlZERhdGFcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IEFQSSBSZXNwb25zZTpcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU01TU2VydmljZTogQVBJIEVycm9yOlwiLCBlcnJvcik7XG4gICAgICAvLyDYpdi22KfZgdipINiq2YHYp9i12YrZhCDYo9mD2KvYsSDYudmGINin2YTYrti32KNcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTTVNTZXJ2aWNlOiBFcnJvciBkZXRhaWxzOlwiLCB7XG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXG4gICAgICAgICAgbmFtZTogZXJyb3IubmFtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNNU1NlcnZpY2U6IEFQSSBFcnJvciBSZXNwb25zZTpcIiwge1xuICAgICAgICAgIHN0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIGRhdGE6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTZWN1cmVTdG9yYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9zZWN1cmUtc3RvcmFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlU2VydmljZTtcbiAgcHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTdG9yYWdlU2VydmljZSB7XG4gICAgaWYgKCFTdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlO1xuICB9XG5cbiAgYXN5bmMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNlY3VyZVN0b3JhZ2Uuc2V0U3luYyh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZWN1cmVTdG9yYWdlLmdldFN5bmMoe1xuICAgICAgICBrZXlcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnNlY3VyZVN0b3JhZ2UucmVtb3ZlU3luYyh7XG4gICAgICAgIGtleVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgSHR0cCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFQSV9VUkwsIEVORFBPSU5UUyB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBpZDogc3RyaW5nO1xuICBzZW5kZXI6IHN0cmluZztcbiAgcmVjZWl2ZXI6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25GaWx0ZXIge1xuICByYW5nZT86IHN0cmluZztcbiAgc3RhcnREYXRlPzogc3RyaW5nO1xuICBlbmREYXRlPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgaWYgKCFUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgIFRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZSA9IG5ldyBUcmFuc2FjdGlvblNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0SGVhZGVycygpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+IHtcbiAgICBjb25zdCBhdXRoU3RhdGUgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmdldEF1dGhTdGF0ZSgpLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIC4uLihhdXRoU3RhdGUudG9rZW5cbiAgICAgICAgPyB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YCB9XG4gICAgICAgIDoge30pLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBnZXRUcmFuc2FjdGlvbnMoZmlsdGVyPzogVHJhbnNhY3Rpb25GaWx0ZXIpOiBQcm9taXNlPFRyYW5zYWN0aW9uW10+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSBmaWx0ZXJcbiAgICAgICAgPyBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhmaWx0ZXIgYXMgYW55KS50b1N0cmluZygpfWBcbiAgICAgICAgOiBcIlwiO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke0VORFBPSU5UUy5UUkFOU0FDVElPTlMuR0VUX0FMTH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYW5zYWN0aW9uczpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0VHJhbnNhY3Rpb24oaWQ6IHN0cmluZyk6IFByb21pc2U8VHJhbnNhY3Rpb24+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtFTkRQT0lOVFMuVFJBTlNBQ1RJT05TLkdFVF9TSU5HTEUoaWQpfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyYW5zYWN0aW9uOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kTW9iaWxlVHJhbnNhY3Rpb24oXG4gICAgdHJhbnNhY3Rpb25EYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPlxuICApOiBQcm9taXNlPHsgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtFTkRQT0lOVFMuVFJBTlNBQ1RJT05TLk1PQklMRX1gLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbkRhdGEpLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBtb2JpbGUgdHJhbnNhY3Rpb246XCIsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVRyYW5zYWN0aW9uKFxuICAgIHRyYW5zYWN0aW9uRGF0YTogUGFydGlhbDxUcmFuc2FjdGlvbj5cbiAgKTogUHJvbWlzZTxUcmFuc2FjdGlvbj4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJUcmFuc2FjdGlvblNlcnZpY2U6IENyZWF0aW5nIHRyYW5zYWN0aW9uOlwiLFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbkRhdGEpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uU2VydmljZTogVXNpbmcgaGVhZGVyczpcIiwgaGVhZGVycyk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7RU5EUE9JTlRTLlRSQU5TQUNUSU9OUy5NT0JJTEV9YCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIC4uLmhlYWRlcnMsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uRGF0YSksXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvblNlcnZpY2U6IFJlc3BvbnNlIHN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJUcmFuc2FjdGlvblNlcnZpY2U6IFJlc3BvbnNlIGNvbnRlbnQ6XCIsXG4gICAgICAgIHJlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgICAgKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCAzMDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0gLSAke3Jlc3BvbnNlLmNvbnRlbnQudG9TdHJpbmcoKX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2FjdGlvblNlcnZpY2UgRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEVORFBPSU5UUyB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBVc2VyU2VydmljZTtcbiAgcHJpdmF0ZSBhcGlTZXJ2aWNlID0gQXBpU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVc2VyU2VydmljZSB7XG4gICAgaWYgKCFVc2VyU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgVXNlclNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFVzZXJTZXJ2aWNlLmluc3RhbmNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0QWxsVXNlcnMoKTogUHJvbWlzZTxVc2VyW10+IHtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmdldDxVc2VyW10+KEVORFBPSU5UUy5VU0VSUy5HRVRfQUxMKTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVVzZXIodXNlckRhdGE6IFBhcnRpYWw8VXNlcj4pOiBQcm9taXNlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnBvc3Q8VXNlcj4oRU5EUE9JTlRTLlVTRVJTLkNSRUFURSwgdXNlckRhdGEpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlVXNlcihpZDogc3RyaW5nLCB1c2VyRGF0YTogUGFydGlhbDxVc2VyPik6IFByb21pc2U8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UucHV0PFVzZXI+KEVORFBPSU5UUy5VU0VSUy5VUERBVEUoaWQpLCB1c2VyRGF0YSk7XG4gIH1cblxuICBhc3luYyBkZWxldGVVc2VyKGlkOiBzdHJpbmcpOiBQcm9taXNlPHsgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmRlbGV0ZTx7IG1lc3NhZ2U6IHN0cmluZyB9PihFTkRQT0lOVFMuVVNFUlMuREVMRVRFKGlkKSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBmb3JtYXQsIHN0YXJ0T2ZEYXksIHN0YXJ0T2ZXZWVrLCBzdGFydE9mTW9udGggfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gZm9ybWF0KGRhdGUsICdNTU0gZGQsIHl5eXkgSEg6bW0nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVSYW5nZShyYW5nZTogc3RyaW5nKTogeyBzdGFydDogRGF0ZTsgZW5kOiBEYXRlIH0ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBlbmQgPSBub3c7XG4gIFxuICBzd2l0Y2ggKHJhbmdlKSB7XG4gICAgY2FzZSAndG9kYXknOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0T2ZEYXkobm93KSxcbiAgICAgICAgZW5kXG4gICAgICB9O1xuICAgIGNhc2UgJ3RoaXNfd2Vlayc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnRPZldlZWsobm93KSxcbiAgICAgICAgZW5kXG4gICAgICB9O1xuICAgIGNhc2UgJ3RoaXNfbW9udGgnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0T2ZNb250aChub3cpLFxuICAgICAgICBlbmRcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydE9mRGF5KG5vdyksXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShhbW91bnQ6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBgRUdQICR7YW1vdW50LnRvRml4ZWQoMil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRyYW5zYWN0aW9uVHlwZSh0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZS5zcGxpdCgnXycpXG4gICAgLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgIC5qb2luKCcgJyk7XG59IiwiaW1wb3J0IHsgSHR0cCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3Q8VD4oZW5kcG9pbnQ6IHN0cmluZywgb3B0aW9uczoge1xuICBtZXRob2Q6IHN0cmluZztcbiAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGJvZHk/OiBhbnk7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59KTogUHJvbWlzZTxUPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBvcHRpb25zLnBhcmFtcyA/IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKG9wdGlvbnMucGFyYW1zKS50b1N0cmluZygpfWAgOiAnJztcbiAgICBjb25zdCB1cmwgPSBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9JHtxdWVyeVN0cmluZ31gO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzXG4gICAgICB9LFxuICAgICAgY29udGVudDogb3B0aW9ucy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5ib2R5KSA6IHVuZGVmaW5lZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignSFRUUCBSZXF1ZXN0IEVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSIsImltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0U01TUGVybWlzc2lvbnMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHRyeSB7XG4gICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IHBlcm1pc3Npb25zTGlzdCA9IFtcbiAgICAgICAgYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQ0VJVkVfU01TLFxuICAgICAgICBhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9TTVMsXG4gICAgICBdO1xuXG4gICAgICBjb25zdCBncmFudGVkID0gYXdhaXQgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb25zKFxuICAgICAgICBwZXJtaXNzaW9uc0xpc3QsXG4gICAgICAgIFwiV2UgbmVlZCBhY2Nlc3MgdG8geW91ciBTTVMgdG8gbW9uaXRvciBtZXNzYWdlc1wiXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZ3JhbnRlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXF1ZXN0aW5nIFNNUyBwZXJtaXNzaW9uczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLy8gdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLnRzXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkVmlld01vZGVsIH0gZnJvbSBcIi4vZGFzaGJvYXJkLXZpZXctbW9kZWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IERhc2hib2FyZFZpZXdNb2RlbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEQVRFX1JBTkdFUyB9IGZyb20gXCIuLi8uLi9jb25maWcvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGUudXRpbHNcIjtcbmltcG9ydCB7XG4gIGZvcm1hdEN1cnJlbmN5LFxuICBmb3JtYXRUcmFuc2FjdGlvblR5cGUsXG59IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXQudXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZSA9IE5hdmlnYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG5cbiAgc2VsZWN0ZWREYXRlUmFuZ2VJbmRleDogbnVtYmVyID0gMDtcbiAgdG9kYXlUcmFuc2FjdGlvbnM6IG51bWJlciA9IDA7XG4gIHdlZWtUcmFuc2FjdGlvbnM6IG51bWJlciA9IDA7XG4gIG1vbnRoVHJhbnNhY3Rpb25zOiBudW1iZXIgPSAwO1xuICByZWNlbnRUcmFuc2FjdGlvbnM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxvYWREYXNoYm9hcmREYXRhKCk7XG4gIH1cblxuICBhc3luYyBsb2FkRGFzaGJvYXJkRGF0YSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmFuZ2VzID0gW1xuICAgICAgICBEQVRFX1JBTkdFUy5UT0RBWSxcbiAgICAgICAgREFURV9SQU5HRVMuVEhJU19XRUVLLFxuICAgICAgICBEQVRFX1JBTkdFUy5USElTX01PTlRILFxuICAgICAgXTtcbiAgICAgIGNvbnN0IFt0b2RheSwgd2VlaywgbW9udGhdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHJhbmdlcy5tYXAoKHJhbmdlKSA9PlxuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucyh7IHJhbmdlIH0pXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc2V0KFwidG9kYXlUcmFuc2FjdGlvbnNcIiwgdG9kYXkubGVuZ3RoKTtcbiAgICAgIHRoaXMuc2V0KFwid2Vla1RyYW5zYWN0aW9uc1wiLCB3ZWVrLmxlbmd0aCk7XG4gICAgICB0aGlzLnNldChcIm1vbnRoVHJhbnNhY3Rpb25zXCIsIG1vbnRoLmxlbmd0aCk7XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlZFRyYW5zYWN0aW9ucyA9IHRvZGF5LnNsaWNlKDAsIDEwKS5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoe1xuICAgICAgICAuLi50cmFuc2FjdGlvbixcbiAgICAgICAgYW1vdW50OiBmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpLFxuICAgICAgICB0eXBlOiBmb3JtYXRUcmFuc2FjdGlvblR5cGUodHJhbnNhY3Rpb24udHlwZSksXG4gICAgICAgIHRpbWVzdGFtcDogZm9ybWF0RGF0ZShuZXcgRGF0ZSh0cmFuc2FjdGlvbi50aW1lc3RhbXApKSxcbiAgICAgIH0pKTtcblxuICAgICAgdGhpcy5zZXQoXG4gICAgICAgIFwicmVjZW50VHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIGZvcm1hdHRlZFRyYW5zYWN0aW9ucy5sZW5ndGhcbiAgICAgICAgICA/IGZvcm1hdHRlZFRyYW5zYWN0aW9uc1xuICAgICAgICAgIDogW3sgdHlwZTogXCJObyBkYXRhXCIsIGFtb3VudDogXCJcIiwgdGltZXN0YW1wOiBcIlwiIH1dXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBkYXNoYm9hcmQgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgdGhpcy5zZXQoXCJyZWNlbnRUcmFuc2FjdGlvbnNcIiwgW1xuICAgICAgICB7IHR5cGU6IFwiRXJyb3JcIiwgYW1vdW50OiBcIk4vQVwiLCB0aW1lc3RhbXA6IFwiTi9BXCIgfSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9nb3V0KCkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImxvZ2luXCIsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG4gIFxufVxuIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgTG9naW5WaWV3TW9kZWwgfSBmcm9tIFwiLi9sb2dpbi12aWV3LW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExvZ2luVmlld01vZGVsKCk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJMb2dpbiBwYWdlIGxvYWRlZFwiKTtcbiAgXG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgQVBJX1VSTCwgRU5EUE9JTlRTIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2Nvbm5lY3Rpdml0eVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIExvZ2luVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIF9wYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBfbG9nTWVzc2FnZXM6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgX2Vycm9yTWVzc2FnZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZSA9IE5hdmlnYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5hZGRMb2coXCJMb2dpbiBWaWV3IE1vZGVsIEluaXRpYWxpemVkXCIpO1xuICB9XG5cbiAgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICB9XG5cbiAgc2V0IHVzZXJuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VybmFtZSA9IHZhbHVlO1xuICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJ1c2VybmFtZVwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XG4gIH1cblxuICBzZXQgcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWU7XG4gICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcInBhc3N3b3JkXCIsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBsb2dNZXNzYWdlcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2dNZXNzYWdlcztcbiAgfVxuXG4gIGdldCBlcnJvck1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JNZXNzYWdlO1xuICB9XG5cbiAgc2V0IGVycm9yTWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlID0gdmFsdWU7XG4gICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImVycm9yTWVzc2FnZVwiLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Mb2dpbigpIHtcbiAgICBpZiAoIXRoaXMuX3VzZXJuYW1lIHx8ICF0aGlzLl9wYXNzd29yZCkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlBsZWFzZSBlbnRlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXCI7XG4gICAgICB0aGlzLmFkZExvZyhcIlBsZWFzZSBlbnRlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmFkZExvZyhcIlRyeSB0byBsb2dpbi4uLlwiKTtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCk7XG4gICAgICBpZiAoY29ubmVjdGlvblR5cGUgPT09IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJObyBpbnRlcm5ldCBDb25uZWN0aW9uXCI7XG4gICAgICAgIHRoaXMuYWRkTG9nKFwiTm8gaW50ZXJuZXQgQ29ubmVjdGlvblwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUsXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkXG4gICAgICApO1xuXG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICB0aGlzLmFkZExvZyhcIlN1Y2Nlc3MgTG9naW5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJ5aW5nIHRvIGxvZ2luIGluIFwiKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImRhc2hib2FyZFwiLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IE5hdmlnYXRlZCB0byBkYXNoYm9hcmRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTG9naW4gRmFpbGVkICwgUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICAgICAgdGhpcy5hZGRMb2coXCJMb2dpbiBGYWlsZWQgXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG8gbG9naW4gOiBcIiwgZXJyb3IpO1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBgRXJyb3IgdG8gbG9naW4gICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkTG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgdGhpcy5fbG9nTWVzc2FnZXMgPSBgWyR7dGltZXN0YW1wfV0gJHttZXNzYWdlfVxcbiR7dGhpcy5fbG9nTWVzc2FnZXN9YDtcbiAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwibG9nTWVzc2FnZXNcIiwgdGhpcy5fbG9nTWVzc2FnZXMpO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwidmlld3MvbG9naW4vbG9naW4tcGFnZVxcXCIgLz5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJNeSBBcHBcXFwiIGljb249XFxcIlxcXCIgLz5cXG5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIlBsZWFzZSB0YXAgbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclxcXCIgLz5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiVEFQXFxcIiB0YXA9XFxcInt7IG9uVGFwIH19XFxcIiBjbGFzcz1cXFwiLXByaW1hcnlcXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbWVzc2FnZSB9fVxcXCIgY2xhc3M9XFxcInRleHQtbGcgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTQwMFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlxcblwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcInt7IHBhZ2VUaXRsZSB9fVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICAgICAgPEFjdGlvbkl0ZW0gdGFwPVxcXCJ7eyBvbkxvZ291dCB9fVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9nb3V0XFxcIiBjbGFzcz1cXFwiYWN0aW9uLWl0ZW1cXFwiIC8+XFxuICAgICAgICA8L0FjdGlvbkl0ZW0+XFxuICAgIDwvQWN0aW9uQmFyPlxcblxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8IS0tIERhdGUgUmFuZ2UgRmlsdGVyIC0tPlxcbiAgICAgICAgICAgIDxTZWdtZW50ZWRCYXIgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWREYXRlUmFuZ2VJbmRleCB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U2VnbWVudGVkQmFyLml0ZW1zPlxcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRlZEJhckl0ZW0gdGl0bGU9XFxcIlRvZGF5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRlZEJhckl0ZW0gdGl0bGU9XFxcIldlZWtcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudGVkQmFySXRlbSB0aXRsZT1cXFwiTW9udGhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU2VnbWVudGVkQmFyLml0ZW1zPlxcbiAgICAgICAgICAgIDwvU2VnbWVudGVkQmFyPlxcblxcbiAgICAgICAgICAgIDwhLS0gVHJhbnNhY3Rpb24gU3VtbWFyeSAtLT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvZGF5VHJhbnNhY3Rpb25zIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvZGF5XFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgcC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB3ZWVrVHJhbnNhY3Rpb25zIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgV2Vla1xcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIHAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbW9udGhUcmFuc2FjdGlvbnMgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBNb250aFxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBSZWNlbnQgVHJhbnNhY3Rpb25zIC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJSZWNlbnQgVHJhbnNhY3Rpb25zXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IHJlY2VudFRyYW5zYWN0aW9ucyB9fVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIGhlaWdodD1cXFwiMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gcC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgfX1cXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgdGltZXN0YW1wIH19XFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cXG5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkxvZ2luXFxcIiAvPlxcbiAgICBcXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIldlbGNvbWUgQmFja1xcXCIgXFxuICAgICAgICAgICAgICAgY2xhc3M9XFxcImgyIHRleHQtY2VudGVyIG0tMTBcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiVXNlcm5hbWVcXFwiIFxcbiAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IHVzZXJuYW1lIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBtLTEwXFxcIlxcbiAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlBhc3N3b3JkXFxcIiBcXG4gICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBwYXNzd29yZCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IG0tMTBcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTG9naW5cXFwiIFxcbiAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG9uTG9naW4gfX1cXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS0xMFxcXCIgLz5cXG5cXG4gICAgICAgIDxTY3JvbGxWaWV3IGhlaWdodD1cXFwiMjAwXFxcIiBjbGFzcz1cXFwibS0xMFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGxvZ01lc3NhZ2VzIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IHBhZGRpbmc6IDEwOyBmb250LXNpemU6IDEyO1xcXCIgLz5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgICAgIFxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGVycm9yTWVzc2FnZSB9fVxcXCJcXG4gICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICBzdHlsZT1cXFwiY29sb3I6IHJlZDsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgXFxuICAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tMTBcXFwiIC8+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHQvLyBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge30pXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9