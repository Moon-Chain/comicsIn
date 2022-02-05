const comic_list = [];
const panel_list = [];
let play_speed = 1900;
let eruncal = 0;

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// TODO: Speech html doesnt work

function create_comic(name) {
    article = '<article id="' + name + '" class="comic"></article>';
    comic_list.push(name);
    document.getElementById("comicsin").innerHTML = document.getElementById("comicsin").innerHTML + article;
}

function create_panel(comic_uuid = null, flex_basis = null, img_url = null, text_1 = null, text_2 = null, text_speech = null) {
    uuid = uuidv4();
    var img_uuid, text_1_uuid, text_speech_uuid, text_2_uuid;
    var img_html = "",
        text_1_html = "",
        text_2_html = "",
        text_speech_html = "";

    if (img_url != null) {
        img_uuid = uuidv4();
        // TODO: img için opacity_false olmalı
        img_html = '<img class="" style="height:100%;" id="' + img_uuid + '" src="' + img_url + '">';
    }
    if (text_1 != null) {
        text_1_uuid = uuidv4();
        text_1_html = '<p id="' + text_1_uuid + '" class="text top-left opacity_false">' + text_1 + '</p>';
    } else if (text_speech != null) {
        text_speech_uuid = uuidv4();
        text_speech_html = '<p id="' + text_speech_uuid + '" class="speech opacity_false">' + text_speech + '</p>';
    }
    if (text_2 != null) {
        text_2_uuid = uuidv4();
        text_2_html = '<p id="' + text_2_uuid + '" class="text bottom-right opacity_false">' + text_2 + '</p>';
    }

    var fb_style = flex_basis != null ? 'style="flex-basis: ' + flex_basis + '"' : "";
    panel_inner = img_html + text_1_html + text_2_html + text_speech_html;
    var panel = '<div ' + fb_style + ' class="panel  opacity_false" id="' + uuid + '">' + panel_inner + '</div>';

    panel_folder = {
        comic_name: comic_uuid,
        uuid: uuid,
        img_uuid: img_uuid != null ? img_uuid : null,
        text_1_uuid: text_1_uuid != null ? text_1_uuid : null,
        text_2_uuid: text_2_uuid != null ? text_2_uuid : null,
        text_speech_uuid: text_speech_uuid != null ? text_speech_uuid : null,
        html: panel
    }
    panel_list.push(panel_folder);

    var comic = document.getElementById(comic_uuid != null ? comic_uuid : "");
    if (comic != undefined) {
        comic.innerHTML = comic.innerHTML + panel;
    }

    var find_panel = document.getElementById(uuid);
}

function run_comic(name) {
    // TODO: kontrol amaçlı comic_list array içinde name değeri aranacak
    // eruncal = 0;
    runcal = 0;
    panel_list.forEach(element => {
        if (element.comic_name == name) {
            runcal = runcal + play_speed;
            run_panel(element);
        }
    });
    // console.log(comic_list);
    // console.log(panel_list);
}

function run_panel(panel_content) {
    // eruncal değeri let olarak ayarlandı
    // eruncal = 0;
    elems = [];
    elems.push(panel_content.uuid);

    // uuid ile img_uuid ayrılmalı
    // elems.push(panel_content.img_uuid);

    elems.push(panel_content.text_1_uuid);
    elems.push(panel_content.text_2_uuid);
    elems.push(panel_content.text_speech_uuid);

    elems.forEach(element => {
        if(element != null){
            eruncal = eruncal + play_speed;
            setTimeout(function () {
                opacity_changer(element);
            }, eruncal);
        }
    });
}

function opacity_changer(uuid) {
    item = document.getElementById(uuid);
    if (item != undefined) {
        item.classList.remove("opacity_false");
        item.classList.add("opacity_true");
    }
}