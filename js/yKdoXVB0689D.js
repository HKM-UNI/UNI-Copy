var referencia=function(r){"use strict";var t=!0,e=40,a=[0,0,0,0,0,0,0,0,0,0],n=[0,0,0,0,0,0,0,0,0,0],i=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],o=[],c=[0,0,0,0,0,0,0,0,0,0];Array.prototype.forEach2=function(r){for(var t=this.length,e=0;t>e;e++)r(this[e],e)},new function r(){var s=0;jQuery(".br-article-list-inner",".br-article-list").each((function(){var r=jQuery(this),u=s;if(s+=1,r.find(".br-article").size()>0){if(!t)return!1;var d=(parseInt(r.find(".br-article").css("margin-right"),10),parseInt(r.parent().css("width"),10),r),l=0;d.find(".br-article").each((function(){l=l+parseInt(jQuery(this).width(),10)+parseInt(jQuery(this).css("padding-right"),10)+parseInt(jQuery(this).css("margin-right"),10)})),c[u]=l/2,i[u]&&(jQuery(this).parent().parent().parent().addClass("isscrolling"),jQuery(".br-article-list-inner").eq(u).parent().parent().parent().attr("rel",u),r.find(".br-article").clone().appendTo(this),i[u]=!1);var y=c[u]+n[u];Math.abs(y)<=Math.abs(a[u])&&function(r){a[r]=0,jQuery(".br-article-list").eq(r).find(".br-article-list-inner").css("left","0px")}(u),o[u]||(o[u]=setInterval((function(){!function(r,t){a[t]=a[t]-1,r.css("left",a[t]+"px")}(r,u)}),e))}})),setTimeout((function(){new r}),e)},jQuery(document).on("ready",breakingInit);jQuery(".breaking-news").on("mouseenter",(function(){var r=jQuery(this).attr("rel");clearTimeout(o[r])})).on("mouseleave",(function(){var r=jQuery(this).attr("rel");o[r]=!1})),jQuery("[data-spacer-color]","body").toArray().forEach2((function(r){var t=jQuery(r);t.css({color:t.data("spacer-color"),"background-color":t.data("spacer-color")})}))}(jQuery);function breakingInit(){jQuery("[data-ot-css]","body").toArray().forEach2((function(r){var t=jQuery(r);t.attr("style",t.data("ot-css"))})),window.devicePixelRatio>1&&(jQuery(".retina-check","body").toArray().forEach2((function(r){jQuery(r).addClass("go-retina")})),jQuery("img[data-ot-retina]","body").toArray().forEach2((function(r){var t=jQuery(r),e=new Image;return""!=t.data("ot-retina")&&(e.src=t.attr("src"),void jQuery(e).load((function(){var r=jQuery(this);t.attr("src",a(r[0].width,r[0].height)),t.css({"background-image":"url('"+t.data("ot-retina")+"')","background-size":"100% 100%","background-repeat":"none"})})))})))}