import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

import Loading from '../components/Loading';

const index = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Loading />
        </View>
    );
};

export default index;