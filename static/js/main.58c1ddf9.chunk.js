(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),s=n(7),r=n(4),a=n(5),l=n(9),d=n(8),i=n(1),u=n.n(i),b=(n(14),n(6)),h=n.n(b),f=(n(15),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.title=function(){var t,n=e.state.selectedGoods;if(0===n.length&&(t="No goods selected"),1===n.length&&(t="".concat(n[0]," is selected")),2===n.length&&(t="".concat(n[0]," and ").concat(n[1]," are selected")),n.length>=2){var c=n.slice(0,n.length);t="".concat(c," are selected")}return t},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeItem=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearGood=function(){e.setState({selectedGoods:[]})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("h1",{className:".container-xxl d-flex justify-content-center",children:[this.title(),t.length>=1&&Object(f.jsx)("button",{className:"rounded border-0 btn btn-success",type:"button",onClick:function(){return e.clearGood()},children:"Clear items"})]}),Object(f.jsx)("ul",{className:"row row-cols-auto d-flex justify-content-center",children:j.map((function(n){return Object(f.jsxs)("li",{className:h()("w-auto p-3","rounded",{"bg-success":t.includes(n)}),children:[n,Object(f.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.state.selectedGoods.includes(n)?e.removeItem(n):e.addGood(n)},children:t.includes(n)?"Remove":"Select"})]},n)}))})]})}}]),n}(u.a.Component);o.a.render(Object(f.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.58c1ddf9.chunk.js.map