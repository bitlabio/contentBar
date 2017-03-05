/* ContentBar website functions */

function generateMenu(page) {
      /* ===================================================================================================== */
      //generate the menu

      var menu = []
      menu.push({text:"home", link:"/", color: "#ffffff"})
      menu.push({text:"concepts", link:"./concepts", color: "#2aaae1"})
      menu.push({text:"audience", link:"./audience", color: "#c1272d"})
      menu.push({text:"photobooth", link:"/photobooth", color: "#8bc541"})
      menu.push({text:"clipaisle", link:"/clipaisle", color: "#eb416d"})
      menu.push({text:"studio", link:"/studio", color: "#f69221"})
      menu.push({text:"work", link:"/work", color: "#8747bf"})
      menu.push({text:"contact", link:"/contact", color: "#333333"})

      var menuitemshtml = '';
      var scale = 0.90;

      var menufontsize = 58 * scale;
      var menufonttop = -15 * scale;
      var menufontleft = 25 * scale;
      var left = 220; //starts at this position from the left
      var shiftleft = -32 * scale; //each menu item is this distance left from the previous

      var top = 20; //starts at this height
      var shifttop = 70 * scale; //each menu item is this distance down from the previous
      
      var chevrondata = [29,0,45,0,17,63,0,63];
      function chevron(scale) { 
        var write = ''
        for (var d in chevrondata) {
          write += chevrondata[d]* scale
          if ((d % 2 == 0)&&(d != chevrondata.length-1)) { write += ','} else { write += ' '}
        }
        //return '29,0 45,0 17,63 0,63' 
        return write
      }
      for (var i in menu) {
        menuitemshtml += `<div class="menuitem" style="position: absolute; z-index: 100; top: `+top+`px; left: `+left+`px; width: 300px; height: 64px;">
          <div style="position: relative;">
            
            <svg height="64" width="45" style="position: absolute;">
              <polygon points="`+chevron(scale)+`" style="fill:`+menu[i].color+`" />
            </svg>

            <a class="menulink" href="`+menu[i].link+`"><div style="position: absolute; top: `+menufonttop+`px; left: `+menufontleft+`px; font-size: `+menufontsize+`px; font-family: 'ScoutBold'; text-transform: uppercase;">`+menu[i].text+`</div></a>
          </div>
        </div>`;  

        left += shiftleft;
        top += shifttop;
      }
      $("#menuItems").html(menuitemshtml)
      $("#menupagename").html(menu[page].text.toUpperCase())
      $("#menupagechevron").css("fill", menu[page].color)
      
      // done building the menu
      /* ===================================================================================================== */
}




/*
USAGE: 

waitForWebfonts(['MyFont1', 'MyFont2'], function() {
    // Will be called as soon as ALL specified fonts are available
});


*/


function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
        (function(font) {
            var node = document.createElement('span');
            // Characters that vary significantly among different fonts
            node.innerHTML = 'giItT1WQy@!-/#';
            // Visible - so we can measure it - but not on the screen
            node.style.position      = 'absolute';
            node.style.left          = '-10000px';
            node.style.top           = '-10000px';
            // Large font size makes even subtle changes obvious
            node.style.fontSize      = '300px';
            // Reset any font properties
            node.style.fontFamily    = 'sans-serif';
            node.style.fontVariant   = 'normal';
            node.style.fontStyle     = 'normal';
            node.style.fontWeight    = 'normal';
            node.style.letterSpacing = '0';
            document.body.appendChild(node);

            // Remember width with no applied web font
            var width = node.offsetWidth;

            node.style.fontFamily = font + ', sans-serif';

            var interval;
            function checkFont() {
                // Compare current width with original width
                if(node && node.offsetWidth != width) {
                    ++loadedFonts;
                    node.parentNode.removeChild(node);
                    node = null;
                }

                // If all fonts have been loaded
                if(loadedFonts >= fonts.length) {
                    if(interval) {
                        clearInterval(interval);
                    }
                    if(loadedFonts == fonts.length) {
                        callback();
                        return true;
                    }
                }
            };

            if(!checkFont()) {
                interval = setInterval(checkFont, 50);
            }
        })(fonts[i]);
    }
};


