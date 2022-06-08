from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


# ---------------------User Types--------------------

class AccountUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile_picture = db.Column(db.String(200), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    background = db.Column(db.String(80), unique=False, nullable=False)
    user_type = db.Column(db.String(80), unique=False, nullable=False)
    about = (db.Text(), nullable=False)
    services = db.Column(db.String(80), unique=False, nullable=False)
    prices = db.Column(db.Integer, nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    class_format = db.Column(db.String(80), unique=False, nullable=False)
    availability_monday = db.Column(db.String(80), unique=False, nullable=False)
    availability_tuesday = db.Column(db.String(80), unique=False, nullable=False)
    availability_wednesday = db.Column(db.String(80), unique=False, nullable=False)
    availability_thursday = db.Column(db.String(80), unique=False, nullable=False)
    availability_friday = db.Column(db.String(80), unique=False, nullable=False)
    availability_saturday = db.Column(db.String(80), unique=False, nullable=False)
    availability_sunday = db.Column(db.String(80), unique=False, nullable=False)


    def __repr__(self):
        return '<AccountUser %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
            "profilePicture" : self.profile_picture,
            "name" : self.name,
            "phone" : self.phone,
            "background" : self.background,
            "userType" : self.user_type,
            "about" : self.about,
            "services" : self.services,
            "prices" : self.prices,
            "zip_code" : self.zip_code,
            "format" : self.class_format,
            "availability.monday": self.availability_monday, 
            "availability.tuesday" : self.availability_tuesday,
            "availability.wednesday" : self.availability_wednesday,
            "availability.thursday" : self.availability_thursday,
            "availability.friday" : self.availability_friday,
            "availability.saturday" : self.availability_saturday,
            "availability.sunday" : self.availability_sunday,
        }

class ClientUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    userType = db.Column(db.String(80), unique=False, nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)


    def __repr__(self):
        return '<ClientUser %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
            "name" : self.name,
            "phone" : self.phone,
            "userType" : self.userType,
            "zip_code" : self.zip_code,
            "format" : self.class_format,
        }



# --------------------- Other Info to Store--------------------

class CalendarEntries(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    provider_id=db.Column(db.Integer, db.ForeignKey('AccountUser.id'))
    client_id=db.Column(db.Integer, db.ForeignKey('ClientUser.id'))
    client_name = db.Column(db.String(120), unique=False, nullable=False)
    start_date = db.Column(db.String(120), unique=False, nullable=False)
    end_date = db.Column(db.String(120), unique=False, nullable=False)
    all_day = db.Column(db.Boolean(), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    recurrence_rule = db.Column(db.String(120), unique=False, nullable=False)


    def __repr__(self):
        return '<CalendarEntries %r>' % self.email

    def serialize(self):
        return {
            "id" : self.id,
            "provider_id" : self.provider_id,
            "client_id" : self.client_id,
            "text" : self.client_name,
            "startDate" : self.start_date,
            "endDate" : self.end_date,
            "allDay" : self.all_day,
            "description" : self.description,
            "recurrenceRule" : self.recurrence_rule,
        }