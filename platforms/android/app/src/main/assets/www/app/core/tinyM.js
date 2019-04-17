var tinyM = {
    f7: {},
    routes: {},
    global: {
        methods: {},
        consts: {}
    },
    config: config,
    http: {},
    utility: {},
    usingJS: [
        "app/core/tinyM.routes.js",
        "app/core/tinyM.global.methods.js",
        "app/core/library/tinyM.utility.js",
        "app/core/library/tinyM.http.js",
        "app/core/extensions/template7.extension.js"
    ]
}

tinyM.usingJS.forEach(element => {
    var script = document.createElement('script');
    script.src = element;
    document.head.appendChild(script);
})

function init_TinyM_F7() {
    tinyM.f7 = new Framework7({
        root: tinyM.config.root,
        id: tinyM.config.id,
        name: tinyM.config.name,
        theme: tinyM.config.theme,
        methods: tinyM.global.methods,
        data: tinyM.consts,
        routes: tinyM.routes.config
    })

    var mainView = tinyM.f7.views.create('.view-main', {
        url: '/'
    });

}