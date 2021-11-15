(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(15),n(10)),l=n(2),s=n(5),u=(n(16),n(17),n(7),n(8),n(0));function b(e){var t=e.onChange,n=e.labelName,a=e.value,c=e.id,r=e.type,o=e.name,i=e.pattern,l=e.title;return Object(u.jsxs)("label",{className:"label",htmlFor:c,children:[n,Object(u.jsx)("input",{className:"input",value:a,onChange:function(e){var n=e.target,a=n.name,c=n.value;t({value:c,name:a})},id:c,type:r,name:o,pattern:i,title:l,required:!0})]})}var m=function(e){var t=e.onSubmit,n=Object(s.a)(),c=Object(a.useState)(""),r=Object(l.a)(c,2),o=r[0],i=r[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),j=d[0],f=d[1],O=function(e){var t=e.name,n=e.value;switch(t){case"name":i(n);break;case"number":f(n);break;default:return}},h=function(){console.log({name:o}),i(""),f("")};return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t({name:o,number:j}),h()},children:[Object(u.jsx)(b,{labelName:"Name",value:o,onChange:O,type:"text",id:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(u.jsx)(b,{labelName:"Number",value:j,onChange:O,type:"tel",id:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(u.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})};n(19);function d(e){var t=e.contacts,n=e.onDeleteContact;return Object(u.jsx)("ul",{className:"contact__list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(u.jsxs)("li",{className:"contact__item",children:[a,": ",c,Object(u.jsx)("button",{type:"button",className:"btn",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}function j(e){var t=e.value,n=e.onChange;return Object(u.jsxs)("label",{className:"label filter__label",children:["Find contacts by name",Object(u.jsx)("input",{className:"input",value:t,onChange:n,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}var f=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var O=function(){var e,t=Object(a.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:f),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),b=Object(l.a)(o,2),O=b[0],h=b[1];return Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"title",children:"Phonebook"}),Object(u.jsx)(m,{onSubmit:function(e){var t=e.name,n=e.number,a=t;if(console.log(c),console.log(a),c.some((function(e){return e.name===a})))alert("".concat(t," is already in contact"));else{var o={id:Object(s.a)(),name:t,number:n};console.log(o),r((function(e){return[].concat(Object(i.a)(e),[o])}))}}}),Object(u.jsx)("h2",{className:"title",children:"Contacts"}),Object(u.jsx)(j,{value:O,onChange:function(e){h(e.target.value)}}),Object(u.jsx)(d,{contacts:function(){var e=O.toLowerCase();return c.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4a2ff486.chunk.js.map