function calculateRectangleArea(){

    // get lengthe of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle

     const widthInput = document.getElementById('rectangle-width');
     const widthText = widthInput.value;
     const width = parseFloat(widthText);
     console.log(width);

    // get area of the rectangle

     const area = length * width;
     console.log('area of the rectangle:',area);


    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText= area;
}      