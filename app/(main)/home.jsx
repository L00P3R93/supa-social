import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import Button from '../../components/Button'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const Home = () => {
    const { setAuth } = useAuth();

    const onSignOut = async () => {
        //setAuth(null);
        const { error } = await supabase.auth.signOut();
        if(error) Alert.alert('Error',error.message);
    }

    return (
        <ScreenWrapper>
            <Text>Home</Text>
            <Button title='Sign Out' onPress={onSignOut} />
        </ScreenWrapper>
    )
}

export default Home;

const styles = StyleSheet.create({})