import { Navigate } from 'react-router-dom';
import Exercises from './pages/Exercises/Exercises';
import Games from './pages/Games/Games';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import McqPage from './pages/McqPage/McqPage';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Signup from './pages/Signup/Signup';
import TestPage from './pages/TestPage/TestPage';
import WordGame from './pages/WordGame/WordGame';
import ConfirmMail from './pages/ConfirmMail/ConfirmMail';
import Hangman from './pages/Game/Hangman/Hangman';
import Trivia from './pages/Game/Trivia/Trivia';
import HighLow from './pages/Game/HighLow/HighLow';
import GuessTheLogo from './pages/Game/GuessTheLogo/GuessTheLogo';
import Exercise from './pages/Exercise/Exercise';
import Landing from './pages/Landing/Landing';
import SignupSuccess from './pages/Signup/SignupSuccess';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import Notes from './pages/Notes/notes';
import Task from './pages/task/task';
import Typing from './pages/Game/Typing-Test/Typing-Test';
import Board from './pages/Game/TicTacToe/src/App';
import Casino from './pages/Game/BlackJack/src/App';
import Puzzle from './pages/Game/Sudoku/src/App';
import Chess from './pages/Game/Chess/Chess';
import { Small } from './pages/smallwindow/small';
export const routes = [
    {
        path: '/',
        Component: Landing,
        auth: false,
        authPage: false,
    },
    {
        path: '/small',
        Component: Small,
        auth: false,
        authPage: false,
    },
    {
        path: '/home',
        Component: Home,
        auth: true,
        authPage: false,
    },

    {
        path: '/notes',
        Component: Notes,
        auth: true,
        authPage: false,
    },
    {
        path: '/task',
        Component: Task,
        auth: true,
        authPage: false,
    },
    {
        path: '/login',
        Component: Login,
        auth: false,
        authPage: true,
    },
    {
        path: '/signup',
        Component: Signup,
        auth: false,
        authPage: true,
    },
    {
        path: '/signup-success',
        Component: SignupSuccess,
        auth: false,
        authPage: true,
    },
    {
        path: '/confirmemail',
        Component: ConfirmMail,
        auth: false,
        authPage: true,
    },
    {
        path: '/register',
        Component: Register,
        auth: false,
        authPage: true,
    },
    {
        path: '/test',
        Component: TestPage,
        auth: false,
        authPage: false,
    },
    {
        path: '/wordgame',
        Component: WordGame,
        auth: false,
        authPage: false,
    },
    {
        path: '/mcq',
        Component: McqPage,
        auth: false,
        authPage: false,
    },
    {
        path: '/change-password',
        Component: ChangePassword,
        auth: true,
        authPage: false,
    },
    {
        path: '/games',
        Component: Games,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/trivia',
        Component: Trivia,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/hangman',
        Component: Hangman,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/highlow',
        Component: HighLow,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/guess-the-logo',
        Component: GuessTheLogo,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/typing-test',
        Component: Typing,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/tic-tac-toe',
        Component: Board,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/black-jack',
        Component: Casino,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/sudoku',
        Component: Puzzle,
        auth: true,
        authPage: false,
    },
    {
        path: '/games/chess',
        Component: Chess,
        auth: true,
        authPage: false,
    },
    {
        path: '/exercise',
        Component: Exercises,
        auth: true,
        authPage: false,
    },
    {
        path: '/exercise/:id',
        Component: Exercise,
        auth: true,
        authPage: false,
    },
    {
        path: '/profile',
        Component: Profile,
        auth: true,
        authPage: false,
    },
];

export const ProtectedRoute = ({
    userdata,
    session,
    children,
    auth,
    path,
    authPage,
}) => {
    if (path === '/') {
        if (session) {
            return <Navigate to='/home' />;
        }
    }

    if (path == '/home') {
        if (session) {
            if (userdata == null) {
                return <Navigate to='/test' />;
            }
        }
    }

    if (!session) {
        if (auth) return <Navigate to='/' />;
        return children;
    } else {
        if (authPage) return <Navigate to='/home' />;
        return children;
    }
};
