document.addEventListener('DOMContentLoaded', function () {
	"use strict";
	
	// setting the height of all the sections to be the same and take the max-height
	// plus responsive
	/*$(window).resize(function () {
		var maxHeight = 0; // initialize

		$('section').each(function () {
			// capture height for each section
			if ($(this).height() > maxHeight) {
			// make this height the max height .. until you get to the max height
				maxHeight = $(this).height();
			}
		});

		$('section').height(maxHeight);
		console.log($('section').height());
		console.log($('section').height(maxHeight));

	}).resize();*/

	// NAV HOVER BODY ANIMATION
	$(".side-nav nav ul li a").hover(function () {
		$(".fixedGrid").addClass("navHovered");
	}, function () {
		$(".fixedGrid").removeClass("navHovered");
	});

	// SECTION TRANSITIONS
	$('nav ul li a').on('click', function (e) {
		var linkID = $(this).attr('data-page'),
			//var sectionActive = $('section.active').attr('id');
			$sectionActive = $('section.active'),
			$sectionClicked = $('section#' + linkID),
			$sectionsNotClicked = $('section').not($sectionClicked),
			$spanActive = $('span.active'),
			$spanClicked = $('span#' + linkID),
			$spanNotClicked = $('span').not($spanClicked),
			tl = new TimelineLite({paused: true});
    
		if (!$('section#' + linkID).hasClass('active')) {
			tl.set($sectionsNotClicked, { opacity: 0})

				.fromTo($sectionActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: -100, opacity: 0 }, "A")

				.fromTo($sectionClicked, 0.65,
						{ xPercent: 100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($sectionClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($sectionActive, 0.65,
						{ xPercent: -100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$sectionActive.removeClass('active');
							$sectionClicked.addClass('active');
						}
						}, "B")
				.play();
		}
		
		if (!$('span#' + linkID).hasClass('active')) {
			tl.set($spanNotClicked,
				  { opacity: 0})
			
				.fromTo($spanActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: -100, opacity: 0 }, "A")

				.fromTo($spanClicked, 0.65,
						{ xPercent: 100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($spanClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($spanActive, 0.65,
						{ xPercent: -100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$spanActive.removeClass('active');
							$spanClicked.addClass('active');
						}
						}, "B")
				.play();
		}
      //// if we want to simply fade in/out ////
        // $sectionActive.fadeOut( 1000, function() {
        //   $(this).removeClass('active');

        //   $sectionClicked.fadeIn( 1000, function() {
        //     $(this).addClass('active');
        //   });
        // });
		
		setInterval(function () {
			$('section#' + linkID).load(location.href + " 'section#' + linkID>*", "");
			$('span#' + linkID).load(location.href + " 'section#' + linkID>*", "");
		}, 200000);
		console.log('refresh nav to section');
	});
	
	
	// GALLERY PORTFOLIO SORT FUNCTION
	$(function () {
		var selectedClass = "";
		$(".filter").click(function () {
			selectedClass = $(this).attr("data-rel");
			$("#gallery-thumbnails").fadeTo(100, 0.1);
			$("#gallery-thumbnails div")
				.not("." + selectedClass)
				.fadeOut()
				.removeClass("scaled");
			setTimeout(function () {
				$("." + selectedClass).fadeIn().addClass("scaled");
				$("#gallery-thumbnails").fadeTo(300, 1);
			}, 300);
		});
	});

	$(".control-btn").click(function () {
		$(".control-btn").removeClass("active");
		$(this).addClass("active");
	});

	
	// PORTFOLIO TO PROJECT FUNCTION	
	$('div.gallery-cell a').on('click', function (e) {
		e.preventDefault();
		var gallerySectionID = $(this).attr('data-page'),
			$projectActive = $('section.active'),
			$projectClicked = $('section#' + gallerySectionID),
			$projectNotClicked = $('section').not($projectClicked),
			$spanActive = $('span.active'),
			$spanClicked = $('span#' + gallerySectionID),
			$spanNotClicked = $('span').not($spanClicked),
			tl = new TimelineLite({paused: true});
    
		if (!$('section#' + gallerySectionID).hasClass('active')) {
			tl.set($projectNotClicked,
				   { opacity: 0})

				.fromTo($projectActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: -100, opacity: 0 }, "A")

				.fromTo($projectClicked, 0.65,
						{ xPercent: 100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($projectClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($projectActive, 0.65,
						{ xPercent: -100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$projectActive.removeClass('active');
							$projectClicked.addClass('active');
						}
						}, "B")
				.play();
		}
		
		if (!$('span#' + gallerySectionID).hasClass('active')) {
			tl.set($spanNotClicked,
				  { opacity: 0})
			
				.fromTo($spanActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: -100, opacity: 0 }, "A")

				.fromTo($spanClicked, 0.65,
						{ xPercent: 100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($spanClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($spanActive, 0.65,
						{ xPercent: -100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$spanActive.removeClass('active');
							$spanClicked.addClass('active');
						}
						}, "B")
				.play();
		}
		
		setInterval(function () {
			$('section#' + gallerySectionID).load(location.href + " 'section#' + gallerySectionID>*", "");
			$('span#' + gallerySectionID).load(location.href + " 'section#' + gallerySectionID>*", "");
		}, 200000);
		console.log('refresh gallery to project');
	});
	
	
	
	// PROJECT TO PORTFOLIO FUNCTION
	/*
	$('div.box.row3.column2').on('click', function (e) {
		e.preventDefault();
		var linkID = $(this).attr('data-page'),
			//var sectionActive = $('section.active').attr('id');
			$sectionActive = $('section.active'),
			$sectionClicked = $('section#portfolio'),
			$sectionsNotClicked = $('section').not($sectionClicked),
			$spanActive = $('span.active'),
			$spanClicked = $('span#portfolio'),
			$spanNotClicked = $('span').not($spanClicked),
			tl = new TimelineLite({paused: true});
    
		if (!$('section#' + linkID).hasClass('active')) {
			tl.set($sectionsNotClicked, { opacity: 0})

				.fromTo($sectionActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: 100, opacity: 0 }, "A")

				.fromTo($sectionClicked, 0.65,
						{ xPercent: -100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($sectionClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($sectionActive, 0.65,
						{ xPercent: 100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$sectionActive.removeClass('active');
							$sectionClicked.addClass('active');
						}
						}, "B")
				.play();
		}
		
		if (!$('span#' + linkID).hasClass('active')) {
			tl.set($spanNotClicked,
				  { opacity: 0})
			
				.fromTo($spanActive, 0.65,
						{ xPercent: 0, opacity: 1},
						{ xPercent: 100, opacity: 0 }, "A")

				.fromTo($spanClicked, 0.65,
						{ xPercent: -100, opacity: 0 },
						{ xPercent: 0, opacity: 1}, "A")

				.to($spanClicked, 0.65,
						{ xPercent: 0, opacity: 1}, "B")

				.to($spanActive, 0.65,
						{ xPercent: 100,
						 // "this" = tween , this.target  = tweened element, add class
						 onComplete: function () {
							$spanActive.removeClass('active');
							$spanClicked.addClass('active');
						}
						}, "B")
				.play();
		}
		
		$('section#' + linkID).resize(function () {
			var maxHeight = 0; // initialize

			$('section#' + linkID).each(function () {
				// capture height for each section
				if ($(this).height() > maxHeight) {
				// make this height the max height .. until you get to the max height
					maxHeight = $('section#' + linkID).height();
				}
			});

			$('section#' + linkID).height(maxHeight);
			console.log($('section#' + linkID).height());
			console.log($('section#' + linkID).height(maxHeight));

		}).resize();
		
		setInterval(function () {
			$('section#' + linkID).load(location.href + " 'section#' + linkID>*", "");
			$('span#' + linkID).load(location.href + " 'section#' + linkID>*", "");
		}, 1);
		console.log('refresh project to gallery');
	});
	*/
});