var K=Object.defineProperty;var I=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var j=(t,s,l)=>s in t?K(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,w=(t,s)=>{for(var l in s||(s={}))T.call(s,l)&&j(t,l,s[l]);if(I)for(var l of I(s))J.call(s,l)&&j(t,l,s[l]);return t};import{d as Q,C as R,s as W,r as X,w as N,o as Y,a as Z,t as v,h as q,B as $,L as tt,i as B,_ as et,b as at,c as i,e as st,f as nt,g as e,j as n,k as D,l as o,m as E,n as lt,p as ot,q as dt,u as C,v as rt}from"./index.16c82373.js";var L;(function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"})(L||(L={}));function U(t,s,l,a){t(s,l),a!==void 0&&a.emit(L.ChartRendered)}function ct(t,s){t.update(),s!==void 0&&s.emit(L.ChartUpdated)}function k(t,s){t.destroy(),s!==void 0&&s.emit(L.ChartDestroyed)}function it(t,s){const l={labels:typeof t.labels=="undefined"?[]:[...t.labels],datasets:[]};return M(l,w({},t),s),l}function M(t,s,l){const a=[];t.datasets=s.datasets.map(d=>{const r=t.datasets.find(u=>u[l]===d[l]);return!r||!d.data||a.includes(r)?w({},d):(a.push(r),Object.assign(r,d),r)})}function ut(t,s,l){t.data.labels=s,l!==void 0&&l.emit(L.LabelsUpdated)}function ht(t,s){t.options=w({},s)}function _t(t,s){const l=t.datasets.map(d=>d.label),a=s.datasets.map(d=>d.label);return s.datasets.length===t.datasets.length&&l.every((d,r)=>d===a[r])}const ft="Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components",pt="Update ERROR: chart instance not found",V=(t,s,l)=>Q({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(a,d){R.register(l);const r=W(null),u=X(null);function f(c,h){if(r.value!==null&&k(v(r.value),d),u.value===null)throw new Error(ft);{const _=it(c,a.datasetIdKey),y=u.value.getContext("2d");y!==null&&(r.value=new R(y,{type:s,data:B(c)?new Proxy(_,{}):_,options:h,plugins:a.plugins}))}}function p(c,h){const _=B(c)?v(c):w({},c),y=B(h)?v(h):w({},h);if(Object.keys(y).length>0){const b=v(r.value);_t(_,y)&&b!==null?(M(b==null?void 0:b.data,_,a.datasetIdKey),_.labels!==void 0&&ut(b,_.labels,d),g()):(b!==null&&k(b,d),U(f,a.chartData,a.chartOptions,d))}else r.value!==null&&k(v(r.value),d),U(f,a.chartData,a.chartOptions,d)}function x(c){const h=v(r.value);h!==null?(ht(h,c),g()):U(f,a.chartData,a.chartOptions,d)}function g(){const c=v(r.value);c!==null?ct(c,d):console.error(pt)}return N(()=>a.chartData,(c,h)=>p(c,h),{deep:!0}),N(()=>a.chartOptions,c=>x(c),{deep:!0}),Y(()=>{"datasets"in a.chartData&&a.chartData.datasets.length>0&&U(f,a.chartData,a.chartOptions,d)}),Z(()=>{r.value!==null&&k(v(r.value),d)}),d.expose({chart:r,updateChart:g}),()=>q("div",{style:a.styles,class:a.cssClasses},[q("canvas",{id:a.chartId,width:a.width,height:a.height,ref:u})])}}),gt=V("bar-chart","bar",$),bt=V("line-chart","line",tt);const vt={components:{Bar:gt,Line:bt},name:"dashboard",setup(){const t=localStorage.getItem("vt_username"),s=t==="admin"?"\u8D85\u7EA7\u7BA1\u7406\u5458":"\u666E\u901A\u7528\u6237",l=at([{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!0},{title:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",status:!0}]),a={type:"bar",data:{labels:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],datasets:[{label:"\u5BB6\u7535",data:[234,278,270,190,230],backgroundColor:D[0]},{label:"\u767E\u8D27",data:[164,178,190,135,160],backgroundColor:D[1]},{label:"\u98DF\u54C1",data:[144,198,150,235,120],backgroundColor:D[2]}]},options:{plugins:{title:{display:!0,text:"\u6700\u8FD1\u4E00\u5468\u5404\u54C1\u7C7B\u9500\u552E\u56FE",font:{size:16}}}}},d={type:"line",data:{labels:["6\u6708","7\u6708","8\u6708","9\u6708","10\u6708"],datasets:[{label:"\u5BB6\u7535",data:[234,278,270,190,230],borderColor:D[5]},{label:"\u767E\u8D27",data:[164,178,150,135,160],borderColor:D[6]},{label:"\u98DF\u54C1",data:[74,118,200,235,90],borderColor:D[7]}]},options:{plugins:{title:{display:!0,text:"\u6700\u8FD1\u51E0\u4E2A\u6708\u5404\u54C1\u7C7B\u9500\u552E\u8D8B\u52BF\u56FE",font:{size:16}}}}};return{name:t,chart1:a,chart2:d,todoList:l,role:s}}},m=t=>(ot("data-v-5b8536c6"),t=t(),dt(),t),mt={class:"user-info"},yt=m(()=>o("img",{src:rt,class:"user-avator"},null,-1)),Ct={class:"user-info-cont"},wt={class:"user-info-name"},Dt=m(()=>o("div",{class:"user-info-list"},[C(" \u4E0A\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A "),o("span",null,"2019-11-01")],-1)),Lt=m(()=>o("div",{class:"user-info-list"},[C(" \u4E0A\u6B21\u767B\u5F55\u5730\u70B9\uFF1A "),o("span",null,"\u4E0A\u6E05")],-1)),Ot=m(()=>o("div",{class:"clearfix"},[o("span",null,"\u8BED\u8A00\u8BE6\u60C5")],-1)),St=C(" Vue "),Ut=C(" JavaScript "),kt=C(" CSS "),xt=C(" HTML "),Bt={class:"grid-content grid-con-1"},Et=m(()=>o("div",{class:"grid-cont-right"},[o("div",{class:"grid-num"},"1234"),o("div",null,"\u7528\u6237\u8BBF\u95EE\u91CF")],-1)),It={class:"grid-content grid-con-2"},jt=m(()=>o("div",{class:"grid-cont-right"},[o("div",{class:"grid-num"},"321"),o("div",null,"\u7CFB\u7EDF\u6D88\u606F")],-1)),Rt={class:"grid-content grid-con-3"},Nt=m(()=>o("div",{class:"grid-cont-right"},[o("div",{class:"grid-num"},"5000"),o("div",null,"\u6570\u91CF")],-1)),qt={class:"clearfix"},Mt=m(()=>o("span",null,"\u5F85\u529E\u4E8B\u9879",-1)),Vt=C("\u6DFB\u52A0");function zt(t,s,l,a,d,r){const u=i("el-card"),f=i("el-progress"),p=i("el-col"),x=i("UserFilled"),g=i("el-icon"),c=i("Message"),h=i("Goods"),_=i("el-row"),y=i("el-button"),b=i("el-checkbox"),O=i("el-table-column"),z=i("Edit"),A=i("Delete"),H=i("el-table"),P=i("Bar"),F=i("Line");return st(),nt("div",null,[e(_,{gutter:20},{default:n(()=>[e(p,{span:8},{default:n(()=>[e(u,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:n(()=>[o("div",mt,[yt,o("div",Ct,[o("div",wt,E(a.name),1),o("div",null,E(a.role),1)])]),Dt,Lt]),_:1}),e(u,{shadow:"hover",style:{height:"252px"}},{header:n(()=>[Ot]),default:n(()=>[St,e(f,{percentage:71.3,color:"#42b983"},null,8,["percentage"]),Ut,e(f,{percentage:24.1,color:"#f1e05a"},null,8,["percentage"]),kt,e(f,{percentage:13.7},null,8,["percentage"]),xt,e(f,{percentage:5.9,color:"#f56c6c"},null,8,["percentage"])]),_:1})]),_:1}),e(p,{span:16},{default:n(()=>[e(_,{gutter:20,class:"mgb20"},{default:n(()=>[e(p,{span:8},{default:n(()=>[e(u,{shadow:"hover","body-style":{padding:"0px"}},{default:n(()=>[o("div",Bt,[e(g,{class:"grid-con-icon"},{default:n(()=>[e(x)]),_:1}),Et])]),_:1})]),_:1}),e(p,{span:8},{default:n(()=>[e(u,{shadow:"hover","body-style":{padding:"0px"}},{default:n(()=>[o("div",It,[e(g,{class:"grid-con-icon"},{default:n(()=>[e(c)]),_:1}),jt])]),_:1})]),_:1}),e(p,{span:8},{default:n(()=>[e(u,{shadow:"hover","body-style":{padding:"0px"}},{default:n(()=>[o("div",Rt,[e(g,{class:"grid-con-icon"},{default:n(()=>[e(h)]),_:1}),Nt])]),_:1})]),_:1})]),_:1}),e(u,{shadow:"hover",style:{height:"403px"}},{header:n(()=>[o("div",qt,[Mt,e(y,{style:{float:"right",padding:"3px 10px 0"},link:""},{default:n(()=>[Vt]),_:1})])]),default:n(()=>[e(H,{"show-header":!1,data:a.todoList,style:{width:"100%"}},{default:n(()=>[e(O,{width:"40"},{default:n(S=>[e(b,{modelValue:S.row.status,"onUpdate:modelValue":G=>S.row.status=G},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(O,null,{default:n(S=>[o("div",{class:lt(["todo-item",{"todo-item-del":S.row.status}])},E(S.row.title),3)]),_:1}),e(O,{width:"40"},{default:n(()=>[e(g,null,{default:n(()=>[e(z)]),_:1})]),_:1}),e(O,{width:"40"},{default:n(()=>[e(g,null,{default:n(()=>[e(A)]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1}),e(_,{gutter:20},{default:n(()=>[e(p,{span:12},{default:n(()=>[e(u,{shadow:"hover"},{default:n(()=>[e(P,{"chart-data":a.chart1.data,"chart-options":a.chart1.options},null,8,["chart-data","chart-options"])]),_:1})]),_:1}),e(p,{span:12},{default:n(()=>[e(u,{shadow:"hover"},{default:n(()=>[e(F,{"chart-data":a.chart2.data,"chart-options":a.chart2.options},null,8,["chart-data","chart-options"])]),_:1})]),_:1})]),_:1})])}var Pt=et(vt,[["render",zt],["__scopeId","data-v-5b8536c6"]]);export{Pt as default};
