(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.getElementById("fileInput"),c=document.getElementById("fileList"),f=document.getElementById("fileUploadButton"),d=()=>typeof Storage<"u",u=()=>{if(!d()){alert("Local storage is not supported in your browser.");return}localStorage.getItem("fileSpaces")||localStorage.setItem("fileSpaces",JSON.stringify({}))},p=async s=>{const t=s.target.files[0];if(t&&t.size<=1024*1024){const n=await t.text();m(t.name,n),a()}else alert("Please upload a file less than 1MB.")},m=(s,t)=>{const n=JSON.parse(localStorage.getItem("fileSpaces"))||{};n[s]=t,localStorage.setItem("fileSpaces",JSON.stringify(n))},a=()=>{const s=JSON.parse(localStorage.getItem("fileSpaces"))||{};c.innerHTML="",Object.keys(s).forEach(t=>{const n=document.createElement("li");n.textContent=t,c.appendChild(n)})},g=()=>{u(),a(),l.addEventListener("change",p),f.addEventListener("click",()=>l.click())};document.addEventListener("DOMContentLoaded",g);
