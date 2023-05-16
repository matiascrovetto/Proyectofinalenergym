from flask import Flask



app=Flask(__name__)

app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///energyfinal.db'
db.init_app(app)



with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run()