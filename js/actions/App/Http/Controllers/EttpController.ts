import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
export const show = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
show.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return show.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
show.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
show.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
    const showForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
        showForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::show
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
        showForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\EttpController::importarMetrados
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
export const importarMetrados = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importarMetrados.url(args, options),
    method: 'post',
})

importarMetrados.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/importar-metrados',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::importarMetrados
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
importarMetrados.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return importarMetrados.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::importarMetrados
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
importarMetrados.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importarMetrados.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::importarMetrados
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
    const importarMetradosForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importarMetrados.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::importarMetrados
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
        importarMetradosForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importarMetrados.url(args, options),
            method: 'post',
        })
    
    importarMetrados.form = importarMetradosForm
/**
* @see \App\Http\Controllers\EttpController::guardarEspecificaciones
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
export const guardarEspecificaciones = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: guardarEspecificaciones.url(args, options),
    method: 'post',
})

guardarEspecificaciones.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/guardar-general',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::guardarEspecificaciones
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
guardarEspecificaciones.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return guardarEspecificaciones.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::guardarEspecificaciones
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
guardarEspecificaciones.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: guardarEspecificaciones.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::guardarEspecificaciones
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
    const guardarEspecificacionesForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: guardarEspecificaciones.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::guardarEspecificaciones
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
        guardarEspecificacionesForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: guardarEspecificaciones.url(args, options),
            method: 'post',
        })
    
    guardarEspecificaciones.form = guardarEspecificacionesForm
/**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
export const getSecciones = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSecciones.url(args, options),
    method: 'get',
})

getSecciones.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp/partida/{partidaId}/secciones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
getSecciones.url = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    partidaId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                partidaId: args.partidaId,
                }

    return getSecciones.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{partidaId}', parsedArgs.partidaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
getSecciones.get = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getSecciones.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
getSecciones.head = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getSecciones.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
    const getSeccionesForm = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getSecciones.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        getSeccionesForm.get = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSecciones.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::getSecciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        getSeccionesForm.head = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getSecciones.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getSecciones.form = getSeccionesForm
/**
* @see \App\Http\Controllers\EttpController::guardarSecciones
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
export const guardarSecciones = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: guardarSecciones.url(args, options),
    method: 'put',
})

guardarSecciones.definition = {
    methods: ["put"],
    url: '/costos/{costoProject}/ettp/partida/{partidaId}/secciones',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EttpController::guardarSecciones
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
guardarSecciones.url = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    partidaId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                partidaId: args.partidaId,
                }

    return guardarSecciones.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{partidaId}', parsedArgs.partidaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::guardarSecciones
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
guardarSecciones.put = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: guardarSecciones.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\EttpController::guardarSecciones
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
    const guardarSeccionesForm = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: guardarSecciones.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::guardarSecciones
 * @see app/Http/Controllers/EttpController.php:433
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        guardarSeccionesForm.put = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: guardarSecciones.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    guardarSecciones.form = guardarSeccionesForm
/**
* @see \App\Http\Controllers\EttpController::eliminarSeccion
 * @see app/Http/Controllers/EttpController.php:620
 * @route '/costos/{costoProject}/ettp/seccion/{id}'
 */
export const eliminarSeccion = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminarSeccion.url(args, options),
    method: 'delete',
})

eliminarSeccion.definition = {
    methods: ["delete"],
    url: '/costos/{costoProject}/ettp/seccion/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EttpController::eliminarSeccion
 * @see app/Http/Controllers/EttpController.php:620
 * @route '/costos/{costoProject}/ettp/seccion/{id}'
 */
eliminarSeccion.url = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                id: args.id,
                }

    return eliminarSeccion.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::eliminarSeccion
 * @see app/Http/Controllers/EttpController.php:620
 * @route '/costos/{costoProject}/ettp/seccion/{id}'
 */
eliminarSeccion.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminarSeccion.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EttpController::eliminarSeccion
 * @see app/Http/Controllers/EttpController.php:620
 * @route '/costos/{costoProject}/ettp/seccion/{id}'
 */
    const eliminarSeccionForm = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eliminarSeccion.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::eliminarSeccion
 * @see app/Http/Controllers/EttpController.php:620
 * @route '/costos/{costoProject}/ettp/seccion/{id}'
 */
        eliminarSeccionForm.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eliminarSeccion.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    eliminarSeccion.form = eliminarSeccionForm
/**
* @see \App\Http\Controllers\EttpController::subirImagen
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
export const subirImagen = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subirImagen.url(args, options),
    method: 'post',
})

subirImagen.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/seccion/{id}/imagen',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::subirImagen
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
subirImagen.url = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                id: args.id,
                }

    return subirImagen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::subirImagen
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
subirImagen.post = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subirImagen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::subirImagen
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
    const subirImagenForm = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: subirImagen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::subirImagen
 * @see app/Http/Controllers/EttpController.php:637
 * @route '/costos/{costoProject}/ettp/seccion/{id}/imagen'
 */
        subirImagenForm.post = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: subirImagen.url(args, options),
            method: 'post',
        })
    
    subirImagen.form = subirImagenForm
/**
* @see \App\Http\Controllers\EttpController::eliminarImagen
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
export const eliminarImagen = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminarImagen.url(args, options),
    method: 'delete',
})

eliminarImagen.definition = {
    methods: ["delete"],
    url: '/costos/{costoProject}/ettp/imagen/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EttpController::eliminarImagen
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
eliminarImagen.url = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                id: args.id,
                }

    return eliminarImagen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::eliminarImagen
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
eliminarImagen.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: eliminarImagen.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\EttpController::eliminarImagen
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
    const eliminarImagenForm = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eliminarImagen.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::eliminarImagen
 * @see app/Http/Controllers/EttpController.php:686
 * @route '/costos/{costoProject}/ettp/imagen/{id}'
 */
        eliminarImagenForm.delete = (args: { costoProject: number | { id: number }, id: string | number } | [costoProject: number | { id: number }, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eliminarImagen.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    eliminarImagen.form = eliminarImagenForm
/**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
export const getHuerfanas = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getHuerfanas.url(args, options),
    method: 'get',
})

getHuerfanas.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp/huerfanas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
getHuerfanas.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return getHuerfanas.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
getHuerfanas.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getHuerfanas.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
getHuerfanas.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getHuerfanas.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
    const getHuerfanasForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getHuerfanas.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
        getHuerfanasForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getHuerfanas.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::getHuerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
        getHuerfanasForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getHuerfanas.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getHuerfanas.form = getHuerfanasForm
/**
* @see \App\Http\Controllers\EttpController::eliminarHuerfanas
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
export const eliminarHuerfanas = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eliminarHuerfanas.url(args, options),
    method: 'post',
})

eliminarHuerfanas.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/eliminar-huerfanas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::eliminarHuerfanas
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
eliminarHuerfanas.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return eliminarHuerfanas.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::eliminarHuerfanas
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
eliminarHuerfanas.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: eliminarHuerfanas.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::eliminarHuerfanas
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
    const eliminarHuerfanasForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: eliminarHuerfanas.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::eliminarHuerfanas
 * @see app/Http/Controllers/EttpController.php:725
 * @route '/costos/{costoProject}/ettp/eliminar-huerfanas'
 */
        eliminarHuerfanasForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: eliminarHuerfanas.url(args, options),
            method: 'post',
        })
    
    eliminarHuerfanas.form = eliminarHuerfanasForm
/**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
export const testMetrados = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: testMetrados.url(args, options),
    method: 'get',
})

testMetrados.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp/test',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
testMetrados.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { costoProject: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                }

    return testMetrados.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
testMetrados.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: testMetrados.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
testMetrados.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: testMetrados.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
    const testMetradosForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: testMetrados.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
        testMetradosForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: testMetrados.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::testMetrados
 * @see app/Http/Controllers/EttpController.php:752
 * @route '/costos/{costoProject}/ettp/test'
 */
        testMetradosForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: testMetrados.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    testMetrados.form = testMetradosForm
const EttpController = { show, importarMetrados, guardarEspecificaciones, getSecciones, guardarSecciones, eliminarSeccion, subirImagen, eliminarImagen, getHuerfanas, eliminarHuerfanas, testMetrados }

export default EttpController