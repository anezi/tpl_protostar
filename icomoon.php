
<style>

@font-face {
	font-family: 'IcoMoon';
	src: url('../../../media/jui/fonts/IcoMoon.eot');
	src: url('../../../media/jui/fonts/IcoMoon.eot?#iefix') format('embedded-opentype'), url('../../../media/jui/fonts/IcoMoon.woff') format('woff'), url('../../../media/jui/fonts/IcoMoon.ttf') format('truetype'), url('../../../media/jui/fonts/IcoMoon.svg#IcoMoon') format('svg');
	font-weight: normal;
	font-style: normal;
}

[class^="icon-"]:before, [class*=" icon-"]:before {
font-family: 'IcoMoon';
font-style: normal;
speak: none;
}

<?php for( $i=0; $i<100; $i++) : ?>
.icon-<?php echo $i ?>:before {
content: "\<?php echo $i ?>";
}
<?php endfor; ?>

</style>

<?php

for( $i=0; $i<100; $i++) {

echo $i . ' : ' . '<span class="icon-' . $i . '"></span><br />';

}
