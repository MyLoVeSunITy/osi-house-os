const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {webcrypto}=require('node:crypto');
function app(saved=null){
 const nodes=new Map(),writes=[];
 const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',style:{},value:s==='#role'?'Управляющий':'',dataset:{},close(){},showModal(){}});return nodes.get(s)};
 const ctx={document:{querySelector:node,querySelectorAll:()=>[]},localStorage:{getItem:()=>saved,setItem:(k,v)=>writes.push([k,v])},structuredClone,Intl,Date,location:{hash:''},window:{addEventListener(){}},console,setTimeout:()=>0,clearTimeout(){},crypto:webcrypto,TextEncoder,Uint8Array};
 vm.createContext(ctx);vm.runInContext(fs.readFileSync('frontend/app.js','utf8'),ctx);return{ctx,node,writes,run:s=>vm.runInContext(s,ctx)};
}
test('all seven routes render with seeded demo state',()=>{const a=app();for(const route of ['overview','requests','finance','votes','maintenance','documents','trust']){a.ctx.location.hash='#'+route;a.run('render()');assert(a.node('#content').innerHTML.length>400,route)}});
test('financial ledger reconciles to displayed closing balance',()=>{assert.equal(app().run('ledger.reduce((sum,row)=>sum+row[3],1100000)'),1284500)});
test('search and status filters combine',()=>{const a=app();a.run("query='протечка';filter='Новая'");assert.equal(a.run('filtered().length'),1);a.run("filter='Решена'");assert.equal(a.run('filtered().length'),0)});
test('user text is HTML-escaped',()=>{assert.equal(app().run(`esc('<img src=x onerror="x">')`),'&lt;img src=x onerror=&quot;x&quot;&gt;')});
test('recorded vote changes totals and hides voting actions',()=>{const a=app();a.run("state.votes[1]='yes'");const html=a.run('votebox(state.proposals[0],true)');assert(html.includes('За: 69'));assert(!html.includes('data-vote='))});
test('a new event invalidates the old snapshot and persists changes',()=>{const a=app();a.run("state.proof={hash:'old'};event('Test event')");assert.equal(a.run('state.proof'),null);assert.equal(JSON.parse(a.writes.at(-1)[1]).events[0].text,'Test event')});
test('invalid storage JSON safely starts the demo',()=>{assert.equal(app('{broken').run('state.requests.length'),4)});
test('SHA-256 snapshot verifies against its exact payload',async()=>{const a=app();a.ctx.location.hash='#trust';a.run('render()');await a.node('#proof').onclick();const proof=JSON.parse(a.run('JSON.stringify(state.proof)'));const hash=require('node:crypto').createHash('sha256').update(proof.snapshot,'utf8').digest('hex');assert.equal(proof.hash,hash);assert.equal(proof.network,'none-local-only')});
