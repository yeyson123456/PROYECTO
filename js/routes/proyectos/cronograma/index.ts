import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
export const materiales = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: materiales.url(options),
    method: 'get',
})

materiales.definition = {
    methods: ["get","head"],
    url: '/module/crono_materiales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
materiales.url = (options?: RouteQueryOptions) => {
    return materiales.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
materiales.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: materiales.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
materiales.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: materiales.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
    const materialesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: materiales.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
        materialesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: materiales.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CronoMaterialesController::materiales
 * @see app/Http/Controllers/CronoMaterialesController.php:12
 * @route '/module/crono_materiales'
 */
        materialesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: materiales.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    materiales.form = materialesForm
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
* @see \App\Http\Controllers\CronogramaController::save
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
export const save = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

save.definition = {
    methods: ["post"],
    url: '/cronograma/save/{project}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CronogramaController::save
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
save.url = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return save.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CronogramaController::save
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
save.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: save.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CronogramaController::save
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
    const saveForm = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: save.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CronogramaController::save
 * @see app/Http/Controllers/CronogramaController.php:77
 * @route '/cronograma/save/{project}'
 */
        saveForm.post = (args: { project: string | number } | [project: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: save.url(args, options),
            method: 'post',
        })
    
    save.form = saveForm
const cronograma = {
    index: Object.assign(index, index),
materiales: Object.assign(materiales, materiales),
valorizado: Object.assign(valorizado, valorizado),
save: Object.assign(save, save),
}

export default cronograma