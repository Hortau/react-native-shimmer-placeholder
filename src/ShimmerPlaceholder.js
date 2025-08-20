import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Reanimated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const ShimmerPlaceholder = ({ duration = 1000, delay = 0, sharedValue, ...props }) => {
  // Use external shared value if provided, else create local one
  const animationProgress = sharedValue || useSharedValue(-1);

  useEffect(() => {
    if (!sharedValue) {
      // Start shimmer animation only if not controlled externally
      animationProgress.value = withRepeat(
        withTiming(1, { duration, delay }),
        -1,
        false
      );
      return () => {
        animationProgress.value = -1;
      };
    }
  }, [delay, duration, sharedValue]);

  return (
    <BasedShimmerPlaceholder {...props} animationProgress={animationProgress} />
  );
};

const BasedShimmerPlaceholder = (props) => {
  const {
    width = 200,
    height = 15,
    shimmerColors = ["#ebebeb", "#c5c5c5", "#ebebeb"],
    isReversed = false,
    visible,
    location = [0.3, 0.5, 0.7],
    style,
    contentStyle,
    shimmerStyle,
    LinearGradient = global.Expo
      ? global.Expo.LinearGradient
      : View,
    children,
    animationProgress,
    shimmerWidthPercent = 1,
    containerProps,
    shimmerContainerProps,
    childrenContainerProps,
  } = props;

  const gradientWidth = width * shimmerWidthPercent;
  const shimmerAnimatedStyle = useAnimatedStyle(() => {
    const outputRange = isReversed ? [width, -gradientWidth] : [-gradientWidth, width];
    const tx = interpolate(
      animationProgress.value,
      [-1, 1],
      outputRange
    );
    return {
      transform: [{ translateX: tx }],
    };
  });

  return (
    <View
      style={[
        !visible && { height, width },
        styles.container,
        !visible && shimmerStyle,
        style,
      ]}
      {...containerProps}
    >
      {/* Force render children to restrict rendering twice */}
      <View
        style={[
          !visible && { width: 0, height: 0, opacity: 0 },
          visible && contentStyle,
        ]}
        {...childrenContainerProps}
      >
        {children}
      </View>
      {!visible && (
        <View
          style={{ flex: 1, backgroundColor: shimmerColors[0] }}
          {...shimmerContainerProps}
        >
          <Reanimated.View style={[{ flex: 1 }, shimmerAnimatedStyle]}>
            <LinearGradient
              colors={shimmerColors}
              style={{ flex: 1, width: width * shimmerWidthPercent }}
              start={{
                x: -1,
                y: 0.5,
              }}
              end={{
                x: 2,
                y: 0.5,
              }}
              locations={location}
            />
          </Reanimated.View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});

/**
 * To create ShimmerPlaceholder by Linear Gradient. Only useful when you use 3rd party,
 * For example: react-native-linear-gradient
 * @param {Linear Gradient Component} LinearGradient - 'expo-linear-gradient' by default
 *
 * @example
 *
 * import LinearGradient from 'react-native-linear-gradient';
 * import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
 *
 * const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
 *
 * ...
 *
 * <ShimmerPlaceHolder />
 */
export const createShimmerPlaceholder = (LinearGradient = global.Expo
  ? global.Expo.LinearGradient
  : View) => (props) => <ShimmerPlaceholder LinearGradient={LinearGradient} {...props} />;

export default ShimmerPlaceholder;
