import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";

export function Lesson59() {
  const [apiStatus, setApiStatus] = useState("아직 API 테스트 전");
  const [isLoading, setIsLoading] = useState(false);

  // API 연결 테스트
  const handleApiTest = async () => {
    setIsLoading(true);
    setApiStatus("API 요청 중...");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      console.log("API 응답:", data);

      setApiStatus(`API 연결 성공 - ID: ${data.id}`);
    } catch (error) {
      console.error("API 오류:", error);

      setApiStatus("API 연결 실패");
    } finally {
      setIsLoading(false);
    }
  };

  // JavaScript 오류 로그 확인
  const handleErrorLog = () => {
    console.log("일반 로그");
    console.warn("경고 로그");
    console.error("에러 로그");

    setApiStatus("터미널과 DevTools에서 로그 확인");
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.lesson}>
        <Text style={styles.lessonTitle}>59차시 - 실제 휴대폰에서 성능·API·빌드 오류 디버깅하기</Text>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>01</Text>

            <Text style={sectionTitleStyle}>디버깅이란?</Text>
          </View>

          <Text style={descriptionStyle}>앱에서 문제가 생겼을 때 원인을 찾아서 수정하는 작업이다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>오류 발생</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>로그 확인</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>문제 위치 찾기</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>코드 수정</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>02</Text>

            <Text style={sectionTitleStyle}>가장 먼저 확인할 로그</Text>
          </View>

          <CodeBox text='console.log("값 확인", data);'></CodeBox>

          <CodeBox text='console.warn("경고 발생");'></CodeBox>

          <CodeBox text='console.error("오류 발생", error);'></CodeBox>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>console.log → 값 확인</Text>

            <Text style={tipTextStyle}>console.warn → 경고 확인</Text>

            <Text style={tipTextStyle}>console.error → 오류 확인</Text>
          </View>

          <Pressable style={buttonStyle} onPress={handleErrorLog}>
            <Text style={buttonTextStyle}>로그 테스트</Text>
          </Pressable>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>03</Text>

            <Text style={sectionTitleStyle}>React Native DevTools</Text>
          </View>

          <Text style={descriptionStyle}>Development Build에서 앱의 상태와 네트워크 요청을 확인할 수 있다.</Text>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Console</Text>

            <Text style={infoDescriptionStyle}>console.log와 JavaScript 오류 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Network</Text>

            <Text style={infoDescriptionStyle}>API 요청과 응답 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Components</Text>

            <Text style={infoDescriptionStyle}>React 컴포넌트와 props 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Profiler</Text>

            <Text style={infoDescriptionStyle}>어떤 컴포넌트가 자주 렌더링되는지 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Memory</Text>

            <Text style={infoDescriptionStyle}>JavaScript 메모리 사용 상태 확인</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>04</Text>

            <Text style={sectionTitleStyle}>Developer Menu</Text>
          </View>

          <Text style={descriptionStyle}>실제 기기나 에뮬레이터에서 개발 도구를 여는 메뉴다.</Text>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>Android 실제 기기</Text>

            <Text style={tipTextStyle}>→ 휴대폰 흔들기</Text>
          </View>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>Android 에뮬레이터</Text>

            <Text style={tipTextStyle}>→ Ctrl + M</Text>
          </View>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>Expo 터미널</Text>

            <Text style={tipTextStyle}>→ M 키 입력</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>05</Text>

            <Text style={sectionTitleStyle}>API 오류 확인</Text>
          </View>

          <Text style={descriptionStyle}>API가 안 될 때는 코드부터 고치지 말고 요청 상태를 먼저 확인한다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>API 요청</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>URL 확인</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>HTTP 상태 코드 확인</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>응답 데이터 확인</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>catch 오류 확인</Text>
          </View>

          <Pressable style={buttonStyle} onPress={handleApiTest} disabled={isLoading}>
            {isLoading ? <ActivityIndicator></ActivityIndicator> : <Text style={buttonTextStyle}>API 테스트</Text>}
          </Pressable>

          <View style={resultBoxStyle}>
            <Text style={resultTitleStyle}>결과</Text>

            <Text style={resultTextStyle}>{apiStatus}</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>06</Text>

            <Text style={sectionTitleStyle}>실제 기기에서 API가 안 되는 경우</Text>
          </View>

          <Text style={descriptionStyle}>에뮬레이터에서는 되는데 실제 휴대폰에서 API가 안 될 수도 있다.</Text>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>API 주소가 localhost인지 확인</Text>

            <Text style={tipTextStyle}>PC와 휴대폰이 같은 네트워크인지 확인</Text>

            <Text style={tipTextStyle}>서버가 외부 접속을 허용하는지 확인</Text>

            <Text style={tipTextStyle}>HTTPS 또는 인증서 문제가 없는지 확인</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>localhost 주의</Text>

            <Text style={warningTextStyle}>실제 휴대폰에서 localhost는 개발 PC가 아니라 휴대폰 자기 자신을 의미한다.</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>07</Text>

            <Text style={sectionTitleStyle}>성능 확인</Text>
          </View>

          <Text style={descriptionStyle}>화면이 끊기거나 스크롤이 느리다면 Performance Monitor를 확인할 수 있다.</Text>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>UI FPS</Text>

            <Text style={infoDescriptionStyle}>Android / iOS 화면이 얼마나 부드럽게 그려지는지 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>JS FPS</Text>

            <Text style={infoDescriptionStyle}>JavaScript 작업이 얼마나 부드럽게 처리되는지 확인</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Memory</Text>

            <Text style={infoDescriptionStyle}>앱이 메모리를 너무 많이 사용하는지 확인</Text>
          </View>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>이런 경우 확인</Text>

            <Text style={tipTextStyle}>스크롤이 버벅거림</Text>

            <Text style={tipTextStyle}>애니메이션이 끊김</Text>

            <Text style={tipTextStyle}>화면 이동이 느림</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>08</Text>

            <Text style={sectionTitleStyle}>Android 네이티브 로그</Text>
          </View>

          <Text style={descriptionStyle}>JavaScript 로그에 나오지 않는 Android 네이티브 오류는 adb logcat으로 확인한다.</Text>

          <CodeBox text="adb logcat"></CodeBox>

          <Text style={helperTextStyle}>Android 기기나 에뮬레이터에서 발생하는 시스템 로그를 실시간으로 볼 수 있다.</Text>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>주로 확인하는 문제</Text>

            <Text style={tipTextStyle}>앱 실행하자마자 종료</Text>

            <Text style={tipTextStyle}>네이티브 모듈 오류</Text>

            <Text style={tipTextStyle}>권한 관련 오류</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>09</Text>

            <Text style={sectionTitleStyle}>EAS Build 오류</Text>
          </View>

          <Text style={descriptionStyle}>EAS Build가 실패하면 마지막 에러만 보지 말고 처음 발생한 오류부터 확인한다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>EAS Build 실패</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>Build Details 열기</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>가장 먼저 실패한 단계 확인</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>실제 오류 메시지 확인</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>예</Text>

            <Text style={warningTextStyle}>google-services.json package_name 불일치</Text>

            <Text style={warningTextStyle}>네이티브 라이브러리 설정 오류</Text>

            <Text style={warningTextStyle}>app.json 설정 오류</Text>

            <Text style={warningTextStyle}>의존성 버전 문제</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>10</Text>

            <Text style={sectionTitleStyle}>오류 종류를 먼저 구분</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>JavaScript 오류</Text>

            <Text style={infoDescriptionStyle}>console / React Native DevTools</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>API 오류</Text>

            <Text style={infoDescriptionStyle}>Network / 상태 코드 / 응답 데이터</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>성능 문제</Text>

            <Text style={infoDescriptionStyle}>Performance Monitor / Profiler / Memory</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>Android 네이티브 오류</Text>

            <Text style={infoDescriptionStyle}>adb logcat</Text>
          </View>

          <View style={infoBoxStyle}>
            <Text style={infoTitleStyle}>EAS Build 오류</Text>

            <Text style={infoDescriptionStyle}>EAS Build 로그</Text>
          </View>
        </View>

        <View style={summaryCardStyle}>
          <Text style={summaryTitleStyle}>59차시 핵심 흐름</Text>

          <Text style={summaryTextStyle}>문제 발생</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>오류 종류 구분</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>맞는 디버깅 도구 선택</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>로그 확인</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>원인 수정</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function CodeBox({ text }: { text: string }) {
  return (
    <View style={codeBoxStyle}>
      <Text style={codeTextStyle}>{text}</Text>
    </View>
  );
}

const cardStyle = {
  padding: 20,
  marginBottom: 18,
  borderRadius: 16,
  backgroundColor: "#ffffff",
  borderWidth: 1,
  borderColor: "#e9e9e9",
};

const titleRowStyle = {
  flexDirection: "row" as const,
  alignItems: "center" as const,
  marginBottom: 14,
};

const numberStyle = {
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight: 9,
  borderRadius: 20,
  backgroundColor: "#222222",
  color: "#ffffff",
  fontSize: 14,
  fontWeight: "700" as const,
};

const sectionTitleStyle = {
  flex: 1,
  fontSize: 19,
  lineHeight: 26,
  fontWeight: "700" as const,
  color: "#111111",
};

const descriptionStyle = {
  marginBottom: 18,
  fontSize: 16,
  lineHeight: 24,
  color: "#555555",
};

const codeBoxStyle = {
  paddingHorizontal: 14,
  paddingVertical: 13,
  marginTop: 9,
  borderRadius: 10,
  backgroundColor: "#f3f4f6",
};

const codeTextStyle = {
  fontSize: 15,
  lineHeight: 23,
  color: "#222222",
};

const helperTextStyle = {
  marginTop: 8,
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const flowBoxStyle = {
  padding: 16,
  marginTop: 8,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const flowTextStyle = {
  textAlign: "center" as const,
  fontSize: 16,
  lineHeight: 24,
  fontWeight: "600" as const,
  color: "#222222",
};

const arrowStyle = {
  marginVertical: 5,
  textAlign: "center" as const,
  fontSize: 17,
  color: "#999999",
};

const tipBoxStyle = {
  padding: 15,
  marginTop: 10,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const tipTitleStyle = {
  marginBottom: 9,
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#222222",
};

const tipTextStyle = {
  marginBottom: 6,
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const infoBoxStyle = {
  padding: 15,
  marginBottom: 10,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const infoTitleStyle = {
  marginBottom: 5,
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#222222",
};

const infoDescriptionStyle = {
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const warningBoxStyle = {
  padding: 15,
  marginTop: 10,
  borderRadius: 12,
  backgroundColor: "#faf6f2",
};

const warningTitleStyle = {
  marginBottom: 8,
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#222222",
};

const warningTextStyle = {
  marginBottom: 6,
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const buttonStyle = {
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: 50,
  marginTop: 15,
  paddingHorizontal: 16,
  borderRadius: 12,
  backgroundColor: "#222222",
};

const buttonTextStyle = {
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#ffffff",
};

const resultBoxStyle = {
  padding: 15,
  marginTop: 12,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const resultTitleStyle = {
  marginBottom: 5,
  fontSize: 14,
  fontWeight: "700" as const,
  color: "#777777",
};

const resultTextStyle = {
  fontSize: 16,
  lineHeight: 23,
  color: "#222222",
};

const summaryCardStyle = {
  padding: 22,
  borderRadius: 16,
  backgroundColor: "#222222",
};

const summaryTitleStyle = {
  marginBottom: 20,
  textAlign: "center" as const,
  fontSize: 20,
  fontWeight: "700" as const,
  color: "#ffffff",
};

const summaryTextStyle = {
  textAlign: "center" as const,
  fontSize: 17,
  lineHeight: 25,
  fontWeight: "700" as const,
  color: "#ffffff",
};

const summaryArrowStyle = {
  marginVertical: 8,
  textAlign: "center" as const,
  fontSize: 18,
  color: "#999999",
};
