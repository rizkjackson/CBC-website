# README

## Sources

```
css/
  banner.css [1]

ico/
  favicon.ico
images/
  ucsf-logo-banner.png [1]
  ucsf-logo-banner-mobile.png [1]
  UCSF-CBC-logo,003366,transparent,1200dpi.png
```

## How the UCSF CBC logo was created
The UCSF CBC logo was created from
[`ucsf_logo_K_OTL_9,1200dpi,003366,transparent.png`](https://github.com/UCSF-CBC/UCSF-logo/)
using [paint.net](http://www.getpaint.net/index.html).  The `cbc` part
was added as plain text using font Courier at 448 pt.  This was done
by Henrik Bengtsson on 2015-09-14.


## How the favicon was created
The favicon was created from the UCSF CBC logo as:
```sh
convert images/UCSF-CBC-logo,003366,transparent,1200dpi.png -geometry 128x128 -define icon:auto-resize=64,48,32,16 ico/favicon.ico
```
using [ImageMagick](http://www.imagemagick.org/).



## REFERENCES:
* [1] https://github.com/ucsf-web-services/ucsf_identity_web_banner_templates
