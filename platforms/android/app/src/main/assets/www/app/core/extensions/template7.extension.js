var Template7Extension = function () {
    var template = "";
    var lastTemplate = "";
    var textAreaArray;

    this.compile = function (model) {
        for (x in model) {
            if (typeof model[x] === 'function') {
                model[x] = "(" + model[x].toString().replace(/"/g, "'") + ")();";
            }
        }
        if (template == "")
            template = $$("div[data-name='" + app.f7.methods.activePage() + "']>.page-content").html();
        var compiledTemplate = Template7.compile(template);
        var html = compiledTemplate(model).replace(/(\r\n|\n|\r)/gm, "");;

       

        if (html.trim() !== lastTemplate.trim()) {
            $$("div[data-name='" + app.f7.methods.activePage() + "']>.page-content").html(html);
        }

        lastTemplate = html;

    }
}


Template7.Extension = new Template7Extension();