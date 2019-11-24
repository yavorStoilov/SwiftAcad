function compare (a, b) {
    if (animals.indexOf(a) < 0 && animals.indexOf(b) >= 0) {
        return 1;
    }
    if (animals.indexOf(a) >= 0 && animals.indexOf(b) < 0) {
        return -1;
    }
}

var animals = ["cat", "dog", "bitd", "snake"];
var array = ["tree", 5, "dog", "ball", "snake"];