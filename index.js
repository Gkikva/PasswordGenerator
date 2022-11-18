
var ll = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?"


function blink_text() {
	$('.PasswordText').fadeOut(500);
    $('.PasswordText').fadeIn(500);
}


// when 20 symbols button is clicked
document.querySelector(".TwentySymbolGenerator").addEventListener("click", function  () {
    var random_text = ""
    for (var i = 0; i< 20; i++) {
        var random_symbols = Math.floor(Math.random() * ll.length);
        random_text += ll[random_symbols]
    };
    console.log(random_text.length)
    document.querySelector(".PasswordText").innerHTML= random_text;
    blink_text();
    setInterval(blink_text, 1000);
});


//  when 1-50 button is clicked

document.querySelector("#passwordInputId").addEventListener("input", function () {
    var input_value = this.value
    if (input_value > 50) {
        document.querySelector(".ManualGenerator").addEventListener("click", function () {
            document.querySelector(".PasswordText").innerHTML= "Input less than 50"
        })
    }
    else {
        document.querySelector(".ManualGenerator").addEventListener("click", function  () {
            var random_text = ""
            for (var i = 0; i< input_value; i++) {
                var random_symbols = Math.floor(Math.random() * ll.length);
                random_text += ll[random_symbols]
            };
            console.log(random_text.length)
            document.querySelector(".PasswordText").innerHTML= random_text;
            blink_text();
            setInterval(blink_text, 1000);
        });
    };
    
});
