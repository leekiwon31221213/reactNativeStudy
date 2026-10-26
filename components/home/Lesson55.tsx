import { styles } from "@/app/(tabs)/index.styles";
import React, { Component, ReactNode, useState } from "react";
import { Linking, Pressable, Text, View } from "react-native";

// Error Boundary가 감쌀 자식 컴포넌트 타입
interface ErrorBoundaryProps {
  children: ReactNode;
}

// Error Boundary의 상태
interface ErrorBoundaryState {
  hasError: boolean;
}

// 사용자 정보 타입
interface User {
  name: string;
  email: string;
}

// 앱 화면의 렌더링 오류를 잡는 Error Boundary
class AppErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // 처음에는 오류 없음
  state: ErrorBoundaryState = {
    hasError: false,
  };

  // 자식 화면에서 렌더링 오류가 발생하면 실행
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  // 개발자가 오류 내용을 확인할 때 사용
  componentDidCatch(error: Error) {
    console.log("렌더링 오류:", error);
  }

  // 오류 상태 초기화
  handleReset = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    // 오류가 발생했다면 공통 오류 화면 표시
    if (this.state.hasError) {
      return (
        <View
          style={{
            padding: 20,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>화면을 불러오는 중 문제가 발생했습니다.</Text>

          <Pressable
            onPress={this.handleReset}
            style={{
              marginTop: 12,
              padding: 12,
              backgroundColor: "#eeeeee",
            }}
          >
            <Text>다시 시도</Text>
          </Pressable>
        </View>
      );
    }

    // 오류가 없으면 원래 화면 표시
    return this.props.children;
  }
}

// Error Boundary 테스트용 컴포넌트
function CrashTest() {
  const [shouldCrash, setShouldCrash] = useState(false);

  // true가 되면 렌더링 중 오류 발생
  if (shouldCrash) {
    throw new Error("렌더링 오류 테스트");
  }

  return (
    <Pressable
      onPress={() => setShouldCrash(true)}
      style={{
        padding: 12,
        marginBottom: 10,
        backgroundColor: "#eeeeee",
      }}
    >
      <Text>렌더링 오류 테스트</Text>
    </Pressable>
  );
}

// API 상태 코드에 따라 메시지 반환
function getApiErrorMessage(status: number) {
  switch (status) {
    case 401:
      return "로그인이 만료되었습니다.";

    case 403:
      return "접근 권한이 없습니다.";

    case 404:
      return "요청한 정보를 찾을 수 없습니다.";

    case 500:
      return "서버에 문제가 발생했습니다.";

    default:
      return "알 수 없는 오류가 발생했습니다.";
  }
}

export function Lesson55() {
  // 사용자 데이터
  const [user, setUser] = useState<User | null>(null);

  // 일반적인 오류 메시지
  const [errorMessage, setErrorMessage] = useState("");

  // API 오류 테스트
  function handleApiError(status: number) {
    // 기존 메시지 제거
    setErrorMessage("");

    // 상태 코드에 맞는 오류 메시지 가져오기
    const message = getApiErrorMessage(status);

    // 화면에 표시
    setErrorMessage(message);

    // 401이면 로그인 정보도 제거한다고 가정
    if (status === 401) {
      setUser(null);
    }
  }

  // 정상 API 응답 테스트
  function handleApiSuccess() {
    setErrorMessage("");

    const userData: User = {
      name: "기원",
      email: "kiwon@example.com",
    };

    setUser(userData);
  }

  // 전화 / 문자 / 메일 / 웹 공통 실행 함수
  async function handleOpenExternal(url: string, failMessage: string) {
    // 기존 오류 메시지 제거
    setErrorMessage("");

    try {
      // 현재 기기에서 실행 가능한지 확인
      const canOpen = await Linking.canOpenURL(url);

      if (!canOpen) {
        throw new Error("외부 기능 실행 불가");
      }

      // 외부 앱 실행
      await Linking.openURL(url);
    } catch {
      // 실행 실패 시 사용자에게 메시지 표시
      setErrorMessage(failMessage);
    }
  }

  return (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>55차시 - 앱 전역 오류 처리와 예외 상황 대응하기</Text>

      {/* ========================= */}
      {/* Error Boundary */}
      {/* ========================= */}

      <Text>1. 렌더링 오류</Text>

      <AppErrorBoundary>
        <CrashTest></CrashTest>
      </AppErrorBoundary>

      {/* ========================= */}
      {/* API 오류 */}
      {/* ========================= */}

      <Text>2. API 오류</Text>

      <Pressable
        onPress={handleApiSuccess}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>API 성공 테스트</Text>
      </Pressable>

      <Pressable
        onPress={() => handleApiError(401)}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>401 로그인 만료 테스트</Text>
      </Pressable>

      <Pressable
        onPress={() => handleApiError(403)}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>403 권한 없음 테스트</Text>
      </Pressable>

      <Pressable
        onPress={() => handleApiError(404)}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>404 데이터 없음 테스트</Text>
      </Pressable>

      <Pressable
        onPress={() => handleApiError(500)}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>500 서버 오류 테스트</Text>
      </Pressable>

      {/* 정상 사용자 정보 */}
      {user && (
        <View
          style={{
            padding: 16,
            marginTop: 10,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>이름: {user.name}</Text>
          <Text>이메일: {user.email}</Text>
        </View>
      )}

      {/* ========================= */}
      {/* 외부 기능 */}
      {/* ========================= */}

      <Text style={{ marginTop: 20 }}>3. 외부 기능</Text>

      {/* 전화 */}
      <Pressable
        onPress={() => handleOpenExternal("tel:01012345678", "전화 기능을 실행할 수 없습니다.")}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>전화 걸기</Text>
      </Pressable>

      {/* 문자 */}
      <Pressable
        onPress={() => handleOpenExternal("sms:01012345678", "문자 기능을 실행할 수 없습니다.")}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>문자 보내기</Text>
      </Pressable>

      {/* 이메일 */}
      <Pressable
        onPress={() => handleOpenExternal("mailto:test@example.com?subject=문의드립니다", "이메일 앱을 실행할 수 없습니다.")}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>이메일 보내기</Text>
      </Pressable>

      {/* 웹사이트 */}
      <Pressable
        onPress={() => handleOpenExternal("https://example.com", "웹사이트를 열 수 없습니다.")}
        style={{
          padding: 12,
          marginTop: 10,
          backgroundColor: "#eeeeee",
        }}
      >
        <Text>웹사이트 열기</Text>
      </Pressable>

      {/* 일반 오류 메시지 */}
      {errorMessage && (
        <View
          style={{
            marginTop: 20,
            padding: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <Text>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
}
