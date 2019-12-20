<?php
$context = array();
$context['post'] = new Timber\Post();

if (isset($_POST['tabell'])) {
  save();
}

$context['coupon'] = false;

if (get_field('kupong', findPost()->ID)) {
  $context['has_coupon'] = true;
  $context['kupong'] = explode(', ', get_field('kupong', findPost()->ID));
}

get_header();
Timber::render('front-page.twig', $context);
get_footer();

function save() {
  $kupong = explode(',', $_POST['tabell']);

  $thePost = findPost();
  // oppdater kupong-felt
  update_field('kupong', implode(', ', $kupong), $thePost->ID);

  // Status-melding til js
  echo "200";
  // avbryt resten av script
  exit();
}


function findPost() {
  // finn ut hvem som er logget inn
  $author = wp_get_current_user();
  // finn posten som tilhører brukeren
  $query = new WP_Query(array(
    'author' => $author->ID,
    'posts_per_page' => 1,
  ));

  // Hent post
  while ($query->have_posts()) { $query->the_post();
    $thePost = $query->post;
  }

  return $thePost;
}
