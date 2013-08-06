/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-firewall' : '&#xf021;',
			'icon-eye' : '&#xe000;',
			'icon-home' : '&#xe001;',
			'icon-envelope' : '&#xe002;',
			'icon-user' : '&#xe003;',
			'icon-password2' : '&#xf03f;',
			'icon-key' : '&#xe004;',
			'icon-locked' : '&#xe005;',
			'icon-user-2' : '&#xe006;',
			'icon-createfile' : '&#xf0c6;',
			'icon-folder-open' : '&#xe007;',
			'icon-calendar' : '&#xe008;',
			'icon-security2' : '&#xf02e;'
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