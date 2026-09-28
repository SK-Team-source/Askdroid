This folder is intentionally empty.

The project currently references photographic assets directly from the
original askdroid.com WordPress media library (via next/image remotePatterns
configured in next.config.js) because those were the only images with stable,
fetchable URLs on the live site — most directory-listing thumbnails are
loaded client-side by the original site and have no stable URL to copy.

To fully self-host images:
1. Download the images referenced in lib/data/*.js and the page files
   (search each file for "https://askdroid.com/wp-content/uploads/...").
2. Save them into this folder, e.g. public/images/hero.jpg.
3. Replace the remote URL strings with local paths, e.g. "/images/hero.jpg".
4. Once nothing references askdroid.com, you can remove the remotePatterns
   entry in next.config.js.
