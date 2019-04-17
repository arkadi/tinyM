var Utility = function () {
    this.showMessage = function (text, type, timeout) {
            var toastWithCustomButton = app.toast.create({
                text: text,
                position: 'top',
                closeButtonText: 'X',
                closeButtonColor: 'black',
                closeButton: false,
                cssClass: (type === "info") ? 'messageInfoClass' : 'messageErrorClass',
                closeTimeout: (timeout === undefined) ? 3000 : timeout
            });
            toastWithCustomButton.open();
        },
        this.formatMoney = function (amount, decimalCount = 2, decimal = ".", thousands = ",") {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;

                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
            } catch (e) {
                console.log(e)
            }
        }
}

tinyM.utility = new Utility();