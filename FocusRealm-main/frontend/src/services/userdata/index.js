import { supabase } from '..';

export async function createUserData(data) {
    try {
        const res = await supabase.from('userdata').insert(data);
        if (res.error) {
            console.log('Error setting userdata:', error.message);
            return false;
        } else {
            console.log('User setted successfully:', res.data);
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getUserData(userId) {
    try {
        const res = await supabase
            .from('userdata')
            .select()
            .eq('userId', userId);
        if (res.data.length > 0) {
            return res.data[0];
        } else {
            // if (localStorage.getItem('setUserDataAfterGoogle')) {
            //     const res = (async () => {
            //         console.log(
            //             localStorage.getItem(
            //                 'sb-wrvguswzbnmiihjofqju-auth-token'
            //             )
            //         );
            //         localStorage.removeItem('setUserDataAfterGoogle');
            //     })();
            // }
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function updateUserTotalTime(userdata, time) {
    const { error } = await supabase
        .from('userdata')
        .update({ totaltime: userdata.totaltime + parseInt(time) })
        .eq('id', userdata.id);

    if (error) {
        return {
            error,
            success: false,
            value: null,
        };
    } else {
        return {
            error,
            success: true,
            value: parseInt(time),
        };
    }
}

export async function updateUserFocusTime({ id, focustime }) {
    const { error } = await supabase
        .from('userdata')
        .update({ focustime })
        .eq('id', id);
        console.log('sucess')

    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}

export async function updateUserBreakTime({ id, breaktime }) {
    const { error } = await supabase
        .from('userdata')
        .update({ breaktime })
        .eq('id', id);

    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}

export async function updateUserFocusAndBreakTime({
    id,
    focustime,
    breaktime,
    testscore,
}) {
    const { error } = await supabase
        .from('userdata')
        .update({ focustime, breaktime, testscore })
        .eq('id', id);

    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}

export async function updateUserTutorialWatched(id) {
    const { error } = await supabase
        .from('userdata')
        .update({ tutorial_watched: true })
        .eq('id', id);

    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}



export async function updateusernotes(id,note) {
    const { error } = await supabase
        .from('userdata')
        .update({'notes':note})
        .eq('id', id);
    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}
export async function updateusertask(id,taskdata) {
    const { error } = await supabase
        .from('userdata')
        .update({task:taskdata})
        .eq('id', id);

    if (error) {
        return {
            error,
            success: false,
        };
    } else {
        return {
            error,
            success: true,
        };
    }
}

export async function getDataByUuid(id) {
    try {
        const res = await supabase.from('userdata').select().eq('uuid', id);
        if (res.data.length > 0) {
            return res.data[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function setDataByUuid(id, userId, user_identity) {
    try {
        const res = await supabase
            .from('userdata')
            .update({
                userId,
                user_identity,
            })
            .eq('uuid', id);
        if (res.data.length > 0) {
            return res.data[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

