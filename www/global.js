var $$ = Dom7;
(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        init_TinyM_F7();
      
        /*Events*/
        document.addEventListener('backbutton', tinyM.f7.router.navigate('/'), false);
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        navigator.splashscreen.hide();
    };

    function onPause() {

    };

    function onResume() {

    };

})();