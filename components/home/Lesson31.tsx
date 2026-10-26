import { styles } from "@/app/(tabs)/index.styles";
import { Text, View } from "react-native";
export function Lesson31() {
  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>31차시 - Expo Go와 실제 개발용 앱 빌드 차이 이해하기</Text>

      <Text>Expo Go → 공용 테스트 앱</Text>
      <Text>Development Build → 내 reactNativeStudy 전용 테스트 앱</Text>

      <View>
        <Text>Expo Go로 충분한 것</Text>
        <Text>화면 만들기</Text>
        <Text>컴포넌트 연습</Text>
        <Text>useState / useEffect</Text>
        <Text>Axios</Text>
        <Text>TanStack Query</Text>
        <Text>Zustand</Text>
        <Text>Navigation</Text>
        <Text>로컬 알림 기본 흐름</Text>
      </View>

      <View>
        <Text>Development Build가 필요한 것</Text>
        <Text>Firebase 원격 푸시</Text>
        <Text>google-services.json 반영 확인</Text>
        <Text>네이티브 권한 설정 확인</Text>
        <Text>앱 아이콘 / Splash 설정 확인</Text>
        <Text>네이티브 라이브러리 테스트</Text>
        <Text>실제 배포 전 테스트</Text>
      </View>

      <View>
        <Text>Expo Go → 남이 만들어둔 공용 연습장</Text>
        <Text>Development Build → 내 앱 전용 연습장</Text>
        <Text>Production Build → 사용자에게 배포하는 실제 앱</Text>
      </View>
    </View>
  );
}
