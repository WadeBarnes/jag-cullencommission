(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),s=n(4),l=n(2),c="font-weight: bold; color: orange",h="font-weight: bold; color: green";function u(e,t){console.log("%c"+e,t)}var p={isInit:!1,isDev:!1,hearings:null};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=Object.assign({},e);switch(t.type){case"INIT_APP":if(void 0===t.hearingsData.hearings)u("NO HEARINGS SCHEDULED",c),n.hearings=new Map;else{var a=new Map(t.hearingsData.hearings);n.hearings=new Map;var r=!0,i=!1,o=void 0;try{for(var s,l=a.entries()[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var d=s.value,v=d[1];v.themes=new Map(v.themes),n.hearings.set(d[0],v)}}catch(f){i=!0,o=f}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}}n.isInit=!0,n.isDev=t.isDev,u("EDITOR INITIALIZED",h)}return n},v=n(5),f=n(6),m=n(8),g=n(7),y=n(9),w=n(24),b=n.n(w),E=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={display:!1},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"handleMainDisplay",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){var e=0;this.state.display&&(e="auto");var t=[],n=!0,a=!1,i=void 0;try{for(var o,s=this.props.hearings[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;void 0!==l.videos&&l.videos.length>0&&t.push(r.a.createElement("p",{key:l.timeStamp,className:"ArchiveVideoTitle"},new Date(l.timeStamp).format("F d")," - ",r.a.createElement("a",{href:"/schedule/?h="+l.timeStamp+"&v=t",className:"ArchiveVideoLink"},"Watch Video")))}}catch(c){a=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r.a.createElement("div",{className:"WebArchiveMonthDiv",onClick:this.handleMainDisplay.bind(this)},r.a.createElement("h3",null,this.props.name),r.a.createElement(b.a,{duration:500,height:e},t))}}]),t}(r.a.Component),D=Object(l.b)((function(e){return{}}),(function(e){return{}}))(E);var O=n(36),I=function(e){function t(){return Object(v.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"getUrlParameter",value:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}},{key:"render",value:function(){var e=this;if(this.props.isInit){var t="";this.props.isDev&&(t=r.a.createElement("h2",{style:{borderRadius:"5px",fontWeight:"800",fontSize:"4.7rem",textAlign:"center",textTransform:"uppercase",color:"white",backgroundColor:"#6200ffc4",padding:"10px",position:"absolute",top:"150px",left:"50%",textShadow:"0px 0px 20px black",transform:"rotate(10deg) translate(-35%, 0%)",width:"850px"}},"TEST VERSION"));var n=new Map,a=!0,i=!1,o=void 0;try{for(var s,l=this.props.hearings.entries()[Symbol.iterator]();!(a=(s=l.next()).done);a=!0){var c=s.value,h=new Date(c[0]).format("F");!1===n.has(h)&&n.set(h,[]),n.get(h).push(c[1])}}catch(b){i=!0,o=b}finally{try{a||null==l.return||l.return()}finally{if(i)throw o}}var u=[],p=!0,d=!1,v=void 0;try{for(var f,m=n.entries()[Symbol.iterator]();!(p=(f=m.next()).done);p=!0){var g=f.value;u.push(r.a.createElement(D,{name:g[0],hearings:g[1]}))}}catch(b){d=!0,v=b}finally{try{p||null==m.return||m.return()}finally{if(d)throw v}}return r.a.createElement("div",{id:"App"},t,u)}var y=this.getUrlParameter("dev"),w="/data/hearings.json";return"t"===y&&(w="/dataDev/hearings.json"),O.get(w).then((function(t){e.props.initApp(t.data,y)})),r.a.createElement("div",{id:"App"})}}]),t}(r.a.Component),S=Object(l.b)((function(e){return{isInit:e.isInit,isDev:e.isDev,hearings:e.hearings}}),(function(e){return{initApp:function(t,n){e(function(e,t){return{type:"INIT_APP",hearingsData:e,isDev:t}}(t,n))}}}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(s.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(S,null)),document.getElementById("root")),document.getElementById("IEMessage").style.display="none","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.80b5207f.chunk.js.map