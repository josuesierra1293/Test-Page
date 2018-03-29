
// function passDatas(id){
// 	 var titleNotice = document.getElementById(id);
// 	 var titleArticle = docuemnt.getElementById('titleArticle');
// 	 titleArticle.innerHTML = titleNotice.innerHTML;
// 	window.alert(titleNotice.innerHTML);
// }


function assignValues(){
	document.getElementById("titleArticle").innerHTML = getUrlVars()['title'];
	var index =  (getUrlVars()['id']);
	document.getElementById('notice').innerHTML = switchCount(parseInt(index));
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function switchCount(count){
	switch  (count) {
		case 1 :
		return descriptionLayer1;
		brake;
		default: brake;
	}
}

var descriptionLayer1 =  ' pepe Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
