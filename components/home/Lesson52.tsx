import { styles } from "@/app/(tabs)/index.styles";
import * as WebBrowser from "expo-web-browser";
import { ActivityIndicator, Linking, Pressable, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export function Lesson52() {
  const webUrl = "https://kiwon2025portfolio.netlify.app";

  // 외부 기본 브라우저에서 웹페이지 열기
  function handleOpenExternalBrowser() {
    Linking.openURL(webUrl);
  }

  // 앱에서 브라우저 화면 열기
  async function handleOpenWebBrowser() {
    await WebBrowser.openBrowserAsync(webUrl);
  }

  return (
    <View style={[styles.lesson, { flex: 1 }]}>
      <Text style={styles.lessonTitle}>52차시 - 앱에서 웹페이지 여는 방법 비교하기</Text>

      {/* 외부 기본 브라우저로 열기 */}
      <Pressable
        onPress={handleOpenExternalBrowser}
        style={{
          padding: 12,
          marginBottom: 10,
          backgroundColor: "#EAF1FF",
        }}
      >
        <Text>외부 브라우저로 열기</Text>
      </Pressable>

      {/* 앱에서 브라우저 화면 열기 */}
      <Pressable
        onPress={handleOpenWebBrowser}
        style={{
          padding: 12,
          marginBottom: 20,
          backgroundColor: "#EAF1FF",
        }}
      >
        <Text>WebBrowser로 열기</Text>
      </Pressable>

      {/* 앱 화면 내부에서 웹페이지 표시 */}
      <WebView
        source={{
          uri: webUrl,
        }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator></ActivityIndicator>
              <Text>웹페이지 불러오는 중</Text>
            </View>
          );
        }}
      ></WebView>
    </View>
  );
}
