document.addEventListener("DOMContentLoaded", function () {
    var helloMeText = "Hello! I am ";
    var helloMe2Text = "nexuSpark!";
    var helloMeElement = document.getElementById("helloMe");
    var helloMe2Element = document.getElementById("helloMe2");
    var speed = 100; // Harfler arası bekleme süresi (milisaniye)
    function typeWriter(element, text, callback) {
        var index = 0;
        function writeChar() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(writeChar, speed);
            }
            else if (callback) {
                setTimeout(callback, speed);
            }
        }
        writeChar();
    }
    typeWriter(helloMeElement, helloMeText, function () {
        typeWriter(helloMe2Element, helloMe2Text);
    });
});
