/* @flow */

import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ShimmerPlaceholder from '@hortau/react-native-shimmer-placeholder';

const FacebookContent = ({ isReversed, shimmerColors, hasData, hasBorder, randomWidth }) => {
  // Handle visible
  const [visible, setVisible] = useState(false)
  const [avatarVisible, setAvatarVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      hasData && setVisible(true)
    }, 2000)
  }, [])

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <ShimmerPlaceholder
          width={80} height={80}
          style={{ marginRight: 10 }}
          isReversed={isReversed}
          shimmerColors={shimmerColors}
          shimmerStyle={[hasBorder && { borderRadius: 40 }]}
          visible={avatarVisible}
        >
          {hasData && <Image
            style={{ width: 80, height: 80, borderRadius: 100 }}
            source={{ uri: 'https://unsplash.it/1000/1000' }}
            onLoadEnd={() => setAvatarVisible(true)}
          />}
        </ShimmerPlaceholder>
        <View style={{ justifyContent: "space-between" }}>
          <ShimmerPlaceholder
            width={randomWidth ? 250 : 200}
            style={{}}
            isReversed={isReversed}
            shimmerColors={shimmerColors}
            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
            visible={visible}
          >
            <Text style={{ flex: 1, flexWrap: 'wrap', width: 200 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
             </Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            width={randomWidth ? 150 : 200}
            isReversed={isReversed}
            shimmerColors={shimmerColors}
            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
            visible={visible}
          />
          <ShimmerPlaceholder
            width={200}
            isReversed={isReversed}
            shimmerColors={shimmerColors}
            shimmerStyle={[hasBorder && { borderRadius: 20 }]}
            visible={visible}
          />
        </View>
      </View>
    </View>
  )
}



export default () => {
  const [visible, setVisible] = useState(false)
  const [avatarVisible, setAvatarVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 2000)
  }, [])
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}> React Native Shimmer Placeholder </Text>
      <Text style={styles.sessionTitle}>Simple</Text>
      <ShimmerPlaceholder
        shimmerStyle={{ borderRadius: 10 }}
      />
      <Text style={styles.sessionTitle}>Avatar</Text>
      <ShimmerPlaceholder
        width={150}
        height={150}
        shimmerStyle={{ borderRadius: 100 }}
        visible={avatarVisible}
      >
        <Image
          style={{ width: 150, height: 150, borderRadius: 100 }}
          source={{ uri: 'https://unsplash.it/1000/1000' }}
          onLoadEnd={() => setAvatarVisible(true)}
        />
      </ShimmerPlaceholder>
      <Text style={styles.sessionTitle}>Load text data</Text>
      <ShimmerPlaceholder
        shimmerStyle={{ borderRadius: 10 }}
        visible={visible}
        width={350}
      >
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </Text>
      </ShimmerPlaceholder>
      <ShimmerPlaceholder
        shimmerStyle={{ borderRadius: 10, marginTop: 2 }}
        width={150}
        visible={visible}
      />
      <ShimmerPlaceholder
        shimmerStyle={{ borderRadius: 10, marginTop: 2 }}
        width={250}
        visible={visible}
      />
      <Text></Text>
      <Text style={styles.sessionTitle}>Facebook</Text>
      <FacebookContent randomWidth />
      <Text style={styles.sessionTitle}>Facebook - color</Text>
      <FacebookContent shimmerColors={["#FFBDBA", "#FF9C6D", "#FFBDBA"]} />
      <Text style={styles.sessionTitle}>Facebook - load data</Text>
      <FacebookContent hasBorder hasData />
      <Text style={styles.sessionTitle}>Facebook - Reverse</Text>
      <FacebookContent isReversed />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 60,

  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  sessionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 6,
    fontWeight: "600"
  }
});
