import React from 'react';
import Admin from '@/Layouts/Admin';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';

export default function Create(props) {
    const { tareas } = props
    return (
        <Admin
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
                        <div className='row'>
                            wefr
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
