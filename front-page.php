<?php
// Admin doesn't need to be able to deal with this shit
if (!current_user_can('administrator')) {
  $context = array();
  $context['post'] = new Timber\Post();

  if (isset($_POST['tabell'])) {
    save();
  }

  $context['coupon'] = false;

  if (get_field('kupong', wp_get_current_user()->ID)) {
    $context['has_coupon'] = true;
    $context['kupong'] = explode(', ', get_field('kupong', wp_get_current_user()->ID));
  }


  get_header();
  Timber::render('front-page.twig', $context);
  get_footer();
} else Timber::render('admin.twig');

function save() {
  $kupong = explode(',', $_POST['tabell']);

  // oppdater kupong-felt
  update_field('field_5dfd0d6bbc18f', implode(', ', $kupong), wp_get_current_user());

  // Status-melding til js
  echo "200";
  // avbryt resten av script
  exit();
}
