import { styles } from "@/app/(tabs)/index.styles";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export function Lesson51() {
  // 처음 데이터 로딩 여부
  const [isLoading, setIsLoading] = useState(true);

  // 저장 처리 중인지 여부
  const [isSaving, setIsSaving] = useState(false);

  // Toast 표시 여부
  const [showToast, setShowToast] = useState(false);

  // 관심 종목 저장
  function handleSave() {
    // 저장 시작
    setIsSaving(true);

    // 실제 API 요청 대신 1초 대기
    setTimeout(async () => {
      // 저장 완료
      setIsSaving(false);

      // 저장 성공 진동
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      // Toast 표시
      setShowToast(true);

      // 1.5초 후 Toast 숨김
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }, 1000);
  }

  useEffect(() => {
    // 실제 API 요청 대신 1.5초 동안 Skeleton 표시
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // 화면이 사라지면 타이머 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.lesson, { flex: 1 }]}>
      <Text style={styles.lessonTitle}>51차시 - Skeleton·Toast·Loading·Haptic 인터랙션 만들기</Text>

      {/* 데이터 로딩 중에는 Skeleton 표시 */}
      {isLoading ? (
        <View
          style={{
            padding: 16,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              width: 100,
              height: 20,
              backgroundColor: "#dddddd",
              marginBottom: 10,
            }}
          ></View>

          <View
            style={{
              width: 160,
              height: 16,
              backgroundColor: "#eeeeee",
            }}
          ></View>
        </View>
      ) : (
        /* 데이터 로딩 완료 후 실제 카드 표시 */
        <View
          style={{
            padding: 16,
            backgroundColor: "#EAF1FF",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            NVDA
          </Text>

          <Text>엔비디아</Text>
        </View>
      )}

      {/* 저장 버튼 */}
      <Pressable
        onPress={handleSave}
        disabled={isSaving || isLoading}
        style={{
          marginTop: 20,
          padding: 14,
          alignItems: "center",
          backgroundColor: "#EAF1FF",
        }}
      >
        {isSaving ? (
          /* 저장 중에는 Loading 표시 */
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <Text>저장완료</Text>
        )}
      </Pressable>

      {/* 저장 완료 후 Toast 표시 */}
      {showToast && (
        <View
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 30,
            padding: 14,
            alignItems: "center",
            backgroundColor: "#222222",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
            }}
          >
            관심 종목에 저장되었습니다.
          </Text>
        </View>
      )}
    </View>
  );
}
