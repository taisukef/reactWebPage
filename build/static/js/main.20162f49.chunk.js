(this.webpackJsonphelloworld=this.webpackJsonphelloworld||[]).push([[0],{42:function(e,t,a){e.exports=a(51)},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=(a(47),a(24)),s=a(21),c=a(25),m=a(26),u=a(91),d=a(90),p=a(86),h=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.props.handleSubmit},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement("div",{align:"right"},r.a.createElement(d.a,{label:"ToDo",input:!0,name:"todo",type:"text"}))),r.a.createElement(p.a,{item:!0,xs:6}),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement("div",{align:"right"},r.a.createElement(d.a,{label:"priority",input:!0,name:"priority",type:"number",min:"1",max:"10"}))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(u.a,{variant:"contained",color:"primary",type:"submit"},"\u78ba\u5b9a")))))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.done?"\u524a\u9664":"\u5b8c\u4e86\uff01";return r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},this.props.todo)),r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},this.props.priority," ")),r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},r.a.createElement("a",{href:"",onClick:function(t){t.preventDefault(),e.props.done?e.props.deleteTodo(e.props):e.props.setTodoStatus(e.props)}},t))))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.todos.map((function(t){return r.a.createElement(v,Object.assign({key:t.id},t,{setTodoStatus:e.props.setTodoStatus,deleteTodo:e.props.deleteTodo}))}));return r.a.createElement("ul",null,t)}}]),a}(r.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(l.a)(this,a);var r=[{id:1,todo:"web\u30a2\u30d7\u30ea\u4f5c\u6210",priority:"10",done:!1}];return(n=t.call(this,e)).state={todos:r,numberOfTodos:r.length+1,targetValue:30,nowTargetValue:0},n}return Object(s.a)(a,[{key:"handleInput",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"send",value:function(){var e=this.state,t=e.value,a=e.priority;this.setState({todo:"",priority:"",message:t,viewPriority:a})}},{key:"setTodoStatus",value:function(e){var t=this.state.todos.slice(),a=t[e.id-1];a.done=!a.done,t[e.id-1]=a,this.setState({todos:t})}}]),Object(s.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.todo.value,a=e.target.priority.value,n=this.state.todos.slice(),r=this.state.numberOfTodos;n.push({id:r,todo:t,priority:a,done:!1}),this.setState({todos:n}),this.setState({numberOfTodos:r+1}),e.target.todo.value="",e.target.priority.value=""}},{key:"resetSubmit",value:function(e){e.preventDefault(),this.setState({nowTargetValue:0})}},{key:"setTargetValue",value:function(e){e.preventDefault(),this.setState({targetValue:e.target.newTargetValue.value})}},{key:"deleteTodo",value:function(e){var t=this.state.todos.slice(),a=this.state.nowTargetValue;a+=t[e.id-1].priority-0,t.splice(e.id-1,1);for(var n=e.id-1;n<t.length;n++)t[n].id=n+1;this.setState({todos:t}),this.setState({numberOfTodos:t.length+1}),this.state.targetValue<=a&&(alert("\u76ee\u6a19\u9054\u6210\u304a\u3081\u3067\u3068\u3046\uff01\u81ea\u5206\u81ea\u8eab\u306b\u4f55\u304b\u3054\u8912\u7f8e\u3092\u3042\u3052\u307e\u3057\u3087\u3046"),a=0),this.setState({nowTargetValue:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("div",{align:"center"},r.a.createElement("h1",null,"To Do List"))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("div",{align:"center"},"\u3042\u306a\u305f\u306e\u76ee\u6a19\u5024\u306f",this.state.targetValue,"\u3067\u3059\u3002",r.a.createElement("br",null)))),r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:function(t){return e.setTargetValue(t)}},r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement("div",{align:"right"},r.a.createElement(d.a,{label:"\u76ee\u6a19\u5024\u3092\u5165\u529b",input:!0,name:"newTargetValue",type:"number"}))),r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement("div",{align:"left"},r.a.createElement(u.a,{variant:"contained",color:"primary",type:"submit"},"\u5909\u66f4"))))))),r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("div",{align:"center"},"\u73fe\u5728\u306e\u9054\u6210\u5024\u306f",this.state.nowTargetValue,"\u3067\u3059\u3002",r.a.createElement("br",null))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("form",{onSubmit:function(t){return e.resetSubmit(t)}},r.a.createElement("div",{align:"center"},r.a.createElement(u.a,{variant:"contained",color:"primary",type:"submit"},"\u30ea\u30bb\u30c3\u30c8"))))),r.a.createElement(h,{handleSubmit:this.handleSubmit.bind(this)}),r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},"Todo")),r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},"priority")),r.a.createElement(p.a,{item:!0,xs:4},r.a.createElement("div",{align:"center"},"status"))),r.a.createElement(E,{todos:this.state.todos,setTodoStatus:this.setTodoStatus.bind(this),deleteTodo:this.deleteTodo.bind(this)}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.20162f49.chunk.js.map