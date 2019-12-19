<?php
$context = array();
$context['nav'] = wp_nav_menu(array(
  'menu' => 'headerMenuLocation',
  'echo' => false,
  'container' => '',
  'menu_class' => 'main-nav'
  )
);

$context['logout_link'] = site_url() . '/wp-login.php?action=logout';
$context['logo'] = get_stylesheet_directory_uri() . '/assets/img/logo.jpg';
Timber::render('header.twig', $context);
