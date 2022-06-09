import React from 'react';
import Admin from '@/Layouts/Admin';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';

export default function Create(props) {
    const { tasks } = props
    console.log(tasks);
    return (
        <Admin
            auth={props.auth}
            errors={props.errors}
            header={'Tasks'}
        >
            <Head title="Tasks" />

            <div className="container mt-3">
                <div className="card mt-3">
                    <div className='card-header'>
                        <Link href={route('tasks.create')} className="btn btn-sm btn-primary">
                            Nuevo
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Prioridad</th>
                                        <th scope="col">Fecha creacion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tasks.map((task) => {
                                            <tr key={task.id}>
                                                <th scope="row">{ task.name }</th>
                                                <td>{task.status}</td>
                                                <td>{task.priority_level}</td>
                                                <td>{task.completion_time}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
