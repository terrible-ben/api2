import{_ as C,X as q,O as x,e as O,o as s,c as i,a as e,F as g,b as h,H as a,Y as b,Z as y,$ as m,E as d,f as E,K as k,a0 as N,D as v,a1 as U,a2 as R,h as w,I as T,t as u,A as S}from"./index-8fc01b6e.js";const V={data(){return{stay_on_page:"false",table_column_error:!1,table_name:"",parent_table_name:"",table_column_name:"",table_column_type:"",table_column_options:{required:"false",unique:"false",foreign_key:"false",references_table:"",references_column:"",relation_type:"",default:""},table_columns:[]}},computed:{crumbs(){return[{label:"Home",route:"/",order:1,name:"Home"},{label:"Tables",route:"/tables",order:2,name:"Tables"},{label:"Create Table",route:"/tables/create",order:3,name:"CreateTable"}]}},methods:{addTableColumn(){this.tableColmnError!=!0&&(this.table_columns.push({name:this.table_column_name,type:this.table_column_type,options:this.table_column_options}),this.table_column_name="",this.table_column_type="",this.clearOptions())},removeTableColumn(){this.table_columns.pop()},options(){document.getElementById("menu-full-dropdown").classList.toggle("hidden")},closeOptions(){document.getElementById("menu-full-dropdown").classList.add("hidden")},updateOptions(r,o,c,p,t,n,_){const l={required:r,unique:o,foreign_key:c,references_table:p,references_column:t,relation_type:n,default:_};this.table_column_options=l},saveOptions(r,o,c,p,t,n,_){this.closeOptions();const l={required:r,unique:o,foreign_key:c,references_table:p,references_column:t,relation_type:n,default:_};this.table_column_options=l,console.log(this.table_column_options)},removeTableColumnAt(r){this.table_columns.splice(r,1)},createTable(){this.table_columns.forEach(o=>{for(const[c,p]of Object.entries(o.options))p=="true"&&(o.options[c]=!0),p=="false"&&(o.options[c]=!1);o.options.required==!1&&o.options.unique==!1&&delete o.options.default,o.options.foreign_key==!1?(delete o.options.foreign_key,delete o.options.references_table,delete o.options.references_column,delete o.options.relation_type):(delete o.options.required,delete o.options.unique,delete o.options.default)});const r={name:this.table_name,parent:this.parent_table_name,schema:this.table_columns};console.log(r),q(r).then(o=>{console.log(o),this.stay_on_page=="true"?this.$router.push({name:"CreateTable",query:{stay_on_page:"true"}}):this.$router.push({name:"Tables"})}).catch(o=>{console.log(o),x().$patch({message:o.response.data.message,status:o.response.status,error:o.response.data.error})})},disableDefault(){return this.table_column_options.required=="true"&&this.table_column_options.default==""},validateNameUnique(){this.table_columns.forEach(r=>{r.name==this.table_column_name&&(this.table_column_name="",x().$patch({message:"Column name must be unique",status:"400",error:"Column name must be unique"}),this.tableColmnError=!0)})},clearOptions(){this.table_column_options={required:"false",unique:"false",foreign_key:"false",references_table:"",references_column:"",relation_type:"",default:""},this.tableColmnError=!1}},mounted(){this.$route.query.stay_on_page=="true"&&(this.stay_on_page="true")}},B={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},M={class:"inline-flex items-center space-x-1 md:space-x-3"},A=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),D=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[e("polyline",{points:"9 18 15 12 9 6"})],-1),I=e("h1",{class:"text-3xl font-bold my-4 mx-10"},"Create Tables",-1),F=e("h3",{class:"text-lg mb-6 mx-10"},"Use this form for creating tables",-1),H={class:"mb-4"},z=e("label",{for:"table_name",class:"block text-sm font-medium"},"Table Name",-1),G={class:"mb-4"},j=e("label",{for:"parent_table_name",class:"block text-sm font-medium"},"Parent",-1),L={class:"mb-4"},K=e("label",{for:"table_columns",class:"block text-sm font-medium"},"Table Schema",-1),Y={class:"flex space-x-4"},J=S('<option value="" selected disabled>Select a type</option><option value="varchar">String</option><option value="integer">Integer</option><option value="timestamptz">UTC timestamps</option><option value="timestamp">timestamp</option><option value="bigint">Big Integer</option><option value="boolean">Boolean</option><option value="date">Date</option><option value="time">Time</option><option value="text">Text</option><option value="uuid">UUID</option><option value="json">JSON</option><option value="jsonb">JSONB</option><option value="float">Float</option><option value="double">Double</option><option value="decimal">Decimal</option><option value="enum">Enum</option><option value="array">Array</option><option value="geometry">Geometry</option><option value="geography">Geography</option><option value="cidr">CIDR</option><option value="inet">INET</option><option value="macaddr">MACADDR</option><option value="tsvector">TSVECTOR</option><option value="tsquery">TSQUERY</option><option value="int4range">INT4RANGE</option><option value="int8range">INT8RANGE</option><option value="numrange">NUMRANGE</option><option value="tsrange">TSRANGE</option><option value="tstzrange">TSTZRANGE</option><option value="daterange">DATERANGE</option><option value="int2">INT2</option><option value="int4">INT4</option><option value="int8">INT8</option><option value="float4">FLOAT4</option><option value="float8">FLOAT8</option><option value="numeric">NUMERIC</option><option value="money">MONEY</option><option value="char">CHAR</option><option value="serial">SERIAL</option>',40),Z=[J],P=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-rock-blue-500"},[e("path",{"fill-rule":"evenodd",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM7 9a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm1 4a1 1 0 100 2h6a1 1 0 100-2H8z","clip-rule":"evenodd"})],-1),Q=[P],W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),X=[W],$=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 12H6"})],-1),ee=[$],oe={id:"menu-full-dropdown",class:"hidden"},te={key:0,class:"bg-rock-blue-200 dark:bg-pickled-600 shadow px-4 py-3 rounded-md w-[330px] absolute mx-auto right-1/3 z-10 menu-for-fk"},le={class:"space-y-2"},ne={class:"border-b border-pickled-200 flex"},se=e("a",{href:"#",class:"w-[100] block px-4 py-2 text-sm dark:text-rock-blue-100 text-pickled-900 flex-1"},"Required",-1),re=e("option",{value:"true"},"True",-1),ie=e("option",{value:"false"},"False",-1),ae=[re,ie],ue={class:"border-b border-pickled-200 flex"},ce=e("a",{href:"#",class:"w-[100] block px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 flex-1"},"Unique",-1),pe=e("option",{value:"true"},"True",-1),de=e("option",{value:"false"},"False",-1),_e=[pe,de],be={class:"border-b border-pickled-200 flex"},me=e("a",{href:"#",class:"W-[100] block px-4 py-2 text-sm dark:text-rock-blue-100 text-pickled-900 flex-1"},"Foreign Key",-1),ke=e("option",{value:"true"},"True",-1),fe=e("option",{value:"false"},"False",-1),xe=[ke,fe],ge={class:"flex"},he=e("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"Default",-1),ye={key:0,class:"border-b border-pickled-200 flex"},ve=e("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"References Table",-1),we={key:1,class:"border-b border-pickled-200 flex"},Te=e("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"References Column",-1),Ce={key:2,class:"border-b border-pickled-200 flex"},qe=e("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"Reference Type",-1),Oe=e("option",{value:"one-to-one"},"One to One",-1),Ee=e("option",{value:"one-to-many"},"One to Many",-1),Ne=e("option",{value:"many-to-one"},"Many to One",-1),Ue=e("option",{value:"many-to-many"},"Many to Many",-1),Re=[Oe,Ee,Ne,Ue],Se={key:0,class:"table-auto mx-10 bg-rock-blue-300 dark:bg-pickled-800 dark:text-rock-blue-300"},Ve=e("thead",{class:"text-xs text-pickled-500 uppercase bg-rock-blue-200 dark:bg-pickled-900 dark:text-pickled-200 sticky table-sticky z-5"},[e("tr",null,[e("th",{class:"px-4 py-2 text-ellipsis max-w-[100]"},"Column Name"),e("th",{class:"px-4 py-2"},"Column Type"),e("th",{class:"px-4 py-2"},"Required"),e("th",{class:"px-4 py-2"},"Unique"),e("th",{class:"px-4 py-2"},"Foreign Key"),e("th",{class:"px-4 py-2"},"Reference Table"),e("th",{class:"px-4 py-2"},"Reference Column"),e("th",{class:"px-4 py-2"},"Reference Type"),e("th",{class:"px-4 py-2"},"Default"),e("th",{class:"px-4 py-2"},"Remove")])],-1),Be={class:"px-4 py-2"},Me={class:"px-4 py-2"},Ae={class:"px-4 py-2"},De={class:"px-4 py-2"},Ie={class:"px-4 py-2"},Fe={class:"px-4 py-2"},He={class:"px-4 py-2"},ze={class:"px-4 py-2"},Ge={class:"px-4 py-2"},je={class:"px-4 py-2"},Le=["onClick"],Ke=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 12H6"})],-1),Ye=[Ke],Je={class:"mb-4 mx-10 mt-5"},Ze={class:"flex items-center mb-4"},Pe=e("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-pickled-900 dark:text-pickled-300"},"Stay on form?",-1),Qe=["disabled"];function We(r,o,c,p,t,n){const _=O("router-link");return s(),i("div",null,[e("nav",B,[e("ol",M,[(s(!0),i(g,null,h(n.crumbs,l=>(s(),i("li",{class:"inline-flex items-center",key:l.order},[l.name==="Home"?(s(),w(_,{key:0,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[A,T(" "+u(l.label),1)]),_:2},1032,["to"])):(s(),w(_,{key:1,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[D,T(" "+u(l.label),1)]),_:2},1032,["to"]))]))),128))])]),I,F,e("form",{onSubmit:o[26]||(o[26]=v((...l)=>n.createTable&&n.createTable(...l),["prevent"])),class:"mx-10"},[e("div",H,[z,a(e("input",{type:"text",class:"mt-1 p-2 border rounded-md w-full bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_name","onUpdate:modelValue":o[0]||(o[0]=l=>t.table_name=l),placeholder:"Enter table name"},null,512),[[b,t.table_name]])]),e("div",G,[j,a(e("input",{type:"text",class:"mt-1 p-2 border rounded-md w-full bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"parent_table_name","onUpdate:modelValue":o[1]||(o[1]=l=>t.parent_table_name=l),placeholder:"Enter table name"},null,512),[[b,t.parent_table_name]])]),e("div",L,[K,e("div",Y,[a(e("input",{onKeyup:[o[2]||(o[2]=y((...l)=>n.addTableColumn&&n.addTableColumn(...l),["enter"])),o[3]||(o[3]=y((...l)=>n.clearOptions&&n.clearOptions(...l),["esc"]))],onClick:o[4]||(o[4]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onBlur:o[5]||(o[5]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onFocus:o[6]||(o[6]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onChange:o[7]||(o[7]=l=>n.validateNameUnique()),type:"text",class:"mt-1 p-2 border rounded-md w-1/4 bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_name","onUpdate:modelValue":o[8]||(o[8]=l=>t.table_column_name=l),placeholder:"Column name"},null,544),[[b,t.table_column_name]]),a(e("select",{class:"mt-1 p-2 border rounded-md w-[200] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_type","onUpdate:modelValue":o[9]||(o[9]=l=>t.table_column_type=l),onChange:o[10]||(o[10]=(...l)=>n.options&&n.options(...l)),"aria-placeholder":"Select type of column",placeholder:"Select"},Z,544),[[m,t.table_column_type]]),t.table_column_type?(s(),i("button",{key:0,id:"menu-full-dropdown-button",onClick:o[11]||(o[11]=(...l)=>n.options&&n.options(...l)),type:"button",class:"px-2 py-2 bg-rock-blue text-rock-blue-100 rounded-full"},Q)):d("",!0),e("button",{type:"button",class:"px-2 py-2 bg-rock-blue text-pickled-800 rounded-full",onClick:o[12]||(o[12]=(...l)=>n.addTableColumn&&n.addTableColumn(...l))},X),t.table_columns.length>0?(s(),i("button",{key:1,type:"button",class:"px-2 py-2 bg-rock-blue text-pickled-800 rounded-full",onClick:o[13]||(o[13]=(...l)=>n.removeTableColumn&&n.removeTableColumn(...l))},ee)):d("",!0),e("div",oe,[E(N,{type:"transition",name:"slide_down","enter-active-class":"animate__fadeInDownBig","leave-active-class":"animate__fadeOutUpBig"},{default:k(()=>[t.table_column_type?(s(),i("div",te,[e("ul",le,[e("li",ne,[se,a(e("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_options.required","onUpdate:modelValue":o[14]||(o[14]=l=>t.table_column_options.required=l),onChange:o[15]||(o[15]=l=>n.updateOptions(t.table_column_options.required,t.table_column_options.unique,t.table_column_options.foreign_key,t.table_column_options.references_table,t.table_column_options.references_column,t.table_column_options.relation_type,t.table_column_options.default)),type:"checkbox"},ae,544),[[m,t.table_column_options.required]])]),e("li",ue,[ce,a(e("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_options.unique","onUpdate:modelValue":o[16]||(o[16]=l=>t.table_column_options.unique=l),onChange:o[17]||(o[17]=l=>n.updateOptions(t.table_column_options.required,t.table_column_options.unique,t.table_column_options.foreign_key,t.table_column_options.references_table,t.table_column_options.references_column,t.table_column_options.relation_type,t.table_column_options.default)),type:"checkbox"},_e,544),[[m,t.table_column_options.unique]])]),e("li",be,[me,a(e("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end",id:"table_column_options.foreign_key","onUpdate:modelValue":o[18]||(o[18]=l=>t.table_column_options.foreign_key=l),onChange:o[19]||(o[19]=l=>n.updateOptions(t.table_column_options.required,t.table_column_options.unique,t.table_column_options.foreign_key,t.table_column_options.references_table,t.table_column_options.references_column,t.table_column_options.relation_type,t.table_column_options.default)),type:"checkbox"},xe,544),[[m,t.table_column_options.foreign_key]])]),e("li",ge,[he,a(e("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[200] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100",id:"table_column_options.default","onUpdate:modelValue":o[20]||(o[20]=l=>t.table_column_options.default=l),placeholder:"Default"},null,512),[[b,t.table_column_options.default]])]),t.table_column_options.foreign_key=="true"?(s(),i("li",ye,[ve,a(e("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[100] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 flex-end",id:"table_column_options.references_table","onUpdate:modelValue":o[21]||(o[21]=l=>t.table_column_options.references_table=l),placeholder:"Table to reference"},null,512),[[b,t.table_column_options.references_table]])])):d("",!0),t.table_column_options.foreign_key=="true"?(s(),i("li",we,[Te,a(e("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[100] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 flex-end",id:"table_column_options.references_column","onUpdate:modelValue":o[22]||(o[22]=l=>t.table_column_options.references_column=l),placeholder:""},null,512),[[b,t.table_column_options.references_column]])])):d("",!0),t.table_column_options.foreign_key=="true"?(s(),i("li",Ce,[qe,a(e("select",{class:"mt-0 p-2 border rounded-lg w-[100] text-pickled-900 bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 flex-end",id:"table_column_options.relation_type","onUpdate:modelValue":o[23]||(o[23]=l=>t.table_column_options.relation_type=l),onChange:o[24]||(o[24]=l=>n.updateOptions(t.table_column_options.required,t.table_column_options.unique,t.table_column_options.foreign_key,t.table_column_options.references_table,t.table_column_options.references_column,t.table_column_options.relation_type,t.table_column_options.default)),type:"checkbox"},Re,544),[[m,t.table_column_options.relation_type]])])):d("",!0)]),e("button",{type:"button",onClick:o[25]||(o[25]=v(l=>n.saveOptions(t.table_column_options.required,t.table_column_options.unique,t.table_column_options.foreign_key,t.table_column_options.references_table,t.table_column_options.references_column,t.table_column_options.relation_type,t.table_column_options.default),["prevent"])),class:"px-8 py-1 mt-5 bg-rock-blue text-rock-blue-100 rounded-md text-sm w-full text-center"}," Save ")])):d("",!0)]),_:1})])])])],32),t.table_columns.length>0?(s(),i("table",Se,[Ve,e("tbody",null,[(s(!0),i(g,null,h(t.table_columns,(l,f)=>(s(),i("tr",{key:f,class:"bg-white border-b dark:bg-pickled-800 dark:border-pickled-700"},[e("td",Be,u(l.name),1),e("td",Me,u(l.type),1),e("td",Ae,u(l.options.required),1),e("td",De,u(l.options.unique),1),e("td",Ie,u(l.options.foreign_key),1),e("td",Fe,u(l.options.references_table),1),e("td",He,u(l.options.references_column),1),e("td",ze,u(l.options.relation_type),1),e("td",Ge,u(l.options.default),1),e("td",je,[e("button",{onClick:Xe=>n.removeTableColumnAt(f),type:"button",class:"px-2 py-2 bg-rock-blue text-rock-blue-100 rounded-full"},Ye,8,Le)])]))),128))])])):d("",!0),e("div",Je,[e("div",Ze,[a(e("input",{"onUpdate:modelValue":o[27]||(o[27]=l=>t.stay_on_page=l),id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 text-rock-blue-600 bg-pickled-800 border-pickled-300 rounded focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2 dark:bg-pickled-700 dark:border-pickled-600"},null,512),[[U,t.stay_on_page]]),Pe])]),e("button",{disabled:t.table_columns.length==0,class:R([t.table_columns.length==0?"opacity-50":"","px-4 py-2 bg-rock-blue dark:text-rock-blue-100 text-pickled-900 rounded-md mx-10"]),onClick:o[28]||(o[28]=(...l)=>n.createTable&&n.createTable(...l)),type:"submit"}," Create Table ",10,Qe)])}const eo=C(V,[["render",We]]);export{eo as default};
