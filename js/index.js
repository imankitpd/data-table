(function ($) {
    var $container = $("#container"),
        $table = $("<table>/table").addClass("table table-inverse"),
        $tr = $("<tr></tr>");
    $tbody = $("<tbody></tbody>");
    $thead = $("<thead></thead>");

    $("<th></th>").text("#").appendTo($tr);
    $("<th></th>").text("Item").appendTo($tr);
    $("<th></th>").text("Price").appendTo($tr);
    $("<th></th>").text("Quantity").appendTo($tr);
    $("<th></th>").text("Unit").appendTo($tr);

    $tr.appendTo($thead);
    $thead.appendTo($table);

    //     $p = $("<p></p>");
    // $("<span></span>").addClass("my-class").attr({"name": "yogesh", "count":23}).css("color", "#EE23FF").text("Yogesh").appendTo($p);
    // $p.appendTo($container);

    $.getJSON("data.json", function (items) {
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
    });
    $table.appendTo($container);
})(jQuery);