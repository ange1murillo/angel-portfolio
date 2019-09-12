// var mixer = mixitup('.projects');

// var mixer = mixitup(containerEl);

// var mixer = mixitup(containerEl, {
// 	selectors: {
// 		target: '.blog-item'
// 	},
// 	animation: {
// 		duration: 100
// 	}
// });

var mixer = mixitup('.projects', {
	selectors: {
		control: '[data-mixitup-control]',
	},
});

// var mixer = mixitup({
// 	...$,
// 	templates: {
// 		pager:
// 			'<button type="button" class="${classNames}" data-page="${pageNumber}" data-mixitup-control>${pageNumber}</button>',
// 		pagerPrev: '<button type="button" class="${classNames}" data-page="prev" data-mixitup-control>&laquo;</button>',
// 		pagerNext: '<button type="button" class="${classNames}" data-page="next" data-mixitup-control>&raquo;</button>',
// 	},
// });
