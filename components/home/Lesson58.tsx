import { styles } from "@/app/(tabs)/index.styles";
import { ScrollView, Text, View } from "react-native";

export function Lesson58() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.lesson}>
        <Text style={styles.lessonTitle}>58차시 - 앱을 다시 배포하지 않고 업데이트하는 방법 이해하기</Text>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>01</Text>
            <Text style={sectionTitleStyle}>이번 차시 핵심</Text>
          </View>

          <Text style={descriptionStyle}>앱을 다시 빌드하거나 스토어에 다시 제출하지 않고 JavaScript 코드를 업데이트하는 방법을 배운다.</Text>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>React Native 코드 수정</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>EAS Update</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>업데이트 서버에 배포</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>설치된 앱이 업데이트 받음</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>02</Text>
            <Text style={sectionTitleStyle}>OTA 업데이트</Text>
          </View>

          <Text style={descriptionStyle}>OTA는 Over The Air의 약자로 앱을 다시 설치하지 않고 인터넷을 통해 업데이트를 전달하는 방식이다.</Text>

          <InfoItem label="OTA" value="Over The Air Update"></InfoItem>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>쉽게 생각하기</Text>

            <Text style={tipTextStyle}>앱 전체를 다시 설치하는 것이 아니라</Text>

            <Text style={tipTextStyle}>변경된 JavaScript와 일부 리소스만 전달</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>03</Text>
            <Text style={sectionTitleStyle}>EAS Update</Text>
          </View>

          <Text style={descriptionStyle}>Expo에서 OTA 업데이트를 배포할 때 사용하는 기능이다.</Text>

          <InfoItem label="사용 기능" value="EAS Update"></InfoItem>

          <InfoItem label="필요한 패키지" value="expo-updates"></InfoItem>

          <CodeBox text="npx expo install expo-updates"></CodeBox>

          <CodeBox text="eas update:configure"></CodeBox>

          <Text style={helperTextStyle}>이미 설치와 설정이 끝났다면 다시 할 필요는 없다.</Text>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>04</Text>
            <Text style={sectionTitleStyle}>OTA로 업데이트 가능한 것</Text>
          </View>

          <View style={normalBoxStyle}>
            <Text style={normalTextStyle}>Text 문구 수정</Text>

            <Text style={normalTextStyle}>React 컴포넌트 수정</Text>

            <Text style={normalTextStyle}>state 로직 수정</Text>

            <Text style={normalTextStyle}>함수 수정</Text>

            <Text style={normalTextStyle}>일반 스타일 수정</Text>

            <Text style={normalTextStyle}>JS / TS 로직 수정</Text>

            <Text style={normalTextStyle}>일부 이미지 리소스 변경</Text>
          </View>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>예시</Text>

            <Text style={tipTextStyle}>1. 버튼 문구 오타 수정</Text>

            <Text style={tipTextStyle}>2. 화면 레이아웃 수정</Text>

            <Text style={tipTextStyle}>3. API 응답 처리 로직 수정</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>05</Text>
            <Text style={sectionTitleStyle}>새 Build가 필요한 것</Text>
          </View>

          <Text style={descriptionStyle}>네이티브 앱 자체가 바뀌는 경우에는 OTA만으로 처리할 수 없다.</Text>

          <View style={warningBoxStyle}>
            <Text style={warningTextStyle}>네이티브 라이브러리 추가</Text>

            <Text style={warningTextStyle}>Android package 변경</Text>

            <Text style={warningTextStyle}>iOS bundleIdentifier 변경</Text>

            <Text style={warningTextStyle}>네이티브 권한 변경</Text>

            <Text style={warningTextStyle}>앱 아이콘 변경</Text>

            <Text style={warningTextStyle}>네이티브 app.json 설정 변경</Text>

            <Text style={warningTextStyle}>Expo SDK 업그레이드</Text>
          </View>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>네이티브 설정 변경</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>기존 APK에 새 기능 없음</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>새로운 Development Build 필요</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>06</Text>
            <Text style={sectionTitleStyle}>EAS Build와 EAS Update</Text>
          </View>

          <View style={fileItemStyle}>
            <Text style={fileNameStyle}>EAS Build</Text>

            <Text style={fileDescriptionStyle}>APK, AAB, iOS 앱처럼 새로운 앱 바이너리를 만든다.</Text>
          </View>

          <View style={fileItemStyle}>
            <Text style={fileNameStyle}>EAS Update</Text>

            <Text style={fileDescriptionStyle}>기존 앱에 JavaScript와 리소스 업데이트를 전달한다.</Text>
          </View>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>EAS Build → 앱 자체를 새로 만듦</Text>

            <Text style={tipTextStyle}>EAS Update → 설치된 앱의 내용을 업데이트</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>07</Text>
            <Text style={sectionTitleStyle}>runtimeVersion</Text>
          </View>

          <Text style={descriptionStyle}>업데이트가 어떤 앱 바이너리에서 실행 가능한지 구분하는 값이다.</Text>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>설치된 앱 runtimeVersion</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>업데이트 runtimeVersion 비교</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>서로 맞으면 업데이트 적용</Text>
          </View>

          <CodeBox
            text={`"runtimeVersion": {
  "policy": "appVersion"
}`}
          ></CodeBox>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>08</Text>
            <Text style={sectionTitleStyle}>runtimeVersion이 필요한 이유</Text>
          </View>

          <Text style={descriptionStyle}>설치된 앱에 없는 네이티브 기능을 사용하는 코드가 잘못 전달되는 것을 막기 위해 필요하다.</Text>

          <View style={warningBoxStyle}>
            <Text style={warningTextStyle}>기존 APK</Text>

            <Text style={warningTextStyle}>→ 카메라 네이티브 기능 없음</Text>

            <Text style={warningArrowStyle}>↓</Text>

            <Text style={warningTextStyle}>OTA 코드</Text>

            <Text style={warningTextStyle}>→ 카메라 기능 사용</Text>

            <Text style={warningArrowStyle}>↓</Text>

            <Text style={warningTextStyle}>실행할 네이티브 기능이 없어 오류 가능</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>09</Text>
            <Text style={sectionTitleStyle}>channel</Text>
          </View>

          <Text style={descriptionStyle}>업데이트를 어느 앱 그룹에 전달할지 구분하는 통로다.</Text>

          <View style={tipBoxStyle}>
            <Text style={tipTextStyle}>development → 개발용</Text>

            <Text style={tipTextStyle}>preview → 테스트용</Text>

            <Text style={tipTextStyle}>production → 실제 배포용</Text>
          </View>

          <CodeBox
            text={`"development": {
  "developmentClient": true,
  "channel": "development"
}`}
          ></CodeBox>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>10</Text>
            <Text style={sectionTitleStyle}>runtimeVersion과 channel</Text>
          </View>

          <InfoItem label="runtimeVersion" value="이 업데이트를 실행할 수 있는 앱인가?"></InfoItem>

          <InfoItem label="channel" value="어느 업데이트 통로를 사용할 것인가?"></InfoItem>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>쉽게 구분</Text>

            <Text style={tipTextStyle}>runtimeVersion → 업데이트 호환 여부</Text>

            <Text style={tipTextStyle}>channel → 업데이트를 보내는 통로</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>11</Text>
            <Text style={sectionTitleStyle}>실제 OTA 배포</Text>
          </View>

          <Text style={descriptionStyle}>JavaScript 코드를 수정한 뒤 EAS Update로 배포할 수 있다.</Text>

          <CodeBox text={`eas update --channel development --message "58차시 OTA 테스트"`}></CodeBox>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>React 코드 수정</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>eas update</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>EAS 서버 업로드</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>설치된 앱이 업데이트 확인</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>새 코드 적용</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>12</Text>
            <Text style={sectionTitleStyle}>Fast Refresh와 OTA</Text>
          </View>

          <View style={fileItemStyle}>
            <Text style={fileNameStyle}>Fast Refresh</Text>

            <Text style={fileDescriptionStyle}>개발 PC의 서버에 연결해서 코드 변경을 바로 확인한다.</Text>
          </View>

          <View style={fileItemStyle}>
            <Text style={fileNameStyle}>EAS Update</Text>

            <Text style={fileDescriptionStyle}>EAS 서버에 업데이트를 배포하고 설치된 앱이 인터넷으로 받는다.</Text>
          </View>

          <CodeBox text="npx expo start --dev-client"></CodeBox>

          <Text style={helperTextStyle}>이 명령어는 OTA 배포가 아니라 개발 서버 실행이다.</Text>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>13</Text>
            <Text style={sectionTitleStyle}>expo-updates를 처음 추가했다면</Text>
          </View>

          <Text style={descriptionStyle}>expo-updates는 네이티브 기능이기 때문에 처음 추가한 뒤에는 Development Build를 다시 만들어야 한다.</Text>

          <CodeBox text="eas build --platform android --profile development"></CodeBox>

          <CodeBox text="eas build:run --platform android --latest"></CodeBox>

          <CodeBox text="npx expo start --dev-client"></CodeBox>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>expo-updates 추가</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>EAS Development Build</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>APK 설치</Text>
          </View>
        </View>

        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>14</Text>
            <Text style={sectionTitleStyle}>현재 프로젝트에서 구분하기</Text>
          </View>

          <View style={normalBoxStyle}>
            <Text style={normalTitleStyle}>일반 React 코드 수정</Text>

            <Text style={normalTextStyle}>Text 수정</Text>

            <Text style={normalTextStyle}>함수 수정</Text>

            <Text style={normalTextStyle}>state 수정</Text>

            <Text style={normalTextStyle}>일반 UI 수정</Text>

            <Text style={normalArrowStyle}>↓</Text>

            <Text style={normalTextStyle}>EAS Update 가능</Text>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>네이티브 설정 수정</Text>

            <Text style={warningTextStyle}>앱 아이콘</Text>

            <Text style={warningTextStyle}>package</Text>

            <Text style={warningTextStyle}>권한</Text>

            <Text style={warningTextStyle}>네이티브 라이브러리</Text>

            <Text style={warningArrowStyle}>↓</Text>

            <Text style={warningTextStyle}>EAS Build 다시 필요</Text>
          </View>
        </View>

        <View style={summaryCardStyle}>
          <Text style={summaryTitleStyle}>58차시 핵심 흐름</Text>

          <Text style={summaryTextStyle}>JS / TS 변경</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>EAS Update</Text>

          <Text style={summaryDescriptionStyle}>앱을 다시 빌드하지 않고 업데이트</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>Native 변경</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>EAS Build</Text>

          <Text style={summaryDescriptionStyle}>새로운 앱 바이너리 생성</Text>
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
  marginTop: 7,
  marginBottom: 10,
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
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

const fileItemStyle = {
  padding: 15,
  marginBottom: 10,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const fileNameStyle = {
  marginBottom: 5,
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#111111",
};

const fileDescriptionStyle = {
  fontSize: 15,
  lineHeight: 23,
  color: "#555555",
};

const flowBigBoxStyle = {
  padding: 16,
  marginTop: 10,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const flowBigTextStyle = {
  textAlign: "center" as const,
  fontSize: 16,
  lineHeight: 24,
  fontWeight: "600" as const,
  color: "#222222",
};

const flowBigArrowStyle = {
  marginVertical: 5,
  textAlign: "center" as const,
  fontSize: 17,
  color: "#999999",
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
