// default.app

console.log(111)

(function(p){

	console.log(121);

	var mrk= new showdown.Converter({
		"tables": true,
		"tasklists": true
	});
	var dd= mrk.makeHtml(p.body.innerText);
	p.body.innerHTML= dd;
	p.body.className= 'container grid-960';

	console.log(122)

}(document));



console.log(100)