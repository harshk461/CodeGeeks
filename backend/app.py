from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import financial_analysis
import pickle
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
# import seaborn as sns
import matplotlib.pyplot as plt
from datetime import date, datetime
import base64
import os

app = Flask(__name__)

cors = CORS(app)
model = pickle.load(open('./models/model.pkl', 'rb'))
# model2 = pickle.load(open('model2.pkl', 'rb'))

# print(dir(model2))

# Load the dataset
data = pd.read_csv('./data/Budget.csv')

# Split the data into input features (X) and target variable (y)
X = data.drop('Budget', axis=1)
y = data['Budget']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Create and train the model
model_bud = LinearRegression()
model_bud.fit(X_train, y_train)

# Make predictions on the testing set
y_pred = model_bud.predict(X_test)

# Print the predicted budget and minimum resource allocation


def final_model(result):
    for budget, resources in zip(y_pred, X_test.values):
        for column, value in zip(X_test.columns, resources):
            result[column] = int(value)
        return result


@app.route('/')
def index():
    return {"test": "test"}

# date prediction


@app.route('/daily', methods=["GET", "POST"])
def date_predict():
    year, month, day = str(request.json['date']).split('-')
    year = int(year)
    month = int(month)
    day = int(day)
    date1 = [date(year, month, day)]

    # converting into dataframe
    single_argument = pd.DataFrame(date1, columns=['ds'])
    # single_argument
    # predicting the sales
    forecast3 = model.predict(single_argument)
    final_string = 'The sales for ' + \
        " "+str(forecast3['ds'][0].date()) + ' will be ' + \
        str(round(float(forecast3['yhat'][0]), 2))
    return {"result": final_string}

# month prediction


@app.route('/monthly', methods=["GET", "POST"])
def monthly_sales():
    month = int(request.json['month'])
    year = int(request.json['year'])

    start_date = date(year, month, 1)
    end_date = start_date + pd.DateOffset(months=1)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    df = pd.DataFrame(data={'ds': date_range})

    forecast2 = model.predict(df)
    # final_result = 'The sales for ' + str(forecast2['ds'][0].date()) + ' to ' + str(
    #     forecast2['ds'][len(forecast2)-1].date()) + ' will be ' + str(round(float(forecast2['yhat'][0]), 2))

    plt.plot('yhat', data=forecast2)
    plt.savefig('monthly.png')
    plt.clf()
    return send_file("monthly.png", mimetype='image/png')


# year prediction
@app.route('/yearly', methods=["GET", "POST"])
def yearly():
    year = int(request.json['year'])
    start_date = date(year, 1, 1)
    end_date = start_date + pd.DateOffset(months=12)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    df = pd.DataFrame(data={'ds': date_range})

    forecast1 = model.predict(df)

    plt.plot('yhat', data=forecast1)
    plt.savefig('yearly_sales.png')
    plt.clf()
    return send_file("yearly_sales.png", mimetype="image/png")


@app.route('/time-span', methods=["GET", "POST"])
def time_span():
    year1, month1, day1 = [int(i) for i in request.json["date1"].split("-")]
    year2, month2, day2 = [int(i) for i in request.json["date2"].split("-")]
    start_date = date(year1, month1, day1)
    end_date = date(year2, month2, day2)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    df = pd.DataFrame(data={'ds': date_range})
    forecast_span = model.predict(df)

    plt.plot('yhat', data=forecast_span)
    plt.savefig('range_sales.png')
    plt.clf()
    return send_file("range_sales.png", mimetype="image/png")


@app.route('/finance', methods=["GET"])
def finance():
    return financial_analysis.print_data()


@app.route('/budget', methods=["GET"])
def budget():
    result = {}
    final_model(result)
    return result


@app.route("/sales", methods=["GET", "POST"])
def sales():

    date = request.json['date']
    year, month, day = date.split('-')
    date_predict(int(year), int(month), int(day))
    return {"suces": "dj"}


if __name__ == '__main__':
    app.run(debug=True, port=5000)
