---
layout: home
lang: fr
title: Home
permalink: /index
slides:
  - text: Nous sommes un cabinet de recrutement spécialisé dans la recherche d'ingénieurs et d'autres professionnels de l'informatique
    image: /media/abrs/images/slider1.jpg
  - text: Obtenez des candidats de qualité, résultats guarantis
    image: /media/abrs/images/slider2.jpg
  - text: Le meilleur cabinet de RECRUTEMENT INFORMATIQUE en France
    image: /media/abrs/images/slider3.jpg
---

<div class="container">
<!-- Featured
================================================== -->
<section class="featured-posts">
    <div class="section-title">
        <h2><span>frFeatured</span></h2>
    </div>
    <div class="row">
        
    {% for post in site.posts %}

        {% if post.featured == true %}

            {% include featuredbox.html %}

        {% endif %}

    {% endfor %}
        
    </div>
</section>
</div>



