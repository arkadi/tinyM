var Http = function () {
    this.get = function (url, params, callback, successfully, error) {
        app.preloader.show()
        app.request.json(url, params, function (data) {
            app.preloader.hide()
            if (successfully != undefined)
                successfully();

            if (callback != undefined)
                callback(data);
        }, function (xhr) {
            app.preloader.hide()
            if (error != undefined)
                error(xhr)

            if (callback != undefined)
                callback();
        });
    }
}
tinyM.http = new Http();