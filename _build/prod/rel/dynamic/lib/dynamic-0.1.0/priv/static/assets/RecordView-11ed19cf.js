import{_ as w,H as v,V as g,r as y,o as r,f as o,l as t,F as _,z as k,m as i,c as u,G as m,E as b,W as R,X as C,p as T}from"./index-09fc86a2.js";const D={name:"RecordView",data(){return{record:{},table_id:"",table_name:""}},computed:{items(){const e=[],l=this.$route.matched;let d=0;return e.push({label:"Home",route:"/",order:0}),e.push({label:"Tables",route:"/tables",order:1}),e.push({label:"Table",route:`/tables/${this.table_id}`,order:2}),l.forEach(a=>{a.name!=="Home"&&e.push({label:a.name,route:a,order:d++}),a.params&&a.params.id&&e.push({label:a.name+"-"+a.params.id,route:a,order:d++})}),e}},created(){this.fetchRecord()},methods:{isNull(e){return e===null},goToRecord(e){this.$router.push({name:"Record",params:{id:e}})},openJsonModal(e,l){const d=v();d.$patch({json:e}),d.$patch({title:l})},startsWithPbkdf2(e){return typeof e=="string"&&e.startsWith("$pbkdf2")},isTimestamp(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|(\+\d{2}:\d{2}))$/.test(e)},isUUID(e){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[14][0-9a-fA-F]{3}-[89ab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(e)},isObject(e){return typeof e=="object"&&e!==null},fetchRecord(){const l={id:this.$route.params.id};g(l).then(d=>{this.record=d.data,this.table_id=d.id,this.table_name=d.name})}}},n=e=>(R("data-v-9e55dcd0"),e=e(),C(),e),I={class:"w-screen overflow-hidden"},P=n(()=>t("div",{class:"hidden sm:dark:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-30 pointer-events-none z-3 w-screen overflow-hidden","aria-hidden":"true"},[t("img",{src:T,class:"max-w-none hidden md:block w-screen overflow-x-hidden",width:"1440",height:"450",alt:"Page Illustration"})],-1)),V={class:"pl-5 w-screen flex px-5 py-5 overflow-hidden","aria-label":"Breadcrumb"},B={class:"inline-flex items-center space-x-1 md:space-x-3"},F=n(()=>t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1)),j=n(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1)),A={class:"w-screen dark:text-pickled-400 text-xl pb-0 mt-5 pl-5"},E={class:"row w-screen overflow-hidden"},N={class:"pl-0 overflow-x-auto h-auto w-screen"},S={class:"text-sm text-left text-pickled-500 dark:text-pickled-400 m-5 w-screen table-width-less-aside"},$=n(()=>t("thead",{class:"text-xs text-pickled-500 uppercase bg-rock-blue-200 dark:bg-pickled-900 dark:text-pickled-200 sticky table-sticky z-20"},[t("tr",{class:""},[t("th",{class:"px-6 py-3"},"Prameters"),t("th",{class:"px-6 py-3"},"Values")])],-1)),z={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-pickled-700 dark:text-pickled-200"},H={class:"px-6 py-4 whitespace-wrap text-sm text-pickled-500 dark:text-pickled-400 text-ellipsis"},U={key:0,class:"flex items-center space-x-2"},W=["onClick"],J=["onClick"],L={class:"flex bg-surf-400 dark:bg-pickled-700 text-pickled-800 dark:text-white rounded-full px-4 py-2 max-w-[140px] md:max-w-[310px] overflow-clip"},M={class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},O={key:2,class:"hover:text-rock-blue-500 cursor-pointer"},G=n(()=>t("div",{class:"flex bg-bright-sun-200 dark:bg-bright-sun-400 text-pickled-600 dark:text-pickled-800 rounded-full px-4 py-2 max-w-[140px] overflow-clip"},[t("span",{class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"}," ***REDACTED*** ")],-1)),X=[G],Z={key:3},q={key:4,class:"hover:text-rock-blue-500 cursor-pointer"},K=n(()=>t("div",null,[t("span",null," -- ")],-1)),Q=[K],Y={key:5,class:"text-pickled-600 dark:text-pickled-300"};function ee(e,l,d,a,h,c){const x=y("router-link");return r(),o("div",I,[P,t("nav",V,[t("ol",B,[(r(!0),o(_,null,k(c.items,s=>(r(),o("li",{class:"inline-flex items-center",key:s.order},[s.label==="Home"?(r(),u(x,{key:0,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:m(()=>[F,b(" "+i(s.label),1)]),_:2},1032,["to"])):(r(),u(x,{key:1,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:m(()=>[j,b(" "+i(s.label),1)]),_:2},1032,["to"]))]))),128))])]),t("h1",A," Record: "+i(h.record.id),1),t("div",E,[t("div",N,[t("table",S,[$,t("tbody",null,[(r(!0),o(_,null,k(h.record,(s,p)=>(r(),o("tr",{class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700",key:p},[t("td",z,i(p),1),t("td",H,[c.isObject(s)?(r(),o("div",U,[t("div",{onClick:f=>c.openJsonModal(s,p),class:"bg-rock-blue-400 dark:bg-pickled-900 dark:border-rock-blue-900 text-pickled-800 dark:text-pickled-200 px-4 py-2 rounded-full text-xs"}," Object... ",8,W)])):c.isUUID(s)?(r(),o("div",{key:1,class:"hover:text-rock-blue-500 cursor-pointer",onClick:f=>c.goToRecord(s)},[t("div",L,[t("span",M," ID - "+i(s),1)])],8,J)):c.startsWithPbkdf2(s)?(r(),o("div",O,X)):c.isTimestamp(s)?(r(),o("div",Z,i(new Date(s).toLocaleString()),1)):c.isNull(s)?(r(),o("div",q,Q)):(r(),o("div",Y,i(s),1))])]))),128))])])])])])}const se=w(D,[["render",ee],["__scopeId","data-v-9e55dcd0"]]);export{se as default};
