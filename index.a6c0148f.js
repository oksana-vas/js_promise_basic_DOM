new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){e()})}).then(function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="message">\n        Promise was resolved!\n      </div>\n    ')}).catch(function(){}),new Promise(function(e,n){setTimeout(function(){// eslint-disable-next-line prefer-promise-reject-errors
n()},3e3)}).then(function(){}).catch(function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="message error-message">\n        Promise was rejected!\n      </div>\n    ')});//# sourceMappingURL=index.a6c0148f.js.map

//# sourceMappingURL=index.a6c0148f.js.map
