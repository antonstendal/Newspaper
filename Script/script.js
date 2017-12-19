
function burgerMenu() {
	var drop = document.getElementById("drop");
	var dropDawn = document.getElementById("dropDawn");
	if(drop.style.display ==="none") {
		drop.style.display = "block";		
	}
	else {drop.style.display = "none"
	}
}
window.addEventListener("DOMContentLoaded", function (){
var imagesList = ['http://www.merchandisingplaza.us/179633/Poster-MAN-UTD-Manchester-United-Team-Photo-15-16-Mini-Poster-s.jpg', 'http://img.tritiumnet.org/916219_large.jpg',  'https://90l.tribuna.com/images/6b/a4/f7/6ba4f7aeca434b25adaebc3dd42e4e8f500x500.jpg'];
var slide = document.getElementById("displaySlide");
//var i=0;
	slide.src = imagesList[0];
	var rightbutton = document.getElementById("rightbutton");
	var leftbutton = document.getElementById("leftbutton");
	rightbutton.addEventListener ('click', next, false);
	leftbutton.addEventListener ('click', prev, false);
	i=0;

	function next () {
  if (i==2) {i=0} else {i++}
  slide.src = imagesList[i];
 }
 
 function prev () {
  if (i == 0) {i=2}
  else {i--}
  slide.src = imagesList[i];
 }
 setTimeout(slid, 1000);
});

window.addEventListener("DOMContentLoaded", function (){
var imagesList = ['http://www.merchandisingplaza.us/179633/Poster-MAN-UTD-Manchester-United-Team-Photo-15-16-Mini-Poster-s.jpg', 'http://img.tritiumnet.org/916219_large.jpg',  'https://90l.tribuna.com/images/6b/a4/f7/6ba4f7aeca434b25adaebc3dd42e4e8f500x500.jpg'];
var slide = document.getElementById("displaySlide");
//var i=0;
	slide.src = imagesList[0];
	var rightbutton = document.getElementById("right_button");
	var leftbutton = document.getElementById("left_button");
	rightbutton.addEventListener ('click', next, false);
	leftbutton.addEventListener ('click', prev, false);
	i=0;

	function next () {
  if (i==2) {i=0} else {i++}
  slide.src = imagesList[i];
 }
 
 function prev () {
  if (i == 0) {i=2}
  else {i--}
  slide.src = imagesList[i];
 }
});

function sign_in () {
 var su = document.getElementById("open_window");
 su.style.display = "block";
}

function sign_on () {
 var si = document.getElementById("open_window2");
 si.style.display = "block";
}

function close1() {
 var closeGD = document.getElementById("open_window");
 closeGD.style.display = "none";
}

function close2 () {
	var closeG = document.getElementById("open_window2");
	closeG.style.display = "none";
}


 
	function acceptance(newsArr) {
        for(key in newsArr) {
        var title = newsArr[key].title;
        var author = newsArr[key].author;
        var description = newsArr[key].description;
        var publishedAt = newsArr[key].publishedAt;
        var url = newsArr[key].url;
        var urlToImage = newsArr[key].urlToImage;
        var createNews = document.getElementById('parse_news');

        var newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        createNews.appendChild(newsItem);

        var newsTitle = document.createElement('h3');
        newsTitle.className = 'news-title';
        newsItem.appendChild(newsTitle);

        var aTitle = document.createElement('a');
        aTitle.href = url;
        aTitle.textContent = title;
        newsTitle.appendChild(aTitle);

        var div = document.createElement('div');
        newsItem.appendChild(div);

        var newsRubric = document.createElement('span');
        newsRubric.className = 'news-rubric';
        newsRubric.textContent = author;
        div.appendChild(newsRubric);

        var newsData = document.createElement('span');
        newsData.className = 'news-data';
        newsData.textContent = publishedAt;
        div.appendChild(newsData);

        var clearfix = document.createElement('div');
        clearfix.className = 'clearfix';
        newsItem.appendChild(clearfix);

        var aContent = document.createElement('a');
        aContent.className = 'col-xs-12 col-sm-5 col-md-4 news-img';
        aContent.href = url;
        clearfix.appendChild(aContent);

        var imgContent = document.createElement('img');
        imgContent.src = urlToImage;
        imgContent.alt = title;
        imgContent.style.width = '100%';
        aContent.appendChild(imgContent);

        var newsText = document.createElement('div');
        newsText.className = 'col-xs-12 col-sm-7 col-md-4 news-text';
        newsText.textContent = description;
        clearfix.appendChild(newsText);
              }
            }

         
    $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
        function(e) {
            var newsArr = e.articles;
            acceptance(newsArr);
            }
          );

		window.addEventListener("DOMContentLoaded", function (){
			
		var harm = document.getElementsByClassName ('harmonic')
			for (var i = 0; i < harm.length; i++){
			harm[i].addEventListener ("click", function (element) {
			document.querySelector('harmonic')
			
		var list = element.target.querySelector("ul")	
			if (list.style.display ==="block") { 
				list.style.display = "none";
				} 
			else {
				list.style.display = "block";
				}		
					
			})
		}
	})