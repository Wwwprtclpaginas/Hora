from flask import Flask, render_template, jsonify
import random
import time

app = Flask(__name)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_time')
def generate_time():
    random_hour = random.randint(9, 17)  # Genera una hora aleatoria entre 9 y 17
    random_minute = random.randint(0, 59)
    random_second = random.randint(0, 59)
    time_str = f"{random_hour:02}:{random_minute:02}:{random_second:02}"
    return jsonify(time=time_str)

if __name__ == '__main__':
    app.run(debug=True)
