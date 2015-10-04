var dfsv = dfsv || {};

(function(){

    jQuery(document).ready(function() {

        jQuery('a').click(function(event){
            event.preventDefault();
        });

        var search = new Search();
        search.init();
    });

})();