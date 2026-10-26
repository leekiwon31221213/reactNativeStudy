import { styles } from "@/app/(tabs)/index.styles";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export function Lesson60() {
  const [status, setStatus] = useState("개발 시작");

  const handleNextStep = () => {
    if (status === "개발 시작") {
      setStatus("개발망 기능 개발");
      return;
    }

    if (status === "개발망 기능 개발") {
      setStatus("개발망 테스트");
      return;
    }

    if (status === "개발망 테스트") {
      setStatus("운영망 연결");
      return;
    }

    if (status === "운영망 연결") {
      setStatus("Production Build");
      return;
    }

    if (status === "Production Build") {
      setStatus("스토어 제출");
      return;
    }

    setStatus("배포 준비 완료");
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
        <Text style={styles.lessonTitle}>60차시 - 실제 React Native 앱 처음부터 완성하고 배포하기</Text>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>01</Text>
            <Text style={sectionTitleStyle}>전체 개발 흐름</Text>
          </View>

          <Text style={descriptionStyle}>실제 서비스에서는 개발용 서버와 운영용 서버를 나누어 개발하고 테스트한 뒤 배포한다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>앱 기획</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>React Native 개발</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>개발망 서버 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>개발 / 테스트</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>운영망 서버 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>Production Build</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>스토어 배포</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>02</Text>
            <Text style={sectionTitleStyle}>프로젝트 구조</Text>
          </View>

          <Text style={descriptionStyle}>화면, 컴포넌트, 이미지, 앱 설정을 역할에 맞게 나누어 관리한다.</Text>

          <CodeBox
            text={`app
├─ _layout.tsx
├─ (tabs)
└─ detail

components
└─ home

assets
└─ images

app.json
app.config.js
eas.json`}
          ></CodeBox>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>app → 화면 / 라우팅</Text>

            <Text style={tipTextStyle}>components → 재사용 컴포넌트</Text>

            <Text style={tipTextStyle}>assets → 이미지</Text>

            <Text style={tipTextStyle}>app.json → 앱 기본 설정</Text>

            <Text style={tipTextStyle}>app.config.js → 환경에 따라 설정값 적용</Text>

            <Text style={tipTextStyle}>eas.json → 빌드 환경 설정</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>03</Text>
            <Text style={sectionTitleStyle}>화면 개발</Text>
          </View>

          <Text style={descriptionStyle}>화면을 만들고 state와 API를 연결한 뒤 오류까지 처리한다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>화면 만들기</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>컴포넌트 분리</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>state 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>API 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>오류 처리</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>04</Text>
            <Text style={sectionTitleStyle}>앱 기본 설정</Text>
          </View>

          <InfoItem label="앱 이름" value="expo.name"></InfoItem>

          <InfoItem label="Expo 프로젝트" value="expo.slug"></InfoItem>

          <InfoItem label="딥링크" value="expo.scheme"></InfoItem>

          <InfoItem label="Android 앱 ID" value="android.package"></InfoItem>

          <InfoItem label="iOS 앱 ID" value="ios.bundleIdentifier"></InfoItem>

          <InfoItem label="앱 아이콘" value="expo.icon"></InfoItem>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>05</Text>
            <Text style={sectionTitleStyle}>개발망과 운영망</Text>
          </View>

          <Text style={descriptionStyle}>실제 서비스에서는 개발자가 테스트하는 서버와 실제 사용자가 사용하는 서버를 분리하는 경우가 많다.</Text>

          <View style={normalBoxStyle}>
            <Text style={normalTitleStyle}>개발망</Text>

            <Text style={normalTextStyle}>개발자와 QA가 테스트하는 환경</Text>

            <Text style={normalTextStyle}>테스트 데이터 사용</Text>

            <Text style={normalTextStyle}>실제 사용자에게 영향 없음</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>운영망</Text>

            <Text style={warningTextStyle}>실제 사용자가 사용하는 환경</Text>

            <Text style={warningTextStyle}>실제 서비스 데이터 사용</Text>

            <Text style={warningTextStyle}>실제 배포 앱에서 연결</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>06</Text>
            <Text style={sectionTitleStyle}>실제 서버가 있다면</Text>
          </View>

          <Text style={descriptionStyle}>예를 들어 회사에 개발 API 서버와 운영 API 서버가 각각 있다고 가정한다.</Text>

          <InfoItem label="개발망 API" value="https://dev-api.example.com"></InfoItem>

          <InfoItem label="운영망 API" value="https://api.example.com"></InfoItem>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>개발 중</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>https://dev-api.example.com</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>테스트 데이터 사용</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>실제 배포</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>https://api.example.com</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>실제 서비스 데이터 사용</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>07</Text>
            <Text style={sectionTitleStyle}>환경변수로 서버 주소 관리</Text>
          </View>

          <Text style={descriptionStyle}>API 주소를 화면 코드마다 직접 작성하지 않고 환경변수 하나를 사용한다.</Text>

          <CodeBox text="EXPO_PUBLIC_API_URL"></CodeBox>

          <CodeBox
            text={`const API_URL =
  process.env.EXPO_PUBLIC_API_URL;`}
          ></CodeBox>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>개발 환경 → 개발 서버 주소</Text>

            <Text style={tipTextStyle}>운영 환경 → 운영 서버 주소</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTextStyle}>EXPO_PUBLIC_ 값은 앱 안에서 확인할 수 있으므로 비밀번호나 비밀키를 넣으면 안 된다.</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>08</Text>
            <Text style={sectionTitleStyle}>개발용 빌드</Text>
          </View>

          <Text style={descriptionStyle}>개발망 API에 연결해서 기능을 테스트할 앱을 만든다.</Text>

          <CodeBox text="eas build --platform android --profile development"></CodeBox>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>Development Build</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>개발망 API 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>개발 / QA 테스트</Text>
          </View>

          <CodeBox text="eas build:run --platform android --latest"></CodeBox>

          <Text style={helperTextStyle}>개발용 APK를 Android 에뮬레이터에 설치</Text>

          <CodeBox text="npx expo start --dev-client"></CodeBox>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>09</Text>
            <Text style={sectionTitleStyle}>개발망 테스트</Text>
          </View>

          <Text style={descriptionStyle}>운영망으로 넘어가기 전에 개발망에서 주요 기능을 확인한다.</Text>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>화면 이동</Text>

            <Text style={tipTextStyle}>API 요청 / 응답</Text>

            <Text style={tipTextStyle}>로그인</Text>

            <Text style={tipTextStyle}>등록 / 수정 / 삭제</Text>

            <Text style={tipTextStyle}>입력값 검증</Text>

            <Text style={tipTextStyle}>로딩 / 오류 처리</Text>

            <Text style={tipTextStyle}>권한 기능</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>기능 개발</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>개발 서버 테스트</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>오류 수정</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>테스트 완료</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>10</Text>
            <Text style={sectionTitleStyle}>운영망 연결</Text>
          </View>

          <Text style={descriptionStyle}>개발망 테스트가 완료되면 실제 서비스 서버를 사용하도록 환경을 변경한다.</Text>

          <View style={normalBoxStyle}>
            <Text style={normalTitleStyle}>개발망</Text>

            <Text style={normalTextStyle}>EXPO_PUBLIC_API_URL</Text>

            <Text style={normalTextStyle}>→ https://dev-api.example.com</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>운영망</Text>

            <Text style={warningTextStyle}>EXPO_PUBLIC_API_URL</Text>

            <Text style={warningTextStyle}>→ https://api.example.com</Text>
          </View>

          <Text style={helperTextStyle}>React Native 코드 자체는 그대로 두고 환경에 따라 서버 주소만 달라지는 구조다.</Text>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>11</Text>
            <Text style={sectionTitleStyle}>Android 운영용 빌드</Text>
          </View>

          <Text style={descriptionStyle}>실제 사용자가 설치할 Android 앱을 만든다.</Text>

          <CodeBox text="eas build --platform android --profile production"></CodeBox>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>운영 환경</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>운영 API 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>Production Build</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>실제 사용자 앱</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>12</Text>
            <Text style={sectionTitleStyle}>iOS 운영용 빌드</Text>
          </View>

          <Text style={descriptionStyle}>iOS 역시 운영망 서버에 연결된 Production Build를 만든다.</Text>

          <CodeBox text="eas build --platform ios --profile production"></CodeBox>

          <View style={flowBoxStyle}>
            <Text style={flowTextStyle}>운영 환경</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>운영 API 연결</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>Production Build</Text>

            <Text style={arrowStyle}>↓</Text>

            <Text style={flowTextStyle}>App Store 배포 준비</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>13</Text>
            <Text style={sectionTitleStyle}>스토어 제출</Text>
          </View>

          <Text style={descriptionStyle}>운영용 빌드가 준비되면 각 스토어에 제출한다.</Text>

          <CodeBox text="eas submit --platform android"></CodeBox>

          <Text style={helperTextStyle}>Android → Google Play Console</Text>

          <CodeBox text="eas submit --platform ios"></CodeBox>

          <Text style={helperTextStyle}>iOS → App Store Connect</Text>

          <View style={warningBoxStyle}>
            <Text style={warningTextStyle}>EAS Submit은 앱 파일을 스토어에 전달하는 단계다.</Text>

            <Text style={warningTextStyle}>스토어 심사와 실제 출시 과정은 별도로 진행한다.</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>14</Text>
            <Text style={sectionTitleStyle}>배포 후 수정</Text>
          </View>

          <Text style={descriptionStyle}>앱 출시 후 수정 내용에 따라 Update 또는 Build를 선택한다.</Text>

          <View style={normalBoxStyle}>
            <Text style={normalTitleStyle}>일반 React 코드</Text>

            <Text style={normalTextStyle}>Text</Text>

            <Text style={normalTextStyle}>UI</Text>

            <Text style={normalTextStyle}>state</Text>

            <Text style={normalTextStyle}>함수</Text>

            <Text style={normalTextStyle}>JS / TS 로직</Text>

            <Text style={normalArrowStyle}>↓</Text>

            <Text style={normalTextStyle}>EAS Update 가능</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>네이티브 변경</Text>

            <Text style={warningTextStyle}>권한</Text>

            <Text style={warningTextStyle}>네이티브 라이브러리</Text>

            <Text style={warningTextStyle}>package / bundleIdentifier</Text>

            <Text style={warningTextStyle}>네이티브 설정</Text>

            <Text style={warningArrowStyle}>↓</Text>

            <Text style={warningTextStyle}>Production Build 다시 필요</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>15</Text>
            <Text style={sectionTitleStyle}>현재 진행 상태</Text>
          </View>

          <View style={statusBoxStyle}>
            <Text style={statusLabelStyle}>현재 단계</Text>

            <Text style={statusTextStyle}>{status}</Text>
          </View>

          <Pressable style={buttonStyle} onPress={handleNextStep}>
            <Text style={buttonTextStyle}>다음 단계</Text>
          </Pressable>
        </View>

        <View style={summaryCardStyle}>
          <Text style={summaryTitleStyle}>60차시 전체 흐름</Text>

          <Text style={summaryTextStyle}>React Native 개발</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>개발망 API</Text>

          <Text style={summaryDescriptionStyle}>개발 / 테스트 데이터</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>Development Build</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>기능 테스트 완료</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>운영망 API</Text>

          <Text style={summaryDescriptionStyle}>실제 서비스 데이터</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>Production Build</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>Play Store / App Store</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={infoItemStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={valueStyle}>{value}</Text>
    </View>
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

const infoItemStyle = {
  paddingVertical: 8,
};

const labelStyle = {
  marginBottom: 5,
  fontSize: 14,
  fontWeight: "700" as const,
  color: "#777777",
};

const valueStyle = {
  fontSize: 16,
  lineHeight: 24,
  fontWeight: "600" as const,
  color: "#222222",
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

const tipTextStyle = {
  marginBottom: 6,
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const normalBoxStyle = {
  padding: 15,
  marginBottom: 14,
  borderRadius: 12,
  backgroundColor: "#f6f8f7",
};

const normalTitleStyle = {
  marginBottom: 9,
  fontSize: 17,
  fontWeight: "700" as const,
  color: "#222222",
};

const normalTextStyle = {
  marginBottom: 6,
  fontSize: 15,
  lineHeight: 22,
  color: "#555555",
};

const normalArrowStyle = {
  marginVertical: 5,
  textAlign: "center" as const,
  fontSize: 17,
  color: "#999999",
};

const warningBoxStyle = {
  padding: 15,
  marginTop: 10,
  borderRadius: 12,
  backgroundColor: "#faf6f2",
};

const warningTitleStyle = {
  marginBottom: 9,
  fontSize: 17,
  fontWeight: "700" as const,
  color: "#222222",
};

const warningTextStyle = {
  marginBottom: 6,
  fontSize: 15,
  lineHeight: 22,
  color: "#555555",
};

const warningArrowStyle = {
  marginVertical: 5,
  textAlign: "center" as const,
  fontSize: 17,
  color: "#999999",
};

const statusBoxStyle = {
  padding: 18,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const statusLabelStyle = {
  marginBottom: 6,
  fontSize: 14,
  fontWeight: "700" as const,
  color: "#777777",
};

const statusTextStyle = {
  fontSize: 18,
  fontWeight: "700" as const,
  color: "#222222",
};

const buttonStyle = {
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: 50,
  marginTop: 14,
  borderRadius: 12,
  backgroundColor: "#222222",
};

const buttonTextStyle = {
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#ffffff",
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

const summaryDescriptionStyle = {
  marginTop: 3,
  textAlign: "center" as const,
  fontSize: 14,
  lineHeight: 21,
  color: "#cccccc",
};

const summaryArrowStyle = {
  marginVertical: 8,
  textAlign: "center" as const,
  fontSize: 18,
  color: "#999999",
};
