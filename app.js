//general class shape attributes
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = $('<div class="shape"></div>');
        this.render();
    }

    //math to generate random position for shape on the canvas
    generateRandomPos(offset) {
        return Math.floor(Math.random() * (595 - offset));
    }

    //renders dimensions for shapes in css
    render() {
        this.div.css({
            height: `${this.height}px`,
            width: `${this.width}px`,
            top: `${this.generateRandomPos(this.height)}px`,
            left: `${this.generateRandomPos(this.width)}px`,
        });
        //appends shapes to the canvas
        $('#canvas').append(this.div);
    }
}

//additional class attributes specific to a rectangle
class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.attr('id', 'rectangle');
        this.div.click(() => this.describe());
        // removes shape on double click
        $(this.div).dblclick(() => {
            this.div.remove();
        })
    }
    describe() {
        $('#side-panel').append(this.div.attr('id'));
        $('#side-panel').append(this.div.attr('style'));
    }
}

//additional class attributes specific to a square
class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.div.attr('id', 'square');
        this.div.click(() => this.describe());
        // removes shape on double click
        $(this.div).dblclick(() => {
            this.div.remove();
        })
    }
    describe() {
        $('#side-panel').append(this.div.attr('id'));
        $('#side-panel').append(this.div.attr('style'));
    }
}

//additional class attributes specific to a circle
class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.div.attr('id', 'circle');
        this.div.click(() => this.describe());
        // removes shape on double click
        $(this.div).dblclick(() => {
            this.div.remove();
        })
    }
    describe() {
        $('#side-panel').append(this.div.attr('id'));
        $('#side-panel').append(this.div.attr('style'));
    }
}

//additional class attributes specific to a triangle
class Triangle extends Shape {
    constructor(triangleLength) {
        super(triangleLength, triangleLength);
        this.div.attr('id', 'triangle');
        this.div.click(() => this.describe());
        // removes shape on double click
        $(this.div).dblclick(() => {
            this.div.remove();
        })
    }
    describe() {
        $('#side-panel').append(this.div.attr('id'));
        $('#side-panel').append(this.div.attr('style'));
    }

}



//creates a rectangle when values are input and the button is clicked
$("#rectangle-button").click(function () {
    rectHeight = $("#rectangle-height").val();
    rectWidth = $("#rectangle-width").val();
    if ((rectHeight < 600) && (rectWidth < 600)) {
        let rect = new Rectangle(rectHeight, rectWidth);
    } else {
        alert("Enter values less than 600");
    }
})

//creates a square when the value is input and the button is clicked
$("#square-button").click(function () {
    sideLength = $("#side-length").val();
    if (sideLength < 600) {
        let squa = new Square(sideLength);
    } else {
        alert("Enter a value less than 600");
    }
})

//creates a circle when the value is input and the button is clicked
$("#circle-button").click(function () {
    radius = $("#circle-radius").val();
    if (radius < 600) {
        let circ = new Circle(radius);
    } else {
        alert("Enter a value less than 600");
    }
})

//creates a triangle when the value is input and the button is clicked
$("#triangle-button").click(function () {
    triangleLength = $("#triangle-height").val();
    if (triangleLength < 600) {
        let tria = new Triangle(triangleLength);
    } else {
        alert("Enter a value less than 600");
    }
})
