(function (window, document) {
    "use strict";
    var input = document.getElementById('sum');

    input.onclick = function () {
        var listIn = document.getElementById('list').value.trim().split('\n'),
            listOut = {},
            parseList = function (list) {
                var item = [],
                    key,
                    val,
                    i,
                    result = {};

                for (i = 0; i < list.length; i += 1) {
                    item = list[i].split(',');
                    key = item[0];
                    val = parseInt(item[1], 10);
                    if (!isNaN(val)) {
                        result[key] = result[key] + val || val;
                    }
                }
                return result;
            },
            displayList = function (list) {
                var ul = document.getElementById('result'),
                    getLiHTML = function (key, val) {
                        return "<li>The total for " + key + " is " + val + ".</li>";
                    },
                    key;

                ul.innerHTML = '';
                for (key in list) {
                    if (list.hasOwnProperty(key)) {
                        ul.innerHTML += getLiHTML(key, list[key]);
                    }
                }
            };

        listOut = parseList(listIn);
        displayList(listOut);
    };

    input.dispatchEvent(new window.MouseEvent('click'));
}(this, this.document));