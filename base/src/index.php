<!DOCTYPE html>
<?php
define('BASE', 'http://modern.web.test:8001');
?>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Modern Web</title>

    <link rel="shortcut icon" href="<?= BASE; ?>/img/html5-logo.ico" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

    <!-- start:css -->
    <link rel="stylesheet" href="styles.css" />
    <!-- end:css -->
    <!-- start:bundle-time -->
    <!-- end:bundle-time -->

    <!--[if lt IE 9]>
    <script src="./bower_components/html5shiv/dist/html5shiv.min.js"></script>
    <script src="./bower_components/modernizr/modernizr.custom.js"></script>
    <![endif]-->

</head>

<body>

    <nav class="menu-bar">
        <i class="fas fa-bars fa-2x"></i>
    </nav>

    <!-- Page 1 -->
    <section id="page-1" class="page">


        <h1>Welcome To my Presentation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora, dignissimos eius dolores impedit
            voluptas fugiat voluptatem ducimus. Eius obcaecati necessitatibus facere! Quisquam explicabo vero quis?
            Minima voluptate aut nam!</p>

        <div>
            <a href="#page-2" class="btn">Next Page
                <i class="fas fa-arrow-circle-down"></i>
            </a>
        </div>
    </section>


    <!-- Page 2 -->
    <section id="page-2" class="page">
        <h1>Welcome To my Presentation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora, dignissimos eius dolores impedit
            voluptas fugiat voluptatem ducimus. Eius obcaecati necessitatibus facere! Quisquam explicabo vero quis?
            Minima voluptate aut nam!</p>

        <div>

            <a href="#page-1" class="btn btn-dark">Prev Page
                <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a href="#page-3" class="btn">Next Page
                <i class="fas fa-arrow-circle-down"></i>
            </a>
        </div>
    </section>

    <!-- Page 3 -->
    <section id="page-3" class="page">
        <h1>Welcome To my Presentation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora, dignissimos eius dolores impedit
            voluptas fugiat voluptatem ducimus. Eius obcaecati necessitatibus facere! Quisquam explicabo vero quis?
            Minima voluptate aut nam!</p>

        <div>
            <a href="#page-2" class="btn btn-dark">Prev Page
                <i class="fas fa-arrow-circle-up"></i>
            </a>
            <a href="#page-4" class="btn">Next Page
                <i class="fas fa-arrow-circle-down"></i>
            </a>
        </div>
    </section>

    <!-- Page 4 -->
    <section id="page-4" class="page">
        <h1>Welcome To my Presentation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora, dignissimos eius dolores impedit
            voluptas fugiat voluptatem ducimus. Eius obcaecati necessitatibus facere! Quisquam explicabo vero quis?
            Minima voluptate aut nam!</p>

        <div>
            <a href="#page-3" class="btn btn-dark">Prev Page
                <i class="fas fa-arrow-circle-up"></i>
            </a>

        </div>
    </section>

    <!-- start:js -->

    <!-- end:js -->


    <!-- <script src="<%= htmlWebpackPlugin.files.chunks.app.entry %>"></script> -->



</body>

</html>