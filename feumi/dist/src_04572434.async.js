(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/api.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$process$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/process/browser.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.ts [client] (ecmascript)");
;
;
// Use relative `/api` so dev proxy handles routing to backend.
const clientBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$process$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.API_BASE_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$process$2f$browser$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.VITE_API_BASE_URL || '/api';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: clientBase,
    timeout: 15000
});
api.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
    if (token && config.headers) {
        // Sử dụng hàm .set() của AxiosHeaders
        config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/auth.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.ts [client] (ecmascript)");
;
;
const authService = {
    async login (payload) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post('/auth/login', payload);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setToken(data.token);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setUser(data.user);
        return data;
    },
    async register (payload) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post('/auth/register', payload);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setToken(data.token);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setUser(data.user);
        return data;
    },
    async me () {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/auth/me');
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].setUser(data);
        return data;
    },
    getToken () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
    },
    getUser () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getUser();
    },
    clearSession () {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].clearAll();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/storage.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storage",
    ()=>storage
]);
const TOKEN_KEY = 'qa_token';
const USER_KEY = 'qa_user';
const storage = {
    getToken () {
        return window.localStorage.getItem(TOKEN_KEY);
    },
    setToken (token) {
        window.localStorage.setItem(TOKEN_KEY, token);
    },
    clearToken () {
        window.localStorage.removeItem(TOKEN_KEY);
    },
    getUser () {
        const json = window.localStorage.getItem(USER_KEY);
        if (!json) return null;
        try {
            return JSON.parse(json);
        } catch  {
            return null;
        }
    },
    setUser (user) {
        window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    clearUser () {
        window.localStorage.removeItem(USER_KEY);
    },
    clearAll () {
        this.clearToken();
        this.clearUser();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/wrappers/requireAuth.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequireAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/.umi/exports.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth.ts [client] (ecmascript)");
;
;
;
function RequireAuth() {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["authService"].getToken();
    // Nếu không có token, lập tức điều hướng về trang đăng nhập
    if (!token) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Navigate"], {
            to: "/login",
            replace: true
        }, void 0, false, {
            fileName: "[project]/src/wrappers/requireAuth.tsx",
            lineNumber: 9,
            columnNumber: 12
        }, this);
    }
    // Nếu hợp lệ, render component con (ví dụ: trang /ask)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
        fileName: "[project]/src/wrappers/requireAuth.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = RequireAuth;
var _c;
__turbopack_context__.k.register(_c, "RequireAuth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_04572434.async.js.map