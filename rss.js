
    const RSS_URL = document.getElementsByName('rssurl')[0].content;
    
    // Code requires a meta block and a div block.....
    // <meta name="rssurl" content="https://fosstodon.org/users/roygreenhilt.rss" />;
    // <div id="rss-feed" />

    const feedContainer = document.getElementById('rss-feed');

    console.log("Fetching ---: " + RSS_URL);
    fetch(RSS_URL)
        .then(response => response.text())
        .then((str) => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(str, 'text/xml');
            const items = xml.querySelectorAll('item');
            const image = xml.querySelectorAll('image');

    // The image is the 'thumbnail' of the user...
    const imageUrl = image.item(0).querySelector('url').textContent;

    // Iterate over the items in the feed...
    items.forEach((item) => {
        const pubDate = item.querySelector('pubDate').textContent;
        const link = item.querySelector('link').textContent;
        const description = item.querySelector('description').textContent;
        url="";

        /* Parse out the media attachments and create an image string... */
        const medias = item.getElementsByTagNameNS("*","content");
        if (medias.length > 0) {
            for (let i=0; i<medias.length; i++) {
                url = `<img src="` + medias[i].getAttribute('url') + `" width=100 height=100>`;
            }
        }

        const itemHtml = `
   <div class="rss-entry">
   <a href="${link}">${pubDate}</a>
   <img src="${imageUrl}" width=50 height=50 align="right" valign="top">
   <p>${description}</p>
   ${url}
   </div>
        `;

        feedContainer.innerHTML += itemHtml;
      });
    });

