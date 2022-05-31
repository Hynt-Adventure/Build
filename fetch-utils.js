const SUPABASE_URL = 'https://hdstylaggwivnddufiyv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhkc3R5bGFnZ3dpdm5kZHVmaXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2OTI4MzAsImV4cCI6MTk2OTI2ODgzMH0.pTPAAOVv6yWdNxYG38icrBAqxVNH8c1TFl9WPdEaT6c';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./Character-select');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getCharacters() {
    const response = await client.from('characters').select('*');

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
