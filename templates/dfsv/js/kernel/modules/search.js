var dfsv = dfsv || {};

var Search = function(){

    var showInput = false;

    var hideShowSearch = function(){
        jQuery('.search-top button').bind('click' , function (e) {
            if (showInput === false) {
                e.preventDefault();
                jQuery('.search-top input.search-query').css({'width': 180, 'opacity':1});
                showInput = true;
            } else {
                e.preventDefault();
                jQuery('.search-top input.search-query').css({'width': 0, 'opacity':0});
                showInput = false;
            }
        });
    };

    var init = function(){
        hideShowSearch();
    };

    return {
        init : init
    };
};
