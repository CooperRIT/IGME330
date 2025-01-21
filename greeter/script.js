window.onload = init;

function init() 
{
    document.querySelector("#BTN-hello").onclick = () => { greeter(`${document.querySelector("#input-firstname").value} ${document.querySelector("#input-lastname").value} `, 0) };
    document.querySelector("#BTN-goodbye").onclick = () => { greeter(`${document.querySelector("#input-firstname").value} ${document.querySelector("#input-lastname").value} `, 1) };

    const paragraph = document.querySelector("#output");

    paragraph.style.color = "red";
    paragraph.style.backgroundColor = "yellow";
}

const greeter = (input, saying) =>
{
    input = input == "" ? "Peter" : input;

    console.log(input);

    const ifShoutify = document.querySelector("#shoutCheckBox").checked;

    let output = `${saying == 0 ? "Hello" : "Goodbye"} ${input}`;
    
    output = ifShoutify ? output.toUpperCase() : output;

    document.querySelector("#output").innerHTML = output;
}