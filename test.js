const object = {
    "code": 200,
    "status": "Ok",
    "copyright": "© 2022 MARVEL",
    "attributionText": "Data provided by Marvel. © 2022 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2022 MARVEL</a>",
    "etag": "11359346bcb7c32599e54468661a41f108526dad",
    "data": {
    "offset": 0,
    "limit": 1,
    "total": 33,
    "count": 1,
    "results": [
    {
    "id": 22453,
    "digitalId": 0,
    "title": "Giant-Size Fantastic Four (1974) #6",
    "issueNumber": 6,
    "variantDescription": "",
    "description": null,
    "modified": "-0001-11-30T00:00:00-0500",
    "isbn": "",
    "upc": "",
    "diamondCode": "",
    "ean": "",
    "issn": "",
    "format": "Comic",
    "pageCount": 0,
    "textObjects": [],
    "resourceURI": "http://gateway.marvel.com/v1/public/comics/22453",
    "urls": [
    {
    "type": "detail",
    "url": "http://marvel.com/comics/issue/22453/giant-size_fantastic_four_1974_6?utm_campaign=apiRef&utm_source=5f33106c4d2367937150b6a657891b91"
    }
    ],
    "series": {
    "resourceURI": "http://gateway.marvel.com/v1/public/series/6070",
    "name": "Giant-Size Fantastic Four (1974 - 1975)"
    },
    "variants": [],
    "collections": [],
    "collectedIssues": [],
    "dates": [
    {
    "type": "onsaleDate",
    "date": "1975-08-10T00:00:00-0400"
    },
    {
    "type": "focDate",
    "date": "-0001-11-30T00:00:00-0500"
    }
    ],
    "prices": [
    {
    "type": "printPrice",
    "price": 0
    }
    ],
    "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5d28b09a0b83f",
    "extension": "jpg"
    },
    "images": [
    {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/5d28b09a0b83f",
    "extension": "jpg"
    }
    ],
    "creators": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/22453/creators",
    "items": [],
    "returned": 0
    },
    "characters": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/22453/characters",
    "items": [
    {
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
    "name": "Fantastic Four"
    }
    ],
    "returned": 1
    },
    "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/22453/stories",
    "items": [
    {
    "resourceURI": "http://gateway.marvel.com/v1/public/stories/50566",
    "name": "Cover #50566",
    "type": "cover"
    },
    {
    "resourceURI": "http://gateway.marvel.com/v1/public/stories/50567",
    "name": "Interior #50567",
    "type": "interiorStory"
    }
    ],
    "returned": 2
    },
    "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/22453/events",
    "items": [],
    "returned": 0
    }
    }
    ]
    }
    }

    console.log(object.data.results[0].title);