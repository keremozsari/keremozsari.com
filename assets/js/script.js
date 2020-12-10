$('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
        nav_item_1 = $('nav li:nth-of-type(1)'),
        nav_item_2 = $('nav li:nth-of-type(2)'),
        nav_item_3 = $('nav li:nth-of-type(3)'),
        nav_item_4 = $('nav li:nth-of-type(4)'),
        nav_item_5 = $('nav li:nth-of-type(5)'),
        top_bar = $('.bar-top'),
        middle_bar = $('.bar-middle'),
        bottom_bar = $('.bar-bottom');

    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {

        top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
        middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
        bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
        nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
        nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
        nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
        nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
        nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
        top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
        middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
        bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
        overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
        nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
        nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
        nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
        nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
        nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
})
 /**/

const pow3InOut = Power3.inOut;

let time_row1,
    time_row2,
    time_row3,
    time_row4;

let replayBtn = document.querySelector('.btn_replay');
replayBtn.addEventListener('click', () => {
    run();
    toggleReplay();
});

function preset(){
    // For masking, initial opacity (0), must be set by JS
    // If it is set by CSS the JS cannot override.
    // I know - feels wrong, but there we are
    gsap.set(['#n1_1','#n1_1_2',
        '#n1_2','#n1_2_2','#n1_2_3',
        '#n1_3','#n1_3_2',
        '#o1_1','#o1_2',
        '#t1_1','#t1_2','#t1_3',
        '#i1_1',
        '#m1_1','#m1_2','#m1_3',
        '#e1_1','#e1_2','#e1_3','#e1_4',
        '#t2_1','#t2_2','#t2_3',
        '#o2_1','#o2_2',
        '#d1_1','#d1_2',
        '#i2_1',
        '#e2_1','#e2_2','#e2_3','#e2_4', '#waltherPPK_007'], {opacity:0});


}

function runSequence(){
    /*	Kick off times for each row.
        To delay the start, just change 'time_row1' */
    time_row1 = .5;
    time_row2 = time_row1 + .95;
    time_row3 = time_row1 + .8;
    time_row4 = time_row1 + .95;
    //
    /* ROW 1 :: NO */
    gsap.set('#n1_2', {x:124.5, y:266});
    gsap.set('#n1_2_2', {x:0, y:0});
    gsap.to(['#n1_2','#n1_2_2','#n1_2_3'], {duration:.25, delay:time_row1, opacity:1});
    gsap.to('#n1_2', {duration:.4, delay:time_row1, x:0, y:0, ease:pow3InOut});

    gsap.set('#n1_2_3', {x:0, y:0, scaleY:1});
    gsap.to('#n1_2_3', {duration:.3, delay:time_row1, y:-200, scaleY:4, ease:pow3InOut});
    gsap.to('#n1_2_3', {duration:.2, delay:time_row1+.3, scaleY:.2, ease:pow3InOut});
    gsap.to('#n1_2_2', {duration:.4, delay:time_row1+.2, x:-124.5, y:-266, ease:pow3InOut});

    gsap.set('#n1_1', {y:110});
    gsap.set('#n1_1_2', {y:109});
    gsap.to(['#n1_1','#n1_1_2'], {duration:.25, delay:time_row1+=.2, opacity:1});
    gsap.to('#n1_1', {duration:.8, delay:time_row1, y:0, ease:pow3InOut});
    gsap.to('#n1_1_2', {duration:.8, delay:time_row1, y:0, scaleY:0, ease:pow3InOut});

    gsap.set('#n1_3', {y:-65});
    gsap.set('#n1_3_2', {y:0});
    gsap.to(['#n1_3','#n1_3_2'], {duration:.25, delay:time_row1, opacity:1});
    gsap.to('#n1_3', {duration:.8, delay:time_row1, y:0, ease:pow3InOut});

    gsap.to('#n1_3_2', {duration:.8, delay:time_row1, scaleY:15, ease:pow3InOut});
    gsap.to('#n1_3_2', {duration:.8, delay:time_row1+=.2, scaleY:1, y:70, ease:pow3InOut});

    gsap.set('#o1_1', {delay:time_row1, opacity:1, x:33});
    gsap.to('#o1_1', {duration:.5, delay:time_row1, x:0});
    gsap.set('#o1_2', {delay:time_row1, opacity:1, x:-33});
    gsap.to('#o1_2', {duration:.5, delay:time_row1+=.15, x:0});

    /* ROW 2 :: TIME */
    gsap.set('#t1_1', {delay:time_row2, opacity:1, scaleY:0});
    gsap.to('#t1_1', {duration:.25, delay:time_row2, opacity:1});
    gsap.to('#t1_1', {duration:.5, delay:time_row2, scaleY:1});
    gsap.set('#t1_2', {delay:time_row2, opacity:0, scale:0});
    gsap.to('#t1_2', {duration:.25, delay:time_row2+=.1, opacity:1});
    gsap.to('#t1_2', {duration:.5, delay:time_row2, scale:1});
    gsap.set('#t1_3', {opacity:0, scale:0, transformOrigin:('100% 0')});
    gsap.to('#t1_3', {duration:.25, delay:time_row2+.2, opacity:1});
    gsap.to('#t1_3', {duration:.5, delay:time_row2, scale:1});

    gsap.set('#i1_1', {delay:time_row2+=.4, opacity:1, scaleY:0});
    gsap.to('#i1_1', {duration:.25, delay:time_row2, opacity:1});
    gsap.to('#i1_1', {duration:.5, delay:time_row2, scaleY:1});

    gsap.set('#m1_1', {delay:time_row2+=.2, opacity:1, scale:0, transformOrigin:('0 100%')});
    gsap.to('#m1_1', {duration:.5, delay:time_row2, scale:1});

    gsap.set('#m1_2', {delay:time_row2, opacity:1, scale:0, transformOrigin:('100% 100%')});
    gsap.to('#m1_2', {duration:.5, delay:time_row2, scale:1});
    gsap.set('#m1_3', {delay:time_row2, opacity:1, scale:0, transformOrigin:('0 0')});
    gsap.to('#m1_3', {duration:.5, delay:time_row2+=.3, scale:1});

    gsap.set('#e1_1', {delay:time_row2+=.4, opacity:1, scaleY:2, transformOrigin:('50% 100%'), y:430});
    gsap.to('#e1_1', {duration:1, delay:time_row2, y:0});
    gsap.to('#e1_1', {duration:.5, delay:time_row2+.5, scaleY:1});

    gsap.set('#e1_2', {delay:time_row2, opacity:1, scale:0, transformOrigin:('0 -50%'), rotation:-90});
    gsap.set('#e1_4', {delay:time_row2, opacity:1, scale:0, transformOrigin:('0 100%'), rotation:90});
    gsap.set('#e1_3', {delay:time_row2, opacity:1, scale:0, x:93});
    gsap.to(['#e1_2', '#e1_4'], {duration:.5, delay:time_row2+.5, scale:1, rotation:0});
    gsap.to('#e1_3', {duration:.5, delay:time_row2+.5, scale:1, x:0});

    /* ROW 3 :: TO */
    gsap.set('#t2_1', {scaleY:2, y:150});
    gsap.set('#t2_3', {opacity:1, scale:0});
    gsap.to('#t2_3', {duration:.8, delay:time_row3, scale:1, ease:pow3InOut});
    gsap.to('#t2_1', {duration:.25, delay:time_row3+.1, opacity:1});
    gsap.to('#t2_1', {duration:.8, delay:time_row3+.1, scaleY:1, y:0, ease:pow3InOut});
    gsap.set('#t2_2', {opacity:1, scale:0, transformOrigin:('100% 0')});
    gsap.to('#t2_2', {duration:.4, delay:time_row3+.6, scale:1, ease:pow3InOut});

    gsap.set('#o2_1', {delay:time_row3+.4, opacity:1});
    gsap.to('#mask_o2_2_ani', {duration:.5, delay:time_row3+1.15, x:33});
    gsap.set('#o2_2', {opacity:1, x:-33});
    gsap.to('#o2_2', {duration:.5, delay:time_row3+=2.1, x:0});

    /* ROW 4 :: DIE */
    gsap.set('#d1_1', {delay:time_row4, opacity:1, scaleY:3, y:260});
    gsap.to('#d1_1', {duration:.75, delay:time_row4, y:0});
    gsap.to('#d1_1', {duration:.5, delay:time_row4+=.5, scaleY:1});

    gsap.set('#d1_2', {delay:time_row4+=1.1, opacity:1, x:-33});
    gsap.to('#d1_2', {duration:.75, delay:time_row4, x:0});

    gsap.set('#i2_1', {delay:time_row4+=.4, opacity:1, scaleY:3, y:260});
    gsap.to('#i2_1', {duration:.75, delay:time_row4, y:0});
    gsap.to('#i2_1', {duration:.5, delay:time_row4+=.5, scaleY:1});

    gsap.set('#e2_1', {delay:time_row4, opacity:1, scaleY:0, transformOrigin:('50% 0')});
    gsap.to('#e2_1', {duration:.5, delay:time_row4, scale:1})

    gsap.set('#e2_2', {opacity:1, scale:0, transformOrigin:('0 -50%'), rotation:-90});
    gsap.set('#e2_4', {opacity:1, scale:0, transformOrigin:('0 100%'), rotation:90});
    gsap.set('#e2_3', {opacity:1, scale:0, x:45});
    gsap.to(['#e2_2', '#e2_4'], {duration:.5, delay:time_row4+=.5, scale:1, rotation:0});
    gsap.to('#e2_3', {duration:.5, delay:time_row4, scale:1, x:0});

    // Logo
    gsap.set('#waltherPPK_007', {scale:1.6})
    gsap.to('#waltherPPK_007', {duration:.5, delay:time_row4+=.5, opacity:1, onComplete:toggleReplay})
}

function run(){
    preset();
    runSequence();
}

run();