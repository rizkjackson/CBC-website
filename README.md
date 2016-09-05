# UCSF Computational Biology Core (CBC) website

This repository holds the source for the [CBC website].  It consists of
RSP-embedded [Markdown] files that are compiled into HTML files
using the [R.rsp] package in [R].

Current build status: <a href="https://travis-ci.org/UCSF-CBC/CBC-website"><img src="https://travis-ci.org/UCSF-CBC/CBC-website.svg?branch=master" alt="Build status"></a> 

-----
## Appendix
### How to

Once, check out the repository:
```
git clone git@github.com:UCSF-CBC/CBC-website.git
```

Before editing anything, make sure you have the most recent version of the files:
```
git pull
```

To build site on your local file system, do:
```
make build
```
The whole CBC website will be placed under `html/` in the current directory.

To commit any changes done:
```
git commit -a
```
and enter a brief message on what has been updated.  (To change the default editor, do `git config --global core.editor emacs`).

Finally, to upload your committed changes to GitHub, do:
```
git push
```


### For beginners
To edit the content of the [CBC website], go to the [content/] source directory and edit the corresponding Markdown index.md file in the browser.  You can even preview it in the browser.  Note that you can only edit the text/content, not the layout on the page.  When you save (=commit) and edit, I'll get a notification, which will allow me to rebuild the site so the updates goes live.

To open a file in the web browser from the terminal, use for instance:
```
open html/index.html
```

[CBC website]: http://cbc.ucsf.edu/
[content/]: https://github.com/UCSF-CBC/CBC-website/tree/master/content
[R]: http://www.r-project.org/
[R.rsp]: http://cran.r-project.org/package=R.rsp
[Markdown]: http://daringfireball.net/projects/markdown/syntax
