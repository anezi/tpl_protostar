/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-new-tab' : '&#xe000;',
			'icon-star' : '&#xe002;',
			'icon-box-remove' : '&#xe005;',
			'icon-box-add' : '&#xe006;',
			'icon-briefcase' : '&#xe001;',
			'icon-users' : '&#xe003;',
			'icon-mobile' : '&#xe004;',
			'icon-tablet' : '&#xe007;',
			'icon-screen' : '&#xe008;',
			'icon-podcast' : '&#xe009;',
			'icon-basket' : '&#xe00a;',
			'icon-cart' : '&#xe00b;',
			'icon-disk' : '&#xe00c;',
			'icon-copy' : '&#xe00d;',
			'icon-file-remove' : '&#xe00e;',
			'icon-file' : '&#xe00f;',
			'icon-camera' : '&#xe010;',
			'icon-palette' : '&#xf1b9;',
			'icon-droplet' : '&#xe011;',
			'icon-print' : '&#xe012;',
			'icon-arrow-left' : '&#xe013;',
			'icon-arrow-up-left' : '&#xe014;',
			'icon-arrow-up' : '&#xe015;',
			'icon-arrow-up-right' : '&#xe016;',
			'icon-arrow-right' : '&#xe017;',
			'icon-arrow-down-right' : '&#xe018;',
			'icon-arrow-down' : '&#xe019;',
			'icon-arrow-down-left' : '&#xe01a;',
			'icon-play' : '&#xe01b;',
			'icon-chevron-left' : '&#xf053;',
			'icon-chevron-right' : '&#xf054;',
			'icon-chevron-up' : '&#xf077;',
			'icon-chevron-down' : '&#xf078;',
			'icon-shuffle' : '&#xe01c;',
			'icon-loop' : '&#xe01d;',
			'icon-last' : '&#xe01e;',
			'icon-first' : '&#xe01f;',
			'icon-arrow-left-2' : '&#xe020;',
			'icon-previous' : '&#xe021;',
			'icon-arrow-right-2' : '&#xe022;',
			'icon-next' : '&#xe023;',
			'icon-move' : '&#xe024;',
			'icon-lightning' : '&#xe025;',
			'icon-equalizer' : '&#xe026;',
			'icon-pie' : '&#xe027;',
			'icon-bars' : '&#xe028;',
			'icon-stats' : '&#xe029;',
			'icon-bars-2' : '&#xe02a;',
			'icon-bulb' : '&#xe02b;',
			'icon-pushpin' : '&#xe02c;',
			'icon-flag' : '&#xe02d;',
			'icon-feed' : '&#xe02e;',
			'icon-address-book' : '&#xe02f;',
			'icon-compass' : '&#xe030;',
			'icon-clock' : '&#xe031;',
			'icon-vcard' : '&#xe032;',
			'icon-blog' : '&#xe033;',
			'icon-wand' : '&#xe034;',
			'icon-aid' : '&#xe035;',
			'icon-contract' : '&#xe036;',
			'icon-contract-2' : '&#xe037;',
			'icon-expand' : '&#xe038;',
			'icon-expand-2' : '&#xe039;',
			'icon-zoom-out' : '&#xf010;',
			'icon-zoom-in' : '&#xf00e;',
			'icon-target' : '&#xe03a;',
			'icon-database' : '&#xe03b;',
			'icon-quote-left' : '&#xf10d;',
			'icon-quote-right' : '&#xf10e;',
			'icon-key' : '&#xe03c;',
			'icon-ban-circle' : '&#xf05e;',
			'icon-thumbs-up' : '&#xe03e;',
			'icon-thumbs-up-2' : '&#xe03f;',
			'icon-list' : '&#xe040;',
			'icon-th' : '&#xf00a;',
			'icon-music' : '&#xe041;',
			'icon-play-2' : '&#xe042;',
			'icon-camera-2' : '&#xe043;',
			'icon-filter' : '&#xe044;',
			'icon-search' : '&#xe045;',
			'icon-envelop' : '&#xe047;',
			'icon-envelope' : '&#xf003;',
			'icon-eye-close' : '&#xf070;',
			'icon-support' : '&#xe048;',
			'icon-question-sign' : '&#xf059;',
			'icon-calendar' : '&#xe049;',
			'icon-calendar-2' : '&#xe04a;',
			'icon-star-2' : '&#xe04b;',
			'icon-asterisk' : '&#xf069;',
			'icon-checkbox-partial' : '&#xe04c;',
			'icon-checkbox-unchecked' : '&#xe04d;',
			'icon-checkbox-checked' : '&#xe04e;',
			'icon-arrow-down-right-2' : '&#xe04f;',
			'icon-arrow-down-2' : '&#xe050;',
			'icon-arrow-down-left-2' : '&#xe051;',
			'icon-minus-sign' : '&#xf056;',
			'icon-minus' : '&#xf068;',
			'icon-plus' : '&#xf067;',
			'icon-plus-sign' : '&#xf055;',
			'icon-trash' : '&#xf014;',
			'icon-remove' : '&#xf00d;',
			'icon-remove-sign' : '&#xf057;',
			'icon-inbox' : '&#xf01c;',
			'icon-firewall' : '&#xf021;',
			'icon-shield' : '&#xf132;',
			'icon-home' : '&#xf015;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};