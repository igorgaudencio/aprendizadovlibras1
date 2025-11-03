import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  // HTML básico com VLibras
  const localHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VLibras Básico</title>
    
    <!-- VLibras Widget -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
        new VLibras.Widget('https://vlibras.gov.br/app');
    </script>
</head>
<body>
    <h1>VLibras Básico</h1>
    <p>Digite texto e use o botão do VLibras para traduzir.</p>
    
    <!-- Widget do VLibras -->
    <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>
</body>
</html>
  `;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <WebView
          originWhitelist={["*"]}
          source={{ html: localHTML }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});