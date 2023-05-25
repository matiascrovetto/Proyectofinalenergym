from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

roles_users = db.Table(
    'roles_users',
    db.Column('role_id', db.Integer, db.ForeignKey('roles.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    profile = db.relationship('Profile', uselist=False, backref="user", cascade="all, delete-orphan")
    roles = db.relationship('Role', secondary=roles_users, backref=db.backref('users', lazy='dynamic'))

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "is_active": self.is_active
        }

    def serialize_with_profile(self):
        return {
            "id": self.id,
            "username": self.username,
            "is_active": self.is_active,
            "profile": self.profile.serialize()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100))
    direccion = db.Column(db.String(100))
    edad = db.Column(db.Integer)
    sexo = db.Column(db.String(20))
    estatura = db.Column(db.Integer)
    peso = db.Column(db.Integer)
    enfermedad = db.Column(db.String(200))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)

    def serialize(self):
        return {
            "id": self.id,
            "usuario": self.usuario,
            "direccion": self.direccion,
            "edad": self.edad,
            "sexo": self.sexo,
            "estatura": self.estatura,
            "peso": self.peso,
            "enfermedad": self.enfermedad,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
