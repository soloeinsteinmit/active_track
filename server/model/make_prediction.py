import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model
import prediction_future
import os
from keras.metrics import MeanAbsoluteError

scaler = MinMaxScaler(feature_range=(0, 1))

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

# Define the column names
columns = ['hour', 'minute', 'day_of_week', 'heart_rate', 'spo2', 'temperature']
# Load the machine learning model, words, and classes

# Check if the model file exists
model_path = 'server/model/active_track_mae2_final_model.h5'
if not os.path.exists(model_path):
    raise FileNotFoundError(f"File not found: {model_path}")
else:
    print(f"File found: {model_path}")
    

custom_objects = {'mae': MeanAbsoluteError()}
model = load_model(model_path, custom_objects=custom_objects)

# Generate random test data for 7 days
np.random.seed(42)  # For reproducibility
test_data_7_days = pd.DataFrame({
    'hour': np.random.randint(0, 24, size=7),
    'minute': np.random.randint(0, 60, size=7),
    'day_of_week': np.random.randint(0, 7, size=7),
    'heart_rate': np.random.randint(60, 90, size=7),
    'spo2': np.random.uniform(90, 100, size=7),
    'temperature': np.random.uniform(36.0, 37.5, size=7)
}, columns=columns)

# Display the test data
print("7-Day Test Data:")
test_data_7_days


tdays = len(test_data_7_days)

print("7-Day Test Data:")
print(test_data_7_days)

# Number of future days to predict
num_future_days = 2

# Predict the next 2 days
predicted_future = prediction_future.predict_future_days(model, test_data_7_days, scaler, seq_length=len(test_data_7_days), num_days=num_future_days)

print("\nPredicted Future Days:")
print(predicted_future)