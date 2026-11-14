import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { artifacts, destinations, statusText } from './data.js';
import './style.css';

const $ = (s) => document.querySelector(s);
let selectedDestination = 'moon';
let selectedArtifact = artifacts[0].id;
let statusFilter = 'all';
let scene, camera, renderer, controls, raycaster, pointer, clickable = [], planetMeshes = [];
const sceneHost = $('#scene');

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#070b18');
  camera = new THREE.PerspectiveCamera(48, sceneHost.clientWidth / 520, 0.1, 300);
  camera.position.set(0, 15, 33);
  renderer = new THREE.WebGLRenderer({ antialias:true, alpha:false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(sceneHost.clientWidth, 520);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  sceneHost.innerHTML = '<div class="scene-label">INTERACTIVE SCHEMATIC · NOT TO SCALE</div><div class="scene-controls"><button id="reset-view" title="Reset view">↺</button><span>DRAG TO ROTATE · SCROLL TO ZOOM</span></div>';
  sceneHost.prepend(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.minDistance = 12; controls.maxDistance = 75;
  controls.target.set(0,0,0);
  scene.add(new THREE.AmbientLight(0x9ba9ce, 1.7));
  const key = new THREE.PointLight(0xffffff, 150); key.position.set(-15,12,15); scene.add(key);
  const sun = new THREE.Mesh(new THREE.SphereGeometry(2.2,32,32), new THREE.MeshBasicMaterial({color:0xffc76a}));
  scene.add(sun);
  const glow = new THREE.Mesh(new THREE.SphereGeometry(2.7,32,32), new THREE.MeshBasicMaterial({color:0xffa63d,transparent:true,opacity:.08}));
  scene.add(glow);
  const starGeo = new THREE.BufferGeometry(), starCount = 1500, positions = [];
  for(let i=0;i<starCount;i++){ positions.push((Math.random()-.5)*180,(Math.random()-.5)*100,(Math.random()-.5)*180); }
  starGeo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  scene.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xb9c8ec,size:.12,transparent:true,opacity:.7})));
  const planets = [
    ['Mercury',3.7,.38,0x9c9a95],['Venus',5.1,.58,0xd5a16e],['Earth',6.8,.62,0x4b8ed8],
    ['Moon',7.8,.22,0xc9cbd1],['Mars',9.3,.48,0xd36d4d],['Jupiter',13.2,1.35,0xc99b6c],
    ['Saturn',17.1,1.05,0xd8c08d],['Uranus',21,.78,0x82c8d0],['Neptune',24.5,.75,0x456bd4]
  ];
  planets.forEach(([name,r,size,color])=>{
    const orbit = new THREE.Mesh(new THREE.RingGeometry(r-.012,r+.012,160),new THREE.MeshBasicMaterial({color:0x34405b,side:THREE.DoubleSide,transparent:true,opacity:.55}));
    orbit.rotation.x=Math.PI/2; scene.add(orbit);
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(size,32,24),new THREE.MeshStandardMaterial({color,roughness:.9,metalness:.02}));
    mesh.position.set(r,0,0); mesh.userData={planet:name}; scene.add(mesh); planetMeshes.push(mesh); clickable.push(mesh);
    if(name==='Saturn'){
      const ring = new THREE.Mesh(new THREE.RingGeometry(1.3,2.05,64),new THREE.MeshBasicMaterial({color:0xbba77c,side:THREE.DoubleSide,transparent:true,opacity:.65}));
      ring.rotation.x=Math.PI/2.35; mesh.add(ring);
    }
  });
  raycaster=new THREE.Raycaster(); pointer=new THREE.Vector2();
  renderer.domElement.addEventListener('click', onSceneClick);
  $('#reset-view').addEventListener('click',()=>{camera.position.set(0,15,33);controls.target.set(0,0,0);});
  window.addEventListener('resize',resizeScene);
  animate();
}
function resizeScene(){ if(!renderer)return; const w=sceneHost.clientWidth; camera.aspect=w/520; camera.updateProjectionMatrix(); renderer.setSize(w,520); }
function animate(){ requestAnimationFrame(animate); controls?.update(); planetMeshes.forEach((p,i)=>{p.rotation.y+=.001+(i*.0001)}); renderer.render(scene,camera); }
function onSceneClick(e){
  const rect=renderer.domElement.getBoundingClientRect();
  pointer.x=((e.clientX-rect.left)/rect.width)*2-1; pointer.y=-((e.clientY-rect.top)/rect.height)*2+1;
  raycaster.setFromCamera(pointer,camera);
  const hit=raycaster.intersectObjects(clickable)[0];
  if(!hit)return;
  const map={Moon:'moon',Mars:'mars',Jupiter:'jupiter',Saturn:'saturn'};
  if(map[hit.object.userData.planet]) chooseDestination(map[hit.object.userData.planet]);
}

function renderDestinations(){
  $('#destination-list').innerHTML=destinations.map(d=>`<button class="destination-btn ${d.id===selectedDestination?'active':''}" data-dest="${d.id}"><i style="--dot:${d.color}"></i>${d.name}<span>↗</span></button>`).join('');
  $('#destination-list').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>chooseDestination(b.dataset.dest)));
  const d=destinations.find(x=>x.id===selectedDestination) || {name:"All destinations", description:"Browse the complete starter archive across every catalogued destination."};
  $('#destination-title').textContent=d.name; $('#destination-description').textContent=d.description;
  $('#destination-count').textContent=selectedDestination==='all' ? artifacts.length : artifacts.filter(a=>a.destination===selectedDestination).length;
}
function chooseDestination(id){selectedDestination=id;renderDestinations();renderFilters();renderArtifacts();}
function renderFilters(){
  $('#filter-destinations').innerHTML=['all',...destinations.map(d=>d.id)].map(id=>{
    const label=id==='all'?'All destinations':destinations.find(d=>d.id===id).name;
    return `<button class="chip ${id===selectedDestination?'selected':''}" data-filter="${id}">${label}</button>`;
  }).join('');
  $('#filter-destinations').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>chooseDestination(b.dataset.filter==='all'?'all':b.dataset.filter)));
}
function renderArtifacts(){
  let list=artifacts.filter(a=>(selectedDestination==='all'||a.destination===selectedDestination)&&(statusFilter==='all'||a.status===statusFilter));
  $('#artifact-grid').innerHTML=list.map(a=>`<button class="artifact-card ${a.id===selectedArtifact?'chosen':''}" data-id="${a.id}">
    <span class="card-top"><span>${a.year}</span><span class="status-pill ${a.status}">${a.statusLabel}</span></span>
    <span class="artifact-glyph">${glyph(a.destination)}</span>
    <strong>${a.name}</strong><span class="card-type">${a.type}</span>
    <span class="card-bottom">${destinations.find(d=>d.id===a.destination).name}<b>↗</b></span>
  </button>`).join('') || '<p class="no-results">No records match these filters.</p>';
  $('#artifact-grid').querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>selectArtifact(b.dataset.id)));
}
function glyph(dest){return ({moon:'☾',mars:'◉',jupiter:'♃',saturn:'♄',deep:'✦',small:'◇'})[dest]||'✦';}
function selectArtifact(id){
  selectedArtifact=id; const a=artifacts.find(x=>x.id===id); if(!a)return;
  renderArtifacts();
  const dest=destinations.find(d=>d.id===a.destination);
  $('#detail-card').innerHTML=`<div class="detail-top"><span class="eyebrow">MISSION RECORD / ${a.year}</span><span class="status-pill ${a.status}">${a.statusLabel}</span></div>
    <h3>${a.name}</h3><p class="detail-sub">${a.type} · ${a.agency}</p>
    <div class="detail-grid"><div><span class="small-label">DESTINATION</span><b>${dest.name}</b></div><div><span class="small-label">MISSION PERIOD / YEAR</span><b>${a.year}</b></div></div>
    <div class="detail-block"><span class="small-label">THE STORY</span><p>${a.summary}</p></div>
    <div class="detail-block"><span class="small-label">SCIENTIFIC LEGACY</span><p>${a.achievement}</p></div>
    <div class="detail-block"><span class="small-label">WHERE IT IS</span><p>${a.location}</p></div>
    <div class="fact-box"><span>FIELD NOTE</span><p>${a.fact}</p></div>
    <div class="caveat"><b>PRECISION NOTE</b><p>${a.caveat}</p></div>
    <div class="source-list"><span class="small-label">PRIMARY READING</span>${a.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a>`).join('')}</div>`;
  $('#story').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function addChat(text,who){const el=document.createElement('div');el.className=`chat-message ${who}`;el.textContent=text;$('#chat-log').append(el);$('#chat-log').scrollTop=$('#chat-log').scrollHeight;}
function answerQuestion(q){
  const s=q.toLowerCase();
  let matches=artifacts.filter(a=>(a.name+' '+a.summary+' '+a.achievement+' '+a.fact+' '+a.destination+' '+a.statusLabel).toLowerCase().includes(s.replace(/[?!.]/g,'').trim()));
  if(s.includes('still operating')||s.includes('still active')||s.includes('communicat')) matches=artifacts.filter(a=>a.status==='active');
  else if(s.includes('apollo rover')) matches=artifacts.filter(a=>a.id.includes('rover'));
  else if(s.includes('spirit')) matches=artifacts.filter(a=>a.id==='spirit');
  else if(s.includes('opportunity')) matches=artifacts.filter(a=>a.id==='opportunity');
  else if(s.includes('moon')) matches=artifacts.filter(a=>a.destination==='moon');
  else if(s.includes('mars')) matches=artifacts.filter(a=>a.destination==='mars');
  else if(s.includes('voyager')) matches=artifacts.filter(a=>a.id.startsWith('voyager'));
  if(matches.length){
    const a=matches.slice(0,3);
    return a.map(x=>`${x.name}: ${x.summary} Key legacy: ${x.achievement} Status: ${statusText[x.status]}.`).join('\n\n');
  }
  return "I couldn't find a confident answer in the local archive. Try asking about Apollo, Surveyor 3, Sojourner, Spirit, Opportunity, Phoenix, InSight, Galileo, Cassini, Voyager, Pioneer 10 or NEAR Shoemaker. For anything not in these records, consult the linked NASA mission sources.";
}
$('#chat-form').addEventListener('submit',e=>{e.preventDefault();const q=$('#chat-input').value.trim();if(!q)return;addChat(q,'user');addChat(answerQuestion(q),'assistant');$('#chat-input').value='';});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>{$('#chat-input').value=b.dataset.question;$('#chat-form').requestSubmit();}));
$('#status-filter').addEventListener('change',e=>{statusFilter=e.target.value;renderArtifacts();});
$('#artifact-count').textContent=artifacts.length;
renderDestinations();renderFilters();renderArtifacts();selectArtifact(selectedArtifact);initScene();