"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[717],{52756:function(O,f,e){e.r(f),e.d(f,{default:function(){return en}});var c=e(97857),_=e.n(c),p=e(15009),r=e.n(p),o=e(99289),g=e.n(o),k=e(5574),K=e.n(k),u=e(26058),v=e(56794),E=e(71577),C=e(2487),P=e(85357),N=e(87200),T=e(12922),Z=e(55241),S=e(79041),z=e(50136),F=e(71743),w=e(90618),H=e(42509),$=e(21082),V=e(94886),Y=e(2926),G=e(63694),d=e(40905),U=e(67294),A=e(25538),x=e(61628),n=e(85893),Q=u.Z.Header,J=u.Z.Content,X=u.Z.Sider,q=u.Z.Footer;function nn(i){return i.startsWith("/admin/users")?"/admin/users":i.startsWith("/admin/posts")?"/admin/posts":i.startsWith("/admin/dashboard")?"/admin/dashboard":i.startsWith("/ask")?"/ask":i.startsWith("/login")?"/login":i.startsWith("/register")?"/register":"/"}function en(){var i,tn=(0,d.TH)(),b=(0,d.s0)(),M=nn(tn.pathname),m=x.t.getUser(),D=x.t.getToken(),rn=(0,U.useState)([]),B=K()(rn,2),j=B[0],I=B[1];(0,U.useEffect)(function(){if(D){var s=function(){var h=g()(r()().mark(function t(){var y,R;return r()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,A.h.get("/notifications");case 3:y=l.sent,R=y.data,I(R),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(0),console.error("L\u1ED7i khi t\u1EA3i th\xF4ng b\xE1o:",l.t0);case 11:case"end":return l.stop()}},t,null,[[0,8]])}));return function(){return h.apply(this,arguments)}}();s();var a=setInterval(s,1e4);return function(){return clearInterval(a)}}},[D]);var L=j.filter(function(s){return!s.isRead}).length,an=function(){var s=g()(r()().mark(function a(){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,A.h.post("/notifications/read-all");case 5:I(j.map(function(y){return _()(_()({},y),{},{isRead:!0})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("L\u1ED7i khi c\u1EADp nh\u1EADt tr\u1EA1ng th\xE1i:",t.t0);case 11:case"end":return t.stop()}},a,null,[[0,8]])}));return function(){return s.apply(this,arguments)}}(),on=function(a){var h=new Date(a);return isNaN(h.getTime())?"":h.toLocaleDateString("vi-VN")+" "+h.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})},sn=(0,n.jsxs)("div",{style:{width:340},children:[(0,n.jsxs)("div",{className:"notification-header",children:[(0,n.jsx)(v.Z.Text,{strong:!0,style:{fontSize:16},children:"Th\xF4ng b\xE1o"}),L>0&&(0,n.jsx)(E.ZP,{type:"link",size:"small",onClick:an,className:"btn-mark-read",children:"\u0110\xE1nh d\u1EA5u \u0111\xE3 \u0111\u1ECDc"})]}),(0,n.jsx)(C.Z,{dataSource:j,itemLayout:"horizontal",locale:{emptyText:"Kh\xF4ng c\xF3 th\xF4ng b\xE1o m\u1EDBi"},className:"notification-list",renderItem:function(a){return(0,n.jsxs)(C.Z.Item,{className:"notification-item ".concat(a.isRead?"read":"unread"),onClick:function(){return b("/questions/".concat(a.targetId))},children:[(0,n.jsx)(C.Z.Item.Meta,{avatar:(0,n.jsx)(P.Z,{size:40,className:"notification-avatar ".concat(a.type.toLowerCase()),icon:a.type==="LIKE"?"\u2764\uFE0F":"\u{1F4AC}"}),title:(0,n.jsx)("span",{className:"notification-title",children:a.content}),description:(0,n.jsx)("span",{className:"notification-time",children:on(a.createdAt)})}),!a.isRead&&(0,n.jsx)("div",{className:"unread-dot"})]})}})]}),W=[{key:"/",icon:(0,n.jsx)(w.Z,{}),label:(0,n.jsx)(d.rU,{to:"/",children:"Trang ch\u1EE7"})},{key:"/ask",icon:(0,n.jsx)(H.Z,{}),label:(0,n.jsx)(d.rU,{to:"/ask",children:"\u0110\u1EB7t c\xE2u h\u1ECFi"})}];(m==null?void 0:m.role)==="ADMIN"&&W.push({key:"/admin/posts",icon:(0,n.jsx)($.Z,{}),label:(0,n.jsx)(d.rU,{to:"/admin/posts",children:"Qu\u1EA3n l\xFD b\xE0i \u0111\u0103ng"})},{key:"/admin/users",icon:(0,n.jsx)(V.Z,{}),label:(0,n.jsx)(d.rU,{to:"/admin/users",children:"Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng"})},{key:"/admin/dashboard",icon:(0,n.jsx)(Y.Z,{}),label:(0,n.jsx)(d.rU,{to:"/admin/dashboard",children:"Th\u1ED1ng k\xEA"})});var ln=M==="/login"||M==="/register";return ln?(0,n.jsx)(d.j3,{}):(0,n.jsxs)(N.ZP,{locale:F.Z,children:[(0,n.jsx)("style",{children:`
        :root {
          --brand-primary: #f97316;
          --brand-primary-light: #fff7ed;
          --border-color: #e2e8f0;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --bg-main: #f8fafc;
        }
        
        body {
          background-color: var(--bg-main);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          margin: 0;
        }

        /* T\xF9y ch\u1EC9nh Layout */
        .admin-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 64px;
          background: #ffffff;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }

        .brand-logo {
          margin: 0 !important;
          cursor: pointer;
          font-size: 1.5rem !important;
          font-weight: 800 !important;
          color: var(--text-main) !important;
        }

        .brand-accent {
          color: var(--brand-primary);
        }

        /* N\xFAt & Avatar Header */
        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 12px 4px 4px;
          border-radius: 30px;
          border: 1px solid transparent;
          transition: background 0.2s;
          cursor: pointer;
        }

        .user-profile-badge:hover {
          background: var(--bg-main);
          border-color: var(--border-color);
        }

        /* Sidebar hi\u1EC7n \u0111\u1EA1i */
        .app-sidebar {
          background: #ffffff !important;
          border-right: 1px solid var(--border-color) !important;
          height: calc(100vh - 64px);
          position: sticky !important;
          top: 64px;
        }

        .custom-menu {
          border-right: none !important;
          padding: 16px 8px;
        }

        .custom-menu .ant-menu-item {
          border-radius: 8px !important;
          margin-bottom: 4px !important;
          height: 44px !important;
          line-height: 44px !important;
          font-weight: 500;
          color: var(--text-muted);
        }

        .custom-menu .ant-menu-item-selected {
          background-color: var(--brand-primary-light) !important;
          color: var(--brand-primary) !important;
          font-weight: 600;
        }

        .custom-menu .ant-menu-item-selected .anticon {
          color: var(--brand-primary) !important;
        }

        /* Main Content Container */
        .main-content-wrapper {
          padding: 32px;
          min-height: calc(100vh - 64px);
        }

        .content-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 32px;
          min-height: 100%;
          border: 1px solid var(--border-color);
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        /* CSS Cho Th\xF4ng B\xE1o (Pop-over) */
        .notification-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }

        .btn-mark-read {
          color: var(--text-muted);
          font-size: 13px;
        }
        
        .btn-mark-read:hover {
          color: var(--brand-primary) !important;
        }

        .notification-list {
          max-height: 350px;
          overflow-y: auto;
        }

        .notification-item {
          padding: 12px !important;
          border-radius: 8px;
          cursor: pointer;
          border: none !important;
          transition: background 0.2s;
          position: relative;
        }

        .notification-item:hover {
          background-color: var(--bg-main);
        }

        .notification-item.unread {
          background-color: var(--brand-primary-light);
        }

        .notification-item.unread:hover {
          background-color: #ffedd5;
        }

        .notification-avatar {
          background-color: #f1f5f9;
          font-size: 16px;
        }

        .notification-title {
          font-size: 14px;
          color: var(--text-main);
          font-weight: 500;
        }
        
        .notification-item.unread .notification-title {
          font-weight: 600;
        }

        .notification-time {
          font-size: 12px;
          color: var(--text-muted);
          display: block;
          margin-top: 4px;
        }

        .unread-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--brand-primary);
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}),(0,n.jsxs)(u.Z,{style:{minHeight:"100vh"},children:[(0,n.jsxs)(Q,{className:"admin-header",children:[(0,n.jsx)(T.Z,{size:"large",style:{flex:1},children:(0,n.jsxs)(v.Z.Title,{level:4,onClick:function(){return b("/")},className:"brand-logo",children:["UniBrain",(0,n.jsx)("span",{className:"brand-accent",children:".com"})]})}),(0,n.jsx)(T.Z,{size:"middle",align:"center",children:D&&m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.Z,{content:sn,trigger:"click",placement:"bottomRight",overlayInnerStyle:{padding:"16px 16px 8px 16px",borderRadius:12},children:(0,n.jsx)(S.Z,{count:L,size:"small",style:{backgroundColor:"#f97316"},children:(0,n.jsx)(E.ZP,{type:"text",icon:(0,n.jsx)(G.Z,{style:{fontSize:20,color:"#64748b"}}),shape:"circle",size:"large"})})}),(0,n.jsxs)("div",{className:"user-profile-badge",children:[(0,n.jsx)(P.Z,{style:{backgroundColor:"#f97316",fontWeight:"bold"},children:((i=m.fullName)===null||i===void 0||(i=i[0])===null||i===void 0?void 0:i.toUpperCase())||"U"}),(0,n.jsxs)("div",{style:{lineHeight:1.2},children:[(0,n.jsx)(v.Z.Text,{style:{fontSize:14,fontWeight:600,display:"block"},children:m.fullName||"Ng\u01B0\u1EDDi d\xF9ng"}),(0,n.jsx)(v.Z.Text,{type:"secondary",style:{fontSize:12},children:m.role==="ADMIN"?"Qu\u1EA3n tr\u1ECB vi\xEAn":"Th\xE0nh vi\xEAn"})]})]}),(0,n.jsx)(E.ZP,{onClick:function(){x.t.clearToken(),x.t.clearUser(),window.location.href="/login"},children:"\u0110\u0103ng xu\u1EA5t"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.ZP,{type:"text",onClick:function(){return b("/login")},children:"\u0110\u0103ng nh\u1EADp"}),(0,n.jsx)(E.ZP,{type:"primary",style:{backgroundColor:"#0f172a",borderRadius:6},onClick:function(){return b("/register")},children:"\u0110\u0103ng k\xFD"})]})})]}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(X,{width:250,className:"app-sidebar",children:(0,n.jsx)(z.Z,{mode:"inline",selectedKeys:[M],items:W,className:"custom-menu"})}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(J,{className:"main-content-wrapper",children:(0,n.jsx)("div",{className:"content-card",children:(0,n.jsx)(d.j3,{})})}),(0,n.jsxs)(q,{style:{textAlign:"center",color:"#888",backgroundColor:"transparent",padding:"16px 24px"},children:["H\u1ECDc vi\u1EC7n C\xF4ng ngh\u1EC7 B\u01B0u ch\xEDnh Vi\u1EC5n th\xF4ng (PTIT) \xA9",new Date().getFullYear()," - N\u1EC1n t\u1EA3ng UniBrain"]})]})]})]})]})}},25538:function(O,f,e){e.d(f,{h:function(){return r}});var c=e(45145),_=e(61628),p="https://ript1307-backend.onrender.com/api",r=c.Z.create({baseURL:p,timeout:15e3});r.interceptors.request.use(function(o){var g=_.t.getToken();return g&&o.headers&&o.headers.set("Authorization","Bearer ".concat(g)),o})},61628:function(O,f,e){e.d(f,{t:function(){return p}});var c="qa_token",_="qa_user",p={getToken:function(){return window.localStorage.getItem(c)},setToken:function(o){window.localStorage.setItem(c,o)},clearToken:function(){window.localStorage.removeItem(c)},getUser:function(){var o=window.localStorage.getItem(_);if(!o)return null;try{return JSON.parse(o)}catch(g){return null}},setUser:function(o){window.localStorage.setItem(_,JSON.stringify(o))},clearUser:function(){window.localStorage.removeItem(_)},clearAll:function(){this.clearToken(),this.clearUser()}}}}]);
