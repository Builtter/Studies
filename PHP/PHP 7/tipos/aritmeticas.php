<div class="titulo">Operações Aritmeticas</div>

<?php
echo 1 + 1, '<br>';
var_dump(1 + 1);
echo '<br>';
echo 1 + 2.5, '<br>';
echo 10 - 2, '<br>';
echo 2 * 5, '<br>';
echo 7 / 4, '<br>';
echo intdiv(7, 4), '<br>';
echo round(7 / 4), '<br>';
echo 7 % 4, '<br>';
echo 7 % 2, '<br>';
echo 8 % 2, '<br>';
// echo 7 / 0, '<br>'; # erro!
// echo intdiv(7, 0); # erro!
echo 4 ** 2, '<br>'; #potencia

//precedência
//() => ** => / => * => +
echo "Precedência<br>";
echo 1 + 2 * 3, '<br>'; // 7
echo 1 + (2 * 3), '<br>'; // 7
echo (1 + 2) * 3, '<br>'; // 9
echo 2 + 3 * 4 ** 2, '<br>'; // 50
echo ((2 + 3) * 4) ** 2, '<br>'; // 400