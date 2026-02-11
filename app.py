from flask import Flask
import sqlite3

app = Flask(__name__)


@app.route("/")
def home():
    # Home Page

    con = sqlite3.connect("recipes.db")
    cursor = con.cursor()

    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table'")

    for row in cursor.fetchall():
        print(row[0])

    return "Hello again!"


if __name__ == "__main__":
    app.run(debug=True)
