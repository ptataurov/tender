import './section-1.scss'
import './_imports/import'
import $ from 'jquery'

$(document).ready(() => {
	$('.section-1__btn').click(function() {
		$('html, body').animate(
			{ scrollTop: $(`${this.dataset.target}`).offset().top - 20 },
			400
		)
	})
})
