import{_ as C,k as T,Y as q,K as x,r as g,o as i,f as u,l as t,F as O,z as E,D as r,Q as d,Z as h,$ as m,B as _,j as N,G as k,a0 as U,A as y,c as f,T as S,R as V,E as v,m as w,q as R}from"./index-8289a2bf.js";import{H as B}from"./HansonTable-93dc1a22.js";import"./_commonjs-dynamic-modules-302442b1.js";T();const A={components:{HansonTable:B},data(){return{stay_on_page:"false",table_column_error:!1,table_name:"",parent_table_name:"",table_column_name:"",table_column_type:"",table_column_options:{required:"false",unique:"false",foreign_key:"false",references_table:"",references_column:"",relation_type:"",default:""},table_columns:[]}},computed:{crumbs(){return[{label:"Home",route:"/",order:1,name:"Home"},{label:"Tables",route:"/tables",order:2,name:"Tables"},{label:"Create Table",route:"/tables/create",order:3,name:"CreateTable"}]}},methods:{addTableColumn(){this.tableColmnError!=!0&&(this.table_columns.push({name:this.table_column_name,type:this.table_column_type,options:this.table_column_options}),this.table_column_name="",this.table_column_type="",this.clearOptions())},removeTableColumn(){this.table_columns.pop()},options(){document.getElementById("menu-full-dropdown").classList.toggle("hidden")},closeOptions(){document.getElementById("menu-full-dropdown").classList.add("hidden")},updateOptions(s,e,a,c,o,n,p){const b={required:s,unique:e,foreign_key:a,references_table:c,references_column:o,relation_type:n,default:p};this.table_column_options=b},saveOptions(s,e,a,c,o,n,p){this.closeOptions();const b={required:s,unique:e,foreign_key:a,references_table:c,references_column:o,relation_type:n,default:p};this.table_column_options=b,console.log(this.table_column_options)},removeTableColumnAt(s){this.table_columns.splice(s,1)},createTable(){this.table_columns.forEach(e=>{for(const[a,c]of Object.entries(e.options))c=="true"&&(e.options[a]=!0),c=="false"&&(e.options[a]=!1);e.options.required==!1&&e.options.unique==!1&&delete e.options.default,e.options.foreign_key==!1?(delete e.options.foreign_key,delete e.options.references_table,delete e.options.references_column,delete e.options.relation_type):(delete e.options.required,delete e.options.unique,delete e.options.default)});const s={name:this.table_name,parent:this.parent_table_name,schema:this.table_columns};console.log(s),q(s).then(e=>{console.log(e),this.stay_on_page=="true"?this.$router.push({name:"CreateTable",query:{stay_on_page:"true"}}):(T().getTables(),this.$router.push({name:"Tables"}))}).catch(e=>{console.log(e),x().$patch({message:e.response.data.message,status:e.response.status,error:e.response.data.error})})},disableDefault(){return this.table_column_options.required=="true"&&this.table_column_options.default==""},validateNameUnique(){this.table_columns.forEach(s=>{s.name==this.table_column_name&&(this.table_column_name="",x().$patch({message:"Column name must be unique",status:"400",error:"Column name must be unique"}),this.tableColmnError=!0)})},clearOptions(){this.table_column_options={required:"false",unique:"false",foreign_key:"false",references_table:"",references_column:"",relation_type:"",default:""},this.tableColmnError=!1}},mounted(){this.$route.query.stay_on_page=="true"&&(this.stay_on_page="true")}},M={class:"pl-5 w-full max-w-xl flex px-5 py-5","aria-label":"Breadcrumb"},D={class:"inline-flex items-center space-x-1 md:space-x-3"},I=t("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),H=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right w-4 h-4 mr-2"},[t("polyline",{points:"9 18 15 12 9 6"})],-1),z=t("h1",{class:"text-3xl font-bold my-4 mx-10"},"Create Tables",-1),F=t("h3",{class:"text-lg mb-6 mx-10"},"Use this form for creating tables",-1),G={class:"mb-4"},L=t("label",{for:"table_name",class:"block text-sm font-medium"},"Table Name",-1),j={class:"mb-4"},K=t("label",{for:"parent_table_name",class:"block text-sm font-medium"},"Parent",-1),Y={class:"mb-4"},J=t("label",{for:"table_columns",class:"block text-sm font-medium"},"Table Schema",-1),Q={class:"sm:inline-flex sm:space-x-4"},Z={class:"flex space-x-4"},P=R('<option value="" selected disabled>Select a type</option><option value="varchar">String</option><option value="integer">Integer</option><option value="timestamptz">UTC timestamps</option><option value="timestamp">timestamp</option><option value="bigint">Big Integer</option><option value="boolean">Boolean</option><option value="date">Date</option><option value="time">Time</option><option value="text">Text</option><option value="uuid">UUID</option><option value="json">JSON</option><option value="jsonb">JSONB</option><option value="float">Float</option><option value="double">Double</option><option value="decimal">Decimal</option><option value="enum">Enum</option><option value="array">Array</option><option value="geometry">Geometry</option><option value="geography">Geography</option><option value="cidr">CIDR</option><option value="inet">INET</option><option value="macaddr">MACADDR</option><option value="tsvector">TSVECTOR</option><option value="tsquery">TSQUERY</option><option value="int4range">INT4RANGE</option><option value="int8range">INT8RANGE</option><option value="numrange">NUMRANGE</option><option value="tsrange">TSRANGE</option><option value="tstzrange">TSTZRANGE</option><option value="daterange">DATERANGE</option><option value="int2">INT2</option><option value="int4">INT4</option><option value="int8">INT8</option><option value="float4">FLOAT4</option><option value="float8">FLOAT8</option><option value="numeric">NUMERIC</option><option value="money">MONEY</option><option value="char">CHAR</option><option value="serial">SERIAL</option>',40),W=[P],X=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-rock-blue-500"},[t("path",{"fill-rule":"evenodd",d:"M12 3a9 9 0 100 18 9 9 0 000-18zM7 9a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm1 4a1 1 0 100 2h6a1 1 0 100-2H8z","clip-rule":"evenodd"})],-1),$=[X],ee=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3 h-",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})],-1),oe=[ee],te={id:"menu-full-dropdown",class:"hidden"},le={key:0,class:"bg-rock-blue-200 dark:bg-pickled-600 shadow px-4 py-3 rounded-md w-[330px] absolute mx-auto right-1/3 z-10 menu-for-fk"},ne={class:"space-y-2"},se={class:"border-b border-pickled-200 flex"},re=t("a",{href:"#",class:"w-[100] block px-4 py-2 text-sm dark:text-rock-blue-100 text-pickled-900 flex-1"},"Required",-1),ie=t("option",{value:"true"},"True",-1),ae=t("option",{value:"false"},"False",-1),ue=[ie,ae],ce={class:"border-b border-pickled-200 flex"},pe=t("a",{href:"#",class:"w-[100] block px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 flex-1"},"Unique",-1),de=t("option",{value:"true"},"True",-1),_e=t("option",{value:"false"},"False",-1),be=[de,_e],me={class:"border-b border-pickled-200 flex"},ke=t("a",{href:"#",class:"W-[100] block px-4 py-2 text-sm dark:text-rock-blue-100 text-pickled-900 flex-1"},"Foreign Key",-1),fe=t("option",{value:"true"},"True",-1),xe=t("option",{value:"false"},"False",-1),ge=[fe,xe],he={class:"flex"},ye=t("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"Default",-1),ve={key:0,class:"border-b border-pickled-200 flex"},we=t("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"References Table",-1),Te={key:1,class:"border-b border-pickled-200 flex"},Ce=t("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"References Column",-1),qe={key:2,class:"border-b border-pickled-200 flex"},Oe=t("a",{href:"#",class:"px-4 py-2 text-sm text-pickled-900 dark:text-rock-blue-100 w-[100] flex-1"},"Reference Type",-1),Ee=t("option",{value:"one-to-one"},"One to One",-1),Ne=t("option",{value:"one-to-many"},"One to Many",-1),Ue=t("option",{value:"many-to-one"},"Many to One",-1),Se=t("option",{value:"many-to-many"},"Many to Many",-1),Ve=[Ee,Ne,Ue,Se],Re={class:"overflow-x-auto"},Be={class:"mb-4 mx-10 mt-5"},Ae={class:"flex items-center mb-4"},Me=t("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-pickled-900 dark:text-pickled-300"},"Stay on form?",-1),De=["disabled"];function Ie(s,e,a,c,o,n){const p=g("router-link"),b=g("HansonTable");return i(),u("div",null,[t("nav",M,[t("ol",D,[(i(!0),u(O,null,E(n.crumbs,l=>(i(),u("li",{class:"inline-flex items-center",key:l.order},[l.name==="Home"?(i(),f(p,{key:0,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[I,v(" "+w(l.label),1)]),_:2},1032,["to"])):(i(),f(p,{key:1,to:l.route,class:"inline-flex items-center text-sm font-medium text-pickled-700 hover:text-rock-blue-600 dark:text-pickled-400 dark:hover:text-rock-blue-50"},{default:k(()=>[H,v(" "+w(l.label),1)]),_:2},1032,["to"]))]))),128))])]),z,F,t("form",{onSubmit:e[25]||(e[25]=y((...l)=>n.createTable&&n.createTable(...l),["prevent"])),class:"mx-10 overflow-x-auto"},[t("div",G,[L,r(t("input",{type:"text",class:"mt-1 p-2 border rounded-md w-full bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_name","onUpdate:modelValue":e[0]||(e[0]=l=>o.table_name=l),placeholder:"Enter table name"},null,512),[[d,o.table_name]])]),t("div",j,[K,r(t("input",{type:"text",class:"mt-1 p-2 border rounded-md w-full bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"parent_table_name","onUpdate:modelValue":e[1]||(e[1]=l=>o.parent_table_name=l),placeholder:"Enter table name"},null,512),[[d,o.parent_table_name]])]),t("div",Y,[J,t("div",Q,[r(t("input",{onKeyup:[e[2]||(e[2]=h((...l)=>n.addTableColumn&&n.addTableColumn(...l),["enter"])),e[3]||(e[3]=h((...l)=>n.clearOptions&&n.clearOptions(...l),["esc"]))],onClick:e[4]||(e[4]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onBlur:e[5]||(e[5]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onFocus:e[6]||(e[6]=(...l)=>n.clearOptions&&n.clearOptions(...l)),onChange:e[7]||(e[7]=l=>n.validateNameUnique()),type:"text",class:"mt-1 p-2 border rounded-md w-full bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_name","onUpdate:modelValue":e[8]||(e[8]=l=>o.table_column_name=l),placeholder:"Column name"},null,544),[[d,o.table_column_name]]),t("div",Z,[r(t("select",{class:"mt-1 p-2 border rounded-md w-full mt-5 sm:mt-0 bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_type","onUpdate:modelValue":e[9]||(e[9]=l=>o.table_column_type=l),onChange:e[10]||(e[10]=(...l)=>n.options&&n.options(...l)),"aria-placeholder":"Select type of column",placeholder:"Select"},W,544),[[m,o.table_column_type]]),o.table_column_type?(i(),u("button",{key:0,id:"menu-full-dropdown-button",onClick:e[11]||(e[11]=(...l)=>n.options&&n.options(...l)),type:"button",class:"px-2 py-2 bg-rock-blue text-rock-blue-100 rounded-full"},$)):_("",!0),t("button",{type:"button",class:"px-2 sm:px-2 py-2 sm:py-2 bg-rock-blue text-pickled-800 rounded-full",onClick:e[12]||(e[12]=(...l)=>n.addTableColumn&&n.addTableColumn(...l))},oe)]),t("div",te,[N(U,{type:"transition",name:"slide_down","enter-active-class":"animate__fadeInDownBig","leave-active-class":"animate__fadeOutUpBig"},{default:k(()=>[o.table_column_type?(i(),u("div",le,[t("ul",ne,[t("li",se,[re,r(t("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_options.required","onUpdate:modelValue":e[13]||(e[13]=l=>o.table_column_options.required=l),onChange:e[14]||(e[14]=l=>n.updateOptions(o.table_column_options.required,o.table_column_options.unique,o.table_column_options.foreign_key,o.table_column_options.references_table,o.table_column_options.references_column,o.table_column_options.relation_type,o.table_column_options.default)),type:"checkbox"},ue,544),[[m,o.table_column_options.required]])]),t("li",ce,[pe,r(t("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2",id:"table_column_options.unique","onUpdate:modelValue":e[15]||(e[15]=l=>o.table_column_options.unique=l),onChange:e[16]||(e[16]=l=>n.updateOptions(o.table_column_options.required,o.table_column_options.unique,o.table_column_options.foreign_key,o.table_column_options.references_table,o.table_column_options.references_column,o.table_column_options.relation_type,o.table_column_options.default)),type:"checkbox"},be,544),[[m,o.table_column_options.unique]])]),t("li",me,[ke,r(t("select",{class:"mt-0 p-2 border rounded-lg w-[100] bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 text-pickled-900 flex-end",id:"table_column_options.foreign_key","onUpdate:modelValue":e[17]||(e[17]=l=>o.table_column_options.foreign_key=l),onChange:e[18]||(e[18]=l=>n.updateOptions(o.table_column_options.required,o.table_column_options.unique,o.table_column_options.foreign_key,o.table_column_options.references_table,o.table_column_options.references_column,o.table_column_options.relation_type,o.table_column_options.default)),type:"checkbox"},ge,544),[[m,o.table_column_options.foreign_key]])]),t("li",he,[ye,r(t("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[200] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100",id:"table_column_options.default","onUpdate:modelValue":e[19]||(e[19]=l=>o.table_column_options.default=l),placeholder:"Default"},null,512),[[d,o.table_column_options.default]])]),o.table_column_options.foreign_key=="true"?(i(),u("li",ve,[we,r(t("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[100] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 flex-end",id:"table_column_options.references_table","onUpdate:modelValue":e[20]||(e[20]=l=>o.table_column_options.references_table=l),placeholder:"Table to reference"},null,512),[[d,o.table_column_options.references_table]])])):_("",!0),o.table_column_options.foreign_key=="true"?(i(),u("li",Te,[Ce,r(t("input",{type:"text",class:"mt-1 p-2 border rounded-md w-[100] bg-rock-blue-300 dark:bg-pickled-600 text-pickled-900 dark:text-rock-blue-100 flex-end",id:"table_column_options.references_column","onUpdate:modelValue":e[21]||(e[21]=l=>o.table_column_options.references_column=l),placeholder:""},null,512),[[d,o.table_column_options.references_column]])])):_("",!0),o.table_column_options.foreign_key=="true"?(i(),u("li",qe,[Oe,r(t("select",{class:"mt-0 p-2 border rounded-lg w-[100] text-pickled-900 bg-rock-blue-300 dark:bg-pickled-600 dark:text-rock-blue-100 flex-end",id:"table_column_options.relation_type","onUpdate:modelValue":e[22]||(e[22]=l=>o.table_column_options.relation_type=l),onChange:e[23]||(e[23]=l=>n.updateOptions(o.table_column_options.required,o.table_column_options.unique,o.table_column_options.foreign_key,o.table_column_options.references_table,o.table_column_options.references_column,o.table_column_options.relation_type,o.table_column_options.default)),type:"checkbox"},Ve,544),[[m,o.table_column_options.relation_type]])])):_("",!0)]),t("button",{type:"button",onClick:e[24]||(e[24]=y(l=>n.saveOptions(o.table_column_options.required,o.table_column_options.unique,o.table_column_options.foreign_key,o.table_column_options.references_table,o.table_column_options.references_column,o.table_column_options.relation_type,o.table_column_options.default),["prevent"])),class:"px-8 py-1 mt-5 bg-rock-blue text-rock-blue-100 rounded-md text-sm w-full text-center"}," Save ")])):_("",!0)]),_:1})])])])],32),t("div",Re,[o.table_columns.length>0?(i(),f(b,{key:0,columns:o.table_columns,table_data:o.table_columns,class:"mx-5 table-width-less-aside z-10"},null,8,["columns","table_data"])):_("",!0)]),t("div",Be,[t("div",Ae,[r(t("input",{"onUpdate:modelValue":e[26]||(e[26]=l=>o.stay_on_page=l),id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 text-rock-blue-600 bg-pickled-800 border-pickled-300 rounded focus:ring-rock-blue-400 dark:focus:ring-rock-blue-400 dark:ring-offset-pickled-800 focus:ring-2 dark:bg-pickled-700 dark:border-pickled-600"},null,512),[[S,o.stay_on_page]]),Me])]),t("button",{disabled:o.table_columns.length==0,class:V([o.table_columns.length==0?"opacity-50":"","px-4 py-2 bg-rock-blue dark:text-rock-blue-100 text-pickled-900 rounded-md mx-10"]),onClick:e[27]||(e[27]=(...l)=>n.createTable&&n.createTable(...l)),type:"submit"}," Create Table ",10,De)])}const Ge=C(A,[["render",Ie]]);export{Ge as default};
