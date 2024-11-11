import{m as o}from"./mermaid-0603ccf8-bbe47fb5.js";import{a3 as i,aR as c,a5 as m,a6 as l,ad as s,aA as p,a4 as u,a7 as g}from"./index-6a3e9155.js";const f={name:"MermaidComponent",computed:{themeIs(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},darkTheme(){return!!window.matchMedia("(prefers-color-scheme: dark)").matches},themeVariables(){return this.darkTheme?{primaryColor:"#2f465b",darkMode:!0,textColor:"#333"}:{primaryColor:"#CFE2E5"}},svg(){return this.graph}},data(){return{diagramData:"",graph:"",isPanning:!1,panStartX:0,panStartY:0,panX:0,panY:0,zoomLevel:1}},methods:{async getMermaidData(){try{const e=await c();this.diagramData=e,console.log("data",this.diagramData),this.renderMermaidDiagram(this.diagramData||e)}catch(e){console.log(e)}},async renderMermaidDiagram(e){console.log("variables",this.themeVariables);try{o.initialize({graph:{useMaxWidth:!1},theme:"base",themeVariables:{primaryBorderColor:"#41717A"},securityLevel:"loose",startOnLoad:!0,arrowMarkerAbsolute:!1})}catch(t){console.log(t)}finally{o.render("mermaidContainer",e).then(({bindFunctions:t,svg:a})=>{this.graph=a,console.log(t),t==null||t(this.graph)}),console.log("svg",this.graph)}},startPan(e){e.button===0&&(this.isPanning=!0,this.panStartX=e.clientX,this.panStartY=e.clientY)},handlePan(e){if(this.isPanning){const t=e.clientX-this.panStartX,a=e.clientY-this.panStartY;this.panX+=t,this.panY+=a,this.panStartX=e.clientX,this.panStartY=e.clientY,this.updatePan()}},endPan(){this.isPanning=!1},handleZoom(e){e.ctrlKey&&e.deltaY<0&&e.buttons===0?(this.zoomLevel+=.01,this.updateZoom()):e.ctrlKey&&e.deltaY>0&&e.buttons===0&&(this.zoomLevel-=.01,this.updateZoom())},updatePan(){const e=document.getElementById("mcontain");e.style.transform=`translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`},updateZoom(){const e=document.getElementById("mcontain");e.style.transform=`translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`}},mounted(){this.getMermaidData();const e=document.getElementById("mcontain");e.addEventListener("mousedown",this.startPan),e.addEventListener("mousemove",this.handlePan),e.addEventListener("mouseup",this.endPan),e.addEventListener("wheel",this.handleZoom)},watch:{diagramData(){this.renderMermaidDiagram(this.diagramData)}}},_=s("h1",{class:"bottom-5 pl-5 fixed text-rock-blue-700 dark:text-pickled-700 invisible md:visible"}," CTRL Key with mouse wheel to zoom ",-1),M=s("div",{id:"mermaidContainer",class:"w-screen h-full mermaid"},null,-1),y=["innerHTML"];function k(e,t,a,d,h,n){return m(),l("div",null,[_,M,s("div",{innerHTML:n.svg,class:"mt-24 ml-10",onWheel:t[0]||(t[0]=r=>n.handleZoom(r)),onClick:t[1]||(t[1]=r=>n.handleZoom(r)),id:"mcontain"},null,40,y)])}const x=i(f,[["render",k]]),C={components:{MermaidComponent:x},data(){return{}},methods:{},mounted(){p().getTables()}};function v(e,t,a,d,h,n){const r=u("MermaidComponent");return m(),l("div",null,[g(r)])}const w=i(C,[["render",v]]);export{w as default};
