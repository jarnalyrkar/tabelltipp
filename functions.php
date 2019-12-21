<?php

$base_dir = get_stylesheet_directory();
// Enqueue dist/css and dist/js
//   do not change this without also changing gulpfile.js and webpack.config.js to match
require_once($base_dir . '/inc/functions/enqueue_scripts.php');
// Remove emojis
require_once($base_dir . '/inc/functions/disable_emojis.php');
// Remove jquery by default
require_once($base_dir . '/inc/functions/deregister_jquery.php');
// Add markup to allow for responsive oembeds
require_once($base_dir . '/inc/functions/add_responsive_embed.php');
// Add BEM-style classes to menus
require_once($base_dir . '/inc/functions/add_bem_menu_classes.php');

/* Add default main menu */
function create_main_menu() {
  register_nav_menu('headerMenuLocation', 'Header Menu Location');
} add_action('init', 'create_main_menu');

/* Custom Gutenberg blocks */
require_once trailingslashit(get_stylesheet_directory()) . 'inc/acf-blocks.php';

// Hide wp-admin bar for non-admins:
function hide_admin_bar_if($show) {
  if (!current_user_can('administrator')) {
    $show = false;
  }
  return $show;
} add_filter('show_admin_bar', 'hide_admin_bar_if');

// Handle redirects after login
function user_login_redirect($redirect_to, $request, $user) {
  if (!is_wp_error($user)) {
    if (is_array($user->roles) && in_array('administrator', $user->roles)) {
      return admin_url();
    } else {
      return site_url();
    }
  }
} add_filter('login_redirect', 'user_login_redirect', 10, 3);

// Redirect if user tries to access WP-admin
function restrict_admin_with_redirect() {
  if (!current_user_can('manage_options') && (!wp_doing_ajax())) {
    wp_safe_redirect(site_url()); // Replace this with the URL to redirect to.
    exit;
  }
} add_action( 'admin_init', 'restrict_admin_with_redirect', 1 );

// Change logo on login-screen:
function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
          background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.jpg);
          height: 250px;
          width: 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        	padding-bottom: 30px;
        }
        #login {
          padding-top: 4% !important;
        }
        .login {
          background-color: #fff;
        }

        #loginform .button {
          background-color: #123;
          color: #fff;
        }

        #login #nav, #login #backtoblog {
          display: none;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );