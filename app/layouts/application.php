<!doctype html>
<html class="no-js">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <?php require '_html-head.php' ?>
    </head>

    <body class="o-page o-page--<?php echo $page->slug ?>">
        <?php // require '_accessibility-links.php' ?>
        <?php // require '_header.php' ?>

        <main class="c-main">
            <?php $page->yield() ?>
        </main>

        <?php // require '_footer.php' ?>

        <?php application_script(); ?>
        <?php page_script(); ?>
    </body>
</html>
