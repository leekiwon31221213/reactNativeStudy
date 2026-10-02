import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { FlatList, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./index.styles";

const LESSON_LIST = [
  "Text와 View",
  "Image",
  "Pressable과 Keyboard",
  "화면 크기와 SafeAreaView",
  "TextInput",
  "ScrollView",
  "배열과 map",
  "데이터 전달하고 화면 상태 바꾸기(상태 변경)",
  "TypeScript로 데이터 타입 정하기",
  "자주 쓰는 버튼·입력창·팝업 재사용하기",
  "화면 이동 기능 만들기(Stack Navigation)",
  "하단 탭 메뉴 만들기",
  "목록을 눌러 상세화면으로 데이터 전달하기",
  "Axios로 API 호출하기",
  "API 데이터 조회하고 상태 처리하기",
  "TanStack(React) Query로 조회 데이터 관리하기",
  "데이터 변경 후 화면 데이터 새로 불러오기",
  "데이터 등록·수정·삭제하기",
  "목록 더 불러오기와 당겨서 새로고침하기",
  "로그인 화면 만들고 서버에 로그인 요청하기",
  "로그인 토큰을 휴대폰에 저장하기",
  "API 요청할 때 로그인 토큰 자동으로 보내기",
  "앱을 다시 켜도 로그인 유지하고 로그아웃하기",
  "Zustand로 여러 화면에서 데이터 같이 사용하기",
  "갤러리에서 사진 선택하고 서버에 업로드하기",
  "갤러리에서 사진 선택하고 서버에 업로드하기",
  "Firebase 연결하고 푸시 알림 받을 준비하기",
  "앱 상태별로 푸시 알림 받고 클릭 처리하기",
  "푸시 알림이나 링크를 눌러 원하는 화면으로 이동하기",
  "개발용·배포용 환경과 서버 주소 나누기",
  "Expo Go와 실제 개발용 앱 빌드 차이 이해하기",
  "안드로이드 배포 파일 만들고 실제 휴대폰에서 테스트하기",
  "키보드가 입력창을 가리지 않게 화면 처리하기",
  "앱이 백그라운드로 갔다 돌아오는 상태 감지하기",
  "인터넷 연결 상태 확인하고 끊겼을 때 대응하기",
  "중요한 로그인 정보를 안전하게 휴대폰에 저장하기",
  "FlatList와 컴포넌트 렌더링 최적화하기",
  "API·앱 오류를 실제 운영 환경에서 추적하기",
  "Android·iOS 기기별 차이와 설정 처리하기",
  "Android·iOS 실제 배포 빌드와 업데이트 이해하기",
  "입력폼·키보드·스크롤이 같이 있는 실제 화면 처리하기",
  "아래에서 올라오는 Bottom Sheet 만들기",
  "터치·스와이프·드래그 제스처 처리하기",
  "Fade·Scale·Slide·Spring 애니메이션 만들기",
  "여러 애니메이션을 순서대로 연결하기",
  "스크롤 위치에 따라 UI 움직이기",
  "스크롤에 따라 이미지·텍스트 크기와 위치 변경하기",
  "Parallax·Sticky Header·Collapsing Header 만들기",
  "카드를 밀어서 삭제하고 드래그하는 인터랙션 만들기",
  "목록 추가·삭제 애니메이션 만들기",
  "Skeleton·Toast·Loading·Haptic 인터랙션 만들기",
  "앱에서 웹페이지 여는 방법 비교하기",
  "React Native와 WebView 사이에서 데이터 주고받기",
  "Google·Apple·Kakao 같은 소셜 로그인 연결하기",
  "앱 전체 오류와 예상하지 못한 예외 상황 처리하기",
  "Android와 iOS의 권한·설정·UI 차이 처리하기",
  "앱 아이콘·Splash·StatusBar·Safe Area 설정하기",
  "앱을 다시 배포하지 않고 업데이트하는 방법 이해하기",
  "실제 휴대폰에서 성능·API·빌드 오류 디버깅하기",
  "실제 React Native 앱 처음부터 완성하고 배포하기",
].map((title, index) => ({
  id: String(index + 1),
  title: `${index + 1}차시 - ${title}`,
}));

export default function HomeScreen() {
  useEffect(() => {
    console.log("화면이 실행됨");
  }, []);

  function handleLessonPress(lessonId: string) {
    router.push({
      pathname: "/detail/[lessonId]",
      params: { lessonId },
    });
  }

  return (
    <SafeAreaView style={styles.page} edges={["top"]}>
      <StatusBar style="auto"></StatusBar>

      <FlatList
        data={LESSON_LIST}
        contentContainerStyle={styles.lessonList}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.pageTitle}>React Native 학습 목록</Text>}
        renderItem={({ item }) => {
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`${item.title} 열기`}
              onPress={() => handleLessonPress(item.id)}
              style={({ pressed }) => [styles.lessonLink, pressed && styles.lessonLinkPressed]}
            >
              <Text style={styles.lessonLinkNumber}>{item.id.padStart(2, "0")}</Text>
              <Text style={styles.lessonLinkTitle}>{item.title}</Text>
              <Text style={styles.lessonLinkArrow}>›</Text>
            </Pressable>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}
