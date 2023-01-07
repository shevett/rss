# rss
Embed content from an RSS feed into a webpage

This little bit of javascript embeds an RSS feed's contents into a webpage inside
a div block.  I've been using it for showing [my Mastodon](https://fosstodon.org/@roygreenhilt) feed on [my personal home page](https://daveshevett.com/, but it really
can be used anywhere.

# How to use:

Download or clone the repo

Copy the rss.js script to where your code is.

Add a block to your HTML like this:

```
<meta name="rssurl" content="https://fosstodon.org/users/roygreenhilt.rss" />;
<div class="rss" id="rss-feed" />
<script src="rss.js" />
```

That's it!  You can theme the style of the feed by creating CSS entries for the 'rss' and 
'rss-entry' classes.

```
.rss {
    background-color: #beige;
}

.rss-entry {
    background-color: #ffffff;
    padding: 15px;
    margin-bottom: 15px;
}
```

