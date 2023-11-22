import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InvoiceScreen = ({ navigation }) => {
  // Đường dẫn của hình ảnh máy in hóa đơn
  const invoiceImage = require('./path/to/invoice-image.jpg');

  // Hàm xử lý tải xuống
  const handleDownload = () => {
    // Thực hiện tải xuống ở đây (ví dụ: mở cửa sổ tải xuống)
    alert('Đang tải xuống hóa đơn...');
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh máy in hóa đơn */}
      <Image source={invoiceImage} style={styles.invoiceImage} />

      {/* Dòng văn bản */}
      <Text style={styles.text}>Payment Success, Yayy!</Text>
      <Text style={styles.text}>we will send order details and invoice in</Text>
      <Text style={styles.text}>your contact no. and registered email</Text>

      {/* Nút Tải xuống */}
      <TouchableOpacity onPress={handleDownload} style={styles.downloadButton}>
        <Text style={styles.buttonText}>Download Invoice</Text>
      </TouchableOpacity>

      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.buttonText}>Back</Text>
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
  invoiceImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 2,
  },
  downloadButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  
});

export default InvoiceScreen;
