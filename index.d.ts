declare module '@hortau/react-native-shimmer-placeholder' {

    import * as React from 'react';
    import { ViewProps } from 'react-native';

    export interface ShimmerPlaceholderProps {
        width?: number | string;
        height?: number | string;
        shimmerWidthPercent?: number;
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
        containerProps?: ViewProps
        shimmerContainerProps?: ViewProps
        childrenContainerProps?: ViewProps
    }

    class ShimmerPlaceholder extends React.Component<ShimmerPlaceholderProps, any> {}

    export default ShimmerPlaceholder
}