(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),j=n(3),o=n(5),l=n(7),d=n(8),r=n(2),h=n(10),b=n(9),m=n(0),x=function(){return Object(m.jsx)("div",{id:"header",children:Object(m.jsx)("h1",{children:"CV Application"})})},O=function(e){var t=e.form,n=e.handleChange,c=e.clear,a=e.submit;return Object(m.jsx)("div",{id:"form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("h3",{children:"Contact Information"}),Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{type:"text",name:"firstName",value:t.firstName,onChange:n}),Object(m.jsx)("label",{children:"Last Name"}),Object(m.jsx)("input",{type:"text",name:"lastName",value:t.lastName,onChange:n}),Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)("input",{type:"text",name:"email",value:t.email,onChange:n}),Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{type:"text",name:"phone",value:t.phone,onChange:n}),Object(m.jsx)("h3",{children:"Education"}),Object(m.jsx)("label",{children:"School"}),Object(m.jsx)("input",{type:"text",name:"school",value:t.school,onChange:n}),Object(m.jsx)("label",{children:"Study"}),Object(m.jsx)("input",{type:"text",name:"study",value:t.study,onChange:n}),Object(m.jsx)("label",{children:"Date"}),Object(m.jsx)("input",{type:"date",name:"schoolDate",value:t.schoolDate,onChange:n}),Object(m.jsx)("h3",{children:"Experience"}),Object(m.jsx)("label",{children:"Company"}),Object(m.jsx)("input",{type:"text",name:"company",value:t.company,onChange:n}),Object(m.jsx)("label",{children:"Position"}),Object(m.jsx)("input",{type:"text",name:"position",value:t.position,onChange:n}),Object(m.jsx)("label",{children:"Tasks"}),Object(m.jsx)("textarea",{name:"tasks",value:t.tasks,onChange:n}),Object(m.jsx)("label",{children:"Date Start"}),Object(m.jsx)("input",{type:"date",name:"companyDateStart",value:t.companyDateStart,onChange:n}),Object(m.jsx)("label",{children:"Date End"}),Object(m.jsx)("input",{type:"date",name:"companyDateEnd",value:t.companyDateEnd,onChange:n}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{class:"btn-container",children:[Object(m.jsx)("button",{class:"btn",type:"button",onClick:c,children:"Clear"}),Object(m.jsx)("button",{class:"btn",type:"button",onClick:a,children:"Submit"})]})]})})},p=function(e){var t=e.firstName,n=e.lastName,c=e.email,a=e.phone;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Contact Information"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"First Name:"}),Object(m.jsx)("div",{children:t})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Last Name:"}),Object(m.jsx)("div",{children:n})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Email:"}),Object(m.jsx)("div",{children:c})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Phone Number:"}),Object(m.jsx)("div",{children:a})]})]})},u=function(e){var t=e.school,n=e.study,c=e.schoolDate;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Education"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"School:"}),Object(m.jsx)("div",{children:t})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Study:"}),Object(m.jsx)("div",{children:n})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Date:"}),Object(m.jsx)("div",{children:c})]})]})},v=function(e){var t=e.company,n=e.position,c=e.tasks,a=e.companyDateStart,i=e.companyDateEnd,s=c.split(/\n/);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Experience"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Company:"}),Object(m.jsx)("div",{children:t})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Position:"}),Object(m.jsx)("div",{children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:"Tasks:"})}),c?Object(m.jsx)("ul",{children:s.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}))}):null,Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Date Start:"}),Object(m.jsx)("div",{children:a})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Date End:"}),Object(m.jsx)("div",{children:i})]})]})},y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).edit=function(){c.setState({showForm:!c.state.showForm})},c.handleChange=function(e){c.setState({form:Object(o.a)(Object(o.a)({},c.state.form),{},Object(j.a)({},e.target.name,e.target.value))})},c.clear=function(){c.setState({form:{firstName:"",lastName:"",email:"",phone:"",school:"",study:"",schoolDate:"",company:"",position:"",tasks:"",companyDateStart:"",companyDateEnd:""}})},c.submit=function(){var e=c.state.form;c.setState({showForm:!1,contact:{firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone},education:{school:e.school,study:e.study,schoolDate:e.schoolDate},experience:{company:e.company,position:e.position,tasks:e.tasks,companyDateStart:e.companyDateStart,companyDateEnd:e.companyDateEnd}})},c.state={showForm:!1,form:{firstName:"",lastName:"",email:"",phone:"",school:"",study:"",schoolDate:"",company:"",position:"",tasks:"",companyDateStart:"",companyDateEnd:""},contact:{firstName:"",lastName:"",email:"",phone:""},education:{school:"",study:"",schoolDate:""},experience:{company:"",position:"",tasks:"",companyDateStart:"",companyDateEnd:""}},c.edit=c.edit.bind(Object(r.a)(c)),c.handleChange=c.handleChange.bind(Object(r.a)(c)),c.clear=c.clear.bind(Object(r.a)(c)),c.submit=c.submit.bind(Object(r.a)(c)),c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showForm,n=e.form,c=this.state.contact,a=c.firstName,i=c.lastName,s=c.email,j=c.phone,o=this.state.education,l=o.school,d=o.study,r=o.schoolDate,h=this.state.experience,b=h.company,y=h.position,f=h.tasks,D=h.companyDateStart,C=h.companyDateEnd;return Object(m.jsxs)("div",{id:"container",children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{id:"main",children:[Object(m.jsxs)("div",{id:"form-container",children:[Object(m.jsx)("div",{class:"btn-container",children:Object(m.jsx)("button",{class:"btn",type:"button",onClick:this.edit,children:"Edit"})}),t?Object(m.jsx)(O,{form:n,handleChange:this.handleChange,clear:this.clear,submit:this.submit}):null]}),Object(m.jsxs)("div",{id:"cv",children:[Object(m.jsx)("div",{id:"cv-header",children:Object(m.jsx)("h1",{children:"Curriculum Vitae"})}),Object(m.jsx)(p,{firstName:a,lastName:i,email:s,phone:j}),Object(m.jsx)(u,{school:l,study:d,schoolDate:r}),Object(m.jsx)(v,{company:b,position:y,tasks:f,companyDateStart:D,companyDateEnd:C})]})]})]})}}]),n}(c.Component);n(16);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3152fe73.chunk.js.map