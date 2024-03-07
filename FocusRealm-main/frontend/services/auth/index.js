import { toast } from 'react-toastify';
import { supabase } from '..';
import { scoreToTime } from '../../utils/scoreToTime';
import { createUserData } from '../userdata';
import { v4 as uuid } from 'uuid';
import { colors } from '@material-ui/core';
import React from 'react';
export const checkUser = async ({ email, userId }) => {
    if (email) {
        const res = await supabase
            .from('userdata')
            .select()
            .eq('user_identity', email);
        if (res.data.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    if (userId) {
        const res = await supabase
            .from('userdata')
            .select()
            .eq('userId', userId);
        if (res.data.length > 0) {
            return true;
        } else {
            return false;
        }
    }
};

export const createUser = async (userData) => {
    try {
        const isUserAlreadyCreated = await checkUser({ email: userData.email });
        if (isUserAlreadyCreated) {
            alert('email already registered');
            return {
                result: false,
                error: 'User already present',
            };
        }

        const { name, email, password } = userData;
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                },
            },
        });

        if (error) {
            console.log('Error creating user:', error.message);
            return {
                result: false,
                error: error.message,
            };
        } else {
            console.log('User created successfully:', data);
            // const { breaktime, focustime } = scoreToTime(
            //     localStorage.getItem('TestScore')
            // );

            const focustime = parseInt(localStorage.getItem('focustime'));
            const breaktime = parseInt(localStorage.getItem('breaktime'));

            const userData = {
                userId: data.user.id,
                testscore: localStorage.getItem('TestScore'),
                breaktime,
                focustime,
                totaltime: 0,
                dailystreak: 1,
                user_identity: data.user.email
                    ? data.user.email
                    : data.user.phone,
            };
            await createUserData(userData);
            return {
                result: true,
                error: null,
            };
        }
    } catch (error) {
        console.log('error creating user', error);
        return {
            result: false,
            error: error,
        };
    }
};

export const loginUser = async (userData) => {
    const { error } = await supabase.auth.signInWithPassword(userData);
    if (error) {
        alert(error.error_description || error.message);
        return false;
    }
    return true;
};

export async function signInWithGoogle(signup=false) {
    console.log("Sign Inside");
    if(signup){
        console.log("signup");
        console.log('inside uuid');
        const id = uuid();
        localStorage.setItem('oauth_uuid', id);
        // const { breaktime, focustime } = scoreToTime(
        //     localStorage.getItem('TestScore')
        // );
        const focustime = parseInt(localStorage.getItem('focustime'));
        const breaktime = parseInt(localStorage.getItem('breaktime'));
        console.log(focustime);
        console.log(breaktime);
        const userData = {
            testscore: localStorage.getItem('TestScore'),
            breaktime,
            focustime,
            totaltime: 0,
            dailystreak: 1,
            uuid: id,
        };
        await createUserData(userData);
    }
    console.log("this too");
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    });
    console.log(data,error)
}

export async function checkAndCreateUserData(data) {
    const result = await checkUser({
        userId: data.user.id,
    });

    if (result) {
        return false;
    }

    const userData = {
        userId: data.user.id,
        testscore: localStorage.getItem('TestScore'),
        breaktime,
        focustime,
        totaltime: 0,
        dailystreak: 1,
    };
    await createUserData(userData);
    return true;
}

export async function forgotPassword(email) {
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: '/change-password',
    });
}
