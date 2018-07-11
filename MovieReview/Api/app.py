from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/getSearchDetails', methods=['GET'])
def getSearchDetails():
    searchDetails = [
      {
        "title": "Baahubali",
        "movie_id": "1234",
        "year": "2015",
        "genre": "Action"
      },
      {
        "title": "Baahubali2",
        "movie_id": "1235",
        "year": "2018",
        "genre": "Action"
      },
      {
        "title": "Deadpool2",
        "movie_id": "1236",
        "year": "2017",
        "genre": "Comedy"
      },
      {
        "title": "Dark Night",
        "movie_id": "1237",
        "year": "2013",
        "genre": "Adventure"
      },
      {
        "title": "Chalo",
        "movie_id": "1238",
        "year": "2019",
        "genre": "Romance"
      },
      {
        "title": "Avengers",
        "movie_id": "1239",
        "year": "2014",
        "genre": "Action"
      }
    ]
    return jsonify(searchDetails)

@app.route('/getMovieDetails', methods=['GET'])
def getMovieDetails():
    movieDetails = [
      {
        "title": "Baahubali",
        "movie_id": "1234",
        "year": "2015",
        "genre": "Action"
      },
      {
        "title": "Baahubali2",
        "movie_id": "1235",
        "year": "2018",
        "genre": "Action"
      },
      {
        "title": "Deadpool2",
        "movie_id": "1236",
        "year": "2017",
        "genre": "Comedy"
      },
      {
        "title": "Dark Night",
        "movie_id": "1237",
        "year": "2013",
        "genre": "Adventure"
      },
      {
        "title": "Chalo",
        "movie_id": "1238",
        "year": "2019",
        "genre": "Romance"
      },
      {
        "title": "Avengers",
        "movie_id": "1239",
        "year": "2014",
        "genre": "Action"
      }
    ]
    return jsonify(movieDetails)



if __name__ == "__main__":
    app.run()