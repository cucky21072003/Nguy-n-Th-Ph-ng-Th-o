import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  // Hàm xử lý thanh toán
  const handlePayment = () => {
    // Thực hiện thanh toán ở đây
    // Có thể sử dụng thư viện thanh toán của bên thứ ba hoặc tích hợp API thanh toán của ứng dụng
    alert('Thanh toán thành công!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Màn Hình Thanh Toán</Text>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      {/* Nút Thanh toán */}
      <TouchableOpacity onPress={handlePayment} style={styles.paymentButton}>
        <Text style={styles.buttonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PaymentScreen;
