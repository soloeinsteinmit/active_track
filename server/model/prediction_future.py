import numpy as np
import pandas as pd




def predict_future_days(model, initial_data, scaler, seq_length=7, num_days=1):
    """
    Predicts future values using the trained model and initial data.

    Args:
        model: The trained Keras model.
        initial_data: A pandas DataFrame containing the initial data (at least seq_length rows).
        scaler: The scaler object used to preprocess the original data.
        seq_length: The length of the input sequence for the model.
        num_days: The number of future days to predict.

    Returns:
        A pandas DataFrame containing the predicted values for the specified number of days.
    """

    # Ensure initial_data has at least seq_length rows
    if len(initial_data) < seq_length:
        raise ValueError(f"initial_data must have at least {seq_length} rows.")

    # Scale the initial data using the scaler
    scaled_initial_data = scaler.fit_transform(initial_data)

    # Convert scaled data to a list for easier manipulation
    scaled_data_list = list(scaled_initial_data)

    predictions = []

    for _ in range(num_days):
        # Get the last 'seq_length' scaled data points
        input_seq = np.array(scaled_data_list[-seq_length:]).reshape(1, seq_length, -1)

        # Predict the next day (returns a scaled prediction)
        predicted_scaled = model.predict(input_seq)

        # Append the scaled prediction to the data list for the next prediction
        scaled_data_list.append(predicted_scaled[0])

        # Inverse transform the prediction to get original scale
        predicted = scaler.inverse_transform(predicted_scaled)[0]

        # Handle time feature roll-over logic
        # For simplicity, assume minute rolls over after 59, hour after 23, day_of_week after 6 (Sunday to Monday)
        last_time_features = initial_data.iloc[-1][['hour', 'minute', 'day_of_week']].copy()

        # Update minute
        last_time_features['minute'] += 1
        if last_time_features['minute'] >= 60:
            last_time_features['minute'] = 0
            last_time_features['hour'] += 1

        # Update hour
        if last_time_features['hour'] >= 24:
            last_time_features['hour'] = 0
            last_time_features['day_of_week'] += 1

        # Update day_of_week
        if last_time_features['day_of_week'] >= 7:
            last_time_features['day_of_week'] = 0

        # Replace the predicted time features with the updated ones
        predicted[:3] = last_time_features

        # Append the prediction to the predictions list
        predictions.append(predicted)

    # Define column names based on your original data
    columns = ['hour', 'minute', 'day_of_week', 'heart_rate', 'spo2', 'temperature']

    # Convert the predictions list to a DataFrame
    predictions_df = pd.DataFrame(predictions, columns=columns)

    return predictions_df

