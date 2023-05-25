import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

interface Props {
    style: {},
    children: any
}

export const LM = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK': require('../assets/fonts/LEMONMILK-Regular.otf'),
            })

            setFontLoaded(true);
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK' }}>
            {children}
        </Text>
    )
}

export const LMItalic = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK-italic': require('../assets/fonts/LEMONMILK-RegularItalic.otf'),
            })

            setFontLoaded(true);
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK-italic' }}>
            {children}
        </Text>
    )
}

export const LMLight = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK-light': require('../assets/fonts/LEMONMILK-Light.otf'),
            });

            setFontLoaded(true)
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK-light' }}>
            {children}
        </Text>
    )
}

export const LMLightItalic = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK-lightItalic': require('../assets/fonts/LEMONMILK-LightItalic.otf'),
            });

            setFontLoaded(true)
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK-lightItalic' }}>
            {children}
        </Text>
    )
}

export const LMBold = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK-bold': require('../assets/fonts/LEMONMILK-Medium.otf'),
            });

            setFontLoaded(true)
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK-bold' }}>
            {children}
        </Text>
    )
}

export const LMBoldItalic = ({ style, children }: Props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'LEMONMILK-boldItalic': require('../assets/fonts/LEMONMILK-MediumItalic.otf'),
            });

            setFontLoaded(true)
        }

        loadFont()
    }, [])

    if (!fontLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Text style={{ ...style, fontFamily: 'LEMONMILK-boldItalic' }}>
            {children}
        </Text>
    )
}
