import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Platform, Pressable, Text, View } from "react-native";

export function Lesson56() {
  // 버튼 클릭 후 보여줄 메시지
  const [message, setMessage] = useState("");

  // 현재 실행 중인 OS
  const currentPlatform = Platform.OS;

  // 현재 OS 버전
  const currentVersion = Platform.Version;

  // 플랫폼에 따라 버튼 이름 변경
  const platformButtonText = Platform.select({
    android: "Android 설정 확인",
    ios: "iOS 설정 확인",
    default: "플랫폼 설정 확인",
  });

  // 플랫폼에 따라 설명 변경
  const platformDescription = Platform.select({
    android: "Android는 Manifest와 권한 설정을 확인합니다.",
    ios: "iOS는 Info.plist와 권한 설명을 확인합니다.",
    default: "현재 플랫폼의 설정을 확인합니다.",
  });

  // 플랫폼별 기능 실행
  function handlePlatformAction() {
    if (Platform.OS === "android") {
      setMessage("Android 환경입니다. Manifest와 권한 설정을 확인합니다.");
    } else if (Platform.OS === "ios") {
      setMessage("iOS 환경입니다. Info.plist와 권한 설명을 확인합니다.");
    } else {
      setMessage("지원하지 않는 플랫폼입니다.");
    }
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>56차시 - Android와 iOS의 권한·설정·UI 차이 처리하기</Text>

      {/* 현재 플랫폼 정보 */}
      <View
        style={{
          padding: 16,
          marginBottom: 16,
          backgroundColor: "#ffffff",
        }}
      >
        <Text>현재 OS: {currentPlatform}</Text>

        <Text>OS 버전: {String(currentVersion)}</Text>
      </View>

      {/* 플랫폼별 설명 */}
      <View
        style={{
          padding: 16,
          marginBottom: 16,
          backgroundColor: Platform.select({
            android: "#E8F0FE",
            ios: "#F2F2F2",
            default: "#ffffff",
          }),
        }}
      >
        <Text>{platformDescription}</Text>
      </View>

      {/* 플랫폼에 따라 문구가 달라지는 버튼 */}
      <Pressable
        onPress={handlePlatformAction}
        style={{
          padding: 12,
          marginBottom: 16,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>{platformButtonText}</Text>
      </Pressable>

      {/* Android에서만 표시 */}
      {Platform.OS === "android" && (
        <View
          style={{
            padding: 16,
            marginBottom: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>Android 전용 영역</Text>
          <Text>AndroidManifest의 권한 설정을 확인합니다.</Text>
        </View>
      )}

      {/* iOS에서만 표시 */}
      {Platform.OS === "ios" && (
        <View
          style={{
            padding: 16,
            marginBottom: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>iOS 전용 영역</Text>
          <Text>Info.plist의 권한 설명을 확인합니다.</Text>
        </View>
      )}

      {/* 버튼 클릭 결과 */}
      {message && (
        <View
          style={{
            padding: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>{message}</Text>
        </View>
      )}
    </View>
  );
}
