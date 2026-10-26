import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

interface SocialUser {
  provider: string;
  name: string;
  email: string;
}

export function Lesson54() {
  // 로그인한 사용자 정보
  const [user, setUser] = useState<SocialUser | null>(null);

  // 로그인 처리 중인지 확인
  const [isLoading, setIsLoading] = useState(false);

  // Google Mock 로그인
  function handleGoogleLogin() {
    // 로그인 시작
    setIsLoading(true);

    // 실제 API 요청 대신 1초 대기
    setTimeout(() => {
      // Google API 응답이라고 가정
      const googleUser: SocialUser = {
        provider: "Google",
        name: "구글 사용자",
        email: "google@example.com",
      };

      // 사용자 정보 저장
      setUser(googleUser);

      // 로그인 처리 완료
      setIsLoading(false);
    }, 1000);
  }

  // Apple Mock 로그인
  function handleAppleLogin() {
    // 로그인 시작
    setIsLoading(true);

    // 실제 API 요청 대신 1초 대기
    setTimeout(() => {
      // Apple API 응답이라고 가정
      const appleUser: SocialUser = {
        provider: "Apple",
        name: "애플 사용자",
        email: "apple@example.com",
      };

      // 사용자 정보 저장
      setUser(appleUser);

      // 로그인 처리 완료
      setIsLoading(false);
    }, 1000);
  }

  // Kakao Mock 로그인
  function handleKakaoLogin() {
    // 로그인 시작
    setIsLoading(true);

    // 실제 API 요청 대신 1초 대기
    setTimeout(() => {
      // Kakao API 응답이라고 가정
      const kakaoUser: SocialUser = {
        provider: "Kakao",
        name: "카카오 사용자",
        email: "kakao@example.com",
      };

      // 사용자 정보 저장
      setUser(kakaoUser);

      // 로그인 처리 완료
      setIsLoading(false);
    }, 1000);
  }

  // 로그아웃
  function handleLogout() {
    setUser(null);
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>54차시 - 소셜 로그인 API 흐름 구현하기</Text>

      {/* 로그인 처리 중이면 Loading 표시 */}
      {isLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <>
          {/* Google 로그인 */}
          <Pressable
            onPress={handleGoogleLogin}
            style={{
              padding: 12,
              marginBottom: 10,
              backgroundColor: "#EAF1FF",
            }}
          >
            <Text>Google 로그인</Text>
          </Pressable>

          {/* Apple 로그인 */}
          <Pressable
            onPress={handleAppleLogin}
            style={{
              padding: 12,
              marginBottom: 10,
              backgroundColor: "#eeeeee",
            }}
          >
            <Text>Apple 로그인</Text>
          </Pressable>

          {/* Kakao 로그인 */}
          <Pressable
            onPress={handleKakaoLogin}
            style={{
              padding: 12,
              marginBottom: 20,
              backgroundColor: "#FEE500",
            }}
          >
            <Text>Kakao 로그인</Text>
          </Pressable>
        </>
      )}

      {/* 로그인 성공 후 사용자 정보 표시 */}
      {user && (
        <View
          style={{
            padding: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>로그인 제공자: {user.provider}</Text>
          <Text>이름: {user.name}</Text>
          <Text>이메일: {user.email}</Text>

          {/* 로그아웃 */}
          <Pressable
            onPress={handleLogout}
            style={{
              marginTop: 16,
              padding: 12,
              backgroundColor: "#eeeeee",
            }}
          >
            <Text>로그아웃</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
