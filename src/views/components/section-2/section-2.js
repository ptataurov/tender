import './section-2.scss'
import './_imports/import'
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

$(document).ready(() => {
	$(window).on('load', () => {
		const slider = $('.section-2__slider-items.owl-carousel').owlCarousel({
			autoWidth: true,
			dots: false
		})
		$('.section-2__slider-btn-next').click(() => {
			slider.trigger('next.owl.carousel')
		})
	})
})
