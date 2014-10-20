# UCSF Computational Biology Core (CBC) website

## For beginners
To edit the content of the [CBC website], go to the [content/] source directory and edit the corresponding Markdown index.md file in the browser.  You can even preview it in the browser.  Note that you can only edit the text/content, not the layout on the page.  When you save (=commit) and edit, I'll get a notification, which will allow me to rebuild the site so the updates goes live.

## 

Check out repository:
```
git clone git@bitbucket.org:USCF-CBC/website.git
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

Finally, to upload your committed changes to BitBucket, do:
```
git push
```

Remember to always do `git pull` before start editing.

[CBC website]: http://cbc.ucsf.edu/
[content/]: https://bitbucket.org/USCF-CBC/website/src/HEAD/content/?at=master