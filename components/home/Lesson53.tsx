import { styles } from "@/app/(tabs)/index.styles";
import { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export function Lesson53() {
  // WebView를 직접 조작하기 위한 ref
  const webViewRef = useRef<WebView>(null);

  // 웹에서 받은 메시지 저장
  const [webMessage, setWebMessage] = useState("");

  // WebView 안에 표시할 HTML
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>

      <body>
        <h2>WebView 화면</h2>

        <p id="message">
          React Native 메시지 대기 중
        </p>

        <button onclick="sendMessageToApp()">
          앱으로 메시지 보내기
        </button>

        <script>
          // 웹에서 React Native로 메시지 전송
          function sendMessageToApp() {
            window.ReactNativeWebView.postMessage(
              "웹에서 보낸 메시지"
            );
          }

          // React Native에서 받은 메시지를 웹 화면에 표시
          function receiveMessage(event) {
            document.getElementById("message").innerText =
              event.data;
          }

          // iOS 등에서 메시지 받기
          window.addEventListener(
            "message",
            receiveMessage
          );

          // Android 등에서 메시지 받기
          document.addEventListener(
            "message",
            receiveMessage
          );
        </script>
      </body>
    </html>
  `;

  // React Native에서 WebView로 메시지 전송
  function handleSendMessageToWeb() {
    webViewRef.current?.postMessage("React Native에서 보낸 메시지");
  }

  return (
    <View style={[styles.lesson, { flex: 1 }]}>
      <Text style={styles.lessonTitle}>53차시 - React Native와 WebView 사이에서 데이터 주고받기</Text>

      {/* 앱에서 웹으로 메시지 보내기 */}
      <Pressable
        onPress={handleSendMessageToWeb}
        style={{
          padding: 12,
          marginBottom: 10,
          backgroundColor: "#EAF1FF",
        }}
      >
        <Text>WebView로 메시지 보내기</Text>
      </Pressable>

      {/* 웹에서 받은 메시지 */}
      <Text>웹에서 받은 메시지: {webMessage}</Text>

      <WebView
        // WebView를 직접 조작하기 위한 ref
        ref={webViewRef}
        // 직접 작성한 HTML 표시
        source={{
          html: htmlContent,
        }}
        // 웹에서 React Native로 보낸 메시지 받기
        onMessage={(event) => {
          setWebMessage(event.nativeEvent.data);
        }}
        style={{ flex: 1 }}
      ></WebView>
    </View>
  );
}
