function calculateQuote() {

let type = document.getElementById("propertyType").value;
let beds = document.getElementById("bedrooms").value;

let price = 0;

if(type=="Terraced"){
    if(beds=="2 Bedrooms") price=15;
    if(beds=="3 Bedrooms") price=18;
    if(beds=="4 Bedrooms") price=22;
    if(beds=="5+ Bedrooms") price=25;
}

if(type=="Semi Detached"){
    if(beds=="2 Bedrooms") price=18;
    if(beds=="3 Bedrooms") price=22;
    if(beds=="4 Bedrooms") price=26;
    if(beds=="5+ Bedrooms") price=30;
}

if(type=="Detached"){
    if(beds=="2 Bedrooms") price=24;
    if(beds=="3 Bedrooms") price=28;
    if(beds=="4 Bedrooms") price=34;
    if(beds=="5+ Bedrooms") price=40;
}

if(type=="Bungalow"){
    if(beds=="2 Bedrooms") price=18;
    if(beds=="3 Bedrooms") price=22;
    if(beds=="4 Bedrooms") price=26;
    if(beds=="5+ Bedrooms") price=30;
}

if(type=="Flat"){
    if(beds=="2 Bedrooms") price=12;
    if(beds=="3 Bedrooms") price=15;
    if(beds=="4 Bedrooms") price=18;
    if(beds=="5+ Bedrooms") price=20;
}

document.getElementById("quotePrice").innerHTML =
"<h1>Estimated Quote: £"+price+"</h1>";

}
