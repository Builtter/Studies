<div class="titulo">Tipo Boolean</div>


<?php

echo TRUE;
echo '<br>';
echo FALSE;

echo '<br>' . var_dump(true);
echo '<br>' . var_dump(False);
echo '<br>' . var_dump('false');
echo '<br>' . var_dump(false);
echo '<br>' . is_bool('true');

// Fazer as regras de conversões
echo '<p>Regras:</p>';

echo '<br>1 ' . var_dump((bool) 0); // apenas zero é false
echo '<br>2 ' . var_dump((bool) 20); // qualquer outro valor é true
echo '<br>3 ' . var_dump((bool) -1);
echo '<br>4 ' . var_dump((bool) 0.0);
echo '<br>5 ' . var_dump((bool) 0.00001);
echo '<br>6 ' . var_dump((bool) 0.000000000000000001);
echo '<br>7 ' . var_dump((bool) '');
echo '<br>8 ' . var_dump((bool) '0');
echo '<br>9 ' . var_dump((bool) ' ');
echo '<br>10 ' . var_dump((bool) 'texto');
echo '<br>11 ' . var_dump((bool) []);
echo '<br>12 ' . var_dump((bool) [0]);
echo '<br>13 ' . var_dump((bool) [1]);
echo '<br>14 ' . var_dump((bool) (object) []);
echo '<br>15 ' . var_dump((bool) (object) [0]);
echo '<br>16 ' . var_dump((bool) !!"false");