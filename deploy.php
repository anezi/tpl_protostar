<?php

echo shell_exec('git clean -f -d');
echo '<br/>' . PHP_EOL;
echo shell_exec('git pull');

