import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import secciones57901d from './secciones'
import seccion from './seccion'
import imagen from './imagen'
import huerfanasF3cca7 from './huerfanas'
/**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
export const index = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
index.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
index.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
index.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
    const indexForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
        indexForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::index
 * @see app/Http/Controllers/EttpController.php:35
 * @route '/costos/{costoProject}/ettp'
 */
        indexForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\EttpController::importar
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
export const importar = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importar.url(args, options),
    method: 'post',
})

importar.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/importar-metrados',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::importar
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
importar.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return importar.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::importar
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
importar.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::importar
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
    const importarForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::importar
 * @see app/Http/Controllers/EttpController.php:200
 * @route '/costos/{costoProject}/ettp/importar-metrados'
 */
        importarForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importar.url(args, options),
            method: 'post',
        })
    
    importar.form = importarForm
/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
export const guardar = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: guardar.url(args, options),
    method: 'post',
})

guardar.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/ettp/guardar-general',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
guardar.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return guardar.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
guardar.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: guardar.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
    const guardarForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: guardar.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\EttpController::guardar
 * @see app/Http/Controllers/EttpController.php:329
 * @route '/costos/{costoProject}/ettp/guardar-general'
 */
        guardarForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: guardar.url(args, options),
            method: 'post',
        })
    
    guardar.form = guardarForm
/**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
export const secciones = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: secciones.url(args, options),
    method: 'get',
})

secciones.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp/partida/{partidaId}/secciones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
secciones.url = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions) => {
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

    return secciones.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{partidaId}', parsedArgs.partidaId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
secciones.get = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: secciones.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
secciones.head = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: secciones.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
    const seccionesForm = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: secciones.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        seccionesForm.get = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: secciones.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::secciones
 * @see app/Http/Controllers/EttpController.php:395
 * @route '/costos/{costoProject}/ettp/partida/{partidaId}/secciones'
 */
        seccionesForm.head = (args: { costoProject: number | { id: number }, partidaId: string | number } | [costoProject: number | { id: number }, partidaId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: secciones.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    secciones.form = seccionesForm
/**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
export const huerfanas = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: huerfanas.url(args, options),
    method: 'get',
})

huerfanas.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/ettp/huerfanas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
huerfanas.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return huerfanas.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
huerfanas.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: huerfanas.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
huerfanas.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: huerfanas.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
    const huerfanasForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: huerfanas.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
        huerfanasForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: huerfanas.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\EttpController::huerfanas
 * @see app/Http/Controllers/EttpController.php:703
 * @route '/costos/{costoProject}/ettp/huerfanas'
 */
        huerfanasForm.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: huerfanas.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    huerfanas.form = huerfanasForm
const ettp = {
    index: Object.assign(index, index),
importar: Object.assign(importar, importar),
guardar: Object.assign(guardar, guardar),
secciones: Object.assign(secciones, secciones57901d),
seccion: Object.assign(seccion, seccion),
imagen: Object.assign(imagen, imagen),
huerfanas: Object.assign(huerfanas, huerfanasF3cca7),
}

export default ettp