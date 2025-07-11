import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BottomNav = ({ state, descriptors, navigation }) => {
    // Add a safety check for undefined state
    if (!state || !state.routes) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const getIcon = () => {
                    if (label.toLowerCase() === 'home') {
                        return (
                            <View style={styles.iconContainer}>
                                <Image source={require('../../images/home/Ellipse_12.png')} style={styles.ellipse} />
                                <Image source={require('../../images/home/Frame_141.png')} style={styles.icon} />
                            </View>
                        );
                    }
                    if (label.toLowerCase() === 'yolopay') {
                        return (
                             <View style={styles.yoloIconContainer}>
                                <Image source={require('../../images/yolo-pay/Ellipse_13.png')} style={styles.yoloEllipse} />
                                <LinearGradient
                                    colors={['#ffffff', '#ffffff00']}
                                    style={styles.yoloRectangle}
                                >
                                    <Image source={require('../../images/yolo-pay/Rectangle_30.png')} style={styles.yoloIcon} />
                                </LinearGradient>
                                <Image source={require('../../images/yolo-pay/qr.png')} style={styles.qrIcon} />
                            </View>
                        )
                    }
                    if (label.toLowerCase() === 'ginie') {
                        return (
                            <View style={styles.iconContainer}>
                                <Image source={require('../../images/ginie/Ellipse_14.png')} style={styles.ellipse} />
                                <Image source={require('../../images/ginie/Frame_142.png')} style={styles.icon} />
                            </View>
                        );
                    }
                }

                const getLabel = () => {
                    if (label.toLowerCase() === 'home') return 'home';
                    if (label.toLowerCase() === 'yolopay') return 'yolo pay';
                    if (label.toLowerCase() === 'ginie') return 'ginie';
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.navButton}
                    >
                        {getIcon()}
                        <Text style={[styles.navText, { color: isFocused ? '#a90808' : '#ffffff' }]}>
                            {getLabel()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0C0C0C',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 108,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    navButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 41,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    ellipse: {
        ...StyleSheet.absoluteFillObject,
        width: 41,
        height: 41,
    },
    icon: {
        width: 24,
        height: 24,
    },
    yoloIconContainer: {
        width: 51,
        height: 51,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        bottom: 10
    },
    yoloEllipse: {
        ...StyleSheet.absoluteFillObject,
        width: 51,
        height: 51,
    },
    yoloRectangle: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yoloIcon: {
        width: 15,
        height: 10,
    },
    qrIcon: {
        width: 24,
        height: 24,
        position: 'absolute',
    },
    navText: {
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        letterSpacing: -0.17,
    },
});

export default BottomNav; 