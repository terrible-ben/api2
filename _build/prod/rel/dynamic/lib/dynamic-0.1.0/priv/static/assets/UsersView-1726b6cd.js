import{H as k}from"./HansonTable-065b3331.js";import{Q as y,R as w,_ as x,S as c,e as m,o,c as u,a as i,F as _,b as A,h,E as C,K as f,I as v,t as b,A as T}from"./index-8fc01b6e.js";import"./handsontable.full-5f3882a3.js";import"./_commonjs-dynamic-modules-302442b1.js";const B=y("users",{state:()=>({users:[],columns:[]}),getters:{getStructure:e=>e.users,getTable:e=>s=>e.users.find(t=>t.id===s)},mutations:{setTables(e,s){e.users=s},addTable(e,s){e.users.push(s)},updateTable(e,s){const t=e.users.findIndex(r=>r.id===s.id);e.users[t]=s},deleteTable(e,s){const t=e.users.findIndex(r=>r.id===s.id);e.users.splice(t,1)}},actions:{sortColumns(e){this.columns=e},getUsers(e){w(e).then(s=>{this.users=s.data;let t=Object.keys(this.users[0]),r=[];t.forEach(l=>{if(l!=="id"&&l!=="acl"){let d={};d.name=l,d.id=l,d.checked=!0,r.push(d);for(let a=0;a<r.length;a++)r[a].id=a}}),this.columns=r,console.log(t),console.log(r),console.log(this.columns)}).catch(s=>{console.log(s)})}},persist:!0}),g=B(),U={name:"UsersView",components:{HansonTable:k},computed:{columnsPre(){return g.$state.columns},showAll(){return this.showDeleted&&this.showArchived},showNone(){return!this.showDeleted&&!this.showArchived},upperCaseTableName(){return this.tableName.toUpperCase()},titleCase(){return e=>e.toLowerCase().split("_").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")},requestSchema(){let e=[];return this.columns.forEach(s=>{if(s.checked){let t={};t.name=s.name,t.field=this.tableStructure.name+"."+s.name,e.push(t)}}),e},processedColumns(){let e=[];return this.columns.forEach(s=>{s.checked&&e.push(s)}),e},isBase(){return this.checkIfBase(this.table)},table(){return this.$route.params.id}},data(){return{key:0,searchTerm:"",pageNumber:1,pageSize:50,totalEntries:0,totalPages:0,currentPage:1,noData:!1,drag:!1,toggleActions:!1,toggleColumns:!1,showDeleted:!1,showArchived:!1,columns:[],users:[]}},methods:{goToTable(e){this.$router.push(`/tables/${e}/create`)},selectAllColumns(){this.columns.forEach(e=>{e.checked=!0})},unselectAll(){this.columns.forEach(e=>{e.checked=!1})},uncheckSelectAllButton(){let e=!0;this.columns.forEach(s=>{s.checked||(e=!1)}),e?this.$refs.selectAll.checked=!0:this.$refs.selectAll.checked=!1},closeActionsMenu(){this.toggleActions=!1},closeColumnsMenu(){this.toggleColumns=!1},toggleAction(){this.toggleActions=!this.toggleActions,this.toggleColumns=!1},toggleColumn(){this.toggleColumns=!this.toggleColumns,this.toggleActions=!1},toggleDeleted(){this.toggleActions=!1,this.toggleColumns=!1,this.showDeleted=!this.showDeleted,this.key++},toggleArchioved(){this.toggleActions=!1,this.toggleColumns=!1,this.showArchived=!this.showArchived,this.key++}},setup(){return{items:[{label:"Home",route:"/",order:1},{label:"Users",route:"/users",order:2}]}},created(){const e={page:c().query.page||1,page_size:c().query.page_size||50,table_id:c().query.table_id||null,record_id:c().query.record_id||null,search:c().query.search||null};g.getUsers(e),this.users=g.$state.users,this.columns=this.columnsPre}},D={class:"w-screen"},E={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},S={class:"inline-flex items-center space-x-1 md:space-x-3"},j=i("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),N=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[i("polyline",{points:"9 18 15 12 9 6"})],-1),V=i("h1",{class:"dark:text-pickled-400 text-xl pl-5"},"Users",-1),q={key:0,role:"status",class:"max-w-screen mx-5 mb-5 p-4 mt-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},H=T('<div class="flex items-center justify-between"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><div class="flex items-center justify-between pt-4"><div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div><div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div></div><div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div></div><span class="sr-only">Loading...</span>',6),$=[H];function z(e,s,t,r,l,d){const a=m("router-link"),p=m("HansonTable");return o(),u("div",D,[i("nav",E,[i("ol",S,[(o(!0),u(_,null,A(r.items,n=>(o(),u("li",{class:"inline-flex items-center",key:n.order},[n.label==="Home"?(o(),h(a,{key:0,to:n.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[j,v(" "+b(n.label),1)]),_:2},1032,["to"])):(o(),h(a,{key:1,to:n.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:f(()=>[N,v(" "+b(n.label),1)]),_:2},1032,["to"]))]))),128))])]),V,(o(),h(p,{key:l.key,class:"pl-0 overflow-auto h-auto w-full",columns:d.processedColumns,search:l.searchTerm,table_data:l.users},null,8,["columns","search","table_data"])),l.noData?(o(),u("div",q,$)):C("",!0)])}const F=x(U,[["render",z]]);export{F as default};
