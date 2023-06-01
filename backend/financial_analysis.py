import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

"""Read the data"""

data = pd.read_csv("./data/SampleSuperstore.csv")

# data.head()

# data.info()

data.duplicated().sum()

data.drop_duplicates(inplace=True)

data.info()

"""Drop Unwanted Columns """

data.drop(["Postal Code"], axis=1, inplace=True)
data.drop(["Country"], axis=1, inplace=True)
data.drop(["City"], axis=1, inplace=True)

data.info()

"""Correlation between the data"""

# data.corr()

# sns.heatmap(data.corr(), annot=True)

"""Exploratory Data Analysis

Different Segements
"""

data["Segment"].value_counts()

sns.countplot(x=data['Segment'])

"""Category of the items """

data["Category"].value_counts()

# sns.countplot(x=data['Category'])

"""Subcategories"""

data["Sub-Category"].value_counts()


def graph_to_img():
    # Specify the filename and file format (e.g., 'plot.png')
    plt.savefig('./assets/plot.png')


plt.figure(figsize=(15, 15))
plt.pie(data["Sub-Category"].value_counts(),
        labels=data["Sub-Category"].value_counts().index, autopct="%2f")
# plt.show()

"""Profit"""

st_profit = data.groupby(["Region"])["Profit"].sum().nlargest(20)

st_profit

plt.figure(figsize=(15, 8))
# st_profit.plot.bar()

sns.lineplot(data=data, x="Discount", y="Profit")

# data.plot(kind="scatter", x="Sales", y="Profit",
#           c="Discount", colormap="Set1", figsize=(10, 10))

data1 = data.groupby("Region")[["Sales", "Profit"]].sum(
).sort_values(by="Sales", ascending=False)
data1[:].plot.bar(color=["Green", "Red"], figsize=(20, 12))
plt.title("Profit-Loss and Sales across Regions")
# plt.show()

"""Profit-Loss and Sales across Region"""

data1 = data.groupby("Region")[["Sales", "Profit"]].sum(
).sort_values(by="Sales", ascending=False)
data1[:].plot.bar(color=["Green", "Red"], figsize=(10, 7))
plt.title("Profit-Loss and Sales across Region")
# plt.show()
# x = plt.show()
# print(type(x))

# Specify the filename and file format (e.g., 'plot.png')
# plt.savefig('./assets/plot.png')

# Display the saved image
# plt.show()


"""Printing the required values """

revenue = data['Sales'].sum()

# Calculate profit
profit = data['Profit'].sum()

# Calculate profit margin
profit_margin = (profit / revenue) * 100

# Calculate average sales per order
average_sales_per_order = data['Sales'].mean()

# Calculate average profit per order
average_profit_per_order = data['Profit'].mean()

# Print the financial metrics
# print('Revenue:', revenue)
# print('Profit:', profit)
# print('Profit Margin:', profit_margin)
# print('Average Sales per Order:', average_sales_per_order)
# print('Average Profit per Order:', average_profit_per_order)


# Load the dataset

# Calculate revenue
revenue = data['Sales'].sum()

# Calculate profit
profit = data['Profit'].sum()

# Calculate profit margin
profit_margin = (profit / revenue) * 100

# Calculate average sales per order
average_sales_per_order = data['Sales'].mean()

# Calculate average profit per order
average_profit_per_order = data['Profit'].mean()

# Calculate discount rate
discount_rate = (data['Discount'].sum() / revenue) * 100

# cogs = sales - profit
profit_sum = revenue - data['Profit'].sum()

# Calculate gross profit
gross_profit = revenue - profit_sum

# Calculate gross profit margin
gross_profit_margin = (gross_profit / revenue) * 100


# Print the financial metrics
# print('Revenue:', revenue)
# print('Profit:', profit)
# print('Profit Margin:', profit_margin)
# print('Average Sales per Order:', average_sales_per_order)
# print('Average Profit per Order:', average_profit_per_order)
# print('Discount Rate:', discount_rate)
# print('Gross Profit:', gross_profit)
# print('Gross Profit Margin:', gross_profit_margin)


def print_data():
    return {"revenue": round(revenue, 2), "profit": round(profit, 2), "profit margin": round(profit_margin, 2), 'Average Sales per Order': round(average_sales_per_order, 2),
            'Average Profit per Order': round(average_profit_per_order, 2), 'Discount Rate': round(discount_rate, 2), 'Gross Profit': round(gross_profit, 2),
            'Gross Profit Margin': round(gross_profit_margin, 2)}