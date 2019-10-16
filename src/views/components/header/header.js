import './header.scss'
import './_imports/import'
import $ from 'jquery'

$(document).ready(() => {
	$('.header__logo').click(function() {
		$('html, body').animate(
			{ scrollTop: $(`${this.dataset.target}`).offset().top - 20 },
			400
		)
	})
})
