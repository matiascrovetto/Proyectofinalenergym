import os
from datetime import datetime
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, get_jwt_identity, jwt_required, create_access_token
from models import db, User, Profile, Role
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['JWT_SECRET_KEY'] = 'secret-key'

db.init_app(app)
Migrate(app, db) 
jwt = JWTManager(app)
CORS(app)

@app.route('/')
def main():
    return jsonify({
        "message": "API OK"
    }), 200

@app.route('/login', methods=['POST'])
def login():

    username = request.json.get('username')
    password = request.json.get('password')

    if not username:
        return jsonify({ "msg": "Username is required"}), 422

    if not password:
        return jsonify({ "msg": "Password is required"}), 422

    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({ "msg": "Username/Password are incorrects"}), 401

    if not check_password_hash(user.password, password):
        return jsonify({ "msg": "Username/Password are incorrects"}), 401

    access_token = create_access_token(identity=user.id)

    data = {
        "access_token": access_token,
        "user": user.serialize_with_profile()
    }

    return jsonify(data), 200

@app.route('/register', methods=['POST'])
def register():

    
    username = request.json.get('username')
    password = request.json.get('password')

  
    roles = request.json.get('roles')

    if not username:
        return jsonify({ "msg": "Username is required"}), 422

    if not password:
        return jsonify({ "msg": "Password is required"}), 422

    user = User.query.filter_by(username=username).first()

    if user:
        return jsonify({ "msg": "User already exists"}), 400

    
    user = User()
    user.username = username
    user.password = generate_password_hash(password)
    user.is_active = True

    profile = Profile()

    if len(roles) > 0:
        for roles_id in roles:
            role = Role.query.get(roles_id)
            user.roles.append(role)

    
    user.profile = profile
    user.save()

   
    access_token = create_access_token(identity=user.id)

    data = {
        "access_token": access_token,
        "user": user.serialize_with_profile()
    }

    return jsonify(data), 200

@app.route('/users', methods=['GET', 'POST'])
@jwt_required() 
def obtener_crear_users():
    if request.method == 'GET':
        users = User.query.all()
        users = list(map(lambda user: user.serialize_with_profile(), users))
        return jsonify(users)

    if request.method == 'POST':
      
        username = request.json.get('username')
        password = request.json.get('password')
        is_active = request.json.get('is_active', True)
     
        biography = request.json.get('biography', "")
        github = request.json.get('github', "")
        linkedin = request.json.get('linkedin', "")
        instagram = request.json.get('instagram', "")

        
        roles = request.json.get('roles')

        
            
        user = User()
        user.username = username
        user.password = generate_password_hash(password)
        user.is_active = is_active

        profile = Profile()
        profile.biography = biography
        profile.github = github
        profile.linkedin = linkedin
        profile.instagram = instagram

        if len(roles) > 0:
            for roles_id in roles:
                role = Role.query.get(roles_id)
                user.roles.append(role)

        
        user.profile = profile
        user.save()

        return jsonify(user.serialize_with_profile()), 201



if __name__ == '__main__':
    app.run()