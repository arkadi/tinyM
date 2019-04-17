

var Routers = function () {
    var routeEvents = {
        pageInit: function (event, page) {
            var json = JSON.stringify((page.route.context != undefined) ? page.route.context : "{}").replace(/\\t/g, "").replace(/\\n/g, "");
            try {
                eval(page.name + "Controller.init('" + json + "')");
            } catch (e) {
                console.error(e);
            }
        }
    };

    config.route.forEach(element => {
        element.on=routeEvents;
    });

    this.config= config.route;
};

tinyM.routes = new Routers();