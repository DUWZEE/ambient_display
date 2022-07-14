<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        include_once dirname(__FILE__) . '/PHPNodeJS.php';

        $debug = true;
        $PHPNodeJS = new PHPNodeJS($debug);
        
        // example 1 (run simple script without function)
        $PHPNodeJS->run('
            var var1 = 10;
            var var2 = 20;
            console.log(var1+var2);');
        
    ?>
</body>
</html>