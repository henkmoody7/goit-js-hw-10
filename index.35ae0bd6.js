var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};var e={},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return l.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,a=setTimeout(_,n),l?b(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function _(){var t=d();if(j(t))return T(t);a=setTimeout(_,function(t){var e=n-(t-c);return s?y(e,r-(t-f)):e}(t))}function T(t){return a=void 0,v&&o?b(t):(o=i=void 0,u)}function $(){var t=d(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(_,n),b(c)}return void 0===a&&(a=setTimeout(_,n)),u}return n=m(n)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(m(e.maxWait)||0,n):r,v="trailing"in e?!!e.trailing:v),$.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},$.flush=function(){return void 0===a?u:T(d())},$};function v(t){const e=t.map((t=>`<li class='country-list__item'>\n      <img class='country-list__flag' src="${t.flags.svg}" alt="Country flag"/>\n      <p class='country-list__text'>${t.name.official}</p>\n        </li>`)).join(""),o=t.map((t=>`<img class='country-info__flag' src="${t.flags.svg}" alt="Country flag"/>\n    <h1 class='country-info__tittle'>${t.name.common}</h1>\n    <p class ='country-info__text'>Capital: ${t.capital}</p>\n    <p class ='country-info__text'>Population: ${t.population}</p>\n    <p class ='country-info__text'>Languages: ${Object.values(t.languages)}</p>`)).join("");t.length>10?alert("Too many matches found. Please enter a more specific name."):(1===t.length&&(b(),n.countryInfo.insertAdjacentHTML("beforeend",o)),t.length>1&&(b(),n.countryList.insertAdjacentHTML("beforeend",e)))}function b(){n.countryList.innerHTML="",n.countryInfo.innerHTML=""}n.input.addEventListener("input",e((function(t){const n=t.target.value.trim();if(""===n)return void b();(e=n,fetch(`https://restcountries.com/v3.1//name/${e}?fields=name,capital,population,flags,languages`).then((t=>t.json()))).then((t=>(console.log(t),t))).then(v);var e}),300));
//# sourceMappingURL=index.35ae0bd6.js.map