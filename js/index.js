(function ($) {
    var titlesHead = {
        "id": "#",
        "item": "Item",
        "price": "Price",
        "quantity": "Quantity",
        "unit": "Unit"
    };
    var selectedKey = null,
        selectedType = null,
        itemsData = [],
        $container = $("#container"),
        $table = $("<table>/table").addClass("table table-inverse"),
        $tr = $("<tr></tr>"),
        $tbody = $("<tbody></tbody>"),
        $thead = $("<thead></thead>");

    // Get titles in dropdown menu
    for (var key in titlesHead) {
        $("<th></th>").text(titlesHead[key]).appendTo($tr);
        if (titlesHead[key] !== "#") {
            $("<a></a>").text("Sort by " + titlesHead[key])
                .addClass("dropdown-item").data("key", key)
                .attr({ "href": "#", "id": "drp-" + key })
                .click(function () {
                    $("#sort_menu").text(this.text);
                    selectedKey = $(this).data("key");
                }).appendTo("#items-menu");
        }
    };

    $tr.appendTo($thead);
    $thead.appendTo($table);

    function createDataTable(items) {
        console.log(items);
        $tbody.empty();
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                $tr = $("<tr></tr>");

                $("<td></td>").text(items[i].id).appendTo($tr);
                $("<td></td>").text(items[i].item).appendTo($tr);
                $("<td></td>").text(items[i].price).appendTo($tr);
                $("<td></td>").text(items[i].quantity).appendTo($tr);
                $("<td></td>").text(items[i].unit).appendTo($tr);

                $tr.appendTo($tbody);
            }
        } else {
            $tr = $("<tr></tr>");
            $("<td></td>").text("There is no items available in the store.").attr("colspan", 5).addClass("text-center").appendTo($tr);
            $tr.appendTo($tbody);
        }
        $tbody.appendTo($table);
    }
    // Get JSON data from "data.json"
    $.getJSON("data.json", function (items) {
        itemsData = items;
        createDataTable(items);
    });
    $table.appendTo($container);

    // Sorting Button function
    $(".sort-type").click(function () {
        $("#sort_type_btn").text($(this).text());
        selectedType = $(this).data("key");
    });

    $("#sort_btn").click(function () {

        console.log(selectedKey);
        console.log(selectedType);

        if (selectedKey !== null && selectedType !== null ) {

            itemsData.sort(function (a, b) {

                if (selectedType === 0) {

                    return a[selectedKey] > b[selectedKey];

                } else if (selectedType === 1) {

                    return b[selectedKey] > a[selectedKey];
                }
            });
            
            createDataTable(itemsData);
            
        }
    });

})(jQuery);