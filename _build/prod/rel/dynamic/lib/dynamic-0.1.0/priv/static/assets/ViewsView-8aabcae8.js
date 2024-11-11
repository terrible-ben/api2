import{a3 as _,aE as C,aF as $,aG as M,a4 as b,a5 as o,a6 as d,ad as e,aH as v,aI as y,aB as n,aJ as m,aK as c,a7 as L,aD as w,az as V,aA as j,aL as B,aM as T,aN as g,am as x,ae as f}from"./index-23c7cbd5.js";const D={data(){return{views:[],theme:{background:"#333",color:"#fff"},alwaysOpen:!0,activeClasses:"bg-pickled-100 dark:bg-pickled-800 text-pickled-900 dark:text-white",inactiveClasses:"text-pickled-500 dark:text-pickled-400",accordian1:!0,accordian2:!0,accordian3:!0,noData:!1}},methods:{isTimestamp(t){return/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|(\+\d{2}:\d{2}))$/.test(t)},copyToClipboard(t){const s=document.createElement("textarea");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),C().$patch({message:"Copied to clipboard"}),this.showCopy=!1,this.tooltip.id=""},onOpen(t){this.views.forEach(s=>{s.id!==t.id&&(s.schemaOpen=!1)}),console.log("accordion item has been shown"),console.log(t.id),setTimeout(()=>{t.schemaOpen=!0},100)},onClose:t=>{console.log("accordion item has been hidden"),console.log(t)},onToggle:t=>{console.log("accordion item has been toggled"),console.log(t)},getViewStructure(){this.loading=!0,$().then(t=>{this.views=t,this.loading=!1,t.length===0&&(this.noData=!0,this.setNoDataMessage("No views found"))}).catch(t=>{this.noData=!0,console.log(t)})},goToView(t){this.$router.push({name:"View",params:{id:t}})},setViewColsFromSchema(t){return Object.keys(t[0])}},components:{JsonViewer:M},mounted(){this.getViewStructure();const t=this.views;t.forEach(s=>{s.schemaOpen=!1,s.relationsOpen=!1}),this.views=t}},Z={class:"w-full min-w-full"},N={key:0,class:"text-sm text-left text-pickled-500 dark:text-pickled-400 m-5 table-width-less-aside"},O=e("thead",{class:"text-xs text-pickled-500 uppercase bg-rock-blue-200 dark:bg-pickled-900 dark:text-pickled-200 sticky table-sticky z-20"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," ID "),e("th",{scope:"col",class:"px-6 py-3"}," Name "),e("th",{scope:"col",class:"px-6 py-3"}," Inserted at "),e("th",{scope:"col",class:"px-6 py-3"}," Updated at ")])],-1),S={class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700"},A={scope:"row",class:"flex px-6 py-4 font-medium text-pickled-900 whitespace-nowrap dark:text-white"},H=["onClick"],I={class:"flex bg-bali-hai-200 dark:bg-bali-hai-700 text-pickled-800 dark:text-white rounded-full px-4 py-2 min-w-[100px] max-w-[200px] overflow-clip cursor-pointer"},E={class:"text-xs overflow-hidden whitespace-nowrap overflow-ellipsis"},z={class:"mt-1"},F=["disabled","onClick"],J=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right text-pickled-900 dark:text-white"},[e("polyline",{points:"15 10 20 15 15 20"}),e("path",{d:"M4 4v7a4 4 0 0 0 4 4h12"})],-1),P=[J],R=["onClick"],G=e("svg",{"aria-hidden":"true",class:"feather feather-chevron-right text-pickled-900 dark:text-white",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),e("rect",{x:"8",y:"2",width:"7",height:"4",å:"",rx:"1",ry:"1"})],-1),K=[G],U={class:"px-6 py-4 text-pickled-800 dark:text-pickled-200"},q={class:"px-6 py-4 text-pickled-800 dark:text-pickled-200"},Q={key:0},W={class:"px-6 py-4 text-pickled-800 dark:text-pickled-200"},X={key:0},Y={key:0,class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700 text-pickled-800 dark:text-pickled-200"},ee={colspan:8},te={class:"grid grid-flow-col"},se={class:"border-r dark:border-pickled-700 border-rock-blue-400"},oe=e("h3",{class:"m-4 relative"},"Schema",-1),re={key:0},de=e("div",{id:"mermaidContainer",class:"w-full h-full mermaid"},null,-1),le=e("h3",{class:"m-4 relative"},"Relations",-1),ie=["innerHTML"],ae={key:1,class:"mx-auto my-auto"},ce={key:1,role:"status",class:"max-w-screen mx-5 mb-5 p-4 space-y-4 border mt-10 border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},ne=w('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6),he=[ne];function ue(t,s,h,l,u,a){const p=b("json-viewer");return o(),d("div",Z,[!t.loading&&!u.noData?(o(),d("table",N,[O,e("tbody",null,[(o(!0),d(v,null,y(u.views,r=>(o(),d(v,{key:r.id},[e("tr",S,[e("td",A,[e("div",{class:"hover:text-rock-blue-500 cursor-pointer",onClick:k=>a.goToView(r.id)},[e("div",I,[e("span",E," ID - "+n(r.id),1)])],8,H),e("div",z,[e("button",{disabled:r.schemaOpen,onClick:m(k=>a.onOpen(r),["prevent"]),class:"ml-2 justify-end text-white text-xs bg-rock-blue-300 dark:bg-rock-blue-700 hover:bg-rock-blue-400 focus:ring-4 focus:outline-none focus:ring-rock-blue-300 font-small rounded-lg px-1 py-1 text-center dark:hover:bg-rock-blue-600 dark:focus:ring-rock-blue-800 disabled:bg-rock-blue-500 disabled:hover:bg-rock-blue-500"},P,8,F),e("button",{onClick:m(k=>a.copyToClipboard(r.id),["prevent"]),class:"ml-2 justify-end text-white text-xs bg-rock-blue-300 dark:bg-rock-blue-700 hover:bg-rock-blue-400 focus:ring-4 focus:outline-none focus:ring-rock-blue-300 font-small rounded-lg px-1 py-1 text-center dark:hover:bg-rock-blue-600 dark:focus:ring-rock-blue-800 disabled:bg-rock-blue-500 disabled:hover:bg-rock-blue-500"},K,8,R)])]),e("td",U,n(r.name),1),e("td",q,[a.isTimestamp(r.inserted_at)?(o(),d("div",Q,n(new Date(r.inserted_at).toLocaleString()),1)):c("",!0)]),e("td",W,[a.isTimestamp(r.updated_at)?(o(),d("div",X,n(new Date(r.updated_at).toLocaleString()),1)):c("",!0)])]),r.schemaOpen?(o(),d("tr",Y,[e("td",ee,[e("div",te,[e("div",se,[oe,L(p,{value:r.schema,"expand-depth":5,sort:"",theme:u.theme},null,8,["value","theme"])]),r.relations?(o(),d("div",re,[de,le,e("div",{innerHTML:t.svg,id:"mcontain",class:"w-full h-full mermaid"},null,8,ie)])):(o(),d("div",ae,"No relations"))])])])):c("",!0)],64))),128))])])):c("",!0),u.noData?(o(),d("div",ce,he)):c("",!0)])}const pe=_(D,[["render",ue]]);const ke={components:{Views:pe},computed:{items(){const t=[],s=this.$route.matched;let h=0;return t.push({label:"Home",route:"/",order:0}),s.forEach(l=>{l.name!=="Home"&&t.push({label:l.name,route:l,order:h++}),l.params&&l.params.id&&t.push({label:l.name+"-"+l.params.id,route:l,order:h++})}),t}},data(){return{modal:null,toggleModal:!1,toggleMenu:!1,profileMenu:!1}},methods:{logout(){V().$patch({token:null,isLoggedIn:!1}),this.$router.push({name:"Login"})}},mounted(){j().getTables()}},ge={class:"w-screen"},be={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},ve={class:"inline-flex items-center space-x-1 md:space-x-3"},we=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[e("polyline",{points:"9 18 15 12 9 6"})],-1),xe=e("h1",{class:"dark:text-pickled-400 text-xl pl-5"},"Views",-1),fe={id:"table-search",class:"mx-5 flex items-center justify-between pt-2"},_e=e("span",{class:"sr-only opacity-5"},"Open options",-1),ye=e("svg",{class:"w-2 h-2 ml-2 -mr-0 mt-1.5 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})],-1),Le={key:0,id:"dropdownAction",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow w-44 dark:bg-pickled-800 dark:divide-pickled-600 absolute"},Ce={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},$e=w('<li class="flex justify-between block px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Delete</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li><li class="flex justify-between block px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Archive</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li>',2),Me={class:"flex justify-between block px-4 py-1 hover:bg-pickled-100 dark:hover:bg-pickled-600 dark:hover:text-white"},Ve=e("a",{href:"#"},"Copy IDs",-1),je=e("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},null,-1),Be=e("rect",{x:"8",y:"2",width:"7",height:"4",å:"",rx:"1",ry:"1"},null,-1),Te=[je,Be],De=w('<label for="table-search" class="sr-only">Search</label><div class="relative"><div class="absolute z-10 inset-x-5 inset-y-4 left-0 flex items-center pl-3 pointer-events-none"><svg class="w-4 h-4 text-pickled-500 dark:text-pickled-400" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"></path></svg></div><input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500" placeholder="Search for records"></div>',2);function Ze(t,s,h,l,u,a){const p=b("router-link"),r=b("Views"),k=B("click-outside");return o(),d("div",ge,[e("nav",be,[e("ol",ve,[(o(!0),d(v,null,y(a.items,i=>(o(),d("li",{class:"inline-flex items-center",key:i.order},[i.label==="Home"?(o(),x(p,{key:0,to:i.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[we,g(" "+n(i.label),1)]),_:2},1032,["to"])):(o(),x(p,{key:1,to:i.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[me,g(" "+n(i.label),1)]),_:2},1032,["to"]))]))),128))])]),xe,e("div",fe,[e("div",null,[T((o(),d("button",{onClick:s[0]||(s[0]=i=>t.toggleActions=!t.toggleActions),id:"dropdownActionButton",class:"w-30 inline-flex items-centerblock py-2 px-2 text-sm text-pickled-900 dark:text-pickled-200 border border-pickled-300 rounded-lg bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",type:"button"},[_e,g(" Action "),ye])),[[k,()=>t.toggleActions=!1]]),t.toggleActions?(o(),d("div",Le,[e("ul",Ce,[$e,e("li",Me,[Ve,(o(),d("svg",{onClick:s[1]||(s[1]=i=>t.copyToClipboard(t.table.id)),"aria-hidden":"true",class:"w-4 my-1 h-4 text-pickled-500",fill:"none",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Te))])])])):c("",!0)]),De]),L(r,{class:"pl-0 overflow-x-auto overflow-y-clip h-auto w-full"})])}const Oe=_(ke,[["render",Ze]]);export{Oe as default};
