import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoElectricasController::update
 * @see app/Http/Controllers/MetradoElectricasController.php:41
 * @route '/costos/{costoProject}/metrado-electricas/resumen'
 */
export const update = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-electricas/resumen',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoElectricasController::update
 * @see app/Http/Controllers/MetradoElectricasController.php:41
 * @route '/costos/{costoProject}/metrado-electricas/resumen'
 */
update.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasController::update
 * @see app/Http/Controllers/MetradoElectricasController.php:41
 * @route '/costos/{costoProject}/metrado-electricas/resumen'
 */
update.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasController::update
 * @see app/Http/Controllers/MetradoElectricasController.php:41
 * @route '/costos/{costoProject}/metrado-electricas/resumen'
 */
    const updateForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasController::update
 * @see app/Http/Controllers/MetradoElectricasController.php:41
 * @route '/costos/{costoProject}/metrado-electricas/resumen'
 */
        updateForm.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\MetradoElectricasController::sync
 * @see app/Http/Controllers/MetradoElectricasController.php:48
 * @route '/costos/{costoProject}/metrado-electricas/resumen/sync'
 */
export const sync = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

sync.definition = {
    methods: ["post"],
    url: '/costos/{costoProject}/metrado-electricas/resumen/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MetradoElectricasController::sync
 * @see app/Http/Controllers/MetradoElectricasController.php:48
 * @route '/costos/{costoProject}/metrado-electricas/resumen/sync'
 */
sync.url = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return sync.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoElectricasController::sync
 * @see app/Http/Controllers/MetradoElectricasController.php:48
 * @route '/costos/{costoProject}/metrado-electricas/resumen/sync'
 */
sync.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MetradoElectricasController::sync
 * @see app/Http/Controllers/MetradoElectricasController.php:48
 * @route '/costos/{costoProject}/metrado-electricas/resumen/sync'
 */
    const syncForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sync.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoElectricasController::sync
 * @see app/Http/Controllers/MetradoElectricasController.php:48
 * @route '/costos/{costoProject}/metrado-electricas/resumen/sync'
 */
        syncForm.post = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sync.url(args, options),
            method: 'post',
        })
    
    sync.form = syncForm
const resumen = {
    update: Object.assign(update, update),
sync: Object.assign(sync, sync),
}

export default resumen