import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
export const show = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/costos/{costoProject}/metrado-estructuras/config',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
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
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
show.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
show.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
    const showForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
        showForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:52
 * @route '/costos/{costoProject}/metrado-estructuras/config'
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
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
export const update = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/costos/{costoProject}/metrado-estructuras/config',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
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
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
 */
update.patch = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
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
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:57
 * @route '/costos/{costoProject}/metrado-estructuras/config'
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
const config = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default config