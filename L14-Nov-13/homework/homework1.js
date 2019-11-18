function triangleArea(h, a){
    return 2*(a*h/2);
};

function rectangleArea(a, b) {
    return a*b;
};

function area(a, b, c){
    let h = c - b;
    var triangle = triangleArea(h, a);
    var rectangle = rectangleArea (a, b);
    document.write(triangle + rectangle);
};

