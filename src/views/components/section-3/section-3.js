import './section-3.scss'
import './_imports/import'
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

$(document).ready(() => {
	const slider = $('.section-3__slider.owl-carousel').owlCarousel({
		dots: false,
		margin: 30,
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		loop: true
	})

	$('.section-3__btn-more').click(() => {
		slider.trigger('next.owl.carousel')
	})

	$('.section-3__mobile-slider.owl-carousel').owlCarousel({
		dots: false,
		margin: 10,
		items: 1,
		autoWidth: true,
		loop: true
	})
})
