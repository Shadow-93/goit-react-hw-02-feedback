(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__1oj6W"}},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),i=a(5),l=a(6),s=a(7),u=a(10),m=a(9),b=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",null,t),a)},d=a(2),f=a.n(d),v=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",{className:f.a.box},t.map((function(e){return c.a.createElement("button",{className:f.a.button,name:e,key:e,onClick:a},e)})))},k=a(8),p=a.n(k),E=function(e){var t=e.title;return c.a.createElement("h2",{className:p.a.title},t)},h=a(1),g=a.n(h),N=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,r=e.positivePercentage;return o?c.a.createElement("div",null,c.a.createElement("ul",{className:g.a.list},c.a.createElement("li",{className:g.a.listItem},"Good: ".concat(t)),c.a.createElement("li",{className:g.a.listItem},"Neutral: ".concat(a)),c.a.createElement("li",{className:g.a.listItem},"Bad: ".concat(n)),c.a.createElement("li",{className:g.a.listItem},"Total: ".concat(o)),c.a.createElement("li",{className:g.a.listItem},"Positive feedback: ".concat(r,"%")))):c.a.createElement(E,{title:"No feedback given"})},_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.keys=Object.keys(e.state),e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=e.state.good;return Math.round(a/t*100)},e.increment=function(t){var a=t.target.name;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{title:"Please leave feedback"},c.a.createElement(v,{options:this.keys,onLeaveFeedback:this.increment})),c.a.createElement(b,{title:"Statistics"},c.a.createElement(N,Object.assign({},this.state,{total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}))))}}]),a}(n.Component);r.a.render(c.a.createElement(_,null),document.querySelector("#root"))},2:function(e,t,a){e.exports={box:"FeedBackOptions_box__3aKts",button:"FeedBackOptions_button__gAPFo"}},8:function(e,t,a){e.exports={title:"Notification_title__33roU"}}},[[11,1,2]]]);
//# sourceMappingURL=main.56c68a13.chunk.js.map