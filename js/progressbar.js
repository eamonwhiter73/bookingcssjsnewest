jQuery(document).ready(function($) {
  var arraypicked = ['node-433800199-1'];

  function changePaddingPanelBody() {

      /*$('div#node-433800199-1>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      $('div#node-433800199-2>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      $('div#node-433800199-3>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      $('div#node-433800199-4>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });

      $('div#node-433800199-5>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "0vh"
      });*/

      $('div#node-433800199-7>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      $('div#node-433800199-9>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      $('div#node-433800199-16>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      $('div#node-433800199-17>.row>.col-md-12>.panel-primary>.panel-body').css({
        "padding": "2vh"
      });

      $('div#node-433800199-13>.row>.col-md-12>.panel-primary>.panel-body>#node-content').empty();

    }
  
  $(window).load(function() {

    changePaddingPanelBody();

    //SWIPE FUNCTIONS

    var thisone = arraypicked.indexOf($('.zingtree-node:visible').prop('id'));

    $('body').on("swipeleft",function(e){
      
      console.log(arraypicked);
      
      $('div#' + arraypicked[parseInt(thisone)]).css('display', 'none');
      
      if(arraypicked[parseInt(thisone) + 1 ]) {

        if(thisone == arraypicked.lastIndexOf($('.zingtree-node:visible').prop('id'))) {
          $('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "");
          $('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "block");
        }
        else {
          thisone = arraypicked.lastIndexOf($('.zingtree-node:visible').prop('id'));

          $('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "");
          $('div#' + arraypicked[parseInt(thisone)  + 1 ] + '.zingtree-node').css("display", "block");
        }
      }
      
      e.preventDefault();
    });

    $('body').on("swiperight",function(e){
      console.log(arraypicked);
      
      $('div#' + arraypicked[parseInt(thisone)]).css('display', 'none');
      $('div#' + arraypicked[parseInt(thisone)  - 1 ] + '.zingtree-node').css("display", "");
      $('div#' + arraypicked[parseInt(thisone)  - 1 ] + '.zingtree-node').css("display", "block");

      e.preventDefault();
    });

    $('.toolTipBP').click(function(e) {

      var infoHover = $(this).text();
      var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><iframe width='200vw' height='160vh' src='https://www.youtube.com/embed/V6PCsyK1TCo' frameborder='0' allowfullscreen></iframe></div></div>";
      
      $('div#infoPanelBP').html(infoPanelHTML);

      e.preventDefault(); 
    });

    if($(window).width() < 321) {
      //HIDE AND SHOW
      $('.logo').hide();
      $('h1.entry-title').hide();
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('.widewrapper>.container>.row').hide(); 
      $('.infoPanelBPmobile').show();

      $('.btn-zingtree').on('click', function(e){
        arraypicked.push($('.zingtree-node:visible').prop('id'));
        console.log($('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      $('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      $('.toolTipBP').click(function(e) {

        var infoHover = $(this).text();
        var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><iframe width='200vw' height='160vh' src='https://www.youtube.com/embed/V6PCsyK1TCo' frameborder='0' allowfullscreen></iframe></div></div>";
        
        $('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = $("#infoPanelBPmobile").offset()

        console.log($("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          $('html, body').stop().animate({ scrollTop: "+=180vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          $('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      $("div.panel-heading").css({
        "height": "8vh"
      });

      $("div.progress-indicator").css({
        "height": "8vh"
      });

      $("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "12vh"
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      $("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      $('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });
      
      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });
    }

    if($(window).width() < 481 && $(window).width() > 320) {
      $('.logo').hide();
      $('h1.entry-title').hide();
      $('.infoPanelBPmobile').show(); 
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('.widewrapper>.container>.row').hide();  

      $('.btn-zingtree').on('click', function(e){
        arraypicked.push($('.zingtree-node:visible').prop('id'));
        console.log($('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      $('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      $('.toolTipBP').click(function(e) {

        var infoHover = $(this).text();
        var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><iframe width='200vw' height='160vh' src='https://www.youtube.com/embed/V6PCsyK1TCo' frameborder='0' allowfullscreen></iframe></div></div>";
        
        $('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = $("#infoPanelBPmobile").offset()

        console.log($("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          $('html, body').stop().animate({ scrollTop: "+=270vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          $('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      $("div.panel-heading").css({
        "height": "8vh"
      });

      $("div.progress-indicator").css({
        "height": "8vh"
      });

      $("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "14.5vh"
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      $("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      $('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });

      $(".leftspace").css({
        'margin-left': '0%',
        'width': "17%"
      });
      
      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

    }

    if($(window).width() < 768 && $(window).width() > 480) {
      $('.logo').hide();
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('h1.entry-title').hide();
      $('.widewrapper>.container>.row').hide();  
      $('.infoPanelBPmobile').show();

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("#infoPanelBP").css({
        "width": "100%",
        "height": "50%",
        "vertical-align": "bottom",
        "display": "inline"
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2.5vh",
        'border-right-style': 'none'
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none'
      });

      $(".progress-indicator").css({
        'margin-left': '6%'
      });

      $(".leftspace").css({
        'margin-left': '2%',
        'width': "20%"
      });

      $(".toprect").css({
        'margin-left': '6%'
      });

      $(".bottomrect").css({
        'margin-left': '6%'
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });
    };

    if($(window).width() == 768) {
      $('.logo').hide();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('h1.entry-title').show();
      $('.widewrapper>.container>.row').show(); 
      $('.infoPanelBPmobile').hide();

      $('.logo').css({
        "display": "none"
      });

      $('.progress-indicator').css({
        "margin-left": "4%"
      });

      $(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });

      $("div.panel-heading").css({
        "height": ""
      });

      $("div.progress-indicator").css({
        "height": ""
      });
    }

    if($(window).width() > 768 && $(window).width() < 992) {
      $('.logo').show();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('h1.entry-title').show();
      $('.widewrapper>.container>.row').show(); 
      $('.infoPanelBPmobile').hide();

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "1.4vh"
      })
      
      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "40%",
        "display": "inline-block",
      });

      $("#infoPanelBP").css({
        "width": "60.4%",
        "height": "100%",
        "vertical-align": "top"
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        "border-right-style": "solid",
      })

      $("div#question_area").css({
        "text-align": "left",
        "border-right-style": "solid"
      });

      $('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });

      $(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if($(window).width() > 991) {
      $('.logo').show();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('h1.entry-title').show();
      $('.widewrapper>.container>.row').show(); 
      $('.infoPanelBPmobile').hide();

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2.4vh"
      })

      $('.progress-indicator').css({
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });
    }
  });
    

  $( window ).resize(function() {

    if($(window).width() < 321) {
      $('.logo').hide();
      $('h1.entry-title').hide();
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('.widewrapper>.container>.row').hide(); 
      $('.infoPanelBPmobile').show();

      $('.btn-zingtree').on('click', function(e){
        arraypicked.push($('.zingtree-node:visible').prop('id'));
        console.log($('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      $('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      $('.toolTipBP').click(function(e) {

        var infoHover = $(this).text();
        var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><iframe width='200vw' height='160vh' src='https://www.youtube.com/embed/V6PCsyK1TCo' frameborder='0' allowfullscreen></iframe></div></div>";
        
        $('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = $("#infoPanelBPmobile").offset()

        console.log($("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          $('html, body').stop().animate({ scrollTop: "+=180vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          $('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      $("div.panel-heading").css({
        "height": "8vh"
      });

      $("div.progress-indicator").css({
        "height": "8vh"
      });

      $("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "12vh"
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      $("div#question_area>li").css({

      });

      $("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      $('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });
      
      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });
    }

    if($(window).width() < 481 && $(window).width() > 320) {
      $('.logo').hide();
      $('h1.entry-title').hide();
      $('.infoPanelBPmobile').show(); 
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('.widewrapper>.container>.row').hide(); 

      $('.btn-zingtree').on('click', function(e){
        arraypicked.push($('.zingtree-node:visible').prop('id'));
        console.log($('.zingtree-node:visible').prop('id'));
        e.preventDefault();
      })

      $('div.panel-primary').after("<div id='infoPanelBPmobile'>MORE INFO</div>");

      $('.toolTipBP').click(function(e) {

        var infoHover = $(this).text();
        var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><iframe width='200vw' height='160vh' src='https://www.youtube.com/embed/V6PCsyK1TCo' frameborder='0' allowfullscreen></iframe></div></div>";
        
        $('div#infoPanelBPmobile').html(infoPanelHTML);

        var offset = $("#infoPanelBPmobile").offset()

        console.log($("#infoPanelBPmobile").position());

        if(offset.top == 0) {
          $('html, body').stop().animate({ scrollTop: "+=270vh" }, 500, function() {
          }); 
        }
        else {
          console.log('in offset');
          $('html, body').stop().animate({ scrollTop: offset.top }, 500, function() {
          }); 
        }

        e.preventDefault(); 
      });

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("div.panel-primary").css({
        "margin-bottom": "0px",
        "border-style": "none",
        "border-width": "none",
      });

      $("div.panel-heading").css({
        "height": "8vh"
      });

      $("div.progress-indicator").css({
        "height": "8vh"
      });

      $("div#infoPanelBP").css({
        "width": "92%",
        "height": "100vh",
        "vertical-align": "top",
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        'border-right-style': 'none',
        "height": "14.5vh"
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none',
        'vertical-align': "center",
      });

      $("div#question_area>li").css({

      });

      $("div#question_area>li>h4").css({
        'font-size': "2.2vh",
        'vertical-align': "center"
      });

      $('.container').css({
        "padding-right": "0px",
        "padding-left": "0px",
        "width": "100%",
        "padding-top": "0px"
      });

      $(".leftspace").css({
        'margin-left': '0%',
        'width': "17%"
      });
      
      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });
    }

    if($(window).width() < 768 && $(window).width() > 480) {
      $('.logo').hide();
      $('.infoPanelBPmobile').show();
      $('h1.entry-title').hide();
      $('div#title_row').hide(); 
      $('#main-footer').hide();
      $('.widewrapper>.container>.row').hide(); 


      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "100%",
        "display": "inline",
      });

      $("#infoPanelBP").css({
        "width": "100%",
        "height": "50%",
        "vertical-align": "bottom",
        "display": "inline"
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2.5vh",
        'border-right-style': 'none'
      })

      $("div#question_area").css({
        'text-align': 'center',
        'border-right-style': 'none'
      });

      $(".progress-indicator").css({
        'margin-left': '6%',
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });

      $(".toprect").css({
        'margin-left': '6%'
      });

      $(".bottomrect").css({
        'margin-left': '6%'
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
        $(this).css("background-color", "rgb(231,252,255)");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
        $(this).css("background-color", "rgb(255,255,255");
        $(this).css("border-right-color", "none");
        $(this).css("border-right-width", "none");
        $(this).css("border-right-style", "none");
      });

      $(".leftspace").css({
        'margin-left': '3%',
        'width': "18%"
      });
    };

    if($(window).width() == 768) {
      $('.logo').hide();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('h1.entry-title').show();
      $('.widewrapper>.container>.row').show(); 
      $('.infoPanelBPmobile').hide();

      $('.logo').css({
        "display": "none"
      });

      $('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });

      $(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if($(window).width() > 768 && $(window).width() < 992) {
      $('.logo').show();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('h1.entry-title').show();
      $('.widewrapper>.container>.row').show(); 


      $('a.btn-zingtree.list-group-item').css({
        "font-size": "1.4vh"
      })

      $("ul#qa-area").css({
        "padding": "0 0 0 0",
        "width": "40%",
        "display": "inline-block",
      });

      $("#infoPanelBP").css({
        "width": "60.4%",
        "height": "100%",
        "vertical-align": "top"
      })

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2vh",
        "border-right-style": "solid",
      })

      $("div#question_area").css({
        "text-align": "left",
        "border-right-style": "solid"
      });

      $('.progress-indicator').css({
        "margin-left": "4%",
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });

      $(".leftspace").css({
        'margin-left': '-10%',
        'width': "22%"
      });
    }

    if($(window).width() > 991) {
      $('.logo').show();
      $('div#title_row').show(); 
      $('#main-footer').show();
      $('.widewrapper>.container>.row').show(); 
      $('.infoPanelBPmobile').hide();

      $('a.btn-zingtree.list-group-item').css({
        "font-size": "2.4vh"
      })

      $('.progress-indicator').css({
        "height": ""
      });

      $("div.panel-heading").css({
        "height": ""
      });
    }
  });

  function helpAnimate(classis) {
    $(classis).addClass('active');
    $(classis).nextAll().removeClass('completed');
    $(classis).nextAll().removeClass('active');
    $(classis).nextAll().addClass('todo');
    $(classis).prevAll().addClass('completed');
  }

  $("span#node-title").hide();
  $("div.panel-heading").append("<div class='progress-indicator'><div class='toanimate'><div class='toanimateactive'></div></div><div class='circle bubone'></div><div class='circle bubtwo todo'></div><div class='circle bubthree todo'></div><div class='circle bubfour todo'></div><div class='circle bubfive todo'></div><div class='leftspace'></div><div class='toprect'></div><div class='bottomrect'></div><div class='proglogo'><img class='logo' src='../wp-content/themes/Divi/images/logosmall.png'></div></div>");
  
  if($('.toanimate').css("right") === "85.2%") {
    $('.bubone').addClass('active');
    $('.bubone').nextAll().removeClass('completed');
    $('.bubone').nextAll().removeClass('active');
    $('.bubone').nextAll().addClass('todo');
  }
  if($('.toanimate').css("right") === "67.2%") {
    helpAnimate('.bubtwo');
  }

  if($('.toanimate').css("right") === "49.2%") {
    helpAnimate('.bubthree');
  }

  if($('.toanimate').css("right") === "31.2%") {
    helpAnimate('.bubfour');
  }

  if($('.toanimate').css("right") === "13.2%") {
    helpAnimate('.bubfive');
  }

  $("div.panel-heading").css( "padding", "0 0 0 0" );
  
  $("div.panel-body").css({
    "padding": "0px"
  });

  $("h3.panel-title").css({
    "padding-bottom": "0"
  });

  $("div#question_area").css({
    "border-right-width": "3px",
    "border-right-style": "solid",
    "border-right-color": "rgb(8,113,125)",
    "width": "100%",
    "background-color": "rgb(33,180,196)"
  });

  $("ul#qa-area").css({
    "padding": "0 0 0 0",
    "width": "40%",
    "display": "inline-block",
  });

  $("li.list-group-item.list-group-item-question").css({
    "border-top-style": "none",
  });

  $("a.btn-zingtree").css({
    "width": "100%",
    "border-right-width": "3px",
    "border-right-style": "solid",
    "border-right-color": "rgb(8,113,125)",
    "border-top-style": "none",
    "border-bottom-style": "none"
  });

  $('#qa-area > div.answers > .btn-zingtree').mouseenter(function(){
    $(this).css("background-color", "rgb(231,252,255)");
    $(this).css("border-right-color", "rgb(231,252,255)");
    $(this).css("border-right-width", "3px");
    $(this).css("border-right-style", "solid");
  });

  $('#qa-area > div.answers > .btn-zingtree').mouseleave(function(){
    $(this).css("background-color", "rgb(255,255,255");
    $(this).css("border-right-color", "rgb(8,113,125)");
    $(this).css("border-right-width", "3px");
    $(this).css("border-right-style", "solid");
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
  $(".progress-indicator").on("click", '.circle', function() {
    if($(this).hasClass('todo')) {
      $(this).siblings().removeClass('active');
      $(this).prevAll().addClass('completed');
      console.log($('.toanimate').css("right"));
      $(this).nextAll().removeClass('completed');
      $(this).addClass('active');
      $(this).removeClass('todo');

    }
    if($(this).hasClass('completed')) { 
      $(this).nextAll().removeClass('completed');
      $(this).nextAll().removeClass('active');
      $(this).nextAll().addClass('todo');
      $(this).removeClass('completed');
      $(this).addClass('active');
    }

    if($(this).hasClass('bubone')) {
      $( ".toanimate" ).css({
        "right": "85.2%"
      });
    }

    if($(this).hasClass('bubtwo')) {
      $( ".toanimate" ).css({
        "right": "67.2%"
      });
    }

    if($(this).hasClass('bubthree')) {
      $( ".toanimate" ).css({
        "right": "49.2%"
      });
    }

    if($(this).hasClass('bubfour')) {
      $( ".toanimate" ).css({
        "right": "31.2%"
      });
    }

    if($(this).hasClass('bubfive')) {
      $( ".toanimate" ).css({
        "right": "13.2%"
      });
    }
  });

  $('#qa-area > div.answers > .btn-zingtree').hover(function(){
    var infoHover = $(this).text();
    var infoPanelHTML = "<div class='exactly'><div class='exactlyis'>So what exactly is a {video}?</div><div class='exactsub'>Info blurb about how this service will benefit them, brief explanation, needcopy.</div><div class='panelvid'><img class='foriframe' id='V6PCsyK1TCo' src='http://img.youtube.com/vi/V6PCsyK1TCo/default.jpg'/></div></div>";
    
    $('div#infoPanelBP').html(infoPanelHTML);
  });
 
  //add info panel by append()ing it to answer box
  $('ul#qa-area').after("<div id='infoPanelBP'>divstuff</div>");

  $("div#infoPanelBP").css({
    "border-left": "none",
  });

  $("span.bubble").css({
    "border-left": "none",
  });

  //markup for tooltip button to be appended into zingtree stored as variable
  var toolTipBP = '<div class="toolTipBP"> <img src="http://www.fullglasscreative.com/staging/clickandgrow/wp-content/tooltip_noshadow.png"> </div>';

  //markup for tooltip column to be stored as variable and then appended
  var toolTipColumnBP = '<div class="tooltipColumnBP"> im a column</div>';

  //append tooltip buttons to list 
  $('.btn-zingtree.list-group-item').append(toolTipBP);

  // remove overlay when clicked
  $('.btn-zingtree.list-group-item').click(function(e){
    $('#overlayBP').fadeOut(300, function(){
      $('.expose').css('z-index','1');
    });
  });

  //smooth scroll to infopanel when clicked
  $(".toolTipBP").click(function() {
    $('html, body').animate({
      scrollTop: $(this).offset().top-500
    }, 2000);
  });

  //fadeout expose code for focusing on elements and blacking out screen
  $('.expose').click(function(e){
    $(this).css('z-index','99999');
    var infoParent = $(this).parent();
    $(this).parent().css('z-index','99999');
    $('div#infoPanelBP').css('z-index','99999')
    event.stopPropagation();
    $('#overlayBP').fadeIn(300);
  });

  $('#overlayBP').click(function(e){
    $('#overlayBP').fadeOut(300, function(){
      $('.expose').css('z-index','1');
      infoParent.css('z-index','1');
    });
  });
});