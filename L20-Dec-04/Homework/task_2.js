(function () {
    var fruits = ["banana", "kiwi", "strawberry", "ice"];
    function sortFruitsByName(arr) {
        return arr.sort(sortByLength);
    }
    function sortByLength(a, b) {
        return a.length - b.length;
    }
})();