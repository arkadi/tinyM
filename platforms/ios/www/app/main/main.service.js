var mainService = {
    testRequest: function (callback) {
        tinyM.http(Global.API.GetLastSerch, {}, callback, function () {
            console.log('OK');
        }, function () {
            console.log('Error');
        })
    }
}