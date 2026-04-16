import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
export const show = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{costoProject}/metrado-sanitarias/resumen',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
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
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
show.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
show.head = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
    const showForm = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
 */
        showForm.get = (args: { costoProject: number | { id: number } } | [costoProject: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MetradoSanitariasController::show
 * @see app/Http/Controllers/MetradoSanitariasController.php:110
 * @route '/{costoProject}/metrado-sanitarias/resumen'
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
const resumen = {
    show: Object.assign(show, show),
}

export default resumen