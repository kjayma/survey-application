!function(t,e,o){function i(o,i,n){var r=e.createElement(o);return i&&(r.id=te+i),n&&(r.style.cssText=n),t(r)}function n(){return o.innerHeight?o.innerHeight:t(o).height()}function r(t){var e=W.length,o=(z+t)%e;return 0>o?e+o:o}function a(t,e){return Math.round((/%/.test(t)?("x"===e?k.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function l(t,e){return t.retinaUrl&&o.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function s(t){"contains"in w[0]&&!w[0].contains(t.target)&&(t.stopPropagation(),w.focus())}function c(){var e,o=t.data(j,Z);null==o?(K=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=t.extend({},o);for(e in K)t.isFunction(K[e])&&"on"!==e.slice(0,2)&&(K[e]=K[e].call(j));K.rel=K.rel||j.rel||t(j).data("rel")||"nofollow",K.href=K.href||t(j).attr("href"),K.title=K.title||j.title,"string"==typeof K.href&&(K.href=t.trim(K.href))}function d(o,i){t(e).trigger(o),le.trigger(o),t.isFunction(i)&&i.call(j)}function u(){var t,e,o,i,n,r=te+"Slideshow_",a="click."+te;K.slideshow&&W[1]?(e=function(){clearTimeout(t)},o=function(){(K.loop||W[z+1])&&(t=setTimeout(J.next,K.slideshowSpeed))},i=function(){B.html(K.slideshowStop).unbind(a).one(a,n),le.bind(ne,o).bind(ie,e).bind(re,n),w.removeClass(r+"off").addClass(r+"on")},n=function(){e(),le.unbind(ne,o).unbind(ie,e).unbind(re,n),B.html(K.slideshowStart).unbind(a).one(a,function(){J.next(),i()}),w.removeClass(r+"on").addClass(r+"off")},K.slideshowAuto?i():n()):w.removeClass(r+"off "+r+"on")}function f(o){q||(j=o,c(),W=t(j),z=0,"nofollow"!==K.rel&&(W=t("."+ee).filter(function(){var e,o=t.data(this,Z);return o&&(e=t(this).data("rel")||o.rel||this.rel),e===K.rel}),z=W.index(j),-1===z&&(W=W.add(j),z=W.length-1)),g.css({opacity:parseFloat(K.opacity),cursor:K.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&w.add(g).removeClass(V),K.className&&w.add(g).addClass(K.className),V=K.className,K.closeButton?$.html(K.close).appendTo(y):$.appendTo("<div/>"),Q||(Q=U=!0,w.css({visibility:"hidden",display:"block"}),E=i(se,"LoadedContent","width:0; height:0; overflow:hidden"),y.css({width:"",height:""}).append(E),P=v.height()+H.height()+y.outerHeight(!0)-y.height(),D=T.width()+C.width()+y.outerWidth(!0)-y.width(),N=E.outerHeight(!0),_=E.outerWidth(!0),K.w=a(K.initialWidth,"x"),K.h=a(K.initialHeight,"y"),J.position(),u(),d(oe,K.onOpen),I.add(O).hide(),w.focus(),K.trapFocus&&e.addEventListener&&(e.addEventListener("focus",s,!0),le.one(ae,function(){e.removeEventListener("focus",s,!0)})),K.returnFocus&&le.one(ae,function(){t(j).focus()})),x())}function p(){!w&&e.body&&(X=!1,k=t(o),w=i(se).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=i(se,"Overlay").hide(),L=t([i(se,"LoadingOverlay")[0],i(se,"LoadingGraphic")[0]]),b=i(se,"Wrapper"),y=i(se,"Content").append(O=i(se,"Title"),S=i(se,"Current"),R=t('<button type="button"/>').attr({id:te+"Previous"}),M=t('<button type="button"/>').attr({id:te+"Next"}),B=i("button","Slideshow"),L),$=t('<button type="button"/>').attr({id:te+"Close"}),b.append(i(se).append(i(se,"TopLeft"),v=i(se,"TopCenter"),i(se,"TopRight")),i(se,!1,"clear:left").append(T=i(se,"MiddleLeft"),y,C=i(se,"MiddleRight")),i(se,!1,"clear:left").append(i(se,"BottomLeft"),H=i(se,"BottomCenter"),i(se,"BottomRight"))).find("div div").css({"float":"left"}),F=i(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),I=M.add(R).add(S).add(B),t(e.body).append(g,w.append(b,F)))}function m(){function o(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return w?(X||(X=!0,M.click(function(){J.next()}),R.click(function(){J.prev()}),$.click(function(){J.close()}),g.click(function(){K.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;Q&&K.escKey&&27===e&&(t.preventDefault(),J.close()),Q&&K.arrowKey&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),R.click()):39===e&&(t.preventDefault(),M.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,o):t("."+ee).live("click."+te,o)),!0):!1}function x(){var n,r,s,u=J.prep,f=++ce;U=!0,A=!1,j=W[z],c(),d(he),d(ie,K.onLoad),K.h=K.height?a(K.height,"y")-N-P:K.innerHeight&&a(K.innerHeight,"y"),K.w=K.width?a(K.width,"x")-_-D:K.innerWidth&&a(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=a(K.maxWidth,"x")-_-D,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=a(K.maxHeight,"y")-N-P,K.mh=K.h&&K.h<K.mh?K.h:K.mh),n=K.href,G=setTimeout(function(){L.show()},100),K.inline?(s=i(se).hide().insertBefore(t(n)[0]),le.one(he,function(){s.replaceWith(E.children())}),u(t(n))):K.iframe?u(" "):K.html?u(K.html):h(K,n)?(n=l(K,n),A=e.createElement("img"),t(A).addClass(te+"Photo").bind("error",function(){K.title=!1,u(i(se,"Error").html(K.imgError))}).one("load",function(){var e;f===ce&&(A.alt=t(j).attr("alt")||t(j).attr("data-alt")||"",K.retinaImage&&o.devicePixelRatio>1&&(A.height=A.height/o.devicePixelRatio,A.width=A.width/o.devicePixelRatio),K.scalePhotos&&(r=function(){A.height-=A.height*e,A.width-=A.width*e},K.mw&&A.width>K.mw&&(e=(A.width-K.mw)/A.width,r()),K.mh&&A.height>K.mh&&(e=(A.height-K.mh)/A.height,r())),K.h&&(A.style.marginTop=Math.max(K.mh-A.height,0)/2+"px"),W[1]&&(K.loop||W[z+1])&&(A.style.cursor="pointer",A.onclick=function(){J.next()}),A.style.width=A.width+"px",A.style.height=A.height+"px",setTimeout(function(){u(A)},1))}),setTimeout(function(){A.src=n},1)):n&&F.load(n,K.data,function(e,o){f===ce&&u("error"===o?i(se,"Error").html(K.xhrError):t(this).contents())})}var g,w,b,y,v,T,C,H,W,k,E,F,L,O,S,B,M,R,$,I,K,P,D,N,_,j,z,A,Q,U,q,G,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",oe=te+"_open",ie=te+"_load",ne=te+"_complete",re=te+"_cleanup",ae=te+"_closed",he=te+"_purge",le=t("<a/>"),se="div",ce=0,de={};t.colorbox||(t(p),J=t.fn[Z]=t[Z]=function(e,o){var i=this;if(e=e||{},p(),m()){if(t.isFunction(i))i=t("<a/>"),e.open=!0;else if(!i[0])return i;o&&(e.onComplete=o),i.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(i)||e.open)&&f(i[0])}return i},J.position=function(e,o){function i(){v[0].style.width=H[0].style.width=y[0].style.width=parseInt(w[0].style.width,10)-D+"px",y[0].style.height=T[0].style.height=C[0].style.height=parseInt(w[0].style.height,10)-P+"px"}var r,h,l,s=0,c=0,d=w.offset();if(k.unbind("resize."+te),w.css({top:-9e4,left:-9e4}),h=k.scrollTop(),l=k.scrollLeft(),K.fixed?(d.top-=h,d.left-=l,w.css({position:"fixed"})):(s=h,c=l,w.css({position:"absolute"})),c+=K.right!==!1?Math.max(k.width()-K.w-_-D-a(K.right,"x"),0):K.left!==!1?a(K.left,"x"):Math.round(Math.max(k.width()-K.w-_-D,0)/2),s+=K.bottom!==!1?Math.max(n()-K.h-N-P-a(K.bottom,"y"),0):K.top!==!1?a(K.top,"y"):Math.round(Math.max(n()-K.h-N-P,0)/2),w.css({top:d.top,left:d.left,visibility:"visible"}),b[0].style.width=b[0].style.height="9999px",r={width:K.w+_+D,height:K.h+N+P,top:s,left:c},e){var u=0;t.each(r,function(t){return r[t]!==de[t]?void(u=e):void 0}),e=u}de=r,e||w.css(r),w.dequeue().animate(r,{duration:e||0,complete:function(){i(),U=!1,b[0].style.width=K.w+_+D+"px",b[0].style.height=K.h+N+P+"px",K.reposition&&setTimeout(function(){k.bind("resize."+te,J.position)},1),o&&o()},step:i})},J.resize=function(t){var e;Q&&(t=t||{},t.width&&(K.w=a(t.width,"x")-_-D),t.innerWidth&&(K.w=a(t.innerWidth,"x")),E.css({width:K.w}),t.height&&(K.h=a(t.height,"y")-N-P),t.innerHeight&&(K.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=E.scrollTop(),E.css({height:"auto"}),K.h=E.height()),E.css({height:K.h}),e&&E.scrollTop(e),J.position("none"===K.transition?0:K.speed))},J.prep=function(o){function n(){return K.w=K.w||E.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function a(){return K.h=K.h||E.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(Q){var s,c="none"===K.transition?0:K.speed;E.empty().remove(),E=i(se,"LoadedContent").append(o),E.hide().appendTo(F.show()).css({width:n(),overflow:K.scrolling?"auto":"hidden"}).css({height:a()}).prependTo(y),F.hide(),t(A).css({"float":"none"}),s=function(){function o(){t.support.opacity===!1&&w[0].style.removeAttribute("filter")}var n,a,s=W.length,u="frameBorder",f="allowTransparency";Q&&(a=function(){clearTimeout(G),L.hide(),d(ne,K.onComplete)},O.html(K.title).add(E).show(),s>1?("string"==typeof K.current&&S.html(K.current.replace("{current}",z+1).replace("{total}",s)).show(),M[K.loop||s-1>z?"show":"hide"]().html(K.next),R[K.loop||z?"show":"hide"]().html(K.previous),K.slideshow&&B.show(),K.preloading&&t.each([r(-1),r(1)],function(){var o,i,n=W[this],r=t.data(n,Z);r&&r.href?(o=r.href,t.isFunction(o)&&(o=o.call(n))):o=t(n).attr("href"),o&&h(r,o)&&(o=l(r,o),i=e.createElement("img"),i.src=o)})):I.hide(),K.iframe?(n=i("iframe")[0],u in n&&(n[u]=0),f in n&&(n[f]="true"),K.scrolling||(n.scrolling="no"),t(n).attr({src:K.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",a).appendTo(E),le.one(he,function(){n.src="//about:blank"}),K.fastIframe&&t(n).trigger("load")):a(),"fade"===K.transition?w.fadeTo(c,1,o):o())},"fade"===K.transition?w.fadeTo(c,0,function(){J.position(0,s)}):J.position(c,s)}},J.next=function(){!U&&W[1]&&(K.loop||W[z+1])&&(z=r(1),f(W[z]))},J.prev=function(){!U&&W[1]&&(K.loop||z)&&(z=r(-1),f(W[z]))},J.close=function(){Q&&!q&&(q=!0,Q=!1,d(re,K.onCleanup),k.unbind("."+te),g.fadeTo(K.fadeOut||0,0),w.stop().fadeTo(K.fadeOut||0,0,function(){w.add(g).css({opacity:1,cursor:"auto"}).hide(),d(he),E.empty().remove(),setTimeout(function(){q=!1,d(ae,K.onClosed)},1)}))},J.remove=function(){w&&(w.stop(),t.colorbox.close(),w.stop().remove(),g.remove(),q=!1,w=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(j)},J.settings=Y)}(jQuery,document,window),function(t){$colorboxOverlay="",$colorboxBox="",t(document).on("ready",function(){$colorboxOverlay=t("#cboxOverlay"),$colorboxBox=t("#colorbox"),t(document).on("click",'[data-colorbox="true"]',function(e){e.preventDefault(),t.colorbox({height:t(this).data("colorbox-height")||!1,width:t(this).data("colorbox-width")||!1,maxWidth:t(this).data("colorbox-max-width")||!1,maxHeight:t(this).data("colorbox-max-height")||!1,iframe:t(this).data("colorbox-iframe")||!1,photo:t(this).data("colorbox-photo")||!1,innerHeight:t(this).data("colorbox-innerheight")||!1,innerWidth:t(this).data("colorbox-innerwidth")||!1,title:t(this).data("colorbox-title")||!1,className:t(this).data("colorbox-class-name")||!1,href:t(this).data("colorbox-href")||t(this).attr("href"),html:t(this).data("colorbox-html")||!1,inline:t(this).data("colorbox-inline")||!1,opacity:.5})}),t('[data-colorbox-static="true"]').colorbox({height:function(){return t(this).data("colorbox-height")||!1},width:function(){return t(this).data("colorbox-width")||!1},maxWidth:function(){return t(this).data("colorbox-max-width")||!1},maxHeight:function(){return t(this).data("colorbox-max-height")||!1},iframe:function(){return t(this).data("colorbox-iframe")||!1},photo:function(){return t(this).data("colorbox-photo")||!1},innerHeight:function(){return t(this).data("colorbox-innerheight")||!1},innerWidth:function(){return t(this).data("colorbox-innerwidth")||!1},title:function(){return t(this).data("colorbox-title")||!1},className:function(){return t(this).data("colorbox-class-name")||!1},href:function(){return t(this).data("colorbox-href")||t(this).attr("href")},html:function(){return t(this).data("colorbox-html")||!1},inline:function(){return t(this).data("colorbox-inline")||!1},opacity:.5})}),t(document).on("page:change",function(){$colorboxOverlay&&$colorboxOverlay.appendTo("body"),$colorboxBox&&$colorboxBox.appendTo("body")})}(jQuery);