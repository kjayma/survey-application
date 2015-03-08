jQuery.fn.selectToUISlider=function(e){function t(e){return e.constructor==Array}function i(e){return"text"==a.tooltipSrc?r[e].text:r[e].value}function l(e){return(e/(r.length-1)*100).toFixed(2)+"%"}var n=jQuery(this),a=jQuery.extend({labels:3,tooltip:!0,tooltipSrc:"text",labelSrc:"value",sliderOptions:null},e),s=function(){var e=[];return n.each(function(){e.push("handle_"+jQuery(this).attr("id"))}),e}(),r=function(){var e=[];return n.eq(0).find("option").each(function(){e.push({value:jQuery(this).attr("value"),text:jQuery(this).text()})}),e}(),u=function(){if(n.eq(0).find("optgroup").size()>0){var e=[];return n.eq(0).find("optgroup").each(function(t){e[t]={},e[t].label=jQuery(this).attr("label"),e[t].options=[],jQuery(this).find("option").each(function(){e[t].options.push({text:jQuery(this).text(),value:jQuery(this).attr("value")})})}),e}return null}(),o={step:1,min:0,orientation:"horizontal",max:r.length-1,range:n.length>1,slide:function(e,t){var l=jQuery(t.handle),n=i(t.value);l.attr("aria-valuetext",n).attr("aria-valuenow",t.value).find(".ui-slider-tooltip .ttContent").text(n);var a=jQuery("#"+l.attr("id").split("handle_")[1]);a.find("option").eq(t.value).attr("selected","selected")},values:function(){var e=[];return n.each(function(){e.push(jQuery(this).get(0).selectedIndex)}),e}()};a.sliderOptions=e?jQuery.extend(o,e.sliderOptions):o,n.bind("change keyup click",function(){var e=jQuery(this).get(0).selectedIndex,t=jQuery("#handle_"+jQuery(this).attr("id")),i=t.data("handleNum");t.parents(".ui-slider:eq(0)").slider("values",i,e)});var d=jQuery("<div></div>");if(n.each(function(e){var t="",l=jQuery("label[for="+jQuery(this).attr("id")+"]"),n=l.size()>0?"Slider control for "+l.text():"",r=l.attr("id")||l.attr("id","label_"+s[e]).attr("id");0==a.tooltip&&(t=' style="display: none;"'),jQuery('<a href="#" tabindex="0" id="'+s[e]+'" class="ui-slider-handle" role="slider" aria-labelledby="'+r+'" aria-valuemin="'+a.sliderOptions.min+'" aria-valuemax="'+a.sliderOptions.max+'" aria-valuenow="'+a.sliderOptions.values[e]+'" aria-valuetext="'+i(a.sliderOptions.values[e])+'" ><span class="screenReaderContext">'+n+'</span><span class="ui-slider-tooltip ui-widget-content ui-corner-all"'+t+'><span class="ttContent"></span><span class="ui-tooltip-pointer-down ui-widget-content"><span class="ui-tooltip-pointer-down-inner"></span></span></span></a>').data("handleNum",e).appendTo(d)}),u){var p=0,c=d.append('<dl class="ui-slider-scale ui-helper-reset" role="presentation"></dl>').find(".ui-slider-scale:eq(0)");jQuery(u).each(function(e){c.append('<dt style="width: '+(100/u.length).toFixed(2)+"%; left:"+(e/(u.length-1)*100).toFixed(2)+'%"><span>'+this.label+"</span></dt>");var t=this.options;jQuery(this.options).each(function(e){var i=p==r.length-1||0==p?'style="display: none;"':"",n="text"==a.labelSrc?t[e].text:t[e].value;c.append('<dd style="left:'+l(p)+'"><span class="ui-slider-label">'+n+'</span><span class="ui-slider-tic ui-widget-content"'+i+"></span></dd>"),p++})})}else{var c=d.append('<ol class="ui-slider-scale ui-helper-reset" role="presentation"></ol>').find(".ui-slider-scale:eq(0)");jQuery(r).each(function(e){var t=e==r.length-1||0==e?'style="display: none;"':"",i="text"==a.labelSrc?this.text:this.value;c.append('<li style="left:'+l(e)+'"><span class="ui-slider-label">'+i+'</span><span class="ui-slider-tic ui-widget-content"'+t+"></span></li>")})}a.labels>1&&d.find(".ui-slider-scale li:last span.ui-slider-label, .ui-slider-scale dd:last span.ui-slider-label").addClass("ui-slider-label-show");for(var h=Math.max(1,Math.round(r.length/a.labels)),f=0;f<r.length;f+=h)r.length-f>h&&d.find(".ui-slider-scale li:eq("+f+") span.ui-slider-label, .ui-slider-scale dd:eq("+f+") span.ui-slider-label").addClass("ui-slider-label-show");d.find(".ui-slider-scale dt").each(function(e){jQuery(this).css({left:(100/u.length*e).toFixed(2)+"%"})}),d.insertAfter(jQuery(this).eq(this.length-1)).slider(a.sliderOptions).attr("role","application").find(".ui-slider-label").each(function(){jQuery(this).css("marginLeft",-jQuery(this).width()/2)}),d.find(".ui-tooltip-pointer-down-inner").each(function(){var e=jQuery(".ui-tooltip-pointer-down-inner").css("borderTopWidth"),t=jQuery(this).parents(".ui-slider-tooltip").css("backgroundColor");jQuery(this).css("border-top",e+" solid "+t)});var y=d.slider("values");return t(y)?jQuery(y).each(function(e){d.find(".ui-slider-tooltip .ttContent").eq(e).text(i(this))}):d.find(".ui-slider-tooltip .ttContent").eq(0).text(i(y)),this};