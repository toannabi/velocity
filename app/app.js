$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$(".menuhead").addClass("action");
		} else {
			$(".menuhead").removeClass("action");
		}

	})
})
