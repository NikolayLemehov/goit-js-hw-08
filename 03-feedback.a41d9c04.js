function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function h(t){return c=t,f=setTimeout(w,e),l?y(t):a}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=o}function w(){var t=p();if(j(t))return O(t);f=setTimeout(w,function(t){var n=e-(t-u);return s?v(n,o-(t-c)):n}(t))}function O(t){return f=void 0,m&&r?y(t):(r=i=void 0,a)}function T(){var t=p(),n=j(t);if(r=arguments,i=this,u=t,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,e),y(u)}return void 0===f&&(f=setTimeout(w,e)),a}return e=g(e)||0,b(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,e):o,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form"),h=function(){const t=(e=y,[...e.elements].filter((t=>t.hasAttribute("name"))).reduce(((t,e)=>({...t,[e.getAttribute("name")]:""})),{}));var e;try{return JSON.parse(localStorage.getItem("feedback-form-state"))||t}catch(e){return t}}();var j;j=h,[...y.elements].forEach((t=>t.value=j[t.name])),y.addEventListener("input",t(e)((function(t){h[t.target.name]=t.target.value,e=h,localStorage.setItem("feedback-form-state",JSON.stringify(e));var e}),1e3));
//# sourceMappingURL=03-feedback.a41d9c04.js.map
