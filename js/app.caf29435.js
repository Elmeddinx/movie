(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,i=1;i<c.length;i++){var s=c[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1472:function(e,t,c){},"2e89":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r={class:"container-fluid bg-dark px-0"},o={class:"container py-5"};function a(e,t,c,a,i,s){var u=Object(n["x"])("header-vue"),b=Object(n["x"])("Cards");return Object(n["q"])(),Object(n["e"])("div",r,[Object(n["h"])(u),Object(n["f"])("div",o,[Object(n["h"])(b)])])}var i=function(e){return Object(n["t"])("data-v-69bcf876"),e=e(),Object(n["r"])(),e},s={class:"container-fluid px-0"},u={class:"container"},b={class:"card bg-transparent border-0"},l=i((function(){return Object(n["f"])("span",{class:"text-danger"},"Now Streaming",-1)})),d=i((function(){return Object(n["f"])("h1",{class:"text-white mb-4"},"Come on search for a new movie",-1)})),f={class:"form-group"};function v(e,t,c,r,o,a){return Object(n["q"])(),Object(n["e"])("div",s,[Object(n["f"])("div",u,[Object(n["f"])("div",b,[l,d,Object(n["f"])("form",{action:"",class:"d-flex",onInput:t[2]||(t[2]=Object(n["F"])((function(){return a.getSearchMovie&&a.getSearchMovie.apply(a,arguments)}),["prevent"]))},[Object(n["f"])("div",f,[Object(n["E"])(Object(n["f"])("input",{type:"text",class:"form-control",placeholder:"Search Movie","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.searchMovie=e})},null,512),[[n["B"],o.searchMovie]])]),Object(n["f"])("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=Object(n["F"])((function(){return a.getSearchMovie&&a.getSearchMovie.apply(a,arguments)}),["prevent"]))}," Search ")],32)])])])}var p={data:function(){return{searchMovie:""}},methods:{getSearchMovie:function(){0!==this.searchMovie.length?this.$router.push("/search/"):this.$router.push("/"),this.$store.dispatch("getSearchMovie",{val:this.searchMovie,id:this.$route.params.id}),console.log(this.$route.params.id)}}},O=(c("f99e"),c("6b0d")),j=c.n(O);const h=j()(p,[["render",v],["__scopeId","data-v-69bcf876"]]);var g=h;function m(e,t,c,r,o,a){var i=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(i)}var M={components:{}};c("8776");const w=j()(M,[["render",m],["__scopeId","data-v-47e80c68"]]);var y=w,S={components:{HeaderVue:g,Cards:y}};c("e938");const x=j()(S,[["render",a]]);var _=x,k=c("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var q=c("6c02"),P=function(e){return Object(n["t"])("data-v-606c6f58"),e=e(),Object(n["r"])(),e},$={class:"row"},C={class:"col-sm-12 col-md-6 col-lg-5 col-xl-4"},z={class:"card bg-transparent border-0"},D=["src"],I={class:"col-sm-12 col-md-6 col-lg-7 col-xl-8"},F={class:"card bg-transparent border-0"},H={class:"card-title text-white"},N={class:"card-text text-white mt-4"},U={class:"text-white my-4"},A={class:"text-white mb-5"},B={class:"buttons d-flex"},T=Object(n["g"])("Back To Home"),E=P((function(){return Object(n["f"])("button",{class:"btn btn-danger"},[Object(n["f"])("i",{class:"bi bi-heart-fill"})],-1)})),J=P((function(){return Object(n["f"])("button",{class:"btn btn-danger"},[Object(n["f"])("i",{class:"bi bi-share-fill"})],-1)}));function R(e,t,c,r,o,a){var i=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("div",$,[Object(n["f"])("div",C,[Object(n["f"])("div",z,[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.getMovie.poster_path),alt:""},null,8,D)])]),Object(n["f"])("div",I,[Object(n["f"])("div",F,[Object(n["f"])("h1",H,Object(n["z"])(e.getMovie.title),1),Object(n["f"])("p",N," Description: "+Object(n["z"])(e.getMovie.overview),1),Object(n["f"])("span",U,"Release Date: "+Object(n["z"])(e.getMovie.release_date),1),Object(n["f"])("span",A,"Rate: "+Object(n["z"])(e.getMovie.vote_average),1),Object(n["f"])("div",B,[Object(n["h"])(i,{tag:"button",class:"btn btn-danger",to:"/"},{default:Object(n["D"])((function(){return[T]})),_:1}),E,J])])])])}var V=c("5530"),G=c("5502"),K={computed:Object(V["a"])({},Object(G["b"])(["getMovie"])),mounted:function(){this.$store.dispatch("getMovie",this.$route.params.id)}};c("c231");const L=j()(K,[["render",R],["__scopeId","data-v-606c6f58"]]);var Q=L,W={class:"row"};function X(e,t,c,r,o,a){var i=Object(n["x"])("SearchCard"),s=Object(n["x"])("pagination-search");return Object(n["q"])(),Object(n["e"])("div",W,[(Object(n["q"])(),Object(n["d"])(i,{key:this.$route.params.id})),Object(n["h"])(s)])}var Y={"aria-label":"Page navigation"},Z={class:"pagination"};function ee(e,t){var c=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("nav",Y,[Object(n["f"])("ul",Z,[(Object(n["q"])(),Object(n["e"])(n["a"],null,Object(n["w"])(10,(function(e){return Object(n["f"])("li",{class:"page-item",key:e},[Object(n["h"])(c,{class:"page-link",to:{name:"search",params:{id:e}}},{default:Object(n["D"])((function(){return[Object(n["g"])(Object(n["z"])(e),1)]})),_:2},1032,["to"])])})),64))])])}c("ed1b");const te={},ce=j()(te,[["render",ee],["__scopeId","data-v-3c3dda9a"]]);var ne=ce,re={class:"card border-0 rounded"},oe=["src"],ae={class:"card-footer bg-transparent"};function ie(e,t,c,r,o,a){var i=Object(n["x"])("router-link");return Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.getSearchMovie,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"col-6 col-md-4 col-lg-3",key:t},[Object(n["f"])("div",re,[Object(n["h"])(i,{to:{name:"Movie",params:{id:e.id}}},{default:Object(n["D"])((function(){return[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"",class:"card-img-top"},null,8,oe)]})),_:2},1032,["to"]),Object(n["f"])("div",ae,[Object(n["f"])("h6",null,Object(n["z"])(e.title),1)])])])})),128)}var se={computed:Object(V["a"])({},Object(G["b"])(["getSearchMovie"]))};const ue=j()(se,[["render",ie]]);var be=ue,le={components:{PaginationSearch:ne,SearchCard:be}};const de=j()(le,[["render",X]]);var fe=de,ve={class:"row"};function pe(e,t,c,r,o,a){var i=Object(n["x"])("Card"),s=Object(n["x"])("pagination-default");return Object(n["q"])(),Object(n["e"])("div",ve,[(Object(n["q"])(),Object(n["d"])(i,{key:this.$route.params.id})),Object(n["h"])(s)])}var Oe={"aria-label":"Page navigation"},je={class:"pagination"};function he(e,t){var c=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("nav",Oe,[Object(n["f"])("ul",je,[(Object(n["q"])(),Object(n["e"])(n["a"],null,Object(n["w"])(10,(function(e){return Object(n["f"])("li",{class:"page-item",key:e},[Object(n["h"])(c,{class:"page-link",to:{name:"Home",params:{id:e}}},{default:Object(n["D"])((function(){return[Object(n["g"])(Object(n["z"])(e),1)]})),_:2},1032,["to"])])})),64))])])}c("b0ce");const ge={},me=j()(ge,[["render",he],["__scopeId","data-v-57645f7f"]]);var Me=me,we={class:"card border-0 rounded"},ye=["src"],Se={class:"card-footer bg-transparent"};function xe(e,t,c,r,o,a){var i=Object(n["x"])("router-link");return Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.getMovies,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"col-6 col-md-4 col-lg-3",key:t},[Object(n["f"])("div",we,[Object(n["h"])(i,{to:{name:"Movie",params:{id:e.id}}},{default:Object(n["D"])((function(){return[Object(n["f"])("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:"",class:"card-img-top"},null,8,ye)]})),_:2},1032,["to"]),Object(n["f"])("div",Se,[Object(n["f"])("h6",null,Object(n["z"])(e.title),1)])])])})),128)}var _e={computed:Object(V["a"])({},Object(G["b"])(["getMovies"])),mounted:function(){this.$store.dispatch("getMovies",this.$route.params.id)}};const ke=j()(_e,[["render",xe]]);var qe=ke,Pe={components:{PaginationDefault:Me,Card:qe},computed:Object(V["a"])({},Object(G["b"])(["ifSearchMovies"]))};c("ae3c");const $e=j()(Pe,[["render",pe],["__scopeId","data-v-5b9dc809"]]);var Ce=$e,ze=[{path:"/:id?",name:"Home",component:Ce},{path:"/search/:id?",name:"search",component:fe},{path:"/movie/:id",name:"Movie",component:Q}],De=Object(q["a"])({history:Object(q["b"])("/"),routes:ze}),Ie=De,Fe=(c("99af"),c("bc3a")),He=c.n(Fe),Ne=Object(G["a"])({state:{Movies:[],Movie:[],SearchMovies:[]},getters:{getMovies:function(e){return e.Movies},getMovie:function(e){return e.Movie},getSearchMovie:function(e){return e.SearchMovies}},mutations:{updateMovies:function(e,t){e.Movies=t},updateMovie:function(e,t){e.Movie=t},updateSearchMovie:function(e,t){e.SearchMovies=t},removeSearchMovies:function(e){e.SearchMovies=[]}},actions:{getMovies:function(e,t){var c=e.commit;He.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US&page=".concat(t)).then((function(e){var t=e.data.results;c("updateMovies",t)}))},getMovie:function(e,t){var c=e.commit;He.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US")).then((function(e){var t=e.data;c("updateMovie",t)}))},getSearchMovie:function(e,t){var c=e.commit;t.val?He.a.get("https://api.themoviedb.org/3/search/movie?api_key=99448b9515c8fcdfc5b085944fd430a0&language=en-US&query=".concat(t.val,"&page=").concat(t.id)).then((function(e){c("updateSearchMovie",e.data.results),console.log(t.id)})).catch((function(e){return console.log(e)})):c("removeSearchMovies")}}});c("cd74"),c("ab8b"),c("7b17");Object(n["c"])(_).use(Ne).use(Ie).mount("#app")},"79d8":function(e,t,c){},"7bd3":function(e,t,c){},8776:function(e,t,c){"use strict";c("2e89")},"8dca":function(e,t,c){},a332:function(e,t,c){},a5f0:function(e,t,c){},ae3c:function(e,t,c){"use strict";c("a332")},b0ce:function(e,t,c){"use strict";c("1472")},c231:function(e,t,c){"use strict";c("79d8")},e938:function(e,t,c){"use strict";c("7bd3")},ed1b:function(e,t,c){"use strict";c("a5f0")},f99e:function(e,t,c){"use strict";c("8dca")}});
//# sourceMappingURL=app.caf29435.js.map