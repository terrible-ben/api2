import{a3 as x,aO as _,aP as L,aQ as $,a5 as r,a6 as a,ad as t,aH as u,aI as p,aB as c,aK as h,aD as g,aA as C,a4 as v,aL as D,aM as M,aN as b,a7 as V,am as w,ae as f}from"./index-fde53fab.js";const j={props:{view_id:{type:String,required:!0},encoded:{type:String,required:!1},schema:{type:String,required:!1},script:{type:String,required:!1},page:{type:Number,required:!1},page_size:{type:Number,required:!1}},computed:{isBase(){return this.checkIfBase(this.table)},items(){return[{name:"Home",route:"/",label:"Home",order:1},{name:"Tables",route:"/tables",label:"Tables",order:2},{name:"Table",route:`/tables/${this.table}`,label:"Table",order:3}]},table(){return this.$route.params.id}},data:()=>({viewName:"",columns:[],rows:[],totalEntries:0,totalPages:0,currentPage:1,pageSize:50,noData:!1}),methods:{isNull(e){return e===null},isId(e){return e==="id"},goToRecord(e){this.$router.push({name:"Record",params:{id:e}})},openJsonModal(e,s){const n=_();n.$patch({json:e}),n.$patch({title:s})},startsWithPbkdf2(e){return typeof e=="string"&&e.startsWith("$pbkdf2")},isTimestamp(e){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|(\+\d{2}:\d{2}))$/.test(e)},isUUID(e){return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[14][0-9a-fA-F]{3}-[89ab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(e)},isObject(e){return typeof e=="object"&&e!==null},getView(){const e={id:this.view_id,encoded:this.encoded,schema:this.schema,script:this.script,page:this.page,page_size:this.page_size};L(e).then(s=>{s.data&&s.data.length===0?(this.setNoDataMessage(),this.noData=!0):(console.table(s),this.columns=Object.keys(s.data[0]),this.rows=s.data,this.totalEntries=s.total_entries,this.totalPages=s.total_pages,this.currentPage=s.current_page,this.pageSize=s.page_size,this.viewName=s.name)}).catch(s=>{console.log(s),this.noData=!0})},setNoDataMessage(){$().$patch({message:"No data found",error:"No data found",status:404})}},mounted(){this.getView()}},B={class:"max-w-screen min-w-screen"},T={key:0,class:"text-sm text-left text-pickled-500 dark:text-pickled-400 m-5 w-full table-width-less-aside"},A={class:"text-xs text-pickled-500 uppercase bg-rock-blue-200 dark:bg-pickled-900 dark:text-pickled-200 sticky table-sticky z-20"},N={key:0,class:"flex items-center space-x-2"},Z=["onClick"],z=["onClick"],P={class:"flex bg-surf-400 dark:bg-pickled-700 text-pickled-800 dark:text-white rounded-full px-4 py-2 max-w-[100px] overflow-clip"},S={class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},H={key:2,class:"hover:text-rock-blue-500 cursor-pointer"},I=t("div",{class:"flex bg-bright-sun-200 dark:bg-bright-sun-400 text-pickled-600 dark:text-pickled-800 rounded-full px-4 py-2 max-w-[140px] overflow-clip"},[t("span",{class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"}," ***REDACTED*** ")],-1),q=[I],E={key:3,class:"hover:text-rock-blue-500 cursor-pointer"},F=t("div",null,[t("span",null," -- ")],-1),O=[F],R={key:4},U={key:5},J={key:1,role:"status",class:"max-w-screen mx-5 mb-5 p-4 mt-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},W=g('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6),K=[W];function Q(e,s,n,m,y,l){return r(),a("div",B,[e.noData?h("",!0):(r(),a("table",T,[t("thead",A,[t("tr",null,[(r(!0),a(u,null,p(e.columns,d=>(r(),a("th",{scope:"col",class:"px-6 py-3",key:d},c(d),1))),128))])]),t("tbody",null,[(r(!0),a(u,null,p(e.rows,d=>(r(),a("tr",{class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700",key:d},[(r(!0),a(u,null,p(e.columns,i=>(r(),a("td",{class:"px-6 py-4 max-w-sm overflow-hidden overflow-ellipsis text-pickled-800 dark:text-pickled-200",key:i},[l.isObject(d[i])?(r(),a("div",N,[t("div",{onClick:k=>l.openJsonModal(d[i],i),class:"bg-rock-blue-400 dark:bg-pickled-900 dark:border-rock-blue-900 text-pickled-800 dark:text-pickled-200 px-4 py-2 rounded-full text-xs cursor-pointer"}," Object... ",8,Z)])):l.isUUID(d[i])?(r(),a("div",{key:1,class:"hover:text-rock-blue-500 cursor-pointer",onClick:k=>l.goToRecord(d[i])},[t("div",P,[t("span",S," ID - "+c(d[i]),1)])],8,z)):l.startsWithPbkdf2(d[i])?(r(),a("div",H,q)):l.isNull(d[i])?(r(),a("div",E,O)):l.isTimestamp(d[i])?(r(),a("div",R,c(new Date(d[i]).toLocaleString()),1)):(r(),a("div",U,c(d[i]),1))]))),128))]))),128))])])),e.noData?(r(),a("div",J,K)):h("",!0)])}const G=x(j,[["render",Q]]),X={components:{ViewComponent:G},computed:{view(){return this.$route.params.id},items(){return[{name:"Home",route:"/",label:"Home",order:1},{name:"Tables",route:"/views",label:"Views",order:2},{name:"Table",route:`/views/${this.view}`,label:"View",order:3}]}},mounted(){C().getTables()}},Y={class:"w-screen"},ee={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},te={class:"inline-flex items-center space-x-1 md:space-x-3"},re=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),se=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1),ae={class:"dark:text-pickled-400 text-xl pb-0 pl-5 mt-5"},de={key:0,id:"table-search",class:"mx-5 flex items-center justify-between pt-2"},ie=t("span",{class:"sr-only opacity-5"},"Open options",-1),le=t("svg",{class:"w-2 h-2 ml-2 -mr-0 mt-1.5 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})],-1),oe={key:0,id:"dropdownAction",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow w-44 dark:bg-pickled-800 dark:divide-pickled-600 absolute"},ce={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},ne=g('<li class="flex justify-between block px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Delete</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li><li class="flex justify-between block px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Archive</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li>',2),ue={class:"flex justify-between block px-4 py-1 hover:bg-pickled-100 dark:hover:bg-pickled-600 dark:hover:text-white"},pe=t("a",{href:"#"},"Copy IDs",-1),he=t("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},null,-1),ke=t("rect",{x:"8",y:"2",width:"7",height:"4",å:"",rx:"1",ry:"1"},null,-1),be=[he,ke],ge=g('<label for="table-search" class="sr-only">Search</label><div class="relative"><div class="absolute z-10 inset-x-5 inset-y-4 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-pickled-500 dark:text-pickled-400" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"></path></svg></div><input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500" placeholder="Search for records"></div>',2);function ve(e,s,n,m,y,l){const d=v("router-link"),i=v("ViewComponent"),k=D("click-outside");return r(),a("div",Y,[t("nav",ee,[t("ol",te,[(r(!0),a(u,null,p(l.items,o=>(r(),a("li",{class:"inline-flex items-center",key:o.order},[o.name==="Home"?(r(),w(d,{key:0,to:o.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[re,b(" "+c(o.label),1)]),_:2},1032,["to"])):(r(),w(d,{key:1,to:o.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[se,b(" "+c(o.label),1)]),_:2},1032,["to"]))]))),128))])]),t("h1",ae," View: "+c(l.view),1),e.noData?h("",!0):(r(),a("div",de,[t("div",null,[M((r(),a("button",{onClick:s[0]||(s[0]=o=>e.toggleActions=!e.toggleActions),id:"dropdownActionButton",class:"w-30 inline-flex items-centerblock py-2 px-2 text-sm text-pickled-900 dark:text-pickled-200 border border-pickled-300 rounded-lg bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",type:"button"},[ie,b(" Action "),le])),[[k,()=>e.toggleActions=!1]]),e.toggleActions?(r(),a("div",oe,[t("ul",ce,[ne,t("li",ue,[pe,(r(),a("svg",{onClick:s[1]||(s[1]=o=>e.copyToClipboard(e.table.id)),"aria-hidden":"true",class:"w-4 my-1 h-4 text-pickled-500",fill:"none",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},be))])])])):h("",!0)]),ge])),V(i,{view_id:l.view,page:1,page_size:50,class:"pl-0 overflow-auto h-auto w-full"},null,8,["view_id"])])}const fe=x(X,[["render",ve]]);export{fe as default};
