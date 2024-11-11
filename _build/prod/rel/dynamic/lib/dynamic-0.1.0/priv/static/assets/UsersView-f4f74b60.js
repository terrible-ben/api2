import{H as _}from"./HansonTable-18b65375.js";import{aS as L,aT as q,a3 as C,aU as u,a4 as b,a5 as i,a6 as c,ad as t,aH as A,aI as M,aM as x,aV as Z,aW as B,aX as U,aK as h,aN as k,a7 as V,ae as p,am as m,aD as f,aB as v,aY as j}from"./index-c8c9659d.js";import"./_commonjs-dynamic-modules-302442b1.js";const S=L("users",{state:()=>({users:[],columns:[]}),getters:{getStructure:s=>s.users,getTable:s=>e=>s.users.find(o=>o.id===e)},mutations:{setTables(s,e){s.users=e},addTable(s,e){s.users.push(e)},updateTable(s,e){const o=s.users.findIndex(d=>d.id===e.id);s.users[o]=e},deleteTable(s,e){const o=s.users.findIndex(d=>d.id===e.id);s.users.splice(o,1)}},actions:{sortColumns(s){this.columns=s},getUsers(s){q(s).then(e=>{this.users=e.data;let o=Object.keys(this.users[0]),d=[];o.forEach(r=>{if(r!=="id"&&r!=="acl"){let a={};a.name=r,a.id=r,a.checked=!0,d.push(a);for(let n=0;n<d.length;n++)d[n].id=n}}),this.columns=d,console.log(o),console.log(d),console.log(this.columns)}).catch(e=>{console.log(e)})}},persist:!0}),w=S(),D={name:"UsersView",components:{HansonTable:_},computed:{columnsPre(){return w.$state.columns},showAll(){return this.showDeleted&&this.showArchived},showNone(){return!this.showDeleted&&!this.showArchived},upperCaseTableName(){return this.tableName.toUpperCase()},titleCase(){return s=>s.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")},requestSchema(){let s=[];return this.columns.forEach(e=>{if(e.checked){let o={};o.name=e.name,o.field=this.tableStructure.name+"."+e.name,s.push(o)}}),s},processedColumns(){let s=[];return this.columns.forEach(e=>{e.checked&&s.push(e)}),s},isBase(){return this.checkIfBase(this.table)},table(){return this.$route.params.id}},data(){return{key:0,searchTerm:"",pageNumber:1,pageSize:50,totalEntries:0,totalPages:0,currentPage:1,noData:!1,drag:!1,toggleActions:!1,toggleColumns:!1,showDeleted:!1,showArchived:!1,columns:[],users:[]}},methods:{goToUersCreate(){this.$router.push("/users/create")},goToTable(s){this.$router.push(`/tables/${s}/create`)},selectAllColumns(){this.columns.forEach(s=>{s.checked=!0})},unselectAll(){this.columns.forEach(s=>{s.checked=!1})},uncheckSelectAllButton(){let s=!0;this.columns.forEach(e=>{e.checked||(s=!1)}),s?this.$refs.selectAll.checked=!0:this.$refs.selectAll.checked=!1},closeActionsMenu(){this.toggleActions=!1},closeColumnsMenu(){this.toggleColumns=!1},toggleAction(){this.toggleActions=!this.toggleActions,this.toggleColumns=!1},toggleColumn(){this.toggleColumns=!this.toggleColumns,this.toggleActions=!1},toggleDeleted(){this.toggleActions=!1,this.toggleColumns=!1,this.showDeleted=!this.showDeleted,this.key++},toggleArchioved(){this.toggleActions=!1,this.toggleColumns=!1,this.showArchived=!this.showArchived,this.key++}},setup(){return{items:[{label:"Home",route:"/",order:1},{label:"Users",route:"/users",order:2}]}},created(){const s={page:u().query.page||1,page_size:u().query.page_size||50,table_id:u().query.table_id||null,record_id:u().query.record_id||null,search:u().query.search||null};w.getUsers(s),this.users=w.$state.users,this.columns=this.columnsPre}},H={class:"w-screen"},z={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},N={class:"inline-flex items-center space-x-1 md:space-x-3"},E=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),F=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1),I=t("h1",{class:"dark:text-pickled-400 text-xl pl-5"},"Users",-1),P={key:0,id:"table-search",class:"flex justify-start pt-2 overflow-x-scroll sm:overflow-x-visible"},K={class:"flex"},O=t("label",{for:"table-search",class:"sr-only"},"Search",-1),R=t("div",{class:"z-10 left-0 flex items-center pl-1 pointer-events-none translate-x-8"},[t("svg",{class:"w-4 h-4 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1),W=["disabled"],X=t("svg",{viewBox:"0 0 20 20","enable-background":"new 0 0 20 20",class:"w-6 h-6 inline-block"},[t("path",{fill:"#FFFFFF",d:`M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                      C15.952,9,16,9.447,16,10z`})],-1),Y=[X],G=t("button",{class:"w-10 h-10 mt-0.5 ml-3 aspect-square rounded active:shadow-lg dark:hover:bg-pickled-900 mouse shadow transition ease-in duration-200 focus:outline-none border border-pickled-300 dark:border-pickled-600"},[t("svg",{class:"w-5 h-5 inline-block",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1),J={key:1,id:"optionsColumnsMobile",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow ml-5 w-11/12 dark:bg-pickled-800 dark:divide-pickled-600 absolute mt-2 sm:hidden"},Q={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},$={class:"flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"},ee=f(`<li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><svg class="w-4 my-1 h-4 text-pickled-500" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path class="fill-current" d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520
          -480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg><p class="flex-auto pl-2">id</p><input type="checkbox" class="form-checkbox h-5 w-5 text-pickled-600" disabled checked></li>`,1),se={class:"item flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"},te=t("svg",{class:"handle cursor-move w-4 my-1 h-4 text-pickled-500",xmlns:"http://www.w3.org/2000/svg",height:"16",viewBox:"0 -960 960 960",width:"16"},[t("path",{class:"fill-current",d:"M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"})],-1),le={class:"flex-auto pl-2",href:"#"},re=["onUpdate:modelValue"],oe={key:2,id:"mobileActionsModal",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow ml-5 w-11/12 dark:bg-pickled-800 dark:divide-pickled-600 absolute mt-2 sm:hidden"},ae={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},de=f('<li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Delete</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li><li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Archive</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li>',2),ie={class:"flex justify-between px-4 py-1 hover:bg-pickled-100 dark:hover:bg-pickled-600 dark:hover:text-white"},ce=t("a",{href:"#"},"Copy IDs",-1),ne=t("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},null,-1),ue=t("rect",{x:"8",y:"2",width:"7",height:"4",å:"",rx:"1",ry:"1"},null,-1),he=[ne,ue],ge={key:3,role:"status",class:"max-w-screen mx-5 mb-5 p-4 mt-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},be=f('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6),ke=[be];function pe(s,e,o,d,r,a){const n=b("router-link"),y=b("draggable"),T=b("HansonTable");return i(),c("div",H,[t("nav",z,[t("ol",N,[(i(!0),c(A,null,M(d.items,l=>(i(),c("li",{class:"inline-flex items-center",key:l.order},[l.label==="Home"?(i(),m(n,{key:0,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:p(()=>[E,k(" "+v(l.label),1)]),_:2},1032,["to"])):(i(),m(n,{key:1,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:p(()=>[F,k(" "+v(l.label),1)]),_:2},1032,["to"]))]))),128))])]),I,r.noData?h("",!0):(i(),c("div",P,[t("div",K,[O,R,x(t("input",{onUpdate:e[0]||(e[0]=l=>r.key++),type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>r.searchTerm=l),id:"table-search-users",class:"block p-0 pl-10 text-xs text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",placeholder:"Filter by term"},null,544),[[Z,r.searchTerm]])]),t("button",{disabled:s.isBaseTable,class:B([s.isBaseTable?"cursor-not-allowed":"","p-0 w-10 h-10 mt-0.5 ml-3 aspect-square bg-rock-blue-700 rounded hover:bg-rock-blue-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"]),style:U(s.isBaseTable?"opacity: 0.3":""),onClick:e[2]||(e[2]=(...l)=>a.goToUersCreate&&a.goToUersCreate(...l))},Y,14,W),G])),r.toggleColumns?(i(),c("div",J,[t("ul",Q,[t("li",$,[k(" Select All "),t("input",{ref:"selectAll",type:"checkbox",onChange:e[3]||(e[3]=(...l)=>a.selectAllColumns&&a.selectAllColumns(...l)),class:"form-checkbox h-5 w-5 text-pickled-600"},null,544)]),ee,V(y,{modelValue:r.columns,"onUpdate:modelValue":e[5]||(e[5]=l=>r.columns=l),onStart:e[6]||(e[6]=l=>r.drag=!0),onEnd:e[7]||(e[7]=l=>r.drag=!1),"item-key":"id",handle:".handle","ghost-class":"ghost"},{item:p(({element:l})=>[t("li",se,[te,t("a",le,v(l.name),1),x(t("input",{"onUpdate:modelValue":g=>l.checked=g,onChange:e[4]||(e[4]=(...g)=>a.uncheckSelectAllButton&&a.uncheckSelectAllButton(...g)),type:"checkbox",class:"form-checkbox h-5 w-5 text-pickled-600",checked:""},null,40,re),[[j,l.checked]])])]),_:1},8,["modelValue"])])])):h("",!0),r.toggleActions?(i(),c("div",oe,[t("ul",ae,[de,t("li",ie,[ce,(i(),c("svg",{onClick:e[8]||(e[8]=l=>s.copyToClipboard(a.table.id)),"aria-hidden":"true",class:"w-4 my-1 h-4 text-pickled-500",fill:"none",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},he))])])])):h("",!0),(i(),m(T,{key:r.key,class:"pl-0 overflow-auto h-auto w-full",columns:a.processedColumns,search:r.searchTerm,table_data:r.users},null,8,["columns","search","table_data"])),r.noData?(i(),c("div",ge,ke)):h("",!0)])}const fe=C(D,[["render",pe]]);export{fe as default};
