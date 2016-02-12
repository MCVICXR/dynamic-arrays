//create an array
var colorList = ["red", "black", "white", "blue", "green", "yellow", "gold", "orange"];

//function testFunction()
//{



//}



colorList.splice(0, 1);

var myThumbDiv = document.getElementById("thumbs");

var imageListA = [];

imageListA[0] = "images/jordan/thumbs/shoes_1.jpg";
imageListA[1] = "images/jordan/thumbs/shoes_2.jpg";
imageListA[2] = "images/jordan/thumbs/shoes_3.jpg";
imageListA[3] = "images/jordan/thumbs/shoes_4.jpg";
imageListA[4] = "images/jordan/thumbs/shoes_5.jpg";
imageListA[5] = "images/jordan/thumbs/shoes_6.jpg";
imageListA[6] = "images/jordan/thumbs/shoes_7.jpg";
imageListA[7] = "images/jordan/thumbs/shoes_8.jpg";
imageListA[8] = "images/jordan/thumbs/shoes_9.jpg";
imageListA[9] = "images/jordan/thumbs/shoes_10.jpg";

//oil color art
var imageListB = [];
imageListB[0] = "images/airmax/thumbs/shoes_1.jpg";
imageListB[1] = "images/airmax/thumbs/shoes_2.jpg";
imageListB[2] = "images/airmax/thumbs/shoes_3.jpg";
imageListB[3] = "images/airmax/thumbs/shoes_4.jpg";
imageListB[4] = "images/airmax/thumbs/shoes_5.jpg";
imageListB[5] = "images/airmax/thumbs/shoes_6.jpg";
imageListB[6] = "images/airmax/thumbs/shoes_7.jpg";
imageListB[7] = "images/airmax/thumbs/shoes_8.jpg";
imageListB[8] = "images/airmax/thumbs/shoes_9.jpg";
imageListB[9] = "images/airmax/thumbs/shoes_10.jpg";

//water color art
var imageListC = [];
imageListC[0] = "images/cleats/thumbs/shoes_1.jpg"
imageListC[1] = "images/cleats/thumbs/shoes_2.jpg"
imageListC[2] = "images/cleats/thumbs/shoes_3.jpg"
imageListC[3] = "images/cleats/thumbs/shoes_4.jpg"
imageListC[4] = "images/cleats/thumbs/shoes_5.jpg"
imageListC[5] = "images/cleats/thumbs/shoes_6.jpg"
imageListC[6] = "images/cleats/thumbs/shoes_7.jpg"
imageListC[7] = "images/cleats/thumbs/shoes_8.jpg"
imageListC[8] = "images/cleats/thumbs/shoes_9.jpg"
imageListC[9] = "images/cleats/thumbs/shoes_10.jpg"

//create the buildThumbnail function
function buildThumbnails()
{

//hook into the thumbs div

var thumbsDiv = document.getElementById("thumbs");

//create an output variable
var output = ""
//first part: counter (we set up 0 to start counting the loop)
//second part: condition (the loop will keep looping as long
//as the condition is true)
//third part: incrementor - adds one to the counter AFTER the code is
//executed in the brackets

//output a ul open tag
output += '<div class="thumbs_block"> ';
for(var i=0; i < imageListA.length; i++)
{
  //concantenation assignment operator
  //output an open li here
  output += '<img src="' + imageListA[i] + '" />' ;
  //ouput  closed li here
}
output += '</div>';
//output a ul close tag

output += '<div class="thumbs_block"> '; 
for(var j=0; j < imageListB.length; j++)
{
  //concantenation assignment operator
  output += '<img src="' + imageListB[j] + '" />' ;
}
output += '</div>';

output += '<div class="thumbs_block"> ';
for(var k=0; k < imageListC.length; k++)
{
  //concantenation addignment operator
  output += '<img src="' + imageListC[k] + '" />' ;
}
output += '</div>';

thumbsDiv.innerHTML = output;

/*thumbsDiv.innerHTML = 
'<img src="' + imagelist[0] + '" /> ' +
'<img src="' + imagelist[1] + '" /> ' +
'<img src="' + imagelist[2] + '" /> ' +
'<img src="' + imagelist[3] + '" /> ' +
'<img src="' + imagelist[4] + '" /> ' +
'<img src="' + imagelist[5] + '" /> '
;*/

}



window.onload = function()
{

  buildThumbnails();//use or fire off this function
  //or invoke the function

};

var purchasedImages = [];

myThumbDiv.addEventListener("click", onImageClick, false);

function onImageClick(evt)
{
  var onlyPath = evt.target.getAttribute("src");
  //console.log(onlyPath);
  var imageIndex = imageListA.indexOf(onlyPath);

  var selectedImage = imageListA.splice(imageIndex, 1);

  //console.log(selectedImage);

  purchasedImages.push(selectedImage);
  update_shopping_cart();
  buildThumbnails();

}

function update_shopping_cart()
{
  var cart = document.getElementById("shopping_cart_div")

  var output = "";

  for(var i=0; i <= purchasedImages.length -1; i++ )
  {
    output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
  }
  cart.innerHTML = output;
  //console.log(imageList.length);
  //thumbs.innerHTML = "this used to be the images";
}


































