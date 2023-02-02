<nav class="c-nav">
    <ul class="c-nav__list">
        <?php foreach ($nav_links as $nav_link) : ?>
        <li class="c-nav__item">
            <a
                class="<?php echo nav_link_classnames($nav_link) ?>"
                href="<?php echo $nav_link['path'] ?>"
            ><?php echo $nav_link['text'] ?></a>
        </li>
        <?php endforeach ?>
    </ul>
</nav>

