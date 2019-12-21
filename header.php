<?php
// Redirect anyone who is not logged in
if (!is_user_logged_in()) {
  wp_safe_redirect(wp_login_url());
}

if (!current_user_can('administrator')) {
  $context = array();
  $context['post'] = new Timber\Post();
  $context['logout_link'] = site_url() . '/wp-login.php?action=logout';
  $context['logo'] = get_stylesheet_directory_uri() . '/assets/img/logo.jpg';

  $now = new DateTime();
  $now->setTimezone(new DateTimeZone('Europe/Oslo'));
  $future = new DateTime($context['post']->sesongstart, new DateTimeZone('Europe/Oslo'));
  $interval = $future->diff($now);

  $allUsers = get_users('role=author&orderby=nicename');
  $printUs = array();

  foreach ($allUsers as $user) {
    if (get_field('kupong', $user->ID) != "") {
      array_push($printUs, ucfirst($user->user_nicename));
    }
  }

  // Brukere som har fyllt ut tabellen for første gang:
  $context['print_us'] = $printUs;
  $context['user_count'] = count($printUs);
  $context['time_left'] = $interval->format('<span id="days">%a</span> dager, <span id="hours">%h</span> timer, <span id="minutes">%i</span> minutter og <span id="seconds">%s</span> sekunder');
  $context['future'] = $future->format('D M d Y H:i:s O');


  Timber::render('header.twig', $context);
}