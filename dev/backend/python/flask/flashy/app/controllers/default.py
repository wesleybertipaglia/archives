from app import app, db, login
from flask import render_template, flash, redirect, url_for
from flask_login import login_user, logout_user
from app.models.tables import User
from app.models.forms import LoginForm

@login.user_loader
def load_user(id):
    return User.query.filter_by(id=id).first()

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login", methods=["POST", "GET"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user and user.password == form.password.data:
            login_user(user)
            flash('Logged in successfully.')
            return redirect(url_for("index"))
        else:
            flash('Invalid login.')
    else: 
        print(form.errors)  
    return render_template('login.html', form=form)

@app.route("/logout")
def logout():
    logout_user()
    flash("Logged out.")
    return redirect(url_for("index"))

@app.route("/profile/<user>")
@app.route("/profile", defaults={"user": None})
def profile(user):
    return render_template('profile.html', user=user)

@app.route("/test/create_user")
def test_create_user():
    i = User("fabioakita", "Fabio Akita", 
        "fabio@akitando.com", "12345678")    
    db.session.add(i)
    db.session.commit()

    return "Welcome " + i.username
    
@app.route("/test/read_user")
def test_read_user():
    r = User.query.filter_by(username="wesleyberti").all()
    return "1 user found: " + r[0].username
    
