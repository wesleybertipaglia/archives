from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from flask_migrate import Migrate
from flask_login import LoginManager

class Base(DeclarativeBase):
  pass

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from app.models import tables, forms
from app.controllers import default
