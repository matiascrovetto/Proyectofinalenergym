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
migrate = Migrate(app, db)
jwt = JWTManager(app)
CORS(app)

@app.route('/')
def main():
    return jsonify({
        "message": "API ok"
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
        return jsonify({ "msg": "Username or Password are incorrects"}), 401

    if not check_password_hash(user.password, password):
        return jsonify({ "msg": "Username or Password are incorrects"}), 401

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
    user.profile = profile

    if roles:
        for role_id in roles:
            role = Role.query.get(role_id)
            if role:
                user.roles.append(role)

    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity=user.id)

    data = {
        "access_token": access_token,
        "user": user.serialize_with_profile()
    }

    return jsonify(data), 200

@app.route('/users', methods=['GET', 'POST'])
def obtener_crear_users():
    if request.method == 'GET':
        users = User.query.all()
        users = [user.serialize_with_profile() for user in users]
        return jsonify(users)

    if request.method == 'POST':
        username = request.json.get('username')
        password = request.json.get('password')
        is_active = request.json.get('is_active', True)
        biography = request.json.get('biography', "")
        instagram = request.json.get('instagram', "")
        roles = request.json.get('roles')

        user = User()
        user.username = username
        user.password = generate_password_hash(password)
        user.is_active = is_active

        profile = Profile()
        profile.biography = biography
        profile.instagram = instagram

        if roles:
            for role_id in roles:
                role = Role.query.get(role_id)
                if role:
                    user.roles.append(role)

        user.profile = profile

        db.session.add(user)
        db.session.commit()

        return jsonify(user.serialize_with_profile()), 201

@app.route('/profiles', methods=['POST'])
def create_profile():
    print(request.get_json())
    username = request.json.get('username')
    usuario = request.json.get('usuario')
    direccion = request.json.get('direccion')
    edad = request.json.get('edad')
    sexo = request.json.get('sexo')
    estatura = request.json.get('estatura')
    peso = request.json.get('peso')
    enfermedad = request.json.get('enfermedad')
    user = User.query.filter_by(username=username).first()
    
    profile = Profile(usuario=usuario, direccion=direccion, edad=edad, sexo=sexo, estatura=estatura, peso=peso, enfermedad=enfermedad, user_id=user.id)
    db.session.add(profile)
    db.session.commit()

    return 'Perfil creado con éxito'

@app.route('/profiles', methods=['GET'])
def get_profiles():
    profiles = Profile.query.all()
    results = []

    for profile in profiles:
        profile_data = {
            'id': profile.id,
            'usuario': profile.usuario,
            'direccion': profile.direccion,
            'edad': profile.edad,
            'sexo': profile.sexo,
            'estatura': profile.estatura,
            'peso': profile.peso,
            'enfermedad': profile.enfermedad
        }
        results.append(profile_data)

    return {'profiles': results}

@app.route('/profiles/<int:id>', methods=['PUT'])
def update_profile(id):
    profile = Profile.query.get(id)

    if not profile:
        return jsonify({ "msg": "Profile not found" }), 404

 
    updated_profile_data = request.get_json()
   
    profile.usuario = updated_profile_data.get('usuario', profile.usuario)
    profile.direccion = updated_profile_data.get('direccion', profile.direccion)
    profile.edad = updated_profile_data.get('edad', profile.edad)
    profile.sexo = updated_profile_data.get('sexo', profile.sexo)
    profile.estatura = updated_profile_data.get('estatura', profile.estatura)
    profile.peso = updated_profile_data.get('peso', profile.peso)
    profile.enfermedad = updated_profile_data.get('enfermedad', profile.enfermedad)

   
    db.session.commit()

    return jsonify({ "msg": "Profile updated successfully" }), 200





if __name__ == '__main__':
    app.run()
