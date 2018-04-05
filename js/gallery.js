let images = document.querySelectorAll('li img');
let title = document.querySelector('figcaption');

/* The for...of statement creates a loop iterating over iterable objects. An event listener listens for the click on each image and runs the changeImage function on the click.*/
for (let image of images) {
	image.addEventListener('click', changeImage)
};

/* targets the src attribute for each images and updates the figcaption in the DOM to display the image title */
function makeName(e) {
		if (e.target.src.includes('red')) {
			var name = 'Mohnblumen';
			title.textContent = name;
		}
		if (e.target.src.includes('yellow')) {
			var name = 'Sonnenblumen';
			title.textContent = name;
		}
		if (e.target.src.includes('white')) {
			var name = 'Narzissen im Park Sentmaring';
			title.textContent = name;
		}
		if (e.target.src.includes('pink')) {
			var name = 'Blumen am Markt in Münster';
			title.textContent = name;
		}
		if (e.target.src.includes('purple')) {
			var name = 'Blumen im Park Sentmaring';
			title.textContent = name;
		};
	};

/* function to change the src attributes of the small images to the src attributes for the large images. */
function changeImage(e) {
	makeName(e);
	let img = document.querySelector('.main_img');
	/* changes the string for the file path that the src attribute is equal to. */
	var lrgImg = e.target.src.replace('small', 'large');
	/* changes the actual src attribute to the new string */
	img.src = lrgImg;
};


















