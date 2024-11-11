import{_ as w,K as v,X as g,f as y,o as r,c as o,a as t,F as x,b as k,t as i,h as u,I as m,H as b,Y as R,Z as I,z as C,$ as P}from"./index-eedfe929.js";const T={name:"RecordView",data(){return{record:{},table_id:"",table_name:""}},computed:{items(){const e=[],l=this.$route.matched;let a=0;return e.push({label:"Home",route:"/",order:0}),e.push({label:"Tables",route:"/tables",order:1}),e.push({label:"Table",route:`/tables/${this.table_id}`,order:2}),l.forEach(d=>{d.name!=="Home"&&e.push({label:d.name,route:d,order:a++}),d.params&&d.params.id&&e.push({label:d.name+"-"+d.params.id,route:d,order:a++})}),e}},created(){this.fetchRecord()},methods:{isNull(e){return e===null},goToRecord(e){this.$router.push({name:"Record",params:{id:e}})},openJsonModal(e,l){const a=v();a.$patch({json:e}),a.$patch({title:l})},startsWithPbkdf2(e){return typeof e=="string"&&e.startsWith("$pbkdf2")},isTimestamp(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|(\+\d{2}:\d{2}))$/.test(e)},isUUID(e){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[14][0-9a-fA-F]{3}-[89ab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(e)},isObject(e){return typeof e=="object"&&e!==null},fetchRecord(){const l={id:this.$route.params.id};g(l).then(a=>{this.record=a.data,this.table_id=a.id,this.table_name=a.name})}}},n=e=>(R("data-v-6bc4287d"),e=e(),I(),e),D={class:"w-screen"},B=n(()=>t("div",{class:"hidden sm:dark:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-30 pointer-events-none z-3 w-screen overflow-hidden","aria-hidden":"true"},[t("img",{src:C,class:"max-w-none",width:"1440",height:"450",alt:"Page Illustration"})],-1)),F={class:"pl-5 w-screen flex px-5 py-5","aria-label":"Breadcrumb"},V={class:"inline-flex items-center space-x-1 md:space-x-3"},j=n(()=>t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1)),A=n(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1)),$={class:"dark:text-pickled-400 text-xl pb-0 mt-5 pl-5"},z={class:"row w-screen"},N={class:"pl-0 overflow-x-auto h-auto w-full"},S={class:"text-sm text-left text-pickled-500 dark:text-pickled-400 m-5 w-screen table-width-less-aside"},E=n(()=>t("thead",{class:"text-xs text-pickled-500 uppercase bg-rock-blue-200 dark:bg-pickled-900 dark:text-pickled-200 sticky table-sticky z-20"},[t("tr",{class:""},[t("th",{class:"px-6 py-3"},"Prameters"),t("th",{class:"px-6 py-3"},"Values")])],-1)),H={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-pickled-700 dark:text-pickled-200"},U={class:"px-6 py-4 whitespace-wrap text-sm text-pickled-500 dark:text-pickled-400 text-ellipsis"},J={key:0,class:"flex items-center space-x-2"},L=["onClick"],M=["onClick"],O={class:"flex bg-surf-400 dark:bg-pickled-700 text-pickled-800 dark:text-white rounded-full px-4 py-2 max-w-[140px] md:max-w-[310px] overflow-clip"},W={class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},Z={key:2,class:"hover:text-rock-blue-500 cursor-pointer"},K=n(()=>t("div",{class:"flex bg-bright-sun-200 dark:bg-bright-sun-400 text-pickled-600 dark:text-pickled-800 rounded-full px-4 py-2 max-w-[140px] overflow-clip"},[t("span",{class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"}," ***REDACTED*** ")],-1)),X=[K],Y={key:3},q={key:4,class:"hover:text-rock-blue-500 cursor-pointer"},G=n(()=>t("div",null,[t("span",null," -- ")],-1)),Q=[G],ee={key:5,class:"text-pickled-600 dark:text-pickled-300"},te=n(()=>t("div",{class:"hidden sm:dark:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-30 pointer-events-none z-3 w-screen overflow-hidden","aria-hidden":"true"},[t("img",{src:P,class:"max-w-none w-full",width:"1440",height:"427",alt:"Page Illustration 02"})],-1));function se(e,l,a,d,h,c){const _=y("router-link");return r(),o("div",D,[B,t("nav",F,[t("ol",V,[(r(!0),o(x,null,k(c.items,s=>(r(),o("li",{class:"inline-flex items-center",key:s.order},[s.label==="Home"?(r(),u(_,{key:0,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:m(()=>[j,b(" "+i(s.label),1)]),_:2},1032,["to"])):(r(),u(_,{key:1,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:m(()=>[A,b(" "+i(s.label),1)]),_:2},1032,["to"]))]))),128))])]),t("h1",$," Record: "+i(h.record.id),1),t("div",z,[t("div",N,[t("table",S,[E,t("tbody",null,[(r(!0),o(x,null,k(h.record,(s,p)=>(r(),o("tr",{class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700",key:p},[t("td",H,i(p),1),t("td",U,[c.isObject(s)?(r(),o("div",J,[t("div",{onClick:f=>c.openJsonModal(s,p),class:"bg-rock-blue-400 dark:bg-pickled-900 dark:border-rock-blue-900 text-pickled-800 dark:text-pickled-200 px-4 py-2 rounded-full text-xs"}," Object... ",8,L)])):c.isUUID(s)?(r(),o("div",{key:1,class:"hover:text-rock-blue-500 cursor-pointer",onClick:f=>c.goToRecord(s)},[t("div",O,[t("span",W," ID - "+i(s),1)])],8,M)):c.startsWithPbkdf2(s)?(r(),o("div",Z,X)):c.isTimestamp(s)?(r(),o("div",Y,i(new Date(s).toLocaleString()),1)):c.isNull(s)?(r(),o("div",q,Q)):(r(),o("div",ee,i(s),1))])]))),128))])])])]),te])}const oe=w(T,[["render",se],["__scopeId","data-v-6bc4287d"]]);export{oe as default};
