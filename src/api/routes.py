"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# -------------Pro User Info------------------

@api.route('/pro/<int:id>', methods=['GET'])
def get_account_user(acct_id):
    account_user = AccountUser.query.filter_by(id=acct_id).first()
    user_info = list(map(lambda x: x.serialize(), account_user))

    return jsonify(user_info), 200

@api.route('/pro', methods=['POST'])
def post_account_user():
    body=request.get_json()
    user_info= AccountUser(email=body['email'], password=body['password'], profile_picture=body['profilePicture'], name=body['name'], phone=body['phone'], background=body['background'], user_type=body['userType'], about=body['about'], services=body['services'], prices=body['prices'], zip_code=body['zip_code'], class_format=body['format'], availability_monday=body['availability.monday'], availability_tuesday=body['availability.tuesday'], availability_wednesday=body['availability.wednesday'], availability_thursday=body['availability.thursday'], availability_friday=body['availability.friday'], availability_saturday=body['availability.saturday'], availability_sunday=body['availability.sunday'])

    db.session.add(user_info)
    db.session.commit()

    return jsonify("Successfully added professional user"), 200

# -------------Client User Info------------------

@api.route('/client/<int:id>', methods=['GET'])
def get_client_user(acct_id):
    client_user = ClientUser.query.filter_by(id=acct_id).first()
    user_info = list(map(lambda x: x.serialize(), client_user))

    return jsonify(user_info), 200

@api.route('/client', methods=['POST'])
def post_account_user():
    body=request.get_json()
    user_info= ClientUser(email=body['email'], password=body['password'], name=body['name'], phone=body['phone'], user_type=body['userType'], zip_code=body['zip_code'])

    db.session.add(user_info)
    db.session.commit()

    return jsonify("Successfully added client user"), 200

# -------------Calendar Info------------------

@api.route('/pro_appts/<int:id>', methods=['GET'])
def get_appts(acct_id):
    appts = CalendarEntries.query.filter_by(provider_id=acct_id).first()
    appt_list = list(map(lambda x: x.serialize(), appts))

    return jsonify(appt_list), 200

@api.route('/pro_appts/<int:id>/', methods=['POST'])
def post_appt(acct_id):
    body=request.get_json()
    appt_info= CalendarEntries(provider_id=body['provider_id'], client_id=body['client_id'], client_name=body['text'], start_date=body['startDate'], end_date=body['endDate'], all_day=body['allDay'], description=body['description'], recurrence_rule=body['recurrenceRule'])

    db.session.add(appt_info)
    db.session.commit()

    appts = CalendarEntries.query.filter_by(provider_id=acct_id).first()
    appt_list = list(map(lambda x: x.serialize(), appts))

    return jsonify(appt_list), 200

@api.route('/pro_appts/<int:id>/<int:id>/', methods=['DELETE'])
def delete_appt(acct_id, appt_id):
    appts = CalendarEntries.query.filter_by(id=appt_id).first()

    db.session.delete(appts)
    db.session.commit()

    appts = CalendarEntries.query.filter_by(provider_id=acct_id).first()
    appt_list = list(map(lambda x: x.serialize(), appts))

    return jsonify(appt_list), 200
