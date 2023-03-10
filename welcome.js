document.addEventListener('DOMContentLoaded', () => {
	//Wrapper animation
	anime.timeline({
		 targets: ".welcome",
		 easing: "easeOutExpo",
	})
	 .add({
	 width: ["0vw", "100vw"],
	 opacity: 1,
	 duration: 0,
	})
	 .add({
	 delay: 5000,
	 translateX: "100vw",
	 duration: 1500,
	 complete: function(anime) {
		 document.querySelector('.welcome').remove();
	 }
	})

	//Text animation
	anime({
		targets: ".heading",
		delay: 400,
		opacity: 1,
		duration: 1800,
		translateY: ["-30px", "0px"],
		easing: "easeOutExpo",
	});

	//Text-sm animation
	anime({
		targets: ".sub-heading",
		delay: 600,
		opacity: 1,
		duration: 1800,
		translateY: ["-30px", "0px"],
		easing: "easeOutExpo",
	});

	//Loader animation
	anime({
		targets: ".loader",
		delay: 2000,
		duration: 5000,
		width: ["0", "100%"],
		easing: "easeOutExpo",
	});

	//Loader-wrapper animation
	anime({
		targets: ".loader-wrapper",
		delay: 1500,
		duration: 1800,
		opacity: 1,
		easing: "easeOutExpo",
	});
})

//Paragraphs
	// anime({
	// targets: 'p',
  	// opacity: 1,
  	// duration: 1800,
  	// translateY: ["-30px", "0px"],
  	// easing: "easeOutExpo",
	// 	delay: (el, i) => 5200 + 100 * i,
	// })
