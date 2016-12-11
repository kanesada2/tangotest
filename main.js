window.onload = function () {
    var image = document.getElementById('test');
    Tesseract.recognize(image).then(function(result){
    console.log(result)
})
}