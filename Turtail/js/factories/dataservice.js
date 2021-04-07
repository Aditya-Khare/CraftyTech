/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Green Sea Turtle?",
            possibilities: [
                {
                    answer: "150 years"
                },
                {
                    answer: "10 years"
                },
                {
                    answer: "80 years"
                },
                {
                    answer: "40 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Alligator Snapping Turtle?",
            possibilities: [
                {
                    answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Lepidochelys-olivacea-K%C3%A9lonia-1.JPG"
                },
                {
                    answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Green Turtle?",
            possibilities: [
                {
                    answer: "data:image/jpeg;base64,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"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Kemp's Ridley Sea Turtle live?'",
            possibilities: [
                {
                    answer: "Tropical waters all around the world"
                },
                {
                    answer: "Eastern Australia"
                },
                {
                    answer: "Coastal North Atlantic"
                },
                {
                    answer: "South pacific islands"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common turtle in US waters?",
            possibilities: [
                {
                    answer: "Loggerhead turtle"
                },
                {
                    answer: "Leatherback turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Alligator Snapping Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the largest sea turtle on earth?",
            possibilities: [
                {
                    answer: "Eastern Snake Necked Turtle"
                },
                {
                    answer: "Olive Ridley Sea Turtle"
                },
                {
                    answer: "Kemp's Ridley Sea Turtle'"
                },
                {
                    answer: "Leatherback"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Olive Ridley Turtle?",
            possibilities: [
                {
                    answer: "data:image/jpeg;base64,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"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                },
                {
                    answer: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYYGBgYGBgYGBgVGhkaGBoYGBoZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHBISHDEhISE0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80ND8/NDE0NDExNP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADoQAAEDAwIEAwYFAwQCAwAAAAEAAhEDBCESMQVBUWEicYEGEzKRofBCUrHB0RQV8SNicuEHkhZDov/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIxEAAwEAAwADAAIDAQAAAAAAAAECERIhMQNBURNxIjKBYf/aAAwDAQACEQMRAD8A+UvYqXNRrWyoPpLHOqA1ytcxQ0oj6c1WhqqIUmlYDLlNjwFQXqJesDiFF0lVuKqDypalmZScWKTXLmFeOcgFsk5wUVEBdpRB0Slehy8AXALA6Jh6ra/xL1Vv3WYVgdWo41INyvZckt0lUFuUq37MQIUmtU2tUg1MBsjChCv0qy3tS8wB2WfRlQMGqQYtH/8AGXwIcwnmBKHv+CvpRqEg9EvJA5JiJzFEsTVvDnnZp+RTHgnsncXby2izDfie86WN7F3M9hPos6SGnX4ZfSuhfT6//jehTbpfcvfVPKm0BjfRwJI8yEDX/wDH9BjoffjeCGUpdI3HxxKX+SR8w+ewptW3uPYihn3d7B5CvSc0T3cxzoHeFk+I2L6L3U6ghzehlpByHNcPiaRsUVSfgAeVyguTYYNbTMqRZG6vosJzsrHWs80NJtL7BW0gVA2sphSteSYMtQAiI6SEAsCr2WgAym7wBhDVGoB5aK32vReMsp3TAMyr2MCweQrq2YAQtOgSml8+BCjbHSEQ8mkAf06426b02ACeaiGaisLyFgtTuvDalPG0eymbbGyIrszbqZCimlzbHogXMIRCqIAqDxKkQpMZKIfOwZrFaAiBQUSyEMC60iGq6jSkr2jTkol/g2QbwXdGlv7OkgEvEHojf7N7uYBncFCcLuXEb/DkBM/7m57sgY36eqm2xHy0nbPewgvwE6qPpv0SC5ziA1rQXOcegA3V1h7J17uHv/0aePE4eNw/2M5ebo32K3nDeGW9swNa0S0Zc/Lnebv2GFOqX0Un4W+30KeHezLdIc8BgiS0QXesYHoquMcZbbMFNjQxkGNtRM5OjcA58R36Kj2m47EtDvDGzTknaCOQ79JXz+7uXPeSTM/YSJcu2VdKFkjZ/G3ukA7yJ6NO4APr5SUIHhxDv0/lCMkD4ZV2oiBjuTIHkMp8wi6bJFwy6JM4nmUs9qh7yg1xjXTcM89DzGjuA6D2kpoK7YM7N3+e6z3tBeMdLGO1AuDnEbYBhvfJnHRGU90aWZmFyv0rlYfRyy3xIHzVpZjJXtuXEbwFd7gHuimQfvYNQuA3dXOu+y9NsOipqwMIabEz11zPJVl5KgHDkiadDUJW6MDtVzngBeOp6Sqrs4RbQZTbFt1V1OR1nSmJQdtS1OzstJY2rYESSYADRJPIAAeYStjv8QG+iThTt7YdVpuHcEe4iWBziS3SfFo38Tw2YiDvG2Oqc2FYOhhedMgN0PayJIABaZk43BEd8pXQvH9MgyiOoHmjbe3LsQOxkeS2dfg/iw5rTz1NDySf9zgZ3GCOyi3gAe/xtk40uaX0/Dt8JJAbt4REJebD/EmZL+1B+JB8iFVW9lQeULZXXAdDvdNOqCdOpgOBklvj1ACZM48pUOCcIbVLmF7mlmTpD2uE7GHQNoO2zgfMqm2Z/E14z57U9mHT4coGvw4sdpcIK+70fZqi1uHPJ31uLCcZ206TjqFRR4ZbNeSWhxIDfEGSSMnYAucem2BiU3Pi8Yy+Gmu2fC/cKTbHVkZ8l9ktba4PvYs7akWVwKT2sDjUpAgmJ0w4twHkgSD2JeXtjQqNJr0WEhkkloLgCMhrxkEERg9E3L9B/Cl9nwahw/mUdd2tNrO8Kzjuhleoym4ljHvaCRB8D3MLSecFpE88FE8F4JUu3NEllMmA9wPjP5aciCe5wO+ySnnoszTeCXhHCqlZ2hg2iSSAACYlxOy+p+yXsnRotL3w+qHZeDIaI+FoiG5nIknryTPhfBqNJjG06bQIBfD5JeRkvd+MjadhmITOvXbSbAAAjYQAOkkmB+65qtt4jrmFPbLKt41jYECBMc/SP4WU4zx5jWugaiTj4iIAO5w4EkgwBy3CB4pxHxF8k8sHpzEg4xvt3WUuXue+ZME7YJmcAYRmW/RL+RbiI3dy6o6Tzz2nn9VG1panBrck94A6klevZDg1/gB5kGfkmNmKTMNMzueatKOO7SLXcMawanv1dmiB8zJP0WcvbmdQacA4B5LY1i0sIjcc18+v2lr3Ng7p8Qnx06ZGuXvnJgAGOXyS6rSVtvXcDGc4TO1tQ9u3i6LeHQ+jP6F6mVWycCcLxHQ6jyk4nnCb2dUEJSxk4R9uzRkrJiUhg5mrACCurcDzRtC7avX0NWRlBiS2hP7vRmJRrLtobgZXXdF2mIQ1tZdZQ0pifZVUuHEqkUH1HhjQXOPIdOp6DuU0FqJA26RuT0CcWwFNukN0kkFwEDlI1O9efVB0UlAVpwVjPjhzug+EQO8ak8srdpdpaxxLpY1oa6ScHec9OcqTCHDwuLJmB1GMFwEHv9yRVOiAZFQt1OJOabTsQTGl7wfQHmS2E1sI0tLRj3ii6rpeSA3Q1r2taGQab3Nd8U6ZMYwJO4Z2vA2W5cajtROQxpku2AOdh4RvtGI5gcFsxSptrvaIe5jabBJc5xeNL3k5IaBOMQ0yjrgkuBgvcZOsfEdXhgwIGAB5x3IzG+vC19/oHga1oGo+EguDQObnbOMYaPPmg63F3NcGuqHU4F2kl0MaARrfJkNLtLQAZJPqmFGyYxpe4y1gc92+8SWjlthZw2Jc4Vn51vDzMZLZ0MA5BpwB0A80lVg0y36aGypEOOp79xrfOkvMwA5+7WDMNbAEncyVi7Djb7a8qh73FjyxzGOMacnW0gY3fyk+FP3cSFRjqR8Be0tMzIJmcjIPdJ+K8Oe973Oe6SAC5hYGvy6XvaRIfpdHh8JLRjJW+O0vRqnfBhwb2qqGq+hDqup5E41MZ8JkN23GZ5FP7YtdLsEyYI6AmI775Cz/AAvgFJmmpr0vYfCXEvdBADi90tDnRqgNAaC4khxyjXXdOkwNZ4WMAaBMk/yeaF0qawaZ4rs09nfHYnIxnn0VXGqBrU3Ma4tcR4XNMQ4ZAmNjsexKwVzx97z/AKYLgMTMM/8AbmfIFFWHtJWp5qM1M5lhlwHXTGR5Z7Izy8EpoooezDKlRtWs4ho1GqwljG6m1NLzqJJIyXHHNo5rY2VF7S3Q6kKQJ06ACOhyRMxHND07tlwGuYGvY8Q7OfdugktPWWs+SMdUDMNI0iYbH1+aW7ejRKSC7mqGNdG3+0frCxPEL5xL/FLd9xuOglM77ibpIJxyPTl+nyWauGPqvEhxbJGvxaSQPh1ERPlySyk3ovy05WCq9uuxjk0b/f3lW8Bu2h8vYJOx3IHQE7Iq54aWyQ0JSapYfhIXRKOCq0Z8YtNbw4bRhJGUnMfvEFN7S8D3NGZHVV8VoF+GwFUkn9MCu+JPnfA2hLKmtz5EEkc0U+ydHiwk99V0HBW9KxPfQy4Xwn3mpxIBB+qh733bnNnIMSEv4bxdzJAOCmNu9jxLhlbClan2C1Lh8nIXIh1McoXiwegG2eQZKKrXYIhJf6gkLg8omc6xix0ZV1C6cDgpcKqtFUDKAcNCy6kDUqn1NLsHHPySA3Z5Jtw60L4wTkCObnY8I9SEtdBmOw+2GRUcJ/I3OdiZgHlPomVBpIzEidQkZ+L8cmHEiJxuPJePptEtdHhBpsLj4S4Zdg7tM7YkOHdNLKze8eFgAa4Auf4WDcCdp22EnI5qTorm+BHDLUCXaAAxmt2qdLnud/pN5kgkgnmWtKnwaydUuPE1ztT3mpUlwOjLnO1ahgnSI0/i7SieKUnMZRt516pe4gQHPJIDRqyA1ogEg4nyT3hTAyk0RJLmOcQCC7xAzjeGsJPIz3KXkMpBLuia5GqGtaT7po3bEaXlxzJaXDO0OO+SdTEOMkToMTAJkyQ4coLwQe5UWvHwncNgy6TGhukz0hx85S+5vjgEP/EYJ5amE9BgOBmcHsQl5Ba7CuN3QfQqsaYLgRLdoa5vyMYWVu7sugahAAgcxn6jKq9obklroO7iRBOwcTMc9257lIqNyRg5Ow5SOhG8rOdCmPKtSNLx+XP0+qtZxMaD2jf6CfvZZ83g5SXbaY3/AGA84VL3aj/qvLAPw0snvLj1xy5c1uH6MqGdzxokxJ7AZJ8gqjUL81TDeTJ3/wCcfp+qE/rWAaabGgfmg6z3e+TqKqFWTESfP9U8ykJVDY3bf2AGw8lfSudoSZkb5+h/dHsAAAOP19TyTYSqh/wINpl7gSGODzp/K8lpdA5NMz5lyuv+MOB8LgR03a4dCD/lIKlf3bJ31z5wI/c/RKn3zzhriOuVGp5VpSLyRzdcROwAyMk5OcwOnTqtCzjLLemLdzQ5oDXhwAAcH+LVHLJPyWMotJEkyepRvFyHuYejGN9Q1oP1VOH+JH+T/IZX/GKbdjIOyWW13Te46hIWZ4lUJcANmgj1O/6Be2dVzTBBVUuiNR9o1VxTZrBZjHJJ7+90u3yOivFQOMDeEG7hD3EkptEme+y1l62owtnKy19bODiN8pjeWTqfilWWVXfXkHmQsi0rj2hbQs5Ix5p07hJaMc0ysbZsF4iIXrrwaR2ws2aqbE/9pq8gfmuTX+4rltByf4YOnURLiIwh30YUmEgJirRYAvHlUuqK23pl5+vkOqDZlITY2xcZG84/n0W24OxjB436NLXFhcCdRwHOgTHhLg0mPEYnGF/s/YNc9ocPic1gbmILgJcQCYzkDJ7Ju3h77l73gGmwEDUchtMO8DWyDmBnO++SVGqX2VS/C22vvG5lLSGEa31Dpe9xcZjVEMG5IaMREmFp7dgBaXPlpaJkmdyYbOQ3PLlASS3dSpgNos1P0wXASd8kASOmf8JpZ8Me866ztDcQxpl7pyMNkNnHfsN1zVTf+paIU9sZvtW13NeTDGExnTLvyg8t5J5QjLq5ADo0kDIHLwMdyjoB15ZQ1W6AAYzSwRDQCIA3JMSIPmZnzS64q6t3Ts2T8ZMAzAA6QB9EF0F9krm5MgDmIbkkgOY5pmY2e0HqBnmk9zd6vEDEGDJdAa4YGdoGnbvvAClcPJmcGZMiJMxz2OIzjxHvK24qwZMlpBa4DcSZBBPpnOWtPRUnsSkDX9YuwT8xzAjETAME4POdjlQ58bZHTH6I25rHYme8k4PPfY5MbfIJe9VkmTfUbEx9/L76qsZ2C8aMopjAeQ+iOCOsItYB8XyB/WFdSpyOQAB7Dywp07fpjvP7TuiW0uUffn6LE3RCnHTb7G3oiX4a5xBhokkAkwBjHVWUafojg0aSPPviOfzRE3WZu4qGpBG0Y8uX6qNKhG/0U3WxYTp2k4V1CiTv/lDiNVdBNozmV65zC/xO9O3IITifEW0m6GwXxt07u/hZ+m973TOSqcdJr9NPUoM1hwiDuq+IhjRgBAMpPjMqqs+W5K2YGeydtcaHgymtzxItGOiyr62QJXVrjEByYbj2ecTvXPMnkoW3EQG6Tuq3U9WFJnDZI7peinSQ2ocQlmkCMKqi4yRKIo8P0hQ9wWvhARNfRKF6iPcr1DTYZGlTlEOodlOxt3EjHNfQODewlaqWuePdMMSX/HB2hm4nvCZ0kPxps+dPsTEwtDwD2UuXyW0XwBqdrhmOWHZI8gfVfWeF8Bs7bI0ueca3uaXAdG8m94ARtbjFtQAcCA12rxsGoDTjxRsJDs7eE81Gvl3wvPx56Zj2e9lnUiKjzE6mlobmYw5r3DAE7xv9dNb8EY1mjS5wiYc6WnUILCCDgT8/khD7Y27iGtc9wJA1ARv0J35IOl7bsc7SQQZgtgzHUEYI7gqO72x8w0dPhjWNaxgaxu7oa2XmcB0AAjJ5dFfUs2HBa2AIYC1pDeXhEYxjCy1p7Wy7S5rpBIMZloJGoRv+2yOsePhwIc1/gkEhri2Wbw4CDt9UeWfRv+l95wAHxU3aHcxLtLid53IzJnvHdZ+q0glpw9phzXElw57xyOQemwOJ0VDjdNzdQcMgRG2Uh9qKvwVBEO8Lt5y1pY6YMGCdsnASPH4N56JL13Wc5DTMRy3gunf1ykd1Vnr0IORnoefLfp8mNzcFwdB57EhsmJmYB2jEeqS1nwfXmDI5Z2yqxIlUDPPy6hcGz9/qpnK9ZT+iqiFUTp0vv/IKIZAx+n74XjKZ/wAk/wAollON/pP85RItk2M67dVIEnDMdyBJ8lEu6488H5FEMaSI5LahcZJjY/crx1Q5A/yphqHubumzdwJ/KMn5ckN02HgZJSniPGGtOikQXbF+4b2b1PfYILjXGXOBY3wtO4G58z07LONqGVSZGmd7Zo6NnI1HM5M7+ZPNL7q60OxuqafEXAQhK5LzJToCnvsb0uNOIyULWvC4nKVFpU2ArNDqUi0zKkHdd1GVxbzJQGGdm8bQmlvRJOrkNkssKYMfVaClUDUMJWyQqQMoH3h95KuuHzlAGS7yCIqG39QuSme65Lgx9ItjYWHwFr6g/E4hz+8HZvoAgL724OoYkAnH+wwCJGQTBM/8e6wlZ5dn9oQxY4/99MqEz9tne6XiHz+LNbjW5waYA1ZIHInlhRdxMOMkTEBhxhrcNAiIgBJ22hO58u6Oo2gnqdu3mjiJuiwV4Hh8JzzPOZxsNyq/fu3GCNjzEGcHluqbu/azDRrPYw0eZ3O//fJAm+e74hGf/rkfMzPyTJCdjI3TwARgCfr17YCtteIP3k7iI/WUsbVnk4/8p/dEU3E8gB9/fNBoOj6xv9Mt0jMSBqA3nrjPRHX3ES9mT+IHG3QADoMegSS0po6mA4kdAfvttvyQ4oTm9A6tecjTz3A6l0SZnB37KpxnvPXt+qnc0oOPn0yWjywoU29sYxy3z+iOBdEmCc9tv2+qtZ97ei9ZT9B+vn1RlGnAmA0fnfAA8uQW0RkKTSfX7nO/3lXf007An73KHdxOmwwJeTu7ZvoTkqq64gS3DoH+3CKlsm6SCm0GsM+EEmcwPkF5Uumc5J7nCyte6g8z3XgqPeMJ1Bm2O7niH4W/f8JZdtc1uoqljyDlUcQuy7wgplKQEm2AuJcVIUOiItqB5hGGlhEaqwUupFRLCm7LYHdeOtWwm0XkKgxdEI42q59pA3WbGTA39kK92US8Y7oXTlAogu0vC1N6PEJ5pK2lOym0FqKEpJjW5voVNC5LiSqWvDgp20BBgS6LtS5dK5DAhgZ9/wDXqVYKR+vPCoFUDOAJ3OyGuL0nb+MKJdS2MKj2t5ifvfuuddYwfXpkbJIHklMmU/BPY/UH+EMGcpICe3KmxhHwn5q3RMlWspKiEpkGA9vqiaf3Gyk22P2Fay17rCaTbWOw8/4V1FxAyYnf9h9FOnSAG333QlfidJh+LUejM/XYIf0KFsZJnnn/ACpOLGAF5A6Tz9OaSVuOOOGgNHbJ+aobX1ZJzzndMvjbA6wcu4o0E6Rn8z4n5bBLbt73nW55dG0nA8hsPRQeWlVh3dOoSFdNl9N2FS2m95hkqplxmOSMt733eQtgH0es4c5nxjCrrVG7NMKyvxZzznZQYxpyYQwyf6AVnc5Xtha63SVfdNacDdEcNaW8sI4F1iPbhmkwEfa0wQAqarwSjrWJwFsJ1XRS60EyqKtAgYTG6fpS19eSgCW2Dsp4KFuXEBMXO7JXeuzCxSfQWlSJMnZWUqTNRaeexU2tcG9kMWkGVh9Lbq2LDjZUMfOCiXXWrBCgxmZARN/ZU5mlEUKTjkKb2AjdN+G0GxCwKfQr0lerQf0AXqwmmVdqdnVq8th2A5Lm0ijrfhwYNTipVajB+GAMl3OFHDsd4UMojnB8v5RtN8NGPRZ+rxN5cdMNbyEA48yo/wBxf+c+mP0TKGZs0dOj0+v8qw1WN+JzR6ifkMrJuuHHck+ZJ/Vee8KZR/6TZp6nF6bdpd5CB/8ApC1ePu/A1re7vEf2CQOcV5KZSgYG3PEXv+Jxd2O3/qMIT3hUV4mzAoJY9WB8IZhViJNyFMr91MPQEKymSsDiFPZGZV9KswiDugXEr2kzKDCMW0WzuvakM2XNYAqXnMoCF1ozU6DzWiPDiGeFKuE0yfFEp5W4qxjY7LEqp6IWUpcZ5JjwxwM8o6rrakHy4c8oR7yx0bLaB9jKtRDgSULToNdyU3XGtsDdVC3qU/EctPRKwz4XWtu3VBKG4hZDVsIVdzX0mQcqlt+44OUVIG6TKbqkWjfCCaib6sXQhbeJyjmFJ1rsq1AGCmdhb6hIygbmnOQieHXZZ5JSj8KLynpcmFo8tAKouX68gImyY6IcMckUK30Gf1DzzXKYt29VyOC6gKplp77JLxO6GnQ3f8X8KV/xEEFrJzif4SYmVOZOmZOJXLgpNaqDs9aVJcGrkRTgV6oKYKwGerxwUgwlWi1d0KIEUNKMtaJeYCo/pndCjbNr6Z1QlbM0XDhr/wApUqNkZyE2suLg4IRJumEbDzS6xWBs4QCJOEOOHEk6eS0Uh7RH0VVxDGEgQUvIVMy9w+MHcYVRpGJ5IsWheS4dUezg9TRPLom0zxFdjcOaA0Ly7s3/ABEQFGnU0mCMhe3N/IglOiVLsuZce7b4ZlLbq8JMq9tM1MAwgbu1LDBytgZS0vo3UZlHXHG3aNKz5kKBcVhl8fejA3BeZKvYQl1FyvY9ZdC1PYxfQ1N2lVMtW80daVPBC9fazmUrZk86FL6ZaZGQrGMlWVW9FXSxkygPpMUnATsERRqkgLveAtIXltSPIooV+DASuUdBXJyZjbi2LUPCaU2ueI3Vf9A8nYpDrV/oC1iu90eiZW3CXTkIl1AAweSKFr5Pwz1QEFeakReZcVQ2kStpReEdStotkrhbO6FFULV7ckLcsMxzwqnTb8QlaFlNhb4QIWWtaLt8pkxzmjf0Un8i3CdfG/0PqWAOWgJfcW0YITeyqFwjZXVbc7jK3Imm0YW5plrsKPvXjqtZd8PDpOnKWVg0N0kZCKosq0N4DcF25U/aGvERtzWcdelhhuEyZftqM0OyVs70DnvSXCLwNJJ2Tl3Ei4QFn6YY04x5ohrnbhNqJ1OsuubQnxBKK7Dqgp8y6cAARKDv/Hs0BFUZJlVEaRhXVyNORJQbWPblHNqeHK26I1gguWwVU0Smr6AdzQzrWCiUmkU0mZhHOoQJVVNgnJRgeDhFE6b09tnxBiUxZX18oQ9JkDAHqqXvc0qbYc0vfbEmQMKqoJ8ICJtapjdQvBOQMom70Gq2zmNnkrrSuA1B3Fd0QZ9V7YQRlYfOg/35Xqn/AEzfzBctomIzvCviWltd1y5OD5fRixozhZnifxlcuQYnx+igbo22aI2XLkp1PwYBogYV1fYLlyn8ngsf7I8dsoWvxLly559LV9mitdkQz4l6uVGc5G52KynGdly5GfRp9M3V3R/DN14uVvoqydb405ttly5Kxa8JVkETlcuTSIvAilyUeI7BcuTInQsobomtsuXI0ZAbd1e1cuQYWF09lKrsuXJWEsobK6p8K9XIiiqvsvKGy9XLD/QSuXLlgH//2Q=="
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How Heavy can a leatherback turtle be?",
            possibilities: [
                {
                    answer: "900kg"
                },
                {
                    answer: "40kg"
                },
                {
                    answer: "110kg"
                },
                {
                    answer: "300kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these turtles are herbivores?",
            possibilities: [
                {
                    answer: "Loggerhead Turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Leatherback Turtle"
                },
                {
                    answer: "Green Turtle"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        {
            type: "Green Turtle",
            image_url: "https://i.pinimg.com/originals/d5/82/7f/d5827fc9dd93ecba7d2b6f950d403cc0.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivore",
            description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            type: "Loggerhead Turtle",
            image_url: "data:image/jpeg;base64,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",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Leatherback Turtle",
            image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
            locations: "All tropical and subtropical oceans",
            size: "Up to 2m, up to 900kg",
            lifespan: "45 years",
            diet: "Carnivore",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            type: "Hawksbill Sea Turtle",
            image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
            locations: "Along the Atlantic Coast of USA",
            size: "around 60cm, up to 100kg",
            lifespan: "20-70 years",
            diet: "Carnivore",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            type: "Kemp's Ridley Sea Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
            locations: "Coastal areas of the North Atlantic",
            size: "65cm, up to 45kg",
            lifespan: "Around 50 years",
            diet: "Omnivore",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            type: "Olive Ridley Turtle",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lepidochelys-olivacea-K%C3%A9lonia-1.JPG/1200px-Lepidochelys-olivacea-K%C3%A9lonia-1.JPG",
            locations: "Tropical coastal areas around the world",
            size: "70cm, 45kg",
            lifespan: "50 years",
            diet: "Omnivore",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
            locations: "Eastern Australia",
            size: "Up to 30cm",
            lifespan: "25 years",
            diet: "Carnivore",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }
    ];

})();
