import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import Input from '../components/Input';
import Icon from '../assets/icons';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';


const SignIn = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if(!emailRef.current || !passwordRef.current) {
            Alert.alert('Error', "Please fill all the fields");
            return;
        }

        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();

        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        console.log('Error: ', error);

        if(error) Alert.alert('Error',error.message);
        setLoading(false);
    };

    return (
        <ScreenWrapper>
            <StatusBar style='dark' />
            <View style={styles.container}>
                <BackButton router={router} />

                {/* Welcome Text */}
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                {/* Form */}
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(1.8), color: theme.colors.text }}>
                        Please Sign In to continue
                    </Text>
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                        placeholder="Enter your mail"
                        onChangeText={value => emailRef.current = value}
                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                        placeholder="Enter your password"
                        secureTextEntry
                        onChangeText={value => passwordRef.current = value}
                    />
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>

                    {/* Button */}
                    <Button title='Sign In' loading={loading} onPress={onSubmit} />
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account? </Text>
                    <Pressable onPress={() => router.push('signUp')}>
                        <Text style={[styles.footerText, { color: theme.colors.primary }]}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(6),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.9),
    },
});