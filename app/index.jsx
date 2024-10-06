import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();

    return (
        <ScreenWrapper>
            <Text>Index</Text>
            <Button title="Welcome" onPress={() => router.push('welcome')} />
        </ScreenWrapper>
    );
};

export default index;