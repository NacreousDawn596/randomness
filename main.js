const createPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
        pairs.push(i + 1 < array.length ? [array[i], array[i + 1]] : [array[i]]);
    }
    return pairs;
}

const sleep = (milliseconds) => { return new Promise(resolve => setTimeout(resolve, milliseconds)) }

const random = (arr) => { return arr.length === 0 ? null : arr[Math.floor(Math.random() * arr.length)] };

window.addEventListener("load", async (rl) => {
    alert("crazychickenpox, this mf got 1.8Gb of protogen memes ._.")
    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function () {
        var changeTop = (Math.random() * (window.innerHeight - button.offsetHeight));
        var changeLeft = (Math.random() * (window.innerWidth - button.offsetWidth));
        button.style.marginTop = changeTop + "px";
        button.style.marginLeft = changeLeft + "px";
    });

    var scareddog = document.getElementsByTagName("img")[1]
    scareddog.addEventListener("click", function () {
        scareddog.style.display = "none"
    });

    memes = ['femboy_memes/921645682241179688.webp', 'femboy_memes/anarchists when I touch their pro state.jpg', 'femboy_memes/avg male in this server.webp', 'femboy_memes/a_good_game_can_change_your_life.png', 'femboy_memes/bad_drink.png', 'femboy_memes/boobs or butt.jpg', 'femboy_memes/boy toys.png', 'femboy_memes/boykisser execution.jpeg', 'femboy_memes/BRO HUG.jpg', 'femboy_memes/BYOSMELLLLLLL.png', 'femboy_memes/C35F9C00-926C-4F3B-831B-FB3082990D69.png.jpg', 'femboy_memes/can I get amen break pack.jpg', 'femboy_memes/cat medicine.jpg', 'femboy_memes/clock.png', 'femboy_memes/cobbestone generalte.png', 'femboy_memes/constantly thinking about cock.jpg', 'femboy_memes/liblie.png', 'femboy_memes/life sucks keeps living.jpg', 'femboy_memes/look at my boy something is missing tho.jpg', 'femboy_memes/masculin urges.png', 'femboy_memes/me and the boy.png', 'femboy_memes/me at age 25.png', 'femboy_memes/me femthighs.webp', 'femboy_memes/men song sened.png', 'femboy_memes/mentally ill.jpg', 'femboy_memes/mgmm mxmgxmgxgm.webp', 'femboy_memes/mom found fem.png', 'femboy_memes/monster clock.jpg', 'femboy_memes/mountbitain dew.jpg', 'femboy_memes/mr beast pedo.png', 'femboy_memes/neco arc .jpg', 'femboy_memes/nouveau gigachad.png', 'femboy_memes/NYAAAA.png', 'femboy_memes/O black monster.jpg', 'femboy_memes/O black monster2.jpg', 'femboy_memes/PEEL OFF YOUR SKIN.png', 'femboy_memes/pick your class linux user.jpg', 'femboy_memes/repost if you want to jerk a boy off.png', 'femboy_memes/sexual autsim.png', 'femboy_memes/shitpost spectrum.jpg', 'femboy_memes/so bad at boy I woman.jpeg', 'femboy_memes/soad.jpg', 'femboy_memes/sucking range.jpg', 'femboy_memes/the masculin urges.png', 'femboy_memes/there is no greater joy in life.webp', 'femboy_memes/thinkpad.png', 'femboy_memes/this could be us.jpg', 'femboy_memes/tom scott being gay.jpg', 'femboy_memes/touch grass nahh touch me.jpg', 'femboy_memes/trade offer femboy furry.jpg', 'femboy_memes/transfem.jpg', 'femboy_memes/twink pipeboms.png', 'femboy_memes/urges.png', 'femboy_memes/urgesssssssss.jpg']
    for (meme of createPairs(memes)) {
        imgg = document.createElement("img");
        imgg.src = meme[0]
        imgg.className = "img-fluid"
        img = document.createElement("img");
        img.src = meme[1]
        img.className = "img-fluid"
        div = document.createElement("div");
        div.className = "d-flex flex-column"
        div.appendChild(imgg)
        div.appendChild(img)
        document.getElementById("gallery").appendChild(div);
    }
    timerElement = document.getElementById("timer");
    while (true) {
        e = Math.floor(Math.random() * 10) * 2;
        timerElement.innerHTML = e + "s";
        while (e >= 0){
            if (e === 0) {
                random([() => {window.location.top = window.top}, 
                    () => {alert("deez nuts")}, 
                    () => {window.location.top = window.top}, 
                    () => {throw new Error('Error: Your sense of humor not found!')},
                    () => {alert("¯\\_(ツ)_/¯'")}, 
                    () => {location.reload()},
                    () => {window.location.top = "https://youtu.be/dQw4w9WgXcQ"},
                    () => {window.open(URL.createObjectURL(new Blob(["<h1>how about consuming more ram? lol </h1>"], { type: "text/html" })), "win", `width=800,height=400,screenX=200,screenY=200`)}
                ])();
                break;
            }else{
                e -= 1
                timerElement.innerHTML = e + "s";
            }
            await sleep(1000);
        }
    }
})