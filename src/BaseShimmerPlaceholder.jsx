import { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Reanimated,{
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const AnimatedView = Reanimated.View;
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

let shimmerIdCounter = 0;

const BaseShimmerPlaceholder = (props) => {
  const {
    width = 200,
    height = 15,
    shimmerColors = ['#ebebeb', '#c5c5c5', '#ebebeb'],
    isReversed = false,
    visible,
    location = [0.3, 0.5, 0.7],
    style,
    contentStyle,
    shimmerStyle,
    children,
    animationProgress,
    duration = 1000,
    delay = 0,
    shimmerWidthPercent = 1,
    containerProps,
    shimmerContainerProps,
    childrenContainerProps,
  } = props;

  const gradientWidth = width * shimmerWidthPercent ;

  const shimmerAnimatedStyle = useAnimatedStyle(() => {
    const outputRange = isReversed ? [width, -gradientWidth] : [-gradientWidth, width];
    const tx = interpolate(animationProgress.value, [-1, 1], outputRange);
    return {
      transform: [{ translateX: tx }],
    };
  });

  useEffect(() => {
    animationProgress.value = withRepeat(
      withTiming(1, { duration, delay }),
      -1,
      false
    );

    return () => {
      animationProgress.value = -1;
    };
  }, [width, gradientWidth, duration, delay, animationProgress]);

  const gradientIdRef = useRef(null);
  if (!gradientIdRef.current) {
    shimmerIdCounter += 1;
    gradientIdRef.current = `shimmer-${shimmerIdCounter}`;
  }

  const gradientId = gradientIdRef.current;

  return (
    <View
      style={[!visible && { height, width }, styles.container, !visible && shimmerStyle, style]}
      {...containerProps}
    >
      <View style={[!visible && { width: 0, height: 0, opacity: 0 }, visible && contentStyle]} {...childrenContainerProps}>
        {children}
      </View>

      {!visible && (
        <View style={[{ flex: 1, backgroundColor: shimmerColors[0] }]} {...shimmerContainerProps}>
          <AnimatedView style={[{ width: gradientWidth }, shimmerAnimatedStyle]}>
            <Svg width={gradientWidth} height={height} viewBox={`0 0 ${gradientWidth} ${height}`} preserveAspectRatio="none">
              <Defs>
                <LinearGradient
                  id={gradientId}
                  gradientUnits="userSpaceOnUse"
                  x1={-width}
                  y1={height / 2}
                  x2={width * 2}
                  y2={height / 2}
                >
                  {shimmerColors.map((c, i) => (
                    <Stop key={i} offset={String(location[i] ?? (i / (shimmerColors.length - 1)))} stopColor={c} stopOpacity="1"
                    />
                  ))}
                </LinearGradient>
              </Defs>
              <Rect x="0" y="0" width={gradientWidth} height={height} fill={`url(#${gradientId})`} />
            </Svg>
          </AnimatedView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default BaseShimmerPlaceholder;