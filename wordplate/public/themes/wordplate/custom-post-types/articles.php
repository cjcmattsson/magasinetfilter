<?php

declare(strict_types=1);

// Declaring custom post type
add_action('init', function () {
    register_post_type('articles', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Article'),
            'edit_item' => __('Edit Article'),
            'name' => __('Articles'),
            'search_items' => __('Search Articles'),
            'singular_name' => __('Article'),
        ],
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 20,
        'public' => true,
    ]);
    remove_post_type_support( 'articles', 'editor' );
});

// ACF-fields for specific post type
$fields = [
    acf_text(['name' => 'title', 'label' => 'Title', 'instructions' => 'Enter article headline.',]),
    acf_image([
        'name' => 'image',
        'label' => 'Header image',
        'instructions' => 'Add hero image here.',
 ]),
    acf_number([
        'name' => 'number',
        'label' => 'Magazine number',
        'instructions' => 'Add what magazine number article was printed in.',
    ]),
    acf_checkbox([
        'name' => 'author',
        'label' => 'Author',
        'instructions' => 'Select author/authors.',
        'choices' => [
            'Mattias Göransson' => 'Mattias Göransson',
            'Christopher Friman' => 'Christopher Friman',
            'Erik Eje Almqvist' => 'Erik Eje Almqvist',
            'Madelene Pollnow' => 'Madelene Pollnow',
            'Elin Klemetz' => 'Elin Klemetz',
            'Oskar Sonn Lindell' => 'Oskar Sonn Lindell',
            'Christian Daun' => 'Christian Daun',
        ],
        'multiple' => false,
    ]),
    acf_checkbox([
        'name' => 'photographer',
        'label' => 'Photographer',
        'instructions' => 'Select photographer/photographers.',
        'choices' => [
            'Magnus Bergström' => 'Magnus Bergström',
            'Jenny Ingemarsson' => 'Jenny Ingemarsson',
            'Nicke Johansson' => 'Nicke Johansson',
            'Sara Mac Key' => 'Sara Mac Key',
            'Erik Nilsson' => 'Erik Nilsson',
            'Åsa Sjöström' => 'Åsa Sjöström',
        ],
        'multiple' => false,
    ]),
    acf_checkbox([
        'name' => 'category',
        'label' => 'Article category',
        'instructions' => 'Select category/categories.',
        'choices' => [
            'Musik' => 'Musik',
            'Litteratur' => 'Litteratur',
            'Politik' => 'Politik',
            'Historia' => 'Historia',
            'Sport' => 'Sport',
            'Mat' => 'Mat',
            'Miljö' => 'Miljö',
            'Livsöde' => 'Livsöde',
            'Film' => 'Film',
        ],
        'multiple' => false,
    ]),
    acf_text([
        'name' => 'ingress',
        'label' => 'Ingress',
        'instructions' => 'Enter ingress (short short summary of article).'
    ]),
    acf_textarea(['name' => 'text', 'label' => 'Text']),
];

$location = [
    [
        acf_location('post_type', 'articles')
    ],
];

acf_field_group([
    'title' => 'About',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
]);
