import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
export const show = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/proyectos/{project}/presupuesto/consolidado/snapshot',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
show.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { project: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                }

    return show.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
show.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
show.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
    const showForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        showForm.get = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PresupuestoController::show
 * @see app/Http/Controllers/PresupuestoController.php:278
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        showForm.head = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
export const save = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: save.url(args, options),
    method: 'patch',
})

save.definition = {
    methods: ["patch"],
    url: '/costos/proyectos/{project}/presupuesto/consolidado/snapshot',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
save.url = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { project: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { project: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    project: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        project: typeof args.project === 'object'
                ? args.project.id
                : args.project,
                }

    return save.definition.url
            .replace('{project}', parsedArgs.project.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
save.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: save.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
    const saveForm = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: save.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PresupuestoController::save
 * @see app/Http/Controllers/PresupuestoController.php:306
 * @route '/costos/proyectos/{project}/presupuesto/consolidado/snapshot'
 */
        saveForm.patch = (args: { project: number | { id: number } } | [project: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: save.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    save.form = saveForm
const snapshot = {
    show: Object.assign(show, show),
save: Object.assign(save, save),
}

export default snapshot