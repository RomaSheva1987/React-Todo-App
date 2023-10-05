(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(8),a=(c(18),c(19),c(20),c(2));var s=c(9),l=function(e){return e.ALL="All",e.ACTIVE="Active",e.COMPLETED="Completed",e}({}),i=o.a.createContext({todos:[],filter:l.ALL,setTodos:function(){},setFilter:function(){}}),u=c(0),d=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(n.useContext)(i),l=r.todos,d=r.setTodos,j=c.trim();return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:"todos"}),Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),j&&(!function(){var e={id:+new Date,title:c,completed:!1};d([].concat(Object(s.a)(l),[e]))}(),o(""))},children:Object(u.jsx)("input",{type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:c,onChange:function(e){o(e.target.value)}})})]})},j=c(3),b=c(4),f=c.n(b),O=function(e){var t=e.currentTodo,c=Object(n.useContext)(i),o=c.todos,r=c.setTodos,s=Object(n.useState)(t.title),l=Object(a.a)(s,2),d=l[0],b=l[1],O=Object(n.useState)(!1),m=Object(a.a)(O,2),p=m[0],h=m[1],x=Object(n.useRef)(null),v=t.id,g=t.title,y=t.completed,C=function(){r(o.filter((function(e){return e.id!==v})))},N=function(){h(!1),d.trim()?d!==g&&r(o.map((function(e){return e.id===v?Object(j.a)(Object(j.a)({},e),{},{title:d}):e}))):C()};return Object(n.useEffect)((function(){p&&x.current&&x.current.focus()}),[p]),Object(u.jsxs)("li",{className:f()({completed:y,editing:p}),children:[Object(u.jsxs)("div",{className:"view",children:[Object(u.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-view",checked:y,onClick:function(){r(o.map((function(e){return e.id===v?Object(j.a)(Object(j.a)({},e),{},{completed:!y}):e})))}}),Object(u.jsx)("label",{onDoubleClick:function(){return h(!0)},children:g}),Object(u.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo","aria-label":"deleteTodo",onClick:C})]}),Object(u.jsx)("input",{type:"text",ref:x,className:"edit",value:d,placeholder:"Empty todo will be removed",onChange:function(e){b(e.target.value)},onBlur:N,onKeyUp:function(e){switch(e.key){case"Escape":b(g),h(!1);break;case"Enter":N()}}})]})},m=function(){var e=Object(n.useContext)(i),t=e.todos,c=e.setTodos,o=e.filter,r=t.every((function(e){return e.completed})),a=Object(n.useMemo)((function(){return function(e,t){switch(t){case"Active":return e.filter((function(e){return!e.completed}));case"Completed":return e.filter((function(e){return e.completed}));default:return e}}(t,o)}),[t,o]);return Object(u.jsx)("section",{className:"main",children:t.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"checkbox",id:"toggle-all",className:f()("toggle-all",{active:r}),"data-cy":"toggleAll",onClick:function(){c(t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{completed:!r})})))}}),Object(u.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(u.jsx)("ul",{className:"todo-list","data-cy":"todosList",children:a.map((function(e){return Object(u.jsx)(O,{currentTodo:e},e.id)}))})]})})},p=function(){var e=Object(n.useContext)(i),t=e.todos,c=e.filter,o=e.setTodos,r=e.setFilter,a=t.filter((function(e){return!e.completed})).length,s=t.some((function(e){return e.completed}));return Object(u.jsxs)("footer",{className:"footer",children:[Object(u.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(a," items left")}),Object(u.jsx)("ul",{className:"filters","data-cy":"todosFilter",children:Object.values(l).map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e===l.ALL?"#/":(t=e,"#/".concat(t.toLowerCase())),className:f()({selected:c===e}),onClick:function(){return r(e)},children:e})},e);var t}))}),s&&Object(u.jsx)("button",{type:"button",className:"clear-completed",onClick:function(){o(t.filter((function(e){return!e.completed})))},children:"Clear completed"})]})},h=function(){var e=function(e,t){var c=Object(n.useState)(t),o=Object(a.a)(c,2),r=o[0],s=o[1];return Object(n.useEffect)((function(){var t=localStorage.getItem(e);t&&s(JSON.parse(t))}),[]),[r,function(t){localStorage.setItem(e,JSON.stringify(t)),s(t)}]}("todos",[]),t=Object(a.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(l.ALL),s=Object(a.a)(r,2),j=s[0],b=s[1];return Object(u.jsx)("div",{className:"todoapp",children:Object(u.jsxs)(i.Provider,{value:{todos:c,filter:j,setTodos:o,setFilter:b},children:[Object(u.jsx)(d,{}),Object(u.jsx)(m,{}),c.length>0&&Object(u.jsx)(p,{})]})})},x=document.getElementById("root");Object(r.createRoot)(x).render(Object(u.jsx)(h,{}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d00d8efc.chunk.js.map