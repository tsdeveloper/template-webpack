<!DOCTYPE html>
<?php
define('BASE', 'http://dashboard.portfolio.test');
?>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Dashboard Portfolio</title>

    <link rel="shortcut icon" href="<?=BASE;?>/img/html5-logo.ico" />
    <!-- start:css -->

    <!-- end:css -->
    <!-- start:bundle-time -->
    <!-- end:bundle-time -->

    <!--[if lt IE 9]>
    <script src="./bower_components/html5shiv/dist/html5shiv.min.js"></script>
    <script src="./bower_components/modernizr/modernizr.custom.js"></script>
    <![endif]-->

</head>

<body>

    <section id="sideMenu">
        <nav>
            <a href="" class="active"><i class="fa fa-home" aria-hidden="true"></i>item1</a>
            <a href=""><i class="fa fa-sticky-note-o" aria-hidden="true"></i>item2</a>
            <a href=""><i class="fa fa-bookmark-o" aria-hidden="true"></i>item3</a>
            <a href=""><i class="fa fa-calendar-check-o" aria-hidden="true"></i>item4</a>
            <a href=""><i class="fa fa-user-circle-o" aria-hidden="true"></i>item5</a>
            <a href=""><i class="fa fa-cog" aria-hidden="true"></i>item6</a>
        </nav>
    </section>

    <header>
        <div class="search-area">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" name="" value="">
        </div>
        <div class="user-area">
            <a href="#" class="add">+ Add</a>
            <a href="#" class="notification">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <span class="circle">3</span>
            </a>
            <a href="#">
                <div class="user-img">
                </div>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
        </div>
    </header>

    <section id="content-area">
        <div class="heading">
            <h1>Dashboard</h1>
            <p>Welcome to GoJobs</p>
        </div>

        <div class="cards">
            <div class="card col-md-4-12">
                <div class="user-img"></div>
                <span class="user-name">Jhon Levis</span>
                <span class="user-title">Full-Stack Developer</span>
            </div>
            <hr>
            <div class="col-md-4-12">
                <span class="education">Education</span>
            </div>
            <div class="col-md-4-12">
                <span class="schools">Grover Cleveland HS</span>
                <span class="schools">New York University</span>
            </div>

            <div class="card col-md-4-12">
                <h6>Interview Schedule</h6>
                <span class="date">Jan 25, 2019</span>

                <div class="col-md-2">
                    <span class="job-type">IT</span>
                </div>
                <div class="col-md-10">
                    <span class="schools">Best Buy HQ</span>
                    <span class="schools">Senior Developer</span>
                    <span class="time">09:30 am</span>
                </div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>COMPANY</th>
                    <th>JOBS</th>
                    <th>END OF APPLICATION</th>
                    <th>LOCATION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Online Shopping</td>
                    <td>Angular Developer</td>
                    <td>July 28, 2018</td>
                    <td>New York, NY</td>

                </tr>
                <tr>
                    <td>Green, Carter and Yost</td>
                    <td>Game Developer<td>
                    <td>June 01, 2018 </td>
                    <td>Kansas</td>

                </tr>

                <tr>
                    <td>Kovacek, Robel and Ebert</td>
                    <td>JS Developer <td>
                    <td>July 28, 2018</td>
                    <td>Georgia, Argentina</td>

                </tr>

                <tr>
                    <td>Braun, McDermott and Padberg</td>
                    <td>Java Developer<td>
                    <td>July 28, 2018</td>
                    <td>Tommieview, South</td>

                </tr>
            </tbody>
        </table>
    </section>
</body>

</html>