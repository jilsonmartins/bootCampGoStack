import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const users = createUser({
        name: 'Jilson Martins Junior',
        email: 'jilson@martins.com.br',
        password: '12345',
        techs: [
            'Node.js', 
            'ReactJS', 
            'React Native',
            { title: 'Javascript', experience: 100 },
        ],
    });

    return response.json({ message: 'Hello World' });
};