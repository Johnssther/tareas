import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';

export default function Create(props) {
    const { tareas } = props
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tareas</h2>}
        >
            <Head title="Tareas" />

            <div className="container mt-3">
                <div className="card mt-3">
                    <div className='card-header'>
                        <Link href={route('tareas.create')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Crear tarea
                        </Link>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Tarea</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tareas.map((tarea) => {
                                        return (
                                            <tr key={tarea.id}>
                                                <td scope="col">{tarea.id}</td>
                                                <td scope="col">{tarea.nombre}</td>
                                                <td scope="col">{tarea.status}</td>
                                                <td scope="col">eliminar</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
