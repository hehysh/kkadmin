var b=(e,n,r)=>new Promise((s,u)=>{var c=t=>{try{i(r.next(t))}catch(o){u(o)}},a=t=>{try{i(r.throw(t))}catch(o){u(o)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(c,a);i((r=r.apply(e,n)).next())});import{B as h,u as g}from"./useTable.9fa11066.js";import{T as C}from"./useForm.663be315.js";import{u as w}from"./index.ee915511.js";import{M as B,c as S,s as T}from"./MenuDrawer.11e447b5.js";import{l as D,m as F}from"./friend.9fe4d4b4.js";import{_ as A,u as y,f as E}from"./index.4eef60d5.js";import{B as k,a1 as m,D as R,F as $,w as l,a6 as d,ae as _}from"./vendor.a33f6cba.js";import"./index.aa68983e.js";import"./index.b19d4ec4.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.d8f93c88.js";import"./useContentViewHeight.99838d56.js";/* empty css               *//* empty css               *//* empty css               */import"./index.99f6a057.js";/* empty css                */import"./sortable.esm.b519ac50.js";/* empty css                *//* empty css              *//* empty css               */import"./index.7d31b76f.js";import"./download.58f9a643.js";/* empty css               */import"./index.69966eb3.js";const v=k({name:"FriendSpiderList",components:{BasicTable:h,MenuDrawer:B,TableAction:C},setup(){const e=y(),{userInfo:n}=E(),[r,{openDrawer:s}]=w(),[u,{reload:c}]=g({title:"\u6211\u7684\u670B\u53CB\u5708\u94FE\u63A5\u8BA2\u9605\u5217\u8868",api:D,columns:S,formConfig:{labelWidth:120,schemas:T},isTreeTable:!1,pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!0,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function a(){s(!0,{isUpdate:!1})}function i(f){s(!0,{record:f,isUpdate:!0})}function t(f){return b(this,null,function*(){yield F({_id:f._id}),o()})}function o(){c()}function p(){window.open(e.apiUrl+e.urlPrefix+`/friend/spider/subscribe/${n==null?void 0:n._id}`)}return{registerTable:u,registerDrawer:r,handleCreate:a,handleEdit:i,handleDelete:t,handleSuccess:o,mySubscription:p}}}),M=_(" \u6211\u7684\u8BA2\u9605\u94FE\u63A5 "),U=_(" \u65B0\u589E\u8BA2\u9605\u94FE\u63A5 ");function x(e,n,r,s,u,c){const a=m("a-button"),i=m("TableAction"),t=m("BasicTable"),o=m("MenuDrawer");return R(),$("div",null,[l(t,{onRegister:e.registerTable},{toolbar:d(()=>[l(a,{type:"primary",onClick:e.mySubscription},{default:d(()=>[M]),_:1},8,["onClick"]),l(a,{type:"primary",onClick:e.handleCreate},{default:d(()=>[U]),_:1},8,["onClick"])]),action:d(({record:p})=>[l(i,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,p)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,p)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),l(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var le=A(v,[["render",x]]);export{le as default};
