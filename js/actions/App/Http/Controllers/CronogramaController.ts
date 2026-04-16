import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/module/crono_general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CronogramaController::index
 * @see app/Http/Controllers/CronogramaController.php:16
 * @route '/module/crono_general'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
export const valorizado = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: valorizado.url(options),
    method: 'get',
})

valorizado.definition = {
    methods: ["get","head"],
    url: '/module/crono_valorizado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
valorizado.url = (options?: RouteQueryOptions) => {
    return valorizado.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
valorizado.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: valorizado.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
valorizado.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: valorizado.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
    const valorizadoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: valorizado.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
        valorizadoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: valorizado.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CronogramaController::valorizado
 * @see app/Http/Controllers/CronogramaController.php:0
 * @route '/module/crono_valorizado'
 */
        valorizadoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: valorizado.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    valorizado.form = valorizadoForm
/**
* @see \App\Http\Controllers\CronogramaController::store
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
export const store = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cronograma/save/{project}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CronogramaController::store
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
store.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return store.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronogramaController::store
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
store.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CronogramaController::store
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
    const storeForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CronogramaController::store
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
        storeForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
export const getPartidas = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPartidas.url(args, options),
    method: 'get',
})

getPartidas.definition = {
    methods: ["get","head"],
    url: '/presupuesto/{project}/partidas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
getPartidas.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: args.project,
                }

    return getPartidas.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
getPartidas.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPartidas.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
getPartidas.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPartidas.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
    const getPartidasForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getPartidas.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
        getPartidasForm.get = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getPartidas.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CronogramaController::getPartidas
 * @see app/Http/Controllers/CronogramaController.php:194
 * @route '/presupuesto/{project}/partidas'
 */
        getPartidasForm.head = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getPartidas.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getPartidas.form = getPartidasForm
const CronogramaController = { index, valorizado, store, getPartidas }

export default CronogramaController