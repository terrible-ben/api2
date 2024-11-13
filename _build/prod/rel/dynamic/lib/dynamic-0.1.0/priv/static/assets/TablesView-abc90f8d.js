import{H as y}from"./HansonTable-ba5e3732.js";import{_ as q,k as m,u as C,$ as v,r as h,o as a,f as i,l as t,m as M,F as Z,z as A,q as n,D as g,Q as B,R as _,S as V,B as c,E as b,p as x,j as N,G as k,c as p,a0 as S,T as E}from"./index-8b6c92a2.js";import{d as F}from"./vuedraggable.umd-a01a7b89.js";import"./_commonjs-dynamic-modules-302442b1.js";const f=m(),H={components:{HansonTable:y,draggable:F},computed:{dataIsLoaded(){return this.tables.length>0},tables(){return this.tables_int},encodedForALL(){return""},encodedForNone(){return`queryType=condition^%${this.tableName}.deleted_at=null^%${this.tableName}.archived_at=null`},encodedToHideDeleted(){return`queryType=condition^%${this.tableName}.deleted_at=null`},encodedToHideArchived(){return`queryType=condition^%${this.tableName}.archived_at=null`},encodedToShowDeleted(){return`queryType=condition^%${this.tableName}.deleted_at!=null`},encodedToShowArchived(){return`queryType=condition^%${this.tableName}.archived_at!=null`},showAll(){return this.showDeleted&&this.showArchived},showNone(){return!this.showDeleted&&!this.showArchived},upperCaseTableName(){return this.tableName.toUpperCase()},titleCase(){return l=>l.toLowerCase().split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")},requestSchema(){let l=[];return this.columns.forEach(e=>{if(e.checked){let d={};d.name=e.name,d.field=this.tableStructure.name+"."+e.name,l.push(d)}}),l},processedColumns(){let l=[];return this.columns.forEach(e=>{e.checked&&l.push(e)}),l},table(){return this.$route.params.id},items(){return[{name:"Home",route:"/",label:"Home",order:1},{name:"Tables",route:"/tables",label:"Tables",order:2}]}},data(){return{noData:!1,tableStructure:{},toggleActions:!1,toggleColumns:!1,columns:[],isBaseTable:!1,encoded:"",script:"",searchTerm:"",tableName:"",showDeleted:!0,showArchived:!0,key:0,tables_int:[]}},methods:{createTablesForm(){this.$router.push({name:"CreateTable"})},logout(){C().$patch({token:null,isLoggedIn:!1}),this.$router.push({name:"Login"})},selectAllColumns(){this.columns.forEach(l=>{l.checked=!0})},unselectAll(){this.columns.forEach(l=>{l.checked=!1})},uncheckSelectAllButton(){let l=!0;this.columns.forEach(e=>{e.checked||(l=!1)}),l?this.$refs.selectAll.checked=!0:this.$refs.selectAll.checked=!1},closeActionsMenu(){this.toggleActions=!1},closeColumnsMenu(){this.toggleColumns=!1},handleCreateEvent(){f.getTables(),this.tables_int=f.tables,this.key++}},created(){let l=m();l.getTables(),l.tables.forEach(e=>{v(e.id).then(d=>{d.data.base?e.delete="base":e.delete=e.id})}),this.tables_int=l.tables},updated(){let l=m();l.getTables(),this.tables.forEach(e=>{v(e.id).then(d=>{d.data.base?e.delete="base":e.delete=e.id})}),this.tables_int=l.tables}},D={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},j={class:"inline-flex items-center space-x-1 md:space-x-3"},z={class:"dark:text-pickled-400 text-xl mb-2 mt-0 pl-5"},I={key:0,id:"table-search",class:"flex justify-start pt-2 overflow-x-scroll sm:overflow-x-visible"},U={class:"flex"},P=["disabled"],G={key:1,id:"optionsColumnsMobile",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow ml-5 w-11/12 dark:bg-pickled-800 dark:divide-pickled-600 absolute mt-2 sm:hidden"},Q={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},R={class:"flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"},J={class:"item flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"},K={class:"flex-auto pl-2",href:"#"},O=["onUpdate:modelValue"],W={key:2,id:"mobileActionsModal",class:"z-30 bg-white divide-y divide-pickled-100 rounded-lg shadow ml-5 w-11/12 dark:bg-pickled-800 dark:divide-pickled-600 absolute mt-2 sm:hidden"},X={class:"py-1 text-sm text-pickled-700 dark:text-pickled-200","aria-labelledby":"dropdownActionButton"},Y={class:"flex justify-between px-4 py-1 hover:bg-pickled-100 dark:hover:bg-pickled-600 dark:hover:text-white"};function $(l,e,d,ee,r,o){const w=h("router-link"),T=h("draggable"),L=h("HansonTable");return a(),i("div",null,[e[21]||(e[21]=t("div",{class:"hidden sm:dark:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-30 pointer-events-none z-3 w-screen overflow-hidden","aria-hidden":"true"},[t("img",{src:M,class:"max-w-none",width:"1440",height:"450",alt:"Page Illustration"})],-1)),t("nav",D,[t("ol",j,[(a(!0),i(Z,null,A(o.items,s=>(a(),i("li",{class:"inline-flex items-center",key:s.order},[s.name==="Home"?(a(),p(w,{key:0,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[e[9]||(e[9]=t("svg",{"aria-hidden":"true",class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1)),b(" "+n(s.label),1)]),_:2},1032,["to"])):(a(),p(w,{key:1,to:s.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[e[10]||(e[10]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4"},[t("polyline",{points:"9 18 15 12 9 6"})],-1)),b(" "+n(s.label),1)]),_:2},1032,["to"]))]))),128))])]),t("h1",z,n(o.titleCase("Tables")),1),r.noData?c("",!0):(a(),i("div",I,[t("div",U,[e[11]||(e[11]=t("label",{for:"table-search",class:"sr-only"},"Search",-1)),e[12]||(e[12]=t("div",{class:"z-10 left-0 flex items-center pl-1 pointer-events-none translate-x-8"},[t("svg",{class:"w-4 h-4 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1)),g(t("input",{onUpdate:e[0]||(e[0]=s=>r.key++),type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>r.searchTerm=s),id:"table-search-users",class:"block p-0 pl-10 text-xs text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",placeholder:"Filter by term"},null,544),[[B,r.searchTerm]])]),t("button",{disabled:r.isBaseTable,class:_([r.isBaseTable?"cursor-not-allowed":"","p-0 w-10 h-10 mt-0.5 ml-3 aspect-square bg-rock-blue-700 rounded hover:bg-rock-blue-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"]),style:V(r.isBaseTable?"opacity: 0.3":""),onClick:e[2]||(e[2]=s=>o.createTablesForm())},e[13]||(e[13]=[t("svg",{viewBox:"0 0 20 20","enable-background":"new 0 0 20 20",class:"w-5 h-5 inline-block"},[t("path",{fill:"#FFFFFF",d:`M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z`})],-1)]),14,P),e[14]||(e[14]=t("button",{class:"w-10 h-10 mt-0.5 ml-3 aspect-square rounded active:shadow-lg dark:hover:bg-pickled-900 mouse shadow transition ease-in duration-200 focus:outline-none border border-pickled-300 dark:border-pickled-600"},[t("svg",{class:"w-5 h-5 inline-block",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1))])),r.toggleColumns?(a(),i("div",G,[t("ul",Q,[t("li",R,[e[15]||(e[15]=b(" Select All ")),t("input",{ref:"selectAll",type:"checkbox",onChange:e[3]||(e[3]=(...s)=>o.selectAllColumns&&o.selectAllColumns(...s)),class:"form-checkbox h-5 w-5 text-pickled-600"},null,544)]),e[17]||(e[17]=x(`<li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><svg class="w-4 my-1 h-4 text-pickled-500" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path class="fill-current" d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520
            -480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg><p class="flex-auto pl-2">id</p><input type="checkbox" class="form-checkbox h-5 w-5 text-pickled-600" disabled checked></li>`,1)),N(T,{modelValue:r.columns,"onUpdate:modelValue":e[5]||(e[5]=s=>r.columns=s),onStart:e[6]||(e[6]=s=>l.drag=!0),onEnd:e[7]||(e[7]=s=>l.drag=!1),"item-key":"id",handle:".handle","ghost-class":"ghost"},{item:k(({element:s})=>[t("li",J,[e[16]||(e[16]=t("svg",{class:"handle cursor-move w-4 my-1 h-4 text-pickled-500",xmlns:"http://www.w3.org/2000/svg",height:"16",viewBox:"0 -960 960 960",width:"16"},[t("path",{class:"fill-current",d:"M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"})],-1)),t("a",K,n(s.name),1),g(t("input",{"onUpdate:modelValue":u=>s.checked=u,onChange:e[4]||(e[4]=(...u)=>o.uncheckSelectAllButton&&o.uncheckSelectAllButton(...u)),type:"checkbox",class:"form-checkbox h-5 w-5 text-pickled-600",checked:""},null,40,O),[[E,s.checked]])])]),_:1},8,["modelValue"])])])):c("",!0),r.toggleActions?(a(),i("div",W,[t("ul",X,[e[20]||(e[20]=x('<li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Delete</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li><li class="flex justify-between px-4 py-1 hover:bg-pickled-100 border-b border-rock-blue-300 dark:border-rock-blue-800 dark:hover:bg-pickled-600 dark:hover:text-white"><a href="#">Archive</a><svg class="w-4 my-1 h-4 text-pickled-500" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 6 4 L 6 6 L 26 6 L 26 4 Z M 8 8 L 8 26 L 24 26 L 24 8 Z M 10 10 L 22 10 L 22 24 L 10 24 Z M 12 12 L 12 22 L 20 22 L 20 12 Z M 14 14 L 18 14 L 18 20 L 14 20 Z"></path></svg></li>',2)),t("li",Y,[e[19]||(e[19]=t("a",{href:"#"},"Copy IDs",-1)),(a(),i("svg",{onClick:e[8]||(e[8]=s=>l.copyToClipboard(o.table.id)),"aria-hidden":"true",class:"w-4 my-1 h-4 text-pickled-500",fill:"none",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e[18]||(e[18]=[t("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},null,-1),t("rect",{x:"8",y:"2",width:"7",height:"4",å:"",rx:"1",ry:"1"},null,-1)])))])])])):c("",!0),o.dataIsLoaded?(a(),p(L,{table_data:o.tables,columns:r.columns,key:r.key,search:r.searchTerm,onCreateTableEvent:o.handleCreateEvent},null,8,["table_data","columns","search","onCreateTableEvent"])):c("",!0),e[22]||(e[22]=t("div",{class:"hidden sm:dark:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-30 pointer-events-none z-3 w-screen overflow-hidden","aria-hidden":"true"},[t("img",{src:S,class:"max-w-none w-full",width:"1440",height:"427",alt:"Page Illustration 02"})],-1))])}const oe=q(H,[["render",$]]);export{oe as default};
