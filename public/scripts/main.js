/* global $ */

initHeader();
initFooter();

function initHeader() {
    const marginHeight = $('#topNavMenu').height();
    $('#header').css("margin-top", marginHeight + 'px');
    
    $(window).scroll(function() {
        let height = $(window).scrollTop();
        if(height > marginHeight / 2) {
            $('#topNavMenu').removeClass('large');
            $('#topNavMenu').addClass('tiny scrolled borderless');
        } else {
            $('#topNavMenu').removeClass('tiny scrolled borderless');
            $('#topNavMenu').addClass('large');
        }
    })
}

function initFooter() {
    $(window).scroll(function() {
        let height = $(window).scrollTop() + $(window).height();
        if(height === getDocHeight()) {
            $('#bottomNavMenu').removeClass('clear');
        } else {
            $('#bottomNavMenu').addClass('clear');
        }
    })
}

function getDocHeight() {
    let D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight);
}