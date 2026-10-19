var fso = new ActiveXObject("Scripting.FileSystemObject");

function readUtf8(path) {
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2; // adTypeText
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile(path);
    var text = stream.ReadText();
    stream.Close();
    return text;
}

var text = readUtf8("js/data.js");
var startIdx = text.indexOf("const INITIAL_PRODUCTS = [");
startIdx += "const INITIAL_PRODUCTS = ".length;
var endIdx = text.lastIndexOf("];");
var jsonStr = text.substring(startIdx, endIdx + 1);

// We'll write cameras to a separate json file
var prods = eval("(" + jsonStr + ")");
var cameras = [];
for (var i = 0; i < prods.length; i++) {
    if (prods[i].category === "cameras" || prods[i].id.indexOf("CAM-") === 0) {
        cameras.push({
            id: prods[i].id,
            name: prods[i].name,
            brand: prods[i].brand,
            price: prods[i].price,
            image: prods[i].image,
            gallery: prods[i].gallery || []
        });
    }
}

var streamOut = new ActiveXObject("ADODB.Stream");
streamOut.Type = 2;
streamOut.Charset = "utf-8";
streamOut.Open();
// Write simple JSON string
var lines = [];
lines.push("[");
for (var j = 0; j < cameras.length; j++) {
    var c = cameras[j];
    var itemStr = '  {"id":"' + c.id + '","name":"' + c.name.replace(/"/g, '\\"') + '","brand":"' + c.brand + '","price":' + c.price + ',"image":"' + c.image + '"}';
    if (j < cameras.length - 1) itemStr += ",";
    lines.push(itemStr);
}
lines.push("]");
streamOut.WriteText(lines.join("\r\n"));
streamOut.SaveToFile("cameras_list.json", 2);
streamOut.Close();

WScript.Echo("Extracted " + cameras.length + " cameras to cameras_list.json");
