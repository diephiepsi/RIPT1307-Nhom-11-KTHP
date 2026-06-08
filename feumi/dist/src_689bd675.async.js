(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/layouts/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/menu/index.js [client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/popover/index.js [client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/badge/index.js [client] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/list/index.js [client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/BellOutlined.js [client] (ecmascript) <export default as BellOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/.umi/exports.ts [client] (ecmascript)"); // ĐÃ SỬA: Dùng umi thay vì react-router-dom
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [client] (ecmascript)"); // Đường dẫn đến file axios của bạn
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storage.ts [client] (ecmascript)"); // Đường dẫn đến file lưu token
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const { Header, Content, Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
// Hook xác định đang ở trang nào để làm sáng thanh Menu bên trái
function useSelectedKey(pathname) {
    if (pathname.startsWith('/admin/users')) return '/admin/users';
    if (pathname.startsWith('/admin/posts')) return '/admin/posts';
    if (pathname.startsWith('/ask')) return '/ask';
    if (pathname.startsWith('/login')) return '/login';
    if (pathname.startsWith('/register')) return '/register';
    return '/';
}
function GlobalLayout() {
    _s();
    const loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLocation"])();
    const nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const selectedKey = useSelectedKey(loc.pathname);
    // Lấy user trực tiếp từ storage (vì UmiJS không cần xài Redux phức tạp như Vite cũ)
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getUser();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].getToken();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ============================================================
    // LOGIC LẤY THÔNG BÁO (GIỮ NGUYÊN TỪ CŨ)
    // ============================================================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Chỉ gọi API nếu đã đăng nhập
        if (!token) return;
        const fetchNotifications = async ()=>{
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/notifications');
                setNotifications(data);
            } catch (error) {
                console.error('Lỗi khi tải thông báo:', error);
            }
        };
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 10000);
        return ()=>clearInterval(interval);
    }, [
        token
    ]);
    const unreadCount = notifications.filter((n)=>!n.isRead).length;
    const markAllAsRead = async ()=>{
        try {
            if (!token) return;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post('/notifications/read-all');
            setNotifications(notifications.map((n)=>({
                    ...n,
                    isRead: true
                })));
        } catch (error) {
            console.error('Lỗi khi cập nhật trạng thái:', error);
        }
    };
    const formatTime = (dateStr)=>{
        const d = new Date(dateStr);
        return isNaN(d.getTime()) ? '' : d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    // GIAO DIỆN CỦA HỘP THÔNG BÁO BẬT RA
    const notificationContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '340px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    paddingBottom: '5px',
                    borderBottom: '1px solid #f0f0f0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 600
                        },
                        children: "Thông báo"
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "link",
                        size: "small",
                        onClick: markAllAsRead,
                        style: {
                            padding: 0,
                            fontSize: '0.8rem'
                        },
                        children: "Đánh dấu đã đọc"
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                dataSource: notifications,
                itemLayout: "horizontal",
                locale: {
                    emptyText: 'Bạn không có thông báo nào'
                },
                renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"].Item, {
                        style: {
                            padding: '8px 8px',
                            backgroundColor: !item.isRead ? '#f4f8fa' : 'transparent',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: '4px',
                            transition: 'background-color 0.2s'
                        },
                        onClick: ()=>{
                            nav(`/questions/${item.targetId}`);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$list$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"].Item.Meta, {
                            avatar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                size: "small",
                                style: {
                                    backgroundColor: !item.isRead ? '#0a95ff' : '#cbd5e1'
                                },
                                icon: item.type === 'LIKE' ? '❤️' : '💬'
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/index.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.82rem',
                                    fontWeight: !item.isRead ? 600 : 400,
                                    color: '#232629'
                                },
                                children: item.content
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/index.tsx",
                                lineNumber: 118,
                                columnNumber: 22
                            }, this),
                            description: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '0.7rem',
                                    color: '#9199a1'
                                },
                                children: formatTime(item.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/layouts/index.tsx",
                                lineNumber: 119,
                                columnNumber: 28
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/index.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/layouts/index.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
    // MENU BÊN TRÁI
    const sidebarItems = [
        {
            key: '/',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/",
                children: "Câu hỏi"
            }, void 0, false, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 129,
                columnNumber: 24
            }, this)
        },
        {
            key: '/ask',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/ask",
                children: "Đặt câu hỏi"
            }, void 0, false, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 130,
                columnNumber: 27
            }, this)
        }
    ];
    if (user?.role === 'ADMIN') {
        sidebarItems.push({
            key: '/admin/posts',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/admin/posts",
                children: "⚙️ Quản trị bài"
            }, void 0, false, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 135,
                columnNumber: 37
            }, this)
        }, {
            key: '/admin/users',
            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Link"], {
                to: "/admin/users",
                children: "⚙️ Quản trị user"
            }, void 0, false, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 136,
                columnNumber: 37
            }, this)
        });
    }
    const isAuthPage = selectedKey === '/login' || selectedKey === '/register';
    // Nếu đang ở trang Đăng nhập / Đăng ký thì không hiện Header và Menu bên trái
    if (isAuthPage) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
            fileName: "[project]/src/layouts/index.tsx",
            lineNumber: 144,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f8f9fa'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                style: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    width: '100%',
                    height: '50px',
                    lineHeight: '50px',
                    backgroundColor: '#ffffff',
                    borderTop: '3px solid #f48225',
                    borderBottom: '1px solid #e3e6e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 20px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        size: "large",
                        style: {
                            flex: 1,
                            maxWidth: '800px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Title, {
                            level: 4,
                            onClick: ()=>nav('/'),
                            style: {
                                color: '#0c0d0e',
                                margin: 0,
                                cursor: 'pointer',
                                fontFamily: 'sans-serif',
                                fontSize: '1.3rem'
                            },
                            children: [
                                "UniBrain",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontWeight: 300,
                                        color: '#f48225'
                                    },
                                    children: ".com"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 163,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/layouts/index.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                        size: "middle",
                        children: token && user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                    content: notificationContent,
                                    trigger: "click",
                                    placement: "bottomRight",
                                    arrow: {
                                        pointAtCenter: true
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                        count: unreadCount,
                                        size: "small",
                                        offset: [
                                            -2,
                                            4
                                        ],
                                        style: {
                                            backgroundColor: '#f48225'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__["BellOutlined"], {
                                                style: {
                                                    fontSize: '1.2rem',
                                                    color: '#525960'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/layouts/index.tsx",
                                                lineNumber: 175,
                                                columnNumber: 27
                                            }, this),
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '4px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/index.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/layouts/index.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Text, {
                                    style: {
                                        color: '#232629',
                                        fontSize: '0.85rem'
                                    },
                                    children: [
                                        user.fullName || 'Người dùng',
                                        " (",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#0074cc',
                                                fontWeight: 'bold'
                                            },
                                            children: user.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/layouts/index.tsx",
                                            lineNumber: 182,
                                            columnNumber: 50
                                        }, this),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    size: "small",
                                    style: {
                                        backgroundColor: '#f48225',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '3px',
                                        fontSize: '0.8rem'
                                    },
                                    onClick: ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].clearToken();
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storage$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["storage"].clearUser();
                                        window.location.href = '/login'; // Ép tải lại trang để xóa sạch cache
                                    },
                                    children: "Đăng xuất"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    size: "small",
                                    style: {
                                        backgroundColor: '#e1ecf4',
                                        color: '#39739d',
                                        borderColor: '#7aa7c7',
                                        borderRadius: '3px'
                                    },
                                    onClick: ()=>nav('/login'),
                                    children: "Đăng nhập"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "primary",
                                    size: "small",
                                    style: {
                                        backgroundColor: '#0a95ff',
                                        borderColor: 'transparent',
                                        borderRadius: '3px'
                                    },
                                    onClick: ()=>nav('/register'),
                                    children: "Đăng ký"
                                }, void 0, false, {
                                    fileName: "[project]/src/layouts/index.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    maxWidth: '1264px',
                    width: '100%',
                    margin: '0 auto',
                    background: 'transparent'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
                        width: 170,
                        theme: "light",
                        style: {
                            background: 'transparent',
                            borderRight: '1px solid #e3e6e8',
                            height: 'calc(100vh - 50px)',
                            position: 'sticky',
                            top: '50px',
                            paddingTop: '16px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            mode: "inline",
                            selectedKeys: [
                                selectedKey
                            ],
                            items: sidebarItems,
                            style: {
                                background: 'transparent',
                                borderRight: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/layouts/index.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                        style: {
                            padding: '24px',
                            backgroundColor: '#ffffff',
                            minHeight: 'calc(100vh - 50px)',
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Outlet"], {}, void 0, false, {
                                fileName: "[project]/src/layouts/index.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layouts/index.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/layouts/index.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/layouts/index.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(GlobalLayout, "JL3Y9RV/RTDbO/R9xB1RAojQ0tg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f2e$umi$2f$exports$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useNavigate"],
        useSelectedKey
    ];
});
_c = GlobalLayout;
var _c;
__turbopack_context__.k.register(_c, "GlobalLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
]);

//# sourceMappingURL=src_689bd675.async.js.map