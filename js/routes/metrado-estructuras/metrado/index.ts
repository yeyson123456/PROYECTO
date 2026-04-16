import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
export const show = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-estructuras/metrado',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
show.url = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: args.costoProject,
                }

    return show.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
show.get = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
show.head = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
    const showForm = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        showForm.get = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoEstructurasController::show
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        showForm.head = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
export const update = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/{costoProject}/metrado-estructuras/metrado',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
update.url = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { costoProject: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: args.costoProject,
                }

    return update.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
update.patch = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoEstructurasController::update
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
    const updateForm = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/MetradoEstructurasController.php:0
 * @route '/{costoProject}/metrado-estructuras/metrado'
 */
        updateForm.patch = (args: { costoProject: string | number } | [costoProject: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const metrado = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default metrado