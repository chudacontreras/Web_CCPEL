/*
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2014 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
(function(i,g,h){var c=function(j){return i[j]||i.getElementsByTagName(j)[0];},a=function(l,j,k){return typeof l=="function"?l.apply(j,k):l;},e=null,b=false,f=function(){if(!b){b=true;
var k=".twipsy { display: block; position: absolute; visibility: visible; padding: 5px; font-size: 12px; z-index: 11000;}					.twipsy.above .twipsy-arrow { bottom: 0; left: 50%; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #000000;}					.twipsy.above-left .twipsy-arrow { bottom: 0; left: 18px; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #000000;}					.twipsy.above-right .twipsy-arrow { bottom: 0; right: 18px; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #000000;}					.twipsy.left .twipsy-arrow { top: 50%; right: 0; margin-top: -5px; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid #000000;}					.twipsy.below .twipsy-arrow { top: 0; left: 50%; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 5px solid #000000;}					.twipsy.below-left .twipsy-arrow { top: 0; left: 18px; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 5px solid #000000;}					.twipsy.below-right .twipsy-arrow { top: 0; right: 18px; margin-left: -5px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 5px solid #000000;}					.twipsy.right .twipsy-arrow { top: 50%; left: 0; margin-top: -5px; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid #000000;}					.twipsy-inner { padding: 3px 8px; background-color: #000000; color: white; text-align: center; max-width: 200px; text-decoration: none; -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px;}					.twipsy-arrow { position: absolute; width: 0; height: 0;}",j=new Element("style",{type:"text/css"}).inject(c("head"),"bottom");
j.styleSheet?j.styleSheet.cssText=k:j.innerHTML=k;}};if(typeOf(Browser.Features.transition)!="boolean"){Browser.Features.transition=(function(){var j=(i.body||i.documentElement).style;
if(j.transition!==h||j.MsTransition!==h){e="TransitionEnd";}else{if(j.WebkitTransition!==h){e="webkitTransitionEnd";}else{if(j.MozTransition!==h){e="transitionend";
}else{if(j.OTransition!==h){e="oTransitionEnd";}}}}return e!=null;})();}var d=new Class({initialize:function(k,j){this.options=Object.merge({},d.defaults,j);
this.element=i.id(k);this.enabled=true;if(j.injectStyles){f();}this.fixTitle();},show:function(){var s,j,q,n,l,p,m,t,k,o;if(this.hasContent()&&this.enabled){l=this.setContent().getTip();
if(this.options.animate){moofx(l).animate({opacity:0.8},{duration:"150ms",equation:"ease-in",callback:function(){this.isShown=true;}.bind(this)});}l.setStyles({top:0,left:0,display:"block"}).inject(document.body,"top");
m=this.element.getPosition();t=this.element.getSize();s={left:m.x,top:m.y,width:t.x,height:t.y};k=l.getSize();j=k.x;q=k.y;n=a(this.options.placement,this,[l,this.element]);
o=s.left-j-this.options.offset;if(o<0&&n=="left"){n="right";}var r={x:this.options.offset.x||this.options.offset,y:this.options.offset.y||this.options.offset};
switch(n){case"below":p={top:s.top+s.height+this.options.offset.y,left:s.left+s.width/2-j/2};break;case"below-left":p={top:s.top+s.height+this.options.offset.y,left:s.left-this.options.offset.x};
break;case"below-right":p={top:s.top+s.height+this.options.offset.y,left:s.left+s.width-j+this.options.offset.x};break;case"above":p={top:s.top-q-this.options.offset.y,left:s.left+s.width/2-j/2};
break;case"above-left":p={top:s.top-q-this.options.offset.y,left:s.left-this.options.offset.x};break;case"above-right":p={top:s.top-q-this.options.offset,left:s.left+s.width-j+this.options.offset};
break;case"left":p={top:s.top+s.height/2-q/2,left:o};break;case"right":p={top:s.top+s.height/2-q/2,left:s.left+s.width+this.options.offset};break;}l.setStyles(p).addClass(n);
}return this;},hide:function(){var k=this.getTip(),j=function(){this.isShown=false;k.dispose();}.bind(this);if(!this.hasContent()){j();return this;}moofx(k).animate({opacity:0},{duration:"150ms",equation:"ease-in",callback:j});
return this;},setContent:function(){this.getTip().getElement(".twipsy-inner").set(this.options.html?"html":"text",this.getTitle());return this;},hasContent:function(){return this.getTitle().replace(/\s+/g,"")!=="";
},getTitle:function(){var l,j=this.element,k=this.options;this.fixTitle();if(typeof k.title=="string"){l=j.getProperty(k.title=="title"?"data-original-title":k.title);
}else{if(typeof k.title=="function"){l=k.title.call(j);}}l=(""+l).clean();return l||k.fallback;},getTip:function(){if(!this.tip){this.tip=new Element("div.twipsy",{html:this.options.template});
}return this.tip;},validate:function(){if(!this.element.parentNode){this.hide();this.element=null;this.options=null;return false;}return true;},enable:function(){this.enabled=true;
return this;},disable:function(){this.enabled=false;return this;},toggleEnabled:function(){this.enabled=!this.enabled;return this;},toggle:function(){this[this.getTip().hasClass("in")?"hide":"show"]();
return this;},fixTitle:function(){var j=this.element;if(j.getProperty("title")||!j.getProperty("data-original-title")){j.setProperty("data-original-title",j.getProperty("title")||"").removeProperty("title");
}return this;}});d.defaults={placement:"above",animate:true,delayIn:0,delayOut:0,html:false,live:false,offset:0,title:"title",trigger:"hover",injectStyles:true,fallback:"",template:'<div class="twipsy-inner"></div><div class="twipsy-arrow"></div>'};
d.rejectAttrOptions=["title"];d.elementOptions=function(m,k){var n={},j=d.rejectAttrOptions,l=j.length;["placement","animate","delay-in","delay-out","html","offset","title","trigger","template","inject-styles"].each(function(q){var p=null,o;
if(m.dataset){p=m.dataset[q.camelCase()];}else{p=m.getProperty("data-"+q);}if(p){o=p.toLowerCase().clean();if(o==="true"){p=true;}else{if(o==="false"){p=false;
}else{if(/^[0-9]+$/.test(o)){o=parseInt(o,10);}}}n[q.camelCase()]=p;}});while(l--){delete n[j[l]];}return Object.merge({},k,n);};Element.implement({twipsy:function(r){var q,p,m,l,j="twipsy";
if(r===true){return this.retrieve(j);}else{if(typeof r=="string"){q=this.retrieve(j);if(q){q[r]();}return this;}}r=Object.merge({},d.defaults,r);function k(t){var s=t.retrieve(j);
if(!s){s=new d(t,d.elementOptions(t,r));t.store(j,s);}return s;}function n(){var s=k(this);s.hoverState="in";if(r.delayIn==0){s.show();}else{s.fixTitle();
setTimeout(function(){if(s.hoverState=="in"){s.show();}},r.delayIn);}}function o(){var s=k(this);s.hoverState="out";if(r.delayOut==0){s.hide();}else{setTimeout(function(){if(s.hoverState=="out"){s.hide();
}},r.delayOut);}}if(r.trigger!="manual"){m=r.trigger=="hover"?"mouseenter":"focus";l=r.trigger=="hover"?"mouseleave":"blur";k(this);document.id(this).addEvent(m,n).addEvent(l,o);
}return this;}});Elements.implement({twipsy:function(j){this.each(function(k){k.twipsy(j);});return this;}});g.Twipsy=d;})(document,self,undefined);