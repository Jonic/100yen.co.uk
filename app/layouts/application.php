<!doctype html>
<html class="no-js" lang="en">
    <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" media="print" onload="this.media='all'" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" media="print" onload="this.media='all'" />
        <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        </noscript>

        <?php require '_meta.php' ?>
    </head>

    <body class="o-page o-page--<?php echo $page->slug ?>">
        <?php // require '_accessibility_links.php' ?>
        <div class="l-page">
            <div class="l-page__header">
                <?php // require '_header.php' ?>
            </div>

            <div class="l-page__body">
                <main class="c-main">
                    <?php $page->yield() ?>
                </main>
            </div>

            <?php // require '_footer.php' ?>
        </div>

        <?php application_script(); ?>
        <?php page_script(); ?>
    </body>
</html>
