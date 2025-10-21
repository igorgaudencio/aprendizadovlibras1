import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AloMundo VLibras</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            .container {
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                text-align: center;
                max-width: 600px;
                width: 100%;
            }
            h1 {
                color: #333;
                margin-bottom: 20px;
                font-size: 2.5em;
            }
            p {
                color: #666;
                font-size: 1.2em;
                line-height: 1.6;
                margin-bottom: 30px;
            }
            .highlight {
                background: #ffeb3b;
                padding: 2px 5px;
                border-radius: 3px;
            }
            .content {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 10px;
                margin: 20px 0;
                border-left: 4px solid #667eea;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>👋 AloMundo VLibras!</h1>
            
            <div class="content">
                <p>Este é um aplicativo React Native com <span class="highlight">TypeScript</span> integrado com o VLibras para acessibilidade.</p>
                <p>Use o widget do VLibras no canto da tela para traduzir o conteúdo para Libras!</p>
            </div>

            <div class="content">
                <h2>✨ Conteúdo Exemplo</h2>
                <p><strong>Bem-vindo ao React Native!</strong></p>
                <p>Este aplicativo demonstra a integração com a plataforma VLibras governamental para garantir acessibilidade em Língua Brasileira de Sinais.</p>
                <p>Todos os textos desta página podem ser traduzidos para Libras usando o botão flutuante do VLibras.</p>
            </div>

            <div class="content">
                <h3>🚀 Recursos Incluídos:</h3>
                <p>• Widget oficial do VLibras</p>
                <p>• Interface responsiva</p>
                <p>• Design moderno</p>
                <p>• Totalmente acessível</p>
            </div>
        </div>

        <!-- VLibras Widget -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
        
        <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
        <script>
            new window.VLibras.Widget('https://vlibras.gov.br/app');
        </script>
    </body>
    </html>
  `;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <WebView
          originWhitelist={["*"]}
          source={{ html }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
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