(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pages/questions/[id].tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionDetailPage",
    ()=>QuestionDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/app/index.js [client] (ecmascript) <export default as App>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/card/index.js [client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/empty/index.js [client] (ecmascript) <export default as Empty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [client] (ecmascript) <export default as Spin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tag/index.js [client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BookOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/BookOutlined.js [client] (ecmascript) <export default as BookOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ClockCircleOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockCircleOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js [client] (ecmascript) <export default as ClockCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DislikeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DislikeOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/DislikeOutlined.js [client] (ecmascript) <export default as DislikeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/EyeOutlined.js [client] (ecmascript) <export default as EyeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LikeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LikeOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/LikeOutlined.js [client] (ecmascript) <export default as LikeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MessageOutlined.js [client] (ecmascript) <export default as MessageOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SendOutlined.js [client] (ecmascript) <export default as SendOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ShareAltOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareAltOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ShareAltOutlined.js [client] (ecmascript) <export default as ShareAltOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/StarFilled.js [client] (ecmascript) <export default as StarFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js [client] (ecmascript) <export default as ArrowLeftOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [client] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/questions.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const { Title, Text, Paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const { TextArea } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"];
const getLikes = (x)=>x?.likesCount ?? x?.votes?.likesCount ?? x?.votes?.up ?? 0;
const getDislikes = (x)=>x?.dislikesCount ?? x?.votes?.dislikesCount ?? x?.votes?.down ?? 0;
const formatDate = (date)=>{
    if (!date) return "";
    return new Date(date).toLocaleString("vi-VN");
};
const buildCommentTree = (comments)=>{
    const map = new Map();
    comments.forEach((comment)=>{
        map.set(comment.id, {
            ...comment,
            children: []
        });
    });
    const roots = [];
    map.forEach((node)=>{
        if (node.parentId && map.has(node.parentId)) {
            map.get(node.parentId).children.push(node);
        } else {
            roots.push(node);
        }
    });
    const sortTree = (nodes)=>{
        nodes.sort((a, b)=>+new Date(a.createdAt) - +new Date(b.createdAt));
        nodes.forEach((node)=>sortTree(node.children));
    };
    sortTree(roots);
    return roots;
};
function CommentThread({ node, level = 0, replyingId, replyText, submitting, onOpenReply, onChangeReply, onSubmitReply, onCancelReply }) {
    const isReplying = replyingId === node.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: level === 0 ? 0 : 24,
            marginLeft: level === 0 ? 0 : 56,
            position: "relative"
        },
        children: [
            level > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -28,
                    top: 24,
                    bottom: 24,
                    width: 2,
                    background: "linear-gradient(180deg, #e0e7ff 0%, #c7d2fe 50%, #e0e7ff 100%)",
                    borderRadius: 1,
                    opacity: 0.7
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            size: 44,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 121,
                                columnNumber: 19
                            }, this),
                            style: {
                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                color: "#fff",
                                flexShrink: 0,
                                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                                border: "2px solid #ffffff"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/pages/questions/[id].tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        marginBottom: 10
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                strong: true,
                                                style: {
                                                    fontSize: 15,
                                                    color: "#1e293b"
                                                },
                                                children: node.author?.fullName || "Người dùng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                style: {
                                                    fontSize: 13,
                                                    marginLeft: 12,
                                                    color: "#94a3b8"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ClockCircleOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockCircleOutlined$3e$__["ClockCircleOutlined"], {
                                                        style: {
                                                            marginRight: 4
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    formatDate(node.createdAt)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#f8fafc",
                                        borderRadius: 16,
                                        padding: "16px 20px",
                                        border: "1px solid #f1f5f9",
                                        transition: "all 0.2s"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Paragraph, {
                                            style: {
                                                whiteSpace: "pre-wrap",
                                                fontSize: 15,
                                                lineHeight: 1.7,
                                                color: "#334155",
                                                marginBottom: 12
                                            },
                                            children: node.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            size: "small",
                                            onClick: ()=>onOpenReply(node.id),
                                            style: {
                                                color: "#6366f1",
                                                fontWeight: 600,
                                                padding: "0 4px",
                                                height: "auto",
                                                fontSize: 13,
                                                borderRadius: 8,
                                                display: "inline-flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {
                                                    style: {
                                                        marginRight: 6
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                "Trả lời"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                isReplying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 16,
                                        background: "#ffffff",
                                        borderRadius: 16,
                                        padding: 20,
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                            autoFocus: true,
                                            rows: 3,
                                            value: replyText,
                                            onChange: (e)=>onChangeReply(e.target.value),
                                            placeholder: `Phản hồi ${node.author?.fullName || "người dùng"}...`,
                                            style: {
                                                borderRadius: 12,
                                                marginBottom: 16,
                                                border: "1px solid #cbd5e1",
                                                fontSize: 14,
                                                padding: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    type: "primary",
                                                    size: "middle",
                                                    loading: submitting,
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__["SendOutlined"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 27
                                                    }, this),
                                                    onClick: ()=>onSubmitReply(node.id),
                                                    style: {
                                                        borderRadius: 12,
                                                        fontWeight: 600,
                                                        background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
                                                        border: "none",
                                                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)"
                                                    },
                                                    children: "Gửi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    size: "middle",
                                                    onClick: onCancelReply,
                                                    style: {
                                                        borderRadius: 12,
                                                        fontWeight: 500
                                                    },
                                                    children: "Hủy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/questions/[id].tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/questions/[id].tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentThread, {
                    node: child,
                    level: level + 1,
                    replyingId: replyingId,
                    replyText: replyText,
                    submitting: submitting,
                    onOpenReply: onOpenReply,
                    onChangeReply: onChangeReply,
                    onSubmitReply: onSubmitReply,
                    onCancelReply: onCancelReply
                }, child.id, false, {
                    fileName: "[project]/src/pages/questions/[id].tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/questions/[id].tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c = CommentThread;
function QuestionDetailPage() {
    _s();
    const { id = "" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"])();
    const { message } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp();
    const viewedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const commentBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const commentInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyingId, setReplyingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showInlineCommentBox, setShowInlineCommentBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inlineCommentText, setInlineCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [inlineSubmitting, setInlineSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = async ()=>{
        if (!id) return;
        setLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].detail(id);
            setQuestion(data);
        } catch (err) {
            message.error(err?.response?.data?.message || "Không tải được chi tiết câu hỏi");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        void load();
        if (id && viewedRef.current !== id) {
            viewedRef.current = id;
            void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].view(id).catch(()=>void 0);
        }
    }, [
        id
    ]);
    const commentTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return buildCommentTree(question?.comments ?? []);
    }, [
        question?.comments
    ]);
    const handleQuestionVote = async (value)=>{
        if (!question) return;
        try {
            const nextValue = question.votes?.myVote === value ? 0 : value;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].vote(question.id, nextValue);
            setQuestion({
                ...question,
                votes: res.votes,
                likesCount: res.votes.likesCount,
                dislikesCount: res.votes.dislikesCount
            });
        } catch (err) {
            message.error(err?.response?.data?.message || "Không vote được câu hỏi");
        }
    };
    const handleBookmark = async ()=>{
        if (!question) return;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].bookmark(question.id);
            setQuestion({
                ...question,
                isBookmarked: res.isBookmarked
            });
            message.success(res.isBookmarked ? "Đã lưu câu hỏi" : "Đã bỏ lưu câu hỏi");
        } catch (err) {
            message.error(err?.response?.data?.message || "Không lưu được câu hỏi");
        }
    };
    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(window.location.href);
        message.success("Đã sao chép liên kết");
    };
    const submitReply = async (parentId)=>{
        if (!question || !replyText.trim()) return;
        setSubmitting(true);
        try {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].addComment(question.id, {
                content: replyText.trim(),
                parentId
            });
            setQuestion({
                ...question,
                comments: [
                    ...question.comments,
                    created
                ],
                answersCount: (question.answersCount ?? question.comments.length) + 1
            });
            setReplyingId(null);
            setReplyText("");
            message.success("Đã trả lời bình luận");
        } catch (err) {
            message.error(err?.response?.data?.message || "Không trả lời được bình luận");
        } finally{
            setSubmitting(false);
        }
    };
    const handleOpenInlineComment = ()=>{
        setShowInlineCommentBox(true);
        setTimeout(()=>{
            commentInputRef.current?.focus();
            commentBoxRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    };
    const handleSubmitInlineComment = async ()=>{
        if (!question || !inlineCommentText.trim()) return;
        setInlineSubmitting(true);
        try {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$questions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["questionsService"].addComment(question.id, {
                content: inlineCommentText.trim()
            });
            setQuestion({
                ...question,
                comments: [
                    ...question.comments,
                    created
                ],
                answersCount: (question.answersCount ?? question.comments.length) + 1
            });
            setInlineCommentText("");
            setShowInlineCommentBox(false);
            message.success("Đã gửi bình luận");
        } catch (err) {
            message.error(err?.response?.data?.message || "Không gửi được bình luận");
        } finally{
            setInlineSubmitting(false);
        }
    };
    const handleCancelInlineComment = ()=>{
        setShowInlineCommentBox(false);
        setInlineCommentText("");
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f0f4ff 0%, #e2e8f0 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                size: "large"
            }, void 0, false, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 416,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/questions/[id].tsx",
            lineNumber: 407,
            columnNumber: 7
        }, this);
    }
    if (!question) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "#f8fafc",
                padding: 24
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                style: {
                    maxWidth: 600,
                    margin: "0 auto",
                    textAlign: "center",
                    borderRadius: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                        description: "Không tìm thấy câu hỏi"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                        to: "/questions",
                        children: "← Quay lại danh sách"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 424,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/pages/questions/[id].tsx",
            lineNumber: 423,
            columnNumber: 7
        }, this);
    }
    const likes = getLikes(question);
    const dislikes = getDislikes(question);
    const answers = question.answersCount ?? question.comments.length;
    const views = question.viewsCount ?? 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f9faff 0%, #f1f5f9 100%)",
            fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backdropFilter: "blur(20px)",
                    background: "rgba(255,255,255,0.8)",
                    borderBottom: "1px solid rgba(226, 232, 240, 0.6)",
                    padding: "0 48px",
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.02)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                        to: "/questions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "text",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ArrowLeftOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftOutlined$3e$__["ArrowLeftOutlined"], {
                                style: {
                                    fontSize: 18
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 471,
                                columnNumber: 19
                            }, this),
                            style: {
                                fontWeight: 600,
                                color: "#475569",
                                borderRadius: 12,
                                padding: "4px 16px",
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#f1f5f9",
                                border: "1px solid #e2e8f0",
                                transition: "all 0.2s"
                            },
                            children: "Quay lại"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/questions/[id].tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 700,
                            fontSize: 18,
                            color: "#1e293b"
                        },
                        children: "Chi tiết câu hỏi"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 100
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "48px 24px 80px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$card$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                    style: {
                        borderRadius: 32,
                        boxShadow: "0 25px 80px -20px rgba(0,0,0,0.1)",
                        background: "#ffffff",
                        border: "1px solid #f1f5f9",
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "48px 56px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 1,
                                style: {
                                    marginBottom: 28,
                                    fontWeight: 800,
                                    color: "#0f172a",
                                    letterSpacing: "-0.04em",
                                    fontSize: 34,
                                    lineHeight: 1.2
                                },
                                children: question.title
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    gap: 16,
                                    marginBottom: 28,
                                    color: "#475569",
                                    fontSize: 15
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "#f1f5f9",
                                            borderRadius: 30,
                                            padding: "8px 18px",
                                            fontWeight: 500,
                                            fontSize: 15
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {
                                                style: {
                                                    color: "#6366f1",
                                                    fontSize: 16
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            question.author?.fullName || "Thành viên"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "#f1f5f9",
                                            borderRadius: 30,
                                            padding: "8px 18px",
                                            fontWeight: 500,
                                            fontSize: 15
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ClockCircleOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockCircleOutlined$3e$__["ClockCircleOutlined"], {
                                                style: {
                                                    color: "#6366f1",
                                                    fontSize: 16
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this),
                                            formatDate(question.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 548,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "#f1f5f9",
                                            borderRadius: 30,
                                            padding: "8px 18px",
                                            fontWeight: 500,
                                            fontSize: 15
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$EyeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOutlined$3e$__["EyeOutlined"], {
                                                style: {
                                                    color: "#6366f1",
                                                    fontSize: 16
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, this),
                                            views,
                                            " lượt xem"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "#f1f5f9",
                                            borderRadius: 30,
                                            padding: "8px 18px",
                                            fontWeight: 500,
                                            fontSize: 15
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {
                                                style: {
                                                    color: "#6366f1",
                                                    fontSize: 16
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            answers,
                                            " trả lời"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 580,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 32
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
                                    wrap: true,
                                    size: [
                                        8,
                                        12
                                    ],
                                    children: question.tags?.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tag$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            style: {
                                                background: "linear-gradient(135deg, #ede9fe 0%, #e0e7ff 100%)",
                                                border: "none",
                                                borderRadius: 30,
                                                padding: "6px 20px",
                                                fontSize: 14,
                                                color: "#4c1d95",
                                                fontWeight: 600,
                                                cursor: "default",
                                                boxShadow: "0 2px 6px rgba(139, 92, 246, 0.15)"
                                            },
                                            children: t.name
                                        }, t.id || t.name, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 598,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "#fafbff",
                                    borderRadius: 20,
                                    padding: "32px 36px",
                                    marginBottom: 36,
                                    fontSize: 16,
                                    lineHeight: 1.85,
                                    color: "#1e293b",
                                    border: "1px solid #eef2ff",
                                    boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: question.content
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    padding: "12px 0",
                                    borderTop: "1px solid #f1f5f9",
                                    borderBottom: "1px solid #f1f5f9",
                                    marginBottom: 48
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: "Thích",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$LikeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LikeOutlined$3e$__["LikeOutlined"], {
                                                style: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 650,
                                                columnNumber: 25
                                            }, this),
                                            onClick: ()=>void handleQuestionVote(1),
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontWeight: 600,
                                                fontSize: 15,
                                                color: question.votes?.myVote === 1 ? "#4f46e5" : "#475569",
                                                background: "transparent",
                                                border: "none",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                transition: "all 0.2s"
                                            },
                                            children: [
                                                "Thích ",
                                                likes > 0 && `(${likes})`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: "Không thích",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DislikeOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DislikeOutlined$3e$__["DislikeOutlined"], {
                                                style: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 673,
                                                columnNumber: 25
                                            }, this),
                                            onClick: ()=>void handleQuestionVote(-1),
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontWeight: 600,
                                                fontSize: 15,
                                                color: question.votes?.myVote === -1 ? "#dc2626" : "#475569",
                                                background: "transparent",
                                                border: "none",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                transition: "all 0.2s"
                                            },
                                            children: [
                                                "Không thích ",
                                                dislikes > 0 && `(${dislikes})`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 671,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: "Bình luận",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {
                                                style: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 697,
                                                columnNumber: 25
                                            }, this),
                                            onClick: handleOpenInlineComment,
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontWeight: 600,
                                                fontSize: 15,
                                                color: "#475569",
                                                background: "transparent",
                                                border: "none",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                transition: "all 0.2s"
                                            },
                                            children: [
                                                "Bình luận ",
                                                answers > 0 && `(${answers})`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: "Chia sẻ liên kết",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$ShareAltOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShareAltOutlined$3e$__["ShareAltOutlined"], {
                                                style: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 720,
                                                columnNumber: 25
                                            }, this),
                                            onClick: ()=>void handleCopy(),
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontWeight: 600,
                                                fontSize: 15,
                                                color: "#475569",
                                                background: "transparent",
                                                border: "none",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                transition: "all 0.2s"
                                            },
                                            children: "Chia sẻ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                        title: question.isBookmarked ? "Bỏ lưu" : "Lưu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                            type: "text",
                                            icon: question.isBookmarked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$StarFilled$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StarFilled$3e$__["StarFilled"], {
                                                style: {
                                                    color: "#f59e0b",
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 745,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BookOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOutlined$3e$__["BookOutlined"], {
                                                style: {
                                                    fontSize: 20
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 747,
                                                columnNumber: 23
                                            }, this),
                                            onClick: ()=>void handleBookmark(),
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontWeight: 600,
                                                fontSize: 15,
                                                color: question.isBookmarked ? "#f59e0b" : "#475569",
                                                background: "transparent",
                                                border: "none",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                transition: "all 0.2s"
                                            },
                                            children: question.isBookmarked ? "Đã lưu" : "Lưu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                level: 3,
                                style: {
                                    marginBottom: 32,
                                    fontWeight: 700,
                                    color: "#0f172a",
                                    fontSize: 24,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MessageOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageOutlined$3e$__["MessageOutlined"], {
                                        style: {
                                            color: "#6366f1"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 782,
                                        columnNumber: 15
                                    }, this),
                                    answers,
                                    " câu trả lời"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 770,
                                columnNumber: 13
                            }, this),
                            commentTree.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "56px 0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$empty$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Empty$3e$__["Empty"], {
                                    description: "Chưa có bình luận nào. Hãy là người đầu tiên bình luận!"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 788,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 787,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 32
                                },
                                children: commentTree.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentThread, {
                                        node: node,
                                        replyingId: replyingId,
                                        replyText: replyText,
                                        submitting: submitting,
                                        onOpenReply: (commentId)=>{
                                            setReplyingId(commentId);
                                            setReplyText("");
                                        },
                                        onChangeReply: setReplyText,
                                        onSubmitReply: (parentId)=>void submitReply(parentId),
                                        onCancelReply: ()=>{
                                            setReplyingId(null);
                                            setReplyText("");
                                        }
                                    }, node.id, false, {
                                        fileName: "[project]/src/pages/questions/[id].tsx",
                                        lineNumber: 793,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 791,
                                columnNumber: 15
                            }, this),
                            showInlineCommentBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: commentBoxRef,
                                style: {
                                    marginTop: 24,
                                    marginBottom: 24,
                                    background: "#ffffff",
                                    borderRadius: 24,
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 20px 35px -12px rgba(0,0,0,0.1)",
                                    padding: 24,
                                    animation: "fadeInUp 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                            size: 44,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                lineNumber: 832,
                                                columnNumber: 27
                                            }, this),
                                            style: {
                                                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                                                flexShrink: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 830,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                    strong: true,
                                                    style: {
                                                        fontSize: 16
                                                    },
                                                    children: "Viết bình luận"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                                    ref: commentInputRef,
                                                    rows: 4,
                                                    value: inlineCommentText,
                                                    onChange: (e)=>setInlineCommentText(e.target.value),
                                                    placeholder: "Chia sẻ suy nghĩ của bạn về câu hỏi này...",
                                                    style: {
                                                        marginTop: 12,
                                                        borderRadius: 16,
                                                        border: "1px solid #e2e8f0",
                                                        fontSize: 15,
                                                        padding: 12,
                                                        resize: "vertical"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        gap: 12,
                                                        marginTop: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            onClick: handleCancelInlineComment,
                                                            style: {
                                                                borderRadius: 40,
                                                                fontWeight: 500
                                                            },
                                                            children: "Hủy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                                            type: "primary",
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SendOutlined$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendOutlined$3e$__["SendOutlined"], {}, void 0, false, {
                                                                fileName: "[project]/src/pages/questions/[id].tsx",
                                                                lineNumber: 874,
                                                                columnNumber: 31
                                                            }, this),
                                                            loading: inlineSubmitting,
                                                            onClick: ()=>void handleSubmitInlineComment(),
                                                            style: {
                                                                borderRadius: 40,
                                                                fontWeight: 600,
                                                                paddingLeft: 24,
                                                                paddingRight: 24,
                                                                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                                                                border: "none",
                                                                boxShadow: "0 4px 12px rgba(99,102,241,0.3)"
                                                            },
                                                            children: "Gửi bình luận"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/questions/[id].tsx",
                                            lineNumber: 839,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/questions/[id].tsx",
                                    lineNumber: 829,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/questions/[id].tsx",
                                lineNumber: 816,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/questions/[id].tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/pages/questions/[id].tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/pages/questions/[id].tsx",
                lineNumber: 899,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/questions/[id].tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
_s(QuestionDetailPage, "y8Jzc1ovIPhzXcGy6UJeP+zkLOY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$app$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__App$3e$__["App"].useApp
    ];
});
_c1 = QuestionDetailPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CommentThread");
__turbopack_context__.k.register(_c1, "QuestionDetailPage");
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
"[project]/src/services/questions.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questionsService",
    ()=>questionsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [client] (ecmascript)");
;
const questionsService = {
    async list (params) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/questions', {
            params
        });
        return res.data;
    },
    async detail (id) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get(`/questions/${id}`);
        return res.data;
    },
    async create (payload) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post('/questions', payload);
        return res.data;
    },
    async addComment (id, payload) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post(`/questions/${id}/comments`, payload);
        return res.data;
    },
    async vote (id, value) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post(`/questions/${id}/vote`, {
            value
        });
        return res.data;
    },
    async view (id) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post(`/questions/${id}/view`);
        return res.data;
    },
    async bookmark (id) {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].post(`/questions/${id}/bookmark`);
        return res.data;
    },
    async tags () {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["api"].get('/tags');
        return res.data;
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
]);

//# sourceMappingURL=src_0887437f.async.js.map