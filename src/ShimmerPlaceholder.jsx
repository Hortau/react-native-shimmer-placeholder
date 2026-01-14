import { useSharedValue } from 'react-native-reanimated';

import BaseShimmerPlaceholder from './BaseShimmerPlaceholder';

const ShimmerPlaceholder = ({ duration = 1000, delay = 0, ...props }) => {
  const animationProgress = useSharedValue(-1);
  return <BaseShimmerPlaceholder {...props} animationProgress={animationProgress} duration={duration} delay={delay} />;
};

export default ShimmerPlaceholder;
