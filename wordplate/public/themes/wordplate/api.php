<?php

declare(strict_types=1);

// An endpoint
add_action( 'rest_api_init', function () {
  register_rest_route( 'myplugin/v2', '/article/(?P<id>\d+)', array(
    'methods' => 'GET',
    'post_type' => 'articles',
    'callback' => 'get_specific_article',
  ) );
} );

function get_specific_article ($data) {
    $article = get_post($data['id']);

    if ($article === null) {
        return "SORRY, ID't finns inte!";
    };

    $article->fields = get_fields($article->ID);

	return $article;
};

// All articles endpoint
add_action( 'rest_api_init', function () {
  register_rest_route( 'myplugin/v2', '/articles', array(
    'methods' => 'GET',
    'callback' => 'get_all_articles',
  ) );
} );

function get_all_articles ($data) {
    $articles = get_posts([
        'post_type' => 'articles',
        'posts_per_page'   => '-1',
    ]);

    foreach ($articles as $article) {
        $article->fields = get_fields($article->ID);
    };

  return $articles;

};
