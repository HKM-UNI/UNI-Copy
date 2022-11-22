/*!
 * jQuery lockfixed plugin
 * http://www.directlyrics.com/code/lockfixed/
 *
 * Copyright 2012-2015 Yvo Schaap
 * Released under the MIT license
 * http://www.directlyrics.com/code/lockfixed/license.txt
 *
 * Date: Sun March 30 2015 12:00:01 GMT
 */
!function(t,o){t.extend({lockfixed:function(o,e){if(e&&e.offset?(e.offset.bottom=parseInt(e.offset.bottom,10),e.offset.top=parseInt(e.offset.top,10)):e.offset={bottom:100,top:0},(o=t(o))&&o.offset()){var s=o.css("position"),i=parseInt(o.css("marginTop"),10),n=o.css("top"),f=o.offset().top,p=!1;(!0===e.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS ([0-9])_/)||navigator.userAgent.match(/\bAndroid ([0-9])\./i))&&(p=!0),o.wrap("<div class='lf-ghost' style='height:"+o.outerHeight()+"px;display:"+o.css("display")+"'></div>"),t(window).bind("DOMContentLoaded load scroll resize orientationchange lockfixed:pageupdate",o,(function(a){if(!p||!document.activeElement||"INPUT"!==document.activeElement.nodeName){var r=0;r=o.outerHeight();a=o.parent().innerWidth()-parseInt(o.css("marginLeft"),10)-parseInt(o.css("marginRight"),10);var c=t(document).height()-e.offset.bottom,d=t(window).scrollTop();"fixed"===o.css("position")||p||(f=o.offset().top,n=o.css("top")),d>=f-(i||0)-e.offset.top?(r=c<d+r+i+e.offset.top?d+r+i+e.offset.top-c:0,p?o.css({marginTop:parseInt(d-f-r,10)+2*e.offset.top+"px"}):o.css({position:"fixed",top:e.offset.top-r+"px",width:a+"px"})):o.css({position:s,top:n,width:a+"px",marginTop:(i&&!p?i:0)+"px"})}}))}}})}(jQuery);