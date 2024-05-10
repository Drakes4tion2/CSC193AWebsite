function showAlert() {
    alert("Hello, world!");
}

function embiggenInput() {
    document.getElementById("textInput").style.fontSize = "24pt";
}


function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; 
        textArea.style.textDecoration = "none"; 
    }
}

function capitalizeAndAddMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    var sentences = text.split(". "); 

    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo"; 
        sentences[i] = words.join(" ");
    }

    text = sentences.join(". ");
    textArea.value = text;
}
