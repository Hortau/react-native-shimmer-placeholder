declare module 'react-native-shimmer-placeholder' {

    import * as React from 'react';
    import { ViewProps } from 'react-native';
    import * as Reanimated from 'react-native-reanimated';

    export interface ShimmerPlaceholderProps {
        width?: number | string;
        height?: number | string;
        shimmerWidthPercent?: number;
        sharedValue?: Reanimated.SharedValue<number>;
        duration?: number;
        delay?: number;
        shimmerColors?: string[];
        location?: number[];
        isReversed?: boolean;
        visible?: boolean;
        children?: any;
        style?: any;
        shimmerStyle?: any;
        contentStyle?: any;
        LinearGradient?: React.ComponentClass<any>;
        containerProps?: ViewProps
        shimmerContainerProps?: ViewProps
        childrenContainerProps?: ViewProps
    }

    class ShimmerPlaceholder extends React.Component<ShimmerPlaceholderProps, any> {}

    export const createShimmerPlaceholder = (LinearGradient?: React.ComponentClass<any>) => ShimmerPlaceholder

    export default ShimmerPlaceholder
}