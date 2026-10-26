import { styles } from "@/app/(tabs)/index.styles";
import { ScrollView, Text, View } from "react-native";

export function Lesson57() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.lesson}>
        <Text style={styles.lessonTitle}>57차시 - 앱 아이콘·Splash·앱 기본 설정하기</Text>

        {/* 01. 전체 구조 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>01</Text>
            <Text style={sectionTitleStyle}>이번 차시 전체 구조</Text>
          </View>

          <Text style={descriptionStyle}>현재 프로젝트에서 실제로 사용하는 파일과 설정값을 기준으로 확인한다.</Text>

          <View style={flowBoxStyle}>
            <Text style={flowTitleStyle}>앱 아이콘</Text>
            <Text style={flowArrowStyle}>↓</Text>
            <Text style={flowValueStyle}>assets/images/logo.png + app.json</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTitleStyle}>Android Adaptive Icon</Text>
            <Text style={flowArrowStyle}>↓</Text>
            <Text style={flowValueStyle}>app.json의 배경색만 설정</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTitleStyle}>Splash</Text>
            <Text style={flowArrowStyle}>↓</Text>
            <Text style={flowValueStyle}>assets/images/logo.png + app.json</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTitleStyle}>Splash 표시 방식</Text>
            <Text style={flowArrowStyle}>↓</Text>
            <Text style={flowValueStyle}>현재는 Expo가 자동으로 숨김</Text>
          </View>

          <View style={flowBoxStyle}>
            <Text style={flowTitleStyle}>앱 이름 / slug / scheme / package</Text>
            <Text style={flowArrowStyle}>↓</Text>
            <Text style={flowValueStyle}>app.json</Text>
          </View>
        </View>

        {/* 02. assets/images */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>02</Text>
            <Text style={sectionTitleStyle}>assets/images</Text>
          </View>

          <Text style={descriptionStyle}>현재 프로젝트에는 두 개의 이미지가 있고, logo.png를 아이콘과 Splash에 함께 사용한다.</Text>

          <FileItem file="assets/images/logo.png" description="앱 아이콘과 Splash에 사용하는 이미지"></FileItem>

          <FileItem file="assets/images/img1.png" description="학습 화면에서 사용하는 일반 이미지"></FileItem>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>현재 프로젝트</Text>

            <Text style={tipTextStyle}>logo.png 크기는 203 × 210이라 정사각형이 아니다.</Text>

            <Text style={tipTextStyle}>앱 아이콘은 나중에 1024 × 1024 PNG로 교체하는 것이 좋다.</Text>
          </View>
        </View>

        {/* 03. 앱 아이콘 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>03</Text>
            <Text style={sectionTitleStyle}>앱 아이콘</Text>
          </View>

          <Text style={descriptionStyle}>휴대폰 홈 화면에서 앱 이름과 함께 표시되는 기본 아이콘이다.</Text>

          <InfoItem label="이미지 파일" value="assets/images/logo.png"></InfoItem>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.icon"></InfoItem>

          <CodeBox text={'"icon": "./assets/images/logo.png"'}></CodeBox>
        </View>

        {/* 04. Adaptive Icon */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>04</Text>
            <Text style={sectionTitleStyle}>Android Adaptive Icon</Text>
          </View>

          <Text style={descriptionStyle}>현재는 Android Adaptive Icon의 배경색만 지정했고 foregroundImage는 아직 설정하지 않았다.</Text>

          <InfoItem label="현재 앞쪽 이미지" value="설정하지 않음"></InfoItem>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.android.adaptiveIcon"></InfoItem>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>Adaptive Icon 구조</Text>

            <Text style={tipTextStyle}>foregroundImage → 추가하면 앞쪽 로고로 사용</Text>

            <Text style={tipTextStyle}>backgroundColor → 뒤쪽 배경색</Text>
          </View>

          <CodeBox
            text={`"android": {
  "adaptiveIcon": {
    "backgroundColor": "#ffffff"
  }
}`}
          ></CodeBox>
        </View>

        {/* 05. Splash */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>05</Text>
            <Text style={sectionTitleStyle}>Splash 화면</Text>
          </View>

          <Text style={descriptionStyle}>앱을 실행한 직후 실제 React Native 화면이 준비되기 전에 보여주는 시작 화면이다.</Text>

          <InfoItem label="이미지 파일" value="assets/images/logo.png"></InfoItem>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.plugins → expo-splash-screen"></InfoItem>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>앱 아이콘 클릭</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>Splash 표시</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>앱 초기화</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>실제 화면 표시</Text>
          </View>

          <CodeBox
            text={`[
  "expo-splash-screen",
  {
    "image": "./assets/images/logo.png",
    "imageWidth": 200,
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  }
]`}
          ></CodeBox>
        </View>

        {/* 06. 다크모드 Splash */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>06</Text>
            <Text style={sectionTitleStyle}>다크모드 Splash</Text>
          </View>

          <Text style={descriptionStyle}>현재 다크모드에는 별도 이미지를 사용하지 않고 검은색 배경만 설정했다.</Text>

          <InfoItem label="다크모드 이미지" value="별도로 설정하지 않음"></InfoItem>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <CodeBox
            text={`"dark": {
  "backgroundColor": "#000000"
}`}
          ></CodeBox>
        </View>

        {/* 07. Splash 시간 제어 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>07</Text>
            <Text style={sectionTitleStyle}>Splash 표시 시간 제어</Text>
          </View>

          <Text style={descriptionStyle}>현재 _layout.tsx에는 SplashScreen 코드가 없어서 앱 화면이 준비되면 Expo가 자동으로 Splash를 숨긴다.</Text>

          <InfoItem label="설정 파일" value="app/_layout.tsx"></InfoItem>

          <InfoItem label="현재 수동 제어" value="사용하지 않음"></InfoItem>

          <CodeBox text="SplashScreen.preventAutoHideAsync()"></CodeBox>

          <Text style={helperTextStyle}>나중에 폰트나 초기 데이터를 기다려야 할 때 추가할 수 있다.</Text>

          <CodeBox text="SplashScreen.hideAsync()"></CodeBox>

          <Text style={helperTextStyle}>수동 제어를 추가했다면 앱 준비가 끝난 뒤 호출한다.</Text>

          <View style={flowBigBoxStyle}>
            <Text style={flowBigTextStyle}>앱 실행</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>현재는 Expo가 자동 관리</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>RootLayout과 앱 화면 준비</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>Splash 자동 종료</Text>

            <Text style={flowBigArrowStyle}>↓</Text>

            <Text style={flowBigTextStyle}>앱 화면</Text>
          </View>
        </View>

        {/* 08. 앱 이름 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>08</Text>
            <Text style={sectionTitleStyle}>앱 이름</Text>
          </View>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.name"></InfoItem>

          <CodeBox text={'"name": "reactNativeStudy"'}></CodeBox>

          <Text style={helperTextStyle}>사용자에게 표시되는 앱 이름이다.</Text>
        </View>

        {/* 09. slug */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>09</Text>
            <Text style={sectionTitleStyle}>slug</Text>
          </View>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.slug"></InfoItem>

          <CodeBox text={'"slug": "stockNewsApp"'}></CodeBox>

          <Text style={helperTextStyle}>연결된 EAS 프로젝트 이름과 같아야 한다. 레포지토리 이름이나 앱 표시 이름과는 별개다.</Text>

          <InfoItem label="EAS projectId" value="2c6f5288-ee8b-441b-a64f-f17155fdb490"></InfoItem>
        </View>

        {/* 10. scheme */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>10</Text>
            <Text style={sectionTitleStyle}>딥링크 scheme</Text>
          </View>

          <Text style={descriptionStyle}>웹이나 다른 앱에서 우리 앱을 직접 열기 위한 전용 주소를 만든다.</Text>

          <InfoItem label="설정 파일" value="app.json"></InfoItem>

          <InfoItem label="설정 위치" value="expo.scheme"></InfoItem>

          <CodeBox text={'"scheme": "reactnativestudy"'}></CodeBox>

          <CodeBox text="reactnativestudy://detail/57"></CodeBox>

          <View style={tipBoxStyle}>
            <Text style={tipTitleStyle}>실제 사용 예</Text>

            <Text style={tipTextStyle}>1. OAuth 로그인 후 앱으로 돌아오기</Text>

            <Text style={tipTextStyle}>2. 외부 링크에서 특정 화면 열기</Text>

            <Text style={tipTextStyle}>3. 알림을 눌러 특정 화면으로 이동</Text>
          </View>

          <InfoItem label="Android package" value="com.stocknewsapp.mobile"></InfoItem>

          <Text style={helperTextStyle}>Firebase의 google-services.json에 등록된 package_name과 반드시 같아야 한다.</Text>
        </View>

        {/* 11. 파일별 역할 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>11</Text>
            <Text style={sectionTitleStyle}>어느 파일에서 뭘 설정할까?</Text>
          </View>

          <FileItem file="assets/images/logo.png" description="앱 아이콘과 Splash 이미지로 사용"></FileItem>

          <FileItem file="app.json" description="앱 이름, icon, Splash, slug, scheme, package 설정"></FileItem>

          <FileItem file="app.config.js" description="환경변수 또는 기본 google-services.json 경로 적용"></FileItem>

          <FileItem file="google-services.json" description="Firebase Android 앱 연결 정보 보관"></FileItem>

          <FileItem file="app/_layout.tsx" description="현재 Sentry, React Query, 화면 이동 구조 설정"></FileItem>

          <FileItem file="components/home/Lesson57.tsx" description="57차시 학습 내용을 화면에 표시"></FileItem>
        </View>

        {/* 12. 재빌드 */}
        <View style={cardStyle}>
          <View style={titleRowStyle}>
            <Text style={numberStyle}>12</Text>
            <Text style={sectionTitleStyle}>언제 다시 빌드해야 할까?</Text>
          </View>

          <View style={normalBoxStyle}>
            <Text style={normalTitleStyle}>일반 코드 수정</Text>

            <Text style={normalTextStyle}>Text 문구 수정</Text>

            <Text style={normalTextStyle}>state 로직 수정</Text>

            <Text style={normalTextStyle}>일반 UI 수정</Text>

            <Text style={normalArrowStyle}>↓</Text>

            <CodeBox text="npx expo start --dev-client"></CodeBox>
          </View>

          <View style={warningBoxStyle}>
            <Text style={warningTitleStyle}>네이티브 설정 변경</Text>

            <Text style={warningTextStyle}>앱 아이콘 변경</Text>

            <Text style={warningTextStyle}>Splash 설정 변경</Text>

            <Text style={warningTextStyle}>scheme 변경</Text>

            <Text style={warningTextStyle}>네이티브 라이브러리 추가</Text>

            <Text style={warningArrowStyle}>↓</Text>

            <Text style={warningTextStyle}>Android package 변경</Text>

            <CodeBox text="eas build --platform android --profile development"></CodeBox>

            <CodeBox text="eas build:run --platform android --latest"></CodeBox>
          </View>
        </View>

        {/* 13. 최종 흐름 */}
        <View style={summaryCardStyle}>
          <Text style={summaryTitleStyle}>57차시 핵심 흐름</Text>

          <Text style={summaryTextStyle}>assets/images</Text>

          <Text style={summaryDescriptionStyle}>logo.png를 아이콘과 Splash에 사용</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>app.json</Text>

          <Text style={summaryDescriptionStyle}>표시 이름과 EAS/Firebase 식별값 설정</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>app/_layout.tsx</Text>

          <Text style={summaryDescriptionStyle}>현재는 Splash 수동 제어 없이 앱 구조 구성</Text>

          <Text style={summaryArrowStyle}>↓</Text>

          <Text style={summaryTextStyle}>네이티브 설정 변경</Text>

          <Text style={summaryDescriptionStyle}>EAS 개발 빌드 생성 후 기기에 APK 설치</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// 라벨과 값 표시

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={infoItemStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={valueStyle}>{value}</Text>
    </View>
  );
}

// 파일 설명 표시

function FileItem({ file, description }: { file: string; description: string }) {
  return (
    <View style={fileItemStyle}>
      <Text style={fileNameStyle}>{file}</Text>
      <Text style={fileDescriptionStyle}>{description}</Text>
    </View>
  );
}

// 코드 예제 표시

function CodeBox({ text }: { text: string }) {
  return (
    <View style={codeBoxStyle}>
      <Text style={codeTextStyle}>{text}</Text>
    </View>
  );
}

// 화면 스타일

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

const flowBoxStyle = {
  padding: 14,
  marginBottom: 10,
  borderRadius: 12,
  backgroundColor: "#f7f8fa",
};

const flowTitleStyle = {
  textAlign: "center" as const,
  fontSize: 16,
  fontWeight: "700" as const,
  color: "#222222",
};

const flowArrowStyle = {
  marginVertical: 3,
  textAlign: "center" as const,
  fontSize: 16,
  color: "#999999",
};

const flowValueStyle = {
  textAlign: "center" as const,
  fontSize: 15,
  lineHeight: 22,
  color: "#555555",
};

const flowBigBoxStyle = {
  padding: 16,
  marginTop: 8,
  marginBottom: 10,
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
  marginVertical: 4,
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
