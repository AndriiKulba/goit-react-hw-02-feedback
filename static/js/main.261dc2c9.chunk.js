(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,a){t.exports={title:"Notification_title__rbB2i"}},17:function(t,e,a){},18:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var s=a(1),i=a.n(s),c=a(5),n=a.n(c),r=(a(17),a(6)),o=a(7),l=a(8),d=a(12),u=a(11),b=(a(18),a(2)),j=a.n(b),h=a(0),_=function(t){var e=t.title,a=t.children;return Object(h.jsxs)("div",{children:[e&&Object(h.jsx)("h2",{children:e}),a]})};_.propType={title:j.a.string};var v=_,m=a(9),p=a.n(m),f=a(25),O=function(t){var e=t.options,a=t.onLeaveFeedback;return e.map((function(t){return Object(h.jsx)("button",{type:"button",name:t,className:p.a.button,onClick:a,children:t},Object(f.a)())}))},g=a(3),x=a.n(g),k=function(t){var e=t.good,a=t.neutral,s=t.bad,i=t.total,c=t.positivePercentage;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:x.a.statistics,children:Object(h.jsxs)("ul",{className:x.a.statistics__list,children:[Object(h.jsxs)("li",{className:x.a.statistics__item,children:["Good: ",e]}),Object(h.jsxs)("li",{className:x.a.statistics__item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:x.a.statistics__item,children:["Bad: ",s]}),Object(h.jsxs)("li",{className:x.a.statistics__item,children:["Total: ",i]}),Object(h.jsxs)("li",{className:x.a.statistics__item,children:["Positive feedback: ",c,"%"]})]})})})};k.defaultProps={good:0,neutral:0,bad:0},k.protoType={good:j.a.number,neutral:j.a.number,bad:j.a.number,total:j.a.func.isRequired,positivePercentage:j.a.func.isRequired};var N=k,y=a(10),P=a.n(y),F=function(t){var e=t.message;return Object(h.jsx)("div",{children:Object(h.jsx)("h4",{className:P.a.title,children:e})})};F.propType={message:j.a.string.isRequired};var T=F,S=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"countTotalFeedback",value:function(){var t=this.state,e=t.good,a=t.neutral;return e+t.bad+a}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state.good,e=this.countTotalFeedback();return e>0?Math.round(t/e*100):0}},{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad,i=this.countTotalFeedback();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:this.handleIncrement})}),Object(h.jsx)(v,{title:"Statistics",children:i>0?Object(h.jsx)(N,{good:e,neutral:a,bad:s,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(T,{message:"No feedback given"})})]})}}]),a}(s.Component);a(22);n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,a){t.exports={statistics:"Statistics_statistics__3BGGV",statistics__list:"Statistics_statistics__list__2NE00",statistics__item:"Statistics_statistics__item__3gIl1"}},9:function(t,e,a){t.exports={button:"Feedback_button__1RW_L"}}},[[23,1,2]]]);
//# sourceMappingURL=main.261dc2c9.chunk.js.map