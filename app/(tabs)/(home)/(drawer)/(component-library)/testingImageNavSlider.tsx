

//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   Animated,
// } from "react-native";

// const { width, height } = Dimensions.get("screen");

// const images: { [key: string]: string } = {
//   man: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   women:
//     "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   kids: "https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   skullcandy:
//     "https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   help: "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// };

// interface ImageData {
//   key: string;
//   title: string;
//   image: string;
//   ref: React.RefObject<View>;
// }

// const Tab = React.forwardRef<View, { item: ImageData }>((props, ref) => {
//   return (
//     <View ref={ref}>
//       <Text
//         style={{
//           color: "white",
//         //   fontSize: 84 / props.item.title.length,
//           textTransform: "uppercase",
//         }}
//       >
//         {props.item.title}
//       </Text>
//     </View>
//   );
// });

// const Indicator: React.FC<{ measures: any[]; scrollX: Animated.Value }> = ({
//   measures,
//   scrollX,
// }) => {
// //   const inputRange = measures.map((_, i) => i * width);
// //   const translateX = scrollX.interpolate({
// //     inputRange,
// //     outputRange: measures.map((measure) => measure.x),
// //   });

//   return (
//     <Animated.View
//       style={{
//         position: "absolute",
//         height: 4,
//         width: 100 , // measures[0]?.width || 0,
//         left: 0,
//         backgroundColor: "white",
//         bottom: -10,
       
//         // transform: [{ translateX }],
//       }}
//     /> 
//   );
// };

// const Tabs: React.FC<{ data: ImageData[]; scrollX: Animated.Value }> = ({
//   data,
//   scrollX,
// }) => {
//   const [measures, setMeasures] = React.useState<any[]>([]);
//   const containerRef = React.useRef<View>(null);

//   React.useEffect(() => {
//     const m: any[] = [];
//     data.forEach((item) => {
//       item.ref.current?.measureLayout(
//         containerRef.current as any,
//         (x, y, width, height) => {
//           m.push({ x, y, width, height });
//           if (m.length === data.length) {
//             setMeasures(m);
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <View style={{ position: "absolute", top: 100, width }}>
//       <View
//         ref={containerRef}
//         style={{
//           justifyContent: "space-evenly",
//           flex: 1,
//           flexDirection: "row",
//         }}
//       >
//         {data.map((item) => {
//           return <Tab key={item.key} item={item} ref={item.ref} />;
//         })}
//       </View>
//       {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}
//     </View>
//   );
// };

// const data: ImageData[] = Object.keys(images).map((key) => ({
//   key,
//   title: key,
//   image: images[key],
//   ref: React.createRef<View>(),
// }));

// export default function App() {
//   const scrollX = React.useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Animated.FlatList
//         data={data}
//         keyExtractor={(item) => item.key}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         bounces={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         renderItem={({ item }) => {
//           return (
//             <View
//               style={{
//                 width,
//                 height,
//               }}
//             >
//               <Image source={{ uri: item.image }} style={styles.image} />
//               <View
//                 style={[
//                   StyleSheet.absoluteFillObject,
//                   { backgroundColor: "rgba(0,0,0,0.3)" },
//                 ]}
//               />
//             </View>
//           );
//         }}
//       />
//       <Tabs data={data} scrollX={scrollX} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//   },
// });







// // import { StatusBar } from "expo-status-bar";
// // import React from "react";
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   Image,
// //   Dimensions,
// //   Animated,
// // } from "react-native";

// // const { width, height } = Dimensions.get("screen");

// // const images: { [key: string]: string } = {
// //   man: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// //   women:
// //     "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// //   kids: "https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// //   skullcandy:
// //     "https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// //   help: "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// // };

// // interface ImageData {
// //   key: string;
// //   title: string;
// //   image: string;
// //   ref: React.RefObject<View>;
// // }

// // const Tab = React.forwardRef<View, { item: ImageData }>((props, ref) => {
// //   return (
// //     <View ref={ref}>
// //       <Text
// //         style={{
// //           color: "white",
// //         //   fontSize: 84 / props.item.title.length,
// //           textTransform: "uppercase",
// //         }}
// //       >
// //         {props.item.title}
// //       </Text>
// //     </View>
// //   );
// // });

// // const Indicator: React.FC<{ measures: any[]; scrollX: Animated.Value }> = ({
// //   measures,
// //   scrollX,
// // }) => {
// // //   const inputRange = measures.map((_, i) => i * width);
// // //   const translateX = scrollX.interpolate({
// // //     inputRange,
// // //     outputRange: measures.map((measure) => measure.x),
// // //   });

// //   return (
// //     <Animated.View
// //       style={{
// //         position: "absolute",
// //         height: 4,
// //         width: 100 , // measures[0]?.width || 0,
// //         left: 0,
// //         backgroundColor: "white",
// //         bottom: -10,
       
// //         // transform: [{ translateX }],
// //       }}
// //     /> 
// //   );
// // };

// // const Tabs: React.FC<{ data: ImageData[]; scrollX: Animated.Value }> = ({
// //   data,
// //   scrollX,
// // }) => {
// //   const [measures, setMeasures] = React.useState<any[]>([]);
// //   const containerRef = React.useRef<View>(null);

// //   React.useEffect(() => {
// //     const m: any[] = [];
// //     data.forEach((item) => {
// //       item.ref.current?.measureLayout(
// //         containerRef.current as any,
// //         (x, y, width, height) => {
// //           m.push({ x, y, width, height });
// //           if (m.length === data.length) {
// //             setMeasures(m);
// //           }
// //         }
// //       );
// //     });
// //   }, []);

// //   return (
// //     <View style={{ position: "absolute", top: 100, width }}>
// //       <View
// //         ref={containerRef}
// //         style={{
// //           justifyContent: "space-evenly",
// //           flex: 1,
// //           flexDirection: "row",
// //         }}
// //       >
// //         {data.map((item) => {
// //           return <Tab key={item.key} item={item} ref={item.ref} />;
// //         })}
// //       </View>
// //       {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX} />}
// //     </View>
// //   );
// // };

// // const data: ImageData[] = Object.keys(images).map((key) => ({
// //   key,
// //   title: key,
// //   image: images[key],
// //   ref: React.createRef<View>(),
// // }));

// // export default function App() {
// //   const scrollX = React.useRef(new Animated.Value(0)).current;

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar hidden />
// //       <Animated.FlatList
// //         data={data}
// //         keyExtractor={(item) => item.key}
// //         horizontal
// //         pagingEnabled
// //         showsHorizontalScrollIndicator={false}
// //         bounces={false}
// //         onScroll={Animated.event(
// //           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
// //           { useNativeDriver: false }
// //         )}
// //         renderItem={({ item }) => {
// //           return (
// //             <View
// //               style={{
// //                 width,
// //                 height,
// //               }}
// //             >
// //               <Image source={{ uri: item.image }} style={styles.image} />
// //               <View
// //                 style={[
// //                   StyleSheet.absoluteFillObject,
// //                   { backgroundColor: "rgba(0,0,0,0.3)" },
// //                 ]}
// //               />
// //             </View>
// //           );
// //         }}
// //       />
// //       <Tabs data={data} scrollX={scrollX} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   image: {
// //     flex: 1,
// //     resizeMode: "cover",
// //   },
// // });

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   Animated,
//   findNodeHandle
// } from "react-native";

// const { width, height } = Dimensions.get("screen");

// const images: { [key: string]: string } = {
//   man: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   women:
//     "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   kids: "https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   skullcandy:
//     "https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   help: "https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// };

// interface ImageData {
//   key: string;
//   title: string;
//   image: string;
// }

// const Tab: React.ForwardedRef<{ item: ImageData } , ref> = ({ item }) => {
//     // const Tab: React.FC<{ item: ImageData }> = ({ item }) => {
//         return (
//     <View ref={ref}>
//       <Text
//         style={{
//           color: "white",
//           fontSize: 84 / data.length,
//           textTransform: "uppercase"
//         }}
//       >
//         {item.title}
//       </Text>
//     </View>
//   );
// };

// const Indicator = () => {
//     return <View  
//     style={{
//         position: 'absolute',
//         height: 4,
//         width: 100,
//         backgroundColor: 'white',
//         bottom: -10

//     }}/>
// }

// const Tabs: React.FC<{ data: ImageData[]; scrollX: Animated.Value }> = ({
//   data,
//   scrollX,
// }) => {
//   return (
//     <View style={{ position: "absolute", top: 100, width }}>
//       <View
//         style={{
//           justifyContent: "space-evenly",
//           flex: 1,
//           flexDirection: "row",
//         }}
//       >
//         {data.map((item) => {
//           return <Tab key={item.key} item={item} ref={item.ref} />;
//         })}
//       </View>
//       <Indicator />
//     </View>
//   );
// };

// const data: ImageData[] = Object.keys(images).map((key) => ({
//   key,
//   title: key,
//   image: images[key],
//   ref: React.createRef()
// }));

// export default function App() {
//   const scrollX = React.useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Animated.FlatList
//         data={data}
//         keyExtractor={(item) => item.key}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         bounces={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false } // Ensure to set this to false as animated scroll may not support native driver
//         )}
//         renderItem={({ item }) => {
//           return (
//             <View
//               style={{
//                 width,
//                 height,
//               }}
//             >
//               <Image source={{ uri: item.image }} style={styles.image} />
//               <View
//                 style={[
//                   StyleSheet.absoluteFillObject,
//                   { backgroundColor: "rgba(0,0,0,0.3)" },
//                 ]}
//               />
//             </View>
//           );
//         }}
//       />
//       <Tabs data={data} scrollX={scrollX} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     // width: width * 0.8,
//     // height: height * 0.5,
//     // borderRadius: 15,
//     flex: 1,
//     resizeMode: "cover",
//   },
// });
