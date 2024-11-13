import{H as w}from"./HansonTable-ba5e3732.js";import{N as y,U as x,_ as L,P as u,r as p,o as d,f as c,l as r,F as C,z as A,D as T,Q as B,R as G,S as _,B as m,c as g,p as D,G as b,E as f,q as v}from"./index-8b6c92a2.js";import"./_commonjs-dynamic-modules-302442b1.js";const M=y("groups",{state:()=>({groups:[],columns:[],meta:{}}),getters:{getStructure:s=>s.groups,getGroup:s=>e=>s.groups.find(t=>t.id===e)},mutations:{setGroup(s,e){s.groups=e},addGroup(s,e){s.groups.push(e)},updateGroup(s,e){const t=s.groups.findIndex(o=>o.id===e.id);s.groups[t]=e},deleteGroup(s,e){const t=s.groups.findIndex(o=>o.id===e.id);s.groups.splice(t,1)}},actions:{sortColumns(s){this.columns=s},getGroups(s){x(s).then(e=>{this.groups=e.data;let t=Object.keys(this.groups[0]),o=[];t.forEach(l=>{if(l!=="id"&&l!=="acl"){let i={};i.name=l,i.id=l,i.checked=!0,o.push(i);for(let n=0;n<o.length;n++)o[n].id=n}}),this.columns=o,console.log(t),console.log(o),console.log(this.columns)}).catch(e=>{console.log(e)})}},persist:!0}),h=M(),S={name:"GroupsView",components:{HansonTable:w},computed:{columnsPre(){return h.$state.columns},showAll(){return this.showDeleted&&this.showArchived},showNone(){return!this.showDeleted&&!this.showArchived},upperCaseTableName(){return this.tableName.toUpperCase()},titleCase(){return s=>s.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")},requestSchema(){let s=[];return this.columns.forEach(e=>{if(e.checked){let t={};t.name=e.name,t.field=this.tableStructure.name+"."+e.name,s.push(t)}}),s},processedColumns(){let s=[];return this.columns.forEach(e=>{e.checked&&s.push(e)}),s},isBase(){return this.checkIfBase(this.table)},table(){return this.$route.params.id}},data(){return{key:0,searchTerm:"",pageNumber:1,pageSize:50,totalEntries:0,totalPages:0,currentPage:1,noData:!1,drag:!1,toggleActions:!1,toggleColumns:!1,showDeleted:!1,showArchived:!1,columns:[],groups:[]}},methods:{goToUersCreate(){this.$router.push("/groups/create")},goToTable(s){this.$router.push(`/tables/${s}/create`)},selectAllColumns(){this.columns.forEach(s=>{s.checked=!0})},unselectAll(){this.columns.forEach(s=>{s.checked=!1})},uncheckSelectAllButton(){let s=!0;this.columns.forEach(e=>{e.checked||(s=!1)}),s?this.$refs.selectAll.checked=!0:this.$refs.selectAll.checked=!1},closeActionsMenu(){this.toggleActions=!1},closeColumnsMenu(){this.toggleColumns=!1},toggleAction(){this.toggleActions=!this.toggleActions,this.toggleColumns=!1},toggleColumn(){this.toggleColumns=!this.toggleColumns,this.toggleActions=!1},toggleDeleted(){this.toggleActions=!1,this.toggleColumns=!1,this.showDeleted=!this.showDeleted,this.key++},toggleArchioved(){this.toggleActions=!1,this.toggleColumns=!1,this.showArchived=!this.showArchived,this.key++}},setup(){return{items:[{label:"Home",route:"/",order:1},{label:"Groups",route:"/groups",order:2}]}},created(){const s={page:u().query.page||1,page_size:u().query.page_size||50,table_id:u().query.table_id||null,record_id:u().query.record_id||null,search:u().query.search||null};h.getGroups(s),this.groups=h.$state.groups,this.columns=this.columnsPre}},V={class:"w-screen"},j={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},q={class:"inline-flex items-center space-x-1 md:space-x-3"},z={key:0,id:"table-search",class:"flex justify-start pt-2 overflow-x-scroll sm:overflow-x-visible"},E={class:"flex"},F=["disabled"],H={key:1,role:"status",class:"max-w-screen mx-5 mb-5 p-4 mt-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"};function N(s,e,t,o,l,i){const n=p("router-link"),k=p("HansonTable");return d(),c("div",V,[r("nav",j,[r("ol",q,[(d(!0),c(C,null,A(o.items,a=>(d(),c("li",{class:"inline-flex items-center",key:a.order},[a.label==="Home"?(d(),g(n,{key:0,to:a.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:b(()=>[e[3]||(e[3]=r("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1)),f(" "+v(a.label),1)]),_:2},1032,["to"])):(d(),g(n,{key:1,to:a.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:b(()=>[e[4]||(e[4]=r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[r("polyline",{points:"9 18 15 12 9 6"})],-1)),f(" "+v(a.label),1)]),_:2},1032,["to"]))]))),128))])]),e[10]||(e[10]=r("h1",{class:"dark:text-pickled-400 text-xl pl-5"},"Groups",-1)),l.noData?m("",!0):(d(),c("div",z,[r("div",E,[e[5]||(e[5]=r("label",{for:"table-search",class:"sr-only"},"Search",-1)),e[6]||(e[6]=r("div",{class:"z-10 left-0 flex items-center pl-1 pointer-events-none translate-x-8"},[r("svg",{class:"w-4 h-4 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1)),T(r("input",{onUpdate:e[0]||(e[0]=a=>l.key++),type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>l.searchTerm=a),id:"table-search-groups",class:"block p-0 pl-10 text-xs text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",placeholder:"Filter by term"},null,544),[[B,l.searchTerm]])]),r("button",{disabled:s.isBaseTable,class:G([s.isBaseTable?"cursor-not-allowed":"","p-0 w-10 h-10 mt-0.5 ml-3 aspect-square bg-rock-blue-700 rounded hover:bg-rock-blue-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"]),style:_(s.isBaseTable?"opacity: 0.3":""),onClick:e[2]||(e[2]=(...a)=>i.goToUersCreate&&i.goToUersCreate(...a))},e[7]||(e[7]=[r("svg",{viewBox:"0 0 20 20","enable-background":"new 0 0 20 20",class:"w-6 h-6 inline-block"},[r("path",{fill:"#FFFFFF",d:`M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z`})],-1)]),14,F),e[8]||(e[8]=r("button",{class:"w-10 h-10 mt-0.5 ml-3 aspect-square rounded active:shadow-lg dark:hover:bg-pickled-900 mouse shadow transition ease-in duration-200 focus:outline-none border border-pickled-300 dark:border-pickled-600"},[r("svg",{class:"w-5 h-5 inline-block",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1))])),(d(),g(k,{key:l.key,class:"pl-0 overflow-auto h-auto w-full",columns:i.processedColumns,search:l.searchTerm,table_data:l.groups},null,8,["columns","search","table_data"])),l.noData?(d(),c("div",H,e[9]||(e[9]=[D('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6)]))):m("",!0)])}const I=L(S,[["render",N]]);export{I as default};
