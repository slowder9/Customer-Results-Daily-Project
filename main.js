// console.log(customers.results[0].picture.large);
let template;
let superInfo = '';

for (let i = 0; i < customers.results.length; i++){


let template = `


<article>

<div class="info">

	<img src= "${customers.results[i].picture.large}">

<br>
	<span class="fullName">${customers.results[i].name.title}. ${customers.results[i].name.first} ${customers.results[i].name.last}</span>
<br>
	<span class="email">${customers.results[i].email}</span>
<br>
	<span class="restOfInfo">${customers.results[i].location.street}
<br>
	${customers.results[i].location.city}, ${customers.results[i].location.state} ${customers.results[i].location.postcode}
<br>
	${customers.results[i].cell}
	</span>

</div>
</article>

`;

superInfo += template;

}

document.querySelector(".container").innerHTML = superInfo;


