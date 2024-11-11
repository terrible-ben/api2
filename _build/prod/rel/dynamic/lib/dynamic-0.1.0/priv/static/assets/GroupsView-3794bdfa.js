import{H as w}from"./HansonTable-44cdb52b.js";import{N as y,U as x,_,P as c,r as p,o as d,f as u,l as t,F as L,z as C,D as A,Q as T,R as B,S as G,B as m,c as h,G as b,E as f,m as v,q as D}from"./index-d7a01a1b.js";import"./_commonjs-dynamic-modules-302442b1.js";const M=y("groups",{state:()=>({groups:[],columns:[],meta:{}}),getters:{getStructure:e=>e.groups,getGroup:e=>s=>e.groups.find(r=>r.id===s)},mutations:{setGroup(e,s){e.groups=s},addGroup(e,s){e.groups.push(s)},updateGroup(e,s){const r=e.groups.findIndex(l=>l.id===s.id);e.groups[r]=s},deleteGroup(e,s){const r=e.groups.findIndex(l=>l.id===s.id);e.groups.splice(r,1)}},actions:{sortColumns(e){this.columns=e},getGroups(e){x(e).then(s=>{this.groups=s.data;let r=Object.keys(this.groups[0]),l=[];r.forEach(o=>{if(o!=="id"&&o!=="acl"){let i={};i.name=o,i.id=o,i.checked=!0,l.push(i);for(let n=0;n<l.length;n++)l[n].id=n}}),this.columns=l,console.log(r),console.log(l),console.log(this.columns)}).catch(s=>{console.log(s)})}},persist:!0}),g=M(),S={name:"GroupsView",components:{HansonTable:w},computed:{columnsPre(){return g.$state.columns},showAll(){return this.showDeleted&&this.showArchived},showNone(){return!this.showDeleted&&!this.showArchived},upperCaseTableName(){return this.tableName.toUpperCase()},titleCase(){return e=>e.toLowerCase().split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")},requestSchema(){let e=[];return this.columns.forEach(s=>{if(s.checked){let r={};r.name=s.name,r.field=this.tableStructure.name+"."+s.name,e.push(r)}}),e},processedColumns(){let e=[];return this.columns.forEach(s=>{s.checked&&e.push(s)}),e},isBase(){return this.checkIfBase(this.table)},table(){return this.$route.params.id}},data(){return{key:0,searchTerm:"",pageNumber:1,pageSize:50,totalEntries:0,totalPages:0,currentPage:1,noData:!1,drag:!1,toggleActions:!1,toggleColumns:!1,showDeleted:!1,showArchived:!1,columns:[],groups:[]}},methods:{goToUersCreate(){this.$router.push("/groups/create")},goToTable(e){this.$router.push(`/tables/${e}/create`)},selectAllColumns(){this.columns.forEach(e=>{e.checked=!0})},unselectAll(){this.columns.forEach(e=>{e.checked=!1})},uncheckSelectAllButton(){let e=!0;this.columns.forEach(s=>{s.checked||(e=!1)}),e?this.$refs.selectAll.checked=!0:this.$refs.selectAll.checked=!1},closeActionsMenu(){this.toggleActions=!1},closeColumnsMenu(){this.toggleColumns=!1},toggleAction(){this.toggleActions=!this.toggleActions,this.toggleColumns=!1},toggleColumn(){this.toggleColumns=!this.toggleColumns,this.toggleActions=!1},toggleDeleted(){this.toggleActions=!1,this.toggleColumns=!1,this.showDeleted=!this.showDeleted,this.key++},toggleArchioved(){this.toggleActions=!1,this.toggleColumns=!1,this.showArchived=!this.showArchived,this.key++}},setup(){return{items:[{label:"Home",route:"/",order:1},{label:"Groups",route:"/groups",order:2}]}},created(){const e={page:c().query.page||1,page_size:c().query.page_size||50,table_id:c().query.table_id||null,record_id:c().query.record_id||null,search:c().query.search||null};g.getGroups(e),this.groups=g.$state.groups,this.columns=this.columnsPre}},V={class:"w-screen"},j={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},q={class:"inline-flex items-center space-x-1 md:space-x-3"},z=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),E=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1),F=t("h1",{class:"dark:text-pickled-400 text-xl pl-5"},"Groups",-1),H={key:0,id:"table-search",class:"flex justify-start pt-2 overflow-x-scroll sm:overflow-x-visible"},N={class:"flex"},U=t("label",{for:"table-search",class:"sr-only"},"Search",-1),Z=t("div",{class:"z-10 left-0 flex items-center pl-1 pointer-events-none translate-x-8"},[t("svg",{class:"w-4 h-4 text-pickled-500 dark:text-pickled-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1),P=["disabled"],I=t("svg",{viewBox:"0 0 20 20","enable-background":"new 0 0 20 20",class:"w-6 h-6 inline-block"},[t("path",{fill:"#FFFFFF",d:`M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z`})],-1),R=[I],O=t("button",{class:"w-10 h-10 mt-0.5 ml-3 aspect-square rounded active:shadow-lg dark:hover:bg-pickled-900 mouse shadow transition ease-in duration-200 focus:outline-none border border-pickled-300 dark:border-pickled-600"},[t("svg",{class:"w-5 h-5 inline-block",fill:"currentColor",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M 5 4 L 5 6.34375 L 5.21875 6.625 L 13 16.34375 L 13 28 L 14.59375 26.8125 L 18.59375 23.8125 L 19 23.5 L 19 16.34375 L 26.78125 6.625 L 27 6.34375 L 27 4 Z M 7.28125 6 L 24.71875 6 L 17.53125 15 L 14.46875 15 Z M 15 17 L 17 17 L 17 22.5 L 15 24 Z"})])],-1),Q={key:1,role:"status",class:"max-w-screen mx-5 mb-5 p-4 mt-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},$=D('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6),J=[$];function K(e,s,r,l,o,i){const n=p("router-link"),k=p("HansonTable");return d(),u("div",V,[t("nav",j,[t("ol",q,[(d(!0),u(L,null,C(l.items,a=>(d(),u("li",{class:"inline-flex items-center",key:a.order},[a.label==="Home"?(d(),h(n,{key:0,to:a.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:b(()=>[z,f(" "+v(a.label),1)]),_:2},1032,["to"])):(d(),h(n,{key:1,to:a.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:b(()=>[E,f(" "+v(a.label),1)]),_:2},1032,["to"]))]))),128))])]),F,o.noData?m("",!0):(d(),u("div",H,[t("div",N,[U,Z,A(t("input",{onUpdate:s[0]||(s[0]=a=>o.key++),type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>o.searchTerm=a),id:"table-search-groups",class:"block p-0 pl-10 text-xs text-pickled-900 border border-pickled-300 rounded-lg w-40 md:w-70 lg:w-80 bg-pickled-50 focus:ring-rock-blue-500 focus:border-rock-blue-500 dark:bg-pickled-700 dark:border-pickled-600 dark:placeholder-pickled-400 dark:text-white dark:focus:ring-rock-blue-500 dark:focus:border-rock-blue-500",placeholder:"Filter by term"},null,544),[[T,o.searchTerm]])]),t("button",{disabled:e.isBaseTable,class:B([e.isBaseTable?"cursor-not-allowed":"","p-0 w-10 h-10 mt-0.5 ml-3 aspect-square bg-rock-blue-700 rounded hover:bg-rock-blue-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"]),style:G(e.isBaseTable?"opacity: 0.3":""),onClick:s[2]||(s[2]=(...a)=>i.goToUersCreate&&i.goToUersCreate(...a))},R,14,P),O])),(d(),h(k,{key:o.key,class:"pl-0 overflow-auto h-auto w-full",columns:i.processedColumns,search:o.searchTerm,table_data:o.groups},null,8,["columns","search","table_data"])),o.noData?(d(),u("div",Q,J)):m("",!0)])}const ee=_(S,[["render",K]]);export{ee as default};
