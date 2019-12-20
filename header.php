<?php
$context = array();
$context['nav'] = wp_nav_menu(array(
  'menu' => 'headerMenuLocation',
  'echo' => false,
  'container' => '',
  'menu_class' => 'main-nav'
  )
);
$context['post'] = new Timber\Post();
$context['logout_link'] = site_url() . '/wp-login.php?action=logout';
$context['logo'] = get_stylesheet_directory_uri() . '/assets/img/logo.jpg';

$now = new DateTime();
$now->setTimezone(new DateTimeZone('Europe/Oslo'));
$future = new DateTime($context['post']->sesongstart, new DateTimeZone('Europe/Oslo'));
$interval = $future->diff($now);

$context['time_left'] = $interval->format('<span id="days">%a</span> dager, <span id="hours">%h</span> timer, <span id="minutes">%i</span> minutter og <span id="seconds">%s</span> sekunder');
$context['future'] = $future->format('D M d Y H:i:s O');


Timber::render('header.twig', $context);
