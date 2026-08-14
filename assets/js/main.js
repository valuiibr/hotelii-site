const header=document.querySelector('[data-header]');
const toggle=document.querySelector('[data-nav-toggle]');
const nav=document.querySelector('[data-nav]');
if(header){const sync=()=>header.classList.toggle('scrolled',window.scrollY>24);sync();window.addEventListener('scroll',sync,{passive:true})}
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const reveals=document.querySelectorAll('[data-reveal]');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});reveals.forEach(el=>observer.observe(el))}else{reveals.forEach(el=>el.classList.add('visible'))}

const styleBrandWords=()=>{const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode()){const n=walker.currentNode,p=n.parentElement;if(p&&!/^(SCRIPT|STYLE|NOSCRIPT|TITLE)$/i.test(p.tagName)&&!p.closest('.hotelii-word,.valuii-word')&&/(Hotelii|Valuii)/.test(n.nodeValue))nodes.push(n)}nodes.forEach(n=>{const f=document.createDocumentFragment();n.nodeValue.split(/(Hotelii|Valuii)/).forEach(part=>{if(part==='Hotelii'||part==='Valuii'){const s=document.createElement('span');s.className=part.toLowerCase()+'-word';s.textContent=part;f.appendChild(s)}else f.appendChild(document.createTextNode(part))});n.replaceWith(f)})};
styleBrandWords();
