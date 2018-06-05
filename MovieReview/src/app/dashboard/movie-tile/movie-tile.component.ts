import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../dashboard.service';
import { Subscription } from 'rxjs/Subscription';
declare let $:any;

@Component({
  selector: 'movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.less']
})

export class MovieTileComponent implements OnInit {
  public testArray: any;
  public arrayOfKeys: any;
  public testArray2: any;
  public serialDetails: any;

  constructor(private dashboardService: DashboardService) {
    this.testArray2 = [
      {
        "title": "Baahubali",
        "movie_id": "1234",
        "year": "2015",
        "Genre": "Action"
      },
      {
        "title": "Baahubali2",
        "movie_id": "1235",
        "year": "2018",
        "Genre": "Action"
      },
      {
        "title": "Deadpool2",
        "movie_id": "1236",
        "year": "2017",
        "Genre": "Comedy"
      },
      {
        "title": "Dark Night",
        "movie_id": "1237",
        "year": "2013",
        "Genre": "Adventure"
      },
      {
        "title": "Chalo",
        "movie_id": "1238",
        "year": "2019",
        "Genre": "Romance"
      },
      {
        "title": "Avengers",
        "movie_id": "1239",
        "year": "2014",
        "Genre": "Action"
      }
    ]
    this.testArray = [
      {
        "1927": {
          "title": "Wings",
          "imdbId": "tt0018578",
          "releaseDate": "1927-05-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1927,
          "releaseMonth": 4,
          "releaseDay": 19
        },
        "1929": {
          "title": "The Broadway Melody",
          "imdbId": "tt0019729",
          "releaseDate": "1929-02-01T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1929,
          "releaseMonth": 1,
          "releaseDay": 1
        },
        "1930": {
          "title": "All Quiet on the Western Front",
          "imdbId": "tt0020629",
          "releaseDate": "1930-04-21T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1930,
          "releaseMonth": 3,
          "releaseDay": 21
        },
        "1931": {
          "title": "Cimarron",
          "imdbId": "tt0021746",
          "releaseDate": "1931-01-26T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1931,
          "releaseMonth": 0,
          "releaseDay": 26
        },
        "1932": {
          "title": "Grand Hotel",
          "imdbId": "tt0022958",
          "releaseDate": "1932-04-12T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1932,
          "releaseMonth": 3,
          "releaseDay": 12
        },
        "1933": {
          "title": "Cavalcade",
          "imdbId": "tt0023876",
          "releaseDate": "1933-01-05T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1933,
          "releaseMonth": 0,
          "releaseDay": 5
        },
        "1934": {
          "title": "It Happened One Night",
          "imdbId": "tt0025316",
          "releaseDate": "1934-02-22T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1934,
          "releaseMonth": 1,
          "releaseDay": 22
        },
        "1935": {
          "title": "Mutiny on the Bounty",
          "imdbId": "tt0026752",
          "releaseDate": "1935-11-08T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1935,
          "releaseMonth": 10,
          "releaseDay": 8
        },
        "1936": {
          "title": "The Great Ziegfeld",
          "imdbId": "tt0027698",
          "releaseDate": "1936-03-22T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1936,
          "releaseMonth": 2,
          "releaseDay": 22
        },
        "1937": {
          "title": "The Life of Emile Zola",
          "imdbId": "tt0029146",
          "releaseDate": "1937-08-11T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1937,
          "releaseMonth": 7,
          "releaseDay": 11
        },
        "1938": {
          "title": "You Can't Take It with You",
          "imdbId": "tt0030993",
          "releaseDate": "1938-08-23T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1938,
          "releaseMonth": 7,
          "releaseDay": 23
        },
        "1939": {
          "title": "Gone with the Wind",
          "imdbId": "tt0031381",
          "releaseDate": "1939-12-28T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1939,
          "releaseMonth": 11,
          "releaseDay": 28
        },
        "1940": {
          "title": "Rebecca",
          "imdbId": "tt0032976",
          "releaseDate": "1940-03-27T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1940,
          "releaseMonth": 2,
          "releaseDay": 27
        },
        "1941": {
          "title": "How Green Was My Valley",
          "imdbId": "tt0033729",
          "releaseDate": "1941-10-28T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1941,
          "releaseMonth": 9,
          "releaseDay": 28
        },
        "1942": {
          "title": "Mrs. Miniver",
          "imdbId": "tt0035093",
          "releaseDate": "1942-07-22T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1942,
          "releaseMonth": 6,
          "releaseDay": 22
        },
        "1943": {
          "title": "Casablanca",
          "imdbId": "tt0034583",
          "releaseDate": "1942-11-26T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1942,
          "releaseMonth": 10,
          "releaseDay": 26
        },
        "1944": {
          "title": "Going My Way",
          "imdbId": "tt0036872",
          "releaseDate": "1944-08-16T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1944,
          "releaseMonth": 7,
          "releaseDay": 16
        },
        "1945": {
          "title": "The Lost Weekend",
          "imdbId": "tt0037884",
          "releaseDate": "1945-11-29T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1945,
          "releaseMonth": 10,
          "releaseDay": 29
        },
        "1946": {
          "title": "The Best Years of Our Lives",
          "imdbId": "tt0036868",
          "releaseDate": "1946-12-25T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1946,
          "releaseMonth": 11,
          "releaseDay": 25
        },
        "1947": {
          "title": "Gentleman's Agreement",
          "imdbId": "tt0039416",
          "releaseDate": "1947-11-11T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1947,
          "releaseMonth": 10,
          "releaseDay": 11
        },
        "1948": {
          "title": "Hamlet",
          "imdbId": "tt0040416",
          "releaseDate": "1948-10-27T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1948,
          "releaseMonth": 9,
          "releaseDay": 27
        },
        "1949": {
          "title": "All the Kings Men",
          "imdbId": "tt0041113",
          "releaseDate": "1949-11-08T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1949,
          "releaseMonth": 10,
          "releaseDay": 8
        },
        "1950": {
          "title": "All About Eve",
          "imdbId": "tt0042192",
          "releaseDate": "1950-10-13T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1950,
          "releaseMonth": 9,
          "releaseDay": 13
        },
        "1951": {
          "title": "An American in Paris",
          "imdbId": "tt0043278",
          "releaseDate": "1951-10-04T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1951,
          "releaseMonth": 9,
          "releaseDay": 4
        },
        "1952": {
          "title": "The Greatest Show on Earth",
          "imdbId": "tt0044672",
          "releaseDate": "1952-01-10T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1952,
          "releaseMonth": 0,
          "releaseDay": 10
        },
        "1953": {
          "title": "From Here to Eternity",
          "imdbId": "tt0045793",
          "releaseDate": "1953-09-30T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1953,
          "releaseMonth": 8,
          "releaseDay": 30
        },
        "1954": {
          "title": "On the Waterfront",
          "imdbId": "tt0047296",
          "releaseDate": "1954-07-28T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1954,
          "releaseMonth": 6,
          "releaseDay": 28
        },
        "1955": {
          "title": "Marty",
          "imdbId": "tt0048356",
          "releaseDate": "1955-07-15T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1955,
          "releaseMonth": 6,
          "releaseDay": 15
        },
        "1956": {
          "title": "Around the World in 80 Days",
          "imdbId": "tt0048960",
          "releaseDate": "1956-12-22T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1956,
          "releaseMonth": 11,
          "releaseDay": 22
        },
        "1957": {
          "title": "The Bridge on the River Kwai",
          "imdbId": "tt0050212",
          "releaseDate": "1957-12-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1957,
          "releaseMonth": 11,
          "releaseDay": 19
        },
        "1958": {
          "title": "Gigi",
          "imdbId": "tt0051658",
          "releaseDate": "1958-07-10T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1958,
          "releaseMonth": 6,
          "releaseDay": 10
        },
        "1959": {
          "title": "Ben-Hur",
          "imdbId": "tt0052618",
          "releaseDate": "1959-11-18T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1959,
          "releaseMonth": 10,
          "releaseDay": 18
        },
        "1960": {
          "title": "The Apartment",
          "imdbId": "tt0053604",
          "releaseDate": "1960-06-21T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1960,
          "releaseMonth": 5,
          "releaseDay": 21
        },
        "1961": {
          "title": "West Side Story",
          "imdbId": "tt0055614",
          "releaseDate": "1961-12-13T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1961,
          "releaseMonth": 11,
          "releaseDay": 13
        },
        "1962": {
          "title": "Lawrence of Arabia",
          "imdbId": "tt0056172",
          "releaseDate": "1962-12-21T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1962,
          "releaseMonth": 11,
          "releaseDay": 21
        },
        "1963": {
          "title": "Tom Jones",
          "imdbId": "tt0057590",
          "releaseDate": "1963-10-24T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1963,
          "releaseMonth": 9,
          "releaseDay": 24
        },
        "1964": {
          "title": "My Fair Lady",
          "imdbId": "tt0058385",
          "releaseDate": "1964-10-28T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1964,
          "releaseMonth": 9,
          "releaseDay": 28
        },
        "1965": {
          "title": "The Sound of Music",
          "imdbId": "tt0059742",
          "releaseDate": "1965-03-10T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1965,
          "releaseMonth": 2,
          "releaseDay": 10
        },
        "1966": {
          "title": "A Man for All Seasons",
          "imdbId": "tt0060665",
          "releaseDate": "1966-12-14T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1966,
          "releaseMonth": 11,
          "releaseDay": 14
        },
        "1967": {
          "title": "In the Heat of the Night",
          "imdbId": "tt0061811",
          "releaseDate": "1967-08-23T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1967,
          "releaseMonth": 7,
          "releaseDay": 23
        },
        "1968": {
          "title": "Oliver!",
          "imdbId": "tt0063385",
          "releaseDate": "1968-12-20T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1968,
          "releaseMonth": 11,
          "releaseDay": 20
        },
        "1969": {
          "title": "Midnight Cowboy",
          "imdbId": "tt0064665",
          "releaseDate": "1969-05-25T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1969,
          "releaseMonth": 4,
          "releaseDay": 25
        },
        "1970": {
          "title": "Patton",
          "imdbId": "tt0066206",
          "releaseDate": "1970-02-18T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1970,
          "releaseMonth": 1,
          "releaseDay": 18
        },
        "1971": {
          "title": "The French Connection",
          "imdbId": "tt0067116",
          "releaseDate": "1971-10-07T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1971,
          "releaseMonth": 9,
          "releaseDay": 7
        },
        "1972": {
          "title": "The Godfather",
          "imdbId": "tt0068646",
          "releaseDate": "1972-03-22T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1972,
          "releaseMonth": 2,
          "releaseDay": 22
        },
        "1973": {
          "title": "The Sting",
          "imdbId": "tt0070735",
          "releaseDate": "1973-12-25T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1973,
          "releaseMonth": 11,
          "releaseDay": 25
        },
        "1974": {
          "title": "The Godfather Part II",
          "imdbId": "tt0071562",
          "releaseDate": "1974-12-18T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1974,
          "releaseMonth": 11,
          "releaseDay": 18
        },
        "1975": {
          "title": "One Flew over the Cuckoo's Nest",
          "imdbId": "tt0073486",
          "releaseDate": "1975-11-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1975,
          "releaseMonth": 10,
          "releaseDay": 19
        },
        "1976": {
          "title": "Rocky",
          "imdbId": "tt0075148",
          "releaseDate": "1976-11-21T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1976,
          "releaseMonth": 10,
          "releaseDay": 21
        },
        "1977": {
          "title": "Annie Hall",
          "imdbId": "tt0075686",
          "releaseDate": "1977-04-20T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1977,
          "releaseMonth": 3,
          "releaseDay": 20
        },
        "1978": {
          "title": "The Deer Hunter",
          "imdbId": "tt0077416",
          "releaseDate": "1978-12-08T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1978,
          "releaseMonth": 11,
          "releaseDay": 8
        },
        "1979": {
          "title": "Kramer vs. Kramer",
          "imdbId": "tt0079417",
          "releaseDate": "1979-12-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1979,
          "releaseMonth": 11,
          "releaseDay": 19
        },
        "1980": {
          "title": "Ordinary People",
          "imdbId": "tt0081283",
          "releaseDate": "1980-09-26T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1980,
          "releaseMonth": 8,
          "releaseDay": 26
        },
        "1981": {
          "title": "Chariots of Fire",
          "imdbId": "tt0082158",
          "releaseDate": "1981-10-09T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1981,
          "releaseMonth": 9,
          "releaseDay": 9
        },
        "1982": {
          "title": "Gandhi",
          "imdbId": "tt0083987",
          "releaseDate": "1982-12-07T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1982,
          "releaseMonth": 11,
          "releaseDay": 7
        },
        "1983": {
          "title": "Terms of Endearment",
          "imdbId": "tt0086425",
          "releaseDate": "1983-11-20T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1983,
          "releaseMonth": 10,
          "releaseDay": 20
        },
        "1984": {
          "title": "Amadeus",
          "imdbId": "tt0086879",
          "releaseDate": "1984-09-06T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1984,
          "releaseMonth": 8,
          "releaseDay": 6
        },
        "1985": {
          "title": "Out of Africa",
          "imdbId": "tt0089755",
          "releaseDate": "1985-12-10T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1985,
          "releaseMonth": 11,
          "releaseDay": 10
        },
        "1986": {
          "title": "Platoon",
          "imdbId": "tt0091763",
          "releaseDate": "1986-12-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1986,
          "releaseMonth": 11,
          "releaseDay": 19
        },
        "1987": {
          "title": "The Last Emperor",
          "imdbId": "tt0093389",
          "releaseDate": "1987-11-19T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1987,
          "releaseMonth": 10,
          "releaseDay": 19
        },
        "1988": {
          "title": "Rain Man",
          "imdbId": "tt0095953",
          "releaseDate": "1988-12-14T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1988,
          "releaseMonth": 11,
          "releaseDay": 14
        },
        "1989": {
          "title": "Driving Miss Daisy",
          "imdbId": "tt0097239",
          "releaseDate": "1989-12-15T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1989,
          "releaseMonth": 11,
          "releaseDay": 15
        },
        "1990": {
          "title": "Dances With Wolves",
          "imdbId": "tt0099348",
          "releaseDate": "1990-10-19T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1990,
          "releaseMonth": 9,
          "releaseDay": 19
        },
        "1991": {
          "title": "The Silence of the Lambs",
          "imdbId": "tt0102926",
          "releaseDate": "1991-01-30T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1991,
          "releaseMonth": 0,
          "releaseDay": 30
        },
        "1992": {
          "title": "Unforgiven",
          "imdbId": "tt0105695",
          "releaseDate": "1992-08-03T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1992,
          "releaseMonth": 7,
          "releaseDay": 3
        },
        "1993": {
          "title": "Schindler's List",
          "imdbId": "tt0108052",
          "releaseDate": "1993-11-30T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1993,
          "releaseMonth": 10,
          "releaseDay": 30
        },
        "1994": {
          "title": "Forrest Gump",
          "imdbId": "tt0109830",
          "releaseDate": "1994-06-23T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1994,
          "releaseMonth": 5,
          "releaseDay": 23
        },
        "1995": {
          "title": "Braveheart",
          "imdbId": "tt0112573",
          "releaseDate": "1995-05-19T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1995,
          "releaseMonth": 4,
          "releaseDay": 19
        },
        "1996": {
          "title": "The English Patient",
          "imdbId": "tt0116209",
          "releaseDate": "1996-11-12T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1996,
          "releaseMonth": 10,
          "releaseDay": 12
        },
        "1997": {
          "title": "Titanic",
          "imdbId": "tt0120338",
          "releaseDate": "1997-12-14T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1997,
          "releaseMonth": 11,
          "releaseDay": 14
        },
        "1998": {
          "title": "Shakespeare in Love",
          "imdbId": "tt0138097",
          "releaseDate": "1998-12-08T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1998,
          "releaseMonth": 11,
          "releaseDay": 8
        },
        "1999": {
          "title": "American Beauty",
          "imdbId": "tt0169547",
          "releaseDate": "1999-09-08T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 1999,
          "releaseMonth": 8,
          "releaseDay": 8
        },
        "2000": {
          "title": "Gladiator",
          "imdbId": "tt0172495",
          "releaseDate": "2000-05-01T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2000,
          "releaseMonth": 4,
          "releaseDay": 1
        },
        "2001": {
          "title": "A Beautiful Mind",
          "imdbId": "tt0268978",
          "releaseDate": "2001-12-13T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2001,
          "releaseMonth": 11,
          "releaseDay": 13
        },
        "2002": {
          "title": "Chicago",
          "imdbId": "tt0299658",
          "releaseDate": "2002-12-18T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2002,
          "releaseMonth": 11,
          "releaseDay": 18
        },
        "2003": {
          "title": "The Lord of the Rings: The Return of the King",
          "imdbId": "tt0167260",
          "releaseDate": "2003-12-17T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2003,
          "releaseMonth": 11,
          "releaseDay": 17
        },
        "2004": {
          "title": "Million Dollar Baby",
          "imdbId": "tt0405159",
          "releaseDate": "2004-12-15T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2004,
          "releaseMonth": 11,
          "releaseDay": 15
        },
        "2005": {
          "title": "Crash",
          "imdbId": "tt0375679",
          "releaseDate": "2005-04-26T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2005,
          "releaseMonth": 3,
          "releaseDay": 26
        },
        "2006": {
          "title": "The Departed",
          "imdbId": "tt0407887",
          "releaseDate": "2006-09-26T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2006,
          "releaseMonth": 8,
          "releaseDay": 26
        },
        "2007": {
          "title": "No Country for Old Men",
          "imdbId": "tt0477348",
          "releaseDate": "2007-11-04T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2007,
          "releaseMonth": 10,
          "releaseDay": 4
        },
        "2008": {
          "title": "Slumdog Millionaire",
          "imdbId": "tt1010048",
          "releaseDate": "2008-11-12T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2008,
          "releaseMonth": 10,
          "releaseDay": 12
        },
        "2009": {
          "title": "The Hurt Locker",
          "imdbId": "tt1655246",
          "releaseDate": "2009-01-29T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2009,
          "releaseMonth": 0,
          "releaseDay": 29
        },
        "2010": {
          "title": "The King's Speech",
          "imdbId": "tt1504320",
          "releaseDate": "2010-12-24T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2010,
          "releaseMonth": 11,
          "releaseDay": 24
        },
        "2011": {
          "title": "The Artist",
          "imdbId": "tt1655442",
          "releaseDate": "2011-11-23T05:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2011,
          "releaseMonth": 10,
          "releaseDay": 23
        },
        "2012": {
          "title": "Argo",
          "imdbId": "tt1024648",
          "releaseDate": "2012-10-04T04:00:00.000Z",
          "releaseCountry": "USA",
          "releaseYear": 2012,
          "releaseMonth": 9,
          "releaseDay": 4
        }
      }
    ];
    this.serialDetails = [
      {
        "title": "Friends",
        "serial_id": "2222",
        "year": "1994",
        "Genre": "Comedy"
      },
      {
        "title": "100",
        "serial_id": "3333",
        "year": "2014",
        "Genre": "Action"
      },
      {
        "title": "Lost in Space",
        "serial_id": "4444",
        "year": "2018",
        "Genre": "Sci Fi"
      },
      {
        "title": "Walking Dead",
        "serial_id": "5555",
        "year": "2010",
        "Genre": "Sci Fi"
      },
      {
        "title": "Young Sheldon",
        "serial_id": "6666",
        "year": "2016",
        "Genre": "Comedy"
      },
      {
        "title": "Stranger Things",
        "serial_id": "7777",
        "year": "2018",
        "Genre": "Sci Fi"
      }
    ];
  }

  public ngOnInit(): void {
      
  }
}