const products=[
{id:1,name:"Identity Tee — Black",price:899,type:"tshirt",featured:true},
{id:2,name:"SW Core Tee — Bone",price:899,type:"tshirt",featured:true},
{id:3,name:"Built Different Tee",price:999,type:"tshirt"},
{id:4,name:"SW Essential Hoodie",price:1599,type:"hoodie"},
{id:5,name:"Daily Uniform Hoodie",price:1699,type:"hoodie"},
{id:6,name:"Identity Oversized Tee",price:949,type:"tshirt"}
];
let cart=JSON.parse(localStorage.getItem("sw-cart")||"[]");
const $=s=>document.querySelector(s);
function card(p){return `<article class="product-card"><div class="product-img"><div class="shirt"></div></div><div class="product-info"><div><h3>${p.name}</h3><div class="price">₹${p.price}</div></div><button class="add" onclick="addToCart(${p.id})">ADD</button></div></article>`}
function renderProducts(filter="all"){
 const list=filter==="all"?products:products.filter(p=>p.type===filter);
 $("#products").innerHTML=list.map(card).join("");
 $("#featured").innerHTML=products.filter(p=>p.featured).slice(0,2).map(card).join("");
}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);save();openCart()}
function save(){localStorage.setItem("sw-cart",JSON.stringify(cart));renderCart()}
function renderCart(){
 $("#cartCount").textContent=cart.length;
 if(!cart.length){$("#cartItems").innerHTML='<p style="color:#888">Your cart is empty.</p>';$("#subtotal").textContent="₹0";return}
 $("#cartItems").innerHTML=cart.map((p,i)=>`<div class="cart-item"><div><strong>${p.name}</strong><br><span style="color:#999">₹${p.price}</span></div><button class="remove" onclick="removeItem(${i})">Remove</button></div>`).join("");
 $("#subtotal").textContent="₹"+cart.reduce((a,p)=>a+p.price,0);
}
function removeItem(i){cart.splice(i,1);save()}
function openCart(){$("#cartDrawer").classList.add("open");$("#overlay").classList.add("show");$("#cartDrawer").setAttribute("aria-hidden","false")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("show");$("#cartDrawer").setAttribute("aria-hidden","true")}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)}));
$("#cartOpen").onclick=openCart;$("#cartClose").onclick=closeCart;$("#overlay").onclick=closeCart;
$("#checkout").onclick=()=>alert("Demo checkout only. Add a real payment gateway before accepting payments.");
$("#newsletterForm").onsubmit=e=>{e.preventDefault();$("#newsletterMsg").textContent="Thanks — you're on the list.";e.target.reset()};
renderProducts();renderCart();
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
