(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(10),o=n.n(r),a=n(2),i=(n(65),n(57)),u=n(21),s=(n(70),n(71),n(35)),l=n(23);var d=Object(l.a)({SetCurrentNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_NOTE":return t.payload;default:return e}},NotesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTES":return t.payload;default:return e}},SetMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return t.payload;default:return e}},SetQuill:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUILL":return t.payload;default:return e}},SetNewQuill:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEW_QUILL":return t.payload;default:return e}}}),f=Object(l.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=function(e){return{type:"SET_MESSAGE",payload:e}},j=function(e){return{type:"SET_NOTES",payload:e}};function h(e,t,n){if(e)!function(e,t){for(var n=0;n<localStorage.length;n++){var c=localStorage.key(n);if(c==t){localStorage.setItem(c,JSON.stringify(e.getContents().ops)),setTimeout((function(){f.dispatch(b(""))}),4e3),f.dispatch(b("Your changes have been saved!")),O();break}}}(t,n);else for(var c=0;c<1e4;c++)if(!localStorage.getItem(c)){localStorage.setItem(c,JSON.stringify(t.getContents().ops)),setTimeout((function(){f.dispatch(b(""))}),4e3),f.dispatch(b("Your note has been saved!")),O();break}}function O(){var e=Object.keys(localStorage).reduce((function(e,t){return[].concat(Object(s.a)(e),[{id:t,note:localStorage[t]}])}),[]);p(e),f.dispatch(j(e))}function v(e,t){f.dispatch(function(e,t){return{type:"SET_CURRENT_NOTE",payload:{selectedNote:e,index:t}}}(e,t)),function(e){var t=function(){var e=Object.keys(localStorage).reduce((function(e,t){return[].concat(Object(s.a)(e),[{id:t,note:localStorage[t]}])}),[]);return p(e),e}().filter((function(t){return t.id!==e}));f.dispatch(j(t))}(t)}function p(e){return e.sort((function(e,t){return e.id-t.id}))}function S(e){var t=JSON.parse(e)[0].insert;return t.split(" ",10).join(" ")+(t.length>20?"...":" ")}var g=[[{font:[]},{size:[]}],["bold","italic","underline"],[{color:[]},{background:[]}],[{header:[1,2,3,4,5]},"code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["clean"]],E=n(1);var N=function(){var e=Object(a.b)((function(e){return e.SetCurrentNote.selectedNote})),t=Object(a.b)((function(e){return e.SetCurrentNote.index})),n=Object(a.b)((function(e){return e.SetNewQuill})),r=Object(a.b)((function(e){return e.SetMessage})),o=Object(a.b)((function(e){return e.SetQuill})),s=Object(c.useState)(!0),l=Object(i.a)(s,2),d=l[0],b=l[1],j=Object(c.useCallback)((function(e){if(null!=e){e.innerHTML="";var t=document.createElement("div");e.append(t);var n=new u(t,{modules:{toolbar:g},theme:"snow"});f.dispatch(function(e){return{type:"SET_QUILL",payload:e}}(n))}}),[n]);return Object(c.useEffect)((function(){null!=o&&o.on("text-change",(function(e){var t=o.getLength();b(t-1==0)}))}),[o]),Object(c.useEffect)((function(){null!=o&&(window.scroll(0,0),o.setContents(JSON.parse(e),"user"))}),[e]),Object(E.jsxs)(E.Fragment,{children:[r&&Object(E.jsx)("div",{className:"message",children:r}),Object(E.jsx)("div",{className:"container",ref:j}),Object(E.jsx)("button",{className:"save",onClick:function(){return h(e,o,t)},disabled:d,children:"Save"})]})},y=(n(73),n(56)),_=n.n(y);var m=function(){var e=Object(a.b)((function(e){return e.NotesReducer})),t=localStorage.length;return Object(c.useEffect)((function(){O()}),[]),Object(E.jsxs)("div",{className:"notes",children:[Object(E.jsx)("div",{className:"notes_header",children:Object(E.jsxs)("p",{children:["You have ",t," notes"]})}),Object(E.jsx)("div",{children:e.map((function(e){return Object(E.jsx)("div",{onClick:function(){return v(e.note,e.id)},children:Object(E.jsx)(_.a,{className:"note",value:S(e.note),readOnly:!0})},e.id)}))})]})};var T=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("div",{className:"app",children:[Object(E.jsx)(m,{}),Object(E.jsx)(N,{})]})})};function x(){o.a.render(Object(E.jsx)(a.a,{store:f,children:Object(E.jsx)(T,{})}),document.getElementById("root"))}x(),f.subscribe(x)},65:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.1f06ed6a.chunk.js.map