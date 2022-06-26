document.body.onload = addElement();

function addElement() {
    // gets url parameter for the trailer model
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // assigns model to a constant
    const model = urlParams.get('model').toUpperCase();

    // defines <div> as a variable; where HTML is added
    var node = document.getElementById('node-id');

    var html = `<div class="threesixty">
        <div style="z-index: 1; position: block;" class="cloudimage-360" id="` + model + `"
            data-folder="https://raw.githubusercontent.com/trailersbypremier/360-images/master/` + model + `/"
            data-filename-x="{index}.jpg" data-amount-x="8" data-play-once="true" data-autoplay="true" data-speed="30"
            data-bottom-circle="true" data-hide-360-logo="false" data-stop-at-edges="false" data-pointer-zoom="none">
        </div>
        <img class="noselector" src="https://raw.githubusercontent.com/trailersbypremier/360-images/master/360.png"
            style="width:10%; z-index: 2; transform: translate(0%, -100%); position: absolute;">
        
        <div class="threesixty-title">
            <img class="noselector"
                src="https://raw.githubusercontent.com/trailersbypremier/360-images/master/tbp-logo.webp">
            <h1>` + model + `</h1>
        </div>
    </div>`;

    node.innerHTML = html;
}