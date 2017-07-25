//<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

var items = {};
    $("#addButton").click(function (e) {
        e.preventDefault();
        var selectedItem = $("#leftValues option:selected");
        $("#rightValues").append(selectedItem);
    });

    $("#removeButton").click(function (e) {
        e.preventDefault();
        var selectedItem = $("#rightValues option:selected")

        selectedItem.map(function(item){
            items[item] = selectedItem[item].value;
        });
        console.log(items);
        $(selectedItem).remove();
    });
