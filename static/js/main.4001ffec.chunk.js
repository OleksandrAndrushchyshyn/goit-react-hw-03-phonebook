(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=(n(15),n(10)),s=n(2),u=n(3),l=n(5),d=n(4),b=(n(16),n(20)),m=n(9),h=n.n(m),j=n(0);function f(t){var e=t.contact,n=t.onDelete;return Object(j.jsxs)("li",{children:[e.name,": ",e.number,Object(j.jsx)("button",{className:h.a.btn,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})}function p(t){var e=t.contacts,n=t.onDelete;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Contacts"}),Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)(f,{contact:t,onDelete:n},t.id)}))})]})}var O=n(7),C=n.n(O),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputNameChange=function(e){t.setState({name:e.currentTarget.value})},t.handleInputNumberChange=function(e){t.setState({number:e.currentTarget.value})},t.handleFormSubmit=function(e){e.preventDefault(),t.props.handleSubmit({name:t.state.name,number:t.state.number})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleFormSubmit,className:C.a.form,children:[Object(j.jsx)("h3",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",onChange:this.handleInputNameChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("h3",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",onChange:this.handleInputNumberChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.a.Component),g=x;function v(t){var e=t.contact;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",onChange:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"name"})]})}var S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleSubmit=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:Object(b.a)(),name:e.name,number:e.number}])}}))},t.handleInputFilterContact=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},t.deleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e}))})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("rararad");var t=localStorage.getItem("contact"),e=JSON.parse(t);e&&(console.log("set contacts"),this.setState({contacts:e}))}},{key:"componentDidUpdate",value:function(t,e){console.log("mazefaca"),this.state.contacts!==e.contacts&&(console.log("obnovit"),localStorage.setItem("contact",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(g,{handleSubmit:this.handleSubmit}),Object(j.jsx)(v,{contact:this.handleInputFilterContact}),Object(j.jsx)(p,{contacts:this.filterContacts(this.state.contacts,this.state.filter),onDelete:this.deleteContact})]})}}]),n}(c.a.Component),y=S;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1xnKL",btn:"ContactForm_btn__3egR_"}},9:function(t,e,n){t.exports={btn:"ContactItem_btn__1oFlb"}}},[[18,1,2]]]);
//# sourceMappingURL=main.4001ffec.chunk.js.map