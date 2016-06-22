var size = 0;
var categories_JCbuildings = {"R-1": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(90,245,238,0.86)"})
    })],
"R-1A": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(18,192,243,0.86)"})
    })],
"R-1F": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(88,152,243,0.86)"})
    })],
"R-2": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(88,152,148,0.86)"})
    })],
"R-3": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(130,168,135,0.86)"})
    })],
"R-4": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(95,183,73,0.86)"})
    })],
"DT": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(42,201,199,0.86)"})
    })],
"NC": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(248,155,161,0.86)"})
    })],
"CBD": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(218,79,33,0.86)"})
    })],
"C/A": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(204,119,180,0.86)"})
    })],
"HC": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(248,101,128,0.86)"})
    })],
"OR": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(191,55,18,0.86)"})
    })],
"P/O": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(121,226,121,0.86)"})
    })],
"I": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(154,128,206,0.86)"})
    })],
"PI": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(138,125,222,0.86)"})
    })],
"M": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(190,171,222,0.86)"})
    })],
"U": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(140,13,172,0.86)"})
    })],
"G": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(182,125,222,0.86)"})
    })],
"C": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(137,226,137,0.86)"})
    })],
"H": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(211,170,126,0.86)"})
    })],
"WPD": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(197,192,115,0.86)"})
    })],
"1 Exchange Place": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(49,27,217,0.86)"})
    })],
"23-25 Duncan RDP": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(72,172,222,0.86)"})
    })],
"325 Palisade": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(46,64,200,0.86)"})
    })],
"8 Erie": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(117,207,217,0.86)"})
    })],
"Armory": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(183,224,106,0.86)"})
    })],
"Bates Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(28,111,212,0.86)"})
    })],
"Bayfront I": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(27,27,232,0.86)"})
    })],
"Beacon Avenue": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(204,205,104,0.86)"})
    })],
"Betz Brewery": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(95,233,74,0.86)"})
    })],
"Block 10102": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(240,103,140,0.86)"})
    })],
"Block 239 Lot 47": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(229,124,37,0.86)"})
    })],
"Boland Street RDP": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(96,206,199,0.86)"})
    })],
"Boyd McGuiness Park": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(50,235,161,0.86)"})
    })],
"Bright Street RDP": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(100,223,180,0.86)"})
    })],
"Claremont Industrial": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(190,210,57,0.86)"})
    })],
"Cambridge North": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(95,226,196,0.86)"})
    })],
"Canal Crossing": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(95,203,142,0.86)"})
    })],
"Caven Point": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(236,112,75,0.86)"})
    })],
"Chapel Avenue Industrial Park": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(52,206,101,0.86)"})
    })],
"Colgate": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(188,200,18,0.86)"})
    })],
"Columbus Corner": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(103,227,65,0.86)"})
    })],
"Danforth Transit Village": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(111,207,212,0.86)"})
    })],
"Dixon Crucible": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(81,75,200,0.86)"})
    })],
"Droyers Point": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(196,230,116,0.86)"})
    })],
"Exchange Place": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(133,201,93,0.86)"})
    })],
"Exchange Place North": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(240,131,191,0.86)"})
    })],
"Garfield Ave": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(234,162,36,0.86)"})
    })],
"Grand Jersey": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(163,239,75,0.86)"})
    })],
"Grand Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(221,205,54,0.86)"})
    })],
"Green Villa": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(75,201,145,0.86)"})
    })],
"Greenville Industrial": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(193,214,124,0.86)"})
    })],
"Gregory Park": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(133,221,211,0.86)"})
    })],
"Grove and Mercer": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(213,145,100,0.86)"})
    })],
"Grove Street II": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(188,208,100,0.86)"})
    })],
"Grove Street N.D.P.": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(27,93,225,0.86)"})
    })],
"Hackensack River Edge RDP": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(107,32,228,0.86)"})
    })],
"Hamilton Square": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(147,44,211,0.86)"})
    })],
"Harsimus Cove Station": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(232,134,155,0.86)"})
    })],
"Henderson Street South": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(231,190,100,0.86)"})
    })],
"H.M.D.C.": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(54,212,183,0.86)"})
    })],
"Holland Tunnel": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(40,104,201,0.86)"})
    })],
"Hopkins and Central": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(239,35,216,0.86)"})
    })],
"Jackson Avenue": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(123,200,221,0.86)"})
    })],
"Jersey Avenue Light Rail": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(197,90,211,0.86)"})
    })],
"Jersey Avenue Park": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(112,130,219,0.86)"})
    })],
"Jersey Avenue Tenth Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(88,158,202,0.86)"})
    })],
"Journal Square 2060": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(84,56,224,0.86)"})
    })],
"Lafayette Park": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(238,201,51,0.86)"})
    })],
"Liberty Harbor": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(31,213,49,0.86)"})
    })],
"Liberty Harbor North": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(224,88,70,0.86)"})
    })],
"Luis Munoz Marin": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(145,222,109,0.86)"})
    })],
"M.L.K. Drive": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(238,106,104,0.86)"})
    })],
"Majestic Theater": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(217,76,147,0.86)"})
    })],
"Majestic Theater II": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(109,206,146,0.86)"})
    })],
"Marine Industrial": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(77,28,202,0.86)"})
    })],
"McGinley Square": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(226,117,133,0.86)"})
    })],
"Merseles Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(76,211,96,0.86)"})
    })],
"Montgomery Gateway": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(210,86,58,0.86)"})
    })],
"Montgomery Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(153,95,200,0.86)"})
    })],
"Monticello Avenue": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(46,163,205,0.86)"})
    })],
"Morgan Grove Marin": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(86,125,224,0.86)"})
    })],
"Morris Canal": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(111,15,228,0.86)"})
    })],
"Newark Ave RDP": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(219,98,138,0.86)"})
    })],
"Newport": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(232,212,98,0.86)"})
    })],
"Ninth Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(226,57,159,0.86)"})
    })],
"Ninth Street II": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(107,133,221,0.86)"})
    })],
"Grove Street Station": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(207,94,33,0.86)"})
    })],
"Ocean/Bayview": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(230,86,221,0.86)"})
    })],
"Paulus Hook": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(71,234,59,0.86)"})
    })],
"Powerhouse": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(223,115,187,0.86)"})
    })],
"Republic Container": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(159,87,231,0.86)"})
    })],
"Route 440 - Culver": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(211,109,119,0.86)"})
    })],
"School #2": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(214,132,126,0.86)"})
    })],
"Sip Avenue Gateway": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(205,140,237,0.86)"})
    })],
"St. John's": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(21,223,18,0.86)"})
    })],
"Summit and Fairmount": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(117,168,206,0.86)"})
    })],
"Summit Avenue": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(104,203,152,0.86)"})
    })],
"The Beacon": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(33,45,211,0.86)"})
    })],
"Tidewater": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(212,127,93,0.86)"})
    })],
"Turnkey": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(228,122,211,0.86)"})
    })],
"Village": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(126,217,41,0.86)"})
    })],
"Water Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(152,231,34,0.86)"})
    })],
"Wayne Street": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(30,135,240,0.86)"})
    })],
"Webster Avenue": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(227,186,132,0.86)"})
    })],
"West Side Ave": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(110,202,113,0.86)"})
    })],
"": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(223,223,223,0.86)"})
    })]};
var styleCache_JCbuildings={}
var style_JCbuildings = function(feature, resolution){
    var value = feature.get("zone");
    var style = categories_JCbuildings[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_JCbuildings[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_JCbuildings[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_JCbuildings[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};