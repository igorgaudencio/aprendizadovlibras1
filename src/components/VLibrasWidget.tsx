import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';

interface VLibrasWidgetProps {
  text?: string;
}

export const VLibrasWidget: React.FC<VLibrasWidgetProps> = ({ 
  text = 'Olá Mundo' 
}) => {
  const openVLibrasSite = () => {
    WebBrowser.openBrowserAsync('https://vlibras.gov.br');
  };

  // HTML que simula o funcionamento do VLibras
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 20px;
          font-family: Arial, sans-serif;
          background: #f0f0f0;
        }
        .vlibras-container {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .text-to-translate {
          font-size: 18px;
          margin-bottom: 20px;
          text-align: center;
        }
        .avatar-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .info-text {
          text-align: center;
          margin-top: 15px;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="vlibras-container">
        <div class="text-to-translate" id="text-to-translate">
          ${text}
        </div>
        <div class="avatar-placeholder">
          Avatar do VLibras<br>
          (Emulação)
        </div>
        <div class="info-text">
          No app real, este componente se conectaria ao VLibras
        </div>
      </div>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tradutor VLibras</Text>
      
      <View style={styles.webviewContainer}>
        <WebView
          originWhitelist={['*']}
          source={{ html: htmlContent }}
          style={styles.webview}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={openVLibrasSite}>
        <Text style={styles.buttonText}>Abrir VLibras Oficial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  webviewContainer: {
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  webview: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});