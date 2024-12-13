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
/* harmony import */ var _nativescript_core_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/application/application-shims.js");



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
            const context = _nativescript_core_application__WEBPACK_IMPORTED_MODULE_2__.android.context;
            console.log("SMSService: Got Android context");
            const intentFilter = new android.content.IntentFilter();
            console.log("SMSService: Created intent filter");
            intentFilter.addAction("android.provider.Telephony.SMS_RECEIVED");
            console.log("SMSService: Added action to intent filter");
            intentFilter.setPriority(999);
            console.log("SMSService: Set priority");
            // Create BroadcastReceiver using the correct Java interface implementation
            const receiverCallback = new android.content.BroadcastReceiver.extend({
                onReceive: function (context, intent) {
                    console.log("SMSService: Broadcast received");
                    try {
                        const bundle = intent.getExtras();
                        if (!bundle) {
                            console.log("SMSService: No bundle found");
                            return;
                        }
                        const pdus = bundle.get("pdus");
                        if (!pdus || !pdus.length) {
                            console.log("SMSService: No PDUs found");
                            return;
                        }
                        const format = bundle.getString("format") || "";
                        pdus.forEach((pdu) => {
                            const message = android.telephony.SmsMessage.createFromPdu(pdu, format);
                            const sender = message.getOriginatingAddress();
                            const messageBody = message.getMessageBody();
                            console.log("SMSService: Message received from:", sender);
                            console.log("SMSService: Message content:", messageBody);
                            if (sender &&
                                (sender.includes("VF-Cash") ||
                                    sender.toUpperCase().includes("VFCASH"))) {
                                console.log("SMSService: Valid VFCash message detected");
                                SMSService.instance.processSMS(messageBody);
                            }
                            else {
                                console.log("SMSService: Ignored - not from VFCash");
                            }
                        });
                    }
                    catch (error) {
                        console.error("SMSService: Error processing broadcast:", error);
                    }
                },
            });
            // Create instance of the receiver
            const receiver = new receiverCallback();
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
            console.log("SMSService: Sending to API:", transactionData);
            const response = await this.transactionService.createTransaction(transactionData);
            console.log("SMSService: API Response:", response);
        }
        catch (error) {
            console.error("SMSService: API Error:", error);
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
        return Object.assign({ 'Content-Type': 'application/json' }, (authState.token ? { 'Authorization': `Bearer ${authState.token}` } : {}));
    }
    async getTransactions(filter) {
        try {
            const headers = await this.getHeaders();
            const queryString = filter ? `?${new URLSearchParams(filter).toString()}` : '';
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.GET_ALL}${queryString}`,
                method: 'GET',
                headers
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    }
    async getTransaction(id) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.GET_SINGLE(id)}`,
                method: 'GET',
                headers
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error('Error fetching transaction:', error);
            throw error;
        }
    }
    async sendMobileTransaction(transactionData) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.MOBILE}`,
                method: 'POST',
                headers,
                content: JSON.stringify(transactionData)
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error('Error sending mobile transaction:', error);
            throw error;
        }
    }
    async createTransaction(transactionData) {
        try {
            const headers = await this.getHeaders();
            const response = await _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.request({
                url: `${_config_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}${_config_constants__WEBPACK_IMPORTED_MODULE_0__.ENDPOINTS.TRANSACTIONS.CREATE}`,
                method: 'POST',
                headers,
                content: JSON.stringify(transactionData)
            });
            return response.content.toJSON();
        }
        catch (error) {
            console.error('Error creating transaction:', error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxzSkFBc0osVUFBVSwwSUFBMEksY0FBYyxnR0FBZ0csYUFBYSxjQUFjLGlFQUFpRSxlQUFlLHlFQUF5RSxtQkFBbUI7QUFDbnJDLGlFQUFlLGlDQUFpQztBQUNoRCxHQUFHLElBQVU7QUFDYixDQUFDLGlCQUFpQjtBQUNsQiwrQkFBK0I7QUFDL0I7Ozs7Ozs7O0FDUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvIHN5bmMgXFwuKHhtbCU3Q2pzJTdDKCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9hcHAtaW5pdGlhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL2NvbmZpZy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdXRpbHMvZGF0ZS51dGlscy50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdXRpbHMvZm9ybWF0LnV0aWxzLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC91dGlscy9odHRwLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC91dGlscy9wZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLnRzIiwid2VicGFjazovL3ZvZGFmb25lLWNhc2gtbW9uaXRvci8uL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLnhtbCIsIndlYnBhY2s6Ly92b2RhZm9uZS1jYXNoLW1vbml0b3IvLi9hcHAvdmlld3MvbG9naW4vbG9naW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vdm9kYWZvbmUtY2FzaC1tb25pdG9yL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLWluaXRpYWxpemF0aW9uLnRzXCI6IFwiLi9hcHAvYXBwLWluaXRpYWxpemF0aW9uLnRzXCIsXG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC9hcHAudHNcIixcblx0XCIuL2NvbmZpZy9jb25zdGFudHMudHNcIjogXCIuL2FwcC9jb25maWcvY29uc3RhbnRzLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXBpLnNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL2F1dGguc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zbXMuc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3RyYW5zYWN0aW9uLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi5zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHNcIixcblx0XCIuL3V0aWxzL2RhdGUudXRpbHMudHNcIjogXCIuL2FwcC91dGlscy9kYXRlLnV0aWxzLnRzXCIsXG5cdFwiLi91dGlscy9mb3JtYXQudXRpbHMudHNcIjogXCIuL2FwcC91dGlscy9mb3JtYXQudXRpbHMudHNcIixcblx0XCIuL3V0aWxzL2h0dHAudHNcIjogXCIuL2FwcC91dGlscy9odHRwLnRzXCIsXG5cdFwiLi91dGlscy9wZXJtaXNzaW9ucy50c1wiOiBcIi4vYXBwL3V0aWxzL3Blcm1pc3Npb25zLnRzXCIsXG5cdFwiLi92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3cy9kYXNoYm9hcmQvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlld3MvbG9naW4vbG9naW4tdmlldy1tb2RlbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBGcmFtZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNNU1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zbXMuc2VydmljZVwiO1xuXG4vLyBJbml0aWFsaXplIGNvcmUgc2VydmljZXNcbmNvbnN0IHN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IG5hdmlnYXRpb25TZXJ2aWNlID0gTmF2aWdhdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuLy8gSW5pdGlhbGl6ZSBTTVMgU2VydmljZVxuY29uc3Qgc21zU2VydmljZSA9IFNNU1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxubGV0IG1haW5GcmFtZTogRnJhbWU7XG5cbkFwcGxpY2F0aW9uLm9uKEFwcGxpY2F0aW9uLmxhdW5jaEV2ZW50LCBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gbGF1bmNoaW5nLi4uXCIpO1xuICAvLyBDcmVhdGUgYW5kIGluaXRpYWxpemUgdGhlIG1haW4gZnJhbWVcbiAgbWFpbkZyYW1lID0gbmV3IEZyYW1lKCk7XG4gIG5hdmlnYXRpb25TZXJ2aWNlLnNldE5hdmlnYXRpb24obWFpbkZyYW1lKTtcbiAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIGZyYW1lIGluaXRpYWxpemVkXCIpO1xuXG4gIC8vIEluaXRpYWxpemUgU01TIG1vbml0b3JpbmdcbiAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBTTVMgbW9uaXRvcmluZy4uLlwiKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc21zSW5zdGFuY2UgPSBTTVNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNUyBTZXJ2aWNlIGluc3RhbmNlIGNyZWF0ZWRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbml0aWFsaXppbmcgU01TIHNlcnZpY2U6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBOYXZpZ2F0ZSB0byBpbml0aWFsIHBhZ2VcbiAgbWFpbkZyYW1lLm5hdmlnYXRlKHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2xvZ2luL2xvZ2luLXBhZ2VcIixcbiAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gIH0pO1xufSk7XG5cbkFwcGxpY2F0aW9uLm9uKEFwcGxpY2F0aW9uLmRpc3BsYXllZEV2ZW50LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gZGlzcGxheWVkIGV2ZW50IHRyaWdnZXJlZFwiKTtcbiAgaWYgKCFuYXZpZ2F0aW9uU2VydmljZS5oYXNGcmFtZSgpKSB7XG4gICAgY29uc3QgdG9wRnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICBuYXZpZ2F0aW9uU2VydmljZS5zZXROYXZpZ2F0aW9uKHRvcEZyYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBmcmFtZSBzZXQgZnJvbSB0b3Btb3N0XCIpO1xuICAgIH1cbiAgfVxufSk7XG5cbkFwcGxpY2F0aW9uLnJ1bih7IGNyZWF0ZTogKCkgPT4gbWFpbkZyYW1lIH0pO1xuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcbi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmNWY1ZjVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzMzMzMzXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTJlOGYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEycHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0OmZvY3VzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEycHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNnB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCJib2xkXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNiODJmNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeTphY3RpdmVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI1NjNlYlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS0zMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZDFkNWRiXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIi9Vc2Vycy90LWJveC9EZXZlbG9wZXIvVm9kYWZvbmUgVjIvbW9iaWxlLWFwcC9hcHAvYXBwLmNzc1wiKVxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG5cdFx0Y29uc3QgeyByZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cdFx0cmVtb3ZlVGFnZ2VkQWRkaXRpb25hbENTUyhcIi9Vc2Vycy90LWJveC9EZXZlbG9wZXIvVm9kYWZvbmUgVjIvbW9iaWxlLWFwcC9hcHAvYXBwLmNzc1wiKVxuXHR9KVxufSIsIi8vIGFwcC1pbml0aWFsaXphdGlvbi50c1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgU01TU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Ntcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuL3V0aWxzL2h0dHBcIjtcbmltcG9ydCB7IEVORFBPSU5UUyB9IGZyb20gXCIuL2NvbmZpZy9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlcXVlc3RTTVNQZXJtaXNzaW9ucyB9IGZyb20gXCIuL3V0aWxzL3Blcm1pc3Npb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBJbml0aWFsaXphdGlvbiB7XG4gIHByaXZhdGUgc3RhdGljIGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgYXBpU2VydmljZSA9IEFwaVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBzdGF0aWMgc3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIHN0YXRpYyBuYXZpZ2F0aW9uU2VydmljZSA9IE5hdmlnYXRpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgc3RhdGljIHNtc1NlcnZpY2UgPSBTTVNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG5cbiAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoZnJhbWU6IEZyYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vINiq2YfZitim2Kkg2K7Yr9mF2Kkg2KfZhNiq2YbZgtmEXG4gICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnNldE5hdmlnYXRpb24oZnJhbWUpO1xuXG4gICAgICAvLyDYqtmH2YrYptipINin2YTYo9iw2YjZhtin2Kog2YjYrtiv2YXYqSBTTVMg2YTZhNij2YbYr9ix2YjZitivXG4gICAgICBpZiAoZ2xvYmFsLmlzQW5kcm9pZCkge1xuICAgICAgICBjb25zdCBoYXNQZXJtaXNzaW9ucyA9IGF3YWl0IHJlcXVlc3RTTVNQZXJtaXNzaW9ucygpO1xuICAgICAgICBpZiAoaGFzUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICB0aGlzLnNtc1NlcnZpY2U7IC8vINiz2YrYqtmFINiq2YfZitim2Kkg2KfZhNmF2LHYp9mC2Kgg2KrZhNmC2KfYptmK2KfZi1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vINin2YTYqtit2YLZgiDZhdmGINit2KfZhNipINin2YTZhdi12KfYr9mC2KlcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKTtcbiAgICAgIGNvbnN0IGF1dGhTdGF0ZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aFN0YXRlKCkudG9Qcm9taXNlKCk7XG5cbiAgICAgIGlmICh0b2tlbiAmJiBhdXRoU3RhdGUuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8g2KfZhNiq2K3ZgtmCINmF2YYg2LXZhNin2K3ZitipINin2YTYqtmI2YPZhlxuICAgICAgICAgIGF3YWl0IHJlcXVlc3QoRU5EUE9JTlRTLkhFQUxUSCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyDZhtis2KfYrSDYp9mE2KrYrdmC2YLYjCDYp9mE2KfZhtiq2YLYp9mEINil2YTZiSDZhNmI2K3YqSDYp9mE2KrYrdmD2YVcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFwiZGFzaGJvYXJkXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vINmB2LTZhCDYp9mE2KrYrdmC2YIg2YXZhiDYp9mE2KrZiNmD2YZcbiAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUludmFsaWRUb2tlbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDZhNinINmK2YjYrNivINiq2YjZg9mGINij2Ygg2KfZhNmF2LPYqtiu2K/ZhSDYutmK2LEg2YXYs9is2YRcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImxvZ2luXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQXBwIGluaXRpYWxpemF0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLm5hdmlnYXRlKFwibG9naW5cIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgaGFuZGxlSW52YWxpZFRva2VuKCkge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIik7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtKFwiYXV0aF91c2VyXCIpO1xuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2F0ZShcImxvZ2luXCIpO1xuICB9XG59XG4iLCJcbmNvbnN0IHBvcnQgPSAzMDAwOyBcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gYGh0dHA6Ly8xOTIuMTY4LjEuNToke3BvcnR9L2FwaWA7XG5cblxuZXhwb3J0IGNvbnN0IEVORFBPSU5UUyA9IHtcbiAgQVVUSDoge1xuICAgIExPR0lOOiBcIi9hdXRoL2xvZ2luXCIsXG4gIH0sXG4gIFVTRVJTOiB7XG4gICAgQkFTRTogXCIvdXNlcnNcIixcbiAgICBHRVRfQUxMOiBcIi91c2Vyc1wiLFxuICAgIENSRUFURTogXCIvdXNlcnNcIixcbiAgICBVUERBVEU6IChpZDogc3RyaW5nKSA9PiBgL3VzZXJzLyR7aWR9YCxcbiAgICBERUxFVEU6IChpZDogc3RyaW5nKSA9PiBgL3VzZXJzLyR7aWR9YCxcbiAgfSxcbiAgVFJBTlNBQ1RJT05TOiB7XG4gICAgQkFTRTogXCIvdHJhbnNhY3Rpb25zXCIsXG4gICAgR0VUX0FMTDogXCIvdHJhbnNhY3Rpb25zXCIsXG4gICAgQ1JFQVRFOiBcIi90cmFuc2FjdGlvbnNcIixcbiAgICBHRVRfU0lOR0xFOiAoaWQ6IHN0cmluZykgPT4gYC90cmFuc2FjdGlvbnMvJHtpZH1gLFxuICAgIE1PQklMRTogXCIvbW9iaWxlL3RyYW5zYWN0aW9uc1wiLFxuICB9LFxuICBIRUFMVEg6IFwiL2hlYWx0aFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TQUNUSU9OX1RZUEVTID0ge1xuICBUUkFOU0ZFUjogJ1RyYW5zZmVyJyxcbiAgQklMTF9QQVlNRU5UOiAnQmlsbCBQYXltZW50JyxcbiAgTU9CSUxFX1JFQ0hBUkdFOiAnTW9iaWxlIFJlY2hhcmdlJyxcbiAgV0lUSERSQVdBTDogJ1dpdGhkcmF3YWwnLFxuICBERVBPU0lUOiAnRGVwb3NpdCdcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX1JBTkdFUyA9IHtcbiAgVE9EQVk6ICd0b2RheScsXG4gIFRISVNfV0VFSzogJ3RoaXNfd2VlaycsXG4gIFRISVNfTU9OVEg6ICd0aGlzX21vbnRoJyxcbiAgQ1VTVE9NOiAnY3VzdG9tJ1xufTsiLCIvLyBtYWluLXBhZ2UudHNcbmltcG9ydCB7IEV2ZW50RGF0YSwgUGFnZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAvLyDZh9iw2Ycg2KfZhNi12YHYrdipINiz2KrZg9mI2YYg2YXYpNmC2KrYqSDZgdmC2Lcg2K3YqtmJINiq2YPYqtmF2YQg2LnZhdmE2YrYqSDYp9mE2KrZh9mK2KbYqVxuICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICB0aGlzLl9jb3VudGVyID0gNDI7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG5cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tZXNzYWdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvblRhcCgpIHtcbiAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2NvdW50ZXIgPD0gMCkge1xuICAgICAgdGhpcy5tZXNzYWdlID1cbiAgICAgICAgJ0hvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCEnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgIH1cblxuICAgIC8vIGxvZyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0dHAsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXBpU2VydmljZTtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IEFwaVNlcnZpY2Uge1xuICAgIGlmICghQXBpU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgQXBpU2VydmljZS5pbnN0YW5jZSA9IG5ldyBBcGlTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBBcGlTZXJ2aWNlLmluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRIZWFkZXJzKCk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IGF1dGhTdGF0ZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aFN0YXRlKCkudG9Qcm9taXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAuLi4oYXV0aFN0YXRlLnRva2VuID8geyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YCB9IDoge30pXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldDxUPihlbmRwb2ludDogc3RyaW5nLCBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxUPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcGFyYW1zID8gYD8ke25ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpfWAgOiAnJztcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtlbmRwb2ludH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZTxUPihyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHBvc3Q8VD4oZW5kcG9pbnQ6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxUPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtlbmRwb2ludH1gLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXNwb25zZTxUPihyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHB1dDxUPihlbmRwb2ludDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPFQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke2VuZHBvaW50fWAsXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVzcG9uc2U8VD4ocmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGU8VD4oZW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9YCxcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc3BvbnNlPFQ+KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZTxUPihyZXNwb25zZTogSHR0cFJlc3BvbnNlKTogVCB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCAzMDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IEVycm9yIHtcbiAgICBjb25zb2xlLmVycm9yKCdBUEkgRXJyb3I6JywgZXJyb3IpO1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk/LmVycm9yIHx8ICdVbmtub3duIGVycm9yIG9jY3VycmVkJztcbiAgICAgIHJldHVybiBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFQSV9VUkwsIEVORFBPSU5UUyB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhTdGF0ZSB7XG4gIHRva2VuOiBzdHJpbmcgfCBudWxsO1xuICB1c2VyOiBhbnkgfCBudWxsO1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBdXRoU2VydmljZTtcbiAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZSA9IFN0b3JhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgYXV0aFN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBdXRoU3RhdGU+KHtcbiAgICB0b2tlbjogbnVsbCxcbiAgICB1c2VyOiBudWxsLFxuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgfSk7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvYWRTdG9yZWRBdXRoKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXV0aFNlcnZpY2Uge1xuICAgIGlmICghQXV0aFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgIEF1dGhTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEF1dGhTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBBdXRoU2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFN0b3JlZEF1dGgoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtKCdhdXRoX3Rva2VuJyk7XG4gICAgICBjb25zdCB1c2VyU3RyID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtKCdhdXRoX3VzZXInKTtcbiAgICAgIFxuICAgICAgaWYgKHRva2VuICYmIHVzZXJTdHIpIHtcbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UodXNlclN0cik7XG4gICAgICAgIHRoaXMuc2V0QXV0aFN0YXRlKHtcbiAgICAgICAgICB0b2tlbixcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzdG9yZWQgYXV0aDonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke0VORFBPSU5UUy5BVVRILkxPR0lOfWAsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgICBcbiAgICAgIGlmIChyZXN1bHQudG9rZW4pIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKCdhdXRoX3Rva2VuJywgcmVzdWx0LnRva2VuKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKCdhdXRoX3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXN1bHQudXNlcikpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRBdXRoU3RhdGUoe1xuICAgICAgICAgIHRva2VuOiByZXN1bHQudG9rZW4sXG4gICAgICAgICAgdXNlcjogcmVzdWx0LnVzZXIsXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5yZW1vdmVJdGVtKCdhdXRoX3Rva2VuJyk7XG4gICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnJlbW92ZUl0ZW0oJ2F1dGhfdXNlcicpO1xuICAgICAgXG4gICAgICB0aGlzLnNldEF1dGhTdGF0ZSh7XG4gICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9nb3V0IGVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBnZXRBdXRoU3RhdGUoKTogT2JzZXJ2YWJsZTxBdXRoU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldEF1dGhTdGF0ZShzdGF0ZTogQXV0aFN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU3RhdGUubmV4dChzdGF0ZSk7XG4gIH1cbn0iLCIvLyBzZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2UudHNcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTmF2aWdhdGlvblNlcnZpY2U7XG4gIHByaXZhdGUgZnJhbWU6IEZyYW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgICBpZiAoIU5hdmlnYXRpb25TZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICBOYXZpZ2F0aW9uU2VydmljZS5pbnN0YW5jZSA9IG5ldyBOYXZpZ2F0aW9uU2VydmljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gTmF2aWdhdGlvblNlcnZpY2UuaW5zdGFuY2U7XG4gIH1cblxuICBzZXROYXZpZ2F0aW9uKGZyYW1lOiBGcmFtZSkge1xuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBuYXZpZ2F0aW9uIGZyYW1lXCIpO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgfVxuXG4gIGhhc0ZyYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZyYW1lICE9PSBudWxsO1xuICB9XG5cbiAgbmF2aWdhdGUocGFnZU5hbWU6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pIHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIG5hdmlnYXRpb24gdG86XCIsIHBhZ2VOYW1lKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuZnJhbWUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGZyYW1lIHNldCwgdHJ5aW5nIHRvIGdldCB0b3Btb3N0IGZyYW1lXCIpO1xuICAgICAgICB0aGlzLmZyYW1lID0gRnJhbWUudG9wbW9zdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZnJhbWUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBuYXZpZ2F0aW9uIGZyYW1lIGF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2R1bGVQYXRoID0gYHZpZXdzLyR7cGFnZU5hbWV9LyR7cGFnZU5hbWV9LXBhZ2VgO1xuICAgICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW5nIHRvIG1vZHVsZSBwYXRoOlwiLCBtb2R1bGVQYXRoKTtcblxuICAgICAgdGhpcy5mcmFtZS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IG1vZHVsZVBhdGgsXG4gICAgICAgIGNsZWFySGlzdG9yeTogcGFnZU5hbWUgPT09IFwibG9naW5cIixcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gY29tcGxldGVkXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IE5hdmlnYXRlZCB0byBcIiArIHBhZ2VOYW1lKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5hdmlnYXRpb24gZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUgfHwgRnJhbWUudG9wbW9zdCgpO1xuICAgIGlmIChmcmFtZT8uY2FuR29CYWNrKCkpIHtcbiAgICAgIGZyYW1lLmdvQmFjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb24sIEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gXCIuL3RyYW5zYWN0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IHJlcXVlc3RTTVNQZXJtaXNzaW9ucyB9IGZyb20gXCIuLi91dGlscy9wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgYW5kcm9pZEFwcCBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2FwcGxpY2F0aW9uXCI7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgY2xhc3MgU01TU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTTVNTZXJ2aWNlO1xuICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIGlzTW9uaXRvcmluZ1N0YXJ0ZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQ29uc3RydWN0b3IgY2FsbGVkXCIpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZVNNU0xpc3RlbmVyKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU01TU2VydmljZSB7XG4gICAgaWYgKCFTTVNTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IENyZWF0aW5nIG5ldyBpbnN0YW5jZVwiKTtcbiAgICAgIFNNU1NlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU01TU2VydmljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gU01TU2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdGlhbGl6ZVNNU0xpc3RlbmVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogSW5pdGlhbGl6aW5nIFNNUyBsaXN0ZW5lclwiKTtcbiAgICBpZiAoZ2xvYmFsLmlzQW5kcm9pZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGFzUGVybWlzc2lvbnMgPSBhd2FpdCByZXF1ZXN0U01TUGVybWlzc2lvbnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBQZXJtaXNzaW9ucyBzdGF0dXM6XCIsIGhhc1Blcm1pc3Npb25zKTtcbiAgICAgICAgaWYgKGhhc1Blcm1pc3Npb25zICYmICF0aGlzLmlzTW9uaXRvcmluZ1N0YXJ0ZWQpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0U01TTW9uaXRvcmluZygpO1xuICAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTTVNTZXJ2aWNlOiBQZXJtaXNzaW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFNNU01vbml0b3JpbmcoKTogdm9pZCB7XG4gICAgaWYgKCFnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IE5vdCBhbiBBbmRyb2lkIGRldmljZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBTdGFydGluZyBtb25pdG9yaW5nXCIpO1xuICAgICAgY29uc3QgY29udGV4dCA9IGFuZHJvaWRBcHAuYW5kcm9pZC5jb250ZXh0O1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBHb3QgQW5kcm9pZCBjb250ZXh0XCIpO1xuXG4gICAgICBjb25zdCBpbnRlbnRGaWx0ZXIgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudEZpbHRlcigpO1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBDcmVhdGVkIGludGVudCBmaWx0ZXJcIik7XG5cbiAgICAgIGludGVudEZpbHRlci5hZGRBY3Rpb24oXCJhbmRyb2lkLnByb3ZpZGVyLlRlbGVwaG9ueS5TTVNfUkVDRUlWRURcIik7XG4gICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IEFkZGVkIGFjdGlvbiB0byBpbnRlbnQgZmlsdGVyXCIpO1xuXG4gICAgICBpbnRlbnRGaWx0ZXIuc2V0UHJpb3JpdHkoOTk5KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogU2V0IHByaW9yaXR5XCIpO1xuXG4gICAgICAvLyBDcmVhdGUgQnJvYWRjYXN0UmVjZWl2ZXIgdXNpbmcgdGhlIGNvcnJlY3QgSmF2YSBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb25cbiAgICAgIGNvbnN0IHJlY2VpdmVyQ2FsbGJhY2sgPSBuZXcgYW5kcm9pZC5jb250ZW50LkJyb2FkY2FzdFJlY2VpdmVyLmV4dGVuZCh7XG4gICAgICAgIG9uUmVjZWl2ZTogZnVuY3Rpb24gKGNvbnRleHQ6IGFueSwgaW50ZW50OiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IEJyb2FkY2FzdCByZWNlaXZlZFwiKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYnVuZGxlID0gaW50ZW50LmdldEV4dHJhcygpO1xuICAgICAgICAgICAgaWYgKCFidW5kbGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBObyBidW5kbGUgZm91bmRcIik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGR1cyA9IGJ1bmRsZS5nZXQoXCJwZHVzXCIpIGFzIEFycmF5PGFueT47XG4gICAgICAgICAgICBpZiAoIXBkdXMgfHwgIXBkdXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogTm8gUERVcyBmb3VuZFwiKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBidW5kbGUuZ2V0U3RyaW5nKFwiZm9ybWF0XCIpIHx8IFwiXCI7XG5cbiAgICAgICAgICAgIHBkdXMuZm9yRWFjaCgocGR1KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhbmRyb2lkLnRlbGVwaG9ueS5TbXNNZXNzYWdlLmNyZWF0ZUZyb21QZHUoXG4gICAgICAgICAgICAgICAgcGR1LFxuICAgICAgICAgICAgICAgIGZvcm1hdFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25zdCBzZW5kZXIgPSBtZXNzYWdlLmdldE9yaWdpbmF0aW5nQWRkcmVzcygpO1xuICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlQm9keSA9IG1lc3NhZ2UuZ2V0TWVzc2FnZUJvZHkoKTtcblxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IE1lc3NhZ2UgcmVjZWl2ZWQgZnJvbTpcIiwgc2VuZGVyKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBNZXNzYWdlIGNvbnRlbnQ6XCIsIG1lc3NhZ2VCb2R5KTtcblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc2VuZGVyICYmXG4gICAgICAgICAgICAgICAgKHNlbmRlci5pbmNsdWRlcyhcIlZGLUNhc2hcIikgfHxcbiAgICAgICAgICAgICAgICAgIHNlbmRlci50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKFwiVkZDQVNIXCIpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNNU1NlcnZpY2U6IFZhbGlkIFZGQ2FzaCBtZXNzYWdlIGRldGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIFNNU1NlcnZpY2UuaW5zdGFuY2UucHJvY2Vzc1NNUyhtZXNzYWdlQm9keSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBJZ25vcmVkIC0gbm90IGZyb20gVkZDYXNoXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNNU1NlcnZpY2U6IEVycm9yIHByb2Nlc3NpbmcgYnJvYWRjYXN0OlwiLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBpbnN0YW5jZSBvZiB0aGUgcmVjZWl2ZXJcbiAgICAgIGNvbnN0IHJlY2VpdmVyID0gbmV3IHJlY2VpdmVyQ2FsbGJhY2soKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQ3JlYXRlZCBicm9hZGNhc3QgcmVjZWl2ZXJcIik7XG5cbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSByZWNlaXZlclxuICAgICAgY29udGV4dC5yZWdpc3RlclJlY2VpdmVyKHJlY2VpdmVyLCBpbnRlbnRGaWx0ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBSZWdpc3RlcmVkIHJlY2VpdmVyIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlNNU1NlcnZpY2U6IFNldHVwIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU01TU2VydmljZTogRXJyb3IgZGV0YWlsczpcIiwgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1NNUyhtZXNzYWdlQm9keTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBQcm9jZXNzaW5nIG1lc3NhZ2U6XCIsIG1lc3NhZ2VCb2R5KTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGEgPSB0aGlzLnBhcnNlVm9kYWZvbmVDYXNoU01TKG1lc3NhZ2VCb2R5KTtcblxuICAgIGlmICh0cmFuc2FjdGlvbkRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogUGFyc2VkIHRyYW5zYWN0aW9uOlwiLCB0cmFuc2FjdGlvbkRhdGEpO1xuICAgICAgLy8gQWRkIG1ldGFkYXRhIGJlZm9yZSBzZW5kaW5nIHRvIEFQSVxuICAgICAgY29uc3QgZW5yaWNoZWREYXRhID0ge1xuICAgICAgICAuLi50cmFuc2FjdGlvbkRhdGEsXG4gICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgcGxhdGZvcm06IFwiVk9EQUZPTkVfQ0FTSFwiLFxuICAgICAgICAgIHNvdXJjZTogXCJTTVNcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuc2VuZFRvQVBJKGVucmljaGVkRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQ291bGQgbm90IHBhcnNlIG1lc3NhZ2VcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVZvZGFmb25lQ2FzaFNNUyhtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogUGFyc2luZyBtZXNzYWdlXCIpO1xuXG4gICAgLy8gUGF0dGVybiBmb3IgQXJhYmljIG1lc3NhZ2VcbiAgICBjb25zdCBhcmFiaWNQYXR0ZXJuID1cbiAgICAgIC/YqtmFINin2LPYqtmE2KfZhSDZhdio2YTYuiAoXFxkKyhcXC5cXGQrKT8pINis2YbZitmHINmF2YYg2LHZgtmFIChcXGQrKSg/OtibINin2YTZhdiz2KzZhCDYqNil2LPZhSAoW14uXSspKT8vO1xuXG4gICAgLy8gUGF0dGVybiBmb3IgRW5nbGlzaCBtZXNzYWdlXG4gICAgY29uc3QgZW5nbGlzaFBhdHRlcm4gPSAvUmVjZWl2ZWQgRUdQKFxcZCsoXFwuXFxkKyk/KSBmcm9tIChcXGQrKSB0by87XG5cbiAgICBjb25zdCBhcmFiaWNNYXRjaCA9IG1lc3NhZ2UubWF0Y2goYXJhYmljUGF0dGVybik7XG4gICAgY29uc3QgZW5nbGlzaE1hdGNoID0gbWVzc2FnZS5tYXRjaChlbmdsaXNoUGF0dGVybik7XG5cbiAgICBpZiAoYXJhYmljTWF0Y2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogTWF0Y2hlZCBBcmFiaWMgcGF0dGVyblwiKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChhcmFiaWNNYXRjaFsxXSksXG4gICAgICAgIHNlbmRlcjogYXJhYmljTWF0Y2hbM10sXG4gICAgICAgIHNlbmRlck5hbWU6IGFyYWJpY01hdGNoWzRdIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IFwiVHJhbnNmZXJcIixcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChlbmdsaXNoTWF0Y2gpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogTWF0Y2hlZCBFbmdsaXNoIHBhdHRlcm5cIik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoZW5nbGlzaE1hdGNoWzFdKSxcbiAgICAgICAgc2VuZGVyOiBlbmdsaXNoTWF0Y2hbM10sXG4gICAgICAgIHR5cGU6IFwiVHJhbnNmZXJcIixcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogTm8gcGF0dGVybiBtYXRjaGVkXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzZW5kVG9BUEkodHJhbnNhY3Rpb25EYXRhOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJTTVNTZXJ2aWNlOiBTZW5kaW5nIHRvIEFQSTpcIiwgdHJhbnNhY3Rpb25EYXRhKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuY3JlYXRlVHJhbnNhY3Rpb24oXG4gICAgICAgIHRyYW5zYWN0aW9uRGF0YVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU01TU2VydmljZTogQVBJIFJlc3BvbnNlOlwiLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTTVNTZXJ2aWNlOiBBUEkgRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L3NlY3VyZS1zdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuICBwcml2YXRlIHNlY3VyZVN0b3JhZ2U6IFNlY3VyZVN0b3JhZ2U7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlY3VyZVN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBpZiAoIVN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICBTdG9yYWdlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBTdG9yYWdlU2VydmljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2U7XG4gIH1cblxuICBhc3luYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VjdXJlU3RvcmFnZS5zZXRTeW5jKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0b3JpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlY3VyZVN0b3JhZ2UuZ2V0U3luYyh7XG4gICAgICAgIGtleVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldHJpZXZpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuc2VjdXJlU3RvcmFnZS5yZW1vdmVTeW5jKHtcbiAgICAgICAga2V5XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBIdHRwLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQVBJX1VSTCwgRU5EUE9JTlRTIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIHNlbmRlcjogc3RyaW5nO1xuICByZWNlaXZlcjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkZpbHRlciB7XG4gIHJhbmdlPzogc3RyaW5nO1xuICBzdGFydERhdGU/OiBzdHJpbmc7XG4gIGVuZERhdGU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVHJhbnNhY3Rpb25TZXJ2aWNlIHtcbiAgICBpZiAoIVRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRIZWFkZXJzKCk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IGF1dGhTdGF0ZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXV0aFN0YXRlKCkudG9Qcm9taXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAuLi4oYXV0aFN0YXRlLnRva2VuID8geyAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoU3RhdGUudG9rZW59YCB9IDoge30pXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldFRyYW5zYWN0aW9ucyhmaWx0ZXI/OiBUcmFuc2FjdGlvbkZpbHRlcik6IFByb21pc2U8VHJhbnNhY3Rpb25bXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGZpbHRlciA/IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKGZpbHRlciBhcyBhbnkpLnRvU3RyaW5nKCl9YCA6ICcnO1xuICAgICAgXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7QVBJX1VSTH0ke0VORFBPSU5UUy5UUkFOU0FDVElPTlMuR0VUX0FMTH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpOiBQcm9taXNlPFRyYW5zYWN0aW9uPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7RU5EUE9JTlRTLlRSQU5TQUNUSU9OUy5HRVRfU0lOR0xFKGlkKX1gLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNlbmRNb2JpbGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbkRhdGE6IFBhcnRpYWw8VHJhbnNhY3Rpb24+KTogUHJvbWlzZTx7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBhd2FpdCB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHtBUElfVVJMfSR7RU5EUE9JTlRTLlRSQU5TQUNUSU9OUy5NT0JJTEV9YCxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uRGF0YSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBtb2JpbGUgdHJhbnNhY3Rpb246JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25EYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPik6IFByb21pc2U8VHJhbnNhY3Rpb24+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke0FQSV9VUkx9JHtFTkRQT0lOVFMuVFJBTlNBQ1RJT05TLkNSRUFURX1gLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodHJhbnNhY3Rpb25EYXRhKVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB0cmFuc2FjdGlvbjonLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBFTkRQT0lOVFMgfSBmcm9tICcuLi9jb25maWcvY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVXNlclNlcnZpY2U7XG4gIHByaXZhdGUgYXBpU2VydmljZSA9IEFwaVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVXNlclNlcnZpY2Uge1xuICAgIGlmICghVXNlclNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgIFVzZXJTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFVzZXJTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBVc2VyU2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5nZXQ8VXNlcltdPihFTkRQT0lOVFMuVVNFUlMuR0VUX0FMTCk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVVc2VyKHVzZXJEYXRhOiBQYXJ0aWFsPFVzZXI+KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5wb3N0PFVzZXI+KEVORFBPSU5UUy5VU0VSUy5DUkVBVEUsIHVzZXJEYXRhKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIoaWQ6IHN0cmluZywgdXNlckRhdGE6IFBhcnRpYWw8VXNlcj4pOiBQcm9taXNlPFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnB1dDxVc2VyPihFTkRQT0lOVFMuVVNFUlMuVVBEQVRFKGlkKSwgdXNlckRhdGEpO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlVXNlcihpZDogc3RyaW5nKTogUHJvbWlzZTx7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBpU2VydmljZS5kZWxldGU8eyBtZXNzYWdlOiBzdHJpbmcgfT4oRU5EUE9JTlRTLlVTRVJTLkRFTEVURShpZCkpO1xuICB9XG59IiwiaW1wb3J0IHsgZm9ybWF0LCBzdGFydE9mRGF5LCBzdGFydE9mV2Vlaywgc3RhcnRPZk1vbnRoIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGZvcm1hdChkYXRlLCAnTU1NIGRkLCB5eXl5IEhIOm1tJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlUmFuZ2UocmFuZ2U6IHN0cmluZyk6IHsgc3RhcnQ6IERhdGU7IGVuZDogRGF0ZSB9IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZW5kID0gbm93O1xuICBcbiAgc3dpdGNoIChyYW5nZSkge1xuICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydE9mRGF5KG5vdyksXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgICBjYXNlICd0aGlzX3dlZWsnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0T2ZXZWVrKG5vdyksXG4gICAgICAgIGVuZFxuICAgICAgfTtcbiAgICBjYXNlICd0aGlzX21vbnRoJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydE9mTW9udGgobm93KSxcbiAgICAgICAgZW5kXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnRPZkRheShub3cpLFxuICAgICAgICBlbmRcbiAgICAgIH07XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3koYW1vdW50OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYEVHUCAke2Ftb3VudC50b0ZpeGVkKDIpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUcmFuc2FjdGlvblR5cGUodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGUuc3BsaXQoJ18nKVxuICAgIC5tYXAod29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAuam9pbignICcpO1xufSIsImltcG9ydCB7IEh0dHAsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0PFQ+KGVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM6IHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBib2R5PzogYW55O1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufSk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJhbXMgPyBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRpb25zLnBhcmFtcykudG9TdHJpbmcoKX1gIDogJyc7XG4gICAgY29uc3QgdXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fSR7cXVlcnlTdHJpbmd9YDtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIC4uLm9wdGlvbnMuaGVhZGVyc1xuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IG9wdGlvbnMuYm9keSA/IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuYm9keSkgOiB1bmRlZmluZWRcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0hUVFAgUmVxdWVzdCBFcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBwZXJtaXNzaW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXBlcm1pc3Npb25zXCI7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFNNU1Blcm1pc3Npb25zKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGlmIChnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICBjb25zdCBwZXJtaXNzaW9uc0xpc3QgPSBbXG4gICAgICAgIGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5SRUNFSVZFX1NNUyxcbiAgICAgICAgYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfU01TLFxuICAgICAgXTtcblxuICAgICAgY29uc3QgZ3JhbnRlZCA9IGF3YWl0IHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9ucyhcbiAgICAgICAgcGVybWlzc2lvbnNMaXN0LFxuICAgICAgICBcIldlIG5lZWQgYWNjZXNzIHRvIHlvdXIgU01TIHRvIG1vbml0b3IgbWVzc2FnZXNcIlxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGdyYW50ZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBTTVMgcGVybWlzc2lvbnM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIHZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQtcGFnZS50c1xuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gXCIuL2Rhc2hib2FyZC12aWV3LW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBEYXNoYm9hcmRWaWV3TW9kZWwoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgREFURV9SQU5HRVMgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlLnV0aWxzXCI7XG5pbXBvcnQge1xuICBmb3JtYXRDdXJyZW5jeSxcbiAgZm9ybWF0VHJhbnNhY3Rpb25UeXBlLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0LnV0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2UgPSBOYXZpZ2F0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuXG4gIHNlbGVjdGVkRGF0ZVJhbmdlSW5kZXg6IG51bWJlciA9IDA7XG4gIHRvZGF5VHJhbnNhY3Rpb25zOiBudW1iZXIgPSAwO1xuICB3ZWVrVHJhbnNhY3Rpb25zOiBudW1iZXIgPSAwO1xuICBtb250aFRyYW5zYWN0aW9uczogbnVtYmVyID0gMDtcbiAgcmVjZW50VHJhbnNhY3Rpb25zOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5sb2FkRGFzaGJvYXJkRGF0YSgpO1xuICB9XG5cbiAgYXN5bmMgbG9hZERhc2hib2FyZERhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhbmdlcyA9IFtcbiAgICAgICAgREFURV9SQU5HRVMuVE9EQVksXG4gICAgICAgIERBVEVfUkFOR0VTLlRISVNfV0VFSyxcbiAgICAgICAgREFURV9SQU5HRVMuVEhJU19NT05USCxcbiAgICAgIF07XG4gICAgICBjb25zdCBbdG9kYXksIHdlZWssIG1vbnRoXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICByYW5nZXMubWFwKChyYW5nZSkgPT5cbiAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoeyByYW5nZSB9KVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICB0aGlzLnNldChcInRvZGF5VHJhbnNhY3Rpb25zXCIsIHRvZGF5Lmxlbmd0aCk7XG4gICAgICB0aGlzLnNldChcIndlZWtUcmFuc2FjdGlvbnNcIiwgd2Vlay5sZW5ndGgpO1xuICAgICAgdGhpcy5zZXQoXCJtb250aFRyYW5zYWN0aW9uc1wiLCBtb250aC5sZW5ndGgpO1xuXG4gICAgICBjb25zdCBmb3JtYXR0ZWRUcmFuc2FjdGlvbnMgPSB0b2RheS5zbGljZSgwLCAxMCkubWFwKCh0cmFuc2FjdGlvbikgPT4gKHtcbiAgICAgICAgLi4udHJhbnNhY3Rpb24sXG4gICAgICAgIGFtb3VudDogZm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50KSxcbiAgICAgICAgdHlwZTogZm9ybWF0VHJhbnNhY3Rpb25UeXBlKHRyYW5zYWN0aW9uLnR5cGUpLFxuICAgICAgICB0aW1lc3RhbXA6IGZvcm1hdERhdGUobmV3IERhdGUodHJhbnNhY3Rpb24udGltZXN0YW1wKSksXG4gICAgICB9KSk7XG5cbiAgICAgIHRoaXMuc2V0KFxuICAgICAgICBcInJlY2VudFRyYW5zYWN0aW9uc1wiLFxuICAgICAgICBmb3JtYXR0ZWRUcmFuc2FjdGlvbnMubGVuZ3RoXG4gICAgICAgICAgPyBmb3JtYXR0ZWRUcmFuc2FjdGlvbnNcbiAgICAgICAgICA6IFt7IHR5cGU6IFwiTm8gZGF0YVwiLCBhbW91bnQ6IFwiXCIsIHRpbWVzdGFtcDogXCJcIiB9XVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgZGFzaGJvYXJkIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIHRoaXMuc2V0KFwicmVjZW50VHJhbnNhY3Rpb25zXCIsIFtcbiAgICAgICAgeyB0eXBlOiBcIkVycm9yXCIsIGFtb3VudDogXCJOL0FcIiwgdGltZXN0YW1wOiBcIk4vQVwiIH0sXG4gICAgICBdKTtcbiAgICB9XG4gIH1cblxuICBvbkxvZ291dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoXCJsb2dpblwiLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuICBcbn1cbiIsImltcG9ydCB7IEV2ZW50RGF0YSwgUGFnZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IExvZ2luVmlld01vZGVsIH0gZnJvbSBcIi4vbG9naW4tdmlldy1tb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMb2dpblZpZXdNb2RlbCgpO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiTG9naW4gcGFnZSBsb2FkZWRcIik7XG4gIFxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJAbmF0aXZlc2NyaXB0L2NvcmVcIjtcbmltcG9ydCB7IEFQSV9VUkwsIEVORFBPSU5UUyB9IGZyb20gXCIuLi8uLi9jb25maWcvY29uc3RhbnRzXCI7XG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZS9jb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIF91c2VybmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBfcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgX2xvZ01lc3NhZ2VzOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIF9lcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBBdXRoU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UgPSBOYXZpZ2F0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuYWRkTG9nKFwiTG9naW4gVmlldyBNb2RlbCBJbml0aWFsaXplZFwiKTtcbiAgfVxuXG4gIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcbiAgfVxuXG4gIHNldCB1c2VybmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlcm5hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwidXNlcm5hbWVcIiwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBhc3N3b3JkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3N3b3JkO1xuICB9XG5cbiAgc2V0IHBhc3N3b3JkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXNzd29yZCA9IHZhbHVlO1xuICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJwYXNzd29yZFwiLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbG9nTWVzc2FnZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nTWVzc2FnZXM7XG4gIH1cblxuICBnZXQgZXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yTWVzc2FnZTtcbiAgfVxuXG4gIHNldCBlcnJvck1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Vycm9yTWVzc2FnZSA9IHZhbHVlO1xuICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJlcnJvck1lc3NhZ2VcIiwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uTG9naW4oKSB7XG4gICAgaWYgKCF0aGlzLl91c2VybmFtZSB8fCAhdGhpcy5fcGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gXCJQbGVhc2UgZW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlwiO1xuICAgICAgdGhpcy5hZGRMb2coXCJQbGVhc2UgZW50ZXIgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5hZGRMb2coXCJUcnkgdG8gbG9naW4uLi5cIik7XG4gICAgICBjb25zdCBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpO1xuICAgICAgaWYgKGNvbm5lY3Rpb25UeXBlID09PSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiTm8gaW50ZXJuZXQgQ29ubmVjdGlvblwiO1xuICAgICAgICB0aGlzLmFkZExvZyhcIk5vIGludGVybmV0IENvbm5lY3Rpb25cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4oXG4gICAgICAgIHRoaXMuX3VzZXJuYW1lLFxuICAgICAgICB0aGlzLl9wYXNzd29yZFxuICAgICAgKTtcblxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5hZGRMb2coXCJTdWNjZXNzIExvZ2luXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyeWluZyB0byBsb2dpbiBpbiBcIik7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubmF2aWdhdGUoXCJkYXNoYm9hcmRcIiwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBOYXZpZ2F0ZWQgdG8gZGFzaGJvYXJkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIkxvZ2luIEZhaWxlZCAsIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gICAgICAgIHRoaXMuYWRkTG9nKFwiTG9naW4gRmFpbGVkIFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRvIGxvZ2luIDogXCIsIGVycm9yKTtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gYEVycm9yIHRvIGxvZ2luICAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZExvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHRoaXMuX2xvZ01lc3NhZ2VzID0gYFske3RpbWVzdGFtcH1dICR7bWVzc2FnZX1cXG4ke3RoaXMuX2xvZ01lc3NhZ2VzfWA7XG4gICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImxvZ01lc3NhZ2VzXCIsIHRoaXMuX2xvZ01lc3NhZ2VzKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgfVxufVxuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcInZpZXdzL2xvZ2luL2xvZ2luLXBhZ2VcXFwiIC8+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdC8vIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7fSlcbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiTXkgQXBwXFxcIiBpY29uPVxcXCJcXFwiIC8+XFxuXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQbGVhc2UgdGFwIG1lXFxcIiBjbGFzcz1cXFwidGV4dC0zeGwgdGV4dC1jZW50ZXJcXFwiIC8+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlRBUFxcXCIgdGFwPVxcXCJ7eyBvblRhcCB9fVxcXCIgY2xhc3M9XFxcIi1wcmltYXJ5XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1lc3NhZ2UgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWxnIHRleHQtY2VudGVyIHRleHQtZ3JheS00MDBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cXG5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyBwYWdlVGl0bGUgfX1cXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgICAgIDxBY3Rpb25JdGVtIHRhcD1cXFwie3sgb25Mb2dvdXQgfX1cXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxvZ291dFxcXCIgY2xhc3M9XFxcImFjdGlvbi1pdGVtXFxcIiAvPlxcbiAgICAgICAgPC9BY3Rpb25JdGVtPlxcbiAgICA8L0FjdGlvbkJhcj5cXG5cXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBEYXRlIFJhbmdlIEZpbHRlciAtLT5cXG4gICAgICAgICAgICA8U2VnbWVudGVkQmFyIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkRGF0ZVJhbmdlSW5kZXggfX1cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPFNlZ21lbnRlZEJhci5pdGVtcz5cXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ZWRCYXJJdGVtIHRpdGxlPVxcXCJUb2RheVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50ZWRCYXJJdGVtIHRpdGxlPVxcXCJXZWVrXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnRlZEJhckl0ZW0gdGl0bGU9XFxcIk1vbnRoXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnRlZEJhci5pdGVtcz5cXG4gICAgICAgICAgICA8L1NlZ21lbnRlZEJhcj5cXG5cXG4gICAgICAgICAgICA8IS0tIFRyYW5zYWN0aW9uIFN1bW1hcnkgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0b1xcXCIgY29sdW1ucz1cXFwiKiwgKiwgKlxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXIgcC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b2RheVRyYW5zYWN0aW9ucyB9fVxcXCIgY2xhc3M9XFxcInRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb2RheVxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyIHAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgd2Vla1RyYW5zYWN0aW9ucyB9fVxcXCIgY2xhc3M9XFxcInRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIFdlZWtcXFwiIGNsYXNzPVxcXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciBwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRoVHJhbnNhY3Rpb25zIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgTW9udGhcXFwiIGNsYXNzPVxcXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gUmVjZW50IFRyYW5zYWN0aW9ucyAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUmVjZW50IFRyYW5zYWN0aW9uc1xcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyByZWNlbnRUcmFuc2FjdGlvbnMgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIHAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0eXBlIH19XFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IHRpbWVzdGFtcCB9fVxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1ncmF5LTUwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XFxuXCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdCgpXG5cdC8vIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7fSlcbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMb2dpblxcXCIgLz5cXG4gICAgXFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXZWxjb21lIEJhY2tcXFwiIFxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoMiB0ZXh0LWNlbnRlciBtLTEwXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIlVzZXJuYW1lXFxcIiBcXG4gICAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyB1c2VybmFtZSB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgbS0xMFxcXCJcXG4gICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgLz5cXG4gICAgICAgIFxcbiAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJQYXNzd29yZFxcXCIgXFxuICAgICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgcGFzc3dvcmQgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgc2VjdXJlPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBtLTEwXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxvZ2luXFxcIiBcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvbkxvZ2luIH19XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IG0tMTBcXFwiIC8+XFxuXFxuICAgICAgICA8U2Nyb2xsVmlldyBoZWlnaHQ9XFxcIjIwMFxcXCIgY2xhc3M9XFxcIm0tMTBcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBsb2dNZXNzYWdlcyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyBwYWRkaW5nOiAxMDsgZm9udC1zaXplOiAxMjtcXFwiIC8+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgICAgICBcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBlcnJvck1lc3NhZ2UgfX1cXFwiXFxuICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgc3R5bGU9XFxcImNvbG9yOiByZWQ7IHRleHQtYWxpZ246IGNlbnRlcjtcXFwiIFxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtLTEwXFxcIiAvPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==