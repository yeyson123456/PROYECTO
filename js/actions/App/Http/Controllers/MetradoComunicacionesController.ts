import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
 */
export const index = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-comunicaciones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
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
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
 */
index.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
 */
index.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
 */
    const indexForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
 */
        indexForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoComunicacionesController::index
 * @see app/Http/Controllers/MetradoComunicacionesController.php:19
 * @route '/costos/{costoProject}/metrado-comunicaciones'
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
* @see \App\Http\Controllers\MetradoComunicacionesController::updateMetrado
 * @see app/Http/Controllers/MetradoComunicacionesController.php:34
 * @route '/costos/{costoProject}/metrado-comunicaciones/metrado'
 */
export const updateMetrado = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

updateMetrado.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-comunicaciones/metrado',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateMetrado
 * @see app/Http/Controllers/MetradoComunicacionesController.php:34
 * @route '/costos/{costoProject}/metrado-comunicaciones/metrado'
 */
updateMetrado.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateMetrado.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateMetrado
 * @see app/Http/Controllers/MetradoComunicacionesController.php:34
 * @route '/costos/{costoProject}/metrado-comunicaciones/metrado'
 */
updateMetrado.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateMetrado.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateMetrado
 * @see app/Http/Controllers/MetradoComunicacionesController.php:34
 * @route '/costos/{costoProject}/metrado-comunicaciones/metrado'
 */
    const updateMetradoForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateMetrado.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateMetrado
 * @see app/Http/Controllers/MetradoComunicacionesController.php:34
 * @route '/costos/{costoProject}/metrado-comunicaciones/metrado'
 */
        updateMetradoForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateMetrado.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateMetrado.form = updateMetradoForm
/**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:41
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen'
 */
export const updateResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

updateResumen.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-comunicaciones/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:41
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen'
 */
updateResumen.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateResumen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:41
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen'
 */
updateResumen.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateResumen.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:41
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen'
 */
    const updateResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateResumen.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionesController::updateResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:41
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen'
 */
        updateResumenForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateResumen.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateResumen.form = updateResumenForm
/**
* @see \App\Http\Controllers\MetradoComunicacionesController::syncResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:48
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen/sync'
 */
export const syncResumen = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

syncResumen.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/metrado-comunicaciones/resumen/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::syncResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:48
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen/sync'
 */
syncResumen.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return syncResumen.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoComunicacionesController::syncResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:48
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen/sync'
 */
syncResumen.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncResumen.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoComunicacionesController::syncResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:48
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen/sync'
 */
    const syncResumenForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: syncResumen.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoComunicacionesController::syncResumen
 * @see app/Http/Controllers/MetradoComunicacionesController.php:48
 * @route '/costos/{costoProject}/metrado-comunicaciones/resumen/sync'
 */
        syncResumenForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: syncResumen.url(args, options),
            method: 'post',
        })
    
    syncResumen.form = syncResumenForm
const MetradoComunicacionesController = { index, updateMetrado, updateResumen, syncResumen }

export default MetradoComunicacionesController