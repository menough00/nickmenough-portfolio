from flask import Flask, render_template
from datetime import datetime


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
@app.route('/usabilathonWorkvia')
def usabilathon_workiva():
    return render_template('usabilathonWorkvia.html')
@app.context_processor
def inject_now():
    return {'now': datetime.now()}


@app.route('/prism')
def prism():
    return render_template('prism.html')


@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/designs')
def designs():
    return render_template('designs.html')
@app.route('/vehisure')
def vehisure():
    return render_template('vehisure.html')
@app.route('/siloguard')
def SiloGuard():
    return render_template('siloguard.html')
@app.route('/smartcart')
def SmartCart():
    return render_template('/smartcart.html')
@app.route('/health')
def Health():
    return render_template('/health.html')
@app.route('/pets')
def pets():
    return render_template('pets.html')

if __name__ == '__main__':
    app.run(debug=True)
