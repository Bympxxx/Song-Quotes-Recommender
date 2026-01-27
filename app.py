from flask import Flask, render_template, request
import random

app = Flask(__name__)

# Predefined mood-based recommendations
MOOD_DATA = {
    "happy": {
        "songs": ["Happy - Pharrell Williams", "Can't Stop the Feeling - Justin Timberlake", "Good Vibrations - Beach Boys"],
        "quotes": ["Happiness is a journey, not a destination.", "Smile, it's contagious!"]
    },
    "sad": {
        "songs": ["Someone Like You - Adele", "Stay With Me - Sam Smith", "Fix You - Coldplay"],
        "quotes": ["Tough times don't last, tough people do.", "Every storm runs out of rain."]
    },
    "angry": {
        "songs": ["Break Stuff - Limp Bizkit", "Killing In The Name - Rage Against The Machine", "Duality - Slipknot"],
        "quotes": ["Anger is one letter short of danger.", "Keep calm and breathe."]
    },
    "relaxed": {
        "songs": ["Weightless - Marconi Union", "Clair de Lune - Debussy", "Sunset Lover - Petit Biscuit"],
        "quotes": ["Relax, nothing is under control anyway.", "Peace comes from within."]
    }
}

@app.route("/", methods=["GET", "POST"])
def index():
    mood = None
    songs = []
    quotes = []

    if request.method == "POST":
        mood_input = request.form.get("mood").lower()
        mood = mood_input if mood_input in MOOD_DATA else "relaxed"
        songs = MOOD_DATA[mood]["songs"]
        quotes = MOOD_DATA[mood]["quotes"]
        random.shuffle(songs)
        random.shuffle(quotes)

    return render_template("index.html", mood=mood, songs=songs, quotes=quotes)

if __name__ == "__main__":
    app.run(debug=True)
