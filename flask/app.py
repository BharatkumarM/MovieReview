from flask import Flask, render_template, json, jsonify

app = Flask(__name__)


@app.route('/index')
def initial():
    return render_template('index.html')


@app.route('/getMovieDetails')
def movieDetails():
    data = {
        "title": "Hello"
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run()
