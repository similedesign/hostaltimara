document.write( if (window.taValidate == undefined) {
   window.taOnLoad   = window.onload;
   window.taValList  = Array();
   window.taValIndex = 0;
   window.taValidate = function () {
      if (window.taOnLoad != null) {
         try {
         window.taOnLoad();
         } catch (err) { }
      }
      for (ii = 0; ii < window.taValIndex; ii=ii+1) {
         fname = window.taValList[ii]
         fname();
      }
   }
   window.taAddValidator = function (fname) {
      window.taValList[window.taValIndex] = fname;
      window.taValIndex                   = window.taValIndex + 1;
      }
   window.onload = window.taValidate
}
window.taAddValidator (injectrated6187)

                  if(document.createStyleSheet) {
        document.createStyleSheet("http://c1.tacdn.com/css2/widget/cdswidFRR-v1250510475a.css");
      } else {
        var stylesImport = "@import url(' http://c1.tacdn.com/css2/widget/cdswidFRR-v1250510475a.css ');";
        var newSS=document.createElement('link');
        newSS.rel='stylesheet';
        newSS.href='data:text/css,'+escape(stylesImport);
        if (document.getElementsByTagName("head")[0]) {
            document.getElementsByTagName("head")[0].appendChild(newSS);
        } else {             document.write('<link rel="stylesheet" href="data:text/css,' + escape(stylesImport) + '"/>');
        }
      }
        
      var newJs = document.createElement('script');
    newJs.setAttribute('type', 'text/javascript');
    newJs.setAttribute('src', 'http://c1.tacdn.com/js3/widget/cdswidgets_m-c-v1496804870a.js');
    document.getElementsByTagName("head")[0].appendChild(newJs);
  
function injectrated6187() {
    var container = document.getElementById('TA_rated');
  if (container == null) {
        var scriptTags = document.getElementsByTagName("script");
    for (var i=0; i<scriptTags.length; i++)
    {
      if (scriptTags[i] != null && scriptTags[i].src != null &&
          scriptTags[i].src.indexOf("rated?uniq=") >= 0)
      {
        var msgElem = document.createElement('div');
        if (msgElem != null && msgElem != 'undefined')
        {
          msgElem.style.margin='8px';
          msgElem.style.color='red';
          msgElem.innerHTML="Please check the TripAdvisor code and install again.";
          var parentElem = scriptTags[i].parentNode;
          if (parentElem != null && parentElem != 'undefined')
          {
            parentElem.appendChild(msgElem);
          }
          break;
        }
      }
    }
    return;
  }

  
  var widgetHtml = '<div id="CDSWIDFRR" class="widFRR"> '+
'<a target="_blank" href="http://www.tripadvisor.com/"><img src="http://www.tripadvisor.com/img/cdsi/img2/badges/recommended_en-11424-2.gif" alt="TripAdvisor"/></a> '+
'<var class="widFRRCopy"><a target="_blank" href="http://www.tripadvisor.com/Hotel_Review-g312857-d2205122-Reviews-Hostal_Timara-Banos_Tungurahua_Province.html" onclick="ta.cds.handleTALink(11424,this);return true;">Hostal Timara</a></var><!--/ cdsRRFCopy--> '+
'</div><!--/ cdsFRRBadge--> '+
'';

    if (widgetHtml.indexOf("WIDGET_ERR_LINKS") != -1) {
    var linksDiv = document.createElement('div');

    var links = container.getElementsByTagName("a");
    if (links) {
      for (var i=0; i<links.length; ++i) {
                if (links[i].getElementsByTagName("img").length > 0) {
          if (widgetHtml.indexOf("WIDGET_ERR_IMAGE_LINK")) {
            widgetHtml = widgetHtml.replace('<a id="WIDGET_ERR_IMAGE_LINK" href="http://www.tripadvisor.com/" target="_blank">' ,'<a href="' + links[i] + '" target="_blank">');
            widgetHtml = widgetHtml.replace('Reviews of Hotels, Flights and Vacation Rentals', links[i].getElementsByTagName("img")[0].alt);
          }
        }
        else {
          linkDiv = document.createElement('div');
          links[i].setAttribute('target', '_blank');
          linkDiv.appendChild(links[i].cloneNode(true));
          if (linksDiv.getElementsByTagName("div").length == 0) {
            linkDiv.style.margin="8px 0 0 0";
          }
          linksDiv.appendChild(linkDiv);
        }
      }
            var cdsWidgetKey = 'rated';
      if (linksDiv.hasChildNodes() && (cdsWidgetKey != "cdshac")) {
        linksDiv.insertBefore(document.createTextNode("Read more on TripAdvisor:"), linksDiv.firstChild);       } 
    }

    widgetHtml = widgetHtml.replace('<div id="WIDGET_ERR_LINKS"></div>', linksDiv.innerHTML);
  }

  
  container.innerHTML = widgetHtml; 
 );