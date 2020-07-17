const seedValue = {
    category: [
        {
            id: 1,
            name: "Akcja"
        },
        {
            id: 2,
            name: "Horror"
        },
        {
            id: 3,
            name: "Fantasy"
        },
        {
            id: 4,
            name: "Komedia"
        },
        {
            id: 5,
            name: "Dramat"
        },
        {
            id: 6,
            name: "Animacja"
        },
        {
            id: 7,
            name: "Romans"
        },
        {
            id: 8,
            name: "Wojenny"
        },
        {
            id: 9,
            name: "Sci-Fi"
        },
        {
            id: 10,
            name: "Thriller"
        }
    ],
    directory: [
        {
            id: 1,
            name: "Author One"
        },
        {
            id: 2,
            name: "Director One"
        },
        {
            id: 3,
            name: "Author Two"
        },
        {
            id: 4,
            name: "Steven Spielberg"
        },
        {
            id: 5,
            name: "M. Night Shyamalan"
        },
        {
            id: 6,
            name: "Olivier Nakache"
        },
        {
            id: 7,
            name: "Todd Phillips"
        },
        {
            id: 8,
            name: "Gabriele Muccino"
        },
        {
            id: 9,
            name: "J. Mackye Gruber"
        },
        {
            id: 10,
            name: "Clint Eastwood"
        },
        {
            id: 11,
            name: "Christopher Nolan"
        },
        {
            id: 12,
            name: "Mark Herman"
        }
    ],
    fCategory: [
        {
            id: 1,
            film_id: 1,
            category_id: 1
        },
        {
            id: 2,
            film_id: 1,
            category_id: 2
        },
        {
            id: 3,
            film_id: 2,
            category_id: 1
        },
        {
            id: 4,
            film_id: 3,
            category_id: 5
        },
        {
            id: 5,
            film_id: 3,
            category_id: 1
        },
        {
            id: 6,
            film_id: 4,
            category_id: 1
        },
        {
            id: 7,
            film_id: 4,
            category_id: 6
        },
        {
            id: 8,
            film_id: 5,
            category_id: 1
        },
        {
            id: 9,
            film_id: 5,
            category_id: 5
        },
        {
            id: 10,
            film_id: 5,
            category_id: 7
        },
        {
            id: 11,
            film_id: 6,
            category_id: 5
        },
        {
            id: 12,
            film_id: 6,
            category_id: 8
        },
        {
            id: 13,
            film_id: 7,
            category_id: 5
        },
        {
            id: 14,
            film_id: 8,
            category_id: 5
        },
        {
            id: 15,
            film_id: 9,
            category_id: 4
        },
        {
            id: 16,
            film_id: 10,
            category_id: 5
        },
        {
            id: 17,
            film_id: 11,
            category_id: 9
        },
        {
            id: 18,
            film_id: 11,
            category_id: 10
        },
        {
            id: 19,
            film_id: 12,
            category_id: 5
        },
        {
            id: 20,
            film_id: 12,
            category_id: 1
        },
        {
            id: 21,
            film_id: 13,
            category_id: 1
        },
        {
            id: 22,
            film_id: 13,
            category_id: 9
        },
        {
            id: 23,
            film_id: 14,
            category_id: 5
        },
        {
            id: 24,
            film_id: 14,
            category_id: 8
        }
    ],
    fDirectory: [
        {
            id: 1,
            film_id: 1,
            director_id: 1
        },
        {
            id: 2,
            film_id: 2,
            director_id: 2
        },
        {
            id: 3,
            film_id: 2,
            director_id: 3
        },
        {
            id: 4,
            film_id: 3,
            director_id: 2
        },
        {
            id: 5,
            film_id: 4,
            director_id: 2
        },
        {
            id: 6,
            film_id: 5,
            director_id: 1
        },
        {
            id: 7,
            film_id: 6,
            director_id: 4
        },
        {
            id: 8,
            film_id: 7,
            director_id: 5
        },
        {
            id: 9,
            film_id: 8,
            director_id: 6
        },
        {
            id: 10,
            film_id: 9,
            director_id: 7
        },
        {
            id: 11,
            film_id: 10,
            director_id: 8
        },
        {
            id: 12,
            film_id: 10,
            director_id: 1
        },
        {
            id: 13,
            film_id: 11,
            director_id: 9
        },
        {
            id: 14,
            film_id: 12,
            director_id: 10
        },
        {
            id: 15,
            film_id: 13,
            director_id: 11
        },
        {
            id: 16,
            film_id: 14,
            director_id: 12
        }
    ],
    film: [
        {
            id: 1,
            img: "assets/img/titanic.jpg",
            title: "Titanic",
            original_title: 'Titanic',
            year: '1970'
        },
        {
            id: 2,
            img: "assets/img/avatar.jpg",
            title: "Avatar",
            original_title: 'Avatar',
            year: '2012'
        },
        {
            id: 3,
            img: "assets/img/Green.jpg",
            title: "Zielona Mila",
            original_title: 'Green Mile',
            year: '1999'
        },
        {
            id: 4,
            img: "assets/img/odlot.jpg",
            title: "Odlot",
            original_title: 'Up',
            year: '2010'
        },
        {
            id: 5,
            img: "assets/img/forrest.jpg",
            title: "Forrest Gump",
            original_title: 'Forrest Gump',
            year: '1994'
        },
        {
            id: 6,
            img: "assets/img/ryan.jpg",
            title: "Szeregowiec Ryan",
            original_title: 'Saving Private Ryan',
            year: '1998'
        },
        {
            id: 7,
            img: "assets/img/zmysl.jpg",
            title: "Szósty zmysł",
            original_title: 'The Sixth Sense',
            year: '1999'
        },
        {
            id: 8,
            img: "assets/img/untouch.jpg",
            title: "Nietykalni",
            original_title: 'Intouchables',
            year: '2011'
        },
        {
            id: 9,
            img: "assets/img/kac.jpg",
            title: "Kac Vegas",
            original_title: 'The Hangover',
            year: '2009'
        },
        {
            id: 10,
            img: "assets/img/sevenp.jpg",
            title: "Siedem dusz",
            original_title: 'Seven Pounds',
            year: '2008'
        },
        {
            id: 11,
            img: "assets/img/butterfly.jpg",
            title: "Efekt motyla",
            original_title: 'The Butterfly Effect',
            year: '2004'
        },
        {
            id: 12,
            img: "assets/img/grant.jpg",
            title: "Gran Torino",
            original_title: 'Gran Turyn',
            year: '2008'
        },
        {
            id: 13,
            img: "assets/img/darkk.jpg",
            title: "Mroczny Rycerz",
            original_title: 'The Dark Knight',
            year: '2008'
        },
        {
            id: 14,
            img: "assets/img/boys.jpg",
            title: "Chłopiec w pasiastej piżamie",
            original_title: 'The Boy in the Striped Pyjamas',
            year: '2008'
        }
    ],
    permission: [
        {
            id: 1,
            name: "year"
        },
        {
            id: 2,
            name: "category"
        },
        {
            id: 3,
            name: "title"
        },
        {
            id: 4,
            name: "director"
        }
    ]
}

module.exports = seedValue