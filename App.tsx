import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  // HTML corrigido com VLibras
  const localHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    
    <!-- Importação dos ícones (Font Awesome) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        /* --- Configurações Globais --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --cor-azul-principal: #004a99;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        /* --- O Container Principal (Simula o Celular) --- */
        .mobile-container {
            width: 100%;
            max-width: 420px;
            background-color: #ffffff;
            border-radius: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        /* --- 1. Seção Superior (Azul) --- */
        .header-section {
            background-color: var(--cor-azul-principal);
            color: #ffffff;
            padding: 50px 20px 40px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 220px;
        }

        .logo-placeholder .logo-text-1 {
            font-size: 24px;
            font-weight: 500;
            letter-spacing: 0.5px;
            opacity: 0.9;
        }
        
        .logo-placeholder .logo-text-2 {
            font-size: 38px;
            font-weight: 700;
            letter-spacing: 1px;
        }

        /* --- 2. Seção de Login (Branca) --- */
        .login-section {
            background-color: #ffffff;
            padding: 40px 35px;
            margin-top: -25px;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .login-section h1 {
            color: var(--cor-azul-principal);
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 30px;
            width: 100%;
            text-align: left;
        }

        form {
            width: 100%;
        }

        .input-group {
            position: relative;
            margin-bottom: 20px;
        }

        .input-group input {
            width: 100%;
            padding: 18px 20px 18px 50px;
            border: none;
            background-color: #f7f8fa;
            border-radius: 12px;
            font-size: 16px;
            color: #333;
        }

        .input-group input::placeholder {
            color: #999;
        }

        .input-group .input-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #888;
            font-size: 18px;
        }

        .input-group .password-toggle-icon {
            position: absolute;
            right: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: #888;
            cursor: pointer;
        }

        .forgot-password {
            display: block;
            text-align: right;
            width: 100%;
            margin-top: -10px;
            margin-bottom: 30px;
            font-size: 14px;
            font-weight: 500;
            color: var(--cor-azul-principal);
            text-decoration: none;
        }

        .login-button {
            width: 100%;
            background-color: var(--cor-azul-principal);
            color: #ffffff;
            border: none;
            padding: 20px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 35px;
            transition: background-color 0.2s ease;
        }

        .login-button:hover {
            background-color: #003b7c;
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
        }

        .footer-links a {
            color: var(--cor-azul-principal);
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
        }

        .footer-links .create-account {
            font-weight: 600;
        }

        /* Estilos do VLibras */
        .vlibras-wrapper {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }
    </style>
</head>
<body>

    <div class="mobile-container">
        <header class="header-section">
            <div class="logo-placeholder">
                <div class="logo-text-1">MOSSORÓ</div>
                <div class="logo-text-2">DIGITAL</div>
            </div>
        </header>

        <main class="login-section">
            <h1>Entrar</h1>

            <form action="#">
                <div class="input-group">
                    <i class="fa-solid fa-envelope input-icon"></i>
                    <input type="email" placeholder="E-mail" required>
                </div>

                <div class="input-group">
                    <i class="fa-solid fa-lock input-icon"></i>
                    <input type="password" placeholder="Senha" required>
                    <i class="fa-solid fa-eye-slash password-toggle-icon"></i>
                </div>

                <a href="#" class="forgot-password">Esqueceu sua senha?</a>

                <button type="submit" class="login-button">Realizar login</button>
            </form>

            <div class="footer-links">
                <a href="#" class="create-account">Novo usuário? Criar conta</a>
                <a href="#" class="privacy-policy">Política e termos de privacidade</a>
            </div>
        </main>
    </div>

    <!-- Widget VLibras -->
    <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
    </div>

    <!-- Script do VLibras carregado no final do body -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    </script>

</body>
</html>`;

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
          onLoadEnd={() => console.log('WebView carregado completamente')}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
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