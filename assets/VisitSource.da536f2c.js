import{B as o,r as n,T as u,D as r,a2 as l,a6 as s,J as d,Y as f,u as m,c0 as c}from"./vendor.a33f6cba.js";/* empty css                *//* empty css               *//* empty css               */import{u as h}from"./useECharts.f5309ecd.js";import"./index.4eef60d5.js";const v=o({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=n(null),{setOptions:i}=h(t);return u(()=>a.loading,()=>{a.loading||i({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),(p,g)=>(r(),l(m(c),{title:"\u8BBF\u95EE\u6765\u6E90",loading:e.loading},{default:s(()=>[d("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{v as default};
