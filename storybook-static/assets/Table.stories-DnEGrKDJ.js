import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$ as t,Ht as n,K as r,M as i,Rt as a,Ut as o,Z as s,_t as c,bt as l,gt as u,j as d,l as f,mt as p,n as m,qt as h,r as g,st as _,t as v,tt as y,zt as b}from"./legacy-Cujt10Cn.js";import{a as x,c as S,d as C,f as w,i as T,l as E,n as D,o as O,r as k,s as A,t as j,u as M}from"./Paginator-D63PzqU1.js";import{i as N,n as P,r as F,t as I}from"./create-runtime-stories-B91739tg.js";function L(e,t){b(t,!1);let m=Array(100).fill(0).map(()=>({Name:`abc`,Age:Math.random()*100}));f(),z(e,{name:`Default`,asChild:!0,children:(e,t)=>{var a=U(),f=u(a);C(f,{onsort:e=>console.log(`table - sort`,e),pagination:e=>{j(e,{onchangePage:e=>console.log(e),pageIndex:0,pageSize:10,totalCount:100})},children:(e,t)=>{var a=H(),o=c(a);E(o,{children:(e,t)=>{var n=H(),r=c(n);A(r,{id:`Name`,sortable:!0,children:(e,t)=>{var n=B();s(e,n)},$$slots:{default:!0}});var i=l(r,2);A(i,{id:`Age`,sortable:!0,children:(e,t)=>{var n=V();s(e,n)},$$slots:{default:!0}}),s(e,n)},$$slots:{default:!0}});var u=l(o,2);d(u,1,()=>m,i,(e,t)=>{x(e,{children:(e,i)=>{var a=H(),o=c(a);k(o,{children:(e,i)=>{n();var a=y();p(()=>r(a,_(t).Name)),s(e,a)},$$slots:{default:!0}});var u=l(o,2);k(u,{children:(e,i)=>{n();var a=y();p(()=>r(a,_(t).Age)),s(e,a)},$$slots:{default:!0}}),s(e,a)},$$slots:{default:!0}})}),s(e,a)},$$slots:{pagination:!0,default:!0}}),o(a),s(e,a)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<!-- Table fills its parent (h-full) and scrolls internally, so the story has
     to supply a bounded height the way real usages do. -->
<div style="height: 500px">
  <Table onsort={(sort) => console.log('table - sort', sort)}>
    <HeaderRow>
      <HeaderCell id="Name" sortable>
        <div class="bg-red-500">Test</div>
      </HeaderCell>
      <HeaderCell id="Age" sortable>
        <div class="bg-green-500 w-full">Test</div>
      </HeaderCell>
    </HeaderRow>
    {#each data as row}
      <DataRow>
        <DataCell>{row.Name}</DataCell>
        <DataCell>{row.Age}</DataCell>
      </DataRow>
    {/each}

    {#snippet pagination()}
      <Paginator onchangePage={(event) => console.log(event)} pageIndex={0} pageSize={10} totalCount={100} />
    {/snippet}
  </Table>
</div>`}}}),a()}var R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{h(),v(),N(),w(),m(),M(),O(),S(),T(),D(),P(),R={title:`Shared Components/Table`,component:C},{Story:z}=F(R),B=t(`<div class="bg-red-500">Test</div>`),V=t(`<div class="bg-green-500 w-full">Test</div>`),H=t(`<!> <!>`,1),U=t(`<div style="height: 500px"><!></div>`),g(L,{},[],[],{mode:`open`}),L.__docgen={data:[],name:`Table.stories.svelte`},W=I(L,R),G=[`Default`],K={...W.Default,tags:[`svelte-csf-v5`]}})))()}q();export{K as Default,G as __namedExportsOrder,R as default};