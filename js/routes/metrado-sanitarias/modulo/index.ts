import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
export const show = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
show.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduloNumero: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduloNumero: args.moduloNumero,
                }

    return show.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
show.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
show.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const showForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        showForm.get = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:62
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        showForm.head = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MetradoSanitariasController::update
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
export const update = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::update
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
update.url = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    costoProject: args[0],
                    moduloNumero: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        costoProject: typeof args.costoProject === 'object'
                ? args.costoProject.id
                : args.costoProject,
                                moduloNumero: args.moduloNumero,
                }

    return update.definition.url
            .replace('{costoProject}', parsedArgs.costoProject.toString())
            .replace('{moduloNumero}', parsedArgs.moduloNumero.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MetradoSanitariasController::update
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
update.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::update
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
    const updateForm = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::update
 * @see app/Http/Controllers/MetradoSanitariasController.php:67
 * @route '/{costoProject}/metrado-sanitarias/modulo/{moduloNumero}'
 */
        updateForm.patch = (args: { costoProject: number | { id: number }, moduloNumero: string | number } | [costoProject: number | { id: number }, moduloNumero: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const modulo = {
    show: Object.assign(show, show),
update: Object.assign(update, update),
}

export default modulo