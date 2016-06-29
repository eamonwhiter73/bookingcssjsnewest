jQuery(document).ready(function() {
  var arraypicked = ['node-433800199-1'];

  function changePaddingPanelBody() {

      /*jQuery('div#node-433800199-1>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      jQuery('div#node-433800199-2>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      jQuery('div#node-433800199-3>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      jQuery('div#node-433800199-4>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      jQuery('div#node-433800199-5>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });*/

      jQuery('div#node-433800199-7>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      jQuery('div#node-433800199-9>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      jQuery('div#node-433800199-16>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      jQuery('div#node-433800199-17>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      jQuery('div#node-433800199-13>.row>.col-md-12>.panel-primary>.panel-body>#node-content').empty();

    }
  
  jQuery(window).load(function() {

    changePaddingPanelBody();

    //SWIPE FUNCTIONS

    var thisone = arraypicked.indexOf(jQuery('.zingtree-node:visible').prop('id'));

    jQuery('body').on("swipeleft",function(e){
      
      console.log(arraypicked);
      
      jQuery('div#' + arraypicked[parseInt(thisone)]).css('display', 'none');
      
      if(arraypicked[parseInt(thisone) + 1 ]) {

        if(thisone == arraypicked.lastIndexOf(jQuery('.zingtree-node:visible').prop('id'))) {
          jQuery('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "");
          jQuery('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "block");
        }
        else {
          thisone = arraypicked.lastIndexOf(jQuery('.zingtree-node:visible').prop('id'));

          jQuery('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "");
          jQuery('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "block");
        }
      }
      
      e.preventDefault();
    });

    jQuery('body').on("swiperight",function(e){
      console.log(arraypicked);
      
      jQuery('div#' + arraypicked[parseInt(thisone)]).css('display', 'none');
      jQuery('div#' + arraypicked[parseInt(thisone)  - 1 ] + '.zingtree-node').css("display", "");
      jQuery('div#' + arraypicked[parseInt(thisone)  - 1 ] + '.zingtree-node').css("display", "block");

      e.preventDefault();
    });

    if(jQuery(window).width() < 321) {
      //HIDE AND SHOW
      jQuery('.logo').hide();
      jQuery('h1.entry-title').hide();
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('.widewrapper>.container>.row').hide(); 
      jQuery('.infoPanelBPmobile').show();

      jQuery('.btn-zingtree').on('click', function(e){
        arraypicked.push(jQuery('.zingtree-node:visible').prop('id'));
        console.log(jQuery('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      jQuery('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      jQuery('.toolTipBP').click(function(e) {

        var infoHover = jQuery(this).text();
        var infoPanelHTML = "<p>This is the info panel for: " + infoHover + "</p>";
        
        jQuery('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = jQuery("#infoPanelBPmobile").offset()

        console.log(jQuery("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          jQuery('html, body').stop().animate({ scrollTop: "+=180vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          jQuery('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      jQuery("div.panel-heading").css({
        "height": "8vh"
      });

      jQuery("div.progress-indicator").css({
        "height": "8vh"
      });

      jQuery("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "12vh"
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      jQuery("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      jQuery('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });
      
      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });
    }

    if(jQuery(window).width() < 481 && jQuery(window).width() > 320) {
      jQuery('.logo').hide();
      jQuery('h1.entry-title').hide();
      jQuery('.infoPanelBPmobile').show(); 
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('.widewrapper>.container>.row').hide();  

      jQuery('.btn-zingtree').on('click', function(e){
        arraypicked.push(jQuery('.zingtree-node:visible').prop('id'));
        console.log(jQuery('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      jQuery('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      jQuery('.toolTipBP').click(function(e) {

        var infoHover = jQuery(this).text();
        var infoPanelHTML = "<p>This is the info panel for: " + infoHover + "</p>";
        
        jQuery('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = jQuery("#infoPanelBPmobile").offset()

        console.log(jQuery("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          jQuery('html, body').stop().animate({ scrollTop: "+=270vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          jQuery('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      jQuery("div.panel-heading").css({
        "height": "8vh"
      });

      jQuery("div.progress-indicator").css({
        "height": "8vh"
      });

      jQuery("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "14.5vh"
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      jQuery("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      jQuery('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });

      jQuery(".leftspace").css({
        'margin-left': '0%',
        'width': "17%"
      });
      
      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

    }

    if(jQuery(window).width() < 768 && jQuery(window).width() > 480) {
      jQuery('.logo').hide();
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('h1.entry-title').hide();
      jQuery('.widewrapper>.container>.row').hide();  
      jQuery('.infoPanelBPmobile').show();

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("#infoPanelBP").css({
        "width": "100%",
        "height": "50%",
        "vertical-align": "bottom",
        "display": "inline"
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2.5vh",
        'border-right-style': 'none'
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none'
      });

      jQuery(".progress-indicator").css({
        'margin-left': '6%'
      });

      jQuery(".leftspace").css({
        'margin-left': '2%',
        'width': "20%"
      });

      jQuery(".toprect").css({
        'margin-left': '6%'
      });

      jQuery(".bottomrect").css({
        'margin-left': '6%'
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });
    };

    if(jQuery(window).width() == 768) {
      jQuery('.logo').hide();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('h1.entry-title').show();
      jQuery('.widewrapper>.container>.row').show(); 
      jQuery('.infoPanelBPmobile').hide();

      jQuery('.logo').css({
        "display": "none"
      });

      jQuery('.progress-indicator').css({
        "margin-left": "4%"
      });

      jQuery(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });

      jQuery("div.progress-indicator").css({
        "height": ""
      });
    }

    if(jQuery(window).width() > 768 && jQuery(window).width() < 992) {
      jQuery('.logo').show();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('h1.entry-title').show();
      jQuery('.widewrapper>.container>.row').show(); 
      jQuery('.infoPanelBPmobile').hide();

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "1.4vh"
      })
      
      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "40%",
        "display": "inline-block",
      });

      jQuery("#infoPanelBP").css({
        "width": "60.4%",
        "height": "100%",
        "vertical-align": "top"
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        "border-right-style": "solid",
      })

      jQuery("div#question_area").css({
        "text-align": "left",
        "border-right-style": "solid"
      });

      jQuery('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });

      jQuery(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if(jQuery(window).width() > 991) {
      jQuery('.logo').show();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('h1.entry-title').show();
      jQuery('.widewrapper>.container>.row').show(); 
      jQuery('.infoPanelBPmobile').hide();

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2.4vh"
      })

      jQuery('.progress-indicator').css({
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });
    }
  });
    

  jQuery( window ).resize(function() {

    if(jQuery(window).width() < 321) {
      jQuery('.logo').hide();
      jQuery('h1.entry-title').hide();
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('.widewrapper>.container>.row').hide(); 
      jQuery('.infoPanelBPmobile').show();

      jQuery('.btn-zingtree').on('click', function(e){
        arraypicked.push(jQuery('.zingtree-node:visible').prop('id'));
        console.log(jQuery('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      jQuery('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      jQuery('.toolTipBP').click(function(e) {

        var infoHover = jQuery(this).text();
        var infoPanelHTML = "<p>This is the info panel for: " + infoHover + "</p>";
        
        jQuery('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = jQuery("#infoPanelBPmobile").offset()

        console.log(jQuery("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          jQuery('html, body').stop().animate({ scrollTop: "+=180vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          jQuery('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      jQuery("div.panel-heading").css({
        "height": "8vh"
      });

      jQuery("div.progress-indicator").css({
        "height": "8vh"
      });

      jQuery("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "12vh"
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      jQuery("div#question_area>li").css({

      });

      jQuery("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      jQuery('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });
      
      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });
    }

    if(jQuery(window).width() < 481 && jQuery(window).width() > 320) {
      jQuery('.logo').hide();
      jQuery('h1.entry-title').hide();
      jQuery('.infoPanelBPmobile').show(); 
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('.widewrapper>.container>.row').hide(); 

      jQuery('.btn-zingtree').on('click', function(e){
        arraypicked.push(jQuery('.zingtree-node:visible').prop('id'));
        console.log(jQuery('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      jQuery('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      jQuery('.toolTipBP').click(function(e) {

        var infoHover = jQuery(this).text();
        var infoPanelHTML = "<p>This is the info panel for: " + infoHover + "</p>";
        
        jQuery('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = jQuery("#infoPanelBPmobile").offset()

        console.log(jQuery("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          jQuery('html, body').stop().animate({ scrollTop: "+=270vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          jQuery('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      jQuery("div.panel-heading").css({
        "height": "8vh"
      });

      jQuery("div.progress-indicator").css({
        "height": "8vh"
      });

      jQuery("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "14.5vh"
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      jQuery("div#question_area>li").css({

      });

      jQuery("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      jQuery('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });

      jQuery(".leftspace").css({
        'margin-left': '0%',
        'width': "17%"
      });
      
      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });
    }

    if(jQuery(window).width() < 768 && jQuery(window).width() > 480) {
      jQuery('.logo').hide();
      jQuery('.infoPanelBPmobile').show();
      jQuery('h1.entry-title').hide();
      jQuery('div#title_row').hide(); 
      jQuery('#main-footer').hide();
      jQuery('.widewrapper>.container>.row').hide(); 


      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      jQuery("#infoPanelBP").css({
        "width": "100%",
        "height": "50%",
        "vertical-align": "bottom",
        "display": "inline"
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2.5vh",
        'border-right-style': 'none'
      })

      jQuery("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none'
      });

      jQuery(".progress-indicator").css({
        'margin-left': '6%',
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });

      jQuery(".toprect").css({
        'margin-left': '6%'
      });

      jQuery(".bottomrect").css({
        'margin-left': '6%'
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        jQuery(this).css("background-color", "rgb(231,252,255)");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        jQuery(this).css("background-color", "rgb(255,255,255");
        jQuery(this).css("border-right-color", "none");
        jQuery(this).css("border-right-width", "none");
        jQuery(this).css("border-right-style", "none");
      });

      jQuery(".leftspace").css({
        'margin-left': '3%',
        'width': "18%"
      });
    };

    if(jQuery(window).width() == 768) {
      jQuery('.logo').hide();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('h1.entry-title').show();
      jQuery('.widewrapper>.container>.row').show(); 
      jQuery('.infoPanelBPmobile').hide();

      jQuery('.logo').css({
        "display": "none"
      });

      jQuery('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });

      jQuery(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if(jQuery(window).width() > 768 && jQuery(window).width() < 992) {
      jQuery('.logo').show();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('h1.entry-title').show();
      jQuery('.widewrapper>.container>.row').show(); 


      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "1.4vh"
      })

      jQuery("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "40%",
        "display": "inline-block",
      });

      jQuery("#infoPanelBP").css({
        "width": "60.4%",
        "height": "100%",
        "vertical-align": "top"
      })

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        "border-right-style": "solid",
      })

      jQuery("div#question_area").css({
        "text-align": "left",
        "border-right-style": "solid"
      });

      jQuery('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });

      jQuery(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if(jQuery(window).width() > 991) {
      jQuery('.logo').show();
      jQuery('div#title_row').show(); 
      jQuery('#main-footer').show();
      jQuery('.widewrapper>.container>.row').show(); 
      jQuery('.infoPanelBPmobile').hide();

      jQuery('a.btn-zingtree.list-group-item').css({
        "font-size": "2.4vh"
      })

      jQuery('.progress-indicator').css({
        "height": ""
      });

      jQuery("div.panel-heading").css({
        "height": ""
      });
    }
  });

  function helpAnimate(classis) {
    jQuery(classis).addClass('active');
    jQuery(classis).nextAll().removeClass('completed');
    jQuery(classis).nextAll().removeClass('active');
    jQuery(classis).nextAll().addClass('todo');
    jQuery(classis).prevAll().addClass('completed');
  }

  jQuery("span#node-title").hide();
  jQuery("div.panel-heading").append("<div class='progress-indicator'><div class='toanimate'><div class='toanimateactive'></div></div><div class='circle bubone'></div><div class='circle bubtwo todo'></div><div class='circle bubthree todo'></div><div class='circle bubfour todo'></div><div class='circle bubfive todo'></div><div class='leftspace'></div><div class='toprect'></div><div class='bottomrect'></div><div class='proglogo'><img class='logo' src='../wp-content/themes/Divi/images/logosmall.png'></div></div>");
  
  if(jQuery('.toanimate').css("right") === "85.2%") {
    jQuery('.bubone').addClass('active');
    jQuery('.bubone').nextAll().removeClass('completed');
    jQuery('.bubone').nextAll().removeClass('active');
    jQuery('.bubone').nextAll().addClass('todo');
  }
  if(jQuery('.toanimate').css("right") === "67.2%") {
    helpAnimate('.bubtwo');
  }

  if(jQuery('.toanimate').css("right") === "49.2%") {
    helpAnimate('.bubthree');
  }

  if(jQuery('.toanimate').css("right") === "31.2%") {
    helpAnimate('.bubfour');
  }

  if(jQuery('.toanimate').css("right") === "13.2%") {
    helpAnimate('.bubfive');
  }

  jQuery("div.panel-heading").css( "padding", "0 0 0 0" );
  
  jQuery("div.panel-body").css({
    "padding": "0px"
  });

  jQuery("h3.panel-title").css({
    "padding-bottom": "0"
  });

  jQuery("div#question_area").css({
    "border-right-width": "3px",
    "border-right-style": "solid",
    "border-right-color": "rgb(8,113,125)",
    "width": "100%",
    "background-color": "rgb(33,180,196)"
  });

  jQuery("ul#qa-area").css({
    "padding": "0 0 0 0",
    "width": "40%",
    "display": "inline-block",
  });

  jQuery("li.list-group-item.list-group-item-question").css({
    "border-top-style": "none",
  });

  jQuery("a.btn-zingtree").css({
    "width": "100%",
    "border-right-width": "3px",
    "border-right-style": "solid",
    "border-right-color": "rgb(8,113,125)",
    "border-top-style": "none",
    "border-bottom-style": "none"
  });

  jQuery('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
    jQuery(this).css("background-color", "rgb(231,252,255)");
    jQuery(this).css("border-right-color", "rgb(231,252,255)");
    jQuery(this).css("border-right-width", "3px");
    jQuery(this).css("border-right-style", "solid");
  });

  jQuery('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
    jQuery(this).css("background-color", "rgb(255,255,255");
    jQuery(this).css("border-right-color", "rgb(8,113,125)");
    jQuery(this).css("border-right-width", "3px");
    jQuery(this).css("border-right-style", "solid");
  });

  function hasClass(element, className) {
  
    do {
      if (element.classList && element.classList.contains(className)) {
        return true;
      }

      element = element.parentNode;

    } while (element);
    
    return false;
  }

  //PROGRESS BAR
  jQuery(".progress-indicator").on("click", '.circle', function() {
    if(jQuery(this).hasClass('todo')) {
      jQuery(this).siblings().removeClass('active');
      jQuery(this).prevAll().addClass('completed');
      console.log(jQuery('.toanimate').css("right"));
      jQuery(this).nextAll().removeClass('completed');
      jQuery(this).addClass('active');
      jQuery(this).removeClass('todo');

    }
    if(jQuery(this).hasClass('completed')) { 
      jQuery(this).nextAll().removeClass('completed');
      jQuery(this).nextAll().removeClass('active');
      jQuery(this).nextAll().addClass('todo');
      jQuery(this).removeClass('completed');
      jQuery(this).addClass('active');
    }

    if(jQuery(this).hasClass('bubone')) {
      jQuery( ".toanimate" ).css({
        "right": "85.2%"
      });
    }

    if(jQuery(this).hasClass('bubtwo')) {
      jQuery( ".toanimate" ).css({
        "right": "67.2%"
      });
    }

    if(jQuery(this).hasClass('bubthree')) {
      jQuery( ".toanimate" ).css({
        "right": "49.2%"
      });
    }

    if(jQuery(this).hasClass('bubfour')) {
      jQuery( ".toanimate" ).css({
        "right": "31.2%"
      });
    }

    if(jQuery(this).hasClass('bubfive')) {
      jQuery( ".toanimate" ).css({
        "right": "13.2%"
      });
    }
  });

  jQuery('#qa-area > div.answers > .btn-zingtree').hover(function(){
    var infoHover = jQuery(this).text();
    var infoPanelHTML = "<p>This is the info panel for: " + infoHover + "</p>";
    
    jQuery('div#infoPanelBP').html(infoPanelHTML);
  });
 
  //add info panel by append()ing it to answer box
  jQuery('ul#qa-area').after("<div id='infoPanelBP'>divstuff</div>");

  jQuery("div#infoPanelBP").css({
    "border-left": "none",
  });

  jQuery("span.bubble").css({
    "border-left": "none",
  });

  //markup for tooltip button to be appended into zingtree stored as variable
  var toolTipBP = '<div class="toolTipBP"> <img src="http://www.fullglasscreative.com/staging/clickandgrow/wp-content/tooltip_noshadow.png"> </div>';

  //markup for tooltip column to be stored as variable and then appended
  var toolTipColumnBP = '<div class="tooltipColumnBP"> im a column</div>';

  //append tooltip buttons to list 
  jQuery('.btn-zingtree.list-group-item').append(toolTipBP);

  // remove overlay when clicked
  jQuery('.btn-zingtree.list-group-item').click(function(e){
    jQuery('#overlayBP').fadeOut(300, function(){
      jQuery('.expose').css('z-index','1');
    });
  });

  //smooth scroll to infopanel when clicked
  jQuery(".toolTipBP").click(function() {
    jQuery('html, body').animate({
      scrollTop: jQuery(this).offset().top-500
    }, 2000);
  });

  //fadeout expose code for focusing on elements and blacking out screen
  jQuery('.expose').click(function(e){
    jQuery(this).css('z-index','99999');
    var infoParent = jQuery(this).parent();
    jQuery(this).parent().css('z-index','99999');
    jQuery('div#infoPanelBP').css('z-index','99999')
    event.stopPropagation();
    jQuery('#overlayBP').fadeIn(300);
  });

  jQuery('#overlayBP').click(function(e){
    jQuery('#overlayBP').fadeOut(300, function(){
      jQuery('.expose').css('z-index','1');
      infoParent.css('z-index','1');
    });
  });
});