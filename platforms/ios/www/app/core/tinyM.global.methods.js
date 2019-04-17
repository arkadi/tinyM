var GlobalMethods = function(){
    this.activePage= function () {
        return tinyM.f7.views.main.router.currentPageEl.attributes["data-name"].value;
    },
    this.goBack= function (url) {
        tinyM.f7.views.main.router.back({
            url: url,
            force: true,
            ignoreCache: true
        });
    }
}

tinyM.global.methods = new GlobalMethods();