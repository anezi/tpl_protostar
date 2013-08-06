<link rel="stylesheet" href="font/icomoon/style.css" type="text/css" />

<?php

$icons = 'new-tab, .icon-star, .icon-box-remove, .icon-box-add, .icon-briefcase, .icon-users, .icon-mobile, .icon-tablet, .icon-screen, .icon-podcast, .icon-basket, .icon-cart, .icon-disk, .icon-copy, .icon-file-remove, .icon-file, .icon-camera, .icon-palette, .icon-droplet, .icon-print, .icon-arrow-left, .icon-arrow-up-left, .icon-arrow-up, .icon-arrow-up-right, .icon-arrow-right, .icon-arrow-down-right, .icon-arrow-down, .icon-arrow-down-left, .icon-play, .icon-chevron-left, .icon-chevron-right, .icon-chevron-up, .icon-chevron-down, .icon-shuffle, .icon-loop, .icon-last, .icon-first, .icon-arrow-left-2, .icon-previous, .icon-arrow-right-2, .icon-next, .icon-move, .icon-lightning, .icon-equalizer, .icon-pie, .icon-bars, .icon-stats, .icon-bars-2, .icon-bulb, .icon-pushpin, .icon-flag, .icon-feed, .icon-address-book, .icon-compass, .icon-clock, .icon-vcard, .icon-blog, .icon-wand, .icon-aid, .icon-contract, .icon-contract-2, .icon-expand, .icon-expand-2, .icon-zoom-out, .icon-zoom-in, .icon-target, .icon-database, .icon-quote-left, .icon-quote-right, .icon-key, .icon-ban-circle, .icon-thumbs-up, .icon-thumbs-up-2, .icon-list, .icon-th, .icon-music, .icon-play-2, .icon-camera-2, .icon-filter, .icon-search, .icon-envelop, .icon-envelope, .icon-eye-close, .icon-support, .icon-question-sign, .icon-calendar, .icon-calendar-2, .icon-star-2, .icon-asterisk, .icon-checkbox-partial, .icon-checkbox-unchecked, .icon-checkbox-checked, .icon-arrow-down-right-2, .icon-arrow-down-2, .icon-arrow-down-left-2, .icon-minus-sign, .icon-minus, .icon-plus, .icon-plus-sign, .icon-trash, .icon-remove, .icon-remove-sign, .icon-inbox, .icon-firewall, .icon-shield';

$tab = explode(', .icon-', $icons);

foreach ($tab as $icon) {
	echo '<span class="icon-' . $icon . '"></span> : ' $icon . '<br />';
}


