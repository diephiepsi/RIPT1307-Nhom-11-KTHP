(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pages/admin/posts.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPostsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/app/index.js [client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/descriptions/index.js [client] (ecmascript) <locals> <export default as Descriptions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$pro$2d$table$2f$es$2f$Table$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProTable$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/pro-table/es/Table.js [client] (ecmascript) <export default as ProTable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/admin.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AdminPostsPage() {
    _s();
    const { message, modal } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp();
    const [viewing, setViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const actionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            copyable: true
        },
        {
            title: 'Tác giả',
            dataIndex: 'authorName'
        },
        {
            title: 'Điểm',
            dataIndex: 'score'
        },
        {
            title: 'Ngày',
            dataIndex: 'createdAt',
            valueType: 'dateTime'
        },
        {
            title: 'Trạng thái',
            dataIndex: 'isApproved',
            render: (_, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                    color: row.isApproved ? 'green' : 'orange',
                    children: row.isApproved ? 'Đã duyệt' : 'Chờ duyệt'
                }, void 0, false, {
                    fileName: "[project]/src/pages/admin/posts.tsx",
                    lineNumber: 35,
                    columnNumber: 27
                }, this)
        },
        {
            title: 'Thẻ',
            dataIndex: 'tags',
            render: (_, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: row.tags?.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                            children: t
                        }, t, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this))
                }, void 0, false)
        },
        {
            title: 'Hành động',
            key: 'actions',
            render: (_, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            onClick: ()=>setViewing(row),
                            children: "Xem"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        !row.isApproved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            onClick: async ()=>{
                                try {
                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["adminService"].approvePost(row.id);
                                    message.success('Đã duyệt bài viết');
                                    actionRef.current?.reload();
                                } catch  {
                                    message.error('Duyệt bài thất bại');
                                }
                            },
                            children: "Duyệt"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            danger: true,
                            onClick: ()=>{
                                modal.confirm({
                                    title: 'Xóa bài viết?',
                                    content: 'Thao tác không thể hoàn tác',
                                    onOk: async ()=>{
                                        try {
                                            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["adminService"].deletePost(row.id);
                                            message.success('Đã xóa bài viết');
                                            actionRef.current?.reload();
                                        } catch  {
                                            message.error('Xóa bài thất bại');
                                        }
                                    }
                                });
                            },
                            children: "Xóa"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/admin/posts.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"].Title, {
                level: 3,
                children: "Quản trị bài đăng"
            }, void 0, false, {
                fileName: "[project]/src/pages/admin/posts.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$pro$2d$table$2f$es$2f$Table$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ProTable$3e$__["ProTable"], {
                actionRef: actionRef,
                rowKey: "id",
                columns: columns,
                request: async (params)=>{
                    try {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["adminService"].getPosts();
                        return {
                            data,
                            success: true
                        };
                    } catch (err) {
                        message.error('Không tải được danh sách bài');
                        return {
                            data: [],
                            success: false
                        };
                    }
                },
                search: false,
                pagination: {
                    pageSize: 10
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/admin/posts.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: "Chi tiết bài viết",
                open: !!viewing,
                onCancel: ()=>setViewing(null),
                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: ()=>setViewing(null),
                    children: "Đóng"
                }, void 0, false, {
                    fileName: "[project]/src/pages/admin/posts.tsx",
                    lineNumber: 120,
                    columnNumber: 17
                }, this),
                width: 800,
                children: viewing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"], {
                    column: 1,
                    bordered: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Tiêu đề",
                            children: viewing.title
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Tác giả",
                            children: viewing.authorName
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Thẻ",
                            children: viewing.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/src/pages/admin/posts.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$descriptions$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Descriptions$3e$__["Descriptions"].Item, {
                            label: "Nội dung",
                            children: viewing.content
                        }, void 0, false, {
                            fileName: "[project]/src/pages/admin/posts.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/admin/posts.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/admin/posts.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/admin/posts.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(AdminPostsPage, "5ETO+P9hahfYj/CAUSicwli7dUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp
    ];
});
_c = AdminPostsPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPostsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/admin.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [client] (ecmascript)");
;
const adminService = {
    getUsers: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/admin/users'),
    createUser: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post('/admin/users', data),
    updateUser: (id, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].patch(`/admin/users/${id}`, data),
    deleteUser: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].delete(`/admin/users/${id}`),
    resetPassword: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post(`/admin/users/${id}/reset-password`),
    getPosts: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/admin/posts'),
    approvePost: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].patch(`/admin/posts/${id}/approve`),
    deletePost: (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].delete(`/admin/posts/${id}`)
};
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

//# sourceMappingURL=src_228490bc.async.js.map