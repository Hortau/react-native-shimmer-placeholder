import { View, Text } from 'react-native';
import ShimmerPlaceholder from '@hortau/react-native-shimmer-placeholder';

export default {
  title: 'ShimmerPlaceholder',
  component: ShimmerPlaceholder,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Text style={{ marginBottom: 10 }}>Shimmer example</Text>
    <ShimmerPlaceholder width={200} height={20} />
  </View>
);
